
// 练习 弹出两次提示框，分别输入商品的数量，获取总价
// 如果总价满1000打九折，假如卡内余额800，如果余额大于
// 商品余额，警示框弹出'pay success',否则警示框弹出'pay error'
// 弹出两次提示框
// 提示框里为字符串类型
var price=prompt('input price');
var number=prompt('input number');
// 字符串相乘隐式转换为数值型，无需强制转换
// price=Number(price);
// number=Number(number);
// 获取总价
var total=price*number;
// 已经隐式转换为数值型
// console.log(total,typeof total);
if (total>=1000) {
    // 打九折
    total*=0.9;
} 
// console.log(total);
// 卡内余额
var card=800;
//判断是否足以支付
if (card>=total){
    alert('pay success');
} else {
    alert('pay error');  
}



var price=prompt('input price');
var number=prompt('input number');
var total=price*number;
if (total>=1000) {
    total*=0.9;
}
var card=800; 
if (card>=total){
    alert('pay success');
} else {
    alert('pay error');  
}