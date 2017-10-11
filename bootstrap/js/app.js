/**
 * Created by Administrator on 2017/10/7.
 */
$(function () {
    var $slideshow=$("#slideshow");
    //监听鼠标click事件
    $(".prev-slide").on("click", function () {
        $("#slideshow").carousel("prev");
    });
    $(".next-slide").on("click", function () {
        $("#slideshow").carousel("next");
    });
    //监听键盘keydown事件
    $(document).on("keydown", function (e) {
        //console.log(e.which);
        switch(e.which){
            case 37:
                $slideshow.carousel("prev");
                break;
            case 39:
                $slideshow.carousel("next");
                break;
        }
    });
    //播放暂停按钮
    var play=false;
    $(".play-and-stop").on("click", function () {
        if(!play){
            $slideshow.carousel("cycle");
            $(this).children("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        }else{
            $slideshow.carousel("pause");
            $(this).children("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
        }
        play=!play;
    })
});