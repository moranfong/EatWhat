// 定义食物数组，包含食物名称、食物信息和分类
var foods = [
    
    //夜宵
    { name: "炸鸡", info: "炸鸡富含蛋白质，但因为油炸过程，它也含有较高的脂肪和热量。如果食用过多，可能会导致不健康的体重增加。", category: "supper" },
    { name: "炸串", info: "炸串的营养价值取决于所选食材，通常含有蛋白质、维生素和矿物质，但油炸方式会增加脂肪含量。", category: "supper" },
    { name: "烧烤", info: "营养价值：烧烤通常富含蛋白质，同时含有必需的氨基酸。烤制过程中可能会产生一些致癌物质，因此建议适量食用。", category: "supper" },
    
    //正餐
    { name: "湘菜", info: "湘菜中常用辣椒和醋，这些成分有助于提高食欲和促进消化。但因为辣味，不适宜所有人，尤其是消化系统敏感的人。", category: "meal" },
    { name: "川菜", info: "川菜使用了大量的辣椒和花椒，这些成分有助于促进血液循环和食欲。然而，川菜的高油和高盐特性可能对健康造成影响。", category: "meal" },
    { name: "粤菜", info: "粤菜注重食材的新鲜和烹饪的技巧，通常较为健康。它包含了丰富的海鲜和蔬菜，有助于提供必需的蛋白质、维生素和矿物质。", category: "meal" },
    { name: "鲁菜", info: "鲁菜的烹饪方法多样，包括炖、烧、炒、炸等，食材选择广泛，因此营养价值也因具体菜品而异。鲁菜中常见的豆制品和海鲜都是优质蛋白质的来源。", category: "meal" },
    { name: "闽菜", info: "闽菜因为烹饪技法多样，能够较好地保持食材原味和营养，同时调料的使用增加了风味，但也需注意某些菜肴可能因调料使用较多而含钠较高。", category: "meal" },
    { name: "浙菜", info: "浙菜强调原料的新鲜和季节性，烹饪方法多样，能够最大限度地保留食材的营养，是一种健康的饮食选择。", category: "meal" },
    { name: "苏菜", info: "苏菜注重营养均衡，烹饪方法有助于保持食材的营养成分，是一种健康的饮食习惯。", category: "meal" },
    { name: "徽菜", info: "徽菜因为烹饪方法和调料使用，风味独特，但也可能导致部分菜肴油脂含量较高，需要适量食用。", category: "meal" },
    { name: "老乡鸡", info: "老乡鸡,中式快餐全国榜首品牌。全国1000多家快餐店。老乡鸡是以180天土鸡与农夫山泉炖制的肥西老母鸡汤为特色，主要以中式烹饪方式出品，服务于中国家庭日常用餐需求的中式快餐品牌。", category: "meal" },
    { name: "麻辣烫", info: "麻辣烫的食材多样，可以提供丰富的营养，但需要注意汤底的油脂和辛辣成分可能不适合所有人。", category: "meal" },
    { name: "水煮", info: "尽管南昌水煮美味，但由于其辣味特点，不擅长吃辣的食客应适当调整辣度，以免引起不适。", category: "meal" },
    { name: "拉面", info: "拉面除了提供碳水化合物和蛋白质外，其汤底通常由骨头或肉熬制，富含胶原蛋白和氨基酸。", category: "meal" },
    { name: "刀削面", info: "刀削面主要由小麦粉制成，富含碳水化合物和蛋白质，搭配不同的卤汁或汤料，可以提供更全面的营养。", category: "meal" },


    //早餐
    { name: "拌粉", info: "拌粉的营养价值取决于搭配的食材，米粉本身富含碳水化合物，可以提供能量，但建议搭配蔬菜和蛋白质来源以增加营养均衡。", category: "breakfast" },
    { name: "烧卖", info: "烧卖的主要原料是面粉和肉类（如猪肉或羊肉），富含蛋白质和碳水化合物，同时也含有一定量的脂肪和微量元素。由于通常搭配蔬菜，因此也含有维生素和纤维素。", category: "breakfast" },
    { name: "包子", info: "包子的营养价值取决于其馅料，通常含有蛋白质、碳水化合物、膳食纤维，以及多种维生素和矿物质。包子是一种营养均衡的食品，适合作为早餐或主食。", category: "breakfast" },
    { name: "杂粮煎饼", info: "杂粮煎饼含有丰富的膳食纤维、维生素和矿物质，是一种健康的粗粮食品。杂粮面粉相比普通面粉含有更多的营养成分，有助于促进肠道健康。", category: "breakfast" },
    { name: "泡粉", info: "泡粉主要提供碳水化合物，肉汤增加了蛋白质和脂肪的摄入，同时热汤也有助于保持体温和增加饱腹感。"},
    { name: "馄饨", info: "馄饨富含蛋白质和碳水化合物，肉馅提供了必需的氨基酸和脂肪，而面皮则是能量的来源。", category: "breakfast" },
    { name: "面条", info: "面条主要提供碳水化合物，是能量的重要来源。搭配不同的佐料和配菜，可以增加蛋白质、维生素和矿物质的摄入。", category: "breakfast" },
    { name: "刀削面", info: "刀削面主要由小麦粉制成，富含碳水化合物和蛋白质，搭配不同的卤汁或汤料，可以提供更全面的营养。", category: "breakfast" },
    { name: "拉面", info: "拉面除了提供碳水化合物和蛋白质外，其汤底通常由骨头或肉熬制，富含胶原蛋白和氨基酸。", category: "breakfast" },

    //饮品
    { name: "IF椰子水", info: "IF椰子水强调其产品是100%纯正椰子水，不添加防腐剂，同时富含电解质，适合运动和恢复体力时饮用。", category: "drink" },
    { name: "红牛", info: "含有高咖啡因和牛磺酸的能量饮料，能够提供快速的能量补充，常被用来提神醒脑，但不建议过量饮用。", category: "drink" },
    { name: "雪碧", info: "柠檬味的碳酸饮料，口感清爽，带有淡淡的柠檬香味，是解渴和搭配快餐的常见选择。", category: "drink" },
    { name: "七喜", info: "柠檬-青柠味的碳酸饮料，透明液体，口味清新，常作为调酒的基底或夏日消暑饮品。", category: "drink" },
    { name: "芬达", info: "水果味碳酸饮料，色彩缤纷，口味多样，包括橙子、草莓等多种水果口味。", category: "drink" },
    { name: "百事可乐", info: "碳酸饮料，与可口可乐相比，百事可乐通常被认为口味更甜、更清淡。", category: "drink" },
    { name: "可口可乐", info: "碳酸饮料，深棕色的液体，含有咖啡因，是许多人喜爱的经典饮料。", category: "drink" },
    { name: "霸王茶姬", info: "霸王茶姬是一款以茶为基底，加入果汁和甜味剂的饮品。结合了茶的清香和水果的甜味，通常口感较为甘甜。", category: "drink" },
    { name: "古茗", info: "古茗是一家中国茶饮品牌，以高性价比和新鲜食材著称，产品线包括奶茶、果茶等。", category: "drink" },
    { name: "COCO奶茶", info: "COCO奶茶是一家国际连锁的奶茶品牌，起源于台湾，以奶茶和果茶闻名。", category: "drink" },
    { name: "茶百道", info: "茶百道是一家专注于传统中式茶饮的品牌，提供各类茶饮和奶茶。", category: "drink" },
    { name: "甜拉拉", info: "甜拉拉是一家较新的饮品品牌，提供奶茶、果汁等饮品。", category: "drink" },
    { name: "沪上阿姨", info: "沪上阿姨的饮品和小吃融合了上海的地方特色，提供独特的口味体验。", category: "drink" },
    { name: "喜茶", info: "喜茶是一家高端茶饮品牌，以芝士茶和水果茶闻名。", category: "drink" },
    { name: "瑞幸咖啡", info: "瑞幸咖啡是一家快速增长的中国咖啡连锁品牌，提供各类咖啡、茶饮和小食。", category: "drink" },
    { name: "库迪咖啡", info: "库迪咖啡是一家新兴的咖啡连锁品牌，提供咖啡和西式简餐。", category: "drink" },

    //小吃
    { name: "烧饼", info: "烧饼主要提供碳水化合物，如果添加了肉馅，也能提供蛋白质和脂肪。", category: "snack" },
    { name: "炸饼", info: "炸饼含有较多的碳水化合物和脂肪，热量较高，应适量食用。", category: "snack" },
    { name: "炸薯条", info: "炸薯条含有较高的碳水化合物和脂肪，尤其是油炸后吸附的油脂，使得热量大幅增加。", category: "snack" },
    { name: "炸鸡", info: "炸鸡富含蛋白质，但由于油炸，含有较多的脂肪和热量。", category: "snack" },
    { name: "锅贴", info: "锅贴含有蛋白质和碳水化合物，脂肪含量取决于肉馅的比例和煎制过程中使用的油脂量。", category: "snack" },
    
    //水果
    { name: "橙子", info: "橙子是一种常见的水果，富含维生素C和纤维素，有助于增强免疫力和促进消化。", category: "fruit" },
    { name: "苹果", info: "苹果是一种常见的水果，富含维生素C和膳食纤维，有助于降低胆固醇和控制血糖。", category: "fruit" },
    { name: "香蕉", info: "香蕉是一种富含钾和膳食纤维的水果，有助于维持心脏健康和消化功能。", category: "fruit" },
    { name: "梨子", info: "梨子是一种含水量高、营养丰富的水果，富含维生素和矿物质，有助于清热解毒和保护胃肠。", category: "fruit" },
    { name: "葡萄", info: "葡萄是一种富含天然糖分和维生素的水果，有助于提供能量和营养。", category: "fruit" },
    { name: "草莓", info: "草莓是一种富含维生素C和纤维素的水果，有助于美白皮肤和促进消化。", category: "fruit" },
    { name: "樱桃", info: "樱桃是一种富含维生素和矿物质的水果，有助于提供能量和营养。", category: "fruit" },
    { name: "桃子", info: "桃子是一种含水量高、营养丰富的水果，富含维生素和矿物质，有助于清热解毒和保护胃肠。", category: "fruit" },
    { name: "西瓜", info: "西瓜是一种富含水分和维生素的水果，有助于解渴和提供营养。", category: "fruit" },
    { name: "哈密瓜", info: "哈密瓜是一种含水量高、营养丰富的水果，富含维生素和矿物质，有助于清热解毒和保护胃肠。", category: "fruit" },
    { name: "柚子", info: "柚子是一种富含维生素C和纤维素的水果，有助于提高免疫力和促进消化。", category: "fruit" },
    { name: "菠萝", info: "菠萝是一种含有丰富维生素和酵素的水果，有助于消化和营养吸收。", category: "fruit" },
    { name: "木瓜", info: "木瓜是一种含有丰富维生素和酵素的水果，有助于消化和营养吸收。", category: "fruit" },
    { name: "李子", info: "李子是一种含水量高、营养丰富的水果，富含维生素和矿物质，有助于清热解毒和保护胃肠。", category: "fruit" },
    { name: "椰子", info: "椰子是一种含水量高、营养丰富的水果，富含维生素和矿物质，有助于清热解毒和保护胃肠。", category: "fruit" },

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

// 切换语言版本的函数
function changeLanguage(language) {
    var lagn = document.getElementById("language"); // 获取按钮元素
    // 这里假设您有不同语言版本的网页，比如中文版本和英文版本
    if (language === "cn") {
        window.location.href = "/index.html"; // 将页面重定向到中文版本的网页
    } else if (language === "tw") {
        window.location.href = "/tw.html"; // 将页面重定向到繁体中文版本的网页
    }
}
