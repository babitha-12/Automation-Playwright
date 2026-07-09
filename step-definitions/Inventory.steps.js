import { Given,When,Then,Before,BeforeAll,After,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium} from "playwright";
import assert from "assert";
import { expect } from "@playwright/test"

setDefaultTimeout(30000) //cucumber default timeout=5 sec,30000=30sec-to avoid timeout errors
let browser; //global variable decalaration
let context;
let page;
BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slowMo:300});  //browser user interface->headless:false
    
})
AfterAll(async function(){
    if(browser){
        await browser.close()
}
})

Before(async function(){
    context=await browser.newContext()
    page=await browser.newPage()//loading new page before every scenarios
})

After(async function(scenario){
  try{ //code that might throw an exception
    if(Scenario.result.status===status.FAILED){
        const screenshot=await page.screenshot()
        this.attach(screenshot,'image/png')//screenshot will save internaly-will store in cucumber memory
    }
  }
 catch(err){ //code to handle the exception
    console.log('After hook error',err.message) //err-errors from try will store in this variable
 }

finally{ //it will work if error is there or not
    if(context){
        await context.close()
    }
}

})

BeforeStep(async function(step){
    console.log(`${step.pickleStep.text}`) 
})

AfterStep(async function(step){
    console.log(`${step.pickleStep.text}`)
})

Given('User is on application login page',async function() {
    await page.goto("https://www.saucedemo.com/",{
        waitUntil:'load',timeout:30000
    })
    
})

When('user logs in with username {string} and password {string}',async function(username,password){
    await page.fill('#user-name',username)
    await page.fill('#password',password)
    await page.click('#login-button')

})

Then('user should see result {string}',async function(result){
    if(result==='inventory page'){
        await page.waitForURL('**/inventory.html',{
            timeout:10000
            
        })
    }
    else if(result==='error message'){
        const error=await page.locator("//h3[@data-test='error']").textContent()
        assert.ok(error.includes('Epic sadface'))
    }
})

Then('Inventory item count should be count {string}',async function(count){
    if(count==='0')
        return
    const items= await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(count))
})