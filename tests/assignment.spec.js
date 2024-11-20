const {test,expect} = require('@playwright/test');

test.only('Shopping Web App E2E scenario', async({page})=>{
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

    //script to add Iphone 13 pro to cart

    const products = await page.locator('.card-body');
    const count = await products.count();
    
    for(let i=0;i<count;i++){
        if(await products.nth(i).locator('b').textContent() === 'IPHONE 13 PRO'){
            //add to cart by searching element with text-only
            await products.nth(i).locator("text= Add to Cart").click();  //searching the element based on text only once initial search is done
            // await products.nth(i).locator("//button[contains(text(),' Add To Cart')]").click();
            break;
        }
    }
    await page.locator(`[routerlink*='cart']`).click();
    //wait for an element as AUTO - WAITING feature is not enabled for isVisible method
    await page.locator('button:has-text("Buy")').waitFor();
    //psuedo class usage with text for searching element
    const bool = await page.locator('h3:has-text("IPHONE 13 PRO")').isVisible();

    expect(bool).toBeTruthy();

    await page.locator('button:has-text("Checkout")').click();
    await page.locator('[placeholder*="Country"]').pressSequentially('Ind');
    
    //selecting dropdown value after checking desired option exists
    await page.locator('.ta-results').waitFor();
    const dropdown =  page.locator('.ta-item');
    const optionsCount = await dropdown.count();

    for(let i =0; i<optionsCount;i++){

        const text = await dropdown.nth(i).textContent();

        if(text.trim() === 'India'){
            dropdown.nth(i).click();
            break;
        }
    }

    await page.pause();

})