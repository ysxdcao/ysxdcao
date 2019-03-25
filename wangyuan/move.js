function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}
//var alpha = 30;
function startMove(obj, arr, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		if (arr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, arr)) * 100);
		} else {
			cur = parseInt(getStyle(obj, arr));
		}
		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (cur == iTarget) {
			clearInterval(obj.timer);
		} else {
			if (arr == 'opacity') {
				obj.style.filter = 'alpha(opcity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;

			} else {
				obj.style[arr] = cur + speed + 'px';
			}
		}
	}, 30);
}

function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function tab(id){
	var oDiv = document.getElementById(id);
	var oBtnPrev = getByClass(oDiv, 'prev')[0];
	var oBtnNext = getByClass(oDiv, 'next')[0];
	var oDivSmall=document.getElementById('small_pic');
	var oDivSmall = getByClass(oDiv, 'smallbox')[0];
	var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
	var aLiSmall = oDivSmall.getElementsByTagName('li');
	var oUlBig = getByClass(oDiv, 'bigimg')[0];
	var aLiBig = oUlBig.getElementsByTagName('li');

	var nowZIndex = 2;
	var now = 0;
	
	oUlSmall.style.width = aLiSmall.length*parseInt(194)+ 'px';

	//左右按钮

	//大图切换
	for (var i = 0; i < aLiSmall.length; i++) {
		aLiSmall[i].index = i;
		aLiSmall[i].onclick = function() {
			//alert('222');	
			if (this.index == now) return;
			now = this.index;
			tab();


		}
		aLiSmall[i].onmouseover = function() {
			startMove(this, 'opacity', 100);
		};
		aLiSmall[i].onmouseout = function() {
			if (this.index != now) {
				startMove(this, 'opacity', 40);
			}
		};
	}

	function tab() {
		aLiBig[now].style.zIndex = nowZIndex++;

		for (var i = 0; i < aLiSmall.length; i++) {
			startMove(aLiSmall[i], 'opacity', 40);
		}

		aLiBig[now].style.display = 'block';
		startMove(aLiBig[now], 'display', 'none');
		startMove(aLiSmall[now], 'opacity', 100);
		if (now == 0) {
			startMove(oUlSmall, 'left', 0);
		}else if(aLiSmall.length==2){
			startMove(oUlSmall, 'left', 0);
		}else if(aLiSmall.length==3){
			startMove(oUlSmall, 'left', 0);
		}else if (now==aLiSmall.length - 2) {
			startMove(oUlSmall, 'left', -(now - 2) * 194);
		}else if(now>aLiSmall.length - 2){
			startMove(oUlSmall, 'left', -(now - 3) * 194);
		}else{
			
			startMove(oUlSmall, 'left', -(now - 1) * 194);
		}
	}
	oBtnPrev.onclick = function() {
		now--;
		if (now == -1) {
			now = aLiSmall.length - 1;
		}
		tab();
	}
	oBtnNext.onclick = function() {
		now++;
		if (now == aLiSmall.length) {
			now = 0;
		}
		tab();
	};
	var timer = setInterval(oBtnNext.onclick, 3000);
	oDiv.onmouseover = function() {
		clearInterval(timer);
	};
	oDiv.onmouseout = function() {
		timer = setInterval(oBtnNext.onclick, 3000);
	};
}
	
// JavaScript Document