/* 
* @Author: shmily
* @Date:   2019-01-11 13:02:21
* @Last Modified by:   shmily
* @Last Modified time: 2019-01-11 17:15:01
*/
$('http://gjqt3.wangyuan.com/zt/onecard/js/.public_nav .n1').click(function(){
    $('.gray').show();
    $('.reg_box').show();
    $(".hd li a").hide();
});
$('.reg_box .close,.gray,.bd .close').click(function(){
    $('.gray').hide();
    $('.reg_box').hide();
    $(".bd").hide();
    $(".slideBox .hd li a").show();
});
$(".slideBox").slide({
    mainCell: ".bd ul",
    autoPlay: false,
    interTime: 5000,
    delayTime: 800
});
$(".exh .hd a").on("click",function(){
    $('.gray').show();
    $(".next").show();
    $(".prev").show();
    $(".bd").show();
    $(".hd li a").hide();
})
$(function(){
    //底部导航
    $('.flexbtn').click(function(){
        var h=$('.public_nav').height();
        if(h>1){
            $('.public_nav').stop().animate({'width':'1048','height':'0','padding-top':'0'},100,'linear');
            $('.imgsb').hide();
            $('http://gjqt3.wangyuan.com/zt/onecard/js/.public_nav .n2').hide();
            $(this).stop().animate({'bottom':'0'},100,'linear');
            $(this).children('a').addClass('hover');
        }else{
            $('.public_nav').stop().animate({'width':'1048','height':'108','padding-top':'7'},100,'linear');
            $('.imgsb').show();
            $('http://gjqt3.wangyuan.com/zt/onecard/js/.public_nav .n2').show();
            $(this).stop().animate({'bottom':'115'},100,'linear');
            $(this).children('a').removeClass('hover');
        }
    })
    
    //监听消息事件，iframe登陆成功后触发
    window.addEventListener('message',function(e){
        var msg = e.data;
        //注册成功通知
        if  (msg.data_type == 'regsuccess'){
            //msg.uname 注册的用户名
             $('.succbox').show();
             $('.logn_main').hide();
             $('.succbox span').html("请谨记您的账号"+msg.uname);
            //location.reload();
            //console.log(msg.uname)
        }
    });
    $('.backBtn').click(function(){
        $('.succbox').hide();
        $('.logn_main').show();
    })
})
