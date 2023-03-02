

// 创建一个普通函数

function say() {
    console.log('hello');
    console.log('123');
    console.log('1233');
}
// 调用函数
// say()
// say()
// say()

//练习 创建函数，封装两个数字相加的和，调用多次
function num() {
    console.log(1+2);
}
num()

// 封装计算1-100之间所有整数的和
function add() {
    for(var i=1,sum=0;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
}
add()
add()
add()