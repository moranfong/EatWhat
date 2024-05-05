// 定義食物數組，包含食物名稱、食物信息和分類
var foods = [
    
    //宵夜
    { name: "炸雞", info: "炸雞富含蛋白質，但因為油炸過程，它也含有較高的脂肪和熱量。如果食用過多，可能會導致不健康的體重增加。", category: "supper" },
    { name: "炸串", info: "炸串的營養價值取決於所選食材，通常含有蛋白質、維生素和礦物質，但油炸方式會增加脂肪含量。", category: "supper" },
    { name: "燒烤", info: "營養價值：燒烤通常富含蛋白質，同時含有必需的氨基酸。烤制過程中可能會產生一些致癌物質，因此建議適量食用。", category: "supper" },
    
    //正餐
    { name: "湘菜", info: "湘菜中常用辣椒和醋，這些成分有助於提高食欲和促進消化。但因為辣味，不適宜所有人，尤其是消化繫統敏感的人。", category: "meal" },
    { name: "川菜", info: "川菜使用了大量的辣椒和花椒，這些成分有助於促進血液循環和食欲。然而，川菜的高油和高鹽特性可能對健康造成影響。", category: "meal" },
    { name: "粵菜", info: "粵菜註重食材的新鮮和烹飪的技巧，通常較為健康。它包含了豐富的海鮮和蔬菜，有助於提供必需的蛋白質、維生素和礦物質。", category: "meal" },
    { name: "魯菜", info: "魯菜的烹飪方法多樣，包括燉、燒、炒、炸等，食材選擇廣泛，因此營養價值也因具體菜品而異。魯菜中常見的豆制品和海鮮都是優質蛋白質的來源。", category: "meal" },
    { name: "閩菜", info: "閩菜因為烹飪技法多樣，能夠較好地保持食材原味和營養，同時調料的使用增加了風味，但也需註意某些菜肴可能因調料使用較多而含鈉較高。", category: "meal" },
    { name: "浙菜", info: "浙菜強調原料的新鮮和季節性，烹飪方法多樣，能夠最大限度地保留食材的營養，是一種健康的飲食選擇。", category: "meal" },
    { name: "蘇菜", info: "蘇菜註重營養均衡，烹飪方法有助於保持食材的營養成分，是一種健康的飲食習慣。", category: "meal" },
    { name: "徽菜", info: "徽菜因為烹飪方法和調料使用，風味獨特，但也可能導致部分菜肴油脂含量較高，需要適量食用。", category: "meal" },
    { name: "老鄉雞", info: "老鄉雞,中式快餐全國榜首品牌。全國1000多家快餐店。老鄉雞是以180天土雞與農夫山泉燉制的肥西老母雞湯為特色，主要以中式烹飪方式出品，服務於中國家庭日常用餐需求的中式快餐品牌。", category: "meal" },
    { name: "麻辣燙", info: "麻辣燙的食材多樣，可以提供豐富的營養，但需要註意湯底的油脂和辛辣成分可能不適合所有人。", category: "meal" },
    { name: "水煮", info: "盡管南昌水煮美味，但由於其辣味特點，不擅長吃辣的食客應適當調整辣度，以免引起不適。", category: "meal" },
    { name: "拉面", info: "拉面除了提供碳水化合物和蛋白質外，其湯底通常由骨頭或肉熬制，富含膠原蛋白和氨基酸。", category: "meal" },
    { name: "刀削面", info: "刀削面主要由小麥粉制成，富含碳水化合物和蛋白質，搭配不同的鹵汁或湯料，可以提供更全面的營養。", category: "meal" },


    //早餐
    { name: "拌粉", info: "拌粉的營養價值取決於搭配的食材，米粉本身富含碳水化合物，可以提供能量，但建議搭配蔬菜和蛋白質來源以增加營養均衡。", category: "breakfast" },
    { name: "燒賣", info: "燒賣的主要原料是面粉和肉類（如豬肉或羊肉），富含蛋白質和碳水化合物，同時也含有一定量的脂肪和微量元素。由於通常搭配蔬菜，因此也含有維生素和纖維素。", category: "breakfast" },
    { name: "包子", info: "包子的營養價值取決於其餡料，通常含有蛋白質、碳水化合物、膳食纖維，以及多種維生素和礦物質。包子是一種營養均衡的食品，適合作為早餐或主食。", category: "breakfast" },
    { name: "雜糧煎餅", info: "雜糧煎餅含有豐富的膳食纖維、維生素和礦物質，是一種健康的粗糧食品。雜糧面粉相比普通面粉含有更多的營養成分，有助於促進腸道健康。", category: "breakfast" },
    { name: "泡粉", info: "泡粉主要提供碳水化合物，肉湯增加了蛋白質和脂肪的攝入，同時熱湯也有助於保持體溫和增加飽腹感。"},
    { name: "餛飩", info: "餛飩富含蛋白質和碳水化合物，肉餡提供了必需的氨基酸和脂肪，而面皮則是能量的來源。", category: "breakfast" },
    { name: "面條", info: "面條主要提供碳水化合物，是能量的重要來源。搭配不同的佐料和配菜，可以增加蛋白質、維生素和礦物質的攝入。", category: "breakfast" },
    { name: "刀削面", info: "刀削面主要由小麥粉制成，富含碳水化合物和蛋白質，搭配不同的鹵汁或湯料，可以提供更全面的營養。", category: "breakfast" },
    { name: "拉面", info: "拉面除了提供碳水化合物和蛋白質外，其湯底通常由骨頭或肉熬制，富含膠原蛋白和氨基酸。", category: "breakfast" },

    //飲品
    { name: "IF椰子水", info: "IF椰子水強調其產品是100%純正椰子水，不添加防腐劑，同時富含電解質，適合運動和恢復體力時飲用。", category: "drink" },
    { name: "紅牛", info: "含有高咖啡因和牛磺酸的能量飲料，能夠提供快速的能量補充，常被用來提神醒腦，但不建議過量飲用。", category: "drink" },
    { name: "雪碧", info: "檸檬味的碳酸飲料，口感清爽，帶有淡淡的檸檬香味，是解渴和搭配快餐的常見選擇。", category: "drink" },
    { name: "七喜", info: "檸檬-青檸味的碳酸飲料，透明液體，口味清新，常作為調酒的基底或夏日消暑飲品。", category: "drink" },
    { name: "芬達", info: "水果味碳酸飲料，色彩繽紛，口味多樣，包括柳丁、草莓等多種水果口味。", category: "drink" },
    { name: "百事可樂", info: "碳酸飲料，與可口可樂相比，百事可樂通常被認為口味更甜、更清淡。", category: "drink" },
    { name: "可口可樂", info: "碳酸飲料，深棕色的液體，含有咖啡因，是許多人喜愛的經典飲料。", category: "drink" },
    { name: "霸王茶姬", info: "霸王茶姬是一款以茶為基底，加入果汁和甜味劑的飲品。結合了茶的清香和水果的甜味，通常口感較為甘甜。", category: "drink" },
    { name: "古茗", info: "古茗是一家中國茶飲品牌，以高性價比和新鮮食材著稱，產品線包括奶茶、果茶等。", category: "drink" },
    { name: "COCO奶茶", info: "COCO奶茶是一家國際連鎖的奶茶品牌，起源於臺灣，以奶茶和果茶聞名。", category: "drink" },
    { name: "茶百道", info: "茶百道是一家專註於古早中式茶飲的品牌，提供各類茶飲和奶茶。", category: "drink" },
    { name: "甜拉拉", info: "甜拉拉是一家較新的飲品品牌，提供奶茶、果汁等飲品。", category: "drink" },
    { name: "滬上阿姨", info: "滬上阿姨的飲品和小吃融合了上海的地方特色，提供獨特的口味體驗。", category: "drink" },
    { name: "喜茶", info: "喜茶是一家高端茶飲品牌，以芝士茶和水果茶聞名。", category: "drink" },
    { name: "瑞幸咖啡", info: "瑞幸咖啡是一家快速增長的中國咖啡連鎖品牌，提供各類咖啡、茶飲和小食。", category: "drink" },
    { name: "庫迪咖啡", info: "庫迪咖啡是一家新興的咖啡連鎖品牌，提供咖啡和西式簡餐。", category: "drink" },

    //小吃
    { name: "燒餅", info: "燒餅主要提供碳水化合物，如果添加了肉餡，也能提供蛋白質和脂肪。", category: "snack" },
    { name: "炸餅", info: "炸餅含有較多的碳水化合物和脂肪，熱量較高，應適量食用。", category: "snack" },
    { name: "炸薯條", info: "炸薯條含有較高的碳水化合物和脂肪，尤其是油炸後吸附的油脂，使得熱量大幅增加。", category: "snack" },
    { name: "炸雞", info: "炸雞富含蛋白質，但由於油炸，含有較多的脂肪和熱量。", category: "snack" },
    { name: "鍋貼", info: "鍋貼含有蛋白質和碳水化合物，脂肪含量取決於肉餡的比例和煎制過程中使用的油脂量。", category: "snack" },
    
    //水果
    { name: "柳丁", info: "柳丁是一種常見的水果，富含維生素C和纖維素，有助於增強免疫力和促進消化。", category: "fruit" },
    { name: "蘋果", info: "蘋果是一種常見的水果，富含維生素C和膳食纖維，有助於降低膽固醇和控制血糖。", category: "fruit" },
    { name: "香蕉", info: "香蕉是一種富含鉀和膳食纖維的水果，有助於維持心臟健康和消化功能。", category: "fruit" },
    { name: "梨子", info: "梨子是一種含水量高、營養豐富的水果，富含維生素和礦物質，有助於清熱解毒和保護胃腸。", category: "fruit" },
    { name: "葡萄", info: "葡萄是一種富含天然糖分和維生素的水果，有助於提供能量和營養。", category: "fruit" },
    { name: "草莓", info: "草莓是一種富含維生素C和纖維素的水果，有助於美白皮膚和促進消化。", category: "fruit" },
    { name: "櫻桃", info: "櫻桃是一種富含維生素和礦物質的水果，有助於提供能量和營養。", category: "fruit" },
    { name: "桃子", info: "桃子是一種含水量高、營養豐富的水果，富含維生素和礦物質，有助於清熱解毒和保護胃腸。", category: "fruit" },
    { name: "西瓜", info: "西瓜是一種富含水分和維生素的水果，有助於解渴和提供營養。", category: "fruit" },
    { name: "哈密瓜", info: "哈密瓜是一種含水量高、營養豐富的水果，富含維生素和礦物質，有助於清熱解毒和保護胃腸。", category: "fruit" },
    { name: "柚子", info: "柚子是一種富含維生素C和纖維素的水果，有助於提高免疫力和促進消化。", category: "fruit" },
    { name: "鳳梨", info: "鳳梨是一種含有豐富維生素和酵素的水果，有助於消化和營養吸收。", category: "fruit" },
    { name: "木瓜", info: "木瓜是一種含有豐富維生素和酵素的水果，有助於消化和營養吸收。", category: "fruit" },
    { name: "李子", info: "李子是一種含水量高、營養豐富的水果，富含維生素和礦物質，有助於清熱解毒和保護胃腸。", category: "fruit" },
    { name: "椰子", info: "椰子是一種含水量高、營養豐富的水果，富含維生素和礦物質，有助於清熱解毒和保護胃腸。", category: "fruit" },

];

// 顯示隨機食物信息的函數
function showFood() {
    var category = document.getElementById("category").value;
    var filteredFoods = foods.filter(function (food) {
        return category === "all" || food.category === category;
    });
    var randomIndex = Math.floor(Math.random() * filteredFoods.length);
    var food = filteredFoods[randomIndex];
    document.getElementById("food-info").innerHTML = "<b>" + food.name + "</b><br>" + food.info;
}

// 切換語言的函數
function changeLanguage(language) {
    var lagn = document.getElementById("language"); // 获取按钮元素
    // 这里假设您有不同语言版本的网页，比如中文版本和英文版本
    if (language === "tw") {
        window.location.href = "/index_tw.html"; // 将页面重定向到繁体中文版本的网页
    } else if (language === "cn") {
        window.location.href = "/index.html"; // 将页面重定向到中文版本的网页
    }
}
