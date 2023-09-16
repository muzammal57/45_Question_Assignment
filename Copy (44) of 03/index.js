"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
var array = ["item1", "item2", "item3", "item4", "item5"];
function sandwich(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
sandwich(array);
var ordered_item = 0;
function ordered(array) {
    for (let i = 0; i < array.length; i++) {
        if (i == ordered_item) {
            console.log(`item is`, array[ordered_item]);
        }
    }
}
ordered(array);
ordered(array);
ordered(array);
