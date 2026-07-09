console.log('sample typescript')


//number (for integer and decimal)
/*
let age=10
age="babitha"
console.log(age)

*/
//let mark:number=26  integer
let mark:number=26.9  //decimal
console.log(mark)

//string -- to store text values
let studentname:string="babitha"
console.log(studentname)

//boolean  -- values of true/false
let isDisplayed:boolean=true
console.log(isDisplayed)

//any -- can hold any type of value
let data:any=50
data="hello"
data=false
console.log(data)

//Arrays
let names:string[]=["ab","bc","ccc"]
console.log(names)

//if array has different datatype values
let mixedArrayValues:[string,number]=["babi",10]
console.log(mixedArrayValues)

//null
let xyz:null=null
console.log(xyz)

//unknown
let yy:unknown="playwright"
if(typeof yy === "string")
{
console.log(yy.toUpperCase())

}
