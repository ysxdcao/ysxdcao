$(function () {
	//var bodyh=$('.main').height();
	var bodyh=$('.right_box').height();
	
	$('.left_box').css({'height':bodyh+53});
	$('.navlist li').hover(function () {
        if($(this).find('.navlist--nav').length>0){
            $(this).find('p a').addClass('on');
            $(this).children('.navlist--nav').stop().fadeIn();
        }
        // if($(this).find('.navlist--nav'))
    },function () {
       $(this).find('p a').removeClass('on');
        $(this).children('.navlist--nav').stop().fadeOut();
    });
    $('.js-movie-box div div').hover(function () {
        var url=imgFunc($(this).find('img').attr('src'),'_large');
        var hoverDiv='<p class="active" style="display: none"><span></span><em class="show js-show">点击查看</em><a href="'+url+'" download="'+$(this).attr('data-id')+'" class="down js-down"></a></p>';
        $(this).append(hoverDiv);
        $(this).children('.active').fadeIn();    
    },function () {
        $(this).children('.active').fadeOut(function () {
        $(this).remove();
        })
    })
    function imgFunc(imgurl,temp) {
        return imgurl.substr(0,imgurl.length-4)+temp+imgurl.substr(imgurl.length-4,imgurl.length);
    }
    var wdh=$(window).height();
    $(document).on('click','.js-show',function () {
        var imgurl=imgFunc($(this).parent().prev().attr('src'),'_e');
        var img=new Image();
        img.src=imgurl;
        img.onload=function () {
            var w=img.width;
            var h=img.height;
            if($('.js-gray').length==0){
                $('body').append('<div class="gray js-gray"></div>');
            }
            if($('.js-eject').length==0){
                $('body').append('<div class="eject js-eject"><p><a class="close" href="javascript:;"><img src="close-1.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/close.jpg*/></a></p></div>');
            }
            if(wdh<h){
            	 var top = $(document).scrollTop();
			    $(document).on('scroll.unable',function (e) {
			        $(document).scrollTop(top);
			    })
            	$('.js-eject').css({
	                'width':'104%',
	                'height':'100%',
	                'top':'0px',
	                'overflow':'auto',
	                'margin':'0',
	                'left':'0',
	                'overflow-x': 'hidden',
   					'overflow-y' : 'scroll',
   					
	            })
            	$('.js-eject p').css({
            		'width':w,
            		'left':'50%',
            		'margin-left':-(w/2)+20,
            	})
            	$(document).on('click','.js-eject',function () {
			    	$(this).fadeOut();
			        $('.gray').fadeOut();
			        $('.js-eject').removeAttr('style'); 
			        $('.js-eject p').removeAttr('style'); 
			        $('.close').removeAttr('style'); 
			        $(document).unbind("scroll.unable");
			    });
	         }else{
            	$('.js-eject').css({
	                'width':w,
	                'height':h,
	                'top':'50%',
	                'left':'50%',
	                'margin-left':-(w/2)+20,
	                'margin-top':-(h/2)+20,
	            })
            }
        	
    	
            $('.js-eject p').html('<a class="close" href="javascript:;"><img src="close-1.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/close.jpg*/></a><img src="'+imgurl+'"/>');
            $('.js-gray,.js-eject').fadeIn();
			$('.close').on('click',function(){
		    	$('.gray').hide();
		    	$('.js-eject').hide();
		    	$('.js-eject p').html('');
		    	 $(document).unbind("scroll.unable");
	    	    $('.js-eject').removeAttr('style'); 
		        $('.js-eject p').removeAttr('style'); 
		        $('.close').removeAttr('style'); 
		    	$('.js-eject').removeAttr('style'); 
		    })

        }

    });
    $(document).on('click','http://gjqt3.wangyuan.com/dist/201804/js/.js-gray,.gray',function () {
    	$(this).fadeOut();
        $('.js-eject').fadeOut();
        $('.bigbox,.ejectimg').hide();
        $('.ejectimg p').hide();
         $(document).unbind("scroll.unable");
	    $('.js-eject').removeAttr('style'); 
        $('.js-eject p').removeAttr('style'); 
        $('.close').removeAttr('style'); 
    });
    
	$('.down_link').hover(function(){
		$(this).css({
			'background':'#c6a35d url("down_small_01.png"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/down_small_01.png*/) no-repeat 104px  center',
			'color':'#fff',
		})
	},function () {
		$(this).css({
	        'background':'url("down_small.png"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/down_small.png*/) no-repeat 104px  center',
			'color':'#c9a254',
		})
    })
   $('.mov_box .mov_div1 dt').on('click',function(){
         $('.js-eject').css({
            'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px'
        })
        $('.js-eject p').show();
        $('.js-eject p').html('<a class="close" href="javascript:;"><img src="close-1.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/close.jpg*/></a><iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="x4.html"/*tpa=http://gjqt3.wangyuan.com/video/x4.html*/ width="960" height="540" frameborder="no"></iframe>');
        $('.js-gray,.js-eject').fadeIn();
		$('.close,.js-gray').on('click',function(){
	    	$('.gray').hide();
	    	$('.js-eject').hide();
	    	$('.js-eject p').html('');
	    })
   })
    $('.mov_box .mov_div2 dt').on('click',function(){
         $('.js-eject').css({
            'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px'
        })
        $('.js-eject p').show();
        $('.js-eject p').html('<a class="close" href="javascript:;"><img src="close-1.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/close.jpg*/></a><iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="v2.html"/*tpa=http://gjqt3.wangyuan.com/video/v2.html*/ width="960" height="540" frameborder="no"></iframe>');
        $('.js-gray,.js-eject').fadeIn();
		$('.close,.js-gray').on('click',function(){
	    	$('.gray').hide();
	    	$('.js-eject').hide();
	    	$('.js-eject p').html('');
	    })
   })
   $('.mov_more .show_movie').on('click',function(){
         $('.js-eject').css({
            'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px'
        })
        var z=parseInt($(this).parents().parents().parents().index()+1)
        $('.js-eject p').show();
        $('.js-eject p').html('<a class="close" href="javascript:;"><img src="close-1.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/close.jpg*/></a><iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="/video/v'+z+'.html" width="960" height="540" frameborder="no"></iframe>');
        $('.js-gray,.js-eject').fadeIn();
		$('.close,.js-gray').on('click',function(){
	    	$('.gray').hide();
	    	$('.js-eject').hide();
	    	$('.js-eject p').html('');
	    })
   })
   
    /*场景风物js*/
   $(".dhbtn li").on('mouseover',function () {
        var _index = $(this).index();
        $("#tab .lbbox").eq(_index).show().siblings().hide();
        $(this).addClass("hover").siblings().removeClass("hover");
    });
    $(".jstxt a").on('click',function(){
    	var ind=$(this).parent().parent().index();
    	$('.gray').show();
    	$('.ejectimg').show();
    	$('.ejectimg p').eq(ind).show();
    })
    $('.bwxhbj a').on('click',function(){
    	$('.gray').show();
    	$('.ejectimg').show();
    	$('.ejectimg p').show();
    })
     $('.flsbox a').on('click',function(){
    	$('.gray').show();
    	$('.ejectimg').show();
    	$('.ejectimg p').show();
    })
    
    $('.close,.js-gray').on('click',function(){
    	$('.gray').hide();
    	$('.ejectimg').hide();
    	$('.ejectimg p').hide();
    	$('.js-eject').hide();
    	$('.js-eject p').hide();
    })
    /*返回按钮*/
    $('#return-top').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('#return-top').fadeIn(300);
        }else{
        	$('#return-top').fadeOut(200);
        }
    });
    $('#return-top').click(function(){
        $('body,html').animate({scrollTop:0},300);
        return false;
    })
        /*点击大图*/
		$('.ltcbig img').on('click',function(){
			var src=$(this).attr('src');
			var index = src .lastIndexOf("\/");  
			src  = src .substring(index + 1, src .length);
			var src2 = src.replace(/[^0-9]/ig,"");
			$('.gray').show();
			$('.bigbox').show();
			$('.bigbox p').html('<a class="close1" href="javascript:;"><img src="close_01.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/sc/close_01.jpg*/></a><img src="http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/c_img/c_'+src2+'_e.jpg">');
			
		})
		
		$('.gmybig img').on('click',function(){
			var src=$(this).attr('src');
			var index = src .lastIndexOf("\/");  
			src  = src .substring(index + 1, src .length);
			var src2 = src.replace(/[^0-9]/ig,"");
			$('.gray').show();
			$('.bigbox').show();
			$('.bigbox p').html('<a class="close1" href="javascript:;"><img src="close_01.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/sc/close_01.jpg*/></a><img src="http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/gmy/g_'+src2+'_e.jpg">');
		})
		$('.ylbig img').on('click',function(){
			var src=$(this).attr('src');
			var index = src .lastIndexOf("\/");  
			src  = src .substring(index + 1, src .length);
			var src2 = src.replace(/[^0-9]/ig,"");
			$('.gray').show();
			$('.bigbox').show();
			$('.bigbox p').html('<a class="close1" href="javascript:;"><img src="close_01.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/sc/close_01.jpg*/></a><img src="http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/yl/y_'+src2+'_e.jpg">');
		})
		$('.yywbig img').on('click',function(){
			var src=$(this).attr('src');
			var index = src .lastIndexOf("\/");  
			src  = src .substring(index + 1, src .length);
			var src2 = src.replace(/[^0-9]/ig,"");
			$('.gray').show();
			$('.bigbox').show();
			$('.bigbox p').html('<a class="close1" href="javascript:;"><img src="close_01.jpg"/*tpa=http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/sc/close_01.jpg*/></a><img src="http://i1.gbimg.cn/zt/2018/04/20/gjqt3x2018y20m/myc36x/images/yyw/w_'+src2+'_e.jpg">');
		})
	$('.rolemain li').hover(function(){
		$(this).addClass("on");
        $(this).siblings().removeClass("on");
        $(this).children('div').show();
        $(this).siblings().children('div').hide();
	})
	 $(document).on('click','.close1',function () {
	 	$('.bigbox').hide();
	 	$('.bigbox p').html('');
	 	$('.gray').hide();
	 	$('.ejectimg').hide();
	 	$('.ejectimg p').hide();
	 })

	/*判断手机横屏还是竖屏*/
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) { 
            $('.tsbox').hide();
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
            $('.tsbox').show();
        }  
    }, false);
    
    
    $('.navcont li').on('click',function(){
    	var ind=$(this).index();
    	$(this).addClass('hover').siblings().removeClass('hover');
    	$('.news_list').eq(ind).show().siblings('.news_list').hide();
    })
});
  


