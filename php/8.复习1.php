<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/10
 * Time: 10:10
 */

//var_dump()
//    $a=10;
//    var_dump($a);

//int -> string  , "" 与''的区别
//    echo "<br/>";
//    $b='$a';//string(2) "$a"
//    $b="$a";//string(2) "10"
//    var_dump($b);
//    echo "<br/>";

//string -> int bool float
//settype(mixed  &$var  , string $type )
//将变量 var 的类型设置成 type,
//成功时返回 TRUE ， 或者在失败时返回 FALSE 。
//    if(isset($_GET['sub'])){
//        $num=$_GET['num'];
//        $aa=settype($num,'int');
//        if($aa==true){
//            var_dump($num);
//        }
//    }

//string -> array 'abcaksd' '2017-11-10' '192.0.0.1'
    $str="adcsafdsa";
    $arr=array();//定义一个空数组
//js 中求字符串，数组长度直接。length
//php中求字符串长度strlen($str)，求数组长度count($arr)
//    for($i=0;$i<strlen($str);$i++){
//        $arr[i]=$str[$i];
//    }
////    print_r($arr);//Array ( [i] => a )
//    echo "<pre>";
//    print_r($arr);
////        Array
////        (
////        [i] => a
////        )
//    echo "</pre>";

//php 输出函数 echo var_dump() print_r()
//      array -> string
//    $arr=array('l','i','m');
//    $str="";
//    for($i=0;$i<count($arr);$i++){
//        $str.=$arr[$i];
//    }
//    echo $str;

    $a=234;
    echo "<script>var b=$a+1</script>"


?>

<meta charset="utf-8">
<form action="8.复习1.php" meyhod="get">
    数字: <input type="text" name="num">
    <input type="submit" name="sub" value="提交">
</form>
<script>
    alert(b);//235
</script>

