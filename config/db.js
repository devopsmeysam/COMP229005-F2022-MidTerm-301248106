/* Filename: db.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Friday, October 28th, 2022
Web Application Name: To Do List - Midterm */


// Do not expose your credentials in your code.
// It will be improved in the following weeks by learning some techniques from Julio.

let atlasDB = "mongodb+srv://midtermdbuser:KKvgYKq9dAJLQkqk@cluster005.nkkcfgn.mongodb.net/todo";

// Setting up the Database:
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}