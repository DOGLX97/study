/**
 * 
 * 查找符合className的元素
 * @param {any} className 
 * @param {any} context 
 * @returns 数组
 */
function getByClass(className,context){
    context=context||document;
    var result=[];
    var arr = context.getElementsByTagName('*');
    var re=new RegExp("\\b"+className+"\\b");
    for(let i=0,len=arr.length;i<len;i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * 根据选择器查找元素
 * 
 * @param {any} selector 选择器 
 * @param {any} context  上下文
 * @returns  符合条件的元素数组
 */
function $(selector,context){
    content=context||document;
    switch(selector.charAt(0)){
        case '#':
            return [document.getElementById(selector.substring(1))];
            break;
        case '.':
            return getByClass(selector,context);
            break;
        default:
            return context.getElementsByTagName(selector);
            break;         
    }
}
