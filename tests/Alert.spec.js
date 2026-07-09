import{test,expect} from '@playwright/test'

test('Alerts in playwright', async({page})=>{

await page.goto("https://selenium.qabible.in/javascript-alert.php");
page.on('dialog',async dialog=>{   //listener creation , listener handles alerts in playwright
expect(dialog.message()).toBe('I am a Javascript alert box!')
await dialog.accept() //to click ok button on alert popup
const clickMeButton= page.locator('.btn btn-success').click()
          })
})
/*in the above test , through ui we may need to click clickme to get alert popup , 
but no need to use click me button to get alerts in tests, listener will handle click me , 
like all the alert popup will be checked and will check for alert popup having the text -I am a Javascript alert box!
here automation is fast so we cant see the alert popup.
assertion used here to confirm that from multiple alerts we have clicked ok in our expected alerts */

//ok == accep() , cancel= dismiss 
