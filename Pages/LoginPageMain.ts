import{Page,Locator} from "@playwright/test" //Locator is used to find elements , and Page is used to denot page. if this is imported only locators and pages can be used in ts file


export class LoginPage{  
    page:Page //page represents Page --for ts to understand it is a page
    userName:Locator
    Password:Locator
    loginButton:Locator
    constructor(page){
        this.page=page ///to receieve playwright page object, playwright has an object named as page. if we store using this.page=page then all methods in this class can be used.
        this.userName=page.locator('#user-name') 
        //this  elements locating  format is called as page factory , it is an predefined class. 
        //page factory class is a class which helps to locate elements.
        //elements reuseability is possible through page factory
        this.Password=page.locator("//input[@id='password']")
        this.loginButton=page.locator('#login-button')
    }

    //navigating to page is creating as a method. 
    //elements finding inside constructor

    async goto():Promise<void>{
        await this.page.goto('https://www.saucedemo.com/')
    }

    /* async validCredentialLogin(){
        await this.userName.fill('standard_user')
        await this.Password.fill('secret_sauce')
        await this.loginButton.click()
    } */
   async validCredentialLogin(user:string,password:string){  //used parameterisation
        await this.userName.fill(user)
        await this.Password.fill(password)
        await this.loginButton.click()
}

}