var menufaly;
var onfaly;
$(".shopp").click(function (e) {
    e.stopPropagation()
    $(".shop").toggleClass("active");
    $(".shoptop").toggleClass("active");
    $(".hbg").toggleClass("active");
});
$("body").click(function () {
    $(".shop").removeClass("active");
    $(".shoptop").removeClass("active");
    $(".hbg").removeClass("active");
});

$(".on").click(bb)
function bb() {
    menufaly=false
    $(".seek").show(function () {
        $(".seek").css({x:-100,opacity:1});
    })
    $(".ggtop").css({display:"none"});
    $(".sho:not(.sho:first)").hide(600,function(){
        $(".sho:not(.sho:first)").css({scale:0.4,opacity:0});
    })
    $(".menu").show(200,function () {
        $(".menutop").css({y:8,rotate:45,opacity:1})
        $(".menubot").css({y:-7,rotate:135,opacity:1})
    })
    $(".xlk").show(700,function () {
        $(".xlk").css({opacity:1})
        $(".lj1").each(function(index){
            $(this).transition({translate:-50,opacity:1},150*index)
        });
    })
};
$(".menu").click(aa)
function aa() {
    menufaly=true
    $(".sho:not(.sho:first)").show(600,function () {
        $(".sho:not(.sho:first)").css({scale:1,opacity:1});
    })
    $(".seek").hide(200,function () {
        $(".seek").css({x:0,opacity:0});
    })
    $(".ggtop").css({display:"block"});
    $(".menu").hide(function () {
        $(".menutop").css({y:0,rotate:0,opacity:0})
        $(".menubot").css({y:0,rotate:0,opacity:0})
    })
    $(".xlk").hide(function () {
        $(".xlk").css({opacity:0})
        $(".lj1").css({translate:0,opacity:0})
    })

}
var trawidth=document.body.clientWidth/2-10
$(".tra").css({left:trawidth})
window.onresize  = widkd;
function widkd() {
    if(document.body.clientWidth <=768){
        var trawidth=document.body.clientWidth/2-10
        $(".tra").css({left:trawidth})
        var barh=document.documentElement.clientHeight-40
        $(".bar").css({"height":barh})
    }
    if(document.body.clientWidth <=768&&menufaly==false){
        menufaly=true
        $(".xlk").css({"display":"none","opacity":"0"})
        $(".lj1").css({translate:0,opacity:0})
        $(".seek").css({left:"410px",opacity:0})
        $(".ggtop").css({display:"block"})
        $(".sho:not(.sho:first)").css({display:"block",scale:1,opacity:1})
        $(".menutop").css({y:0,rotate:0,opacity:0})
        $(".menubot").css({y:0,rotate:0,opacity:0})
        $(".menu").hide()
    }
    if(document.body.clientWidth>=768){
        $(".menutop2").removeClass("active")
        $(".menubot2").removeClass("active")
        $(".bar").removeClass("active")
        $(".shopp").css({x:0,opacity:1})
        faly=true
    }
}
var barh=document.documentElement.clientHeight-40

$(".bar").css({"height":barh})
var faly=true

$(".menu2").click(cc)
function cc() {
    if(faly==true){
        $(".shopp").transition({x:10,opacity:0})
        $(".ggtop").css({display:"none"})
        $(".bar").show("slow",function () {
            $(".bar").transition({opacity:1,y:900})
            $(".l2").each(function(index){
                $(this).transition({delay:1,x:-50,opacity:1},index*300)
            });
        })
        $(".foot").css({display:"none"})
        $(".banner").css({display:"none"})
        $(".list").css({display:"none"})
        faly=false
    }else if(faly==false){
        $(".shopp").transition({x:0,opacity:1})
        $(".ggtop").css({display:"block"})
        faly=true
        $(".bar").css({opacity:0,y:-900})
        $(".bar").hide(600,function () {
            $(".bar").css({opacity:0,y:0})
            $(".l2").css({x:0})
        })
        $(".tra").css({display:"none",opacity:0})
        $(".pgicon").transition({display:"block",y:0,opacity:1})
        $(".seek1").transition({y:0},100)
        $(".bar>a").transition({y:0,opacity:0},300)
        $(".barseek").css({display:"none",y:0,opacity:0})
        $(".foot").css({display:"block"})
        $(".banner").css({display:"block"})
        $(".list").css({display:"block"})
    }
    $(".menutop2").toggleClass("active")
    $(".menubot2").toggleClass("active")
    $(".bar").toggleClass("active")
}

