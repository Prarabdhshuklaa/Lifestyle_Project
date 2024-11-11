let routes = require("express").Router();
let Contact = require("../models/contact");


routes.post("/", async(req,res)=>{
    await Contact.create(req.body);
    res.send({ success : true });
})


module.exports = routes;