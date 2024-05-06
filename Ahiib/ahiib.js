// 定义食物数组，包含食物名称、食物信息和分类
var foods = [
    
    //食堂一楼
    { name: "自选菜", info: "", category: "First" },
    { name: "炸串", info: "", category: "First" },
    { name: "烧烤", info: "", category: "First" },
    
    //食堂二楼
    { name: "面馆", info: "", category: "Second" },
    { name: "凉皮凉面鸡锁骨", info: "", category: "Second" },
    { name: "套餐饭", info: "", category: "Second" },
    { name: "鲁瓦罐汤拌饭", info: "", category: "Second" },

    //新食堂一楼
    { name: "张亮麻辣烫", info: "", category: "New_First" },
    { name: "安庆包子", info: "", category: "New_First" },
    { name: "雪莲餐厅", info: "", category: "New_First" },
    { name: "羊杂面馆", info: "", category: "New_First" },
    
    //新食堂二楼
    { name: "自选", info: "", category: "New_Second" },
    { name: "麻辣烫", info: "", category: "New_Second" },
    { name: "烤鸭饭", info: "", category: "New_Second" },
    { name: "包子", info: "", category: "New_Second" },

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
