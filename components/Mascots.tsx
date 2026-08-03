/* The five mascot vignettes. Pure SVG + CSS keyframes (defined in globals.css),
   wrapped in .anim so prefers-reduced-motion freezes them to a readable still. */

function Eye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r="1.5"
      fill="#FFFFFF"
      style={{ animation: "mkBlink 4.4s infinite", transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

export function OrganizerMascot({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 176" style={{ width }} className="anim" aria-label="A small illustrated girl tidying a bookshelf" role="img">
      <line x1="10" y1="160" x2="290" y2="160" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="36" y="28" width="4" height="132" fill="#17171C" />
      <rect x="192" y="28" width="4" height="132" fill="#17171C" />
      <rect x="36" y="28" width="160" height="4" fill="#17171C" />
      <rect x="36" y="64" width="160" height="4" fill="#17171C" />
      <rect x="36" y="118" width="160" height="4" fill="#17171C" />
      <rect x="48" y="40" width="10" height="24" fill="#5E5CE6" />
      <rect x="60" y="40" width="10" height="24" fill="#C9C8F2" />
      <rect x="72" y="40" width="10" height="24" fill="#17171C" />
      <rect x="84" y="40" width="10" height="24" fill="#8B8AF0" />
      <rect x="96" y="40" width="10" height="24" fill="#C9C8F2" />
      <rect x="108" y="40" width="10" height="24" fill="#5E5CE6" />
      <rect x="120" y="40" width="10" height="24" fill="#17171C" />
      <path d="M 166 40 C 162 32, 158 32, 158 38 C 152 32, 148 34, 152 40" fill="none" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 154 40 L 166 40 L 164 52 L 156 52 Z" fill="#EEEEFC" stroke="#C9C8F2" strokeWidth="1" />
      <g style={{ animation: "mkOb1 6s linear infinite", transformOrigin: "45px 118px" }}>
        <rect x="45" y="90" width="10" height="28" fill="#5E5CE6" />
      </g>
      <g style={{ animation: "mkOb2 6s linear infinite", transformOrigin: "74px 118px" }}>
        <rect x="64" y="90" width="10" height="28" fill="#17171C" />
      </g>
      <rect x="106" y="90" width="10" height="28" fill="#C9C8F2" />
      <rect x="118" y="90" width="10" height="28" fill="#8B8AF0" />
      <rect x="130" y="90" width="10" height="28" fill="#17171C" />
      <g style={{ animation: "mkOb3 6s linear infinite", transformOrigin: "149px 118px" }}>
        <rect x="144" y="90" width="10" height="28" fill="#5E5CE6" />
      </g>
      <rect x="158" y="90" width="10" height="28" fill="#C9C8F2" />
      <rect x="170" y="90" width="10" height="28" fill="#8B8AF0" />
      <g style={{ animation: "mkOspk 6s linear infinite", transformOrigin: "116px 80px" }}>
        <path d="M 116 74 L 116 82 M 112 78 L 120 78" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 140 70 L 140 76 M 137 73 L 143 73" stroke="#C9C8F2" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <g style={{ animation: "mkOgm 6s linear infinite" }}>
        <g style={{ animation: "mkOhop 6s linear infinite" }}>
          <circle cx="0" cy="104" r="10" fill="#17171C" />
          <circle cx="9" cy="97" r="5" fill="#17171C" />
          <Eye cx={-4.5} cy={106} />
          <path d="M -8 114 L 8 114 L 5 144 L -5 144 Z" fill="#5E5CE6" />
          <line x1="-3" y1="144" x2="-3" y2="158" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="3" y1="144" x2="3" y2="158" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="7" y1="120" x2="12" y2="134" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
          <g style={{ animation: "mkOga 6s linear infinite", transformOrigin: "-6px 120px" }}>
            <line x1="-6" y1="120" x2="-24" y2="112" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="-25" cy="111" r="2" fill="#17171C" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function MailerMascot({ width = 200 }: { width?: number }) {
  return (
    <svg viewBox="0 0 220 150" style={{ width }} className="anim" aria-label="A small illustrated girl mailing a letter" role="img">
      <line x1="8" y1="136" x2="212" y2="136" stroke="#E8E8EE" strokeWidth="1.5" />
      <line x1="158" y1="92" x2="158" y2="136" stroke="#17171C" strokeWidth="2.6" />
      <rect x="130" y="64" width="56" height="28" rx="8" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.8" />
      <rect x="136" y="72" width="5" height="12" rx="1" fill="#17171C" />
      <g style={{ animation: "mkMfl 6s linear infinite", transformOrigin: "178px 64px" }}>
        <line x1="178" y1="64" x2="178" y2="48" stroke="#17171C" strokeWidth="2" />
        <rect x="178" y="48" width="11" height="8" rx="1.5" fill="#5E5CE6" />
      </g>
      <g style={{ animation: "mkMev 6s linear infinite" }}>
        <rect x="134" y="73" width="15" height="10" rx="1.5" fill="#FFFFFF" stroke="#5E5CE6" strokeWidth="1.2" />
        <path d="M 134 74 L 141.5 79 L 149 74" fill="none" stroke="#5E5CE6" strokeWidth="1" />
      </g>
      <g style={{ animation: "mkMspk 6s linear infinite", transformOrigin: "158px 52px" }}>
        <path d="M 158 46 L 158 54 M 154 50 L 162 50" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 146 40 L 146 46 M 143 43 L 149 43" stroke="#C9C8F2" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <g style={{ animation: "mkMhop 6s linear infinite" }}>
        <circle cx="64" cy="82" r="9" fill="#17171C" />
        <circle cx="72" cy="76" r="4.5" fill="#17171C" />
        <Eye cx={60} cy={84} />
        <path d="M 57 92 L 71 92 L 68.5 118 L 59.5 118 Z" fill="#5E5CE6" />
        <line x1="61" y1="118" x2="61" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="67" y1="118" x2="67" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="56" y1="97" x2="51" y2="110" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <g style={{ animation: "mkMga 6s linear infinite", transformOrigin: "70px 97px" }}>
          <line x1="70" y1="97" x2="88" y2="92" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="89" cy="91" r="1.8" fill="#17171C" />
        </g>
      </g>
    </svg>
  );
}

export function PresenterMascot({ width = 200 }: { width?: number }) {
  return (
    <svg viewBox="0 0 220 150" style={{ width }} className="anim" aria-label="A small illustrated girl presenting a chart" role="img">
      <line x1="8" y1="136" x2="212" y2="136" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="34" y="30" width="94" height="68" rx="5" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.8" />
      <line x1="44" y1="98" x2="34" y2="136" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="118" y1="98" x2="128" y2="136" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
      <g style={{ animation: "mkPfa 7s linear infinite", transformOrigin: "81px 32px" }}>
        <g style={{ animation: "mkPb1 7s linear infinite", transformOrigin: "56px 88px" }}>
          <rect x="50" y="66" width="12" height="22" fill="#C9C8F2" />
        </g>
        <g style={{ animation: "mkPb2 7s linear infinite", transformOrigin: "76px 88px" }}>
          <rect x="70" y="56" width="12" height="32" fill="#8B8AF0" />
        </g>
        <g style={{ animation: "mkPb3 7s linear infinite", transformOrigin: "96px 88px" }}>
          <rect x="90" y="46" width="12" height="42" fill="#5E5CE6" />
        </g>
        <line x1="44" y1="88" x2="116" y2="88" stroke="#E8E8EE" strokeWidth="1.2" />
      </g>
      <g style={{ animation: "mkPfb 7s linear infinite", transformOrigin: "81px 32px" }}>
        <path
          d="M 46 84 L 64 70 L 82 76 L 102 54"
          fill="none"
          stroke="#5E5CE6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="80"
          style={{ animation: "mkPln 7s linear infinite" }}
        />
        <g style={{ animation: "mkPck 7s cubic-bezier(0.34,1.4,0.64,1) infinite", transformOrigin: "106px 48px" }}>
          <circle cx="106" cy="48" r="8" fill="#5E5CE6" />
          <path d="M 102 48 L 105 51 L 110 44.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <g style={{ animation: "mkPhop 7s linear infinite" }}>
        <circle cx="168" cy="82" r="9" fill="#17171C" />
        <circle cx="176" cy="76" r="4.5" fill="#17171C" />
        <Eye cx={164} cy={84} />
        <path d="M 161 92 L 175 92 L 172.5 118 L 163.5 118 Z" fill="#5E5CE6" />
        <line x1="165" y1="118" x2="165" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="171" y1="118" x2="171" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="174" y1="97" x2="179" y2="110" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <g style={{ animation: "mkPga 7s linear infinite", transformOrigin: "162px 97px" }}>
          <line x1="162" y1="97" x2="140" y2="90" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="139" cy="89" r="1.8" fill="#17171C" />
        </g>
      </g>
    </svg>
  );
}

export function SearcherMascot({ width = 240 }: { width?: number }) {
  return (
    <svg viewBox="0 0 240 150" style={{ width }} className="anim" aria-label="A small illustrated girl searching for the missing zero in 404" role="img">
      <line x1="8" y1="136" x2="232" y2="136" stroke="#E8E8EE" strokeWidth="1.5" />
      <text x="52" y="120" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="46" fontWeight="500" fill="#17171C">4</text>
      <circle cx="120" cy="103" r="18" fill="none" stroke="#C9C8F2" strokeWidth="2" strokeDasharray="5,5" style={{ animation: "mkNzr 2.4s ease-in-out infinite" }} />
      <text x="190" y="120" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="46" fontWeight="500" fill="#17171C">4</text>
      <g style={{ animation: "mkNbx1 7s linear infinite", transformOrigin: "78px 136px" }}>
        <rect x="78" y="120" width="26" height="16" rx="2" fill="#F4F4F8" stroke="#17171C" strokeWidth="1.4" />
        <line x1="78" y1="127" x2="104" y2="127" stroke="#17171C" strokeWidth="0.8" />
      </g>
      <g style={{ animation: "mkNbx2 7s linear infinite", transformOrigin: "146px 136px" }}>
        <rect x="146" y="120" width="26" height="16" rx="2" fill="#F4F4F8" stroke="#17171C" strokeWidth="1.4" />
        <line x1="146" y1="127" x2="172" y2="127" stroke="#17171C" strokeWidth="0.8" />
      </g>
      <g style={{ animation: "mkNgm 7s linear infinite" }}>
        <g style={{ animation: "mkNq 7s linear infinite", transformOrigin: "6px 58px" }}>
          <text x="6" y="64" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="17" fontWeight="500" fill="#5E5CE6">?</text>
        </g>
        <circle cx="0" cy="82" r="9" fill="#17171C" />
        <circle cx="8" cy="76" r="4.5" fill="#17171C" />
        <Eye cx={-4} cy={84} />
        <path d="M -7 92 L 7 92 L 4.5 118 L -4.5 118 Z" fill="#5E5CE6" />
        <line x1="-3" y1="118" x2="-3" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="3" y1="118" x2="3" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <g style={{ animation: "mkNga 7s linear infinite", transformOrigin: "-6px 97px" }}>
          <line x1="-6" y1="97" x2="-22" y2="103" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="-23" cy="104" r="1.8" fill="#17171C" />
        </g>
        <g style={{ animation: "mkNga2 7s linear infinite", transformOrigin: "6px 97px" }}>
          <line x1="6" y1="97" x2="20" y2="105" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="21" cy="106" r="1.8" fill="#17171C" />
        </g>
      </g>
    </svg>
  );
}

export function OperatorMascot({ width = 200 }: { width?: number }) {
  return (
    <svg viewBox="0 0 220 150" style={{ width }} className="anim" aria-label="A small illustrated girl fixing a red status light on a control panel" role="img">
      <line x1="8" y1="136" x2="212" y2="136" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="48" y="108" width="124" height="5" fill="#17171C" />
      <line x1="56" y1="113" x2="56" y2="136" stroke="#17171C" strokeWidth="2.2" />
      <line x1="164" y1="113" x2="164" y2="136" stroke="#17171C" strokeWidth="2.2" />
      <rect x="60" y="66" width="84" height="42" rx="6" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.8" />
      <circle cx="78" cy="87" r="5" fill="#C9C8F2" />
      <circle cx="100" cy="87" r="5" fill="#C9C8F2" />
      <circle cx="122" cy="87" r="5" style={{ animation: "mkOd3 7s linear infinite" }} />
      <circle cx="122" cy="87" r="9" fill="none" stroke="#DC2626" strokeWidth="1.2" style={{ animation: "mkOrng 7s linear infinite" }} />
      <g style={{ animation: "mkObtn 7s linear infinite" }}>
        <circle cx="154" cy="102" r="6" fill="#5E5CE6" />
      </g>
      <g style={{ animation: "mkOck 7s cubic-bezier(0.34,1.4,0.64,1) infinite", transformOrigin: "102px 52px" }}>
        <circle cx="102" cy="52" r="8" fill="#5E5CE6" />
        <path d="M 98 52 L 101 55 L 106 48.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g style={{ animation: "mkOhop2 7s linear infinite" }}>
        <circle cx="186" cy="82" r="9" fill="#17171C" />
        <circle cx="194" cy="76" r="4.5" fill="#17171C" />
        <Eye cx={182} cy={84} />
        <path d="M 179 92 L 193 92 L 190.5 118 L 181.5 118 Z" fill="#5E5CE6" />
        <line x1="183" y1="118" x2="183" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="189" y1="118" x2="189" y2="134" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="192" y1="97" x2="197" y2="110" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <g style={{ animation: "mkOga2 7s linear infinite", transformOrigin: "180px 97px" }}>
          <line x1="180" y1="97" x2="160" y2="100" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="159" cy="100" r="1.8" fill="#17171C" />
        </g>
      </g>
    </svg>
  );
}

export function MeditatingMascot({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 176" style={{ width }} className="anim" aria-label="The girl meditating cross-legged on a mat" role="img">
      <line x1="10" y1="160" x2="290" y2="160" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="105" y="150" width="90" height="7" rx="3.5" fill="#EEEEFC" stroke="#C9C8F2" strokeWidth="1" />
      <g style={{ animation: "mkLevit 6s ease-in-out infinite" }}>
        <g style={{ animation: "mkBreathe 4.5s ease-in-out infinite", transformOrigin: "150px 140px" }}>
          <circle cx="150" cy="86" r="10" fill="#17171C" />
          <circle cx="159" cy="78" r="5" fill="#17171C" />
          <line x1="143.5" y1="88" x2="147" y2="88" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="152" y1="88" x2="155.5" y2="88" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 138 100 L 162 100 L 170 138 L 130 138 Z" fill="#5E5CE6" />
          <path d="M 130 139 C 140 152, 160 152, 170 139" fill="none" stroke="#17171C" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="139" y1="108" x2="132" y2="136" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="161" y1="108" x2="168" y2="136" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="131.5" cy="137" r="2" fill="#17171C" />
          <circle cx="168.5" cy="137" r="2" fill="#17171C" />
        </g>
      </g>
      <g style={{ animation: "mkZen 5s ease-in-out infinite" }}>
        <path d="M 104 76 L 104 84 M 100 80 L 108 80" stroke="#C9C8F2" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g style={{ animation: "mkZen 5s ease-in-out infinite", animationDelay: "2.5s" }}>
        <path d="M 196 90 L 196 98 M 192 94 L 200 94" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function YogaMascot({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 176" style={{ width }} className="anim" aria-label="The girl balancing in a yoga tree pose" role="img">
      <line x1="10" y1="160" x2="290" y2="160" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="112" y="156" width="76" height="5" rx="2.5" fill="#EEEEFC" />
      <g style={{ animation: "mkSway 5.5s ease-in-out infinite", transformOrigin: "150px 158px" }}>
        <line x1="150" y1="128" x2="150" y2="157" stroke="#17171C" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 150 130 L 163 138 L 151 145" fill="none" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 141 102 L 159 102 L 156 130 L 144 130 Z" fill="#5E5CE6" />
        <circle cx="150" cy="88" r="10" fill="#17171C" />
        <circle cx="159" cy="80" r="5" fill="#17171C" />
        <circle cx="145" cy="90" r="1.5" fill="#FFFFFF" style={{ animation: "mkBlink 4.6s infinite", transformOrigin: "145px 90px" }} />
        <line x1="144" y1="106" x2="150" y2="66" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="156" y1="106" x2="150" y2="66" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="150" cy="63.5" r="2.5" fill="#17171C" />
      </g>
    </svg>
  );
}

export function TrumpetMascot({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 176" style={{ width }} className="anim" aria-label="The girl playing the trumpet with notes floating away" role="img">
      <line x1="10" y1="160" x2="290" y2="160" stroke="#E8E8EE" strokeWidth="1.5" />
      <circle cx="128" cy="92" r="10" fill="#17171C" />
      <circle cx="119" cy="84" r="5" fill="#17171C" />
      <circle cx="133" cy="94" r="1.5" fill="#FFFFFF" style={{ animation: "mkBlink 4.2s infinite", transformOrigin: "133px 94px" }} />
      <path d="M 120 104 L 136 104 L 133 140 L 123 140 Z" fill="#5E5CE6" />
      <line x1="125" y1="140" x2="125" y2="158" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="131" y1="140" x2="131" y2="158" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="136" y1="110" x2="150" y2="100" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="136" y1="118" x2="152" y2="104" stroke="#17171C" strokeWidth="2.4" strokeLinecap="round" />
      <g style={{ animation: "mkBob 1.6s ease-in-out infinite", transformOrigin: "140px 96px" }}>
        <line x1="138" y1="96" x2="166" y2="92" stroke="#17171C" strokeWidth="2.6" strokeLinecap="round" />
        <polygon points="166,85 180,92 166,99" fill="#17171C" />
        <line x1="150" y1="91" x2="150" y2="87" stroke="#17171C" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="156" y1="90.5" x2="156" y2="86.5" stroke="#17171C" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <text x="188" y="84" fontFamily="var(--font-jbmono)" fontSize="13" fill="#5E5CE6" style={{ animation: "mkNote 3.2s linear infinite" }}>♪</text>
      <text x="199" y="68" fontFamily="var(--font-jbmono)" fontSize="12" fill="#8B8AF0" style={{ animation: "mkNote 3.2s linear infinite", animationDelay: "1.1s" }}>♪</text>
      <text x="209" y="55" fontFamily="var(--font-jbmono)" fontSize="11" fill="#C9C8F2" style={{ animation: "mkNote 3.2s linear infinite", animationDelay: "2.2s" }}>♪</text>
    </svg>
  );
}

export function LaptopMascot({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 176" style={{ width }} className="anim" aria-label="The girl typing on a laptop at a desk" role="img">
      <line x1="10" y1="160" x2="290" y2="160" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="78" y="118" width="144" height="5" fill="#17171C" />
      <line x1="86" y1="123" x2="86" y2="158" stroke="#17171C" strokeWidth="2.2" />
      <line x1="214" y1="123" x2="214" y2="158" stroke="#17171C" strokeWidth="2.2" />
      <rect x="108" y="88" width="34" height="26" rx="3" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.6" />
      <polygon points="106,114 144,114 148,118 102,118" fill="#17171C" />
      <g style={{ animation: "mkCode 3s linear infinite", transformOrigin: "113px 95px" }}>
        <rect x="113" y="93.5" width="18" height="3" rx="1.5" fill="#C9C8F2" />
      </g>
      <g style={{ animation: "mkCode 3s linear infinite", animationDelay: "0.5s", transformOrigin: "113px 102px" }}>
        <rect x="113" y="100.5" width="14" height="3" rx="1.5" fill="#8B8AF0" />
      </g>
      <g style={{ animation: "mkCode 3s linear infinite", animationDelay: "1s", transformOrigin: "113px 109px" }}>
        <rect x="113" y="107.5" width="10" height="3" rx="1.5" fill="#C9C8F2" />
      </g>
      <g style={{ animation: "mkPop 6s cubic-bezier(0.34,1.4,0.64,1) infinite", transformOrigin: "136px 99px" }}>
        <circle cx="136" cy="99" r="5" fill="#5E5CE6" />
        <path d="M 133.5 99 L 135.5 101 L 139 96.5" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="172" cy="86" r="9" fill="#17171C" />
      <circle cx="181" cy="79" r="4.5" fill="#17171C" />
      <circle cx="167.5" cy="88" r="1.4" fill="#FFFFFF" style={{ animation: "mkBlink 5s infinite", transformOrigin: "167.5px 88px" }} />
      <path d="M 164 96 L 180 96 L 178 118 L 166 118 Z" fill="#5E5CE6" />
      <g style={{ animation: "mkType1 0.5s ease-in-out infinite", transformOrigin: "166px 102px" }}>
        <line x1="166" y1="102" x2="148" y2="113" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="147" cy="113.5" r="1.8" fill="#17171C" />
      </g>
      <g style={{ animation: "mkType2 0.5s ease-in-out infinite", transformOrigin: "169px 107px" }}>
        <line x1="169" y1="107" x2="153" y2="115" stroke="#17171C" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="152" cy="115.5" r="1.8" fill="#17171C" />
      </g>
      <rect x="90" y="108" width="11" height="10" rx="2" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.4" />
      <path d="M 101 110 C 104 110, 104 115, 101 115" fill="none" stroke="#17171C" strokeWidth="1.3" />
      <path d="M 95.5 104 C 93.5 100, 97.5 98, 95.5 94" fill="none" stroke="#C9C8F2" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "mkSteam 2.4s linear infinite" }} />
    </svg>
  );
}

export function DeskScene({ width = 320 }: { width?: number }) {
  return (
    <svg viewBox="0 0 360 210" style={{ width, maxWidth: "100%" }} className="anim" aria-label="The girl at her desk, a process flow on the monitor" role="img">
      <line x1="12" y1="190" x2="348" y2="190" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="52" y="148" width="256" height="5" fill="#17171C" />
      <line x1="62" y1="153" x2="62" y2="188" stroke="#17171C" strokeWidth="2.2" />
      <line x1="298" y1="153" x2="298" y2="188" stroke="#17171C" strokeWidth="2.2" />
      <rect x="85" y="58" width="130" height="86" rx="8" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.8" />
      <rect x="100" y="86" width="26" height="14" rx="4" fill="#F4F4F8" />
      <rect x="140" y="110" width="30" height="14" rx="4" fill="#FFFFFF" stroke="#5E5CE6" strokeWidth="1.2" />
      <rect x="178" y="86" width="24" height="14" rx="4" fill="#F4F4F8" />
      <path d="M 126 93 C 136 93, 130 117, 140 117" fill="none" stroke="#C9C8F2" strokeWidth="1.3" />
      <path d="M 170 117 C 178 117, 172 93, 178 93" fill="none" stroke="#C9C8F2" strokeWidth="1.3" />
      <circle r="2.6" fill="#5E5CE6" style={{ offsetPath: "path('M 126 93 C 136 93, 130 117, 140 117')", animation: "kfTravel 2.6s linear infinite" }} />
      <circle r="2.6" fill="#5E5CE6" style={{ offsetPath: "path('M 170 117 C 178 117, 172 93, 178 93')", animation: "kfTravel 2.6s linear infinite", animationDelay: "1.3s" }} />
      <circle cx="256" cy="106" r="10" fill="#17171C" />
      <circle cx="265" cy="98" r="5" fill="#17171C" />
      <circle cx="251" cy="108" r="1.5" fill="#FFFFFF" style={{ animation: "mkBlink 4.8s infinite", transformOrigin: "251px 108px" }} />
      <path d="M 247 117 L 265 117 L 263 148 L 249 148 Z" fill="#5E5CE6" />
      <g style={{ animation: "mkType1 0.5s ease-in-out infinite", transformOrigin: "249px 124px" }}>
        <line x1="249" y1="124" x2="230" y2="142" stroke="#17171C" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="229" cy="142.5" r="1.9" fill="#17171C" />
      </g>
      <g style={{ animation: "mkType2 0.5s ease-in-out infinite", transformOrigin: "252px 130px" }}>
        <line x1="252" y1="130" x2="235" y2="144" stroke="#17171C" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="234" cy="144.5" r="1.9" fill="#17171C" />
      </g>
      <rect x="222" y="143" width="28" height="5" rx="2.5" fill="#17171C" />
      <g style={{ animation: "mkLeaf 4.5s ease-in-out infinite", transformOrigin: "34px 148px" }}>
        <path d="M 34 148 C 27 138, 27 130, 33 124" fill="none" stroke="#8B8AF0" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 34 148 C 41 136, 43 130, 37 122" fill="none" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 34 148 C 34 138, 31 132, 34 126" fill="none" stroke="#C9C8F2" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <polygon points="25,148 43,148 40,162 28,162" fill="#EEEEFC" stroke="#C9C8F2" strokeWidth="1" />
      <rect x="278" y="136" width="11" height="11" rx="2" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.4" />
      <path d="M 289 138 C 292 138, 292 144, 289 144" fill="none" stroke="#17171C" strokeWidth="1.3" />
      <path d="M 283.5 132 C 281.5 128, 285.5 126, 283.5 122" fill="none" stroke="#C9C8F2" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "mkSteam 2.4s linear infinite" }} />
    </svg>
  );
}

export function StudioScene({ width = 520 }: { width?: number }) {
  return (
    <svg viewBox="0 0 560 220" style={{ width, maxWidth: "100%" }} className="anim" aria-label="Her studio: a bookshelf, a desk with a process flow on the monitor, a trumpet on the wall, and a rolled yoga mat" role="img">
      <line x1="12" y1="200" x2="548" y2="200" stroke="#E8E8EE" strokeWidth="1.5" />
      <rect x="28" y="70" width="4" height="130" fill="#17171C" />
      <rect x="148" y="70" width="4" height="130" fill="#17171C" />
      <rect x="28" y="70" width="124" height="4" fill="#17171C" />
      <rect x="28" y="115" width="124" height="4" fill="#17171C" />
      <rect x="28" y="160" width="124" height="4" fill="#17171C" />
      <rect x="38" y="92" width="9" height="23" fill="#5E5CE6" />
      <rect x="49" y="92" width="9" height="23" fill="#C9C8F2" />
      <rect x="60" y="92" width="9" height="23" fill="#17171C" />
      <rect x="71" y="92" width="9" height="23" fill="#8B8AF0" />
      <rect x="82" y="92" width="9" height="23" fill="#C9C8F2" />
      <rect x="93" y="92" width="9" height="23" fill="#5E5CE6" />
      <rect x="38" y="137" width="9" height="23" fill="#8B8AF0" />
      <rect x="49" y="137" width="9" height="23" fill="#17171C" />
      <rect x="60" y="137" width="9" height="23" fill="#C9C8F2" />
      <rect x="71" y="137" width="9" height="23" fill="#5E5CE6" />
      <path d="M 132 70 C 128 62, 124 62, 124 68 C 118 62, 114 64, 118 70" fill="none" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 120 70 L 132 70 L 130 80 L 122 80 Z" fill="#EEEEFC" stroke="#C9C8F2" strokeWidth="1" />
      <rect x="200" y="158" width="220" height="5" fill="#17171C" />
      <line x1="210" y1="163" x2="210" y2="198" stroke="#17171C" strokeWidth="2.2" />
      <line x1="410" y1="163" x2="410" y2="198" stroke="#17171C" strokeWidth="2.2" />
      <rect x="228" y="70" width="120" height="84" rx="8" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.8" />
      <rect x="242" y="96" width="24" height="13" rx="4" fill="#F4F4F8" />
      <rect x="278" y="120" width="28" height="13" rx="4" fill="#FFFFFF" stroke="#5E5CE6" strokeWidth="1.2" />
      <rect x="314" y="96" width="22" height="13" rx="4" fill="#F4F4F8" />
      <path d="M 266 102 C 274 102, 270 126, 278 126" fill="none" stroke="#C9C8F2" strokeWidth="1.3" />
      <path d="M 306 126 C 312 126, 308 102, 314 102" fill="none" stroke="#C9C8F2" strokeWidth="1.3" />
      <circle r="2.6" fill="#5E5CE6" style={{ offsetPath: "path('M 266 102 C 274 102, 270 126, 278 126')", animation: "kfTravel 2.6s linear infinite" }} />
      <circle cx="378" cy="116" r="10" fill="#17171C" />
      <circle cx="387" cy="108" r="5" fill="#17171C" />
      <circle cx="373" cy="118" r="1.5" fill="#FFFFFF" style={{ animation: "mkBlink 4.8s infinite", transformOrigin: "373px 118px" }} />
      <path d="M 369 127 L 387 127 L 385 158 L 371 158 Z" fill="#5E5CE6" />
      <g style={{ animation: "mkType1 0.5s ease-in-out infinite", transformOrigin: "371px 134px" }}>
        <line x1="371" y1="134" x2="352" y2="152" stroke="#17171C" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="351" cy="152.5" r="1.9" fill="#17171C" />
      </g>
      <g style={{ animation: "mkType2 0.5s ease-in-out infinite", transformOrigin: "374px 140px" }}>
        <line x1="374" y1="140" x2="357" y2="154" stroke="#17171C" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="356" cy="154.5" r="1.9" fill="#17171C" />
      </g>
      <rect x="344" y="153" width="28" height="5" rx="2.5" fill="#17171C" />
      <g transform="rotate(-8 508 184)">
        <rect x="500" y="150" width="16" height="50" rx="8" fill="#5E5CE6" />
        <circle cx="508" cy="158" r="4" fill="none" stroke="#EEEEFC" strokeWidth="1.6" />
      </g>
      <g style={{ animation: "mkLeaf 4.5s ease-in-out infinite", transformOrigin: "545px 188px" }}>
        <path d="M 545 188 C 538 178, 538 170, 544 164" fill="none" stroke="#8B8AF0" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 545 188 C 552 176, 554 170, 548 162" fill="none" stroke="#5E5CE6" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <polygon points="537,188 553,188 550,200 540,200" fill="#EEEEFC" stroke="#C9C8F2" strokeWidth="1" />
    </svg>
  );
}
