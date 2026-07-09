import{test,expect} from '@playwright/test'

test('waits in playwright', async({page})=>{
await page.goto("https://selenium.qabible.in/simple-form-demo.php");
await page.waitForLoadState('networkidle');
const messageField=await page.locator('#single-input-field'); 
await messageField.fill("babitha");
})
