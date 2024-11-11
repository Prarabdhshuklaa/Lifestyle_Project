let routes = require("express").Router();
let city = require("../models/city");


routes.get("/", async(req, res)=>{
    let result = await city.distinct("state");
    res.send(result);
})

routes.get("/state/:a", async(req, res)=>{
    let s = req.params.a;
    let result = await city.find({ state : s});
    res.send(result);
})

module.exports = routes;