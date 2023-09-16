"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var magician = ["name1", "name2", "name3", "name4", "name5"];
function make_great(arr1_names) {
    magician.map((data) => {
        return (`Great Megician ${data}`);
    });
}
function show_magicians(arr_names) {
    for (let i = 0; i < arr_names.length; i++) {
        console.log("Great Megician", magician[i]);
    }
}
show_magicians(magician);
console.log(magician);
