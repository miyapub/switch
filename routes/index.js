var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '点亮电灯的5种方法' ,next:{href:'switch',title:'普通方法'}});
});

router.get('/switch', function(req, res, next) {
  res.render('switch', { title: '开关' ,next:{href:'shop',title:'电商方法'}});
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: '购买开灯服务' ,next:{href:'gov',title:'摇一摇'}});
});

router.get('/gov', function(req, res, next) {
  res.render('gov', { title: '摇一摇' ,next:{href:'game',title:'玩游戏'}});
});
module.exports = router;
