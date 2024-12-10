const { test, expect, request } = require('@playwright/test');

const loginPayLoad = { userEmail: "prasad108@gmail.com", userPassword: "Hare@krishna108" };
let token;
test.beforeAll('Api test', async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: loginPayLoad
        }
    )
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJSON = await loginResponse.json()        //convert JSON into JS Object
 token = loginResponseJSON.token;
console.log(token);
})

test('Shopping Web App E2E scenario with Special Locators', async ({ page }) => {
    
    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token);
    await page.goto('https://rahulshettyacademy.com/client');
    // await page.locator('.card b').first().waitFor()
    await page.locator('.card').filter({hasText: 'ZARA COAT 3'}).getByRole('button', {name:' Add To Cart'}).click();
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click();

    // await page.locator('button:has-text("Buy")').waitFor();
    await page.pause();
    expect(await page.getByText('ZARA COAT 3')).toBeVisible();

    await page.getByText("Checkout").click();
    await page.getByPlaceholder('Country').pressSequentially('Ind');
    await page.getByRole('button', {name:'India'}).nth(1).click();

    await page.getByText('Place Order ').click()  

    expect(await page.getByText(" Thankyou for the order. ")).toBeVisible();

})