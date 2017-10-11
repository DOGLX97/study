/**
 * Created by Administrator on 2017/9/5.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    return {
        open: function (settings) {
            var defalutsettings={
                width:300,
                height:400,
                content:""
            };
            $.extend(defalutsettings,settings);
            var html= '<div id="pop">'+
                '<div id="mask"></div>'+
                '<div id="content">'+
                '<div id="head">'+
                '<span>弹出框</span>'+
                '<span id="close">[x]</span>'+
                '<div id="info"></div>'+
                '</div>'+
                '</div>'+
                '</div>';
            $("body").append(html);
            $("#close").on("click", function () {
                $("#pop").remove();
            });
            var $info=$("#info");
            if(defalutsettings.content.indexOf(".html")!=-1){
                $info.load(defalutsettings.content);
            }else{
                $info.html(defalutsettings.content);
            }
        }
    }
});