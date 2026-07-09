import{test,expect} from '@playwright/test'

test('Events handling', async({page})=>{
     await page.goto("https://selenium.qabible.in/")
     const othersOption =page.locator('#others').hover()
})