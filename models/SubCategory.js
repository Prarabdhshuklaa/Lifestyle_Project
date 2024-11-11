require("../config/db");

let mongoose = require("mongoose");

let SubCateSchema = mongoose.Schema({

    name : String,
    category : String
})

let SubCate = mongoose.model("subcategory", SubCateSchema);

module.exports = SubCate;