//Javascript
// Tổng các phần tử là số trong mảng

function sumArray(arr: any[]) {
    const onlyNumbers = []

    arr.forEach(num => {
        if (typeof num === 'number') {
            onlyNumbers.push(num);
        }
    });

    if (onlyNumbers.length === 0) {
        return 'Mảng rỗng';
    }
    return onlyNumbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray(["a", "b", 10]));



// Playwright 
import { test, expect } from '@playwright/test';
test("Automation with API - Create user", async ({ request }) => {
    const username = 'tan9';
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            userName: username,
            password: 'Test@123',
        }
    });

    const bodyJson = await response.json();
    console.log(bodyJson);

    expect(response.status()).toEqual(201);
    expect(bodyJson.username).toEqual(username);
})