function mk_dd(data) {
	var dd = document.createElement("li");
	if (data[2]) {
		dd.className = data[2]
	}
	dd.innerHTML = '<a href="' + data[1] + '" target="_blank">' + data[0] + "</a>";
	return dd
}
function mk_dt(data) {
	var dt = document.createElement("li");
	dt.className = "dt";
	dt.innerHTML = data;
	return dt
}
function addEvtListener(c, b, a) {
	if (document.addEventListener) {
		if (c) {
			c.addEventListener(b, a, false)
		} else {
			addEventListener(b, a, false)
		}
	} else {
		if (attachEvent) {
			if (c) {
				c.attachEvent("on" + b, a)
			} else {
				attachEvent("on" + b, a)
			}
		}
	}
}
var GB_COMMON_NAV;
if (!GB_COMMON_NAV) {
	GB_COMMON_NAV = {}
}
GB_COMMON_NAV.Init_Ad = function(img, bigimg, url) {
	var _ad = document.createElement("div");
	_ad.id = "_AD_";
	_ad.style.backgroundImage = "url(" + img + ")";
	_ad.style.backgroundPosition = "left bottom";
	_ad.style.backgroundRepeat = "no-repeat";
	_ad.innerHTML = '<a href="' + url + '" target="_blank"><div id="_AD_BOX_" style="visibility:hidden;"><img src="' + bigimg + '"></div></a>';
	return _ad
};
GB_COMMON_NAV.Init_Links = function(links, games, game) {
	var _LINKS = document.createElement("div");
	_LINKS.className = "_LINKS_";
	var _ul = document.createElement("ul");
	_LINKS.insertBefore(_ul, null);
	for (n = 0; n < links.length; n++) {
		if (links[n][2]) {
			_ul.innerHTML += '<li><a href="' + links[n][0] + "?service=" + game + '" target="_blank">' + links[n][1] + "</a></li>"
		} else {
			_ul.innerHTML += '<li><a href="' + links[n][0] + '" target="_blank">' + links[n][1] + "</a></li>"
		}
	}
	var _GAMES = document.createElement("div");
	_GAMES.id = "_GAMES_";
	var _GAMEBOX = document.createElement("div");
	_GAMEBOX.id = "_GAME_BOX_";
	_GAMEBOX.style.visibility = "hidden";
	var _mmo_dl = document.createElement("ul");
	_mmo_dl.insertBefore(mk_dt("ÁΩëÁªúÊ∏∏Êàè"), null);
	for (n = 0; n < games.mmo.length; n++) {
		_mmo_dl.insertBefore(mk_dd(games.mmo[n]), null)
	}
	//_mmo_dl.insertBefore(mk_dt("ÊâãÊú∫Ê∏∏Êàè"), null);
//	for (n = 0; n < games.mob.length; n++) {
//		_mmo_dl.insertBefore(mk_dd(games.mob[n]), null)
//	}
	var _pcg_dl = document.createElement("ul");
	_pcg_dl.insertBefore(mk_dt("ÂçïÊú∫Ê∏∏Êàè"), null);
	for (n = 0; n < games.pcg.length; n++) {
		_pcg_dl.insertBefore(mk_dd(games.pcg[n]), null)
	}
	var _BTNS_ = document.createElement("div");
	_BTNS_.className = "_BTNS_";
	_BTNS_.innerHTML = '<a class="_SHOP_" href="javascript:if(confirm('http://shop.wangyuan.com/  \n\n∏√Œƒº˛Œﬁ∑®”√ Teleport Ultra œ¬‘ÿ, “ÚŒ™ À¸ «“ª∏ˆ”ÚªÚ¬∑æ∂Õ‚≤ø±ª…Ë÷√Œ™À¸µƒ∆Ù ºµÿ÷∑µƒµÿ÷∑°£  \n\nƒ„œÎ‘⁄∑˛ŒÒ∆˜…œ¥Úø™À¸?'))window.location='http://shop.wangyuan.com/'" tppabs="http://shop.wangyuan.com/" target="_blank"></a> <a class="_TMALL_" href="javascript:if(confirm('http://wystts.tmall.com/  \n\n∏√Œƒº˛Œﬁ∑®”√ Teleport Ultra œ¬‘ÿ, “ÚŒ™ À¸ «“ª∏ˆ”ÚªÚ¬∑æ∂Õ‚≤ø±ª…Ë÷√Œ™À¸µƒ∆Ù ºµÿ÷∑µƒµÿ÷∑°£  \n\nƒ„œÎ‘⁄∑˛ŒÒ∆˜…œ¥Úø™À¸?'))window.location='http://wystts.tmall.com/'" tppabs="http://wystts.tmall.com/" target="_blank"></a> <a class="_WEIBO_" href="javascript:if(confirm('http://e.weibo.com/u/2733905341  \n\n∏√Œƒº˛Œﬁ∑®”√ Teleport Ultra œ¬‘ÿ, “ÚŒ™ À¸ «“ª∏ˆ”ÚªÚ¬∑æ∂Õ‚≤ø±ª…Ë÷√Œ™À¸µƒ∆Ù ºµÿ÷∑µƒµÿ÷∑°£  \n\nƒ„œÎ‘⁄∑˛ŒÒ∆˜…œ¥Úø™À¸?'))window.location='http://e.weibo.com/u/2733905341'" tppabs="http://e.weibo.com/u/2733905341" target="_blank"></a>';
	_GAMEBOX.insertBefore(_mmo_dl, null);
	_GAMEBOX.insertBefore(_pcg_dl, null);
	_GAMEBOX.insertBefore(_BTNS_, null);
	_GAMES.innerHTML = '<a href="javascript:return void(0);" class="_GM_TAG_">Ê∏∏Êàè‰∫ßÂìÅ<span class="WED"></span></a>';
	_GAMES.insertBefore(_GAMEBOX, null);
	_LINKS.insertBefore(_GAMES, null);
	return _LINKS
};
GB_COMMON_NAV.Init = function(nav_conf, css) {
	var _common_nav_script_ = document.getElementById("_common_nav_script_");
	if (!_common_nav_script_) {
		return
	}
	var _game_ = _common_nav_script_.getAttribute("game");
	if (!_game_) {
		_game_ = "gb"
	}
	var _css_ = document.createElement("link");
	_css_.setAttribute("href", css);
	_css_.setAttribute("rel", "stylesheet");
	var _NAV = document.createElement("div");
	_NAV.id = "_GB_NAV_";
	_NAV.style.display = "none";
	_NAV.insertBefore(_css_, null);
	document.body.insertBefore(_NAV, document.body.firstChild);
	var _MAIN = document.createElement("div");
	_MAIN.className = "_MAIN_";
	_NAV.insertBefore(_MAIN, null);
	_MAIN.innerHTML = '<a class="_LOGO_" href="javascript:if(confirm('http://www.wangyuan.com/  \n\n∏√Œƒº˛Œﬁ∑®”√ Teleport Ultra œ¬‘ÿ, “ÚŒ™ À¸ «“ª∏ˆ”ÚªÚ¬∑æ∂Õ‚≤ø±ª…Ë÷√Œ™À¸µƒ∆Ù ºµÿ÷∑µƒµÿ÷∑°£  \n\nƒ„œÎ‘⁄∑˛ŒÒ∆˜…œ¥Úø™À¸?'))window.location='http://www.wangyuan.com/'" tppabs="http://www.wangyuan.com/" target="_blank"><img src="wyst_sx.png"/*tpa=http://i1.gbimg.cn/www/20160804/wyst_sx.png*/ width="135" style="margin-top:2px;" border="0"></a>';
	_MAIN.insertBefore(this.Init_Ad(nav_conf.ad.img, nav_conf.ad.bigimg, nav_conf.ad.url), null);
	_MAIN.insertBefore(this.Init_Links(nav_conf.links, nav_conf.games, _game_), null);
	_NAV.style.display = "block";
	var _ad = document.getElementById("_AD_");
	addEvtListener(_ad, "mouseover", GB_COMMON_NAV.ShowAD);
	addEvtListener(_ad, "mouseout", GB_COMMON_NAV.HideAD);
	var _gm = document.getElementById("_GAMES_");
	addEvtListener(_gm, "mouseover", GB_COMMON_NAV.ShowGameList);
	addEvtListener(_gm, "mouseout", GB_COMMON_NAV.HideGameList)
};
GB_COMMON_NAV.ShowGameList = function(o) {
	clearTimeout(this.tmghand);
	var _GL = document.getElementById("_GAME_BOX_");
	if (_GL) {
		_GL.style.visibility = "visible"
	}
};
GB_COMMON_NAV.HideGameList = function(o) {
	this.tmghand = setTimeout(function() {
		var _GL = document.getElementById("_GAME_BOX_");
		if (_GL) {
			_GL.style.visibility = "hidden"
		}
	}, 10)
};
GB_COMMON_NAV.ShowAD = function(o) {
	clearTimeout(this.tmshand);
	var _GL = document.getElementById("_AD_BOX_");
	if (_GL) {
		_GL.style.visibility = "hidden"//‰øÆÊîπÈÉ®ÂàÜÔºàvisibleÔºâ
	}
};
GB_COMMON_NAV.HideAD = function(o) {
	this.tmshand = setTimeout(function() {
		var _GL = document.getElementById("_AD_BOX_");
		if (_GL) {
			_GL.style.visibility = "hidden"
		}
	}, 10)
};
document.writeln("<scr" + "ipt src='common_nav_conf.js'/*tpa=http://www.wangyuan.com/scripts/common_nav_conf.js*/></scr" + "ipt>");

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "hm.js-fd1f2bc97712771c2a281dbd956daf9b"/*tpa=https://hm.baidu.com/hm.js?fd1f2bc97712771c2a281dbd956daf9b*/;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
