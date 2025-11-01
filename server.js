const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello from my get route")
})



app.listen(3000)