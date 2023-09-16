// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var magician:string[]=["name1","name2","name3","name4","name5"]

var updatedArray=magician.map((number)=>{
     return(`Great Megician ${number}`);
    
})

function show_magicians(arr_names:string[]){
    for (let i = 0; i < arr_names.length; i++) {
        console.log("Great Megician", magician[i]);
        
    }

}
show_magicians(magician)

