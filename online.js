/*
Online status - Exercise
Display online status for a list of users.
Example:
- onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`..
  */


//Array for the users online
const onlineUsers = ["mockIng99", "J0eyPunch", "glassedFer"];


function displayUsers (arr) {
    const count = onlineUsers.length;
    let result;

    //No user online
    if (count === 0) {
        result = "None of your friends is online";
    
    // 1 user online
    } else if (count === 1){
        result = `${arr[0]} , is online `
    } 

    // 2 users online
    else if (count === 2){
        result = `${arr[0]} , ${arr[1]}  are online`
    }

    // +2 users online
    else {
        result = `${arr[0]} , ${arr[1]} and ${count-2} more are online`
    }
    return result;
}

//Display del mensaje
console.log(displayUsers(onlineUsers));