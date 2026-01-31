import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('Mma gdr ynwa');
  await expect(outputbox).toBeVisible('ම්ම ග්ඩ්‍ර ය්නwඅ');
});


test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('MAMA');
  await expect(outputbox).toBeVisible('MAMA');
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('Mama office gihin deploy kara, merge fail una.');
  await expect(outputbox).toBeVisible('මම office ගිහින් deploy කර, merge fail උන.');
});


test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('gr10');
  await expect(outputbox).toBeVisible('gr10');
});


test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('file2gmail.com');
  await expect(outputbox).toBeVisible('file2gmail.com');
});


test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('hffjdd');
  await expect(outputbox).toBeVisible('හ්ෆ්ෆ්ජ්ඩ්ඩ්');
});


test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('!!! ??? .... ');
  await expect(outputbox).toBeVisible('!!! ??? .... ');
});


test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('I want to see');
  await expect(outputbox).toBeVisible('ඉ want to සේ');
});


test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('mamagedharayanavaa ');
  await expect(outputbox).toBeVisible('mamagedharayanavaa ');
});


test('Neg_Fun_00010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80');

  await inputbox.fill('%*###');
  await expect(outputbox).toBeVisible('%###');
});


