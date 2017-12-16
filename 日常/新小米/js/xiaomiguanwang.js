window.onload=function() {
    //banner
    var imgs = document.querySelectorAll('.banner-photo li');
    var lis = document.querySelectorAll('.banner-yuandian li');
    var div = document.querySelector('.banner-box');
    console.log(div)
    var width = parseInt(getComputedStyle(div, null).width);
    var left = document.querySelector('.banner-jiantou-left');
    var right = document.querySelector('.banner-jiantou-right');
    // console.log(imgs)
    var now = 0;
    var next = 0;
    var t = setInterval(move, 2500);
    var flag = true;

    function move(way='l') {      //定义函数，默认为way='l'
        if (way == 'l') {      //当函数参数等于默认值时
            next = now + 1;        //下一个出现为当前位置加一
            if (next >= imgs.length) {      // 当下一个出现的所在位置等于图片所在ul  li 的长度时
                next = 0;         //使下一个出现的是位置0的图片
            }
        } else if (way == 'r') {     //当函数参数参数为向右运行时
            next = now - 1;       //下一个出现为当前位置减一
            if (next <= 0) {          //当下一个出现的位置小于等于0时
                next = imgs.length - 1;       //下一个出现的图片为最后一张
            }
        }
        imgs[next].classList.add('zindex');
        imgs[now].classList.remove('zindex');
        animate(imgs[now], {opacity: 0});     //使当前位置图片隐藏
        animate(imgs[next], {opacity: 1}, function () {     //是下一个要出现的图片到当前位置显示，使开关打开
            flag = true;
        });
        lis[now].classList.remove('banneractive');     //当前轮播点样式清除
        lis[next].classList.add('banneractive');       //下一个显示轮播点添加样式
        now = next;       //将位置赋值给下一个now
    }

    div.onmouseover = function () {        //鼠标移入停止函数
        clearInterval(t);      //清除时间函数，使其停止
    }
    div.onmouseout = function () {        //鼠标移除启动函数
        t = setInterval(move, 2500);      //添加时间函数，使其运行
    }
    left.onclick = function () {       //左侧箭头点击效果
        if (flag) {       //当情况为真
            move('r');      //执行向右运行函数
            flag = false;      //关闭开关
        }
    }
    right.onclick = function () {
        if (flag) {
            move('l');     //执行向左运行函数
            flag = false;
        }
    }

    lis.forEach(function (value, index) {      //遍历所有的轮播点
        var j;
        value.onclick = function () {      //当前轮播点点击效果
            j = setTimeout(function () {
                animate(imgs[now], {opacity: 0});       //动画效果使当前图片移动到右边隐藏
                animate(imgs[index], {opacity: 1});      //动画效果使点击位置对应图片显示
                lis[now].classList.remove('banneractive');    //清除当前轮播点样式
                lis[index].classList.add('banneractive');     //点击位置轮播点添加样式
                now = index;     //点击位置赋值给当前位置，（下一次将从此处开始运行）
            }, 300);
        }
        value.onmouseout = function () {
            clearTimeout(j);
        }
    });


//    明星单品
    var danpinimgs = document.querySelector('.danpinshiops');    //获取banner所在的ul
    var danpinbox = document.querySelector('.danpin-box');      // 获取整个大盒子
    var danpinphotolis = document.querySelectorAll('.danpinshiops ul');    //获取每个banner图
    var danpinwidth = parseInt(getComputedStyle(danpinbox, null).width);     //获取大盒子div的宽度
    var danpinleft = document.querySelector('.s-prev .iconfont');     //获取左侧箭头;
    var danpinright = document.querySelector('.s-next .iconfont');    //获取右侧箭头
    var n = 0;     //定义第n个banner图
    var t = setInterval(move02, 3000);       //时间函数，使其运动
    var flag = true;       //定义向右运动为真
    function move02(way='l') {       //移动函数，默认参数为左侧箭头操作
        if (way == 'l') {      //if语句，如果等于默认参数
            n++;       //每回加一
            if (n >= danpinphotolis.length) {
                n = 0;
            }
        }
        if (way == 'r') {
            n--;
            if (n < 0) {
                n = danpinphotolis.length - 1;
            }
        }
        animate(danpinimgs, {left: -danpinwidth * n}, function () {
            flag = true;
        });
    }

    danpinbox.onmousemove = function () {
        clearInterval(t);
    }
    danpinbox.onmouseout = function () {
        t = setInterval(move02, 3000);
    }
    danpinleft.onclick = function () {
        if (flag) {
            flag = false;
            move02('r');
        }
    }
    danpinright.onclick = function () {
        if (flag) {
            flag = false;
            move02('l');
        }
    }


//    家电
    var jiadianlis = document.querySelectorAll('.jiadian .title .more .more-text');     //获取nav中的所有Li-->
    var jiadianimgs = document.querySelectorAll('.jiadian-right ul');    //获取photo中的所有li-->
    // console.log(jiadianimgs)
    jiadianlis.forEach(function (value, index) {       //遍历名称-->
        value.onmousemove = function () {         //编辑点击效果-->
            for (var j = 0; j < jiadianlis.length; j++) {
                jiadianlis[j].classList.remove('active');
            }
            jiadianlis[index].classList.add('active');      //选中其中一个并使其出现-->

            for (var i = 0; i < jiadianimgs.length; i++) {
                jiadianimgs[i].classList.remove('jiandianactive');      //使图片全部消失-->
            }
            jiadianimgs[index].classList.add('jiandianactive');     //选中一个并使其出现-->
        }
    })


//    智能
    var zhinenglis = document.querySelectorAll('.zhineng .title .more .more-text');     //获取nav中的所有Li-->
    var zhinengimgs = document.querySelectorAll('.zhineng-right ul');    //获取photo中的所有li-->
    // console.log(jiadianimgs)
    zhinenglis.forEach(function (value, index) {       //遍历名称-->
        value.onmousemove = function () {         //编辑点击效果-->
            for (var j = 0; j < zhinenglis.length; j++) {
                zhinenglis[j].classList.remove('active');
            }
            zhinenglis[index].classList.add('active');      //选中其中一个并使其出现-->

            for (var i = 0; i < zhinengimgs.length; i++) {
                zhinengimgs[i].classList.remove('zhinengactive');      //使图片全部消失-->
            }
            zhinengimgs[index].classList.add('zhinengactive');     //选中一个并使其出现-->
        }
    })


//    搭配
    var dapeilis = document.querySelectorAll('.dapei .title .more .more-text');     //获取nav中的所有Li-->
    var dapeiimgs = document.querySelectorAll('.dapei-right ul');    //获取photo中的所有li-->
    // console.log(jiadianimgs)
    dapeilis.forEach(function (value, index) {       //遍历名称-->
        value.onmousemove = function () {         //编辑点击效果-->
            for (var j = 0; j < dapeilis.length; j++) {
                dapeilis[j].classList.remove('active');
            }
            dapeilis[index].classList.add('active');      //选中其中一个并使其出现-->

            for (var i = 0; i < dapeiimgs.length; i++) {
                dapeiimgs[i].classList.remove('dapeiactive');      //使图片全部消失-->
            }
            dapeiimgs[index].classList.add('dapeiactive');     //选中一个并使其出现-->
        }
    })

//    配件
    var peijianlis = document.querySelectorAll('.peijian .title .more .more-text');     //获取nav中的所有Li-->
    var peijianimgs = document.querySelectorAll('.peijian-right ul');    //获取photo中的所有li-->
    // console.log(jiadianimgs)
    peijianlis.forEach(function (value, index) {       //遍历名称-->
        value.onmousemove = function () {         //编辑点击效果-->
            for (var j = 0; j < peijianlis.length; j++) {
                peijianlis[j].classList.remove('active');
            }
            peijianlis[index].classList.add('active');      //选中其中一个并使其出现-->

            for (var i = 0; i < peijianimgs.length; i++) {
                peijianimgs[i].classList.remove('peijianactive');      //使图片全部消失-->
            }
            peijianimgs[index].classList.add('peijianactive');     //选中一个并使其出现-->
        }
    })


//    为你推荐
    var tuijianimgs = document.querySelectorAll('.tuijian-list ul');
    // console.log(tuijianimgs)
    var tuijiandiv = document.querySelector('.weinituijian');
    var tuijianwidth = parseInt(getComputedStyle(tuijiandiv, null).width);
    var tuijianleft = document.querySelector('.weinituijian .tuijian-title .title-more .reco-prev');
    var tuijianright = document.querySelector('.weinituijian .tuijian-title .title-more .reco-next');

    function moveb(way='l') {      //定义函数，默认为way='l'
        if (way == 'l') {      //当函数参数等于默认值时
            var now = 0;
            var next = 1;
            tuijianimgs[1].style.left = tuijianwidth + 'px';     //使下一个要出现的banner图始终在右边等待
            animate(tuijianimgs[0], {left: -tuijianwidth});     //使当前位置图片隐藏到左边
            animate(tuijianimgs[1], {left: 0});
        } else if (way == 'r') {     //当函数参数参数为向右运行时
            var now = 1;
            var next = 0;
            tuijianimgs[0].style.left = -tuijianwidth + 'px';     //下一个出现的要在左边等待
            animate(tuijianimgs[1], {left: tuijianwidth});        //当前图片隐藏到右边
            animate(tuijianimgs[0], {left: 0});
        }
    }

    moveb();
    tuijianleft.onclick = function () {       //左侧箭头点击效果
        if (flag) {
            moveb('r');
        }//当情况为真
        flag = false;
    }
    tuijianright.onclick = function () {
        if (flag) {
            moveb('l');     //执行向左运行函数
        }
        flag = false;
    }



}
    
