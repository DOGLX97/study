/**
 * Created by Administrator on 2017/7/13.
 */
/**
 * ���ҷ���className��Ԫ��
 * @param className
 * @param context
 * @returns {Array}
 */
function getByClass(className,context){
    context=context||document;
    var result=[];
    var arr=context.getElementsByTagName("*");
    var re=new RegExp("\\b"+className+"\\b");
    for(var i=0;i<arr.length;i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
/**
 * $����
 * @param selector
 * @param context
 * @returns {*}
 */
function $(selector,context){
    context=context||document;
    switch (selector.charAt(0)){
        case "#":
            return [document.getElementById(selector.substring(1))];
            break;
        case ".":
            return getByClass(selector.substring(1),context);
            break;
        default:
            return context.getElementsByTagName(selector);
    }
}
/**
 * ����ָ��Ԫ����һ��Ԫ���ֵ�
 * @param elem
 * @returns {*}
 */
function next(elem){
    do{
        elem=elem&&elem.nextSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * ����ָ��Ԫ����һ��Ԫ���ֵ�
 * @param elem
 * @returns {*}
 */
function prev(elem){
    do{
        elem=elem&&elem.previousSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;
}
/**
 * ����ָ��Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 * @returns {*}
 */
function first(elem){
    elem=elem.firstChild;
    return elem&&elem.nodeType==1?elem:next(elem);
}
/**
 * ����ָ��Ԫ�ص����һ�����ӽڵ�
 * @param elem
 * @returns {*}
 */
function last(elem){
    elem=elem.lastChild;
    return elem&&elem.nodeType==1?elem:prev(elem);
}
/**
 * ��ָ��Ԫ��ǰ������µ�Ԫ�ؽڵ�
 * @param elem
 * @param newNode
 */
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
/**
 *  * ��ָ��Ԫ�غ�������µ�Ԫ�ؽڵ�
 * @param elem
 * @param newNode
 */
function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
/**
 * ɾ��ָ��Ԫ�ؽڵ�
 * @param elem
 */
function remove(elem){
    elem.parentNode.removeChild(elem);
}
/**
 * �ҵ�ָ��Ԫ�ؽڵ���ֵܽڵ�
 * @param elem
 * @returns {Array}
 */
function sibling(elem){
    var arr=[];
    var elements=elem.parentNode.children;
    for(var i=0;i<elements.length;i++){
        if(elements[i]!=elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}
/**
 * ��¡����
 * @param obj
 * @returns {{}}
 */
function cloneObj(obj){
    var newObj={};
    for(var p in obj){
        if(typeof obj[p]==="object"){
            newObj[p]=arguments.callee(obj[p]);
        }else{
            newObj[p]=obj[p];
        }
    }
    return newObj;
}
/**
 * obj����ϲ���target���󣬷���target����
 * @param target
 * @param obj
 * @returns {*}
 */
function extend(target,obj){
    for(var p in obj){
        if(obj[p]==="object"){
            target[p]=cloneObj(obj[p]);
        }else{
            target[p]=obj[p];
        }
    }
    return target;
}
/**
 * ȥ���ַ�����β�ո�
 * @param str
 * @returns {XML|string|void}
 */
function trim(str){
    return str.replace(/^\s|\s$/g,"");
}
/**
 * ��ȡ��ǰԪ����ʽ
 * @param elem
 * @param attr
 * @returns {*}
 */
function getStyle(elem,attr){
    if(elem.currentStyle){
       return  elem.currentStyle[attr];
    }else if(window.getComputedStyle){
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }
}
/**
 * ���¼�
 * @param elem
 * @param type
 * @param fn
 */
function addEvent(elem,type,fn){
    if(elem.addEventListener){
        elem.addEventListener(type,fn,false);
    }else if(elem.attachEvent){
        elem[type+fn]=function () {
            fn.call(elem);
        };
        elem.attachEvent("on"+type,elem[type+fn]);
    }else{
        elem["on"+type]=fn;
    }
}
/**
 * �Ƴ��¼�
 * @param elem
 * @param type
 * @param fn
 */
function removeEvent(elem,type,fn){
    if(elem.removeEventListener){
        elem.removeEventListener(type,fn,false);
    }else if(elem.detachEvent){
        elem.detachEvent("on"+type,elem[type+fn]);
    }else{
        elem["on"+type]=null;
    }
}

