<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/9
 * Time: 11:17
 */
    //处理计算
    if(isset($_GET['sub'])){
        $num1=$_GET['num1'];
        $num2=$_GET['num2'];
        $symbol=$_GET['symbol'];
        $sum=0;
        switch($symbol){
            case '+':
                $sum=$num1+$num2;
                break;
            case '-':
                $sum=$num1-$num2;
                break;
            case '*':
                $sum=$num1*$num2;
                break;
            case '/':
                $sum=$num1/$num2;
                break;
            case '%':
                $sum=$num1%$num2;
                break;
            default:
                echo '输入错误!';
        }
    }
?>
<meta charset="utf-8">
<table width="500" border="1" style="margin: 100px auto">
    <caption>计算器</caption>
    <form action="7.计算器.php" method="get">
        <tr>
            <td>
                <input type="text" name="num1" value="<?php echo $_GET['num1']?$_GET['num1']:""?>">
            </td>
            <td>
                <select name="symbol" id="">
                    <option value="+" <?php echo ($_GET['symbol']=='+')?"selected":""?>>+</option>
                    <option value="-" <?php echo ($_GET['symbol']=='-')?"selected":""?>>-</option>
                    <option value="*" <?php echo ($_GET['symbol']=='*')?"selected":""?>>*</option>
                    <option value="/" <?php echo ($_GET['symbol']=='/')?"selected":""?>>/</option>
                    <option value="%" <?php echo ($_GET['symbol']=='%')?"selected":""?>>%</option>
                </select>
            </td>
            <td>
                <input type="text" name="num2" value="<?php echo $_GET['num2']?$_GET['num2']:""?>">
            </td>
            <td>
                <input type="submit" name="sub">
            </td>
        </tr>
        <?php
            if(isset($_GET['sub'])){
                echo "<tr>";
                echo "<td colspan=\"4\">";
                echo $num1.$symbol.$num2."=".$sum;
                echo "</td>";
                echo '</tr>';
            }
        ?>
    </form>
</table>
