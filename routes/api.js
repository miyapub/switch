var express = require('express');
var router = express.Router();
var fs = require ('fs');

/* GET home page. */
router.get('/on', function(req, res, next) {
  res.json({err:false,state:1});
});

router.get('/off', function(req, res, next) {
  res.json({err:false,state:0});
});

router.get('/page/:routername', function(req, res, next) {
  var routername=req.params.routername;
  res.json({err:false,state:1,msg:routername});
});

module.exports = router;
