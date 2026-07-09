import{test,expect} from '@playwright/test'
import { doesNotThrow } from 'node:assert'
import { lookup } from 'node:dns'

test('Test for Calendar validation in playwright', async({page})=>{

     await page.goto("https://selenium.qabible.in/date-picker.php")
     const enterDateTextbox=page.locator('#single-input-field')
     await enterDateTextbox.click()

     const targetYear=1997 //target year defined
     await expect(page.locator('.datepicker-dropdown')).toBeVisible() //wait for calender to appear
     const datepickerSwitch=page.locator('.datepicker-switch:visible') //element of header June2026
    /* :visible --multiple elements are present for this class, to find exact match is use :visible
     multiple elements present so it will return with no match which will cause error so providing visible , 
     it will take the first  match found 
     or can use n th function like
     const datepickerSwitch=page.locator('.datepicker-switch:visible').first()
     so first exact match will be taken*/
    
    await datepickerSwitch.click() //june2026 changed to 2026 on click
     await datepickerSwitch.click() /// 2020-2029 came
    // so this can be given in a loop

let attempts=10 //decade selection 24-34 steps. allowed or given attempt is 10
while(attempts--){
     const decadeText=await datepickerSwitch.innerText() //decadeText means --in calander 2020-2029 that text 
     const startYear=parseInt(decadeText.split('-')[0].trim()) //to get start year from 2020-2029
     if(targetYear>=startYear && targetYear<=startYear+9)
     {
          break
     }
     await page.locator('.prev:visible').click() //left arrow
    
}
await page.locator('.year:visible').filter({hasText:'1997'}).click()//selecting year
await page.locator('.month:visible').filter({hasText:'Sep'}).click() //selecting month
await page.locator('.day:not(.old):not(.new)',{hasText:/^3$/}).click()//old and new class will not be taken. selecting date
await page.locator('#button-one').click() //click show date button
const showDateText= await page.locator('#message-one') //assertion
await expect(showDateText).toHaveText('Date : 03/09/1997')
})

/*
await page.locator('.day:not(.old):not(.new)',{hasText:"3"}).click()
on giving it fails reason is in dates there are many 3's 13, 30, 23 
so we need to find the exact match for 3
so provide like
await page.locator('.day:not(.old):not(.new)',{hasText:"/^3$/"}).click()

^- character symbol denotes == text begining
$ symbol --  denotes ==text end 
/^3$/ == considers only 3 
/^3$/ is called as regular expression
*/
