// 需要axios作为前置，mdui可选（模态框）

// 初始化全局变量
var count = 0;
var btnBox1;
var food;
var drink;
var num;
var str;
var interval;
var stopBtn;
var type;
var infoBox;
var inst;
var tempAry;

// 窗口初始化
window.onload = () => {
    // 绑定DOM
    btnBox1 = document.getElementById('btn-1');
    btnBox2 = document.getElementById('btn-2');
    retryBtn = document.getElementById('retry');
    stopBtn = document.getElementById('stop');
    str = document.getElementById('str');
    infoBox = document.getElementById('info');
    inst = new mdui.Dialog('#dialog');


    // 获取列表
    axios
        .get('db.json')
        .then((res)=>{
            food = res.data.food;
            drink = res.data.drink;
        });
    // 没写如果获取不到咋办


};

// 随机
const start = (what) => {
    switch (what) {
        case 'food':
            tempAry = food;
            infoBox.innerHTML = "我看你啥都别吃了！";
            break;
        case 'drink':
            tempAry = drink;
            infoBox.innerHTML = "我看你啥都别喝了！";
            break;
    };
    if (count>=3) {
        inst.open();
        return;
    };
    count++;
    interval = setInterval(()=>{
        num = randomNum(0, tempAry.length-1);
        str.innerHTML = tempAry[num]
    }, 50);
    type = what;
    btnBox2.style.display = "flex";
    btnBox1.style.display = "none";
    retryBtn.style.display = "none";
    stopBtn.style.display = "flex";
};

// 停止
const stop = () => {
    clearInterval(interval);
    stopBtn.style.display = "none";
    retryBtn.style.display = "flex";
};

// 再来（你怎么还抽？
const retry = () => {
    start(type);
};

// 随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        default: 
            return 0; 
    };
};

// PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker 注册成功:', registration);
    }, function(error) {
      console.error('Service Worker 注册失败:', error);
    });
  }