//    内容
$(function(){

    //    图书
    {
        var tushudiv=$('.neirong-list01');
        //     console.log(divc)
        var tushuimgs=$('.neirong-list01 > ul > li');
        var tushulis=$('.tushu-lunbo')
        //    console.log(lis);
        var tushuleft=$('.tushu-jiantouzuo');
        var tushuright=$('.tushu-jiantouyou');
           // console.log(tushuright);
        let now=0;
        let next=0;
        var flag=true;
        var tushuwidth=tushudiv.offsetWidth;
        // console.log(tushuwidth);
        tushuleft.on("click",function(){
            next=now-1;
           if(next<0){
               next=0;
               return;
           }
            tushuimgs.eq(next).css({left:"-296px"})
            tushuimgs.eq(now).animate({left:"296px"})
            tushuimgs.eq(next).animate({left:"0"})
            tushulis.eq(now).removeClass("tushuactive").end().eq(next).addClass("tushuactive")
            now=next;
        })
        tushuright.on("click",function(){
            next=now+1;
           if(next>=tushuimgs.length){
               next=tushuimgs.length-1;
               return;
           }
            tushuimgs.eq(next).css({left:"296px"})
            tushuimgs.eq(now).animate({left:"-296px"});
            tushuimgs.eq(next).animate({left:"0"});
            tushulis.eq(now).removeClass("tushuactive").end().eq(next).addClass("tushuactive")
            now=next;
        })
        tushulis.each(function(index,value){
            value.click(function(){
                if(index<now){
                    tushuimgs.eq(next).css({left:"-296px"})
                    tushuimgs.eq(now).animate({left:"296px"})
                    tushuimgs.eq(next).animate({left:"0"})
                    tushulis.eq(now).removeClass("tushuactive").end().eq(next).addClass("tushuactive")
                    now=next;
                }else if(index>now){
                    tushuimgs.eq(next).css({left:"296px"})
                    tushuimgs.eq(now).animate({left:"-296px"});
                    tushuimgs.eq(next).animate({left:"0"});
                    tushulis.eq(now).removeClass("tushuactive").end().eq(next).addClass("tushuactive")
                    now=next;
                }else{
                    flag=true;
                }
            })
        });
    }



//      MIUI主题
    {
        var zhutidiv=$('.neirong-list02');
        //     console.log(divc)
        var zhutiimgs=$('.neirong-list02 > ul > li');
        var zhutilis=$('.zhuti-lunbo')
        //    console.log(lis);
        var zhutileft=$('.zhuti-jiantouzuo');
        var zhutiright=$('.zhuti-jiantouyou');
        // console.log(tushuright);
        let now=0;
        let next=0;
        var flag=true;
        var zhutiwidth=zhutidiv.offsetWidth;
        // console.log(tushuwidth);
        zhutileft.on("click",function(){
            next=now-1;
            if(next<0){
                // next=zhutiimgs.length-1;
                next=0;
                return;
            }
            zhutiimgs.eq(next).css({left:"-296px"})
            zhutiimgs.eq(now).animate({left:"296px"})
            zhutiimgs.eq(next).animate({left:"0"})
            zhutilis.eq(now).removeClass("zhutiactive").end().eq(next).addClass("zhutiactive")
            now=next;
        })
        zhutiright.on("click",function(){
            next=now+1;
            if(next>=zhutiimgs.length){
                // next=0;
                next=zhutiimgs.length-1;
                return;
            }
            zhutiimgs.eq(next).css({left:"296px"})
            zhutiimgs.eq(now).animate({left:"-296px"});
            zhutiimgs.eq(next).animate({left:"0"});
            zhutilis.eq(now).removeClass("zhutiactive").end().eq(next).addClass("zhutiactive")
            now=next;
        })
        zhutilis.each(function(index,value){
            value.click(function(){
                if(index<now){
                    zhutiimgs.eq(next).css({left:"-296px"})
                    zhutiimgs.eq(now).animate({left:"296px"})
                    zhutiimgs.eq(next).animate({left:"0"})
                    zhutilis.eq(now).removeClass("zhutiactive").end().eq(next).addClass("zhutiactive")
                    now=next;
                }else if(index>now){
                    zhutiimgs.eq(next).css({left:"296px"})
                    zhutiimgs.eq(now).animate({left:"-296px"});
                    zhutiimgs.eq(next).animate({left:"0"});
                    zhutilis.eq(now).removeClass("zhutiactive").end().eq(next).addClass("zhutiactive")
                    now=next;
                }else{
                    flag=true;
                }
            })
        });
    }

//       game_manager
    {
        var gamediv=$('.neirong-list03');
        //     console.log(divc)
        var gameimgs=$('.neirong-list03 > ul > li');
        var gamelis=$('.game_manager-lunbo')
        //    console.log(lis);
        var gameleft=$('.game_manager-jiantouzuo');
        var gameright=$('.game_manager-jiantouyou');
        // console.log(tushuright);
        let now=0;
        let next=0;
        var flag=true;
        var gamewidth=gamediv.offsetWidth;
        // console.log(tushuwidth);
        gameleft.on("click",function(){
            next=now-1;
            if(next<0){
                // next=gameimgs.length-1;
                next=0;
                return;
            }
            gameimgs.eq(next).css({left:"-296px"})
            gameimgs.eq(now).animate({left:"296px"})
            gameimgs.eq(next).animate({left:"0"})
            gamelis.eq(now).removeClass("gameactive").end().eq(next).addClass("gameactive")
            now=next;
        })
        gameright.on("click",function(){
            next=now+1;
            if(next>=gameimgs.length){
                // next=0;
                next=gameimgs.length-1;
                return;
            }
            gameimgs.eq(next).css({left:"296px"})
            gameimgs.eq(now).animate({left:"-296px"});
            gameimgs.eq(next).animate({left:"0"});
            gamelis.eq(now).removeClass("gameactive").end().eq(next).addClass("gameactive")
            now=next;
        })
        gamelis.each(function(index,value){
            value.click(function(){
                if(index<now){
                    gameimgs.eq(next).css({left:"-296px"})
                    gameimgs.eq(now).animate({left:"296px"})
                    gameimgs.eq(next).animate({left:"0"})
                    gamelis.eq(now).removeClass("gameactive").end().eq(next).addClass("gameactive")
                    now=next;
                }else if(index>now){
                    gameimgs.eq(next).css({left:"296px"})
                    gameimgs.eq(now).animate({left:"-296px"});
                    gameimgs.eq(next).animate({left:"0"});
                    gamelis.eq(now).removeClass("gameactive").end().eq(next).addClass("gameactive")
                    now=next;
                }else{
                    flag=true;
                }
            })
        });
    }


//      app
    {
        var appdiv=$('.neirong-list04');
        //     console.log(divc)
        var appimgs=$('.neirong-list04 > ul > li');
        var applis=$('.app-lunbo')
        //    console.log(lis);
        var appleft=$('.app-jiantouzuo');
        var appright=$('.app-jiantouyou');
        // console.log(tushuright);
        let now=0;
        let next=0;
        var flag=true;
        var appwidth=appdiv.offsetWidth;
        // console.log(tushuwidth);
        appleft.on("click",function(){
            next=now-1;
            if(next<0){
                // next=appimgs.length-1;
                next=0;
                return;
            }
            appimgs.eq(next).css({left:"-296px"})
            appimgs.eq(now).animate({left:"296px"})
            appimgs.eq(next).animate({left:"0"})
            applis.eq(now).removeClass("appactive").end().eq(next).addClass("appactive")
            now=next;
        })
        appright.on("click",function(){
            next=now+1;
            if(next>=appimgs.length){
                // next=0;
                next=appimgs.length-1;
                return;
            }
            appimgs.eq(next).css({left:"296px"})
            appimgs.eq(now).animate({left:"-296px"});
            appimgs.eq(next).animate({left:"0"});
            applis.eq(now).removeClass("appactive").end().eq(next).addClass("appactive")
            now=next;
        })
        applis.each(function(index,value){
            value.click(function(){
                if(index<now){
                    appimgs.eq(next).css({left:"-296px"})
                    appimgs.eq(now).animate({left:"296px"})
                    appimgs.eq(next).animate({left:"0"})
                    applis.eq(now).removeClass("appactive").end().eq(next).addClass("appactive")
                    now=next;
                }else if(index>now){
                    appimgs.eq(next).css({left:"296px"})
                    appimgs.eq(now).animate({left:"-296px"});
                    appimgs.eq(next).animate({left:"0"});
                    applis.eq(now).removeClass("appactive").end().eq(next).addClass("appactive")
                    now=next;
                }else{
                    flag=true;
                }
            })
        });
    }



    //     顶部弹出
    // var mainnavneirong=$(".main-nav");
    // var headernav=$(".header-nav");
    // // console.log(mainnavneirong)
    // headernav.hover(function(){
    //     mainnavneirong.css({display:"block"});
    // },function(){
    //     mainnavneirong.css({display:"none"});
    // })
     var nav = $(".header-nav .item")
     var mainnav = $(".main-nav")
    nav.hover(function(){
        set = setTimeout(function(){
            mainnav.slideDown();
        },800)
    },function(){
        clearTimeout(set);
        mainnav.mouseleave(function(){
            mainnav.slideUp();
        })
    })
})








