"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useIoWorks } from "@/lib/useIoWorks";

type Ev = {
  delay: number;
  time: string;
  msg: string;
  type: "api" | "info" | "success" | "warning" | "error" | "recovery";
  nodes: string[];
  showData?: boolean;
  showError?: boolean;
};

type Scenario = {
  name: string;
  dataPanel: { raw: string; normalized: string };
  errorCard?: {
    code: string;
    category: string;
    severity: string;
    recovery: string;
    description: string;
    color: string;
  };
  events: Ev[];
};

/* Scenario data ported from the original FinConnect build. */
const SCENARIOS: Record<string, Scenario> = {
  happy: {
    name: "Happy path",
    dataPanel: {
      raw: '{\n  "account_id": "vzeNDwK7KQIm9",\n  "balances": {\n    "available": 100.00,\n    "current": 110.94,\n    "iso_currency_code": "USD"\n  },\n  "name": "Plaid Checking",\n  "subtype": "checking",\n  "type": "depository"\n}',
      normalized:
        '{\n  "id": "acc_a1b2c3d4",\n  "institution": "ins_chase",\n  "balance_cents": 11094,\n  "available_cents": 10000,\n  "currency": "USD",\n  "display_name": "Plaid Checking",\n  "category": "CHECKING",\n  "synced_at": "2024-01-15T12:00:05Z"\n}',
    },
    events: [
      { delay: 0, time: "12:00:01", msg: "POST /link/token/create", type: "api", nodes: ["client", "gateway"] },
      { delay: 800, time: "12:00:01", msg: "Forwarding to Plaid, creating link session", type: "info", nodes: ["gateway", "plaid"] },
      { delay: 1600, time: "12:00:02", msg: "User authenticated at Chase (sandbox)", type: "info", nodes: ["plaid"] },
      { delay: 2400, time: "12:00:03", msg: "POST /item/public_token/exchange", type: "api", nodes: ["client", "gateway"] },
      { delay: 3200, time: "12:00:03", msg: "Access token stored, item_abc123 created", type: "info", nodes: ["gateway", "plaid"], showData: true },
      { delay: 4000, time: "12:00:04", msg: "Webhook: INITIAL_UPDATE received", type: "info", nodes: ["webhook", "plaid"] },
      { delay: 4800, time: "12:00:05", msg: "Syncing 3 accounts, 47 transactions", type: "info", nodes: ["plaid", "datastore"], showData: true },
      { delay: 5600, time: "12:00:05", msg: "Sync complete. Data normalized and stored", type: "success", nodes: ["datastore"] },
    ],
  },
  tokenExpired: {
    name: "Token expired",
    dataPanel: {
      raw: '{\n  "error_type": "ITEM_ERROR",\n  "error_code": "ITEM_LOGIN_REQUIRED",\n  "error_message": "the login details\n    of this item have changed",\n  "display_message": null,\n  "request_id": "HNTDNrA8F1shFEz"\n}',
      normalized:
        '{\n  "error_id": "err_7x9k2m",\n  "code": "TOKEN_EXPIRED",\n  "severity": "HIGH",\n  "recovery": "RE_AUTH_REQUIRED",\n  "item_id": "item_abc123",\n  "institution": "ins_chase",\n  "action": "trigger_link_update",\n  "user_notified": true\n}',
    },
    errorCard: {
      code: "ITEM_LOGIN_REQUIRED",
      category: "Token lifecycle",
      severity: "high",
      recovery: "Trigger re-authentication via Link update mode",
      description: "Access token invalidated by institution",
      color: "#DC2626",
    },
    events: [
      { delay: 0, time: "12:00:01", msg: "Scheduled sync triggered for item_abc123", type: "info", nodes: ["gateway"] },
      { delay: 800, time: "12:00:01", msg: "GET /accounts/get (item_abc123)", type: "api", nodes: ["gateway", "plaid"] },
      { delay: 1600, time: "12:00:02", msg: "ITEM_LOGIN_REQUIRED: token invalidated", type: "error", nodes: ["plaid"], showData: true, showError: true },
      { delay: 2400, time: "12:00:02", msg: "Error taxonomy: token expiry, re-auth required", type: "error", nodes: ["plaid"] },
      { delay: 3200, time: "12:00:03", msg: 'Notification: "Re-link your Chase account"', type: "info", nodes: ["plaid", "notification"] },
      { delay: 4800, time: "12:00:08", msg: "User completed re-authentication via Link", type: "info", nodes: ["client", "gateway"] },
      { delay: 5600, time: "12:00:09", msg: "New access_token stored. Old token purged", type: "recovery", nodes: ["gateway", "plaid", "datastore"] },
      { delay: 7200, time: "12:00:10", msg: "Sync resumed. Recovery complete", type: "success", nodes: ["datastore"] },
    ],
  },
  institutionDown: {
    name: "Institution down",
    dataPanel: {
      raw: '{\n  "error_type": "INSTITUTION_ERROR",\n  "error_code":\n    "INSTITUTION_NOT_RESPONDING",\n  "error_message": "the financial\n    institution is not responding",\n  "status": {\n    "status": "INSTITUTION_DOWN",\n    "last_update":\n      "2024-01-15T10:00:00Z"\n  }\n}',
      normalized:
        '{\n  "error_id": "err_9m3nq1",\n  "code": "PROVIDER_UNAVAILABLE",\n  "severity": "MEDIUM",\n  "recovery": "CACHE_AND_RETRY",\n  "institution": "ins_chase",\n  "cache_age_minutes": 120,\n  "retry_strategy":\n    "exponential_backoff",\n  "next_retry_at":\n    "2024-01-15T12:00:35Z"\n}',
    },
    errorCard: {
      code: "INSTITUTION_NOT_RESPONDING",
      category: "Provider reliability",
      severity: "medium",
      recovery: "Serve cached data plus exponential backoff retry",
      description: "Institution temporarily unavailable",
      color: "#A16207",
    },
    events: [
      { delay: 0, time: "12:00:01", msg: "Transaction sync triggered", type: "info", nodes: ["gateway"] },
      { delay: 800, time: "12:00:01", msg: "GET /transactions/sync", type: "api", nodes: ["gateway", "plaid"] },
      { delay: 1600, time: "12:00:02", msg: "INSTITUTION_NOT_RESPONDING (Chase)", type: "warning", nodes: ["plaid"], showData: true, showError: true },
      { delay: 2400, time: "12:00:02", msg: "Fallback: serving cached data (last sync 2h ago)", type: "info", nodes: ["datastore"] },
      { delay: 3200, time: "12:00:05", msg: "Polling retry #1: institution still down", type: "warning", nodes: ["plaid"] },
      { delay: 4800, time: "12:00:05", msg: "Exponential backoff: next retry in 30s", type: "info", nodes: ["plaid"] },
      { delay: 6400, time: "12:00:35", msg: "Polling retry #2: institution recovered", type: "recovery", nodes: ["plaid"] },
      { delay: 8000, time: "12:00:36", msg: "Full sync completed. Cache refreshed", type: "success", nodes: ["plaid", "datastore"] },
    ],
  },
  partialSync: {
    name: "Partial sync",
    dataPanel: {
      raw: '{\n  "transactions": [\n    /* 12 of 47 */\n  ],\n  "total_transactions": 47,\n  "has_more": true,\n  "next_cursor":\n    "eyJhY2NvdW50X2..."\n}',
      normalized:
        '{\n  "sync_id": "sync_4kd82n",\n  "status": "PARTIAL",\n  "progress": {\n    "received": 12,\n    "total": 47,\n    "percentage": 25.5\n  },\n  "cursor": "eyJhY2NvdW50X2...",\n  "strategy":\n    "cursor_pagination"\n}',
    },
    errorCard: {
      code: "SYNC_INCOMPLETE",
      category: "Data integrity",
      severity: "medium",
      recovery: "Cursor-based pagination retry with backoff",
      description: "Incomplete transaction batch received",
      color: "#A16207",
    },
    events: [
      { delay: 0, time: "12:00:01", msg: "Initial sync triggered for new item", type: "info", nodes: ["gateway", "plaid"] },
      { delay: 800, time: "12:00:01", msg: "GET /accounts/get, 3 accounts synced", type: "api", nodes: ["plaid", "datastore"] },
      { delay: 1600, time: "12:00:02", msg: "GET /transactions/sync", type: "api", nodes: ["plaid"] },
      { delay: 2400, time: "12:00:02", msg: "Partial response: 12/47 transactions received", type: "warning", nodes: ["plaid"], showData: true, showError: true },
      { delay: 3200, time: "12:00:04", msg: "Retry #1 with cursor (backoff: 2s)", type: "info", nodes: ["plaid"] },
      { delay: 4800, time: "12:00:06", msg: "+20 transactions received (32/47)", type: "info", nodes: ["plaid", "datastore"] },
      { delay: 5600, time: "12:00:10", msg: "Retry #2 with updated cursor (backoff: 4s)", type: "info", nodes: ["plaid"] },
      { delay: 7200, time: "12:00:14", msg: "All 47 transactions synced across 3 retries", type: "success", nodes: ["plaid", "datastore"] },
    ],
  },
  consentRevoked: {
    name: "Consent revoked",
    dataPanel: {
      raw: '{\n  "webhook_type": "ITEM",\n  "webhook_code":\n    "PENDING_DISCONNECT",\n  "item_id":\n    "eVBnVMp7zdTJLkRNr33",\n  "consent_expiration_time":\n    "2024-01-15T12:00:00Z",\n  "environment": "production"\n}',
      normalized:
        '{\n  "event_id": "evt_p2x9r7",\n  "type": "CONSENT_REVOKED",\n  "item_id": "item_abc123",\n  "action": "DATA_PURGE",\n  "purge_scope": {\n    "accounts": 3,\n    "transactions": 47,\n    "tokens": 1\n  },\n  "audit_status":\n    "SOC2_VERIFIED"\n}',
    },
    errorCard: {
      code: "PENDING_DISCONNECT",
      category: "Consent management",
      severity: "critical",
      recovery: "SOC2-compliant data purge protocol",
      description: "User revoked data access consent",
      color: "#DC2626",
    },
    events: [
      { delay: 0, time: "12:00:01", msg: "Webhook received: PENDING_DISCONNECT", type: "info", nodes: ["webhook"] },
      { delay: 800, time: "12:00:01", msg: "User revoked consent at Chase portal", type: "error", nodes: ["webhook", "plaid"], showError: true },
      { delay: 1600, time: "12:00:02", msg: "Data purge protocol initiated", type: "info", nodes: ["plaid"], showData: true },
      { delay: 2400, time: "12:00:02", msg: "Purging: 3 accounts, 47 transactions, 1 token", type: "warning", nodes: ["plaid", "datastore"] },
      { delay: 3200, time: "12:00:03", msg: "Audit log: purge_complete, item_abc123", type: "info", nodes: ["datastore"] },
      { delay: 4000, time: "12:00:03", msg: 'Notification: "Chase account disconnected"', type: "info", nodes: ["notification"] },
      { delay: 5600, time: "12:00:04", msg: "Item removed. SOC2-compliant purge verified", type: "success", nodes: ["datastore"] },
    ],
  },
};

