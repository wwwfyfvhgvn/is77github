// 练习 4年一闰 ，能被4整除，
// 并且不能被100整除不是闰年，能被400整除是闰年
var year=2020;
// console.log(year%4===0  && year%100!==0 || year%400===0);
// 运算符优先级：先执行并且，再执行或者
(year%4===0 && year%100!==0 || year%400===0) &&
console.log('闰年');
