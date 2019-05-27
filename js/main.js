jQuery(function($){
    var owl=$('.picshow');
    owl.owlCarousel({
        //动画效果
        animateOut: 'fadeOut',
        animateIn: 'zoomIn',
        smartSpeed:300,
        //自动播放自动展示,默认5秒换一次照片
        autoplay:true,
        autoplayTimeout:8000,
        loop:true,
        margin:2,
        stagePadding:2,
        //保证屏幕大小无论是多少都是展示一张图片
        items:1,
        //	鼠标悬停停止自动播放
        autoplayHoverPause:true,
        //关闭底部圆点
        dots:false,
    });
    $('.owl-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });
    $('.owl-next').click(function(){
        owl.trigger('next.owl.carousel');
    });
});
//试着写写点关闭按钮关闭目标div
function contact_close(){
    alert("If you want to write it again, just refresh the website.")
    document.getElementById("contact-form-total").style.display="none";
}

$(document).ready(function(){
    var location = window.location.pathname;
    var id = location.substring(location.lastIndexOf('/')+1);
    //去掉.html就剩下项目名称可以用来和nav ul的标签进行匹配
    var idd =id.substring(0,id.length-5);
    //alert(idd);
    var target = document.getElementById(idd);
    //检测机制
    if(target===null){
        alert("wrong!");
    }
    target.className = "lock-navbar-choose";
});