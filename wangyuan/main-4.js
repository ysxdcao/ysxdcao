$(function(){
	//首页视频	
	$(".publicVideoBtn").click(function(){
		setStopMusic();
		var videoUrl = $(this).attr("videoUrl");
		$(".videoBg").fadeIn();
		$(".videoShow").fadeIn();
		$(".videoMain video").attr("src",videoUrl);
	});
	
	$(".videoClose").click(function(){
		$(".videoBg").fadeOut();
		$(".videoShow").fadeOut();
		$(".videoMain video").attr('src',"")
	});


	$(".msgClose").click(function(){
		$(".videoBg").fadeOut();
		$(".msgShow").fadeOut();
	});


	$(".bigPicClose").click(function(){
		$(".videoBg").fadeOut();
		$(".bigPicShow").fadeOut();
		$(".bigImg").html('');
	});


	$(".page2_tab a").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            $(".p2_box .p2_list").eq(index).show().siblings().hide();
            $(".p2_box_list .p_t_box").eq(index).show().siblings().hide();
			var videoUrl = $(this).attr("videoUrl");
			$("#page2video").attr("src",videoUrl);
			$('#page2video').get(0).play();
			var n = $(this).index();
            $(".page2_main .hd .p2 .p2_list").show().siblings().hide();
			for(var i=0; i<$(".page2_tab a").size(); i++){
				$(".page2").removeClass("page2_p"+i)
			}
			$(".page2").addClass("page2_p"+n)
		};
        $(".p2_3_list .p2_a1").addClass('on').siblings().removeClass('on')
	});

   

	$(".page3_tab a").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            $(".p3_box .p3_list").eq(index).show().siblings().hide();
            $(".p3_box_list .p_t_box").eq(index).show().siblings().hide();
			var videoUrl = $(this).attr("videoUrl");
			$("#page3video").attr("src",videoUrl);
			$('#page3video').get(0).play();
			var n = $(this).index();
			for(var i=0; i<$(".page3_tab a").size(); i++){
				$(".page3").removeClass("page3_p"+i)	
			}
			$(".page3").addClass("page3_p"+n)
		};
	});

    $(".page4_tab a").click(function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            $(".p4_box .p4_list").eq(index).show().siblings().hide();
            var videoUrl = $(this).attr("videoUrl");
            $("#page4video").attr("src",videoUrl);
            $('#page4video').get(0).play();
            var n = $(this).index();
            for(var i=0; i<$(".page4_tab a").size(); i++){
                $(".page4").removeClass("page4_p"+i)    
            }
            $(".page4").addClass("page4_p"+n)
        };
    });

    $(".page5_tab a").click(function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            $(".p5_box .p5_list").eq(index).show().siblings().hide();
            var videoUrl = $(this).attr("videoUrl");
            $("#page5video").attr("src",videoUrl);
            var n = $(this).index();
            for(var i=0; i<$(".page5_tab a").size(); i++){
                $(".page5").removeClass("page5_p"+i)    
            }
            $(".page5").addClass("page5_p"+n)
        };
    });


    $(".page6_tab a").click(function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            $(".p6_box .p6_list").eq(index).show().siblings().hide();
            var videoUrl = $(this).attr("videoUrl");
            $("#page6video").attr("src",videoUrl);
            $('#page6video').get(0).play();
            var n = $(this).index();
            for(var i=0; i<$(".page6_tab a").size(); i++){
                $(".page6").removeClass("page6_p"+i)    
            }
            $(".page6").addClass("page6_p"+n)
        };
    });



    $(".p5_list_1 .p5_btn_box .p5_b1_btn").mouseover(function(){
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".p5_list_1 .p5_bg_box .p5_bg_list").eq(index).show().siblings().hide();
    })

    $(".p5_list_2 .p5_btn_box_2 .p5_b1_btn_2").mouseover(function(){
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".p5_list_2 .p5_bg_box .p5_bg_list").eq(index).show().siblings().hide();
    })


    $(".p2_list .p2_3_list .p2_a1").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(".page2").addClass("page2_p2")
        $(".page2").removeClass("page2_p4")
        $(".page2").removeClass("page2_p5")
        var videoUrl = $(this).attr("videoUrl");
        $("#page2video").attr("src",videoUrl);
        $('#page2video').get(0).play();

    })
    $(".p2_list .p2_3_list .p2_a2").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(".page2").addClass("page2_p4")
        $(".page2").removeClass("page2_p2")
        $(".page2").removeClass("page2_p5")
        var videoUrl = $(this).attr("videoUrl");
        $("#page2video").attr("src",videoUrl);
        $('#page2video').get(0).play();    
    })
    $(".p2_list .p2_3_list .p2_a3").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(".page2").addClass("page2_p5")
        $(".page2").removeClass("page2_p4")
        $(".page2").removeClass("page2_p2")
        var videoUrl = $(this).attr("videoUrl");
        $("#page2video").attr("src",videoUrl);
        $('#page2video').get(0).play();     
    })

    $(".page7_tab .reg_btn").click(function(){
         $('.gray').fadeIn();
         $('.logn_box').fadeIn();
    })

    $('http://gjqt3.wangyuan.com/zt/feature/js/.close_BTN,.gray').on('click',function(){
        $('.gray').fadeOut();
        $('.eject').fadeOut();
        $('.eject p').html('');
        $('.logn_box').hide();
     })

    // 音乐自动播放
    $('.audio_btn').on("click",function(){
        var player = $("#audio")[0]; /*jquery对象转换成js对象*/
        if (player.paused){ /*如果已经暂停*/
            player.play(); /*播放*/
            $('.audio_btn').removeClass("on");
        }else {
            player.pause();/*暂停*/
            $('.audio_btn').addClass("on");
        }
    })
    $(".play_btn").on("click",function(){
        var player = $("#audio")[0]; /*jquery对象转换成js对象*/
        player.pause();
        $('.audio_btn').addClass("on");
    })
    $("http://gjqt3.wangyuan.com/zt/feature/js/.close_BTN,.gray").on("click",function(){
        var player = $("#audio")[0]; /*jquery对象转换成js对象*/
        player.play(); /*播放*/
        $('.audio_btn').removeClass("on");
    })




    $("http://gjqt3.wangyuan.com/zt/feature/js/.close,.gray").on('click',function(){
        $('.gray').fadeOut();
        $('.logn_box').hide();
     })



    $(".play_btn").click(function(){
            $('.gray').fadeIn();
            $('.eject').fadeIn();
            $('.eject p').html('<iframe id="vbox" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="http://dl2.gjqt3.wangyuan.com/download/20181106/EAC4CC8F0EBA80008DD7B5B9FEDE2719/gjqt3_zydj.mp4" width="960" height="540" frameborder="no"></iframe>')
    })

	var pageindex = 0;
	var pageflag = true;
	$(".pageSection").mousewheel(function(event, delta, deltaX, deltaY){
	    event.preventDefault();
	    if(delta < 0){//下
	    	if(pageindex >= 6){return false;}
	    	if(pageflag){
		    	pageScreen(++pageindex)
		    }
	    }
	    if(delta > 0){//上
	    	if(pageindex <= 0){return false;}
	    	if(pageflag){
		    	pageScreen(--pageindex)
		    }
	    }
	});
	//var pageHeight = document.documentElement.clientHeight;
	//$("#content,body,html,.list").css({"height":pageHeight});
	$(".publicScreenBtn").click(function(){
		if(pageflag){
			pageindex = $(this).attr("tip");
			pageScreen(pageindex);
		};
	});
	function pageScreen(x){
		pageflag = false;
		$("#wrap").animate({"top":-x*1080},350,function(){
			pageflag = true;
		});
		removeClasssDiv();
		setStopMusic();
		if(x==0){
			$(".navFirst").eq(0).addClass("navOn");
		}else if(x==1){
			$(".navFirst").eq(1).addClass("navOn");
		}else if(x==2){
			$(".navFirst").eq(2).addClass("navOn");
		}else if(x==3){
			$(".navFirst").eq(3).addClass("navOn");
		}else if(x==4){
			$(".navFirst").eq(4).addClass("navOn");
		}else if(x==5){
			$(".navFirst").eq(5).addClass("navOn");
		}else if(x==6){
            $(".navFirst").eq(6).addClass("navOn");
        }
	};


	function removeClasssDiv(){
		$(".navFirst").removeClass("navOn");
		$(".navSecond a").removeClass("on");		
	};