const TYPE_COLOR: Record<Ev["type"], string> = {
  api: "#4644C7",
  info: "#17171C",
  success: "#4644C7",
  warning: "#A16207",
  error: "#DC2626",
  recovery: "#5E5CE6",
};

const TYPE_ICON: Record<Ev["type"], string> = {
  api: "→",
  info: "→",
  success: "✓",
  warning: "⚠",
  error: "✗",
  recovery: "↺",
};

const MAIN_NODES = [
  { id: "client", label: "Client app", sub: "web · mobile" },
  { id: "gateway", label: "API gateway", sub: "auth · rate limit" },
  { id: "plaid", label: "Plaid service", sub: "link · sync" },
  { id: "datastore", label: "Data store", sub: "postgres · redis" },
];

const SUPPORT_NODES = [
  { id: "webhook", label: "Webhook processor", sub: "plaid events" },
  { id: "notification", label: "Notification service", sub: "email · push" },
];

function ArchNode({
  label,
  sub,
  active,
}: {
  label: string;
  sub: string;
  active: boolean;
}) {
  return (
    <div
      className="flex-1 rounded-[10px] border px-2 py-2.5 text-center transition-all duration-300"
      style={{
        borderColor: active ? "#5E5CE6" : "#E8E8EE",
        background: active ? "#EEEEFC" : "#FFFFFF",
      }}
    >
      <p className="text-[11.5px] font-medium" style={{ color: active ? "#4644C7" : "#17171C" }}>
        {label}
      </p>
      <p className="mt-0.5 font-mono text-[8.5px] text-faint">{sub}</p>
    </div>
  );
}

