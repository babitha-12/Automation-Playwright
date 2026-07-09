export class ProductAddtoCart{  
    constructor(page){
        this.page=page
        this.addtoCartButtonforLabsBackpack=page.locator('#add-to-cart-sauce-labs-backpack')
         this.removeText =page.getByText('Remove')
    }


    async addProductToCart(){
        await this.addtoCartButtonforLabsBackpack.click()
    }

    async addtoCartValidation()
    {
        await expect(this.removeText).toHaveText('Remove')
    }
}