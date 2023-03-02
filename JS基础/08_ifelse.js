// 满18岁成年人，否则未成年人
var age=13;
if (age>=18) {
    console.log('成年人');
 // 写很多语句
} else {
    console.log('未成年人');
}

三目运算符写法
只能写一句
age>=18 ? console.log('成年人') : 
console.log('未成年人');

// 练习  声明变量保存用户名和密码，如果用户名是root
//并且密码是123456，打印登录成功，否则打印登录失败
var user='roo',pwd='123456';
if (user==='root'&&pwd==='123456'){
    console.log('登录成功');
} else {
    console.log('登录失败');
}

// 练习  声明变量保存性别（0/1），如果0打印女，否则打印男
var sex=1;
if (!sex) {
    console.log('女');
} else {
    console.log('男');
}
   