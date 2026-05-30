//Javascript
//Tuổi của một người được tính dựa trên năm sinh của họ và năm hiện tại. 
// Trong bài tập này, bạn sẽ viết một hàm để tính tuổi dựa trên năm sinh được nhập vào. Biết công thức tính tuổi:
//Tuổi = Năm hiện tại - Năm sinh

import { test, expect } from "playwright/test";

function calculateAge(yearOfBirth: number) {
    const currentYear = new Date().getFullYear();

    if (yearOfBirth > currentYear) {
        console.log("Năm sinh không hợp lệ.");
        return;
    }

    const age = currentYear - yearOfBirth;
    console.log(`Tuổi của bạn là: ${age}`);
}

calculateAge(2005);
calculateAge(2028);
calculateAge(2026);


//Playwright

test('Todo page automation - ngày 18 tháng 9', async ({ page }) => {
    await test.step('Đi tới trang thực hành', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
    });

    // thêm vào 1 phần tử
    const initialTodoContent = "Xin chào, đây là bài thực hành ngày 18 tháng 9";
    await page.getByPlaceholder('Enter a new task').fill(initialTodoContent);
    await page.getByRole('button', { name: 'Add' }).click();

    const taskList = page.locator('#task-list');
    await expect(taskList.locator('li')).toHaveCount(1);

    // sửa lại phần tử vừa thêm
    const editedTodoContent = `${initialTodoContent} - phiên bản đã chỉnh sửa`;
    page.once('dialog', async dialog => {
        await dialog.accept(editedTodoContent);
    });
    await page.getByRole('button', { name: 'Edit' }).first().click();
    await expect(page.getByText(editedTodoContent)).toBeVisible();

    // xóa phần tử vừa sửa 
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(taskList.locator('li')).toHaveCount(0);



})