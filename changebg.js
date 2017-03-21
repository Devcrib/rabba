$(function(){
    var count = 0;
    var raba = $('.raba');
    var color_list = ['#006BA6','#0496FF','#FFBC42','#8F2D56','#e50d34'];
    raba.css('background-color',color_list[count]);
    setInterval(function(){
        raba.fadeOut(2000,function(){
            raba.css('background-color',color_list[count++]);
            raba.fadeIn(2000);
        });
        if(count == color_list.length){
            count = 0;
        }
    },6000);
})
