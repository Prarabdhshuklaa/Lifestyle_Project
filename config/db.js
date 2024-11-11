let DB_URL = require ("./constant");

require("mongoose").connect(DB_URL)
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("CONNECTION FAILED", err)
})