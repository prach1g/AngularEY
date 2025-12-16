//Function Returns another function 
// CLOSURE 

function factory(n,step)  //you may add a step parameter here
{

function Incrementor()  //OR you may add a step parameter here
{
     n+=step
     console.log("the next value is",n)
}

   return Incrementor  // at this point the factory func returns
}

let incr1 =factory(2,1)
incr1()
incr1() 
incr1()

let incr2 = factory(100,5)
incr2()
incr2()

incr1()