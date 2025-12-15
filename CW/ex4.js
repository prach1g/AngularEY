//REST parameters = variable number of args

//precede non REST params before REST params
function addmany(fname,...nums) //caller can pass any number of params
{
    console.log("hi ",fname)
     //inside the function
     //rest parameters are used as ARRAY 
     let sum=0
     for(let i=0;i<nums.length;i++)
     {
        sum=sum+nums[i]
     }
     return sum
}

console.log(addmany("prachi",1,2,3,4,5))
console.log(addmany("priya",1,1))

