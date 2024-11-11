require("../config/db");

let mongoose = require("mongoose");

let ContactSchema = mongoose.Schema({

    fullname : String,
    email : String,
    subject : String,
    message : String
})

let contact = mongoose.model("contact", ContactSchema);

module.exports = contact;