$(document).ready(function() {
    $(".con .wrap .cho").hide();
    $(".con .wrap .cho").fadeIn(1500);

    $(".opn").on("click",function() {
        $(".allmenu").css("right","0");
        $(".allmenu").addClass("active");
        $(".allmenu-nav .gnb > li").removeClass("allsub").css("color","#000");
    })
    $(".close").on("click",function() {
        $(".allmenu").css("right","100%");
        $(".allmenu").removeClass("active");
    })
    $(".con4 .wrap .sec .ev").slick({
        arrows : false,
        dots : true,
        autoplay : true,
        autoplay : 3000
    })

    $(".allmenu-nav .gnb > li").on("mouseover",function() {
        $(this).addClass("allsub");
        $(this).siblings().removeClass("allsub");
        $(".allsub").css("color","#c30e2e");
        $(".allsub").siblings().css("color","#000");
    })
})