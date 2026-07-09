import{test,expect} from '@playwright/test'

test('visual testing using banner hiding', async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    await page.waitForLoadState('networkidle');  //network idle means it will wait after loading for sometime
    await page.locator('.carousel').evaluate((Element)=>{
        Element.style.display='none'
    }) 
    //on inspecting there are 2 classes with carousel so taking it 
    //the above lines are used to compare the screenshot with baseline image
    await page.waitForTimeout(1000)
    await expect(page).toHaveScreenshot('obsqura.png',{
        threshold:0.02 , //2%
        maxDiffPixels:1800
    })
})

//dynamic application of visual testing
//moving banner