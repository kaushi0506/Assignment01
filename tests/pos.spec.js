import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('mama gedhara yanavaa');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මම ගෙදර යනවා');
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('mata bath oonee. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මට බත් ඕනේ. ');
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.  ');
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' oya enavaanam mama balan innavaa.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' ඔය එනවානම් මම බලන් ඉන්නවා.  ');
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('    oyaata kohomadha? ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' ඔයාට කොහොමද? ');
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('        vahaama enna. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' වහාම එන්න.  ');
});


test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mama ehema karanavaa. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මම එහෙම කරනවා.');
});


test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mata udhavvak karanna puLuvandha? ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මට උදව්වක් කරන්න පුළුවන්ද?  ');
});


test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' hari, mama karannam. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' හරි, මම කරන්නම්.');
});


test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  mama ehema karannee naehae.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මම එහෙම කරන්නේ නැහැ.');
});


test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('      eeyi, ooka dhiyan.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('    ඒයි, ඕක දියන්.');
});


test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mama yanna hadhannee.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  මම යන්න හදන්නේ.    ');
});


test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  Zoom meeting ekak thiyennee. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  Zoom meeting එකක් තියෙන්නේ. ');
});


test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' api yamu.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' අපි යමු.  ');
});


test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' Zoom  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' Zoom ');
});


test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('Lamayi school yannee vaeen ekee.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('ළමයි school යන්නේ වෑන් එකේ.');
});


test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' ela machan! supiri!!  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('එල මචන්! සුපිරි!!    ');
});


test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' Rs. 5343');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  Rs. 5343');
});


test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  mama dhaen vaeda karanavaa.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මම දැන් වැඩ කරනවා. ');
});


test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' vahaama enna.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  වහාම එන්න.');
});


test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  hari hari');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('හරි හරි ');
});


test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mata eeka epaa.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මට ඒක එපා. ');
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' karuNaakaralaa mata podi udhavvak karanna puLuvandha?  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?  ');
});


test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mama heta enavaa. ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මම හෙට එනවා. ');
});

