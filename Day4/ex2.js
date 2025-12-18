console.log("before")
let intervalId = setInterval(()=>{console.log("CB called")},1000)


//setTimeout( clearInterval(intervalId),5000) //INVALID

setTimeout(()=>{
    console.log("the interval is being cleared")
    clearInterval(intervalId)
},5000)
console.log("after")

//clearInterval(intervalId)  //WILL NOT WORK 
