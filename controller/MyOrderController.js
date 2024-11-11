// let routes = require("express").Router();
// let Order = require("../models/Order");
// let jwt = require("jsonwebtoken")

// routes.post("/", async (req, res) => {
//     let token = req.headers.authorization;
//     let obj = jwt.decode(token, "hello");
//     // console.log(obj);
//     req.body.user_id = obj.id;
//     console.log(req.body);
//     // return;
//     await MyOrder.create(req.body);
//     res.send({ success: true });
// })

// routes.get("/", async (req, res) => {
//     // console.log(req.headers);
//     let token = req.headers.authorization;
//     let obj = jwt.decode(token, "hello")
//     // console.log(obj)
//     let id = obj.id;
//     let result = await Order.find({ user_id: id }).populate("user_id").populate("product_id").exec();
//     console.log(result)
//     res.send(result);
// })

// module.exports = routes;

let routes = require("express").Router();
let Order = require("../models/Order");
let jwt = require("jsonwebtoken")

routes.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hello");
    let id = obj.id;
    let result = await Order.find({ user_id: id }).populate("user_id").populate("product_id").exec();
    // console.log(result);
    res.send(result);
})

module.exports = routes;