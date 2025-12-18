async function f1(){
try{
let p=  await new Promise((res,rej)=>{
    setTimeout(()=>{
        res("mars is a planet")
       // rej("there is a problem")
    },2000)
})
//this line runs only after await returns the resolved promise
console.log("the promise resolved with a message ",p)

}catch(e){
    console.log(""+e)
}

console.log("async function ends")

}//end of async fucntion

console.log("before calling async")
f1()
console.log("code after calling async function")