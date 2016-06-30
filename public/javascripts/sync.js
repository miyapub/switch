var page=function(){
    console.log('checking...');
    var page=window.location.href;
    if(page.includes('admin')){
        //这里不同步
    }else{
        //这里同步
        page=page.split('/');
        var thisrouter=page[page.length-1];
        console.log(thisrouter);

        var href='';
        for(i=0;i<page.length-1;i++){
            href+=page[i]+'/';
        }


        console.log(href);

        $.getJSON('/public/page.json',function(json){
            var remot_routername=json.router;
            if(remot_routername===thisrouter){
                //无需跳转
            }else{
                window.location.href=href+remot_routername;
            }
        });
    }
    
}
setInterval(function(){
    page();
},1000);

$('.goto').click(function(){
    var router=$(this).attr('url');
    var url='/api/page'+router;
    $.getJSON(url,function(x){
        console.log(x);
    });
});