var ImgComponent=React.createClass({
    getDefaultProps:function(){
        return {
            data:{
                fileName:"",
                title:"",
                desc:""
            },
            info:{
                pos:{
                    x:0,
                    y:0
                },
                isCenter:false,
                rotate:0,
                isInverse:false
            }
        }
    },
    clickHandler(){
        if(this.props.info.isCenter){
            this.props.inverse();
        }else{
            this.props.center();        
        }
    },
    render:function(){
        var styleObj={
            left:this.props.info.pos.x,
            top:this.props.info.pos.y,
            transform:"rotate("  +this.props.info.rotate + "deg)"
        };
        if(this.props.info.isInverse){
            styleObj.transform="rotateY(180deg)";
        }
        return (
            <figure className="imgComponent" style={styleObj} onClick={this.clickHandler}>
                <img src={"img/"+this.props.data.fileName}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <div className="desc">{this.props.data.desc}</div>                
                </figcaption>
            </figure>
        );
    }
});
var ControllerComponent=React.createClass({
    getDefaultProps:function(){
        return {
            info:{
                pos:{
                    x:0,
                    y:0
                },
                isCenter:false,
                rotate:0,
                isInverse:false
            }
        }
    },
    clickHandler(){
        if(this.props.info.isCenter){
            this.props.inverse();
        }else{
            this.props.center();        
        }
    },
    render(){
        var clsName=''
        if(this.props.info.isCenter){
            clsName+= " is-center";
        }
        if(this.props.info.isInverse){
            clsName+= " is-inverse";
        }
        return (
            <span className={clsName} onClick={this.clickHandler}></span>
        );
    }
});
var Photowall=React.createClass({
    getInitialState:function(){
        return {
            imgInfo:[{
                pos:{
                    x:0,
                    y:0
                },
                isCenter:false,
                rotate:0,
                isInverse:false
            }]
        }
    },
    const:{
        centerPos:{
            x:0,
            y:0
        },
        leftMin:0,
        leftMax:0,
        rightMin:0,
        rightMax:0,
        topMin:0,
        topMax:0
    },
    componentDidMount:function(){
        // 计算stage宽度高度
        var stageDom=this.refs.stageDom,
            stageDomW=stageDom.offsetWidth,
            stageDomH=stageDom.offsetHeight,
            stageDomWhalf=stageDomW/2,
            stageDomHhalf=stageDomH/2;
        //计算img宽度和高度 
        var imgDom=ReactDOM.findDOMNode(this.refs.imgDom),
            imgDomW=imgDom.offsetWidth,
            imgDomH=imgDom.offsetHeight,
            imgDomWhalf=imgDomW/2,
            imgDomHhalf=imgDomH/2;
        // 计算边界
        this.const={
            centerPos:{
                x:stageDomWhalf-imgDomWhalf,
                y:stageDomHhalf-imgDomHhalf
            },
            leftMin:-imgDomWhalf,
            leftMax:stageDomWhalf-3*imgDomWhalf,
            rightMin:stageDomWhalf+imgDomWhalf,
            rightMax:stageDomW-imgDomWhalf,
            topMin:-imgDomHhalf,
            topMax:stageDomH-imgDomHhalf
        }
        console.log(getRandom(this.const.leftMin,this.const.leftMax));
        this.postion(0);
    },
    postion:function(centerIdx){
        var imgInfo=this.state.imgInfo;
        for(var i=0;i<imgInfo.length;i++){
            if(i<imgInfo.length/2){
                imgInfo[i].pos={
                    x:getRandom(this.const.leftMin,this.const.leftMax),
                    y:getRandom(this.const.topMin,this.const.topMax)
                }
            }else{
                imgInfo[i].pos={
                    x:getRandom(this.const.rightMin,this.const.rightMax),
                    y:getRandom(this.const.topMin,this.const.topMax)
                }
            }
            imgInfo[i].rotate=getRandom(-30,30);
            imgInfo[i].isCenter=false;
            imgInfo[i].isInverse=false;            
        }
        imgInfo[centerIdx].pos=this.const.centerPos;
        imgInfo[centerIdx].rotate=0;
        imgInfo[centerIdx].isCenter=true;
        this.setState({
            imgInfo:imgInfo
        })
    },
    center : function(centerIdx){
        return function(idx){
            this.postion(idx);
        }.bind(this, centerIdx);
    },
    inverse:function(centerIdx){
        return function(i){
            this.state.imgInfo[i].isInverse=!this.state.imgInfo[i].isInverse;
            this.setState({
                imgInfo:this.state.imgInfo
            });
        }.bind(this,centerIdx);
    },
    render(){
        var imgInfoArr=[];
        var controllerInfoArr=[];
        for(var i=0;i<imgDatas.length;i++){
            imgInfoArr.push(<ImgComponent data={imgDatas[i]} key={i} 
                            ref="imgDom" info={this.state.imgInfo[i]} 
                            center={this.center(i)} inverse={this.inverse(i)}/>);
            controllerInfoArr.push(<ControllerComponent key={i}
                            info={this.state.imgInfo[i]}
                            center={this.center(i)} inverse={this.inverse(i)}/>);
            if(!this.state.imgInfo[i]){
                this.state.imgInfo[i]={
                    pos:{
                        x:0,
                        y:0
                    },
                    isCenter:false,
                    rotate:0  ,
                    isInverse:false              
                }
            }
        }
        return (
            <section className="stage" ref="stageDom">
                <section>
                    {imgInfoArr}
                </section>
                <section className="controller">
                    {controllerInfoArr}
                </section>                
            </section>
        );
    }
});
ReactDOM.render(
    <Photowall/>,
    document.getElementById("photowall")
);
function getRandom(min,max){
    return Math.random()*(max-min)+min;
}