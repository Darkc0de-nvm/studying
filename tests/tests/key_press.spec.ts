import { test, expect } from '@playwright/test';

test('key_press', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // переходимо на сторінку для тестування
    await page.getByRole('link', { name: 'Key Presses' }).click();
    // натискаємо клавіші та звіряємо як сервіс їх розпізнає
    await page.locator('#target').click();
    await page.locator('#target').press('p');
    await expect(page.locator('#result')).toContainText('You entered: P');
    await page.locator('#target').click();
    await page.locator('#target').press('Backspace');
    await expect(page.locator('#result')).toContainText('You entered: BACK_SPACE');
    await page.locator('#target').click();
    await page.locator('#target').press('d');
    await expect(page.locator('#result')).toContainText('You entered: D');
    // повертаємось назад
    await page.goto('https://the-internet.herokuapp.com/');
});