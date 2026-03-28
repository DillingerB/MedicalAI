/**
 * GROUP MEMBERS:
 * Dillinger Bennett
 * Sameer Fazlani
 * Wyatt Alexander
 * Caleb Rollston
 * Wattana Keosombath
 * Garrett Kellner
 */
const users = {};

//Sign up for new users
function registerUser(username, password, role = "patient") {

    //if username or password do not exists, throw error
    if(!username || !password) {
        throw new Error("Username and password are required");
    }

    //throw error if passwords length is greater than 50 characters
    if(password.length > 50) {
        throw new Error("Password cannot be over 50 characters");
    }

    //throw error if password is less than 8 characters
    if(password.length < 8) {
        throw new Error("Password must be greater than 8 characters");
    }

    //if username already exists, throw error
    if (users[username]) {
        throw new Error("Username already exists");
    }

    //register the user
    users[username] = {username, password, role};
    return users[username];
}

//login for existing users
function loginUser(username, password) {

    //throw error if no password or username shows
    if (!username || !password) {
        throw new Error("Username and password are required");
    }

    //throw error if user is not in file
    if (!users[username]) {
        throw new Error("User not found");
    }

    //throw error if password does not match password in file
    if (users[username].password !== password) {
        throw new Error("Incorrect password");
    }

    //print message when successfully logged in
    return {message: "Login Successful", user: users[username] };
}

//gets the user
function getUser(username) {
    return useres[username] || null;
}

//exports functions for tests.
module.exports = { 
    registerUser, 
    loginUser, 
    getUser 
};