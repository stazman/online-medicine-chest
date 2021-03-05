const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Journal route"));

module.exports = router;