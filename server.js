const express = require("express")
const app = express()

app.set("view engine" , "ejs")

app.get("/", (req, res) => {
    res.send("hello from my get route test")
    
})



app.listen(3000)