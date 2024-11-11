let routes = require("express").Router();


routes.use("/api/v1/city", require("../controller/cityController"));
routes.use("/api/v1/product", require("../controller/ProductController"));
routes.use("/api/v1/category", require("../controller/categoryController"));
routes.use("/api/v1/subcategory", require("../controller/SubCategoryController"));
routes.use("/api/v1/user", require("../controller/UserController"));
routes.use("/api/v1/order", require("../controller/OrderController"));
routes.use("/api/v1/myorder", require("../controller/MyOrderController"));
routes.use("/api/v1/auth", require("../controller/AuthController"));
routes.use("/api/v1/contact", require("../controller/contactController"));
routes.use("/api/v1/admin/auth", require("../controller/AdminAuthController"));
routes.use("/api/v1/admin", require("../controller/AdminController"));


module.exports = routes;