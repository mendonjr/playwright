const { test } = require('@playwright/test')
const { expect } = require('@playwright/test')

test('First Playwright Test', async ({ browser }) => {

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


test('UI controls', async ({ page }) => {
  const userName = page.locator('#username');
  const passWord = page.locator('#password');
  const blink = page.locator("[href*='documents-request']");
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await userName.fill('rahulshettyacademy');
  await passWord.fill('learning');
  const dropdown = await page.locator('select.form-control')
  await dropdown.selectOption('consult');     //desired element insde a option tag, if element inside label tag then we can use selectText()



  //radio button
  await page.locator('.checkmark').last().click();
  await page.locator('#okayBtn').click();
  expect(await page.locator('.checkmark').last()).toBeChecked();
  await page.locator('#terms').click();
  await page.locator('#terms').uncheck()
  expect(await page.locator('#terms').isChecked()).toBeFalsy()
  // await page.locator('#signInBtn').click();

  await expect(blink).toHaveAttribute('class', 'blinkingText')

  // await page.pause();
});

test.only('Child Window Handle', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentlink = page.locator("[href*='documents-request']");
  // const page2 = context.waitForEvent('page'); //wait for new page to open

  // documentlink.click(); //open new page
  //the below steps to run in parallel , asynchronously

  const [newPage] = await Promise.all(
    [context.waitForEvent('page'),  //listen for new page
    documentlink.click()
    ]
  )
  const text = await newPage.locator('.red').textContent();
  console.log(text);
  const email = text.split('@');
  const act = email[1].split(" w")[0];
  console.log(act);
  await page.locator('#username').fill(act); //grabbing text from child window and entering in parent window
  await page.pause();
});
