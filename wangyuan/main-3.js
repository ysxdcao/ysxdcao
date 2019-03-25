$(function(){
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
    $('.plus_btn').hover(function(){
    	$(this).next('div').stop().fadeIn();
    },function(){
    	$(this).next('div').stop().fadeOut();
    })
    var music=$('.audio1')[0];
    $('.nyAudioBtn').on('click',function(){
    	if(music.paused){ 
	        music.play(); 
	        $('.lb_btn').children('div').addClass('ani');
	    }else{ 
	        music.pause(); 
	        $('.lb_btn').children('div').removeClass('ani');
	    } 
    })
    music.addEventListener("ended",function(){
         $('.nyAudioBtn').removeClass('ani');
    })
    function video(){
    	$('.gray').fadeIn();
		$('.eject').fadeIn();
		$('.i-eject').css({
            'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px',
            'background':'#000',
       });
    }
    $('.video_1 a').on('click',function(){
    	video();
		$('.i-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="http://gjqt3.wangyuan.com/character/js/v/a1.html" width="960" height="540" frameborder="no"></iframe>')
    });
    $('.video_2 a').on('click',function(){
    	video();
		$('.i-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="http://gjqt3.wangyuan.com/character/js/v/a2.html" width="960" height="540" frameborder="no"></iframe>')
    });
    $('.video_3 a').on('click',function(){
    	video();
		$('.i-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="http://gjqt3.wangyuan.com/character/js/v/a3.html" width="960" height="540" frameborder="no"></iframe>')
    });
     $('.video_4 a').on('click',function(){
    	video();
		$('.i-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="http://gjqt3.wangyuan.com/character/js/v/a4.html" width="960" height="540" frameborder="no"></iframe>')
    });
    $('.gray,.close').on('click',function(){
    	$('.gray').fadeOut();
		$('.eject').fadeOut();
		$('.i-eject p').html('');
    })

})
