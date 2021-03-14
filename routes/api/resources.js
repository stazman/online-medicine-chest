const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Resource = require('../../models/Resource');
const User = require('../../models/User');

router.get('/', auth, async (req, res) => {

  try {
    const resources = await Resource.findOne({ user: req.user.id });

    if(!resources){
      res.status(400).json({ errors: [{msg: 'No resource page exists for this user'}]});
    }

    res.json(resources);

  } catch(err){
    console.log(err.message);
    res.status(500).send('Server error');
  }
})

router.post('/', auth, [
    check('url', 'Please enter a valid url (copy and paste web address)').isURL()
  ], async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, url } = req.body;

    const resourceFields = {};

    resourceFields.user = req.user.id;
    if (title) resourceFields.title = title;
    if (description) resourceFields.description = description;
    if (url) resourceFields.url = url;

    try {

      let resources = await Resource.findOne({user: req.user.id});

      if (resources) {

        resources = await Resource.findOneAndUpdate(
          { user: req.user.id },
          { $set: resourceFields },
          { new: true }
        );
        return res.json(resources);
      }

      resources = new Resource(resourceFields);

      await resources.save();

      return res.json(resources);

    } catch (err) {

      console.log(err.message);

      res.status(500).send('Server error');

    }
})

module.exports = router;