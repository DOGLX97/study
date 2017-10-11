/**
 * Created by Administrator on 2017/7/27.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var arrImg1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings1={
        selector:"#container1",
        img:arrImg1,
        speed:500,
        buttonStyle:"circle",
        arrowPos:"bottom"
    };
    var arrImg2=["img/1.jpg","img/2.jpg","img/3.jpg"];
    var settings2={
        selector:"#container2",
        img:arrImg2,
        speed:1000,
        buttonStyle:"square",
        arrowPos:"center"
    };

    var dialog1=new Dialog(settings1);
    dialog1.Init();
    var dialog2=new Dialog(settings2);
    dialog2.Init();
});