// 计算任意两个数字的和
function add(num1,num2){
    console.log(num1+num2);//参数：形参，接受数据用的
}
// 调用
// add(2,3);//参数：实参，真正的数据
// add(7,9);
// add(1);//4+NaN=NaN
// add(1,2,3);


// 封装计算1-任意数字之间所有整数的和
function add(n){
    for(var i=1,sum=0;i<=n;i++){
    sum+=i;
}
    console.log(sum);
}
// add(1000);
// add(500)
// add(1)

// 封装计算任意年份之间的闰年个数
function year(a1,a2) {
    // 循环n1-n2之间所有的年份

    for(var i=2000,sum=0;i<=2100;i++){
        if(i%4===0 && i%100!==0 || i%400===0)
        sum++;
    } 
    console.log(sum);
}
year(2000,2020);