// 数字和字符串
var string1=2+'3'  //2->'2
// 字符串之间的拼接
// '2'+'3'->'23'
// console.log(string1,typeof string1);


// 数字+布尔型
var str2=3+false;
// true->1  false->0
// console.log(str2,typeof str2);

// 布尔型+字符串型
var str3='5'+false;
// console.log(str3,typeof str3);

// 练习
// 整型+布尔型+字符串
var num1=3,num2=true,num3='tx';
// console.log(num1+num2+num3);
// console.log(num2+num3+num1);
// console.log(num3+num1+num2);

// 练习
var name='tom';
var sex='男';
// console.log('我的姓名叫'+name,'性别是'+sex);

//其他运算符转换
console.log(5-'3');
console.log('5'-'3');
console.log('3'-true);
console.log('2'*'3');
console.log(10/true);
console.log('2a'*5);//NaN->not a number
// '2a'->NaN 而NaN和任何值执行加减乘除结果都是NaN