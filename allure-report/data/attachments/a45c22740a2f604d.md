# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndTesting.spec.js >> End to End to testing
- Location: tests\EndtoEndTesting.spec.js:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": standard_usertt
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | const data=require('../Utils/LoginCredentials.json')
  4  | 
  5  | test('End to End to testing', async({page})=>{
  6  | await page.goto('https://www.saucedemo.com/')
  7  | await page.waitForLoadState('networkidle');
  8  | 
  9  | const userNameValue=data.username 
  10 | const passwordValue=data.password
  11 | //const userName=await page.locator('#user-name'); 
  12 | //await userName.fill(userNameValue);
  13 | await page.fill('#user-name','standard_user');  //alternate way
  14 | 
  15 | 
  16 | const password=await page.locator("//input[@id='password']"); 
  17 | await password.fill(passwordValue);
  18 | 
  19 | const loginButton=await page.locator('#login-button');
  20 | await loginButton.click();
> 21 | await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     |                    ^ Error: expect(page).toHaveURL(expected) failed
  22 | 
  23 | const addtoCartButtonforLabsBackpack=  await page.locator('#add-to-cart-sauce-labs-backpack')
  24 | await addtoCartButtonforLabsBackpack.click();
  25 | 
  26 | const cartButton=await page.locator('.shopping_cart_badge')
  27 | await cartButton.click()
  28 | 
  29 | const checkoutButton= await page.locator('#checkout')
  30 | await checkoutButton.click()
  31 | 
  32 | const firstNameTextbox=await page.locator('#first-name')
  33 | await firstNameTextbox.fill('babitha');
  34 | 
  35 | const LastNameTextbox=await page.locator('#last-name')
  36 | await LastNameTextbox.fill('babu');
  37 | 
  38 | const postalCodeTextbox= await page.locator('#postal-code')
  39 | await postalCodeTextbox.fill('1234');
  40 | 
  41 | const continueButton= await page.locator('#continue')
  42 | await continueButton.click()
  43 | 
  44 | const finishButton= await page.locator('#finish')
  45 | await finishButton.click()
  46 | 
  47 | const thankyoutitle= await page.locator('.complete-header')
  48 | await expect(thankyoutitle).toHaveText('Thank you for your order!')
  49 | })
```