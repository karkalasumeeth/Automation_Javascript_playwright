// Include playwright module
const {test, expect} = require('@playwright/test');
const { only } = require('node:test');

// Write a test
test('Iframes Test', async({page}) =>{
    // by role
    // Go to URL
    await page.goto('https://jqueryui.com/droppable/');
    const frames = page.frames();
    frames.forEach(frame => {
    console.log(frame.name());
    console.log(frame.url());
    });
    //iframe locator 
    const iframe=page.frameLocator('.demo-frame');
    // drag and drop action
    await iframe.locator('#draggable').dragTo(iframe.locator('#droppable'));
    await page.waitForTimeout(3000);



});