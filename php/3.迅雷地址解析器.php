<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/8
 * Time: 17:45
 */

//编码
    $str="http://www.163.com/1.rmvb";
    $basestr=base64_encode($str);
//    echo $basestr;
    $thunderbase="thunder://".$basestr;
    echo $thunderbase;

    echo "<br>";

//解码
    $str2="thunder://aHR0cDovL3d3dy4xNjMuY29tLzEucm12Yg==";
    $restr=substr($str2,10);//切割字符串
//    echo $restr;
    echo base64_decode($restr);