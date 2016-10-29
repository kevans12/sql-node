var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://postgres:soccer12@localhost/practice-products";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);

var controller = require('./controller'); //have to call after our export

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});

app.get('/getall', controller.GetAll);
controller.GetOne();
controller.Create();
app.post('/update', controller.Update);

// var db = app.get('db');

// db.create_products(function(err, product){
//   console.log(err, "product added");
// });


// app.get('/getall', function(req, res) {
//    db.read_products(function(err, getall){
//      res.status(200).send(getall)
//    })
//  });

// app.get('/test', function(req, res) {
//   res.status(200).send({
//     hello: 'World'
//   })
// });
