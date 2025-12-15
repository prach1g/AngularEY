//Function Returns another function 
// CLOSURE 

function factory(n)
{

function Incrementor()
{
     n++
     console.log("the next value is",n)
}

   return Incrementor  // at this point the factory func returns
}

let incr1 =factory(2)
incr1()
incr1() 
incr1()

let incr2 = factory(100)
incr2()
incr2()

incr1()