import { test, expect } from '@playwright/test';

test('login_form', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    // вводимо невалідні дані
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('benitto');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperBenitto227');
    // логінимось
    await page.getByRole('button', { name: ' Login' }).click();
    // бачимо помилку
    await expect(page.locator('#flash')).toContainText('Your username is invalid! ×');
    // вводимо валідні дані
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    // логінимось
    await page.getByRole('button', { name: ' Login' }).click();
    // бачимо повідомлення про успіх
    await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
    // розлогінюємось і переходимо за лінком
    await page.getByRole('link', { name: 'Logout' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Elemental Selenium' }).click();
    const page1 = await page1Promise;
});