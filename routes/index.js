
const express = require('express');
const router = express.Router();

router.use('/wiki/', require('./wiki'));
router.use('/users/', require('./users'));


module.exports = router;