import { test, expect } from "@playwright/test";

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test("Custom Browser Check", async ({ page }) => {
  const response = await page.goto("https://www.learnmutiny.io/");
  expect(response?.status()).toBeLessThan(400);

  // get screenshot
  await page.screenshot({ path: "screenshot.jpg" });

  const responseTwo = await page.goto(
    "https://www.learnmutiny.io/developers/27ff01"
  );
  expect(responseTwo?.status()).toBeLessThan(400);

  // get screenshot of developer page
  await page.screenshot({ path: "screenshot2.jpg" });
});
