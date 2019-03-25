$(function(){
	var wwth=$(window).width();
	if(wwth>1920){
		$('body').css({
			'width':'1920px',
			'margin-top':'0',
			'margin-left':'auto',
			'margin-bottom':'0',
			'margin-right':'auto',
			'position':'relative'
			
		});
	}
	/*获取地址*/
	function GetQueryString(name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
	var forme=GetQueryString('frome');
	if(forme!=null){
		$('.logn_box').show();
		$('.gray').show();
	}
	var timer=null ;
	var n=0;
	setInval();
	$('.bottom_dh li').hover(function(){
		var z=$(this).index();
		n=z;
		$(this).children('a').addClass('hover').parents('li').siblings().children('a').removeClass('hover');
		$('.new_banner p').eq(z).show().siblings('p').hide();
		clearInterval(timer);		
	},function(){
		setInval();
	})
	function setInval(){
		timer=setInterval(function(){
			n+=1;
			if(n<=5){
				$('.bottom_dh li').eq(n).children('a').addClass('hover').parents('li').siblings().children('a').removeClass('hover');
				$('.new_banner p').eq(n).show().siblings('p').hide();
			}else{
				n=0;
				$('.bottom_dh li').eq(n).children('a').addClass('hover').parents('li').siblings().children('a').removeClass('hover');
				$('.new_banner p').eq(n).show().siblings('p').hide();
			}
		},2000)
	}
	$('.role_nav li').mouseenter(function(){
		var i=$(this).index();
		$(this).children('a').addClass('hover').parents('li').siblings().children('a').removeClass('hover');
		$('.rolebg').eq(i).show().siblings('.rolebg').hide();
		$('.rolecent').eq(i).show().siblings('.rolecent').hide();
	});

	
	 $('.nav_content dt').on('mouseenter',function(){
     	   var sl= $(this).children('div').length;
     	   if(sl>0){
     	   		$(this).children('div').stop().fadeIn();
     	   }
     });
     $('.nav_content dt').on('mouseleave',function(){
     	   var sl= $(this).children('div').length;
     	   if(sl>0){
     	   		$(this).children('div').stop().fadeOut();
     	   }
     })
	
	 function tab(n,m){
   	   $(n).on('mouseover',function () {
	         var _index = $(this).index();
	         $(m).eq(_index).show().siblings(m).hide();
	         $(this).children('a').addClass("hover").parents('li').siblings().children('a').removeClass("hover");
	    });
    }
	 tab('.news_title li','.news_list');
	 tab('.video_nav li','.video_list .mov_div');
	 /*视频*/
	 $('.close').click(function(){
	 	 $('.gray').fadeOut();
		 $('.v-eject').fadeOut();
		 $('.v-eject p').html('');
		 $('.logn_box').hide();
		 $('.down_box').hide();
	 })
	 $('.videobtn') .click(function(){
	 	 var x=$(this).parents('li').index();
	 	 console.log(x);
	 	 $('.gray').fadeIn();
		 $('.v-eject').fadeIn();
		 $('.v-eject').css({
		 	'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px',
            'background':'#000'
		 })
		 $('.v-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="/video/g'+parseInt(x+1)+'.html" width="960" height="540" frameborder="no"></iframe>')
	 })
	 function imgFunc(imgurl,temp) {
        return imgurl.substr(0,imgurl.length-4)+temp+imgurl.substr(imgurl.length-4,imgurl.length);
    }
	 $('.imgbox li').hover(function(){
	 	 
	 	  $(this).children().children('.ckbtn').show();
	 },function(){
	 	  $(this).children().children('.ckbtn').hide();
	 })
	 $('.ckbtn').click(function(){
	 	  var imgurl=imgFunc($(this).parents('li').children('img').attr('src'),'_e');
	 	  console.log(imgurl);
	 	  var img=new Image();
          img.src=imgurl;
          img.onload=function () {
            var w=img.width;
            var h=img.height;
             $('.gray').fadeIn();
			 $('.v-eject').fadeIn();
			 $('.v-eject').css({
			 	'width':w+'px',
	            'height':h+'px',
	            'margin-left':-(w/2)+20,
	                'margin-top':-(h/2)+20,
	            'background':'#000'
			 })
			 $('.v-eject p').html('<img src="'+imgurl+'">');
          }
	 })
	 $('.slider').bxSlider({ 
	 	    mode:'vertical', //默认的是水平
            slideHeight: 118,
			minSlides: 36,
			maxSlides: 36,
			ticker: true,
			speed: 30000,
			startSlides: 0, 
            slideMargin: 10
     });
	   //监听消息事件，iframe登陆成功后触发
    window.addEventListener('message',function(e){
        var msg = e.data;

        //注册成功通知
        if  (msg.data_type == 'regsuccess'){
            //msg.uname 注册的用户名
             $('.succbox').show();
             $('.login_cont').hide();
             $('.succbox span').html("请谨记您的账号"+msg.uname);
            //location.reload();
//            console.log(msg.uname)
        }
    })
    $('.backBtn a').click(function(){
    	$('.succbox').hide();
    	 $('.logn_main').show();
    })
    $('.logn_btn a').click(function(){
    	$('.gray').show();
    	$('.logn_box').show();
    })
    $('.video_btn').click(function(){
    	$('.gray').fadeIn();
		 $('.v-eject').fadeIn();
		 $('.v-eject').css({
		 	'width':'960px',
            'height':'540px',
            'margin-left':'-500px',
            'margin-top':'-270px',
            'background':'#000'
		 })
		 $('.v-eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="z1.html"/*tpa=http://gjqt3.wangyuan.com/video/z1.html*/ width="960" height="540" frameborder="no"></iframe>')
    })
    /*
    $('.btn_box dd').click(function(){
    	$('.gray').show();
    	$('.down_box').show();
    })
    */
})