$(".seek1").click(function () {
    $(".pgicon").transition({y:-20,opacity:0},200)
    $(".pgicon").transition({display:"none",delay:200})
    $(".bar>a").transition({y:-300,opacity:0},900)
    $(".seek1").css({y:-300},200)
    $(".barseek").transition({y:-300,opacity:1},900)
    $(".barseek").transition({display:"block"})
    $(".tra").transition({delay:900,display:"block"})
    $(".tra").transition({rotate:0,y:0,opacity:1})
})
$(".tra").click(function () {
    $(".barseek").css({display:"none",y:0,opacity:0})
    $(".tra").transition({rotate:180,y:-20,opacity:0},200)
    $(".tra").transition({display:"none"},200)
    $(".pgicon").transition({display:"block"})
    $(".pgicon").transition({y:0,opacity:1,delay:200},200)
    $(".seek1").transition({y:0},600)
    $(".bar>a").transition({y:0,opacity:1},900)
})
$(".pgicon").click(function () {
    location.reload()
})


$(".little_box").each(function (index) {
    var flay=true
    $(this).click(function () {
        $(".add"+(index+1)).toggleClass("active");
        if (flay==true){
            flay=false
            $(".little_con"+(index+1)).slideDown(500);
        }else if(flay==false){
            flay=true
            $(".little_con"+(index+1)).slideUp(0);
        }
    })
})


var bww=document.documentElement.clientWidth;
var now=0;
var next=0;
var banner=$(".banner");
var lis=$(".lbdt li");
var cj=10;
var index=0;
var ttt=setInterval(move,2000);

function move() {
    next++;
    if(next==banner.length){
        next=0;
    }
    banner.eq(next).css({left:bww+"px",zIndex:cj++,width:"100%",height:"100%"}).animate({left:0},1000);
    banner.eq(now).animate({width:"60%",height:"80%"},1000);
    lis.eq(now).css("backgroundColor","#ccc").end().eq(next).css("backgroundColor","yellow");
    now=next;
}
function move1() {
    next--;
    if(next<0){
        next=banner.length-1;
    }
    banner.eq(next).css({left:0,bottom:0,zIndex:cj++,width:"60%",height:"80%"}).animate({width:"100%",height:"100%"},1000);
    banner.eq(now).css({zIndex:cj++}).animate({left:bww+"px"},1000);
    lis.eq(now).css("backgroundColor","#ccc").end().eq(next).css("backgroundColor","yellow");
    now=next;
}

$(".btnL").click(function () {
    move1();
})
$(".btnR").click(function () {
    move();
})
$(".banbox").hover(function () {
    clearInterval(ttt);
},function () {
    ttt=setInterval(move,2000);
})

lis.click(function () {
    index=$(this).index();
    lis.css("backgroundColor","#ccc");
    $(this).css("backgroundColor","blue");
    if(now>index){
        banner.eq(index).css({left:0,bottom:0,zIndex:cj++,width:"60%",height:"80%"}).animate({width:"100%",height:"100%"},1000);
        banner.eq(now).css({zIndex:cj++}).animate({left:bww+"px"},1000);
    }else if(now<index){
        banner.eq(index).css({left:bww+"px",zIndex:cj++,width:"100%",height:"100%"}).animate({left:0},1000);
        banner.eq(now).animate({width:"60%",height:"80%"},1000);
    }else{
        return;
    }
    now=index;
    next=index;
})


        