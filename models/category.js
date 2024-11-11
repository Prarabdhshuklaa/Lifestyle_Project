require("../config/db");

let mongoose = require("mongoose");

let CategorySchema = mongoose.Schema({

    name : String
})

let category = mongoose.model("category", CategorySchema);

module.exports = category;