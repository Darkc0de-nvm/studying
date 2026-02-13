import { test, expect } from '@playwright/test';

test('add/dell', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    // створюємо 3 кнопки
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    // перевіряємо чи кнопок 5
    const deleteButtons = page.locator('#elements button').filter({ hasText: 'Delete' });
    await expect(deleteButtons).toHaveCount(5);
    // одну кнопку видаляємо
    await page.getByRole('button', { name: 'Delete' }).nth(1).click();
    // перевіряємо чи кнопок стало 4
    const deleteButtons2 = page.locator('#elements button').filter({ hasText: 'Delete' });
    await expect(deleteButtons2).toHaveCount(4);
    await page.goto('https://the-internet.herokuapp.com/');
});