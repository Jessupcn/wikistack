'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const models = require('./models');

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
const env = nunjucks.configure('views', { noCache: true });
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

// logging middleware
app.use(morgan('dev'));


// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


app.use('/', require('./routes/index'));


// db.sync({
//     force: true
// })

// models.User.sync()
// .then(function () {
//     console.log('User table created!');
//     return models.Page.sync();
// })
// .then(function () {
//     console.log('Page table created!');
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error.bind(console));



models.db.sync({ force: true })
    .then(function () {
        console.log('All tables created!');
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error.bind(console));






// const server = app.listen(3000, function(){
//     console.log('listening on port 3000');
// });
