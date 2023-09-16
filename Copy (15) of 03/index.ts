// /*15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var people:string[]=["Ali","Asad","Aslam"];
console.log(people.length)
console.log(`Inivited people ${people}`)
    console.log(`Aslam o alaikum Mr. ${people[0]} is not coming on dinner`)
// • Modify your list, replacing the name of the guest who can’t make it with
people.shift()
console.log(people)
people.unshift("saad")
console.log(`Aslam o alaikum Mr. ${people[0]} is coming now on dinner`)

console.log(people)
// • Print a second set of invitation messages, one for each person who is still
// in your list.

let i=0
while (i<people.length) {
    i++;
    console.log(`Aslam o alaikum Mr. ${people[i]} you are invited on dinner`)
    
}