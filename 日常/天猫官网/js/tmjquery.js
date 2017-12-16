$(function(){
//    banner轮播
    var imgs = $('.photo li');
    var lis = $('.yuandian li');
    var div = $('.box');
    var width = div.width();
    var left = $('.jiantou-left');
    var right = $('.jiantou-right');
    var now = 0;
    var next = 0;
    var t = setInterval(move, 2000);
    var flag = true;
    function move(way = 'l') {      //定义函数，默认为way='l'
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
        imgs.removeClass("zindex").eq(next).addClass("zindex");
        imgs.removeClass("active").eq(next).addClass("active");
        lis.removeClass("active").eq(next).addClass("active");
        now = next;       //将位置赋值给下一个now
    }
    div.on("mousemove",function () {        //鼠标移入停止函数
        clearInterval(t);      //清除时间函数，使其停止
    })
    div.on("mouseout",function () {        //鼠标移除启动函数
        t = setInterval(move, 2000);      //添加时间函数，使其运行
    })
    lis.each(function (value, index) {      //遍历所有的轮播点
        var j;
        $(this).on("click",function () {      //当前轮播点点击效果
                imgs.removeClass("active").eq($(this).index()).addClass("active");
                lis.removeClass("active").eq($(this).index()).addClass("active");
                now = $(this).index();     //点击位置赋值给当前位置，（下一次将从此处开始运行）
        })
    })



//    顶部弹出
    {
        $(window).on("scroll", function () {
            // var navbox = $('.cedaohang>.left-nav');
            var scrolls = document.body.scrollTop || document.documentElement.scrollTop;
            var flag = true;
            var flag1 = true;
            if (scrolls >= 700) {
                if (flag) {
                    flag = false;
                    $('.cedaohang>ul').css({width: 40, height: 400, opacity: 1}, function () {
                        flag1 = true;
                    });

                    $(".top-tanchu").css({top: 0, opacity: 1}, function () {
                        flag1 = true;
                    })
                    console.log(scrolls)
                }
            } else if(scrolls<800){
                if (flag1) {
                    flag1 = false;
                    $('.cedaohang>ul').css({width: 0, height: 0, opacity: 0}, function () {
                        flag = true;
                    });
                    $(".top-tanchu").css({top: -50, opacity: 0}, function () {
                        flag = true;
                    })
                }
            }
        })
    }

//      侧导航
    var floors = $('.floor>.activeaa');
    var navaa = $('.cedaohang>.left-nav>li');
    let arr = ['', 'yellow', 'blue', 'green', 'red', 'pink', 'blue', 'green', 'yellow', 'blue'];
    $(this).on("scroll",function(){
        var obj = document.body.scrollTop ? document.body : document.documentElement;
        var scrolltop = obj.scrollTop;
        floors.each(function(index,value){
            if (scrolltop >= value.offsetTop + 200) {
                navaa.css({background:''});
                navaa.eq(index).css({background:arr[index]});
            }
        })
    })
    navaa.each(function(index,value){
        navaa.eq(index).on("click",function () {
            $(document.body).animate({scrollTop: floors[index + 1].offsetTop});
            $(document.documentElement).animate({scrollTop: floors[index + 1].offsetTop});
        })
    })
    //   返回顶部
    var btn =$('button');
    btn.on("click",function () {
        $(document.body).animate({scrollTop: 0});
        // $(document.documentElement).css({scrollTop: 0});
    })

//    右侧返回顶部
    var fanhui = $('.cedaohang-right>div>.tm-fanhuilogo');
    console.log(fanhui)
    fanhui.on("click",function () {
        $(document.body).animate({scrollTop: 0});
        // $(document.documentElement, {scrollTop: 0});
    })
});