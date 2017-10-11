/**
 * Created by Administrator on 2017/7/10.
 */
/**
 *��ȡdom����
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
 * ����ָ��Ԫ�ص���һ���ֵ�Ԫ��
 * @param elem
 * @return ָ��Ԫ�ص���һ���ֵ�Ԫ��
 * **/
function next(elem){
    do{
        elem=elem&&elem.nextSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * ����ָ��Ԫ�ص�ǰһ���ֵ�Ԫ��
 * @param elem
 * @return ָ��Ԫ�ص�ǰһ���ֵ�Ԫ��
 * */
function prev(elem){
    do{
        elem=elem&&elem.previousSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * ����ָ��Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 * @return ָ��Ԫ�صĵ�һ�����ӽڵ�
 * */
function first(elem){
    elem=elem.firstChild;
    return elem&&elem.nodeType==1?elem:next(elem);
}
/**
 * ����ָ��Ԫ�ص����һ�����ӽڵ�
 * @param elem
 */
function last(elem){
    elem=elem.lastChild;
    return elem&&elem.nodeType==1?elem:prev(elem);
}
/**
 * �ڸ����ĵ�ǰԪ�ص�ǰ�����һ���µ�Ԫ��
 * @parame lem
 * **/
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
/**
 * �ڸ����ĵ�ǰԪ�صĺ������һ���µ�Ԫ��
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
 * ɾ������Ԫ��
 * @param elem
 * */
function remove(elem){
    elem.parentNode.removeChild(elem);
}
/**
 * @param elem ��ǰԪ��
 * @return {Array} ���ص�ǰԪ�صĳ���֮���ֵ�Ԫ�ؽڵ�
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
 * ��¡
 * @param obj ��¡����
 * @return newObj ��¡���Ķ���
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
 * @param target ���ϲ�Ŀ�����
 * @param obj Ҫ�ϲ��Ķ���
 * @return ���غϲ����¶���
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
 * ���ҷ���clasName��Ԫ��
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


