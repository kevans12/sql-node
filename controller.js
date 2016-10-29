var app = require('./index');
var db = app.get('db');

module.exports = {
    Create: function(){
        app.put('/create', function(req, res) {
          db.create_product([req.body.name, req.body.description, req.body.price,
          req.body.imageurl], function(err, product){
            console.log(err, "product added");
          })
        });
    },

    GetAll:
    // function(){
    //    app.get('/getall',
       function(req, res) {
          db.read_products(function(err, getall){
            res.status(200).send(getall)
          })
        // });
    },

    GetOne: function(){
        app.get('/getone', function(req, res) {
          db.read_product(function(err, one){
            res.status(200).send(one)
          })
        });
    },

    Update:
        // function(){
        // app.post('/update',
        function(req, res) {
          db.update_product([req.body.id, req.body.description ],function(err, product){
            console.log(err, "product updated")
          })
        // });
    },

    Delete: function(){
        app.delete('/delete', function(req, res) {
          db.delete_product(function(err, all){
            res.status(200).send(all)
          })
        });
    }

}
