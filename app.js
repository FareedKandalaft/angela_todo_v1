const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(3000, () => {
    console.log("server started on port 3000");
});


app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        day: day,
        newItems: items
    });
});
