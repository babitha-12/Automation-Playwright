const{Given,When,Then}=require('@cucumber/cucumber') 
const{chromium}=require('playwright') 
const {expect}= require('@playwright/test')

let browser,page

Given('the user is on the login screen',async function() {
    browser=await chromium.launch({headless:false}); 
    page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
})

When('the user needs to login with username {string} and password {string}', async function(username,password) {

   await page.fill('#user-name',username);  //username provided in feature
   await page.fill('#password',password); //password provided in feature
})


When('on user the clicks the login button', async function() { 
await page.click('#login-button')
})


Then('the succesfull inventory page should be displayed', async function() {
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

Then('the user wants to add Sauce Labs Backpack to cart',async function() {
 await page.locator('#add-to-cart-sauce-labs-backpack').click()
})
Then('the user wants to add Sauce Labs Bike Light to cart',async function() {
  await page.locator('#add-to-cart-sauce-labs-bike-light').click()   
})

Then('the user needs to confirm that the cart badge is showing as count {string}',async function(cartCount) {
await expect(page.locator('.shopping_cart_badge')).toHaveText("2")
await browser.close() 
})