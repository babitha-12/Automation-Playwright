# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tags.spec.js >> @smoke @sanity User login using invalid credential
- Location: tests\Tags.spec.js:19:6

# Error details

```
TypeError: _faker.faker.internet.userName is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | import { faker, Faker } from '@faker-js/faker'
  4  | 
  5  | test.beforeEach(async({page})=>{
  6  |     await page.goto('https://www.saucedemo.com/')
  7  | })
  8  | 
  9  | test('@smoke User login using valid credential', async({page})=>{
  10 | const userName=await page.locator('#user-name'); 
  11 | await userName.fill('standard_user');
  12 | const password=await page.locator("//input[@id='password']"); 
  13 | await password.fill('secret_sauce');
  14 | const loginButton=await page.locator('#login-button');
  15 | await loginButton.click();
  16 | await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
  17 | })
  18 | 
  19 | test.only('@smoke @sanity User login using invalid credential', async({page})=>{
> 20 |     const inValidUserName= faker.internet.userName() //for faker 
     |                                           ^ TypeError: _faker.faker.internet.userName is not a function
  21 |     const inValidPassword= faker.internet.password() //for faker 
  22 | 
  23 | const userName=await page.locator('#user-name'); 
  24 | //await userName.fill('standard_user1');
  25 | await userName.fill(inValidUserName); //for faker 
  26 | 
  27 | const password=await page.locator("//input[@id='password']"); 
  28 | //wait password.fill('secret_sauce1');
  29 | await password.fill(inValidPassword); //for faker 
  30 | 
  31 | const loginButton=await page.locator('#login-button');
  32 | await loginButton.click();
  33 | await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
  34 | })
  35 | 
  36 | test('User login using invalid username', async({page})=>{
  37 | const userName=await page.locator('#user-name'); 
  38 | await userName.fill('standard_user1');
  39 | const password=await page.locator("//input[@id='password']"); 
  40 | await password.fill('secret_sauce1');
  41 | const loginButton=await page.locator('#login-button');
  42 | await loginButton.click();
  43 | await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
  44 | })
  45 | 
  46 | test('User login using invalid password', async({page})=>{
  47 | const userName=await page.locator('#user-name'); 
  48 | await userName.fill('standard_user1');
  49 | const password=await page.locator("//input[@id='password']"); 
  50 | await password.fill('secret_sauce1');
  51 | const loginButton=await page.locator('#login-button');
  52 | await loginButton.click();
  53 | await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
  54 | })
  55 | 
  56 | 
  57 | /*
  58 | to run both tags
  59 | npx playwright test --grep "(?=.*@smoke)(?=.*@sanity)"
  60 | to run any one tags (OR)
  61 | npx playwright test --grep "@smoke|@sanity"
  62 | 
  63 | 
  64 | */
```