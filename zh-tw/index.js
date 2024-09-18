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

    // 獲取列表
    axios
        .get('/zh-tw/db.json')
        .then((res)=>{
            food = res.data.food;
            drink = res.data.drink;
        });
};

// 隨機
const start = (what) => {
    switch (what) {
        case 'food':
            tempAry = food;
            infoBox.innerHTML = "我看你啥都別吃了！";
            break;
        case 'drink':
            tempAry = drink;
            infoBox.innerHTML = "我看你啥都別喝了！";
            break;
    };
    if (count >= 5) {
        inst.open();
        return;
    };
    count++;
    interval = setInterval(()=>{
        num = randomNum(0, tempAry.length - 1);
        str.innerHTML = tempAry[num];
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

// 再來（你怎麼還抽？
const retry = () => {
    start(type);
};

// 隨機數
function randomNum(minNum, maxNum) { 
    switch (arguments.length) { 
        case 1: 
            return parseInt(Math.random() * minNum + 1, 10); 
        case 2: 
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10); 
        default: 
            return 0; 
    };
};
