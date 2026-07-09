import{test,expect} from '@playwright/test'
test('multiple window handling in playwright', async({page, context})=>{
await page.goto("https://demo.guru99.com/popup.php");
const newWindow=context.waitForEvent('page')//starts waiting for a new tab which is not yet opened
const clickHereButton=await page.locator("//a[text()='Click Here']");
await clickHereButton.click();
const secondWindow= await newWindow; //wait untill the new page is fully created
await secondWindow.waitForLoadState() //wait for new window for loading
const email= await secondWindow.locator("//input[@name='emailid']")
await email.fill('babithababu')
const submitButton= await secondWindow.locator("//input[@name='btnLogin']");
await submitButton.click()


})