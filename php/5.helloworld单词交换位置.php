<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/8
 * Time: 18:08
 */


    echo "<script>
        var str='hello world';
        var temp=str.length;
        
        function reverse(str){
            for(var i=str.length-1;i>=0;i--){
                if(str.charAt(i)==' '){
                    console.log(str.substring(i+1,temp));
                    temp=i;
                }
                if(i==0){
                    console.log(str.substring(0,temp));
                }
            }
        }
        reverse(str);
    </script>";