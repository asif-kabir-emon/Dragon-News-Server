const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/new-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon news server running on port ${port}`);
});
