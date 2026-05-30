//Javascript
// hàm trimspce trong chuỗi 


function trimSpaces(str: string) {
    // trim: bỏ khoảng trắng 2 đầu chuỗi
    // split(' '): tách chuỗi thành mảng các chuỗi con dựa trên khoảng trắng
    // filter(word => word !== ''): lọc bỏ các chuỗi con rỗng
    // join(' '): nối các chuỗi con thành chuỗi con cách nhau bằng khoảng trắng

    return str.trim().split(' ').filter(word => word !== '').join(' ');
}
console.log(trimSpaces("   Xin   chào   mọi người   "))


// Playwright
import { test } from '@playwright/test';

test.beforeEach(async ({ context }) => {
    await context.grantPermissions(['geolocation', 'camera', 'microphone'], {
        origin: 'https://material.playwrightvn.com'
    });
})
test('2024-09-25', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
})