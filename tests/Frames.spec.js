import{test,expect} from '@playwright/test'

test('Frames handling', async({page})=>{
     await page.goto("https://demoqa.com/frames")
    const  frame1 = page.frameLocator('#frame1')  //frameLocator used to locate frames
    console.log(await frame1.locator('#sampleHeading').textContent())  //textContent()- to fetech the text
    await expect(frame1.locator('#sampleHeading')).toHaveText('This is a sample page')
})