import{test,expect} from '@playwright/test'


const {getTestData}=require('../Utils/Excel') //importing the function 
const loginData = getTestData()

test('login using excel read', async({page})=>{

    for(const user of loginData)  //loginData excel reads and saves data . so we need to iterate and get those datas
{       
await page.goto('https://www.saucedemo.com/')

await page.fill('#user-name',user.UserName); //UserName== excel header

await page.fill("//input[@id='password']",user.Password); 

const loginButton=await page.locator('#login-button');

await loginButton.click();
}
})