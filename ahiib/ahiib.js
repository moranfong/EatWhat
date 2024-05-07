// 定义食物数组，包含食物名称、食物信息和分类
var foods = [
    
    //食堂一楼
    { name: "自选菜", info: "", category: "First" },
    { name: "炸串", info: "", category: "First" },
    { name: "烧烤", info: "", category: "First" },
    
    //食堂二楼
    { name: "瓦罐汤拌饭", info: "", category: "Second" },
    { name: "麻辣烫 麻辣拌", info: "", category: "Second" },
    { name: "自选东北菜", info: "", category: "Second" },
    { name: "一品香套餐饭", info: "", category: "Second" },
    { name: "重庆小面", info: "", category: "Second" },
    { name: "烤盘饭", info: "", category: "Second" },
    { name: "螺仙堡螺丝粉", info: "", category: "Second" },
    { name: "烤肉饭", info: "", category: "Second" },
    { name: "特色馄饨", info: "", category: "Second" },
    { name: "石锅咕咕鸡", info: "", category: "Second" },
    { name: "中式精选快餐", info: "", category: "Second" },

    //新食堂一楼
    { name: "张亮麻辣烫", info: "有天水麻辣烫、麻辣香锅、经典骨汤等味道等味道。但需要注意汤底的油脂和辛辣成分可能不适合所有人。", category: "New_First" },
    { name: "安庆包子", info: "早餐吃包子的第一选择。有牛肉粉丝包、青椒肉丝包等。可搭配店内的豆浆或油条。", category: "New_First" },
    { name: "雪莲餐厅", info: "味道与自选菜不同。", category: "New_First" },
    { name: "朱家小馆羊杂面馆", info: "", category: "New_First" },
    { name: "柳壮螺螺蛳粉", info: "", category: "New_First" },
    { name: "兰州拉面", info: "", category: "New_First" },
    { name: "台湾饭团", info: "", category: "New_First" },
    { name: "水果捞", info: "", category: "New_First" },
    { name: "特色果味粥", info: "", category: "New_First" },
    { name: "土家掉渣饼", info: "", category: "New_First" },
    { name: "孜然羊肉卷饼", info: "", category: "New_First" },
    { name: "好又多超市", info: "", category: "New_First" },
    { name: "蜜雪冰城", info: "", category: "New_First" },
    { name: "茶百道", info: "", category: "New_First" },
    { name: "鸡柳大人", info: "", category: "New_First" },
    { name: "新疆炒米粉", info: "", category: "New_First" },
    { name: "酥肉小锅", info: "", category: "New_First" },
    { name: "校堡王", info: "", category: "New_First" },
    { name: "山东煎饼", info: "", category: "New_First" },
    { name: "卤味轩鸭脖", info: "", category: "New_First" },
    { name: "里脊肉夹馍", info: "", category: "New_First" },
    { name: "鲜果零食汇", info: "", category: "New_First" },
    { name: "蛋糕店", info: "", category: "New_First" },

    //新食堂二楼
    { name: "自选", info: "", category: "New_Second" },
    { name: "麻辣烫", info: "", category: "New_Second" },
    { name: "烤鸭饭", info: "", category: "New_Second" },
    { name: "包子", info: "", category: "New_Second" },

    //校门口
    { name:"暂无数据", info: "暂无数据", category: "Outside" },
    { name:"暂无数据", info: "暂无数据", category: "Outside" },
    { name:"暂无数据", info: "暂无数据", category: "Outside" },
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
