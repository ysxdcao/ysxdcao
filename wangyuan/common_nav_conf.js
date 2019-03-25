var nav_conf = {
"ad":{
"url":"http://act.wangyuan.com/gjqt3/201811/sale/index.html",
"img":"20181130202903101.png"/*tpa=http://i0.gbimg.cn/2018/11/30/20181130202903101.png*/,
"bigimg":""
},
"links":[
	["https://login.wangyuan.com/member/newreg?redr=http%3A%2F%2Fmember.wangyuan.com%2F&service=gb","注册",'1'],
	["https://member.wangyuan.com/","用户中心"],
	["https://bill.wangyuan.com/","充值中心"],
	["http://service.wangyuan.com/","客服中心"],
	["http://www.wangyuan.com/mobile.shtml","商务合作"],
	["http://job.wangyuan.com/","加入我们"]
	],
"games":{
	"mmo":[["古剑奇谭网络版","http://gjol.wangyuan.com/","_N_"]],
	"mob":[["超能僵尸","#","_N_"]],
	"pcg":[
	["古剑奇谭系列","http://gjqt.wangyuan.com/","_H_"],
    ["神舞幻想","http://swhx.wangyuan.com/","_N_"],
	["雨血系列","http://yx.wangyuan.com/"],
	["虹色旋律","http://hsxl.wangyuan.com/"],
	["伊苏7","http://ys7.wangyuan.com/"]
	]
}
};

if(navigator.userAgent.match(/iP(ad|hone|od)/i) || navigator.userAgent.match(/Android/i)){}
else
{
GB_COMMON_NAV.Init(nav_conf,"common_nav.css"/*tpa=http://www.wangyuan.com/css/common_nav.css*/);
}
