const express = require("express");

const app = express();

const port = 5000;

app.use(() => {
  console.log("Server up and running...");
});

app.listen(port);
