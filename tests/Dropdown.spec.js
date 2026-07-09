import{test,expect} from '@playwright/test'

//dropdown
test('dropdowns in playwright', async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
await page.waitForLoadState('networkidle');
const javadropdown=await page.locator("(//select[@class='dropdown-menu-lists'])[1]"); 
//selectbyIndex
//await javadropdown.selectOption({index:2});
//selectbyvalue
//await javadropdown.selectOption({value:'c#'})
//selectbyvisibletext
await javadropdown.selectOption({label:'Python'})
})

//checkbox
test('handling checkbox in playwright', async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
await page.waitForLoadState('networkidle');
const checboxSelection=await page.locator("//input[@value='option-2']");
//await checboxSelection.click(); //to check the checkbox
//await checboxSelection.click(); // to uncheck the chekcbox
await checboxSelection.check();//to check
await checboxSelection.uncheck(); //to uncheck
})

//radiobuttons
test('handling radiobuttons in playwright', async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
await page.waitForLoadState('networkidle');
const radiobuttonselection=await page.locator("//input[@value='yellow']");
await radiobuttonselection.click();
const radiobuttonselection1=await page.locator("//input[@value='purple']");
await radiobuttonselection1.click();
})