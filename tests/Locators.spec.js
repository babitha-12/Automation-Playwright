import{test,expect} from '@playwright/test'

test('locators in playwright', async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const messageBox=await page.locator('#single-input-field') //id locator
    const messageBox1=await page.locator('.form-control')      //class locator
    const messageBox2 = await page.locator("//input[@id='single-inp;ut-field']") //xpath locator syntax is //tagname[@attribute='attributevalue']
    //to enter text into text box
    const messaeField=await page.locator('#single-input-field');
   // await messaeField.type("babitha");
    //await messaeField.type("babu");
    await messaeField.fill("babitha");
    //await messaeField.fill("babu");
     const showMessageBox=await page.locator('#button-one') ;
    await showMessageBox.click(); //actions
})

//special locators
//https://groceryapp.uniqassosiates.com/admin/list-admin this url is aria application, login using username and password as admin -- select admin more info 
test.only('special locators in playwright',async({page})=>{
    await page.goto("https://groceryapp.uniqassosiates.com/admin/login")
    const usernameBox=await page.locator("//input[@name='username']")
    const passwordBox=await page.locator("//input[@name='password']") 
    const signinButton=await page.locator("//button[@type='submit']") 
    await usernameBox.fill("admin")
    await passwordBox.fill("admin")
    await signinButton.click()
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    await page.getByRole('button', {name: 'Active'}).nth(1).click() //nth(3) used to click on 1st active element
    //normal xpath method  await page.locator("(//span[@class='badge bg-success'])[1]").click()
    //normal xpath method await page.locator("//span[@class='badge bg-success']").nth(4).click()
    await page.getByText('Active').nth(2).click()
    await page.getByText('Active').first().click() //first() to get the first element-- can be used instead of nth(0)
    await page.getByText('Active').last().click() // last() to get the last element-- can be used instead of nth(0)
})
