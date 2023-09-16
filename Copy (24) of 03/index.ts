// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let mobile ="Nokia";
console.log("Is mobile == 'Nokia'? I predict True.")

console.log(mobile == 'Nokia')


console.log("Is mobile !== '!Nokia'? I predict False.")

console.log(mobile !== 'Nokia')

console.log("Is mobile < '!Nokia'? I predict False.")

console.log(mobile < 'Nokia')


// • Tests using the lower case function

console.log("Is mobile == .Nokia'? I predict False.")

console.log(mobile = mobile.toLowerCase())

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is mobile >= '!Nokia'? I predict true.")

console.log(mobile >= 'Nokia')
console.log("Is mobile <= 'Nokia'? I predict True.")

console.log(mobile <= 'Nokia')
// • Tests using "and" and "or" operators
var num=20;
var num1=30;
console.log("Is num && num1 !=10? I predict true.")

console.log(num && num1 !=10)
console.log("Is num && num1 =10? I predict false.")

console.log(num && num1 ==10)

console.log("Is num || num1 =20? I predict true.")

console.log(num ==20|| num1 ==20)
console.log("Is num || num1 =10? I predict false.")

console.log(num ==10|| num1 ==10)

// • Test whether an item is in a array
var array:number[]=[10,20,30,40,50,60]
console.log("array.includes(11)? I predict false.")
console.log(array.includes(11))

// • Test whether an item is not in a array
console.log("array.includes(30)? I predict true.")
console.log(array.includes(30))