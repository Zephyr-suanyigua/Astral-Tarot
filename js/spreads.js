// 牌阵定义(中英双语)—— count 抽牌数;positions 各位置含义与在牌桌上的百分比坐标
window.TAROT_SPREADS = [
  {
    id: "single",
    name: "圣灵指引 · 单张牌", nameEn: "Single Card · Guidance",
    desc: "抽取一张牌,回应今日运势或一个是非问题。最简洁直接的占卜。",
    descEn: "Draw one card for your day or a yes/no question. The simplest, most direct reading.",
    count: 1, focus: "general",
    positions: [
      { key: "core", title: "核心指引", titleEn: "The Message", desc: "此刻宇宙给你的核心讯息", descEn: "The core message the cosmos offers you now", x: 50, y: 50 }
    ]
  },
  {
    id: "timeflow",
    name: "时间之流 · 三张牌", nameEn: "Flow of Time · Three Cards",
    desc: "过去、现在、未来。观照事件在时间长河中的流向。",
    descEn: "Past, Present, Future — see how your situation flows through time.",
    count: 3, focus: "general",
    positions: [
      { key: "past", title: "过去", titleEn: "Past", desc: "事件的根源与已成之因", descEn: "The roots and causes already set", x: 22, y: 50 },
      { key: "present", title: "现在", titleEn: "Present", desc: "当下的处境与能量", descEn: "Your present situation and energy", x: 50, y: 50 },
      { key: "future", title: "未来", titleEn: "Future", desc: "若维持此势将走向的结果", descEn: "Where the current path is heading", x: 78, y: 50 }
    ]
  },
  {
    id: "triangle",
    name: "圣三角 · 三张牌", nameEn: "Sacred Triangle · Three Cards",
    desc: "现状、阻碍、指引。看清难题的症结与出路。",
    descEn: "Situation, Obstacle, Guidance — reveal the crux of a problem and the way forward.",
    count: 3, focus: "general",
    positions: [
      { key: "situation", title: "现状", titleEn: "Situation", desc: "问题当前的真实样貌", descEn: "The true shape of the matter now", x: 30, y: 62 },
      { key: "obstacle", title: "阻碍", titleEn: "Obstacle", desc: "潜藏的障碍或未见的因素", descEn: "The hidden barrier or unseen factor", x: 70, y: 62 },
      { key: "guidance", title: "指引", titleEn: "Guidance", desc: "化解与前行的方向", descEn: "The direction toward resolution", x: 50, y: 26 }
    ]
  },
  {
    id: "love",
    name: "心之天平 · 关系牌阵", nameEn: "Scales of the Heart · Relationship",
    desc: "洞察一段感情:你的心、对方的心,以及你们之间的走向。",
    descEn: "Insight into a relationship — your heart, their heart, and where you are headed together.",
    count: 5, focus: "love",
    positions: [
      { key: "you", title: "你的心境", titleEn: "You", desc: "你在这段关系中的状态与真实感受", descEn: "Your state and true feelings in this bond", x: 22, y: 40 },
      { key: "them", title: "对方的心境", titleEn: "Them", desc: "对方的状态与内心倾向", descEn: "Their state and inner leaning", x: 78, y: 40 },
      { key: "bond", title: "彼此的连结", titleEn: "The Bond", desc: "你们之间的能量与羁绊", descEn: "The energy and ties between you", x: 50, y: 24 },
      { key: "challenge", title: "面临的考验", titleEn: "The Challenge", desc: "关系中需要跨越的课题", descEn: "The lesson the relationship must cross", x: 50, y: 60 },
      { key: "outcome", title: "关系走向", titleEn: "Outcome", desc: "顺此发展的可能结果", descEn: "The likely direction if things continue", x: 50, y: 82 }
    ]
  },
  {
    id: "celtic",
    name: "凯尔特十字 · 十张牌", nameEn: "Celtic Cross · Ten Cards",
    desc: "最经典深入的综合牌阵,从多重维度剖析一个议题的全貌。",
    descEn: "The classic in-depth spread, examining a question from many dimensions.",
    count: 10, focus: "general",
    positions: [
      { key: "present", title: "1 现况", titleEn: "1 Present", desc: "问题的核心与你当下的处境", descEn: "The heart of the matter and where you stand", x: 33, y: 50 },
      { key: "challenge", title: "2 阻碍/助力", titleEn: "2 Challenge", desc: "横亘眼前、正在影响你的力量", descEn: "The force crossing you right now", x: 33, y: 50, cross: true },
      { key: "foundation", title: "3 根基", titleEn: "3 Foundation", desc: "潜意识与事件的深层根源", descEn: "The subconscious root of the situation", x: 33, y: 80 },
      { key: "past", title: "4 过去", titleEn: "4 Past", desc: "刚刚过去、正在离场的影响", descEn: "The recent past now leaving", x: 15, y: 50 },
      { key: "crown", title: "5 顶冠", titleEn: "5 Crown", desc: "你的目标、期望或可能的最佳结果", descEn: "Your goal, hope, or best possible outcome", x: 33, y: 20 },
      { key: "future", title: "6 未来", titleEn: "6 Future", desc: "即将到来、正在靠近的能量", descEn: "The energy approaching next", x: 51, y: 50 },
      { key: "self", title: "7 自我", titleEn: "7 Self", desc: "你对自身与处境的态度", descEn: "Your attitude toward yourself and the matter", x: 78, y: 82 },
      { key: "environment", title: "8 环境", titleEn: "8 Environment", desc: "外界、他人与环境的影响", descEn: "The influence of others and surroundings", x: 78, y: 61 },
      { key: "hopes", title: "9 希望与恐惧", titleEn: "9 Hopes & Fears", desc: "你内心的期盼或隐忧", descEn: "Your inner hopes or hidden fears", x: 78, y: 40 },
      { key: "outcome", title: "10 结果", titleEn: "10 Outcome", desc: "综合一切走向的最终结果", descEn: "The final outcome of all influences combined", x: 78, y: 19 }
    ]
  }
];
