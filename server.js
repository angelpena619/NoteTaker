const express = require("express");

const html = require("./routing/html-routes")
const api = require("./routing/api-routes")



var app = express();
var PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", html)
app.use("/api", api)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});