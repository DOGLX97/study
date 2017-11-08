<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/8
 * Time: 17:55
 */
//完全反转字符串一
    $str="limyoona";

    for($i=strlen($str)-1;$i>=0;$i--){
        $str1.=$str[$i];
    }

    echo $str1;

    echo '<br>';
//完全反转字符串二
    for($i=1;$i<=strlen($str);$i++){
        $str2.=substr($str,-$i,1);
    }

    echo $str2;

    echo '<br>';
//完全反转字符串递归方法
    function reserver($str){
        if(strlen($str)>0){
            reserver(substr($str,1));
        }
        echo substr($str,0,1);
        return;
    }

    reserver($str);

