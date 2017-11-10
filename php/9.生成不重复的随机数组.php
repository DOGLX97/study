<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/10
 * Time: 11:03
 */

    $n=5;
    $arr=array();
    for($i=0;$i<$n;$i++){
        $num=rand(0,9);
        $arr[$i]=$num;
        if(count($arr)!=count(array_unique($arr))){
            $i--;
        }
    }
    print_r($arr);
    //Array ( [0] => 8 [1] => 9 [2] => 2 [3] => 5 [4] => 7 )
    //Array ( [0] => 5 [1] => 6 [2] => 0 [3] => 8 [4] => 2 )
;?>