//PASS a function as a parameter to another function 
//SYNCHRONOUS  CALLBACK PATTERN 

function calculate(fname,eval_func)
{
    console.log("hi ",fname)
    eval_func(12)

}

function square(n)
{
    // ` ${whatever should be evaluated}   `
    console.log(`the square of ${n} is ${Math.pow(n,2)}`)
}

calculate("prachi",square)  // function square is passed to function calculate
calculate("priya",(n1)=>{ console.log("the cube of",n1," is ",Math.pow(n1,3))})