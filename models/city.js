require("../config/db");

let mongoose = require("mongoose");

let CitySchema = mongoose.Schema({

    id : String,
    name : String,
    state : String
}, {collection : "city"})

let city = mongoose.model("city", CitySchema);

module.exports = city;