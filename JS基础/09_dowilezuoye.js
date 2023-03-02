// 声明变量保存123456,
// 循环弹出提示框输入密码,如果输入正确结束循环
// 声明变量不保存密码
var pwd='123456';
do {
    // 保存输入的密码
    var str=prompt('input you pwd')
    // 如果输入正确,结束循环
    if (str===pwd){
        alert('密码正确')
        break;
    }
} while (true);


var pwd='123456';
do {
    // 输入密码
    var str=prompt('input you pwd');
} while (str!==pwd);//如果输入的和之前保存的不同,继续执行循环