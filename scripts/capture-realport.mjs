/* Captures the four RealPort screenshots for the case study gallery. */
import { chromium } from "playwright";

const OUT = "public/realport";
const BASE = "https://realport-six.vercel.app";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1360, height: 900 }, deviceScaleFactor: 2 });

async function clickStep(name) {
  await page.locator("button", { hasText: name }).first().click();
  await page.waitForTimeout(1200);
}

try {
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.locator('input[type="checkbox"]').first().check();
  await page.getByRole("button", { name: /agree and continue/i }).click();
  await page.waitForTimeout(1500);

  /* 01 — upload screen with the required-documents guide */
  await page.screenshot({ path: `${OUT}/01-upload.png` });
  console.log("captured 01-upload");

  /* Open the fixture drawer and see what's inside */
  await page.locator("summary", { hasText: /sample fixture/i }).click();
  await page.waitForTimeout(800);
  const fixtureButtons = page.locator("details button");
  const n = await fixtureButtons.count();
  const labels = [];
  for (let i = 0; i < Math.min(n, 30); i++) labels.push(await fixtureButtons.nth(i).innerText());
  console.log(`fixture drawer: ${n} buttons:`, JSON.stringify(labels.slice(0, 30)));

  /* Load a representative set: application summary + pay stubs + letters */
  const want = [/application/i, /pay stub/i, /employment/i, /benefit|award/i];
  let loaded = 0;
  for (const re of want) {
    const btn = page.locator("details button", { hasText: re }).first();
    if (await btn.count()) {
      const label = await btn.innerText();
      await btn.click();
      loaded++;
      console.log("loaded fixture:", label.replace(/\n/g, " | "));
      await page.waitForTimeout(4000);
    }
  }
  if (loaded === 0 && n > 0) {
    for (let i = 0; i < Math.min(n, 4); i++) {
      await fixtureButtons.nth(i).click();
      await page.waitForTimeout(4000);
    }
  }

  /* Wait for processing to finish and step 3 to unlock */
  for (let i = 0; i < 30; i++) {
    const step3 = await page.locator("button", { hasText: "Review your details" }).first().innerText();
    if (!/locked/i.test(step3)) break;
    await page.waitForTimeout(2000);
  }

  /* 02 — review with evidence boxes */
  await clickStep("Review your details");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${OUT}/02-review.png` });
  console.log("captured 02-review");

  /* Confirm everything: click every "Looks correct" / confirm control until gone */
  for (let round = 0; round < 25; round++) {
    const looks = page.locator("button", { hasText: /looks correct/i });
    const confirms = page.locator("button", { hasText: /^confirm/i });
    if ((await looks.count()) > 0) {
      await looks.first().click();
      await page.waitForTimeout(600);
    } else if ((await confirms.count()) > 0) {
      await confirms.first().click();
      await page.waitForTimeout(400);
    } else break;
  }

  /* 03 — results */
  const step4 = await page.locator("button", { hasText: "Your results" }).first().innerText();
  console.log("step4 state:", step4.replace(/\n/g, " | "));
  await clickStep("Your results");
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT}/03-results.png` });
  console.log("captured 03-results");

  /* 04 — discover map */
  await clickStep("Discover housing");
  await page.waitForTimeout(6000);
  await page.screenshot({ path: `${OUT}/04-discover.png` });
  console.log("captured 04-discover");
} catch (e) {
  console.error("FAILED:", e.message);
  await page.screenshot({ path: `${OUT}/debug-error.png` });
  console.log("main text:", (await page.locator("main").innerText()).slice(0, 1600));
} finally {
  await browser.close();
}