//      //监听消息事件，iframe登陆成功后触发
//     window.addEventListener('message',function(e){
//         var msg = e.data;

//         //注册成功通知
//         if  (msg.data_type == 'regsuccess'){
//             //msg.uname 注册的用户名
//              $('.succbox').show();
//              $('.login_cont').hide();
//              $('.succbox span').html("请谨记您的账号"+msg.uname);
//             //location.reload();
// //            console.log(msg.uname)
//         }
//     })

    $(".back_top").click(function(){
        $('#wrap').animate({top:0},300);
        $(".leftNav a.navIcon0").addClass('navOn').siblings('.leftNav .publicScreenBtn').removeClass('navOn');
        pageindex = 0
        $("#wrap").animate({"top":0},350,function(){
            pageflag = true;
        });

        pageScreen(pageindex);

    })

	//videoStop();


var playid = 0;
    $('#music_player').jPlayer({
        swfPath: "js/",
        wmode: "window",
        supplied: "mp3",
        ended: function () {
            setStopCss();
        }
    });
    function setStopCss(){
        $('.publicMusicBtn').removeClass("play_off");
    }
    function setStopMusic(){
    	$("#music_player").jPlayer('pause');
        $('.publicMusicBtn').removeClass("play_off");
    }
    $('.publicMusicBtn').each(function (index, elem) {
        var url = $(elem).attr('data-mp3');
        $(this).click(function () {         
            if (index != playid) {
                setStopCss();
            }
            if (!$(this).hasClass("play_off")) {
                $('#music_player').jPlayer("setMedia", { mp3: url });
                $('#music_player').jPlayer('play');
                $(this).addClass("play_off");
            } else {
                $("#music_player").jPlayer('pause');
                $(this).removeClass("play_off");
            }
            playid = index;
        });
    });
});
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
//            console.log(msg.uname)
        }
    })
    $('.backBtn a').click(function(){
    	 $('.succbox').hide();
    	 $('.logn_main').show();
    })
