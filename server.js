const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    // res.send("hello from my get route test")
    res.render("homepage")
})



app.get("/login", (req,res) => { 

res.render("login")
})


app.listen(3000, ()=> {
    console.log('app is listening on port 3000')
})
