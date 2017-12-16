window.onload=function(){
    var imgs=document.querySelectorAll('.photo li');
    var lis=document.querySelectorAll('.yuandian li');
    var div=document.querySelector('.box');
    var width=parseInt(getComputedStyle(div,null).width);
    var left=document.querySelector('.jiantou-left');
    var right=document.querySelector('.jiantou-right');
    console.log(width)
    var now=0;
    var next=0;
    var t=setInterval(move,2000);
    var flag=true;
    function move(way='l'){      //定义函数，默认为way='l'
        if(way=='l'){      //当函数参数等于默认值时
            next=now+1;        //下一个出现为当前位置加一
            if(next>=imgs.length){      // 当下一个出现的所在位置等于图片所在ul  li 的长度时
                next=0;         //使下一个出现的是位置0的图片
            }
        }else if(way=='r'){     //当函数参数参数为向右运行时
            next=now-1;       //下一个出现为当前位置减一
            if(next<=0){          //当下一个出现的位置小于等于0时
                next=imgs.length-1;       //下一个出现的图片为最后一张
            }
        }
        imgs[next].classList.add('zindex');
        imgs[now].classList.remove('zindex');
        animate(imgs[now],{opacity:0});     //使当前位置图片隐藏
        animate(imgs[next],{opacity:1},function(){     //是下一个要出现的图片到当前位置显示，使开关打开
            flag=true;
        });
        lis[now].classList.remove('active');     //当前轮播点样式清除
        lis[next].classList.add('active');       //下一个显示轮播点添加样式
        now=next;       //将位置赋值给下一个now
    }
    div.onmousemove=function(){        //鼠标移入停止函数
        clearInterval(t);      //清除时间函数，使其停止
    }
    div.onmouseout=function(){        //鼠标移除启动函数
        t=setInterval(move,2000);      //添加时间函数，使其运行
    }
    left.onclick=function(){       //左侧箭头点击效果
        if(flag){       //当情况为真
            move('r');      //执行向右运行函数
            flag=false;      //关闭开关
        }
    }
    right.onclick=function(){
        if(flag){
            move('l');     //执行向左运行函数
            flag=false;
        }
    }

    lis.forEach(function(value,index){      //遍历所有的轮播点
        var j;
        value.onclick=function(){      //当前轮播点点击效果
            j=setTimeout(function () {
                animate(imgs[now],{opacity:0});       //动画效果使当前图片移动到右边隐藏
                animate(imgs[index],{opacity:1});      //动画效果使点击位置对应图片显示
                lis[now].classList.remove('active');    //清除当前轮播点样式
                lis[index].classList.add('active');     //点击位置轮播点添加样式
                now=index;     //点击位置赋值给当前位置，（下一次将从此处开始运行）
            },300);
        }
        value.onmouseout=function(){
            clearTimeout(j);
        }
    })



    
}

$(function(){
    $(".dhjm-nav li").each(function (index,value) {
        $(value).hover(
            function(){
                console.log($(this).eq(1))
                $(this).children("ul").stop().slideDown();
            },function(){
                $(this).children("ul").stop().slideUp();
            }
        )
    })
})