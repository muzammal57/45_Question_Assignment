"use strict";
// 40. Album: Write a function called make_album()that builds a Objectdescribing a music album.
//  The function should take in an artist name and an album title, and it should return 
//  a Object containing these two pieces ofinformation. Use the function to make 
// three dictionaries representing different
//  albums. Print each return value to show that Objects 
// are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(name, albumtitle) {
    return (`name of artist ${name}  ,  album title is ${albumtitle}`);
}
var num1 = make_album("NameOfArtist", "album no.01");
var num2 = make_album("NameOfArtist", "album no.02");
var num3 = make_album("NameOfArtist", "album no.03");
console.log(num1);
console.log(num2);
console.log(num3);
function make_album1(name, albumtitle, tracks) {
    return (`name of artist ${name}  ,  album title is ${albumtitle}  , no of tracks ${tracks}`);
}
var num1 = make_album1("NameOfArtist", "album no.01", 9);
var num2 = make_album1("NameOfArtist", "album no.02", 10);
var num3 = make_album1("NameOfArtist", "album no.03", 8);
console.log(num1);
console.log(num2);
console.log(num3);
