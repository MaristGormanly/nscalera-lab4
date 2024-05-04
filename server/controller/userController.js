// ------------------------------------------
// Import the model we created
const User = require('../model/user');
// We're basically "catching" the export that was
// "thrown" to us from user.js in the model folder.
// ------------------------------------------

// ------------------------------------------
// Create an empty array that will contain the
// user model instances that are created.
let users = [];

// Create a few users
let joel = new User("Joel", "Miller", "1")
let ellie = new User("Ellie", "Williams", "2")
let abby = new User("Abby", "Anderson", "3")

// add the user to the array
users.push(joel); // user 1
users.push(ellie); // user 2
users.push(abby); // user 3
// ------------------------------------------


// ------------------------------------------
// Send entire users array as the body of the
// response as json.
exports.getAllUsers = (req, res) => {                   // GET ALL
    res.setHeader('Content-Type', 'application/json');
    // ^ setHeader tells the browser what
    // format of content to send back.

    // Send back a reponse to the Postman
    res.send(users); // Send back all users
}

// Retrieve the user in the :index parameter
// of the request and return as json.

//TODO
exports.getUser = (req, res) => {                       // GET SINGLE
    res.setHeader('Content-Type', 'application/json');

    // Send back a reponse to the Postman    
    users.forEach(user => {
        if (user.userID == req.params.index)
            res.send(user); // Send back that specific user
    });
}

// Save a user
exports.saveUser = (req, res) => {                      // POST
    let newUser = new User(req.body.firstName, req.body.lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');

    // Send back a reponse to the Postman
    res.send(users); // Send back all users
}

// Complete update
exports.updateUser = (req, res) => {                      // PUT

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;        // See notes on why we put certain
    const firstName = req.body.firstName;   // things as param and others as body.
    const lastName = req.body.lastName;

    // Update user with new data
    users[userID] = new User(firstName, lastName);
    //    ^ Get index of user

    // Send back a reponse to the Postman
    res.send(users[userID]); // Send back that specific user

}

// Partial update (AKA "surgical removal")
exports.patchUser = (req, res) => {                      // PATCH

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // Update user with new data
    if (firstName) {                            // If there is anything in the first name,
        users[userID].firstName = firstName;    // then it will execute the update.
    }

    if (lastName) {                             // If there is anything in the last name,
        users[userID].lastName = lastName;      // then it will execute the update.
    }

    // Send back a reponse to the Postman
    res.send(users); // Send the whole list of users

}

// Delete user
exports.deleteUser = (req, res) => {                      // DELETE

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;

    // Delete the user with the specific ID
    users.splice(userID, 1);

    // Send back a response to the Postman
    res.send(users); // Send the whole list of users

}
// ------------------------------------------