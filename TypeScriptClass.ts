class car{
    brand:string
    constructor(brand:string){
        this.brand=brand
    }

    display(){
        console.log(this.brand)
    }
}

const object1=new car("BMW")
object1.display()