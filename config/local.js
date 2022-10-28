/* Filename: local.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Friday, October 28th, 2022
Web Application Name: To Do List - Midterm */


// Importing the required Passport Modules:

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Using the imported Modules:

module.exports = function() {
    passport.use(new LocalStrategy((username, password, done)=>{
        User.findOne({username: username}, (err, user)=>{
            if (err) {
                return done(err);
            }
            
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
    
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            
            return done(null, user);
        });
    }));
};