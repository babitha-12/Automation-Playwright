//object creation
//creating a strcuture that stores data as a key value pair
//format- key:value

const student={
    name:"babitha",
    rollNo:15,
    details:()=>{
        console.log("hello")
    }
}
console.log(student.name)
console.log(student.rollNo)
student.details()

//short hand method
const employee={
    id:12,
    details(){
        console.log(this.id)
    }
}
employee.details()


