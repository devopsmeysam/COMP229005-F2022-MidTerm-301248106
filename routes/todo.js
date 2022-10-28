/* Filename: todo.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Friday, October 28th, 2022
Web Application Name: To Do List - Midterm */


// Importing the Express Module:

var express = require('express');
var router = express.Router();

let todoController = require('../controllers/todo');

// Implementations for Security purposes:

function requireAuth(req, res, next)
{
    // ADD YOUR CODE HERE        
    // Checks if the User is Authenticated:
    if (req.isAuthenticated()) {
        next();
    } else {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
}

/* GET list of items */
router.get('/list', todoController.todoList);

// Route for Details:
router.get('/details/:id', todoController.details);

// Routers for edit:
router.get('/edit/:id', requireAuth, todoController.displayEditPage);
router.post('/edit/:id', requireAuth, todoController.processEditPage);

// GET Route for Delete
router.get('/delete/:id', requireAuth, todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, todoController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, todoController.processAddPage);

module.exports = router;