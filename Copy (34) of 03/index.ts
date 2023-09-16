// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
var array:string[]=["pizza1","pizza2","pizza3","pizza4","pizza5","pizza6"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
for (let i = 0; i < array.length; i++) {
    console.log(`I like `,array[i],"Pizza");
    
}

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
for (let i = 0; i < array.length; i++) {
    console.log(`I like `,array[i],"Pizza");
    
}
console.log("how much you like pizza")
console.log("line no.1")
console.log("line no.2")
console.log("line no.3")
console.log("line no.4")
console.log("I really love pizza!")