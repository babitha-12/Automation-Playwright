/*

without POM

import{test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})
test('User login using valid credential', async({page})=>{
const userName=await page.locator('#user-name'); 
await userName.fill('standard_user');
const password=await page.locator("//input[@id='password']"); 
await password.fill('secret_sauce');
const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
})

test.only('User login using invalid credential', async({page})=>{
const userName=await page.locator('#user-name'); 
await userName.fill('standard_user1');
const password=await page.locator("//input[@id='password']"); 
await password.fill('secret_sauce1');
const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
})

*/

//with POM
import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';  //LoginPage inside {} is classname in pages file

test.only('User login using valid credential', async({page})=>{
    const loginPage=new LoginPage(page)  //creating object=loginPage , LoginPage is class name
    await loginPage.goto();  //calling goto from page file
    await loginPage.validCredentialLogin()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
})