<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/9
 * Time: 21:46
 */
//    $str=`ping 127.0.0.1`;
//    echo $str;

//  1. 可变变量
    $one="####";
    $two=one;
    $three=two;
    $four=three;
    echo $four."<br>";//three
    echo $$four;//two

//  2.& 取地址符
?>