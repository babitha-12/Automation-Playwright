
let num=[1,2,3,4,5]
console.log(num)   //array literal form

//using array constructor
let num1=Array(1,2,3,4,5)
console.log(num1)

//using new keyword constructor
let num2=new Array(1,2,3,4,5)
console.log(num2)


let num3=Array(3)
num3[0]=1
num3[1]=2
num3[2]=3
console.log(num3)
num3.push(10) //push function
console.log(num3)

//to store string values
let flowers=["lily","lotus","rose"]
console.log(flowers)
//filter function
let numbers=[1,2,3,4,50,60]
let filtered=numbers.filter(n=>n> 15)
console.log(filtered)

//ascending order
let numbers1=[111,2,3,4,50,60]
numbers1.sort((a,b) => a-b)
console.log(numbers1)
//descending order
numbers1.sort((a,b) => b-a)
console.log(numbers1)

//sorting of string values
//ascending
flowers.sort()
console.log(flowers)
//descending
flowers.reverse()
console.log(flowers)