//default parameters 
function add(n1=10,n2=10)   //parameter list with default param
{
    return n1+n2
}

console.log(add())
console.log(add(100))
console.log(add(100,200))
console.log(add(100,200,300,400))