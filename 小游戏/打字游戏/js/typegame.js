
$(function(){
	//构造函数中保存
	function Game(main,scoreele,stateele,lifeele){
		this.main=main;
		this.mainWidth=main.offsetWidth;
		this.mainHeight=main.offsetHeight;
		this.scoreele=scoreele;
		this.stateele=stateele;
		this.lifeele=lifeele;
	}
	Game.prototype={
		//用户接口
		_init:function(){
			this.obj={};
			this.kgstart=true;
			this.speed=5;
			this.score=0;
			this.state=1;
			this.num=3;
			this.life=3;
			this.scoreele.innerHTML=this.score;
      	 	this.lifeele.innerHTML=this.life;
       		this.stateele.innerHTML=this.state;
		},
		start:function(){
			this._init();
			if(this.kgstart){
				for (var i = 0; i < this.num; i++) {
					this._createLetter();
				}
				// this._keydown();
				this._move();
				// this.kgstart=false;
			}
		},
		//页面加载字母
		_createLetter:function(){
			var newletter=document.createElement("div");
			do{
			var randomleft=Math.floor(Math.random()*(this.mainWidth-60));
			}while(this._checkleft(randomleft))
			var randomtop=Math.floor(Math.random()*-300);
       		 newletter.style.cssText="width:60px;height:60px;position:absolute;left:"+randomleft+"px;top:"+randomtop+"px;";
			do{
				var randomnum=Math.floor(Math.random()*26+65);
				var randomchar=String.fromCharCode(randomnum);
			}while(this.obj[randomchar])
			newletter.innerHTML="<img width='60' height='60' src='images/"+randomchar+".png'>";
			this.obj[randomchar]={left:randomleft,top:randomtop,ele:newletter};//形式{A={left:100},B={left:200}}
			// newletter.innerHTML=randomchar;
			this.main.appendChild(newletter);
			// that.obj{A:{left:100,ele:div},B:{left:200,ele:div}}
		},
		_move:function(){
			var that=this;
         	this._keydown();
			this.st=setInterval(function(){
				for(var i in that.obj){
					var oldtop=that.obj[i].top;
					var newtop=oldtop+that.speed;
					that.obj[i].top=newtop;
					that.obj[i].ele.style.top=newtop+"px";
					if(newtop>that.mainHeight){
						that.life--;
						that.lifeele.innerHTML=that.life;
						that.main.removeChild(that.obj[i].ele);
						delete that.obj[i];
						that._createLetter();
						if(that.life==0){
							that._end();
						}
					}
				}
			},60)
		},
		_checkleft:function(newleft){
			for (var i in this.obj) {
				var oldleft=this.obj[i].left;
				if(newleft>oldleft-60 && newleft<oldleft+60){
					return true;
				}
			}
		},
		_pass:function(){
			this.state++;
			alert("恭喜过关，接下来进入第"+this.state+"关");
			this.stateele.innerHTML=this.state;
			this.main.innerHTML="";
			this.obj={};
			if(this.state<=4){
				this.num++;
			}else{
				this.speed+=2;
			}
			for (var i = 0; i < this.num; i++) {
				this._createLetter();
			};
		},
		_keydown:function(){
			var that=this;//获取obj对象
			document.onkeydown=function(e){
				var ev=e||window.event;
				var kc=ev.keyCode;//获取当前按键的键盘码
				var newstr=String.fromCharCode(kc);//将获取的按键的键盘码转化为对应的字母
				if(that.obj[newstr]){
					that.main.removeChild(that.obj[newstr].ele);//从（视图）父级元素移除字母对应的div
					delete that.obj[newstr];//删除对应div（数据）
					that._createLetter();//清除后在创建另一个新的
					that.score++;
					that.scoreele.innerHTML=that.score;
					if(that.score%10==0){
						that._pass();
					}
				}
			}
		},
		_end:function(){
			this.stop();
			this._init();
			this.main.innerHTML="";
			this.kgstart=true;
			alert("游戏结束！");
		},
		stop:function(){
			clearInterval(this.st);
			document.onkeydown=null;
		}
	}
	var main=$(".main")[0];
	var startbtn=$(".start")[0];
	var score=$(".score")[0];
	var state=$(".state")[0];
	var life=$(".life")[0];
	var stopbtn=$(".stop")[0];
	var endbtn=$(".end")[0];
	var newgame=new Game(main,score,state,life);
	// newgame._createLetter();
	startbtn.onclick=function(){
		newgame.start();
	}
	var flag=true;
	stopbtn.onclick=function(){
		if(flag){
			flag=false;
			newgame.stop();
			this.innerHTML="继续";
		}else{
			flag=true;
			newgame._move();
			this.innerHTML="暂停";
		}
		
	}
	endbtn.onclick=function(){
		if(flag){
			newgame._end();
		}
	}
})