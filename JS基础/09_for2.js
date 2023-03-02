 // 计算1-100的和
for(var i=1,sum=0;i<=100;i++){
    sum+=i;
}
// console.log(sum);


// 计算1-100的和
var i=1,sum=0;
//for(表达式1;表达式2;表达式3){
//必须有两个分号,默认第一个表达式为空 
for(;i<=100;i++){
    sum+=i;
}
// console.log(sum);


// 计算1-100的和
var i=1,sum=0;
//for(表达式1;表达式2;表达式3){
//必须有两个分号,默认第一个表达式为空 
for(;i<=100;){
    sum+=i;
    i++;
}
// console.log(sum);


// 死循环
var i=1;
for(;;){
    //判断i是否为10
    // console.log(i);
    i++;
}

// 多个循环条件最后一个起作用
// for(var i=1,j=12;j>=1,i<=10;i++,j--){
//     console.log(i,j);
// }


for( var i=1,j=20,sum=0;i<=10;i++,j-=2){}
console.log(i,j);
