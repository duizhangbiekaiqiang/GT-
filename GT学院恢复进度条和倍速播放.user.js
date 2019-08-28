// ==UserScript==
// @name         GT学院恢复进度条和倍速播放
// @version      0.2
// @description  帮助我们更好的学习！！
// @author       gcc（guocc1993@gmail.com）
// @include      *://training.gt-china.com.cn/teelms/study.shtml?*
// @grant        none
// ==/UserScript==

//V0.2 终于上手JavaScript了，作为第一个练手项目也不错。

(function() {
    'use strict';
    var object2 = document.getElementById('courseBox2');//通过id获取遮罩层元素
    if (object2 != null){
        object2.parentNode.removeChild(object2);//删除遮罩层
	}

	addButton();
	//加速按钮功能
	document.getElementById('bt1').addEventListener("click",function(){
		var myvid=document.getElementById('courseBox').contentWindow.document.querySelector("video");
		myvid.playbackRate=myvid.playbackRate+0.1;
		document.getElementById('Vspeed').value="当前速度：" + myvid.playbackRate.toFixed(1);
	});
	document.getElementById('bt2').addEventListener("click",function(){
		var myvid=document.getElementById('courseBox').contentWindow.document.querySelector("video");
		myvid.playbackRate=myvid.playbackRate-0.1;
		document.getElementById('Vspeed').value="当前速度：" + myvid.playbackRate.toFixed(1);
	});
	document.getElementById('bt3').addEventListener("click",function(){
		var myvid=document.getElementById('courseBox').contentWindow.document.querySelector("video");
		myvid.playbackRate=1;
		document.getElementById('Vspeed').value="当前速度：" + myvid.playbackRate.toFixed(1);
	});

	//添加按钮
	function addButton(){
		var btpos = document.getElementById('bottomBox');
		var newtext = document.createElement('div');
		newtext.innerHTML ="<input type=\"text\" id=\"Vspeed\" value=\"当前速度：1.0\">";
		document.body.insertBefore(newtext,btpos);
		var newBt1 = document.createElement('div');
		newBt1.innerHTML ="<input type=\"button\" id=\"bt1\" value=\"加0.1\">";
		document.body.insertBefore(newBt1,btpos);
		var newBt2 = document.createElement('div');
		newBt2.innerHTML ="<input type=\"button\" id=\"bt2\" value=\"减0.1\">";
		document.body.insertBefore(newBt2,btpos);
		var newBt3 = document.createElement('div');
		newBt3.innerHTML ="<input type=\"button\" id=\"bt3\" value=\"还 原\">";
		document.body.insertBefore(newBt3,btpos);
	}
})();