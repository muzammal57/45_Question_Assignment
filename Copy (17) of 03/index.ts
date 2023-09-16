
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
var people:string[]=["Ali","Asad","arslan"];
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
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
for(var i=0; i<people.length; i++){
    console.log("Hi, Mr. ",people[i],` My dinner table won’t arrive in time for the dinner, and i have space for only two guests`)

}
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log(people.length)
for(var i=6; i>2; i--){
people.pop()
console.log("Hi, Mr. ",people[i],`I'm sorry i can’t invite you to dinner`)
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for(var i=0; i<people.length; i++){
    console.log("Hi, Mr. ",people[i],`You’re still invited`)

}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
people.splice(0,2)
console.log(people)