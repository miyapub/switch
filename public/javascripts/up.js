$(document).ready(function(){
    
    $('.up').click(function(){
        $.getJSON('/api/up');
    });
    $('.down').click(function(){
        $.getJSON('/api/down');
    });
    function getNumber(){
        $.getJSON('/api/updownnumber',function(json){
            var number=json.number;
            $('.progress-bar').css("width",number+"%");
            $('.progress-bar').attr("aria-valuenow",number);
            $('.progress-bar').text(number+" %");
        });
    }
    getNumber();
    setInterval(getNumber,2000);
});