var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // init(res);
  res.render('index', {title: '1'});
});
module.exports = router;
