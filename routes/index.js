var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '爱迪生都不知道的开灯方式'});
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: '爱迪生都不知道的开灯方式'});
});

router.get('/switch', function(req, res, next) {
  res.render('switch', { title: '普通开关'});
});

router.get('/info', function(req, res, next) {
  res.render('info', { title: '介绍'});
});

router.get('/future', function(req, res, next) {
  res.render('future', { title: '未来'});
});


router.get('/game', function(req, res, next) {
  res.render('game', { title: '游戏'});
});

router.get('/keywords', function(req, res, next) {
  res.render('keywords', { title: '关键字'});
});

router.get('/3q', function(req, res, next) {
  res.render('3q', { title: '谢谢'});
});


router.get('/toggle', function(req, res, next) {
  res.render('toggle', { title: '智能家居'});
});

router.get('/up', function(req, res, next) {
  res.render('up', { title: '一起来点赞'});
});

/*
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: '购买开灯服务' ,next:{href:'hand',title:'摇一摇'}});
});*/

router.get('/hand', function(req, res, next) {
  res.render('hand', { title: '摇一摇'});
});
module.exports = router;
