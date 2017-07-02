/**
 * Created by Administrator on 2017/5/31 0031.
 */
$(window).scroll(
    function(){
        var i=$(window).scrollTop();
        if(i>120){
            $("header").css("background"," rgba(212, 0, 0,0.8)")
        }
        if(i<50){
            $("header").css("background"," rgba(212, 0, 0,0.0)")
        }
    }
);