var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/members', function (req, res) {
  res.render('members', { title: 'Hey' });
});

module.exports = router;
