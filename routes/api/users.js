const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please use a valid email address').isEmail(),
  check('password', 'Please use a password with six or more characters').isLength({
    min: 6
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array() })
  }
  console.log(req.body);
  res.send("User route");
})

module.exports = router;
