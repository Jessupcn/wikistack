
const express = require('express');
const app = express();

app.use('/wiki/', require('./wiki'));
app.use('/users/', require('./users'));


module.exports = app;