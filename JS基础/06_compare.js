// 比较运算符
// console.log(3>4);
// console.log(7=='7');//true 比较值是否相等
// console.log(7==='7');//false 比较值和类型是否相等


// 字符串转成了数字
// console.log(3>'10');//false
//两个字符串比较，比较的是首个字符的Unicode码
// 3->51  1->49  a->97 asicii码
// console.log('3'>'10');
// 比较第二个字
// console.log('无'.charCodeAt());
// console.log('翠'.charCodeAt());
// console.log('张无忌'>'张翠山');


// number('10a')->NaN
console.log(3>'10a');//3>nan
console.log(3<'10a');//3<nan
console.log(3=='10a');//3==nan
console.log(3!=='10a');//true
