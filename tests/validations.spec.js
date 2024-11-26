const { test, expect } = require('@playwright/test')

test('Handling Frames', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.on('dialog', dialog => dialog.dismiss());

    await page.locator('#confirmbtn').click()

    await page.locator('#mousehover').hover();
    await page.getByText('Reload').click();

   const framesPage = await page.frameLocator('#courses-iframe');

   await framesPage.locator("li a[href*='lifetime-access']:visible").click();
   const text = await framesPage.locator('.text h2').textContent();
   console.log(text.split(' ')[1]);

//    const subsCount = await framesPage.locator('.text span').textContent();
//    expect(subsCount).toEqual('13,522');

})