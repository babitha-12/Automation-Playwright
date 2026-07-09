//functions
/*function functionname()
{
    //statemenet
}
*/

//non parameterised function
function sampleTest()
{
console.log("hello world")
}

sampleTest()

//paramterised function
function sampleTest2(a,b)
{
console.log(a+b)
}

sampleTest2(1,2)

//non parameterised return type
function testReturn()
{
    let name=10
    return name
}
//console.log(testReturn())

let name1=testReturn()
console.log(name1)

//reusing function

function product(c,d)
{
    console.log(c*d)
}
product(2,name1)

//parameterised return type --assignemnt
function SampleReturn(e,f)
{
   return(e+f)
}
console.log(SampleReturn(1,10))

//or  using rteurn stored to a variable 
let testSum= SampleReturn(1,20)
console.log(testSum)