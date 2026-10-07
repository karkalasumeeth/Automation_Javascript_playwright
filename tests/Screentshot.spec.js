// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Take Screenshot in playwright', async({page}) =>{
    // Go to URL
    const { test, expect } = require('@playwright/test');
    await page.goto('https://playwright.dev/docs/intro');

    // Element screentshot
    await page.locator('#introduction').first().screenshot({path: 'tests/Screenshots/getting-started.png'});
    await expect(page).toHaveURL('https://playwright.dev/');
    await page.locator('#introduction').first().screenshot({path: 'tests/Screenshots/getting-started.png', fullPage: true});
    // page screenshot
    await page.screenshot({path: 'tests/Screenshots/page.png'});
    // Full page screenshot
    await page.screenshot({path: 'tests/Screenshots/full-page.png', fullPage: true});



    

});