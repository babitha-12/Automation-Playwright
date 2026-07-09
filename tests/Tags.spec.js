import{test,expect} from '@playwright/test'

import { faker, Faker } from '@faker-js/faker'

test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})

test('@smoke User login using valid credential', async({page})=>{
const userName=await page.locator('#user-name'); 
await userName.fill('standard_user');
const password=await page.locator("//input[@id='password']"); 
await password.fill('secret_sauce');
const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //assertion to check the url after logging 
})

test.only('User login using invalid credential', async({page})=>{
    const inValidUserName= faker.internet.userName() //for faker 
    const inValidPassword= faker.internet.password() //for faker 

const userName=await page.locator('#user-name'); 
//await userName.fill('standard_user1');
await userName.fill(inValidUserName); //for faker 

const password=await page.locator("//input[@id='password']"); 
//wait password.fill('secret_sauce1');
await password.fill(inValidPassword); //for faker 

const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
})

test('User login using invalid username', async({page})=>{
const userName=await page.locator('#user-name'); 
await userName.fill('standard_user1');
const password=await page.locator("//input[@id='password']"); 
await password.fill('secret_sauce1');
const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
})

test('User login using invalid password', async({page})=>{
const userName=await page.locator('#user-name'); 
await userName.fill('standard_user1');
const password=await page.locator("//input[@id='password']"); 
await password.fill('secret_sauce1');
const loginButton=await page.locator('#login-button');
await loginButton.click();
await expect(page).toHaveURL('https://www.saucedemo.com/') //assertion to check the url  on  failed login
})


/*
to run both tags
npx playwright test --grep "(?=.*@smoke)(?=.*@sanity)"
to run any one tags (OR)
npx playwright test --grep "@smoke|@sanity"


*/