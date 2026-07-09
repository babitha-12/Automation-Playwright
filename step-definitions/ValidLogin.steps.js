const { Given, When, Then } = require('@cucumber/cucumber') // mainly given when then are imported
const { chromium } = require('playwright') //to mention in which browser its need to be executed
const assert = require('assert') //since we are using assertion , note- not used on giving in line 27 assert(await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')), assert shows failure on removin it got passed so assert not used 
const { expect } = require('@playwright/test')

let browser, page

Given('the user is on the login page', async function () {
    browser = await chromium.launch({ headless: false }); //headless provided to get the browser during run time
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
})

When('the user enters username {string} and password {string}', async function (username, password) {

    await page.fill('#user-name', username);  //username provided in feature
    await page.fill('#password', password); //password provided in feature
})


When('clicks the login button', async function () { //changed to when since at time of execution And is not defined error shown. doubt whether these keywords should match with feature file?
    await page.click('#login-button')
})


Then('the inventory page should be displayed', async function () {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await browser.close() //to close the browser
})