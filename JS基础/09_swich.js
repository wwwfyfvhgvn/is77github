var code=2;//全等于比较 类型和值相同
switch(code){
    case 1:   //执行code===1
    console.log('党员');
    break;
    case 2:
    console.log('团员');
    break;
    case 3:
    console.log('群众');
    break;
    default:
    console.log('非法的政治面貌');
}

var today=2;
switch(today){
    case 0:
    console.log('星期日');
    break;
    case 1:   //执行code===1
    console.log('星期一');
    break;
    case 2:
    console.log('星期二');
    break;
    case 3:
    console.log('星期三');
    break;
    case 4:
    console.log('星期四');
    break;
    case 5:
    console.log('星期五');
    break;
    case 6:
    console.log('星期六');
    default:
    console.log('错误的星期代码');
}

var score=52;
if(score>100||score<0){
    console.log('错误的范围');
}else{//分数/10 分数取值
    var num=parseInt(score/10);
    switch(num){
        case 10://两个case共用一组语句
        case 9:
            console.log('优秀');
            break;
            case 8:
            console.log('良好');
            break;
            case 7:
            console.log('中等');
            break;
            case 6:
            console.log('及格');
            default:
            console.log('不及格');
    }

}
