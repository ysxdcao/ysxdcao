$(function(){
	$('.feature_title li').click(function(){
		var z=$(this).index();
        $(this).addClass('hover').siblings().removeClass('hover');
        $('.imglist_box li').eq(z).show().siblings().hide();
	})
	$('.big_nav li').click(function(){
	    var i=$(this).index();
        $(this).addClass('hover').siblings().removeClass('hover');
        $('.cjfw_bg').eq(i).show().siblings('.cjfw_bg').hide();
        $('.imgtab_con').eq(i).show().siblings('.imgtab_con').hide();
	})
	/* 
	$('.tab_nav li').click(function(){
		var e=$(this).index();
		 $(this).addClass('hover').siblings().removeClass('hover');
		 $(this).parents('.tab_nav').parents('.imgtab_con').children('.img_tab').children('li').eq(e).show();
		 $('.img_tab li').eq(e).show().siblings('li').hide();
	})
    */
	function tab(n,m){
		$(n).on('mouseover',function () {
	         var _index = $(this).index();
	         $(m).eq(_index).show().siblings().hide();
	         $(this).addClass('hover').siblings('li').removeClass('hover');
	    });
	}
	tab('.ylbtn li','.ylimg li');
	tab('.gmybtn li','.gmyimg li');
	tab('.tlcbtn li','.tlcimg li');
	tab('.yywbtn li','.yywimg li');
    $('.video_nav li').click(function(){
    	var i1=$(this).index();
    	$(this).addClass('hover').siblings('li').removeClass('hover');
    	$('.tabbox .list_v').eq(i1).show().siblings('.list_v').hide();
    	
    })
    $('.menu').click(function(){
    	var s=$('.dropBox').hasClass('show');
		if(s==true){
			$('.dropBox').stop().animate({'right':'-50%'},200,'linear');
			$(".dropBox").removeClass("show");
		}else{
			$('.dropBox').stop().animate({'right':'0'},200,'linear');
			$(".dropBox").toggleClass("show");
		}
    })
    $('.dropBox li a').click(function(){
    	var h=$('.dropBox').height;
    	var t=$($(this).attr("href")).offset().top-60;
    	$("html,body").animate({ scrollTop:t + "px"},1000);
    	$('.dropBox').stop().animate({'right':'-50%','height':h},500,'linear');
    	$(".dropBox").removeClass("show");
    })
    $('.r_close').click(function(){
    	$('.gray').hide();
    	$('.reg_box').hide();
    })
    $('#lognbtn').click(function(){
    	$('.gray').show();
    	$('.reg_box').show();
    	$('.dropBox').stop().animate({'right':'-50%'},200,'linear');
		$(".dropBox").removeClass("show");
		lognbtn();
    })
    $('.news_title li').click(function(){
    	var x=$(this).index();
    	$(this).addClass('hover').siblings('li').removeClass('hover');
    	$('.news_list').eq(x).show().siblings('.news_list').hide();
    })
    $('.imgmain .swiper-slide li').click(function(){
    	var img=$(this).attr('data-src');
    	if(img!='undefined'){
    		$('.gray').show();
    		$('.eject').show();
    		$('.eject p').html('<img src="'+img+'">')
    	}
    })
    $('.close').click(function(){
    	$('.gray').hide();
    	$('.eject').hide();
    	$('.eject p').html('');
    })
     $(".videobk .swiper-slide li").click(function () {
    	var vsrc=$(this).attr('data-src');
    	$('.gray').show();
    	$('.eject').show();
    	$('.eject p').html('<video class="myvideo" src="'+vsrc+'" controls="true"></video>')
    	$('.myvideo')[0].play()
    });
})




