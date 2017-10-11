/**
 * Created by Administrator on 2017/9/5.
 */
requirejs.config( {
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    function Dialog(settings){
        this.defalutSettings={
            selector:"container",
            width:600,
            height:700,
            arrowsStyle:"middle"
        };
        $.extend(this.defalutSettings,settings);
        this.$container=$('<div id='+this.defalutSettings.selector+'></div>');
        this.$image=$("<div class='image'></div>");
        this.$arrows=$('<div class="arrows"></div>');
        this.$left=$(' <div id="left">&lt;</div>');
        this.$right=$('<div id="right">&gt;</div>');
    }
    Dialog.prototype.init=function(){
        this.$container.appendTo($("body"));
        this.$container.append(this.$image).append(this.$arrows);
        for(var i=0;i<18;i++){
            this.$image.append('<img src="img/'+(i+1)+'.jpg" alt=""/>');
        }
        this.$arrows.append(this.$left).append(this.$right);
        var that=this;
        var $aImg=$("img",that.$container);
        $aImg.eq(0).addClass("selected");
        $aImg.css({
            width:that.defalutSettings.width+"px",
            height:that.defalutSettings.height+"px"
        });
        that.$container.css({
            width:that.defalutSettings.width+"px",
            height:that.defalutSettings.height+"px"
        });
        if(that.defalutSettings.arrowsStyle=="bottom"){
            that.$left.css({
                top:"80%"
            });
            that.$right.css({
                top:"80%"
            })
        }
        var nowIndex=0;
        that.$left.on("click", function () {
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=$aImg.length-1;
            }
            changeImg();
        });
        that.$right.on("click", function () {
            nowIndex++;
            if(nowIndex==$aImg.length){
                nowIndex=0;
            }
            changeImg();
        });
        function changeImg(){
            $aImg.eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        }
        var timer;
        play();
        function play(){
            timer=setInterval(function () {
                that.$right.trigger("click");
            },800);
        }
        that.$container.hover(function () {
            clearInterval(timer);
        }, function () {
            play();
        })
    };
    return Dialog;
});