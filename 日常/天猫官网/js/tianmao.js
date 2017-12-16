window.onload=function(){
    {
        var imgs = document.querySelectorAll('.photo li');
        var lis = document.querySelectorAll('.yuandian li');
        var div = document.querySelector('.box');
        var width = parseInt(getComputedStyle(div, null).width);
        var left = document.querySelector('.jiantou-left');
        var right = document.querySelector('.jiantou-right');
        // console.log(width)
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
            imgs[next].classList.add('zindex');
            imgs[now].classList.remove('zindex');
            animate(imgs[now], {opacity: 0});     //使当前位置图片隐藏
            animate(imgs[next], {opacity: 1}, function () {     //是下一个要出现的图片到当前位置显示，使开关打开
                flag = true;
            });
            lis[now].classList.remove('active');     //当前轮播点样式清除
            lis[next].classList.add('active');       //下一个显示轮播点添加样式
            now = next;       //将位置赋值给下一个now
        }

        div.onmousemove = function () {        //鼠标移入停止函数
            clearInterval(t);      //清除时间函数，使其停止
        }
        div.onmouseout = function () {        //鼠标移除启动函数
            t = setInterval(move, 2000);      //添加时间函数，使其运行
        }
        lis.forEach(function (value, index) {      //遍历所有的轮播点
            var j;
            value.onclick = function () {      //当前轮播点点击效果
                j = setTimeout(function () {
                    animate(imgs[now], {opacity: 0});       //动画效果使当前图片移动到右边隐藏
                    animate(imgs[index], {opacity: 1});      //动画效果使点击位置对应图片显示
                    lis[now].classList.remove('active');    //清除当前轮播点样式
                    lis[index].classList.add('active');     //点击位置轮播点添加样式
                    now = index;     //点击位置赋值给当前位置，（下一次将从此处开始运行）
                }, 300);
            }
            value.onmouseout = function () {
                clearTimeout(j);
            }
        })



    var boxa=document.querySelector('.top-tanchu');
    window.onscroll=function() {
        var newobj = document.body.scrollTop ? document.body : document.documentElement;
        var scrolltop = newobj.scrollTop;
        if(scrolltop>=800){
            animate(boxa,{top:0})
        }else if(scrolltop<900){
            animate(boxa,{top:-50})
        }
    }
    }
    //  侧导航
    {
        var floors = document.querySelectorAll('.floor>.activeaa');
        var navaa = document.querySelectorAll('.cedaohang>.left-nav>li');
// console.log(navaa)
        var arr = ['', 'yellow', 'blue', 'green', 'red', 'pink', 'blue', 'green', 'yellow', 'blue'];
        window.onscroll = function () {
            var obj = document.body.scrollTop ? document.body : document.documentElement;
            var scrolltop = obj.scrollTop;
            floors.forEach(function (value, index) {
                if (scrolltop >= value.offsetTop + 300) {
                    for (var i = 0; i < navaa.length; i++) {
                        navaa[i].style.background = '';
                    }
                    navaa[index].style.background = arr[index];
                }
                navaa.onmouseover = function () {
                    navaa[index].style.background = arr[index];
                }
            });

            navaa.forEach(function (value, index) {
                value.onclick = function () {
                    animate(document.body, {scrollTop: floors[index + 1].offsetTop});
                    animate(document.documentElement, {scrollTop: floors[index + 1].offsetTop});
                }
            });
            var navbox = document.querySelector('.cedaohang .left-nav');
            var scrolls = document.body.scrollTop || document.documentElement.scrollTop;
            var flag = true;
            var flag1 = true;
            if (scrolls >= 1000) {
                // if (flag) {
                flag = false;
                animate(navbox, {width: 40, height: 400, opacity: 1}, function () {
                    flag = true;
                })
                // }

            } else if (scrolls <= 1000) {
                // if (flag1) {
                flag = false;
                animate(navbox, {width: 0, height: 0, opacity: 0}, function () {
                    flag = true;
                })
                // }
            }
        }
    }

        var btn = document.querySelector('button');
        btn.onclick = function () {
            animate(document.body, {scrollTop: 0});
            animate(document.documentElement, {scrollTop: 0});
        }
    }

    {
        var fanhui = document.querySelector('.cedaohang-right div .tm-fanhuilogo');
        fanhui.onclick = function () {
            animate(document.body, {scrollTop: 0});
            animate(document.documentElement, {scrollTop: 0});
        }
    }

    {
        var tanchudingceng = document.querySelector('.cedaohang-right>div>.tm-fanhuilogo>.nav-right-tanchu01');
        tanchudingceng.onclick = function () {
            animate(document.body, {scrollTop: 0});
            animate(document.documentElement, {scrollTop: 0});
        }
    }


    {
        var pptjimgs = document.querySelectorAll('.left-video li');
        // console.log(pptjimgs)
        var pptjlis = document.querySelectorAll('.left-video-bottom>li');
        var pptjdiv = document.querySelector('.pptjmain-left');
        var pptjwidth = parseInt(getComputedStyle(pptjdiv, null).width);
        // var left=document.querySelector('.jiantou-left');
        var pptjright = document.querySelector('.pptjmain-left>.pptjjiantou-right');
        var now = 0;
        var next = 0;
        var t = setInterval(move, 20000);
        var flag = true;
        function move(way = 'l') {      //定义函数，默认为way='l'
            if (way == 'l') {      //当函数参数等于默认值时
                next = now + 1;        //下一个出现为当前位置加一
                if (next >= pptjimgs.length) {      // 当下一个出现的所在位置等于图片所在ul  li 的长度时
                    next = 0;         //使下一个出现的是位置0的图片
                }
                pptjimgs[next].style.left = pptjwidth + 'px';     //使下一个要出现的banner图始终在右边等待
                animate(pptjimgs[now], {left: -pptjwidth});     //使当前位置图片隐藏到左边
                animate(pptjimgs[next], {left: 0}, function () {     //是下一个要出现的图片到当前位置显示，使开关打开
                    flag = true;
                });
                now++;
            } else if (way == 'r') {     //当函数参数参数为向右运行时
                next = now - 1;       //下一个出现为当前位置减一
                if (next <= 0) {          //当下一个出现的位置小于等于0时
                    next = pptjimgs.length - 1;       //下一个出现的图片为最后一张
                }
                pptjimgs[next].style.left = -pptjwidth + 'px';     //下一个出现的要在左边等待
                animate(pptjimgs[now], {left: pptjwidth});        //当前图片隐藏到右边
                animate(pptjimgs[next], {left: 0}, function () {     //下一个要出现的到当前位置显示
                    flag = true;         //开关打开
                });
                now++;
            }
            pptjlis[now].classList.remove('pptjactive');     //当前轮播点样式清除
            pptjlis[next].classList.add('pptjactive');       //下一个显示轮播点添加样式
            now = next;       //将位置赋值给下一个now
        }

        pptjdiv.onmousemove = function () {        //鼠标移入停止函数
            clearInterval(t);      //清除时间函数是，使其停止
        }
        pptjdiv.onmouseout = function () {        //鼠标移除启动函数
            t = setInterval(move, 20000);      //添加时间函数，使其运行
        }
        pptjright.onclick = function () {
            if (flag) {
                move('l');     //执行向左运行函数
                flag = false;
            }
        }
        pptjlis.forEach(function (value, index) {      //遍历所有的轮播点
            value.onmousemove = function () {      //当前轮播点点击效果
                if (index < now) {       //如果点击位置在当前位置的前面
                    pptjimgs[index].style.left = -pptjwidth + 'px';     //使点击位置的图片在左侧等待
                    animate(pptjimgs[now], {left: pptjwidth});       //动画效果使当前图片移动到右边隐藏
                    animate(pptjimgs[index], {left: 0});      //动画效果使点击位置对应图片显示
                    pptjlis[now].classList.remove('pptjactive');    //清除当前轮播点样式
                    pptjlis[index].classList.add('pptjactive');     //点击位置轮播点添加样式
                    now = index;     //点击位置赋值给当前位置，（下一次将从此处开始运行）
                } else if (index > now) {
                    pptjimgs[index].style.left = pptjwidth + 'px';
                    animate(pptjimgs[now], {left: -pptjwidth});
                    animate(pptjimgs[index], {left: 0});
                    pptjlis[now].classList.remove('pptjactive');
                    pptjlis[index].classList.add('pptjactive');
                    now = index;
                } else {
                    flag = true;
                }
            }
        })
    }
}


