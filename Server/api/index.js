const router = require('express').Router();
module.exports = router;


router.use('/missingpeoples', require('./missingpeoples'));

