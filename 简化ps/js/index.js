var canvas=document.querySelector('.can');
var xjhb=document.querySelector('#xjhb');
var back=document.querySelector('#back');
var hx=document.querySelector('#hx');
var zfx=document.querySelector('#zfx');
var sjx=document.querySelector('#sjx');
var yuan=document.querySelector('#yuan');
var qb=document.querySelector('#qb');
var tc=document.querySelector('#tc');
var mb=document.querySelector('#mb');
var ys=document.querySelector('#ys');
var dbx=document.querySelector('#dbx');
var djx=document.querySelector('#djx');
var body1=document.querySelector('body');
var wz=document.querySelector('#wz');


//新建开始
xjhb.onclick=function(){
	body1.removeChild(canvas);
    canvas=document.createElement("canvas");
    canvas.className="can";
    body1.appendChild(canvas);
    canvas.width=prompt("请输入新画布宽度");
    canvas.height=prompt("请输入新画布高度");
    cobj=canvas.getContext('2d');
var cobj=canvas.getContext('2d');
var p=new fontpate(cobj,canvas);
back.onclick=function(){	
	p.history.pop();
	if(p.history.length==0){		
		p.cobj.clearRect(0,0,p.canvas.width,p.canvas.height);
		setTimeout(function(){
			alert("没有了！");
		},0);
	}else{
		p.cobj.putImageData(p.history[p.history.length-1],0,0,0,0,p.canvas.width,p.canvas.height);
	}	
}
ys.onblur=function(){
	p.fillStyle=ys.value;
	p.strokeStyle=ys.value;
}
tc.onclick=function(){
	p.style='fill';
}
mb.onclick=function(){
	p.style='stroke';
}
hx.onclick=function(){
	p.type='line';
}
zfx.onclick=function(){
	p.type='rect';
}
sjx.onclick=function(){
	p.type='trangle';
}
yuan.onclick=function(){
	p.type='arc';
}
qb.onclick=function(){
	p.type='pencil';
}
dbx.onclick=function(){
	p.dbnum=prompt("请输入边数");
	p.type='dbx';
}
djx.onclick=function(){
	p.djnum=prompt("请输入角数");
	p.type='djx';
}
p.draving();
p.text();
}
//新建结束



var cobj=canvas.getContext('2d');
var p=new fontpate(cobj,canvas);
back.onclick=function(){	
	p.history.pop();
	if(p.history.length==0){		
		p.cobj.clearRect(0,0,p.canvas.width,p.canvas.height);
		setTimeout(function(){
			alert("没有了！");
		},0);
	}else{
		p.cobj.putImageData(p.history[p.history.length-1],0,0,0,0,p.canvas.width,p.canvas.height);
	}	
}
ys.onblur=function(){
	p.fillStyle=ys.value;
	p.strokeStyle=ys.value;
}
tc.onclick=function(){
	p.style='fill';
}
mb.onclick=function(){
	p.style='stroke';
}
hx.onclick=function(){
	p.type='line';
}
zfx.onclick=function(){
	p.type='rect';
}
sjx.onclick=function(){
	p.type='trangle';
}
yuan.onclick=function(){
	p.type='arc';
}
qb.onclick=function(){
	p.type='pencil';
}
dbx.onclick=function(){
	p.dbnum=prompt("请输入边数");
	p.type='dbx';
}
djx.onclick=function(){
	p.djnum=prompt("请输入角数");
	p.type='djx';
}
p.draving();
p.text();