var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('aaa');
    res.sendFile(path.join(__dirname, '..', 'public', 'hello.html'));
});

module.exports = router;