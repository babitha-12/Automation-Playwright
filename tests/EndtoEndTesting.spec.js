import{test,expect} from '@playwright/test'

const data=require('../Utils/LoginCredentials.json')

test('End to End to testing', async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle');

const userNameValue=data.username 
const passwordValue=data.password
//const userName=await page.locator('#user-name'); 
//await userName.fill(userNameValue);
await page.fill('#user-name11','standard_user');  //alternate way


const password=await page.locator("//input[@id='password']"); 
await password.fill(passwordValue);

const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

const addtoCartButtonforLabsBackpack=  await page.locator('#add-to-cart-sauce-labs-backpack')
await addtoCartButtonforLabsBackpack.click();

const cartButton=await page.locator('.shopping_cart_badge')
await cartButton.click()

const checkoutButton= await page.locator('#checkout')
await checkoutButton.click()

const firstNameTextbox=await page.locator('#first-name')
await firstNameTextbox.fill('babitha');

const LastNameTextbox=await page.locator('#last-name')
await LastNameTextbox.fill('babu');

const postalCodeTextbox= await page.locator('#postal-code')
await postalCodeTextbox.fill('1234');

const continueButton= await page.locator('#continue')
await continueButton.click()

const finishButton= await page.locator('#finish')
await finishButton.click()

const thankyoutitle= await page.locator('.complete-header')
await expect(thankyoutitle).toHaveText('Thank you for your order!')
})