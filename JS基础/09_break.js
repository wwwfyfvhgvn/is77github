// 不停的加一,没有结束
var i=1;
while (true) {
    // console.log(i);
    // 结束循环
    // 当i为10的时候结束循环
    if(i===10){
        break;
    }
    i++;
}

// 练习  声明变量保存任意一个数字,无限循环弹出提示框,并输入数字
// 如果输入的数字大于保存的数字,弹出竟是看提示"big",如果输入的数字
// 小于保存的数字,弹出提示框提示"small",否则弹出警示框"right",结束循环
var i=100;
while(true){
    // 弹出提示框 输入的值(字符串)
    var num=prompt("input a number")
    // 如果输入的值大于之前的数字
    if (num>i) {
        alert('big')
    } else if(num<i){
        alert('small')
    }else{
        // 判断是否为数字
        var num2=Number(num);
        // console.log(num2);
        // is NaN判断是否为nan
        if (isNaN(num2)){
        // 如果不是数字,提示请输入数字
            alert('请输入数字')
        }else{
        alert('right')
        break;
        }
    }
    i++;
}
//输入a为什么是right
// 'a'>100->nan>100 false
//a为nan,和任何值比较都为false,第一个条件为false继续向后执行,只能出现最后的结果
// console.log(Number('0'));//空字符转数值为0,最后为small
