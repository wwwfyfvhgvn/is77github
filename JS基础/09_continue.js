// 打印1 2 3 4 6 7 8 9 10
for(var i=1;i<=10;i++){
    // 当i为5的时候,跳过后面的语句
    if (i===5){
        continue;//跳过5,执行增量
        // break;//到5结束循环
    }
    // console.log(i);
}

// 1-100之间所有偶数的和
for( var i=1,sum=0;i<=100;i++){
// 遇到奇数跳过
    if(i%2===1){
    continue;
    // 求和
}
sum+=i;
}
// console.log(sum);



// 1-100之间所有的整数,排除能被3整除和能被4整除的数字
for(var i=1;i<=100;i++){
    if(i%4===0 || i%3===0){
        continue;
    }
    console.log(i);
}
