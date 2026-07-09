import{test,expect} from '@playwright/test'

test('static visual testing', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle'); 
    await expect(page).toHaveScreenshot('saucedemo.png',{
        threshold:0.02 , 
        maxDiffPixels:7500
    })
})

//static application of visual testing
//idle