<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/10
 * Time: 10:45
 */
//    echo "<pre>";
//    print_r($_SERVER);
//    echo "</pre>";

//    $str=$_SERVER['REQUEST_URI'];
//    $arr=explode("?",$str);
//    $len=count($arr)-1;
//    echo $arr[$len];//wd=javascript
//    echo "<br/>";

//    $str="0123456789abcdefghijklmnopqrstuvwxyz";
//    $temp=strlen($str)-1;
//    $rstr="";
//    for($i=0;$i<8;$i++){
//        $rstr.=substr($str,rand(0,$temp),1);
//    }
//    echo "$rstr";//有重复的

    if(isset($_GET['name'])){
        $name=$_GET['name'];
        switch($name){
            case 'add':
                echo "<script>alert('添加文章')</script>";
                break;
            case 'del':
                echo "<script>alert('删除文章')</script>";
                break;
            case 'update':
                echo "<script>alert('修改文章')</script>";
                break;
            case 'select':
                echo "<script>alert('查询文章')</script>";
                break;
        }
    }

?>
<meta charset="utf-8">
<a href="test04.php?name=add">添加文章</a>
<a href="test04.php?name=del">删除文章</a>
<a href="test04.php?name=update">修改文章</a>
<a href="test04.php?name=select">查询文章</a>
