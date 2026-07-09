//inheritance

class Animal{
    constructor (name){
        this.name=name
    }
    sound(){
        console.log(this.name+ "is barking")
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)  //to invoke constructor of parent class
        this.breed=breed
    }
    breedType(){
        console.log(this.name)
        console.log(this.breed)
    }
}

let dog1=new Dog("jimmy","lab")
dog1.breedType()
dog1.sound()