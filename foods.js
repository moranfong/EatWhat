// 定义食物数组，包含食物名称、食物信息和分类
var foods = [
    //夜宵
    { name: "炸鸡", info: "炸鸡的主要营养成分：碳水化合物、蛋白质、脂肪、胆固醇和钠、钾、磷等矿物质。鸡肉的蛋白质含量丰富，但缺乏膳食纤维与其他水溶性维生素。油炸食品通常热量较高，炸鸡为了保持鸡肉软嫩裹了一层面粉炸制，热量更高。", category: "supper" },
    { name: "炸串", info: "食物2的信息", category: "supper" },
    { name: "烤串", info: "食物3的信息", category: "supper" },
    //正餐
    { name: "湘菜", info: "食物4的信息", category: "meal" },
    { name: "川菜", info: "食物5的信息", category: "meal" },
    { name: "粤菜", info: "食物6的信息", category: "meal" },
    { name: "鲁菜", info: "食物7的信息", category: "meal" },
    { name: "闽菜", info: "食物8的信息", category: "meal" },
    { name: "浙菜", info: "食物9的信息", category: "meal" },
    { name: "苏菜", info: "食物10的信息", category: "meal" },
    { name: "徽菜", info: "食物11的信息", category: "meal" },
    { name: "老乡鸡", info: "食物12的信息", category: "meal" },
    { name: "麻辣烫", info: "食物13的信息", category: "meal" },
    { name: "水煮", info: "食物14的信息", category: "meal" },
    //早餐
    { name: "食物6", info: "食物6的信息", category: "breakfast" },
    //饮品
    { name: "奶茶", info: "食物7的信息", category: "drink" },
    { name: "霸王茶姬", info: "食物7的信息", category: "drink" },
    { name: "卡旺卡", info: "食物7的信息", category: "drink" },
    { name: "红牛", info: "食物7的信息", category: "drink" },
    { name: "雪碧", info: "食物7的信息", category: "drink" },
    { name: "七喜", info: "食物7的信息", category: "drink" },
    { name: "芬达", info: "食物7的信息", category: "drink" },
    { name: "百事可乐", info: "食物7的信息", category: "drink" },
    { name: "可口可乐", info: "食物7的信息", category: "drink" },
    //小吃
    { name: "烧饼", info: "食物8的信息", category: "snack" },
    { name: "炸饼", info: "食物9的信息", category: "snack" },
    { name: "炸薯条", info: "食物10的信息", category: "snack" },
    { name: "炸鸡腿", info: "食物11的信息", category: "snack" },
    { name: "炸鸡翅", info: "食物12的信息", category: "snack" }
    // 添加更多食物
];

// 显示随机食物信息的函数
function showFood() {
    var category = document.getElementById("category").value;
    var filteredFoods = foods.filter(function (food) {
        return category === "all" || food.category === category;
    });
    var randomIndex = Math.floor(Math.random() * filteredFoods.length);
    var food = filteredFoods[randomIndex];
    document.getElementById("food-info").innerHTML = "<b>" + food.name + "</b><br>" + food.info;
}