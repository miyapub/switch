var page=function(){
    console.log('checking... location');
    console.log('');
}
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
    console.log('mobi mode');
  setInterval(function(){
    page();
  },1000);
}