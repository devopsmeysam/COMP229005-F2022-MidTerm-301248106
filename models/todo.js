/* Filename: todo.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Friday, October 28th, 2022
Web Application Name: To Do List - Midterm */


// Importing Mongoose Module:

let mongoose = require('mongoose');

// Creating a Model Class (Database design):

let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

// Implementations for Database-related operation:

module.exports = mongoose.model("Todo", todoModel);