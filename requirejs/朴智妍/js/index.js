/**
 * Created by Administrator on 2017/9/5.
 */
requirejs.config( {
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var settings={
        selector:"container",
        width:400,
        height:600,
        arrowsStyle:"center"
    };
    var dialogOne=new Dialog(settings);
    dialogOne.init();
    var settings2={
        selector:"container2",
        width:200,
        height:300,
        arrowsStyle:"center"
    };
    var dialogTwo=new Dialog(settings2);
    dialogTwo.init();
});

