"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["mango", "apple", "orange"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// var fruit:string="mango"
// for(var i=0; i<favorite_fruits.length; i++){
// if(favorite_fruits.includes(fruit)){
//     console.log("You really like ",fruit,`!`)
// }
// }
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
else if (favorite_fruits.includes("apple")) {
    console.log("You really like apple!");
}
else if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!");
}
else {
    console.log("the fruit you entered is not in array");
}
