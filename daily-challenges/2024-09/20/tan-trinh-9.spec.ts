//Javascript
// Tìm sô nguyên lớn nhất trong mảng

const findLargestNumber = (arr: number[]): number => {
    if (arr.length === 0) {
        return 'Mảng rỗng';
    }

    let max = arr[0];

    arr.forEach((item, index) => {
        if (item > max) {
            max = item;
        }
    });

    return max;
}

console.log(findLargestNumber([1, 5, 2, 5, -4]));
console.log(findLargestNumber([1, 1]));
console.log(findLargestNumber([]));



//Playwright

import { test, expect } from '@playwright/test';

test('2024-09-20 mouse event', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');
    await page.getByText('Bài học 5: Xử lý mouse event').click();

    const clickLoc = page.locator("//div[@id='clickArea']");
    const clickCountLoc = page.locator("//p[@id='clickCount']");
    const clickTypeLoc = page.locator("//p[@id='clickType']");
    const modifierKeysLoc = page.locator("//p[@id='modifierKeys']");
    // thực hiện việc click đơn
    await clickLoc.click();

    await expect(clickCountLoc).toHaveText('Số lần nhấn: 1');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Không có');

    // thực hiện việc double click

    await clickLoc.dblclick();

    await expect(clickCountLoc).toHaveText('Số lần nhấn: 3');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đúp');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Không có');

    // thực hiện việc click đơn với phím shift và alt 

    await clickLoc.click({ modifiers: ['Shift', 'Alt'] });

    await expect(clickCountLoc).toHaveText('Số lần nhấn: 4');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Shift, Alt');
})

