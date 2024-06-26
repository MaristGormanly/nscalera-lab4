// http://localhost:1337
// ^ CLICK ME

// ------------------------------------------------
const PORT = process.env.PORT || 1337;
             // If this process.env port is
             // not defined, then 1337 is chosen.

const express = require('express'); // Express is a dependency that needs
const app = express();              // to be installed through the terminal.

// Body-parser is needed for Postman
const bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));
// ------------------------------------------------

// ------------------------------------------------
// This will include the userRoute route.
let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

// This will include the feedRoute route.
let feedRoute = require('./route/feedRoute');
app.use('/api/backendfeed', feedRoute);

// Allows us to access public files.
app.use(express.static('./client/public')); // Middleware
// DO NOT ADD MORE THAN ONE DOT HERE!!!
// When application runs, the app.js directs
// the server to that location.
// ------------------------------------------------

// Route Handler for Homepage ---------------------
app.get(['/', '/index.html'], function (req, res) {
//        ^ The '/' goes to the homepage of the app.
//          It assumes that if they don't put anything
//          after the slash following the base URL,
//          they will be defaulted to index.html.
    res.sendFile('index.html', { root: './client/views' })
})                               // Serving up the public folder
                                 // by the dot here.

// Notes:
//      - This is what you get back: a file named 'index.html' that displays the homepage.
//      - In "res.sendFile," res is the "response," which is what the client actually gets.

// ------------------------------------------------


// Route Handler for Profile ----------------------
app.get('/profile', function(req, res) {
    res.sendFile('profile.html', { root: './client/views' })
})
// ------------------------------------------------


// Route Handler for Login Page -------------------
app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: './client/views' })
})
// ------------------------------------------------


// // Route Handler for Feed -------------------------
// //              Change this to a userID later instead of a username
// app.get('/feed/:username', function (req, res) { // It is treating everything after the colon (:) as a username.
//     console.log("Here's an example message before.");
//     console.log("Feed page called with username: " + req.params.username);                  // computer understands the
//     console.log("Here's an example message after.");
//     res.sendFile('feed.html', { root: './client/views', query: { username: req.params.username }})   // username parameter.
// })
// // ------------------------------------------------


// Route Handler for Feed -------------------------
app.get('/feed', function (req, res) {
    console.log("We are in feed.");
    res.sendFile('feed.html', { root: './client/views' })
})
// ------------------------------------------------


// Route Handler for Post -------------------------
app.get('/api/posts', function (req, res) {
    res.json({
        data:[
            {
                id:1,
                title:"rah"
            }
        ]
    });
})
// ------------------------------------------------


// Route Handler for Creating Posts ---------------
app.get('/create-post', function (req, res) {
    console.log("We are creating a new post.");
    res.sendFile('create-post.html', { root: './client/views' })
})
// ------------------------------------------------


// Port Information in Console --------------------
app.listen(PORT, () => console.log('Marist Chatter listening on this port ' + PORT + '!')); // NOT hardcoded.
// Notes:
//      - app.listen is basically the notification bell.
//          - E.g. someone's extension number on a phone number.
//      - console.log gives info to the user
//      - We need to make a variable for this port.
//          - You can make the port number (in this case, '1337')
//          pretty much anything you want.
// ------------------------------------------------


// ARCHIVED NOTES ---------------------------------
//
//      For page 1
//      app.get('/page1.html', function (req, res) {
//          res.sendFile('page1.html', { root: './' })
//      })
//
//
//
//
// ------------------------------------------------