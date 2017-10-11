/**
 * Created by Administrator on 2017/7/18.
 */
$(function(){
    //������
    $("#inputSearch").on("click",function(){
       if(this.value==this.defaultValue){
           this.value="";
       }
    }).on("blur",function(){
        if(this.value==""){
            this.value=this.defaultValue;
        }
    });

    //����
    if($.cookie("skin")){
        var skin= $.cookie("skin");
        changeSkin(skin);
    }
    $("#skin li").on("click",function(){
        var skin=$(this).attr("id");
        $.cookie("skin",skin,{expires:30});
        changeSkin(skin);
    });
    function changeSkin(skin){
        $("#cssfile").attr("href","styles/skin/"+skin +".css");//�ı�link��css�ļ�
        $("#"+skin).addClass("selected").siblings().removeClass("selected");//�ı�Թ�
    }

    //����
    $("#nav li").hover(function(){
        $(this).children(".jnNav").show();
    },function(){
        $(this).children(".jnNav").hide();
    });

    //�ֲ�ͼ
    var $img=$("#JS_imgWrap img");
    $img.each(function(index,elem){
        $(elem).css({
            zIndex:5-index
        });
    });
    var nowIndex=0;
    var $a= $("#jnImageroll div a");
    var timer;
    $a.on("mouseover",function(){
        nowIndex = $(this).index();
       changeImg();
    });
    $("#jnImageroll").hover(function () {
        clearInterval(timer);
    }, function () {
        play();
    });
    play();
    function play(){
        timer=setInterval(function(){
            nowIndex++;
            if(nowIndex==$a.length){
                nowIndex=0;
            }
            changeImg();

        },1000);
    }
    function changeImg(){
        $a.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
        $img.eq(nowIndex).stop(false, true).fadeIn().siblings().stop(false, true).fadeOut();
    }

    //hot
    $(".promoted").append("<span class='hot'></span>");

    //tooltip
    tooltip("#jnNoticeInfo li a");
    tooltip(".jnCatainfo a");

    //Ʒ�ƻ
    $("#jnBrandTab li").on("click", function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
           left:-$("#jnBrandList li").innerWidth() *4*$(this).index()
        },1000);
    });


});