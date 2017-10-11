/**
 * Created by Administrator on 2017/9/5.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($, Dialog) {
    $("#btn").on("click", function () {
        var oPop=document.getElementById("pop");
        if(oPop==null){
            var settings={
                width:300,
                height:400,
                content:"info.html"
            };
            Dialog.open(settings);
        }
    })
});