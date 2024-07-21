const express = require("express");
const router = require("./router.cjs");
const app = express();

app.set("view engine", "ejs");
app.use("/", router);

app.listen(3000);
