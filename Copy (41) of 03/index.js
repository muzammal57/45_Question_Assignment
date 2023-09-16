"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magician = ["name1", "name2", "name3", "name4", "name5"];
function show_magicians(arr_names) {
    for (let i = 0; i < arr_names.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magician);
