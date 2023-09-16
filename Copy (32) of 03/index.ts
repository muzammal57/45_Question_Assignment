// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
var current_users:string[]=["user1","user2","user3","user4","user5"]
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users:string[]=["user1","User2","user3","user6","user7"]
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
for(var i=0; i<current_users.length; i++){
    if(current_users[i]==new_users[i]){
        console.log("user already exits enter new user")
    }else {
        console.log("user name available")
    }
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for(var i=0; i<current_users.length; i++){
    if(current_users[i].toLowerCase()==new_users[i].toLowerCase()){
        console.log("user already exits enter new user")
    }else {
        console.log("user name available")
    }
}