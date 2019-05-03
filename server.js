const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("api running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) =>
  console.log(`Server is listening on port: ${PORT}`)
);