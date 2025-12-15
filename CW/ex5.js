//Write functions using FAT arrow notations = lambda notation
//assigning functions to variables 

//Named function 
function f1()
{
   console.log("hi")
}

let z= f1() // z gets the return value of f1 which is undefined
let y = f1  //y gets the function itself

//arrow function is the anonymous function
let x =()=>{
    console.log("hello")
}

//f1()  =VALID
//x()  = VALID 
//y()  = VALID 
//z() ====  INCORRECT 

console.log("type of x",typeof(x))
console.log("type of y",typeof(y))
console.log("type of z",typeof(z))


