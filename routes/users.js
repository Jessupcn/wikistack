const express = require('express');
const usr_router = express.Router();
let db = require('../models');





usr_router.get('/', function(req, res){
    let allData = db.User.findAll();
    res.status(201).send(allData);
});



usr_router.get('/:num', function(req, res){
    //......
});



usr_router.put('/:num', function(req, res){
    //....
});


usr_router.post('/', function(req, res){
    let content = req.body.content
    let date = req.body.date
    let url = req.body.urlTitle
    let status = req.body.status;

    //.....


});


usr_router.delete('/:num', function(req, res){
    //....
});



module.exports = usr_router;