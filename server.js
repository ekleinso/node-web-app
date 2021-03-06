'use strict';

const express = require('express');


// Constants
const PORT = process.env.PORT || "8080";
const HOST = process.env.HOST || "0.0.0.0";
const VERSION = process.env.VERSION || "1.2";

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Hello KDC on IBM Cloud !!!!!!!  VERSION " + VERSION);
});

app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
