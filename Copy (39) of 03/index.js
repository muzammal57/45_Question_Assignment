"use strict";
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function describe_city(city, country) {
    return (`${city},${country}`);
}
var message = describe_city("Karachi", "Pakistan");
console.log(message);
var message = describe_city("Dheli", "India");
console.log(message);
var message = describe_city("Colomboo", "Srilanka");
console.log(message);
var message = describe_city("kabol", "Afghanistan");
console.log(message);
