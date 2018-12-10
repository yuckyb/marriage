/**
 * Created by lenovo on 17/12/5 005.
 */
/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
});
/*音乐处理开始*/

var music=document.getElementById("music");
var musicbg=document.querySelectorAll(".musicbg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";
        musicImg.style.animation="none";
        audio.pause();
        flag=0;
    }else{
        musicbg.style.display="block";
        musicImg.style.animation="music 2s linear infinite";
        audio.pause();
        flag=1;
    }
}
/*音乐处理结束*/