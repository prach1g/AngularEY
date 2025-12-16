let a1 = [ 10,20,30,40]

//access the second element 20 of the array
console.log(a1[1])

//let a2 = a1  //RIGHT WAY TO CREATE A COPY //NO , references are copied 
//let a2 = [a1]  //NO

let a2 = [...a1] // create a new array - copy each ele of a1 to a2
//change the second element of a1 to 2000
a1[1] =2000
//print the second element of a2 and a1
console.log("a2[1]=",a2[1],"a1[1]=",a1[1])
console.log("a2=",a2,"a1=",a1)