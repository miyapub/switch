var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '点亮电灯的3种方法' ,next:{href:'switch',title:'普通方法'}});
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: '点亮电灯的3种方法' ,next:{href:'switch',title:'普通方法'}});
});

router.get('/switch', function(req, res, next) {
  res.render('switch', { title: '普通开关' ,next:{href:'toggle',title:'toggle'}});
});

router.get('/toggle', function(req, res, next) {
  res.render('toggle', { title: '触碰开关' ,next:{href:'hand',title:'摇一摇'}});
});

/*
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: '购买开灯服务' ,next:{href:'hand',title:'摇一摇'}});
});*/

router.get('/hand', function(req, res, next) {
  res.render('hand', { title: '摇一摇' ,next:{href:'game',title:'玩游戏'}});
});
module.exports = router;
