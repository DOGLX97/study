<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/7
 * Time: 19:14
 */
//九九乘法表
    echo "<table width='800px' border='1px'>";
    for($i=1;$i<=9;$i++){
        echo "<tr>";
        for($j=1;$j<=$i;$j++){
            echo "<td>$i*$j=".($i*$j)."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    echo "<br>";

    echo "<table width='800px' border='1px'>";
    for($i=9;$i>=0;$i--){
        echo "<tr>";
        for($j=1;$j<=$i;$j++){
            echo "<td>$i*$j=".($i*$j)."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    echo "<br>";

    echo "<table width='800px' border='1px'>";
    for($i=1;$i<=9;$i++){
        echo "<tr>";
        for($k=1;$k<=9-$i;$k++){
            echo "<td>&nbsp;</td>";
        }
        for($j=1;$j<=$i;$j++){
            echo "<td>$i*$j=".($i*$j)."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    echo "<br>";

    echo "<table width='800px' border='1px'>";
    for($i=9;$i>=0;$i--){
        echo "<tr>";
        for($k=1;$k<=9-$i;$k++){
            echo "<td>&nbsp;</td>";
        }
        for($j=1;$j<=$i;$j++){
            echo "<td>$i*$j=".($i*$j)."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

?>