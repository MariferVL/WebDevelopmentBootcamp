
const express = require("express");
app = express()
app.use(express.static("./"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")

    // res.send("Hello Billionaire 😘. $2.000.000.000 vienen en camino hacia ti.")
})

app.listen(3000)



