// 牌阵定义 —— 每个牌阵定义抽牌数量、每个位置的含义,以及在牌桌上的布局坐标
// 坐标 x / y 为百分比(相对于牌桌容器),用于把抽出的牌摆到对应位置
window.TAROT_SPREADS = [
  {
    id: "single",
    name: "圣灵指引 · 单张牌",
    desc: "抽取一张牌,回应今日运势或一个是非问题。最简洁直接的占卜。",
    count: 1,
    focus: "general",          // 该牌阵默认强调的解读领域
    positions: [
      { key: "核心", title: "核心指引", desc: "此刻宇宙给你的核心讯息", x: 50, y: 50 }
    ]
  },
  {
    id: "timeflow",
    name: "时间之流 · 三张牌",
    desc: "过去、现在、未来。观照事件在时间长河中的流向。",
    count: 3,
    focus: "general",
    positions: [
      { key: "过去", title: "过去", desc: "事件的根源与已成之因", x: 22, y: 50 },
      { key: "现在", title: "现在", desc: "当下的处境与能量", x: 50, y: 50 },
      { key: "未来", title: "未来", desc: "若维持此势将走向的结果", x: 78, y: 50 }
    ]
  },
  {
    id: "triangle",
    name: "圣三角 · 三张牌",
    desc: "现状、阻碍、指引。看清难题的症结与出路。",
    count: 3,
    focus: "general",
    positions: [
      { key: "现状", title: "现状", desc: "问题当前的真实样貌", x: 30, y: 62 },
      { key: "阻碍", title: "阻碍", desc: "潜藏的障碍或未见的因素", x: 70, y: 62 },
      { key: "指引", title: "指引", desc: "化解与前行的方向", x: 50, y: 26 }
    ]
  },
  {
    id: "love",
    name: "心之天平 · 关系牌阵",
    desc: "洞察一段感情:你的心、对方的心,以及你们之间的走向。",
    count: 5,
    focus: "love",
    positions: [
      { key: "你", title: "你的心境", desc: "你在这段关系中的状态与真实感受", x: 22, y: 40 },
      { key: "对方", title: "对方的心境", desc: "对方的状态与内心倾向", x: 78, y: 40 },
      { key: "连结", title: "彼此的连结", desc: "你们之间的能量与羁绊", x: 50, y: 24 },
      { key: "考验", title: "面临的考验", desc: "关系中需要跨越的课题", x: 50, y: 60 },
      { key: "走向", title: "关系走向", desc: "顺此发展的可能结果", x: 50, y: 82 }
    ]
  },
  {
    id: "celtic",
    name: "凯尔特十字 · 十张牌",
    desc: "最经典深入的综合牌阵,从多重维度剖析一个议题的全貌。",
    count: 10,
    focus: "general",
    positions: [
      { key: "现况", title: "1 现况", desc: "问题的核心与你当下的处境", x: 33, y: 50 },
      { key: "阻碍", title: "2 阻碍/助力", desc: "横亘眼前、正在影响你的力量", x: 33, y: 50, cross: true },
      { key: "根基", title: "3 根基", desc: "潜意识与事件的深层根源", x: 33, y: 80 },
      { key: "过去", title: "4 过去", desc: "刚刚过去、正在离场的影响", x: 15, y: 50 },
      { key: "目标", title: "5 顶冠", desc: "你的目标、期望或可能的最佳结果", x: 33, y: 20 },
      { key: "未来", title: "6 未来", desc: "即将到来、正在靠近的能量", x: 51, y: 50 },
      { key: "自我", title: "7 自我", desc: "你对自身与处境的态度", x: 78, y: 82 },
      { key: "环境", title: "8 环境", desc: "外界、他人与环境的影响", x: 78, y: 61 },
      { key: "希望", title: "9 希望与恐惧", desc: "你内心的期盼或隐忧", x: 78, y: 40 },
      { key: "结果", title: "10 结果", desc: "综合一切走向的最终结果", x: 78, y: 19 }
    ]
  }
];
