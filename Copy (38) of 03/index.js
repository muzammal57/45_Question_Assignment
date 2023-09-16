"use strict";
// 38. Cities: Write a function called describe_city()that accepts the name of
function describe_city(city = "Karachi", country = "Pakistan") {
    return `${city} is in ${country}`;
    // console.log(city,country)
}
var message = describe_city("Karachi", "Pakistan");
console.log(message);
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan.Give the parameter for the country a default value.
// Call your function for three different cities,at least one of which is not in the
// default country.
var message = describe_city("Dheli", "India");
console.log(message);
var message = describe_city();
console.log(message);
var message = describe_city("kabol", "Afghanistan");
console.log(message);
