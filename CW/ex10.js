
let cities = ["pune","mumbai","bangalore","delhi","kolkata"]

//Traditional way to access the first and second element of the array
//in a variable
let c1 = cities[0]
let c2 = cities[1]
let c3 = cities[4]

//destructuring syntax to access the first and second element
//in variables
let [city1,city2,,,city3] = cities

console.log(city1,city2,city3)
