// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://midtermdbuser:KKvgYKq9dAJLQkqk@cluster005.nkkcfgn.mongodb.net/todo";

// Database setup
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