const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"))


app.listen(3000, () => {
    console.log("server started on port 3000");
});


app.post("/", (req, res) => {
    var item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/", (req, res) => {

    let day = date.getDay();
    res.render("list", {
        listTitle: day,
        newItems: items
    });
});

app.get("/work", (req, res) => {

    res.render("list", {
        listTitle: "Work Items",
        newItems: workItems
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});
