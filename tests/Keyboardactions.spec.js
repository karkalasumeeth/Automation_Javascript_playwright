// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Keyboard actions in playwright', async({page}) =>{
    // Go to URL
    const { test, expect } = require('@playwright/test');
    await page.goto('https://www.google.com/');

    // Keyboard actions
    // press enter key
    // await page.getByRole('combobox', {name: "Search"}).fill('playwright test automation');
    // await page.getByRole('combobox', {name: "Search"}).press('Enter');


    // press control+a and delete
    // await page.getByRole('combobox', {name: "Search"}).fill('playwright test automation');
    // await page.getByRole('combobox', {name: "Search"}).press('Control+A');
    // await page.getByRole('combobox', {name: "Search"}).press('Delete');

    // press tab key
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(6000);

})
