// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
var array:string[]=["dog","goat","lion"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
for (let i = 0; i < array.length; i++) {
    if(i<1){
        console.log("A dog would make a great pet")
    }
    else if(i<2){
        console.log("A goat would make a great pet")
    }
    else if(i<3){
        console.log("A lion could be dangerous pet")
    }

}

// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
console.log("All the above animals have four legs")