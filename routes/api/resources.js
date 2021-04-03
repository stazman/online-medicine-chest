const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Resource = require('../../models/Resource');
const { check, validationResult} = require('express-validator');


router.get('/me', auth, async (req, res) => {

  try {

    const resources = await Resource.find({user: req.user.id});

    if(!resources){
      res.status(400).json({ errors: [{msg: 'There are no resources for this user'}]});
    }

    res.json(resources)

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, [
  check('url', 'Please write the website\'s url (web address) or copy and paste it here.').exists(),
  check('url', 'Please use a valid email address').isURL()
], async (req, res) => {

  const { title, description, url } = req.body;

  const resourceFields = {};

  resourceFields.user = req.user.id;
  if (title) resourceFields.title = title;
  if (description) resourceFields.description = description;
  if (url) resourceFields.url = url;

  try {

    let resources = new Resource(resourceFields);

    resources.save();

    return res.json(resources);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
})

module.exports = router;
