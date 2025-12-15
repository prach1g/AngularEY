//see the use of Synchronous callbacks in array API 

let arr = []

arr.push(12,30,40,50) // REST parameter API ex

//use synchronous callback in foreach API to print the array
arr.forEach((element)=>{console.log(`the element is ${element}`)})

/*
function printing_func(next_element_of_array)
{
    console.log(`the element is ${next_element_of_array}`)
}

arr.forEach(printing_func) //foreach calls the cb 4 times
*/

//example of synchronous callback

/*
let f = (ele)=>{ 

    if(ele%3 == 0)  return true
    else return false 

}

let multipleof3 = arr.filter( f )
*/
let multipleof3 = arr.filter((e)=>{ return e%3==0 })

console.log("new array returned by filter",multipleof3)


//example of synchronous callback
let index = arr.findIndex((ele)=>{ return ele==4000 })

console.log(index > -1?'found':'not found')

//a new array having square of each element is returned
//the callback function returns the square of each element
let squarearr = arr.map( (e)=>{ return Math.pow(e,2)} )
console.log("the squarearr = ",squarearr)









