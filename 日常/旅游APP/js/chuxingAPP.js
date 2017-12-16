window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


    var myScroll;
    function loaded() {
        myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true
        });
    }
    loaded();






    var caidandiv=document.querySelector('.caidan');
    var oldleft=caidandiv.offsetLeft;
    var wode=document.querySelector('.icon-wode');

    wode.onclick=function(){
        caidandiv.style.left='0%';
    }


    caidandiv.addEventListener('touchstart',function(e){
        this.classList.remove('active');
        var old=e.changedTouches[0].clientX;
        caidandiv.addEventListener('touchmove',function(e){
            var news=e.changedTouches[0].clientX;
            var newleft=news-old;
            // console.log(newleft)
            this.style.left=newleft+oldleft+'px';
            caidandiv.addEventListener('touchend',function(e){
                this.classList.add('active');
                if(newleft>30){
                    this.style.left='0%';
                }
                else{
                    this.style.left='-75%';
                }
            })
        })
    })

}