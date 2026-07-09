import{test,expect} from '@playwright/test'

const data=require('../Utils/LoginCredentials.json')   //import file--stored the data inside the json file to variable data 

test('data driven login with single User', async({page})=>{

await page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle');

const userNameValue=data.username //stored username from json file (stored into data) to usernamevalue
const passwordValue=data.password

const userName=await page.locator('#user-name'); 
await userName.fill(userNameValue);
const password=await page.locator("//input[@id='password']"); 
await password.fill(passwordValue);

const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
})