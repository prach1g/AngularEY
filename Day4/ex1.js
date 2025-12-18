/*
let arr = [10,20,30]
console.log("before")
//synchronous callback 
arr.forEach((e)=>{console.log("CB called and returns for element",e)})
console.log("after")
*/

console.log("before")
setTimeout(()=>{console.log("CB called after 2000")},0)
console.log("after")

//while(1);;

