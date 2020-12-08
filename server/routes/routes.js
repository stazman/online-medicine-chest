var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Resource = require('../../models/Resource');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
 var resource = new Resource();
  resource.title = req.body.title;
  resource.description = req.body.desc;
  resource.url = req.body.url;

resource.save(function(err) {
      if (err)
        res.send(err);
      res.send('Resource successfully added!');
  });
})

router.route('/update')
.post(function(req, res) {
 const doc = {
     title: req.body.title,
     description: req.body.description,
     url: req.body.url
 };
 console.log(doc);
  Resource.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Resource successfully updated!');
  });
});

router.get('/delete', function(req, res){
 var id = req.query.id;
 Resource.find({_id: id}).remove().exec(function(err, resource) {
  if(err)
   res.send(err)
  res.send('Resource successfully deleted!');
 })
});

module.exports = router;