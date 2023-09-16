//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.
var nameArray:string[]=["Ali","Bilal","Ahmad","Sameer","Saad","Asad"];
for(var i=0; i<nameArray.length; i++)
//console.log("You are invited to join today's meeting",nameArray[i])
console.log(`Mr. `,nameArray[i],"You are invited to join today's meeting")