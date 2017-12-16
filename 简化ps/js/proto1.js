var out=document.querySelector('.out');
function fontpate (cobj,canvas) {
	this.canvas=canvas;
	this.cobj=cobj;
	this.fillStyle='#000';
	this.strokeStyle='#000';
	this.style='stroke';
	this.type='line';
	this.history=[];
    this.dbnum=5;
    this.djnum=5;
}
fontpate.prototype.draving=function(){
	var that=this;
	that.canvas.onmousedown=function(e){   
	    e=e||window.event;     
        var x1=e.offsetX;
        var y1=e.offsetY;
        if(that.type=='pencil'){
        	that.cobj.moveTo(x1,y1);
        	that.cobj.beginPath();
        }      
        that.canvas.onmousemove=function(e){
            e=e||window.event;
            var x2=e.offsetX;
            var y2=e.offsetY;
            that.cobj.clearRect(0,0,this.width,this.height);
            if(that.history.length!==0){
            	that.cobj.putImageData(that.history[that.history.length-1],0,0,0,0,this.width,this.height);
            }
            if(that.type!=='pencil'){
                that.cobj.beginPath();
                that[that.type](x1,y1,x2,y2);           
                that.cobj.closePath();
                that.cobj.fillStyle=that.fillStyle;
                that.cobj.strokeStyle=that.strokeStyle;
                that.cobj[that.style]();
            }else{
                that.cobj.lineTo(x2,y2);
                that.cobj.strokeStyle=that.strokeStyle;
                that.cobj.stroke();
            }
        }
        that.canvas.onmouseup=function(e){
        	if(that.type=='pencil'){
        		that.cobj.closePath();
        	}
            that.history.push(that.cobj.getImageData(0,0,this.width,this.height));      
            that.canvas.onmousemove=null;
            that.canvas.onmouseup=null;
        }
    }
}
fontpate.prototype.line=function(x1,y1,x2,y2){
    this.cobj.moveTo(x1,y1);
    this.cobj.lineTo(x2,y2);
}
fontpate.prototype.rect=function(x1,y1,x2,y2){
    this.cobj.rect(x1,y1,x2-x1,y2-y1);
}
fontpate.prototype.trangle=function(x1,y1,x2,y2){
    this.cobj.moveTo(x1,y1);
    this.cobj.lineTo(x1,y2);
    this.cobj.lineTo(x2,y2);
}
fontpate.prototype.arc=function(x1,y1,x2,y2){
    var r=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    this.cobj.arc(x1,y1,r,0,2*Math.PI);
}
fontpate.prototype.dbx=function(x1,y1,x2,y2){
    var r=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    var deg=360/this.dbnum;
    for(var i=0;i<this.dbnum;i++){
        this.cobj.lineTo(x1+Math.cos(Math.PI/180*i*deg)*r,y1+Math.sin(Math.PI/180*i*deg)*r);
    }
}

fontpate.prototype.djx=function(x1,y1,x2,y2){
    var r=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    var r1=r/3;
    var deg=180/this.djnum;
    for(var i=0;i<this.djnum*2;i++){
        if(i%2==0){
            this.cobj.lineTo(x1+Math.cos(Math.PI/180*i*deg)*r,y1+Math.sin(Math.PI/180*i*deg)*r);
        }else{
            this.cobj.lineTo(x1+Math.cos(Math.PI/180*i*deg)*r1,y1+Math.sin(Math.PI/180*i*deg)*r1);
        }
         
    }
}

fontpate.prototype.text=function(){
    var that=this;   
    this.canvas.ondblclick=function(e){
    e=e||window.event;     
    var x0=e.offsetX;
    var y0=e.offsetY;
    var x=x0;
    var y=y0;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.preventValue=false;
    }
    
    var wzbox=document.createElement("div");
    wzbox.contentEditable=true;
    wzbox.style.cssText="width:100px;height:100px;border:1px dashed #000;position:absolute;top:"+(40+y0)+"px;left:"+(100+x0)+"px;z-index:222222;";
    out.appendChild(wzbox);
    wzbox.onmousedown=function(e){   
        e=e||window.event;     
        var x1=e.clientX-this.offsetLeft;
        var y1=e.clientY-this.offsetTop;    
        document.onmousemove=function(e){
            e=e||window.event;     
            var x2=e.clientX;
            var y2=e.clientY; 
            x=x2-x1;
            y=y2-y1;
            wzbox.style.left=x+'px';
            wzbox.style.top=y+'px';
            
        }
        wzbox.onmouseup=function(e){  
            document.onmousemove=null;
            wzbox.onmouseup=null;
        }
    }
    wzbox.onblur=function(){
        var text1=this.innerText;        
        that.cobj.fillText(text1,x,y);
        out.removeChild(wzbox);
    }
}
}


fontpate.prototype.erasar=function(){
    var that=this;
    var div=document.createElement("div");
    div.style.cssText="position:absolute;z-index:2";
    that.disk.parentNode.appendChild(div);
    that.disk.onmousemove=function(e){
        e=e||window.event;
        var x0=e.offsetX;
        var y0=e.offsetY;
        var w=div.offsetWidth;
        var h=div.offsetHeight;
        div.style.left=x0-w/2+'px';
        div.style.top=y0-h/2+'px';
    }
    that.disk.onmousedown=function(e){   
        e=e||window.event;     
        var x1=e.offsetX;
        var y1=e.offsetY;    
        document.onmousemove=function(e){
            e=e||window.event;     
            var x2=offsetX;
            var y2=offsetY; 
            that.cobj.clearRect(x2-w/2,x2-h/2,w,h);
        }
        document.onmouseup=function(e){  
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
}