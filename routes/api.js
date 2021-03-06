var express = require('express');
var router = express.Router();
var fs = require ('fs');
var path = require ('path');
var jsonfile = require('jsonfile');
var nodegpio=require('nodegpio');
/* GET home page. */


function off(cb){
  nodegpio.low(21,0);
  //
  var state_json={
     state:0
  }
  var file=path.join(__dirname, '../public/state.json');
  jsonfile.writeFile(file, state_json, {spaces: 2}, function(err) {

  });
  //
  var json={err:false,state:0,msg:'已关闭'};
  cb(json);
}
function on(cb){
  nodegpio.high(21,1);
    var state_json={
     state:1
  }
  var file=path.join(__dirname, '../public/state.json');
  jsonfile.writeFile(file, state_json, {spaces: 2}, function(err) {

  });
  var json={err:false,state:1,msg:'已点亮'};
  cb(json);
}

router.get('/on', function(req, res, next) {
  on(function(json){
    res.json(json);
  });
});

router.get('/off', function(req, res, next) {
  off(function(json){
    res.json(json);
  });
});

router.get('/toggle', function(req, res, next) {
  var file=path.join(__dirname, '../public/state.json');
  jsonfile.readFile(file, function(err, json) {
    var state=json.state;
    if(state===1){
      state=0;
    }else{
      state=1;
    }
    if(state===1){
        on(function(json){
          res.json(json);
        });
    }
    if(state===0){
        off(function(json){
          res.json(json);
        });
    }
  });  
});

router.get('/state', function(req, res, next) {
  //
  var file=path.join(__dirname, '../public/state.json');
  jsonfile.readFile(file, function(err, json) {
    var state=json.state;
    if(state===1){
      res.json({err:false,state:0,msg:'已点亮'});
    }
    if(state===0){
      res.json({err:false,state:0,msg:'已关闭'});
    }
  });  
  //
});

router.get('/updownnumber', function(req, res, next) {
  var file=path.join(__dirname, '../public/updownnumber.json');
  jsonfile.readFile(file, function(err, json) {
    var number=json.number;
    res.json({number:number});
  });  
});


function setNumber(number,cb){
  if(number<0){
    number=0;
  }
  if(number>100){
    number=100;
  }
  var json={
        number:number
  };
  if(number===100){
    on(function(){});
  }
  if(number<100){
    off(function(){});
  }
  var file=path.join(__dirname, '../public/updownnumber.json');
  jsonfile.writeFile(file, json, {spaces: 2}, function(err) {
    cb({number:number});
  });
}

router.get('/up', function(req, res, next) {
  var file=path.join(__dirname, '../public/updownnumber.json');
  jsonfile.readFile(file, function(err, json) {
    
    var number=json.number;
    number=parseInt(number);
    setNumber(number+2,function(x){
      res.json(x);
    });
  });  
});
router.get('/down', function(req, res, next) {
  var file=path.join(__dirname, '../public/updownnumber.json');
  jsonfile.readFile(file, function(err, json) {
    var number=json.number;
    number=parseInt(number);
    setNumber(number-1,function(x){
      res.json(x);
    });
  });  
});

//
router.get('/zero', function(req, res, next) {
  var file=path.join(__dirname, '../public/updownnumber.json');
  jsonfile.readFile(file, function(err, json) {
    setNumber(0,function(x){
      res.json(x);
    });
  });  
});

router.get('/page/:routername', function(req, res, next) {
  var routername=req.params.routername;
  //
  var file=path.join(__dirname, '../public/page.json');
  /*
  fs.open(file,"w",function(err,fd){
      var json={
        router:routername
      };
      var text=JSON.stringify(json);
      var buf = new Buffer(text);
      fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){
          res.json({err:false,state:1,msg:routername});
      });
  });*/
  var json={
        router:routername
      };
  jsonfile.writeFile(file, json, {spaces: 2}, function(err) {
    res.json({err:false,state:1,msg:routername});
  });
  //
  
});

module.exports = router;
