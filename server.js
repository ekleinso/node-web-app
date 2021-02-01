'use strict';

const express = require('express');


// Constants
const PORT = process.env.PORT || "8080";
const HOST = process.env.HOST || "0.0.0.0";
const VERSION = process.env.VERSION || "1.0";

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Eric !!!!!!!  VERSION ${VERSION} ');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
