import { test, expect } from '@playwright/test';

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea').first();
  await inputbox.fill('');

  // Type like a real user
  await inputbox.type('mama gedhara yanavaa', { delay: 50 });

  // Wait until Sinhala characters appear somewhere on the page
  await expect
    .poll(async () => {
      const bodyText = await page.locator('body').innerText();
      return /[අ-ෆ]/.test(bodyText); // Sinhala Unicode block
    }, { timeout: 5000 })
    .toBeTruthy();
});
