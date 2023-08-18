const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/deeznuts', function(req, res, next) {
  res.render('index', {title: 'DEEZNUTS'});
});

module.exports = router;
