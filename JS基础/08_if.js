// 满30减15
var total=27;
// 判断是否满30
if(total>=30){
// 在原来基础上减15
total-=15;
}
// console.log(total);

var age=19;
if(age>=18)//只有一行语句可以省略大括号{}
// console.log('成年人');
// console.log('可以去网吧');

    
// 逻辑短路写法
// age >=18 && console.log('成年人');


// false:0 NaN  ''(未定义)  undefined  null
if(undefined){
    console.log('hello');
}


//如果签名内容为空，设置默认签名
// 声明变量保存签名内容，如果前面为空，
// 设置默认签名“这家伙很懒，什么也没留下”，打印签名内容；
var str='';
// str==='' 判断签名内容是否为空
// 感叹号''->!false->true 取反向 
if(!str){
   // 如果判断为空，打印这家伙...
   str='这家伙很懒,什么也没留下';
}
console.log(str);
