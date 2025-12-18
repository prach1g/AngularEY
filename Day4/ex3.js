let p = new Promise((res,rej)=>{

    setTimeout(()=>{
        let n = Math.random() * 1000
     if(n<400)
        rej(`${n} is less than 400`)
     else
        res("hurray resolved"+n)
    },5000)
     
})
console.log(p)

//p.then(CBFORRes,CBFORRej)
p.then((res)=>{
    console.log("handling ",res)
}, (rej)=>{
    console.log("error ",rej)
})