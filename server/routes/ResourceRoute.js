const express = require('express');
const app = express();
const ResourceRoute = express.Router();

// Require Post model in our routes module
let Resource = require('../../models/Resource');

// Defined get data(index or listing) route
ResourceRoute.route('/').get(function (req, res) {
    Resource.find(function (err, resources){
    if(err){
      console.log(err);
    }
    else {
      res.json(resources);
    }
  });
});

// Defined store route
ResourceRoute.route('/add').post(function (req, res) {
  let resource = new Resource(req.body);
  resource.save()
    .then(resource => {
    res.status(200).json(resource);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined delete | remove | destroy route
ResourceRoute.route('/delete/:id').get(function (req, res) {
    Resource.findByIdAndRemove({_id: req.params.id}, function(err, resource){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});

module.exports = ResourceRoute;

//needs update

// router.route('/update')
// .post(function(req, res) {
//  const doc = {
//      title: req.body.title,
//      description: req.body.description,
//      url: req.body.url
//  };
//  console.log(doc);
//   Resource.update({_id: req.body._id}, doc, function(err, result) {
//       if (err)
//         res.send(err);
//       res.send('Resource successfully updated!');
//   });
// });
