
/*
//function without parameters
function add():void{
   let a1=10
   let b1 =20
   let sum =a1+b1
   console.log(sum)
}

add()

//with parameters

function datavalues1(names:string):void{  //void return type
    console.log(names)
}

datavalues1("babitha")



//function with return type

function mulitplication(p:number, b:number):number{  // number is return type
    
    return (p*b)
}
console.log(mulitplication(1,2))
*/
//never 
function throwError():never{
    throw new Error("something went wrong")
}
throwError()