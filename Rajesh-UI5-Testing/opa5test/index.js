const express = require('express');
const app = express();

app.use("/", express.static("webapp/"));

app.get("/", (req, res) => {
    res.send("Welcome to my Website")
});

console.log("Your server started on http://localhost:3000");
const portNo = process.env.PORT || 3000;

app.listen(portNo);
