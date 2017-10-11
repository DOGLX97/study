/**
 * Created by Administrator on 2017/7/10.
 */
/**
 *获取dom对象
 *
 **/
function $(selector,context){
    context=context||document;
    switch (selector.charAt(0)){
        case '#':
            return [document.getElementById(selector.substring(1))];
            break;
        case '.':
            return context.getElementsByClassName(selector.substring(1));
            break;
        default :
            return context.getElementsByTagName(selector);
            break;
    }
}
/**
 * 返回指定元素的下一个兄弟元素
 * @param elem
 * @return 指定元素的下一个兄弟元素
 * **/
function next(elem){
    do{
        elem=elem&&elem.nextSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * 返回指定元素的前一个兄弟元素
 * @param elem
 * @return 指定元素的前一个兄弟元素
 * */
function prev(elem){
    do{
        elem=elem&&elem.previousSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * 查找指定元素的第一个孩子节点
 * @param elem
 * @return 指定元素的第一个孩子节点
 * */
function first(elem){
    elem=elem.firstChild;
    return elem&&elem.nodeType==1?elem:next(elem);
}
/**
 * 查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem){
    elem=elem.lastChild;
    return elem&&elem.nodeType==1?elem:prev(elem);
}
/**
 * 在给定的当前元素的前面插入一个新的元素
 * @parame lem
 * **/
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
/**
 * 在给定的当前元素的后面插入一个新的元素
 * @param elem
 * @param newNode
 * */
function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
/**
 * 删除给定元素
 * @param elem
 * */
function remove(elem){
    elem.parentNode.removeChild(elem);
}
/**
 * @param elem 当前元素
 * @return {Array} 返回当前元素的除它之外兄弟元素节点
 * */
function siblings(elem){
    var arr=[];
    var elements=elem.parentNode.children;
    for(var i=0;i<elements.length;i++){
        if(elements[i]!==elem){
            arr.push=elements[i];
        }
    }
    return arr;
}
/**
 * 克隆
 * @param obj 克隆对象
 * @return newObj 克隆到的对象
 * */
function cloneObj(obj){
    var newObj={};
    for(var p in obj){
        if(typeof obj[p]==='object'){
            newObj[p]=arguments.callee(obj[p]);
        }else{
            newObj[p]=obj[p];
        }
    }
    return newObj;
}
/**
 * @param target 被合并目标对象
 * @param obj 要合并的对象
 * @return 返回合并的新对象
 * */
function extend(target,obj){
    for(var p in obj){
        if(typeof obj[p]==='object'){
            target[p]=cloneObj(obj[p]);
        }else{
            target[p]=obj[p];
        }
    }
    return target;
}
/**
 * 查找符合clasName的元素
 * @param className
 * @param context
 * @return {Array}
 * */
function getByClass(className,context){
    context=context||document;
    var result=[];
    var arr=context.getElementsByTagName("*");
    var re=new RegExp("\\b"+className+"\\b");
    for(var i=0;i<arr.length;i++){
        if(re.text(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}


