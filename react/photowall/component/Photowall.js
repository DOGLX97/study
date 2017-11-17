var ImgComponent=React.createClass({
    getDefaultProps:function(){
        return {
            data:{
                fileName:"",
                title:"",
                desc:""
            }
        }
    },
    render(){
        var styleObj={
            left:0,
            top:0
        };
        return (
            <figure className="imgComponent" style={styleObj}>
                <img src={"img/"+this.props.data.fileName}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <h3></h3>                
                </figcaption>
            </figure>
        );
    }
});
var ControllerComponent=React.createClass({
    render(){
        return (
            <span></span>
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
                isCenter:false
            }]
        }
    },
    const:{
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
            leftMin:-imgDomWhalf,
            leftMax:stageDomWhalf-3*imgDomWhalf,
            rightMin:stageDomWhalf+imgDomWhalf,
            rightMax:stageDomW-imgDomWhalf,
            topMin:-imgDomHhalf,
            topMax:stageDomH-imgDomHhalf
        }
        // console.log(getRandom(leftMin,leftMax));
    },
    postion:function(centerIdx){

    },
    render(){
        var imgInfoArr=[];
        var controllerInfoArr=[];
        for(var i=0;i<imgDatas.length;i++){
            imgInfoArr.push(<ImgComponent data={imgDatas[i]} key={i} 
                            ref="imgDom" pos={this.state.pos}/>);
            controllerInfoArr.push(<ControllerComponent key={i}/>);
            if(!this.state.imgInfo[i]){
                this.state.imgInfo[i]={
                    pos:{
                        x:0,
                        y:0
                    },
                    isCenter:false
                }
            }
        }
        return (
            <section className="stage" ref="stageDom">
                <section>
                    {imgInfoArr}
                </section>
                <section>
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