// 强制转换为数值型
var num1=Number('2');
var num2=Number(true);
var num3=Number('2a');//NaN ->number
var num4=Number(undefined)//NaN
var num5=Number(null);//0
// console.log(num5,typeof num5);

// 强制转换为整型
var n1=parseInt('1');
var n2=parseInt('1.2');
var n3=parseInt('2a');
var n4=parseInt('a2');
// 为定义型、空、布尔型都返回为空
var n5=parseInt(null)//NaN
// console.log(n5,typeof n5);

// 强制转换为浮点型
var n1=parseFloat('2.5a');
var n2=parseFloat('a2.5')
// console.log(n2);

//数值、布尔型转为字符串
var n10=10;
var str=n10.toString();
console.log(str,typeof str);