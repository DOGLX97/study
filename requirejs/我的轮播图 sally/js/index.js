/**
 * Created by Administrator on 2017/7/28.
 */
requirejs({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var arrImg=["img/1.JPG","img/2.JPG"];
    var settings1={
        selector:"#container",
        imgSrc:arrImg,
        width:200,
        height:300,
        speed:1000,
        buttonStyle:"square",
        arrowsPos:"bottom"
    };
    var dialog1=new Dialog(settings1);
    dialog1.init();
    var arrImg2=["img/1.JPG","img/2.JPG","img/3.JPG"];
    var settings2={
        selector:"#container2",
        imgSrc:arrImg2,
        width:200,
        height:300,
        speed:500,
        buttonStyle:"circular",
        arrowsPos:"center"
    };
    var dialog2=new Dialog(settings2);
    dialog2.init();
});