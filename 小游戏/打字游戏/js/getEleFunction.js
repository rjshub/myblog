//兼容性的通过类名获取元素context表示要从哪个范围获取
function getEle(classname,context){
	if(context==undefined){
		context=document;
	}
	// context=context||document;
	if(document.getElementsByClassName){
		return context.getElementsByClassName(classname);
	}else{
		var all=context.getElementsByTagName("*");
		var tagarr=[];
		//情况为："one"   "one"
		for( var i=0;i<all.length;i++){
			// 直接使用变量名字，不能加双引号
			if(check(all[i].className,classname)){
				tagarr.push("all[i]");
			}
		}
		return tagarr;
	}
}
//判断在一个长字符串中是否包含一个短字符//情况为："one two"  "one"
function check(strc,strd){
	var arr=strc.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==strd){
			return true;
		}
	}
	return false;
}


//兼容性的获取或者设置元素内容  第一个参数表示要操纵的元素
//第二个参数表示要设置的内容如果是获取则不用传递
function getOrSetText(classname,text){
	if(text==undefined){
		if(document.getElementsByClassName){
			return classname.textContent;
		}else{
			return classname.innerText;
			} 
	}else{
		if(document.getElementsByClassName){
	 		classname.textContent=text;
		}else{
	 		classname.innerText=text;
		}
	}
}


    //兼容性的获取css样式集合
	//第一个参数表示要操纵的元素，第二个参数表示要设置的属性
function getStyle(classname,sty){
	if (document.getElementsByClassName){
		return window.getComputedStyle(classname,null)[sty];
	}else{
		return classname.currentStyle[sty];
	}
}


//通过类名或标签名或ID名获取元素
function $(selector,context){
	context=context||document;
	if(typeof selector=="string"){
		//正则运算
		selector=selector.replace(/^\s+|\s+$/g,"");//^开始标志，$结束标志，g全局标志，
		if(/^\.[a-zA-Z_\-][0-9a-zA-Z_\-]*$/.test(selector)){
			return getEle(selector.slice(1),context);
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1));
		}else if(/^<[a-zA-Z]([A-Za-z]{0,10}|h[1-6])>$/.test(selector)){
			return document.createElement(selector.slice(1,-1))
		}else if(/^[a-zA-Z]([A-Za-z]{0,10}|h[1-6])$/.test(selector)){
			return context.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		//window.onload=selector;
		addEvent(window,"load",selector);
	}
}


//动画函数 第一个参数为要进行变化的对象 ，第二个参数为要变成为的最终结果的对象，
//第三个参数为让运行的时间(可以不传) 第四个是回调函数(可以不传)
// function animate(ele,arrele,dur,callback){
// //获取每个属性的单次增加量
// 	var speed={};
// 	dur=dur||500;
// 	for(var i in arrele){   //i表示对象中的每个属性，obj.i表示对象中每个属性的值
// 		var old=getStyle(ele,i);  //获取每个属性对应的值
// 		old=parseInt(old);
// 		speed[i]=(arrele[i]-old)*60/dur;   //每个属性的单次增加量
// 	}
// 	var time=0;
// 	ele.t=setInterval(function(){
// 		//改变属性的值
// 		for(var j in arrele){
// 			var now=parseFloat(getStyle(ele,j));
// 			now+=speed[j];
// 			ele.style[j]=now+"px";
// 		}
// 		time+=60;
// 		if(time>=dur){
// 			clearInterval(ele.t);
// 			for(var j in arrele){
// 				ele.style[j]=arrele[j]+"px";
// 			}
// 			if(callback){
// 				callback.call(ele);  //在获取元素并调用函数后，可直接使用this改变其属性值
// 			}
// 		}
		
// 	},60)
// }

//只获取一个元素的所有子元素
function getChildren(ele){
	var arr=ele.childNodes;
	var newarr=[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].nodeType==1){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}

//获取一个元素的第一个子元素
function getFirst(ele){
	return getChildren(ele)[0];
	 
}

