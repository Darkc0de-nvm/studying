import { test, expect } from '@playwright/test';

test('contex_menu', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // знаходимо лінк для тестування модального вікна (context menu)
    await page.getByRole('link', { name: 'Context Menu' }).click();
    // перевіряємо заголовок
    await expect(page.getByRole('heading')).toContainText('Context Menu');
    // перевіряємо чи є поле для тестування модального вікна (context menu)
    await expect(page.locator('#hot-spot')).toBeVisible();
    // переглядаємо модальне вікно та натискаємо "ок"
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.locator('#hot-spot').click({
        button: 'right'
    });
});