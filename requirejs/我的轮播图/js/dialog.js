/**
 * Created by Administrator on 2017/7/27.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    function Dialog(settings){
        this.defalutSettings={
            selector:"body",
            img:[],
            speed:500,
            buttonStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defalutSettings,settings);
        this.$container=$('<div class="dialog-container"></div>');
        this.$img=$('<div class="dialog-img"></div>');
        this.$icon=$('<ul class="dialog-icon">');
        this.$left=$('<div class="dialog-left">&lt;</div>');
        this.$right=$('<div class="dialog-right">&gt;</div>');
        this.nowIndex=0;
        this.timer;
    }
    Dialog.prototype.Init= function () {
        this.$container.append(this.$img).append(this.$icon).append(this.$left).append(this.$right);
        for(var i=0;i<this.defalutSettings.img.length;i++){
            this.$img.append('<img src="'+this.defalutSettings.img[i]+'" alt=""/>');
            this.$icon.append('<li>'+(i+1)+'</li>');
        }
        $(this.defalutSettings.selector).append(this.$container);
        $("img",this.$img).eq(0).addClass("selected");
        $("li",this.$icon).eq(0).addClass("selected");
        if(this.defalutSettings.buttonStyle=="circle"){
            $("li",this.$icon).addClass("circle");
            $("li",this.$icon).html("");
        }
        if(this.defalutSettings.arrowPos=="center"){
            $(".dialog-left",this.$container).addClass("center");
            $(".dialog-right",this.$container).addClass("center");
        }
        if(this.defalutSettings.arrowPos=="bottom"){
            $(".dialog-left",this.$container).addClass("bottom");
            $(".dialog-right",this.$container).addClass("bottom");
        }
        var that=this;
        $("li",this.$icon).on("click", function () {
            that.nowIndex=$(this).index();
            changeImg();
        });
        $(".dialog-left",this.$container).on("click", function () {
            that.nowIndex--;
            if(that.nowIndex==-1){
                that.nowIndex=that.defalutSettings.img.length-1;
            }
            changeImg();
        });
        $(".dialog-right",this.$container).on("click", function () {
            that.nowIndex++;
            if(that.nowIndex==that.defalutSettings.img.length){
                that.nowIndex=0;
            }
            changeImg();
        });
        that.$container.hover(function () {
                clearInterval(that.timer);
        }, function () {
                play();
        });
        play();
        function play(){
            that.timer=setInterval(function () {
                $(".dialog-right",that.$container).trigger("click");
            },that.defalutSettings.speed);
        }
        function changeImg(){
            $("img",that.$img).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
            $("li",that.$icon).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };

    return Dialog;
});