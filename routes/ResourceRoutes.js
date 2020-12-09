const router = require('express').Router();

let Resource = require('../models/Resource.model');

router.route('/').get((req, res) => {
  Resource.find()
    .then( resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  let resource = new Resource(req.body);
  
  resource.save()
    .then(() => res.json('Resource added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;