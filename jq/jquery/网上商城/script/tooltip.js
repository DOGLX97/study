function tooltip(selector){
    $(selector).hover(function(e){
        this.tip=$(this).attr("title")?$(this).attr("title"):$(this).html();
        if($(".tip").length!=0){
            $(".tip").html(this.tip);
        }else{
            $("<div class='tip'></div>").html(this.tip).appendTo($("body"));
        }
        $(".tip").offset( {
            left:   e.pageX+15,
            top:  e.pageY+15
        });
        $(this).removeAttr("title");
    }, function () {
        $(this).attr("title",this.tip);
        $(".tip").remove();
    }).on("mousemove",function(e){
        $(".tip").offset({
            left: e.pageX+15,
            top: e.pageY+15
        });
    });
}