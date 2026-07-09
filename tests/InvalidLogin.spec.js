import{test,expect} from '@playwright/test'

const dataSet=require('../Utils/ParameterisedLogin.json')   //import file--stored the data inside the json file to variable data 
for(const data of dataSet)   //loop created
test(`invalid login for ${data.username} ${data.password}`, async({page})=>{  // back tick

await page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle');

const userName=await page.locator('#user-name'); 
await userName.fill(data.username);
const password=await page.locator("//input[@id='password']"); 
await password.fill(data.password);

const loginButton=await page.locator('#login-button');
await loginButton.click();
})
//for loop is not having curly braces- since for loop is only having one statement test so this is fine