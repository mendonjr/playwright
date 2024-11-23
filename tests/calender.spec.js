const {test, expect} = require('@playwright/test');


test('Calender Selection', async({page})=>{

        const year = "2024";
        const month = "9";
        const day = "12";
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
    await page.locator('//abbr[text()="'+day+'"]').click();


    const dayActual = await page.locator('//input[@name="day"]').getAttribute('value');
    const monthActual = await page.locator('//input[@name="month"]').getAttribute('value');
    const yearActual = await page.locator('//input[@name="year"]').getAttribute('value');

    expect(dayActual).toEqual(day);
    expect(monthActual).toEqual(month);
    expect(yearActual).toEqual(year);
})