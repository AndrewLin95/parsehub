const bodyParser = require("body-parser");
const fs = require('fs');
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});