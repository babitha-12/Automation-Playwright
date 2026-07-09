//with POM
import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { ProductAddtoCart } from '../Pages/ProductAddtoCart';


test('Adding product to cart', async({page})=>{
    const loginPage=new LoginPage(page)  
    const productAddtoCart=new ProductAddtoCart(page)
    await loginPage.goto();  
    await loginPage.validCredentialLogin()
    await productAddtoCart.addProductToCart()
    await productAddtoCart.addtoCartValidation()
})