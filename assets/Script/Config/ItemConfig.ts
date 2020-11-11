// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const ItemsConfigs = [
    {
        id: 0,
        title: "2020年1月23日，城乡建设局提出请求对武汉市建设“新冠病毒肺炎应急医院”进行支持，经过商议，决定建设两家集中收治新型冠状病毒肺炎患者的医院，这两家医院的名字叫（）。",
        options: ["A. 雷神山医院", "B. 小汤山医院", "C. 火神山医院", "D. 新冠医院"],
        reasons: ["", ""],
        answerIdList: [0, 2],
    },
    {
        id: 1,
        title: "为与时间竞速，与疫魔赛跑，火神山和雷神山医院火雷速度建设，体现中国决心，展现中国力量。火神山医院建设仅用不到（）时间，就拔地而起，完成交付。",
        options: ["A. 8天", "A. 9天", "C. 10天", "D. 11天"],
        reasons: ["", ""],
        answerIdList: [2],
    },
    {
        id: 2,
        title: "有种响应叫做不计回报不论生死，短短两天时间，全国非公立医疗机构千余名医护人员，按手印、书写请战书，强烈要求驰援武汉一线。现在，疫情还未过去，作为普通群众的我们也可以贡献自己的力量，下列做法正确的是（）。",
        options: ["A. 积极配合防疫工作", "B. 存侥幸心理，不重视戴口罩", "C. 勤洗手，做好个人防护"],
        reasons: ["", ""],
        answerIdList: [0, 2],
    },
    {
        id: 3,
        title: "当时，全国各省对武汉搬家式地支援，缺啥给啥，包括山东寿光的蔬菜、黑龙江的大米等等——武汉的背后有我们。我们不缺物资，但是也要节约物资。当前，为响应节约粮食号召，我们应该（）。",
        options: ["A. 不偏食，不挑食", "B. 适量定餐，避免剩餐", "C. 不攀比,以节约为荣,浪费为耻"],
        reasons: ["", ""],
        answerIdList: [0, 1, 2],
    },
    {
        id: 4,
        title: "现在，疫情还未过去。为应对疫情，协助做好抗疫工作，我们每个人都有自己的责任和义务。在日常生活中，我们可以做到的是（）。",
        options: ["A. 外出尽量避免人流量大的场所", "B. 出行有计划，必要时要将出行路线时间报备社区或村委", "C. 出现发烧等症状时，刻意隐瞒病情"],
        reasons: ["", ""],
        answerIdList: [0, 1],
    },
]

// const ItemsConfigs = [
//     {
//         id: 0,
//         title: "以下属于正确刷牙方法的是（）。",
//         options: ["A. 饭前刷牙", "B. 刷牙时，用力适度", "C. 横着刷牙", "D. 刷牙过程需要刷舌头"],
//         reasons: ["", ""],
//         answerIdList: [1, 3],
//     },
//     {
//         id: 1,
//         title: "以下属于七步洗手法的是（）。",
//         options: ["A. 掌心对掌心，相互揉搓", "A. 掌心对掌心，十指交叉揉搓", "C. 十指弯曲紧扣，转动揉搓", "D. 清洁手腕"],
//         reasons: ["", ""],
//         answerIdList: [0, 1, 2, 3],
//     },
//     {
//         id: 2,
//         title: "我们接种的疫苗的作用是（）。",
//         options: ["A. 加速疾病传播", "B. 让自己生病", "C. 获得对特定传染病的免疫力", "D. 预防传染病"],
//         reasons: ["", ""],
//         answerIdList: [2, 3],
//     },
//     {
//         id: 3,
//         title: "为预防感染传染病病毒，我们可以采取哪些防护措施（）。",
//         options: ["A. 戴口罩", "B. 勤洗手", "C. 吃野味", "D. 加强锻炼"],
//         reasons: ["", ""],
//         answerIdList: [0, 1, 3],
//     },
//     {
//         id: 4,
//         title: "病毒是一种结构简单的微生物，必须在活细胞内寄生，且繁殖速度非常迅速，高效病毒，平均能产生大约 10 万颗病毒“子孙”（）。",
//         options: ["A. 正确", "B. 错误"],
//         reasons: ["", ""],
//         answerIdList: [0],
//     },
//     {
//         id: 5,
//         title: "传染病的传播途径有哪些（）。",
//         options: ["A. 飞沫传播", "B. 接触传播", "C. 虫媒传播"],
//         reasons: ["", ""],
//         answerIdList: [0, 1, 2],
//     }
// ]

export class ItemConfig {

    static getItemConfigById(id) {
        return ItemsConfigs[id];
    }

    static getItemsLength() {
        return ItemsConfigs.length;
    }
}

