let routes = require("express").Router();
let Category = require("../models/category");


routes.get("/", async (req, res) => {
    let result = await Category.find();
    res.send(result);
})

routes.get("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await Category.find({ _id: id });
    res.send(result[0]);

})

routes.post("/", async (req, res) => {
    await Category.create(req.body);
    res.send({ success: true });
})
routes.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await Category.deleteMany({ _id: id });
    res.send({ success: true, result: result });
})
routes.put("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await Category.updateMany({ _id: id }, req.body);
    res.send({ success: true, result: result });
})




module.exports = routes;