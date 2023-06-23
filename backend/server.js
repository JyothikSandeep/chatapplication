const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("api is running sucesfully");
});

app.get()

app.listen(5000, console.log("server is running on PORT 5000"));
