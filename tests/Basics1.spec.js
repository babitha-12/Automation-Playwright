import{test,expect} from '@playwright/test' //official test runner for playwright. if it is not given test wont get run. test is for test run and expect is for assertion
 // for supporting assertions in test case we need to use expect 
 /*test('browser context  playwright test',async({browser})=>{ //browser initialisation. here browser is a fixture. in single quotes we can provide anything this is like giivng description of the test run 
    const context = await browser.newContext() //context is a variable created , to launch browser we use browser.newContext()
    const page=await context.newPage()// after browser launching we need a page so for loading a tab we are providing this newpage() used
    await page.goto("https://selenium.qabible.in/") //to launch url
})
*/

/*to run 
npx playwright test tests/Basics.spec.js  -- used to run the test 
npx playwright test tests/Basics.spec.js --headed   -- used to view the executed browsers
*/


test.only('page playwright test', async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const title=await page.title() //title is a method
    //console.log(title)
    await expect(page).toHaveTitle("Obsqura Testing")

})
