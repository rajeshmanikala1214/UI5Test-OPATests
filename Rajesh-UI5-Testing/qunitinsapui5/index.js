
var express = require('express');
var app = express();

app.use("/", express.static("webapp/"));

app.get("/", (req, res) => {
    res.send("Welcome to my Website")
});
app.get("/home", (req, res) => {
    res.send("<label>What you name</label><input><br><button>Click me</button>")
});

this.aVendors = [
    {
        "id":1,
        "name": "Sunny",
        "city": "Gurgaon",
        "country": "IN",
        "companyName": "Test Company",
        "emailId": "sunny@gmail.com",
        "gstNo": "SHUJHZHHHUZYOYS87"
    },
    {
        "id":2,
        "name": "Ananya",
        "city": "Delhi",
        "country": "IN",
        "companyName": "Farchild incorporation",
        "emailId": "ananya@example.com",
        "gstNo": "SHUJ454654HUZYOYS87"
    },
    {
        "id":3,
        "name": "Alex",
        "city": "NYC",
        "country": "US",
        "companyName": "Bingo 7 Co.",
        "emailId": "alex@gmail.com",
        "gstNo": "SHUJ87987HHUZYOYS87"
    },
    {
        "id":4,
        "name": "Veronica",
        "city": "Italy",
        "country": "Italy",
        "companyName": "Emoza Barenana",
        "emailId": "veronica@gmail.com",
        "gstNo": "XXXX-XXXX-XX"
    },
    {
        "id":5,
        "name": "Mathias",
        "city": "Berlin",
        "country": "Germany",
        "companyName": "Berrero",
        "emailId": "mathias@gmail.com",
        "gstNo": "XXXX-XXXX-XX"
    }
];
//https://github.com/soyuztechnologies/01FiorionCloud-ADVF.git
app.get("/vendors",(req,res) =>{
    res.json(this.aVendors);
});

// app.get("/index.html", (req,res) => {
//     res.sendFile(__dirname + "/webapp/index.html");
// });
// app.get("/new.html", (req,res) => {
//     res.sendFile(__dirname + "/webapp/new.html");
// });


console.log("Your server started on http://localhost:3000");
const portno = process.env.PORT || 3000;

app.listen(portno);
