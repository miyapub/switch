var express = require('express');
var router = express.Router();
var fs = require ('fs');
var path = require ('path');
var jsonfile = require('jsonfile');
/* GET home page. */


function off(cb){
  var json={err:false,state:0,msg:'已关闭'};
  cb(json);
}
function on(cb){
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
  //
  var file=path.join(__dirname, '../public/state.json');
  jsonfile.readFile(file, function(err, json) {
    var state=json.state;
    if(state===1){
      state=0;
    }else{
      state=1;
    }
    var state_json={
      state:state
    }

    jsonfile.writeFile(file, state_json, {spaces: 2}, function(err) {
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
  //
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
