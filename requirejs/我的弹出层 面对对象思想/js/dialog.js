requirejs({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    //构造函数
    function Dialog(settings){
        this.defalutSettings={
            width:500,
            height:400,
            title:"弹出层",
            content:""
        };
        $.extend(this.defalutSettings,settings);
        this.$container=$('<div class="dialog-container"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$box=$('<div class="dialog-box"></div>');
        this.$title=$('<div class="dialog-title"></div>');
        this.$item=$('<div class="dialog-title-item">'+this.defalutSettings.title+'</div>');
        this.$close=$('<div class="dialog-title-close">[X]</div>');
        this.$content=$('<div class="dialog-content"></div>');
    }
    //原型
    Dialog.prototype.open= function () {
        this.$container.append(this.$mask).append(this.$box).appendTo($("body"));
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width:this.defalutSettings.width,
            height:this.defalutSettings.height
        });
        if(this.defalutSettings.content.indexOf(".html")!=-1){
            this.$content.load(this.defalutSettings.content);
        }else{
            this.$container=this.defalutSettings.content;
        }
        this.$close.on("click", function () {
            this.close();
        }.bind(this));
    };
    Dialog.prototype.close= function () {
        this.$container.remove();
    };
    return Dialog;
});
