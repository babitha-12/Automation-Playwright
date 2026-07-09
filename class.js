//keyword is class
//class name convention is like first letter should be capital letter

class Student {
    constructor (name,id){
        this.name=name
        this.id=id
    }
    detail() {
        console.log(this.name + " " + this.id)    
    }
}
const student1=new Student("babitha", 15)
    student1.detail()

    //one more student detail
    const student2= new Student("Mathew",16)
    student2.detail()


    //using getter method 
   
    class Person{
          age=10
         get location(){
            return "india"
         }
constructor(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
}
fullName(){
    console.log(this.firstName+ " " + this.lastName)
}
    }
    let person1=new Person("babitha","babu")
    person1.fullName()
    console.log(person1.location) //calling getter method , giving function bracket is not required
    console.log(person1.age)