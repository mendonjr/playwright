const {test} = require('@playwright/test')
const {expect} = require('@playwright/test')

test('First Playwright Test', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitles = await page.locator('.card-body a');
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    //css selector
    await userName.fill('rahulshettyacademy');
    await passWord.fill('learning');
    // await page.locator(`[value='user']`).click()
    // await page.locator('.modal-body>p').textContent()
    // await expect(page.locator('.modal-body>p')).toContainText('Proceed?')
    // await page.locator('#okayBtn').click()
    await page.locator(`#signInBtn`).click();
//    await expect(page.locator(`[style*='block']`)).toContainText('Incorrect');
    // console.log(await cardTitles.nth(0).textContent())
 expect(await cardTitles.nth(0).textContent()).toEqual('iphone X')

//    const allTitles = cardTitles.allTextContents();
//    console.log(allTitles)
})


test.only('UI controls', async ({ page }) => {
  const userName = page.locator('#username');
    const passWord = page.locator('#password');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const dropdown = await page.locator('select.form-control')
    await dropdown.selectOption('consult');     //desired element insde a option tag, if element inside label tag then we can use selectText()
    
    //radio button
    await page.locator('.checkmark').last().click();
    await page.locator('#okayBtn').click();


    await page.pause();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
