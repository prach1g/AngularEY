//a function returns a function 

function greeting(choice)
{
    let indian = (n)=>{ return `Namaste ${n}`}
    let japanese = (n)=>{ return `Konnichiwa ${n}`}
    let american = (n)=>{ return `Welcome ${n}`}

    //We are returning functions based on the choice 
    switch(choice)
    {
        case 1 : return indian; 
        case 2 : return japanese;
        case 3 : return american;
        default : return (n)=>{ return "Hello....."+n};
    }
    
}

let f = greeting(1)
console.log(f("prachi"))