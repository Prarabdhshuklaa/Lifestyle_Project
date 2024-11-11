const express = require("express")
const app = express();
const cors = require("cors")
const upload = require("express-fileupload")

//This foldeer is used for live server
const root = require("path").join(__dirname, "dist");
// const root = require("path").join(__dirname, "dist");
app.use(express.static(root));
//-----------------------LIVE SERVER---------------------------------------------



app.use(express.static(__dirname + "/assets"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use(cors());

app.use(require("./allRoutes/routes"));


//-----------------------LIVE SERVER below---------------------------------------------
app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
})
//-----------------------LIVE SERVER upper---------------------------------------------

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port", port);
});