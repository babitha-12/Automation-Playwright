import{test,expect} from '@playwright/test'

const {getCellData}=require('../Utils/ExcelRowColumn') 

test('login using excel read row/column wise', async({page})=>{

    const userName=getCellData(2,1)
    const password=getCellData(2,2)
await page.goto('https://www.saucedemo.com/')

await page.fill('#user-name',userName)

await page.fill("//input[@id='password']",password)

const loginButton=await page.locator('#login-button')
await loginButton.click();
})