<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/8
 * Time: 18:14
 */

//    $aa=12;
//    var_dump($aa);//int(12)
//    echo "<br>";
//    unset($aa);
//    var_dump($aa);//NULL
//    echo "<br>";
//    $arr=array(1,2,3);
//    var_dump($arr);//array(3) { [0]=> int(1) [1]=> int(2) [2]=> int(3) }

    if(isset($_POST['sub'])){
        $name=$_POST['uname'];
        $pwd=$_POST['pwd'];

        $pwd1=md5($pwd);
        echo $pwd1;
        //827ccb0eea8a706c4c34a16891f84e7b
        //81dc9bdb52d04dc20036dbd8313ed055
        //无论输入多少位，都是定长
//        if($name=='laoshan' and $pwd=='laoxie'){
//            //设置cookie
//            echo '登录成功';
//        }else{
//            echo '登录失败';
//        }
    }
//    echo $name,$pwd;


?>
<meta charset="utf-8">
<form action="6.md5密码加密.php" method="post">
    用户名 <input type="text" name="uname"><br>
    密码 <input type="password" name="pwd"><br>
    <input type="submit" name="sub" value="登录">
    <input type="reset" name="rst" value="重置">
</form>
