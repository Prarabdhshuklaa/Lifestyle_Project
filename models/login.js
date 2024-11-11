require("../config/db");

let mongoose = require("mongoose");

let LoginSchema = mongoose.Schema({
    email : String,
    password : String
})

let login = mongoose.model("login", LoginSchema);

module.exports = login;