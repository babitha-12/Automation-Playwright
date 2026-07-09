//my explanation

//in inventi=ory feature file
/*here count 6 means after login the page has 6 products that is given as 6, so if logged
then 6 count will be thr or else no 0 count */


import { Given,When,Then,Before,BeforeAll,After,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium} from "playwright";
import assert from "assert";
import { expect } from "@playwright/test"

//in earlier tc const {} used , const or import can be used either method

setDefaultTimeout(30000); //default timer of cucumber is 5seconds. but here we set timeout to 30000, so dfeault time 5 s will change to 30000s i,e 30s. giviing this if any page loading is taking more than 5s tc may fail so to avoid breakage we are giving 30s
let browser; //global variable declaration. inside different hooks these are used so globally declared instead of locally
let context;
let page;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false, slowMo: 300 })
    //oro scenario execute cheyumbol multiple browsers varum , apo agane varathe erikan vendi beforeall
    //koduthekune, apo alam scenario front oru tavana browser launch avum . 
    //headless: false = for viewing browser userinterface that is browser run avunathe kanuwan , true anel kanila 
    //slowmo:300 == 300milliseconds , to wait inbtween   each playwright actions. 
    //like username click cheythu , enter cheythu , password click , filled etcc.. inbtwn 300ms wait
})

AfterAll(async function () {
    if (browser) {
        await browser.close(); //to close browser after all scenarios
    }
})

Before(async function () {
    context = await browser.newContext()
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    /* before each scenario new page will load*/
})

After(async function (scenario) {
    try {
        if (scenario.result.status === Status.FAILED) { //screenshot capturing if tc fails.
            const screenShot = await page.screenShot()
            // here screenshot cant be seen manually, it will be internally saved into cucumber memory. 
            // like allure report we cant see in project directory
            this.attach(screenShot, 'image/png') //to save image screenshot in png format , this screenshot will be stored in cucumber memeory
        }
    }
    //any issue happens (fails) in  then from try screenshot will be taken. 
    //incase error occured then catch will work
    //screenshot steps il enthelum issue vanalee catch work akuu
    //try il mistake vanalee catch work akuu
    catch (err) {
        console.log('after hook error.', err.message)
        //in a scenario anything happens, screenshot will be captured, and if suppose any error occurs , then
        // then that error will be stored to err and this saved error will be print
    }
    //finally block will execute even if error occurs or not 

    finally {
        if (context) {
            await context.close(); //oro page oro context anuu , like 1scenario exeucte akumbol aa page context arikum close akune next next context
        }
    }
})

BeforeStep(async function (step) {
    console.log(`${step.pickleStep.text}`)
    //here before each step -user is on application page wil be displayed.
    // from feature file we have example- Given user is on application page , then with this
    //picklestep user is on application page wil be displayed. before each step
    //same after each step this will be displayed (below block)
})

AfterStep(async function (step) {
    console.log(`${step.pickleStep.text}`)
})



Given('user is on application login page', async function () {
    await page.goto('https://www.saucedemo.com/', {
        waitUntill: 'load', TIMEOUT: 30000
    })
})

When('user logs in with username {string} and password {string}', async function (username, password) {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button')
})

Then('user should see {string}', async function (result) {
    if (result === 'inventory page') {
        await page.waitForURL('**/inventory.html', {//url full mentioning not needed, partially can be mentioned
            TIMEOUT: '10000'
        })
    }
    else if (result === 'error message') {
        const error = await page.locator("//h3[@data-test='error']").textContent()
        assert.ok(error.includes('Epic sadface'))
    }

})

Then('inventory item count should be {string}', async function (count) {
    if (count === '0')
        return
    const items = await page.locator('.inventory_item').count()
    assert.strictEqual(items, Number(count))

})