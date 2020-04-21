const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const assert = require('assert');
const router = require('express').Router()
const url = 'mongodb://localhost:27017/employeedb';

router.get('/todoList', function(req, res, next) {
    const result=[];
    res.render('todoList',{title:'Todo List',result});
});

router.post('/insert',function(req, res) {
    var item = {
        id:req.body.id,
        name: req.body.name,
        todo: req.body.todo
    };

    mongo.connect(url,function(err, db) {
        assert.equal(null, err);
        db.collection('todo').insertOne(item, function(err, result) {
        assert.equal(null, err);
        db.close();
        res.redirect('/todoList');
        });
    });

    
    
});

router.get('/get-data', function(req, res, next) {
    const result = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('todo').find();
        cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        result.push(doc);
        }, function() {
        db.close();
        res.render('todoList', {result,title:'Todo List'});
        
        });
    });
});

router.get('/todo', function(req, res, next) {
    var employeeID = req.body.employeeID;
    const resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('todo').find(employeeID);
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
            }, function() {
            db.close();
            res.render('todo', {resultArray});
            
            });
    });
});


module.exports = router;