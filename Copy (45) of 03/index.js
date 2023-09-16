"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.*/
// type carType={company:string,model:number}
// var car:carType[]=[{company:"Honda",model:2022}]
// console.log(car)
var argu = "argument";
function car(manufacturer, model) {
    console.log(`${manufacturer},${model},${argu}`);
}
car("Honda", 2022);
function newcar(manufacturer, model, color, technolgy) {
    console.log(`${manufacturer},${model},${color},${technolgy},${argu}`);
}
newcar("Honda", 2022, "white", "Japani");
