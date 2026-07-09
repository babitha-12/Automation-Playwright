import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPageMain'//LoginPage is class name given in LoginPageMain.ts

//with POM

test('User login using valid credential using TypeScript', async({page})=>{
    const loginPageObject=new LoginPage(page)  //creating object=loginPageObject, LoginPage is class name
    await loginPageObject.goto();  //calling goto from page file
    await loginPageObject.validCredentialLogin('standard_user','secret_sauce') //passing parameters
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
})
