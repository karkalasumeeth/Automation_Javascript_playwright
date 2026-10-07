/// Include playwright module
const {test, expect} = require('@playwright/test');
const { only } = require('node:test');

// Write a test
test('Locators Test', async({page}) =>{
    // by role
    // Go to URL
    const { test, expect } = require('@playwright/test');
    await page.goto('https://playwright.dev/docs/intro');
    // await page.getByRole('link', { name: /Playwright logo/i }).click();
    await page.getByAltText('Playwright logo').first().click();
     await expect(page).toHaveURL('https://playwright.dev/');

});


test('Getbyrole Locator Test', async({page}) =>{
    await page.goto('https://www.amazon.com/');
    await page.getByRole('link', {name: "Today's Deals"}).isVisible();
    await page.getByRole('link', {name: "Today's Deals"}).click();
    await page.getByRole('button', {name: "Lowest Price in 365 Days"}).isVisible();
    await page.getByRole('button', {name: "Lowest Price in 365 Days"}).click();
    expect(page.url()).toContain('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb&bubble-id=Lowest%2520Price%2520in%2520365%2520Days');

});

test('getByLabel Locator Test', async({page}) =>{
    await page.goto('https://www.amazon.com/');
    await page.getByLabel('Search Amazon').fill('playwright test automation')
    await page.getByLabel('Search Amazon').press('Enter');
    await page.waitForTimeout(3000);
    await expect(page.locator('[aria-label="Web Automation Testing Using Playwright: End-to-end, API, accessibility, and visual testing using Playwright (English Edition)"]')).toBeVisible();
    

});

test('getByAltText Locator Test', async({page}) =>{
    await page.goto('https://www.amazon.com/');
    await page.getByAltText('Cooker').isVisible
    await page.getByAltText('Cooker').click(); 
    await page.waitForTimeout(3000);
    await page.getByAltText("Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Inc...").isVisible();
});

test('getByTestId Locator Test', async({page}) =>{

    await page.goto('https://www.amazon.com/');
    await page.getByRole('link', {name: "Today's Deals"}).isVisible();
    await page.getByRole('link', {name: "Today's Deals"}).click();
    await page.getByRole('button', {name: "Lowest Price in 365 Days"}).isVisible();
    await page.getByRole('button', {name: "Lowest Price in 365 Days"}).click();
    expect(page.url()).toContain('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb&bubble-id=Lowest%2520Price%2520in%2520365%2520Days');
    await expect(page.getByTestId('product-card-link')).toHaveCount(10);

});

test.only('getByText Locator Test', async({page}) =>{

    await page.goto('https://www.amazon.com/');
    await page.getByText('Get your game on').isVisible();
    await page.getByText('Get your game on').click();
    await page.waitForTimeout(3000);
    await expect(page.getByText("Sidefeel Women's Wide Leg Jeans High Waisted Stretchy Raw Hem Zimbaplatinum Denim Pant")).toBeVisible();    
}); 

    // // by label
    // await page.goto('https://www.google.com/');
    // await page.getByLabel('Search',{exact:true}).fill('api testing by testers talk');
    // await page.getByLabel('Search',{exact:true}).press('Enter');

    // // by alt text
    // await page.goto('https://github.com/BakkappaN');
    // await page.getByAltText("View BakkappaN's full-sized avatar").click();

    // // by test id
    // await page.goto('https://github.com/login');
    // await page.getByTestId('username').fill('testers talk');

    // // by text
    // await page.goto('https://www.youtube.com/@testerstalk');
    // await page.getByText('Cypress by Testers Talk').click();

    // // by title
    // await page.goto('https://www.youtube.com/@testerstalk');
    // await page.getByTitle('Cypress by Testers Talk').click();

    // // // by xpath
    // await page.goto('https://www.youtube.com/');
    // await page.locator("//*[@name='search_query']").click();
    // await page.locator("//*[@name='search_query']").fill('javascript by testers talk');
    // await page.locator("//*[@name='search_query']").press('Enter');

    // // // by css selector
    // await page.goto('https://www.youtube.com/');
    // await page.locator("css=[name='search_query']").click();
    // await page.locator("css=[name='search_query']").fill('javascript by testers talk');
    // await page.locator("css=[name='search_query']").press('Enter');

    // await page.waitForTimeout(3000);

    
// })

    
