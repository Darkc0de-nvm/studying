import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // переходимо за лінком щоб затестити елемент UI
    await page.getByRole('link', { name: 'JQuery UI Menus' }).click();
    // перевіряємо чи правильна це сторінка
    await expect(page.getByRole('heading')).toContainText('JQueryUI - Menu');
    // перевіряємо що тут є потрібний нам елемент і натискаємо
    await expect(page.getByText('Disabled Should not see this Enabled Downloads PDF CSV Excel Back to JQuery UI')).toBeVisible();
    await page.getByRole('link', { name: 'Enabled' }).click();
    // переходимо на сторінку без меню
    await page.getByRole('link', { name: 'Back to JQuery UI' }).click();
    // переходимо за лінком на офіційний сайт
    await page.getByRole('link', { name: 'JQuery UI' }).click();
    // перевіряємо чи видно лого
    await expect(page.locator('#logo-events').getByRole('link', { name: 'jQuery UI' })).toBeVisible();
});