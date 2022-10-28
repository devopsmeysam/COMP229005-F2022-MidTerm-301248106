/* Filename: users.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Friday, October 28th, 2022
Web Application Name: To Do List - Midterm */


// Importing the Express and Passport Modules:

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

// Routes for sign-up:
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in:
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out:
router.get('/signout', usersController.signout);

module.exports = router;
