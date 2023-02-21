var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users page');
});

router.get('/details', function(req, res, next) {
  res.send('details page');
});
module.exports = router;
