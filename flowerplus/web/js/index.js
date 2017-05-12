/*
* @Author: yy
* @Date:   2016-07-10 21:39:51
* @Last Modified by:   yy
* @Last Modified time: 2016-11-07 16:49:16
*/

'use strict';
/*
* @Author: yy
* @Date:   2016-06-24 11:36:19
* @Last Modified by:   yy
* @Last Modified time: 2016-07-10 20:52:39
*/

$(document).ready(function() {

    var $key=0; 
    var num=0;   
    var Height=40;
    
    var timer=setInterval(autoplay,6000);
       function autoplay(){
        $(".bgimg li").eq($key).fadeOut(1000);
            $key++;
        $key=$key%$(".bgimg li").length;
        $(".bgimg li").eq($key).fadeIn(1000);
       }
    $(".story-con li").hover(function() {
        $(this).find(".libg,.li-p").show();
    }, function() {
        $(this).find(".libg,.li-p").hide();
    }); 

    $(".banner .arr").click(function(event) {
            $("body,html").stop().animate({
                "scrollTop":$(".Tit").offset().top
            },500);
        });
    $(window).scroll(function(event) {
            num=$(document).scrollTop();
            if(num>=Height)
                    {
                        $("nav").css({"position":"fixed","top":0,"background":"#fff","border-bottom":"1px solid #d2d2d2"});
                        $("nav h1 .logo").css('display', 'none').siblings(".logo1").css('display', 'block');
                        $(".nav-r>a,.username,.iconfont").css('color', '#333'); 
                        $(".nav-r>a span").css('border-color', '#d2d2d2');                      
                    }
                    else{
                        $("nav").css({"position":"absolute","background":"none","border-bottom":"0px solid #aaa"}); 
                        $("nav h1 .logo1").css('display', 'none').siblings('.logo').css('display', 'block');
                        $(".nav-r>a,.username,.iconfont").css('color', '#fff');
                        $(".nav-r>a span").css('border-color', '#fff'); 
                    }               
        });
    $(".nav-r a.move").click(function(event) {
            $("body,html").stop().animate({
                "scrollTop":$(".p-section").eq($(this).index()).offset().top
            },1000);
            $(this).addClass('current').siblings('a').removeClass('current');
    });
     var scrollTOP=0;
         $(window).scroll(function(event) {
             scrollTOP=$(document).scrollTop(); 
             if(scrollTOP>=$(".contactout").offset().top)
             {
                $(".nav-r a").eq(5).addClass('current').siblings().removeClass('current'); 
             }
              else if(scrollTOP>=$(".aboutout").offset().top)
             {
                $(".nav-r a").eq(4).addClass('current').siblings().removeClass('current'); 
             }
              else if(scrollTOP>=$(".buyout").offset().top)
             {
                $(".nav-r a").eq(3).addClass('current').siblings().removeClass('current'); 
             }                         
             else if(scrollTOP>=$(".storyout").offset().top)
             {
                $(".nav-r a").eq(2).addClass('current').siblings().removeClass('current'); 
             } 
             else if(scrollTOP>=$(".productout").offset().top)
             {
                $(".nav-r a").eq(1).addClass('current').siblings().removeClass('current'); 
             }  
             else if(scrollTOP>=$(".bannerout").offset().top)
             {
                $(".nav-r a").eq(0).addClass('current').siblings().removeClass('current'); 
             }  
         });
   $(".product .center li").hover(function() {
        $(".product .center li").removeClass('current').find('u').show();
        $(this).addClass('current').find('u').hide();
    }, function() {
         $(".product .center li").removeClass('current');
         $(".product .center li").find('u').show();
         $(".product .center li").eq(1).addClass('current').find('u').hide();
    });


    var a = $(".product .center>li");
    a.mouseover(function () {
        a.removeClass("current");
        $(this).addClass("current") 
    });
    $(".product .right").click(function () {
        var b = $(".product .center a:first"), c = $(".product .center li.current").index();
        $(".product ul a:last").after(b);
        //$(".product ul>li:last").css('width', '0');
        $(".product ul li").removeClass('active')
        $(".product ul li:first").addClass('active')
        $(".product ul li").removeClass("current").find('u').show();
        $(".product ul").find("li").eq(1).addClass("current").find('u').hide(); 
    });
    $(".product .left").click(function () {
        var c = $(".product .center a:last"), b = $(".product .center li.current").index();
        $(".product ul a:first").before(c);
        $(".product ul li").removeClass("current").find('u').show();
        $(".product ul").find("li").eq(1).addClass("current").find('u').hide(); 
    })

});