'use strict';

const express = require('express');


// Constants
const port = process.env.PORT || "8080";
const host = process.env.HOST || "0.0.0.0";
const version = process.env.VERSION || "1.0";

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Eric !!!!!!!  VERSION ${version} ');
});

app.listen(PORT, HOST);
console.log('Running on http://${host}:${port}');
