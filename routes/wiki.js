
const express = require('express');
const router = express.Router();
let db = require('../models');





router.get('/', function(req, res){
    let allData = db.Page.findAll();
    res.status(201).send(allData);
});



router.get('/add', function(req, res){
    res.render('addpage');
});




router.post('/wiki/', function(req, res){
    let content = req.body.content
    let date = req.body.date
    let url = req.body.urlTitle
    let status = req.body.status;

    



});


module.exports = router;