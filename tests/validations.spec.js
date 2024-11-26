const { test, expect } = require('@playwright/test')

test('First Playwright Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.on('dialog', dialog => dialog.dismiss());

    await page.locator('#confirmbtn').click()

    await page.locator('#mousehover').hover();
    await page.getByText('Reload').click()

})