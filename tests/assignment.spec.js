const {test,expect} = require('@playwright/test');

test.only('Shopping Web App Demo', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('prasad108@gmail.com');
    await page.locator('#userPassword').fill('Hare@krishna108');
    await page.locator('#login').click();
    await page.screenshot({ path: 'screenshot.png' });

    // await page.waitForLoadState('networkidle');
    await page.locator('.card b').first().waitFor()
    const titles = await page.locator('.card b').allTextContents();
    console.log(titles);
    //grab title of first product

    expect(await page.locator('.card b').first().textContent()).toEqual('ZARA COAT 3')
})