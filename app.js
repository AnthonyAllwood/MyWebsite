const express = require("express")
const app = express()
const path = require("path")
const port = 80;

app.use(express.static(path.join(__dirname, "/")))
app.listen(port)
console.log("Listening on port " + port)
