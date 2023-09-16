// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
var people:string[]=["Ali","Asad","Aslam"];
for(var i=0; i<people.length; i++){
    console.log("Hi, Mr. ",people[i],`I have big dinner`)

}

// • Add one new guest to the beginning of your array.
people.unshift("Amjad")
console.log(people)
// • Add one new guest to the middle of your array.
people.splice(people.length/2,0,"Akram")
console.log(people)
// • Use append() to add one new guest to the end of your list.
people.push("Aslam")
console.log(people)
// • Print a new set of invitation messages, one for each person in your list.
for(var i=0; i<people.length; i++){
    console.log("Hi, Mr. ",people[i],`I have big dinner`)

}