//获取一个元素的最后一的子元素
function getLast(ele){
	var arrlast=getChildren(ele);
	return arrlast[arrlast.length-1];
}
//获取一个元素的邻近的下一个元素
function getNext(ele){
	var next=ele.nextSibling;
	if(next==null){
		return null;
	}
	while(next.nodeType!=1){
		next=next.nextSibling;
		if(next==null){
			return null;
		}
	}
	return next;
}

//获取一个元素的邻近的上一个元素
function getPrev(ele){
	var prev=ele.previousSibling;
	if(prev==null){
		return null;
	}
	while(prev.nodeType!=1){
		prev=prev.previousSibling;
		if(prev==null){
			return null;
		}
	}
	return prev;
}

//兼容性的获取当前可视窗口
function getWindow(){
	document.documentElement.scrollTop=1;
	if(document.documentElement.scrollTop==1){
		return document.documentElement;
	}else{
		return document.body;
	}
}

//获取某一个元素的文档坐标
function getPosition(obj){
	var left=obj.offsetLeft;
	var top=obj.offsetTop;
	var parent=obj.offsetParent;//某一个元素具有定位属性的父元素offsetParent，访问到的为一个对象
	while(parent.nodeName!="BODY"){
		if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
			left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"));
			top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"));
		}
		parent=parent.offsetParent;
	}
	return {x:left,y:top};
}

//兼容性的给某个事件添加事件处理程序第一个参数为要添加事件的事件源；第二个参数为事件名称；第三个参数为事件处理程序
function addEvent(obj,event,handler){
	if(obj.addEventListener){
		obj.addEventListener(event,handler,false);
	}else{
		obj.attachEvent("on"+event,handler)
	}
}
function removeEvent(obj,event,handler){
	if(obj.removeEventListener){
		obj.removeEventListener(event,handler,false);
	}else{
		obj.detachEvent("on"+event,handler)
	}
}

//给对象添加滚轮事件
//obj要添加事件的对象，upfun向上滚动要触发的的回调函数，downfun向上滚动要触发的的回调函数
function mousewheel(obj,upfun,downfun){
	if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollfun,false);
		obj.addEventListener("DOMMouseScroll",scrollfun,false)
	}else{
		obj.attachEvent("onmousewheel",scrollfun)
	}
	function scrollfun(e){
		var ev=e||window.event;
		var dir=ev.detail||ev.wheelDelta;
		if(dir==-3||dir==120){
			upfun.call(obj);
		}else if(dir==3||dir==-120){
			downfun.call(obj);
		}
	}
}

//处理事件流带来的影响
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
	if(parent.contains){
		return parent.contains(child) && parent!=child;
	}else{
		return (parent.compareDocumentPosition(child)===20);
	}
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
	if(getEvent(e).type=="mouseover"){
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	}else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	}
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
	if(overfun){
		obj.onmouseover=function  (e) {
			if(checkHover(e,obj)){
				overfun.call(obj,e);
			}
		}
	}
	if(outfun){
		obj.onmouseout=function  (e) {
			if(checkHover(e,obj)){
				outfun.call(obj,e);
			}
		}
	}
}
function getEvent (e) {
	return e||window.event;
}

//去除字符串中的空格
function trim(str,mode){
		mode=mode||"side";
		if(mode=="side"){
			return str.replace(/^\s+|\s+$/g,"");//两边
		}else if(mode=="left"){
			return str.replace(/^\s+/g,"");//左边
		}else if(mode=="right"){
			return str.replace(/\s+$/g,"");//右边
		}else if (mode=="all") {
			return str.replace(/\s+/g,"");//所有
		}else if(mode=="middle"){    //中间
			// var lefts=str.exec(/^\s+/g,"");或var lefts=/^\s+/g.exec(str);
			var lefts=/^\s+/g.exec(str);
			var rights=/\s+$/g.exec(str);
			str=str.replace(/\s+/g,"");
			// if(lefts){
			// 	str=lefts[0]+str;
			// }
			// if(rights){
			// 	str=str+rights[0];
			// }
			str=(lefts?lefts[0]:"")+str+(rights?rights[0]:"");
			return str;
		}
	}