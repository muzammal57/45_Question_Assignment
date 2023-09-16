"use strict";
// 37. Large Shirts: Modify the make_shirt() functionso that shirts are large
// by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.
function make_shirt(lsize, lmessage, msize, mmessage, anysize, anymessage) {
    console.log("I love typescript");
    console.log(lsize, lmessage, msize, mmessage, anysize, anymessage);
}
make_shirt(38, "Large Shirt", 32, "Medium Shirt", 28, "Other Shirt");
