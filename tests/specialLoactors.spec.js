const {test} = require('@playwright/test');



test('Playwright special Locators', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByPlaceholder('Password').fill("krishna108");
    await page.getByRole("button", {name:"Submit"}).click();
    await page.getByText(' The Form has been submitted successfully!.').isVisible();
    await page.getByRole('link', {name: 'Shop'}).click();

    //filter elements using filter method

    //click on add to cart for Nokia Edge product
await page.locator('app-card').filter({hasText:'Nokia Edge'}).getByRole('button').click()

})