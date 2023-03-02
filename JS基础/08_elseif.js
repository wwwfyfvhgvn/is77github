// 判断一个人的政治面貌
// 1-党员 2-团员 3-群众  其他-非法政治面貌
var code=4;
if (code===1){
    console.log('党员');
} else if(code===2){
    console.log('团员');
}else if(code===3){
    console.log('群众');
}else{
    console.log('非法的状态码');
}
// 练习：声明变量保存订单的状态码，根据订单的状态码打印对应的汉字
var status=3;
if (status===1){
    console.log('待付款');
} else if(status===2){
    console.log('待发货');
}else if(status===3){
    console.log('运输中');
}else if(status===4){
    console.log('已签收');
}else{
    console.log('其他状态，无法追踪');
}

// 练习
var score=99;
if (score>=90) {
    console.log('优秀');
} else if(score>=80) {//隐含分数要小于90
    console.log('良好');
}else if(score>=70){
    console.log('中等');
}else if(score>=60){
    console.log('及格');
}else{
    console.log('不及格');
}

// 练习 银行根据客户的存款划分等级
// 10万以下 普通客户
// 10~100以下  优质客户
// 100~500以下 黄金客户
// 500以上  钻石客户
var yue=11;
if (yue<=10){
    console.log('普通');
}else if(yue<=100){
    console.log('优质');
}else if(yue<=500){
    console.log('黄金');
}else{
    console.log('钻石');
}
