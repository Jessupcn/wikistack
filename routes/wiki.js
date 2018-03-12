
const express = require('express');
const router = express.Router();
let db = require('../models');
let chalk = require('chalk');



router.get('/', function(req, res){
    db.Page.findAll()
        .then(data => {
            console.log(chalk.green("======== allData: "), data);
            res.status(201).send(data);
        });
});



router.get('/add', function(req, res){
    res.render('addpage');
});



router.post('/', function (req, res) {
    let title = req.body.title;
    //let urlTitle = req.body.urlTitle;
    let content = req.body.content;
    let status = req.body.status;
    let date = req.body.date;

    let urlTitle = function () {
        let arrTitle = title.split(' ');
        arrTitle = arrTitle.join('_');
        return arrTitle + '.com';
    }();

    console.log(chalk.yellow("======== urlTitle: "), urlTitle);

    let page = db.Page.build({
        title: title,
        urlTitle: urlTitle,
        content: content,
        status: status,
        date: date
    })
    
    page.save();
   
    res.redirect('/wiki');
    
});


module.exports = router;