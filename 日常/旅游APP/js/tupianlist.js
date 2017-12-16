window.onload=function () {
    var myScroll;
    function loaded () {
        myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true
        });
    }
    loaded();
}