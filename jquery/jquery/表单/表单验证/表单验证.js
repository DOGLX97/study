/**
 * Created by Administrator on 2017/7/18.
 */
$(function(){
    var $username=$("#username");
    //var re=new RegExp("\d{6,}");
    var $email=$("#email");
    $username.on("keyup",function(){
        //console.log($username.val());
        //console.log(re.test($username.val()));
        //if(re.test($username.val())){
        //    $username.next().css("display","none");
        //}
        $username.next().css("display","inline-block");
        if($username.val().length>5){
            //$username.next().css("display","none");
            $username.next().children("img").attr("src","img/reg4.gif");
            $username.next().children("span").empty();
        }
    });
    $email.on("keyup",function(){
        $email.next().css("display","inline-block");
        var re=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        console.log(re.test($email.val()));
        if(re.test($email.val())){
            //$email.next().css("display","none");
            $email.next().children("img").attr("src","img/reg4.gif");
            $email.next().children("span").empty();
        }
    });
    $("#submit").on("click",function(){
        var str="";
        str=$username.val()+"\n"+$email.val();
       alert(str);
    });
});