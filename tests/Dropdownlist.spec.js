// Include playwright module
const {test, expect} = require('@playwright/test');
const { only } = require('node:test');

// Write a test
test('Dropdownlist Test', async({page}) =>{
    // by role
    // Go to URL
    const { test, expect } = require('@playwright/test');
    await page.goto('https://practice.expandtesting.com/dropdown');
    const dropdownlist=page.locator('#dropdown');
    // By visible text (label)
    await dropdownlist.selectOption({ label: 'Option 1' });
    // await dropdownlist.selectOption('1');
    await page.waitForTimeout(3000);
    // By value
    await dropdownlist.selectOption('2');
    await page.waitForTimeout(3000);
    // By index
    await dropdownlist.selectOption({ index: 1 });
    await page.waitForTimeout(3000);
  

   

});