const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Advisor route"));

module.exports = router;