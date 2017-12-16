var designWidth=750;
var fontSize=100;
var html=document.getElementsByTagName("html")[0]
function fontsize(){
    var relWidth=document.documentElement.clientWidth;
    // relfontSize=relWidth*fontSize/designWidth;
    // html.style.fontSize=relfontSize+"px";
    console.log(relWidth)
}
fontsize();
window.onresize=fontsize;