function Connector({ active }: { active: boolean }) {
  return (
    <div className="relative h-[2px] w-6 shrink-0 self-center" style={{ background: active ? "#C9C8F2" : "#E8E8EE" }}>
      {active && (
        <span
          className="absolute -top-[2px] h-[6px] w-[6px] rounded-full bg-accent"
          style={{ animation: "kfConnDot 0.7s linear infinite" }}
        />
      )}
    </div>
  );
}

export default function FinConnectSim() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inView = useInView(wrapRef, { once: true, margin: "-120px" });
  const ioOk = useIoWorks();
  const reduced = useReducedMotion();

  const [scenarioKey, setScenarioKey] = useState<string | null>(null);
  const [events, setEvents] = useState<Ev[]>([]);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [showData, setShowData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const list = timeouts.current;
    return () => list.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [events]);

  function play(key: string) {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setEvents([]);
    setActiveNodes([]);
    setShowData(false);
    setShowError(false);
    setResolved(false);
    setScenarioKey(key);
    const sc = SCENARIOS[key];

    if (reduced) {
      /* Reduced motion: show the finished state immediately. */
      setEvents(sc.events);
      setActiveNodes(sc.events[sc.events.length - 1].nodes);
      setShowData(true);
      if (sc.errorCard) setShowError(true);
      setResolved(true);
      setPlaying(false);
      return;
    }

    setPlaying(true);
    sc.events.forEach((ev, i) => {
      const t = setTimeout(() => {
        setEvents((prev) => [...prev, ev]);
        setActiveNodes(ev.nodes);
        if (ev.showData) setShowData(true);
        if (ev.showError) setShowError(true);
        if (ev.type === "success") setResolved(true);
        if (i === sc.events.length - 1) setTimeout(() => setPlaying(false), 400);
      }, ev.delay);
      timeouts.current.push(t);
    });
  }

  useEffect(() => {
    if ((inView || ioOk === false) && !started) {
      setStarted(true);
      const t = setTimeout(() => play("happy"), 600);
      timeouts.current.push(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, ioOk, started]);

  /* Watchdog: if in-view detection never fires, run the demo anyway. */
  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => {
      setStarted(true);
      play("happy");
    }, 2200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const sc = scenarioKey ? SCENARIOS[scenarioKey] : null;
  const supportActive = (id: string) => activeNodes.includes(id);

  return (
    <div ref={wrapRef} className="anim card-std overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <p className="font-display text-[15px] font-bold text-ink" style={{ letterSpacing: "-0.015em" }}>
          FinConnect
          <span className="ml-2 font-mono text-[10px] font-normal lowercase text-faint">
            open banking simulation
          </span>
        </p>
        <p className="flex items-center gap-1.5 font-mono text-[10.5px] lowercase text-deep">
          <span
            className="inline-block h-[6px] w-[6px] rounded-full bg-accent"
            style={playing ? { animation: "kfLivePulse 1.4s ease-in-out infinite" } : undefined}
          />
          {playing ? "running" : "system online"}
        </p>
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="mb-3 font-mono text-[9.5px] uppercase tracking-wider text-faint">
          Select a scenario
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(SCENARIOS).map(([key, s]) => {
            const on = scenarioKey === key;
            return (
              <button
                key={key}
                onClick={() => play(key)}
                disabled={playing && !on}
                className="rounded-full px-3.5 py-1.5 text-[11.5px] font-medium transition-all disabled:cursor-not-allowed disabled:opacity-40"
                style={
                  on
                    ? { background: "#5E5CE6", color: "#FFFFFF" }
                    : { border: "1px solid #E8E8EE", color: "#6E6E78", background: "#FFFFFF" }
                }
              >
                {s.name}
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 font-mono text-[10px] lowercase text-faint">
          try a failure scenario to see the error handling work
        </p>
      </div>

      <div className="border-b border-line px-5 py-5">
        <div className="flex items-stretch">
          {MAIN_NODES.map((n, i) => (
            <div key={n.id} className="flex flex-1 items-stretch">
              <ArchNode label={n.label} sub={n.sub} active={activeNodes.includes(n.id)} />
              {i < MAIN_NODES.length - 1 && (
                <Connector
                  active={activeNodes.includes(MAIN_NODES[i].id) && activeNodes.includes(MAIN_NODES[i + 1].id)}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-3 flex max-w-[420px] gap-4">
          {SUPPORT_NODES.map((n) => (
            <div key={n.id} className="flex-1">
              <ArchNode label={n.label} sub={n.sub} active={supportActive(n.id)} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid border-b border-line md:grid-cols-2">
        <div className="border-b border-line p-5 md:border-b-0 md:border-r">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[9.5px] uppercase tracking-wider text-faint">Event stream</p>
            <p className="font-mono text-[10px] text-faint">{events.length} events</p>
          </div>
          <div ref={logRef} className="max-h-[220px] overflow-y-auto">
            {events.length === 0 && (
              <p className="font-mono text-[11px] italic text-faint">Waiting for events...</p>
            )}
            {events.map((ev, i) => (
              <div
                key={`${scenarioKey}-${i}`}
                className="flex items-start gap-2 py-[3px]"
                style={{ animation: "kfEventIn 0.3s ease-out" }}
              >
                <span className="min-w-[52px] shrink-0 font-mono text-[10px] text-faint">{ev.time}</span>
                <span className="w-4 shrink-0 text-center text-[11px]" style={{ color: TYPE_COLOR[ev.type] }}>
                  {TYPE_ICON[ev.type]}
                </span>
                <span
                  className="font-mono text-[11px] leading-normal"
                  style={{
                    color: TYPE_COLOR[ev.type],
                    fontWeight: ev.type === "success" || ev.type === "error" ? 600 : 400,
                  }}
                >
                  {ev.msg}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <p className="mb-3 font-mono text-[9.5px] uppercase tracking-wider text-faint">
            Raw → normalized
          </p>
          {!showData && (
            <p className="font-mono text-[11px] italic text-faint">
              Data appears as the simulation runs...
            </p>
          )}
          {showData && sc && (
            <div className="grid grid-cols-2 gap-2" style={{ animation: "kfFadeUp 0.4s ease-out" }}>
              <div className="max-h-[190px] overflow-y-auto rounded-lg bg-panel p-2.5">
                <pre className="whitespace-pre-wrap break-all font-mono text-[9.5px] leading-relaxed text-muted">
                  {sc.dataPanel.raw}
                </pre>
              </div>
              <div className="max-h-[190px] overflow-y-auto rounded-lg bg-panel p-2.5">
                <pre className="whitespace-pre-wrap break-all font-mono text-[9.5px] leading-relaxed text-deep">
                  {sc.dataPanel.normalized}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {showError && sc?.errorCard && (
        <div className="border-b border-line p-5" style={{ animation: "kfFadeUp 0.4s ease-out" }}>
          <p className="mb-3 font-mono text-[9.5px] uppercase tracking-wider text-faint">
            Error taxonomy
          </p>
          <div className="rounded-lg bg-panel px-4 py-3.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold" style={{ color: sc.errorCard.color }}>
                {sc.errorCard.code}
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide"
                style={
                  resolved
                    ? { background: "#EEEEFC", color: "#4644C7" }
                    : { background: `${sc.errorCard.color}14`, color: sc.errorCard.color }
                }
              >
                {resolved ? "resolved" : sc.errorCard.severity}
              </span>
            </div>
            <p className="text-[12px] text-ink">{sc.errorCard.description}</p>
            <p className="mt-1 text-[11.5px] text-muted">
              <span className="font-medium text-ink">Recovery: </span>
              {sc.errorCard.recovery}
            </p>
            <p className="mt-0.5 text-[11.5px] text-muted">
              <span className="font-medium text-ink">Category: </span>
              {sc.errorCard.category}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-5 py-3">
        <p className="font-mono text-[10px] lowercase text-faint">
          simulation powered by mock plaid api schemas
        </p>
        <p className="font-mono text-[10px] lowercase text-faint">500+ institutions supported</p>
      </div>
    </div>
  );
}
