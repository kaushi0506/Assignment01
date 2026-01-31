import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('api gedhara innavaa');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('අපි ගෙදර ඉන්නවා');
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('mata nidhaa ganna oone ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මට නිදා ගන්න ඕනෙ');
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' oyata Sliit yanna onedha?? ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('ඔයට ස්ලීට් යන්න ඔනෙද?? ');
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('Rs. 1500 ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  Rs. 1500');
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('    oyaata dhaen kohomadha? ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  ඔයාට දැන් කොහොමද?  ');
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('         karunaakara mata samaavanna');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('   කරුනාකර මට සමාවන්න ');
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
    await inputbox.fill(' ado machan supiri ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' ado මචන් සුපිරි');
});


test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' Rs. 400');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  Rs. 400');
});


test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  mama  vaeda karanavaa.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මම වැඩ කරනවා. ');
});


test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' ikmanin enna.');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('  ඉක්මනින් එන්න.');
});


test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  hari hari');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('හරි  ');
});


test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('  eeka epaa.  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' ඒක එපා. ');
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' mata  udhavvak karanna puLuvandha?  ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText(' මට උදව්වක් කරන්න පුළුවන්ද?  ');
});


test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' api 7.30pm ta yamu');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('අපි 7.30pm ට යමු');
});

test('Pos_Fun_0025', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill(' dhaanavaassword eka hariyata dhaanna');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('දානවාස්සwඔර්ඩ් එක හරියට දාන්න');
});


test('Pos_Fun_0026', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('mama meeting ekata join evanavaa');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('මම meeting එකට join එවනවා');
});

test('Pos_Fun_0027', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/ ');

    const inputbox = page.locator('textarea');
    await inputbox.fill('adha 2026-01-31 ');
    const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    await expect(outputbox).toContainText('අද 2026-01-31');
});
