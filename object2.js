let employee={
    firstName:"Babitha",
    lastName:"Babu",
    id:8,
    fullName:function(){
        console.log(this.firstName)
        console.log(this.lastName)
    return(this.id)
    }
}
employee.fullName() //dot notation
console.log(employee.id)


//bracket notation
console.log(employee["id"])


//may 11
//to add a new property 
employee.gender="female"
console.log(employee.gender)

////to remove a new property 
//delete is the keyword
delete employee.gender
console.log(employee.gender)
//output is undefined means that is not in the file