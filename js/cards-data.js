// Rider-Waite-Smith Tarot — 78 cards, bilingual (English / 简体中文)
// window.TAROT_CARDS
window.TAROT_CARDS = [
  {
    id: 0,
    name: "愚人",
    nameEn: "The Fool",
    arcana: "major",
    suit: null,
    number: 0,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/major-00.jpg",
    keywords: { up: ["自由", "冒险", "新开始", "纯真"], rev: ["鲁莽", "逃避", "风险", "犹豫不决"] },
    keywordsEn: { up: ["Freedom", "Adventure", "New beginnings", "Innocence"], rev: ["Recklessness", "Avoidance", "Risk-taking", "Hesitation"] },
    meaning: {
      up: {
        general: "愚人踏在悬崖边缘，眼望远方，象征全新旅程的起点。他怀抱纯真与信任，愿意放下过往、纵身跃入未知。此牌鼓励你保持开放心态，勇敢追随内心的召唤，相信宇宙自有安排。无限的可能正在展开，只要你敢于迈出第一步。",
        love: "感情预示崭新的开始，一段不期而遇的缘分正悄然降临。放下防备，以孩童般的真诚去爱。单身者将邂逅心动之人，有伴者可重燃初见时的悸动与自由。",
        career: "适合开创新事业或转换跑道，不必被经验束缚。勇于尝试陌生领域，直觉会指引方向。学业上保持好奇与探索精神，灵感源源不绝，但需脚踏实地。",
        wealth: "财运带有冒险色彩，可能出现意想不到的机会。适合小额尝试新的渠道，但切忌盲目下注。保持轻松心态，钱财来去随缘。",
        health: "身心轻盈自由，充满活力。适合尝试新的运动或户外活动，亲近自然能带来疗愈。行动时注意别过于随性而忽略安全。"
      },
      rev: {
        general: "逆位的愚人透露出鲁莽与逃避。你或许正因恐惧而止步不前，或因过度冲动而忽视潜在风险。天真变成了幼稚，自由沦为漫无目的的游荡。此刻需要三思而后行，为选择承担责任，别让借口掩盖真正的犹豫。",
        love: "感情中显得不成熟或逃避承诺，害怕被束缚而错失良缘。也可能陷入不切实际的幻想。请正视关系中的现实问题，别一味逃离。",
        career: "计划考虑不周，贸然行动招致挫败。频繁跳槽或三分钟热度让人难以立足。学业上心思浮躁，需收敛玩心，脚踏实地。",
        wealth: "财务上过于冲动，容易因一时兴起而破财。警惕高风险陷阱与投机骗局，切勿把赌注当作机会。",
        health: "作息紊乱，忽视身体发出的警讯。过度放纵或粗心大意可能引发意外，需重新建立规律与自律。"
      }
    },
    meaningEn: {
      up: {
        general: "The Fool stands at the cliff's edge, gazing toward the horizon, marking the very start of a journey. He carries innocence and trust, ready to leap into the unknown. This card invites the querent to stay open, follow the heart's calling, and trust that the universe will provide. Infinite possibility unfolds for those brave enough to take the first step.",
        love: "A fresh chapter in love begins, often an unexpected, spontaneous connection. Lower your defenses and love with childlike sincerity. Singles may meet someone thrilling; couples can rediscover the freedom and spark of the early days.",
        career: "An ideal time to launch something new or change paths, unbound by past experience. Explore unfamiliar ground and let intuition guide you. Students thrive on curiosity, though ideas still need grounding in reality.",
        wealth: "Finances carry an adventurous edge, with unexpected opportunities possible. Small, exploratory ventures suit you now, but avoid blind gambles. Hold money lightly and stay flexible.",
        health: "Body and mind feel light and vital. A great moment to try a new sport or head outdoors, as nature brings healing. Just take care not to be so carefree that you overlook safety."
      },
      rev: {
        general: "Reversed, the Fool warns of recklessness and avoidance. You may be frozen by fear, or leaping without weighing the risks. Innocence has slipped into naivety, and freedom into aimless drifting. This is a time to think before you act, take responsibility for your choices, and stop letting excuses mask real hesitation.",
        love: "Immaturity or fear of commitment surfaces, and you may dodge a genuine bond to avoid feeling tied down. Unrealistic fantasies can cloud judgment. Face the real issues in the relationship rather than running from them.",
        career: "Poorly considered plans and rash moves invite setbacks. Constant job-hopping or fleeting enthusiasm makes it hard to gain footing. Students feel scattered and must rein in distraction and stay grounded.",
        wealth: "Impulsive spending on a whim drains your resources. Beware high-risk traps and speculative scams; never mistake a gamble for an opportunity.",
        health: "An erratic routine and ignored warning signs take a toll. Overindulgence or carelessness can lead to accidents, so rebuild structure and self-discipline."
      }
    }
  },
  {
    id: 1,
    name: "魔术师",
    nameEn: "The Magician",
    arcana: "major",
    suit: null,
    number: 1,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/major-01.jpg",
    keywords: { up: ["创造", "行动力", "自信", "潜能"], rev: ["欺骗", "操纵", "犹豫", "才华错用"] },
    keywordsEn: { up: ["Manifestation", "Willpower", "Self-confidence", "Potential"], rev: ["Deception", "Manipulation", "Hesitation", "Wasted talent"] },
    meaning: {
      up: {
        general: "魔术师一手指天、一手指地，桌上陈列象征四元素的法器，代表你已握有实现目标的一切资源。此牌昭示强大的行动力与创造力，只要意念专注、付诸实践，便能将想法化为现实。你是自己命运的塑造者，把握当下，主动出击。",
        love: "掌握感情的主动权，凭借魅力与真诚吸引对方。善用沟通技巧表达心意，能让关系顺利推进。单身者散发迷人自信，桃花运旺盛。",
        career: "才华得以充分施展，正是开创与谈判的好时机。你具备将构想落地的能力，主动争取机会将获认可。学业上专注高效，事半功倍。",
        wealth: "善用资源与技能创造财富，白手起家皆有可能。判断精准，主动出击更易获利，但仍需以实力为根基。",
        health: "能量充沛，身心协调，恢复力强。透过意志与积极行动改善健康，正是养成好习惯的良机。"
      },
      rev: {
        general: "逆位魔术师暗示才华被误用或潜能被浪费。你可能空有想法却迟迟不动，或以花言巧语操纵他人、掩饰真相。也警惕自己被欺骗蒙蔽。请回归诚信，把能力用在正途，别让自我怀疑冻结了行动。",
        love: "关系中存在欺瞒或玩弄手段，甜言蜜语背后动机不纯。也可能因缺乏自信而不敢表白，坐失良机。需辨明真心。",
        career: "眼高手低，计划难以落实；或以不正当手段谋取利益，终将自食其果。学业上敷衍应付，投机取巧难有真才实学。",
        wealth: "警惕商业骗局与夸大不实的投资。财务操作缺乏诚信或过度自负，容易招致损失。",
        health: "身心失衡，精力分散难以专注。可能滥用某些方式透支健康，需诚实面对身体状况，回归正轨。"
      }
    },
    meaningEn: {
      up: {
        general: "One hand raised to the heavens and one pointing to earth, the Magician stands before the four elemental tools, a sign that you already hold every resource you need. This card announces focused will and creative power: concentrate your intent, take action, and thought becomes reality. You are the architect of your own fate, so seize the moment.",
        love: "You hold the initiative in love, drawing others through charm and sincerity. Skillful communication moves the relationship forward. Singles radiate magnetic confidence, and romantic prospects are strong.",
        career: "Your talents are ready to shine; this is a prime time to launch projects and negotiate. You can turn ideas into results, and stepping forward earns recognition. Students work with sharp focus and real efficiency.",
        wealth: "Turn skills and resources into income, even building something from nothing. Judgment is keen and initiative pays off, though real ability must remain the foundation.",
        health: "Energy is abundant and body and mind are aligned, with strong recovery. Will and decisive action can transform your health, making this an excellent moment to build good habits."
      },
      rev: {
        general: "Reversed, the Magician points to misused talent and squandered potential. You may be full of ideas yet slow to act, or using clever words to manipulate others and hide the truth. Stay alert to being deceived yourself. Return to integrity, direct your gifts toward honest ends, and don't let self-doubt freeze you.",
        love: "Deception or game-playing colors the relationship, with sweet words masking unclear motives. Or low confidence keeps you from speaking up and you miss your moment. Discern who is genuine.",
        career: "Ambition outruns ability and plans fail to land; gains won by dishonest means eventually backfire. Students who cut corners and coast gain no real mastery.",
        wealth: "Beware business scams and exaggerated investments. Finances handled without honesty or with overconfidence invite loss.",
        health: "Body and mind are out of balance and focus scatters. You may be depleting your health through misuse of some habit; face your condition honestly and return to a healthy course."
      }
    }
  },
  {
    id: 2,
    name: "女祭司",
    nameEn: "The High Priestess",
    arcana: "major",
    suit: null,
    number: 2,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/major-02.jpg",
    keywords: { up: ["直觉", "神秘", "内在智慧", "潜意识"], rev: ["秘密", "压抑", "迷失", "表里不一"] },
    keywordsEn: { up: ["Intuition", "Mystery", "Inner wisdom", "The subconscious"], rev: ["Secrets", "Repression", "Lost bearings", "Disconnection"] },
    meaning: {
      up: {
        general: "女祭司端坐于两柱之间，帷幕之后藏着未知的奥秘。她象征深邃的直觉、潜意识与内在智慧。此牌提醒你静心倾听内在的声音，答案不在喧嚣之外，而在沉默之中。相信第六感，尊重那些尚未言明的真相，耐心等待时机揭晓。",
        love: "感情发展含蓄而神秘，彼此心照不宣。倾听直觉能洞察对方真心。适合以柔性的方式经营关系，有些情愫尚在暗中酝酿。",
        career: "适合幕后策划与研究性工作，洞察力是你的利器。不必急于表态，静观其变反而占得先机。学业上适合深度钻研与自省。",
        wealth: "财务宜守不宜攻，凭直觉可避开风险。有些机会尚不明朗，耐心观察、不轻举妄动为上策。",
        health: "关注身心的内在讯号，压力多源于潜意识。冥想、静养与充足睡眠有助恢复平衡，聆听身体的低语。"
      },
      rev: {
        general: "逆位女祭司代表直觉被忽视或内在失衡。你或许压抑了真实感受，被表象迷惑，与内心失去连结。也可能有秘密被隐瞒，情绪暗流涌动。请重新与自己对话，别让理性彻底盖过直觉的提醒。",
        love: "关系中隐藏着不为人知的秘密或猜疑，表里不一令人困惑。压抑的情感需要被诚实表达，否则距离渐生。",
        career: "忽视直觉而做出错误判断，或被表面信息误导。职场暗藏是非，需谨言慎行。学业上心浮气躁，难以沉潜。",
        wealth: "财务信息不透明，警惕隐藏的陷阱与暗中的损失。过度依赖他人建议反而迷失方向。",
        health: "情绪淤积影响身体，长期压抑恐引发失调。需正视被忽略的内在需求，寻求疏导与放松。"
      }
    },
    meaningEn: {
      up: {
        general: "Seated between the two pillars with a veil of mystery behind her, the High Priestess embodies deep intuition, the subconscious, and inner wisdom. She asks the querent to grow still and listen within, for the answer lies not in the noise outside but in silence. Trust your sixth sense, honor the truths not yet spoken, and let timing reveal what is hidden.",
        love: "Love unfolds quietly and mysteriously, understood without words. Trusting intuition reveals another's true heart. A gentle approach suits this bond, as feelings still stir beneath the surface.",
        career: "Behind-the-scenes planning and research favor you now, with insight as your greatest tool. There's no need to declare your hand; watching and waiting gives you the edge. Students do well with deep study and reflection.",
        wealth: "Protect rather than pursue, and let intuition steer you clear of risk. Some opportunities remain unclear, so patient observation beats hasty moves.",
        health: "Tune in to the body's inner signals, as stress often rises from the subconscious. Meditation, quiet rest, and ample sleep restore balance; listen to the body's whispers."
      },
      rev: {
        general: "Reversed, the High Priestess shows intuition ignored or the inner life out of balance. You may be suppressing true feelings, misled by appearances, and cut off from your own depths. Secrets may be kept and emotions run as hidden currents. Reopen the dialogue with yourself, and don't let logic drown out intuition's quiet counsel.",
        love: "Undisclosed secrets or suspicion shadow the relationship, and mixed signals confuse. Repressed feelings need honest expression, or distance will quietly grow.",
        career: "Ignoring intuition leads to misjudgment, or surface information misleads you. Office intrigue calls for discretion. Students feel restless and struggle to settle into deep work.",
        wealth: "Financial information is murky; beware hidden traps and quiet losses. Leaning too heavily on others' advice only leads you astray.",
        health: "Bottled-up emotion affects the body, and long repression can bring imbalance. Acknowledge the inner needs you've overlooked and seek release and relaxation."
      }
    }
  },
  {
    id: 3,
    name: "皇后",
    nameEn: "The Empress",
    arcana: "major",
    suit: null,
    number: 3,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/major-03.jpg",
    keywords: { up: ["丰饶", "母性", "创造", "滋养"], rev: ["依赖", "空虚", "停滞", "溺爱"] },
    keywordsEn: { up: ["Abundance", "Nurturing", "Creativity", "Fertility"], rev: ["Dependence", "Emptiness", "Stagnation", "Smothering"] },
    meaning: {
      up: {
        general: "皇后端坐于丰饶的自然之中，麦田与流水环绕，象征孕育、富足与无私的爱。此牌代表创造力的丰收与生命的滋养，无论是关系、事业还是心灵，都进入了开花结果的阶段。敞开怀抱去感受美与丰盛，慷慨给予也慷慨接受。",
        love: "感情丰盈甜蜜，充满温柔与包容。关系稳定发展，适合谈婚论嫁或孕育新生命。以母性般的爱滋养彼此，幸福自然生长。",
        career: "创意与成果双丰收，团队氛围和谐融洽。适合与美、艺术、育成相关的领域，付出终得回报。学业上灵感丰沛，成绩斐然。",
        wealth: "财运丰厚，收入稳定增长，物质生活富足。善于经营与享受，投资偏向稳健增值，是积累的好时机。",
        health: "身心充满生命力，恢复力佳。女性尤需关注生殖与内分泌健康。适度享受美食与休憩，滋养身心。"
      },
      rev: {
        general: "逆位皇后暗示滋养的失衡。你或许过度付出而透支自己，或陷入依赖与空虚，创造力停滞不前。也可能是溺爱与占有掩盖了真正的关怀。请重新照顾自己的需求，让爱回归健康的流动，别让丰饶变成负担。",
        love: "关系中出现过度依赖或掌控，爱变得令人窒息。也可能感情冷淡、缺乏温度。需在给予与自我之间找回平衡。",
        career: "创意枯竭，工作陷入停滞或过度操劳。付出与回报不成正比，团队关系失衡。学业上动力不足，难有突破。",
        wealth: "过度消费或理财失当导致入不敷出。也可能过分依赖他人供养，缺乏独立能力，财务根基不稳。",
        health: "身心疲惫、营养失衡，忽视自我照顾。情绪化饮食或过劳影响健康，需重新建立滋养的节奏。"
      }
    },
    meaningEn: {
      up: {
        general: "The Empress reclines amid flourishing nature, encircled by golden wheat and flowing water, embodying fertility, abundance, and unconditional love. This card marks a harvest of creativity and the nourishing of life, whether in love, work, or spirit, as things ripen and bloom. Open your arms to beauty and plenty, giving and receiving with equal generosity.",
        love: "Love is rich and tender, full of warmth and acceptance. The bond grows steady, well suited to marriage or welcoming new life. Nurture one another with maternal care and happiness grows naturally.",
        career: "Both ideas and results flourish, and the team feels harmonious. Fields tied to beauty, art, and nurturing favor you, and effort is rewarded. Students brim with inspiration and shine.",
        wealth: "Finances are abundant, with steady, growing income and material comfort. You manage and enjoy resources well; steady, appreciating investments suit this fertile time for building.",
        health: "Body and mind are vital, with strong recovery. Women especially should tend to reproductive and hormonal health. Enjoy good food and rest in moderation to nourish yourself."
      },
      rev: {
        general: "Reversed, the Empress signals nurturing gone out of balance. You may give until you are drained, or sink into dependence and emptiness as creativity stalls. Smothering and possessiveness can masquerade as care. Turn attention back to your own needs, let love flow in a healthy way, and don't let abundance become a burden.",
        love: "Over-dependence or control creeps in and love turns suffocating. Alternatively, warmth fades and the bond feels cold. Restore balance between giving and self.",
        career: "Creativity runs dry and work stalls or turns into overwork. Effort and reward no longer match, and team dynamics wobble. Students lack drive and struggle to break through.",
        wealth: "Overspending or poor money management leads to shortfalls. You may also lean too much on others' support, lacking independence and a stable financial base.",
        health: "You feel drained and poorly nourished, neglecting self-care. Emotional eating or overwork undermines health; rebuild a nourishing rhythm."
      }
    }
  },
  {
    id: 4,
    name: "皇帝",
    nameEn: "The Emperor",
    arcana: "major",
    suit: null,
    number: 4,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-04.jpg",
    keywords: { up: ["权威", "秩序", "稳定", "领导"], rev: ["专制", "固执", "失控", "压迫"] },
    keywordsEn: { up: ["Authority", "Structure", "Stability", "Leadership"], rev: ["Tyranny", "Rigidity", "Loss of control", "Domination"] },
    meaning: {
      up: {
        general: "皇帝端坐于坚固的宝座之上，手持权杖，象征权威、秩序与掌控。此牌代表以理性与纪律建立稳固的基业，凭借远见与决断力承担责任。你正处于掌握大局的位置，用结构与规则为生活奠基，坚定而可靠地引领前行。",
        love: "关系稳定而有担当，一方展现保护与主导的力量。适合建立长久承诺，规划共同的未来。以责任感经营感情，给予对方安全感。",
        career: "事业步入正轨，凭借领导力与执行力赢得地位。适合管理、创业与需要决断的岗位。学业上自律严谨，规划清晰终有成就。",
        wealth: "财务稳健有序，善于规划与积累。适合长期布局与稳固资产，凭借纪律与远见实现财富增长。",
        health: "体格强健，意志坚定。规律的作息与自我管理是健康之本。注意压力过大导致的紧绷，适度放松。"
      },
      rev: {
        general: "逆位皇帝显现权力的阴影。你可能过于固执专制，以强硬压制他人，或反之丧失了掌控与方向。秩序变成僵化，责任沦为压迫。请反思领导的方式，在坚定与灵活之间取得平衡，别让控制欲损害了关系与自我。",
        love: "关系中出现控制、大男子主义或权力失衡，令人感到压迫。也可能一方逃避责任、软弱无力，缺乏承担。",
        career: "管理僵化、独断专行引发抵触，或权威受到挑战、地位动摇。学业上过度死板或缺乏自律，难以突破。",
        wealth: "理财过于保守或专断，错失良机；也可能因失控与挥霍而根基动摇。需重建财务纪律。",
        health: "长期压力与固执导致身心紧绷，易有高血压、心脏等问题。需学会放下掌控，柔软待己。"
      }
    },
    meaningEn: {
      up: {
        general: "Seated on a solid throne with scepter in hand, the Emperor embodies authority, order, and command. This card is about building a stable foundation through reason and discipline, shouldering responsibility with vision and decisiveness. You stand in a position to direct the whole, laying down structure and rules to lead firmly and dependably forward.",
        love: "The relationship is steady and responsible, with one partner offering protection and leadership. It favors lasting commitment and planning a shared future. Lead with a sense of duty and give your partner security.",
        career: "Your career finds its footing as leadership and execution earn you standing. Management, entrepreneurship, and decisive roles suit you. Disciplined students with clear plans achieve real results.",
        wealth: "Finances are stable and orderly, and you plan and accumulate well. Long-term positioning and solid assets suit you; discipline and foresight grow your wealth.",
        health: "The body is strong and the will firm. Regular routines and self-management are the root of health. Watch for tension from too much pressure and allow yourself to relax."
      },
      rev: {
        general: "Reversed, the Emperor reveals the shadow side of power. You may be rigid and domineering, forcing your will on others, or, conversely, you may have lost control and direction. Order hardens into inflexibility and duty turns to oppression. Reflect on how you lead, balance firmness with flexibility, and don't let the urge to control harm your bonds or yourself.",
        love: "Control, heavy-handedness, or a power imbalance makes the relationship feel oppressive. Alternatively, one partner shirks responsibility, weak and unwilling to commit.",
        career: "Rigid management and autocratic ways breed resistance, or your authority is challenged and your position shaken. Students who are too rigid or lack discipline struggle to progress.",
        wealth: "Money handled too conservatively or high-handedly misses opportunities; loss of control or overspending can shake your foundation. Rebuild financial discipline.",
        health: "Chronic stress and stubbornness leave body and mind tense, risking high blood pressure or heart issues. Learn to loosen your grip and treat yourself gently."
      }
    }
  },
  {
    id: 5,
    name: "教皇",
    nameEn: "The Hierophant",
    arcana: "major",
    suit: null,
    number: 5,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/major-05.jpg",
    keywords: { up: ["传统", "信仰", "指引", "规范"], rev: ["叛逆", "教条", "束缚", "另辟蹊径"] },
    keywordsEn: { up: ["Tradition", "Faith", "Guidance", "Convention"], rev: ["Rebellion", "Dogma", "Restriction", "Unconventionality"] },
    meaning: {
      up: {
        general: "教皇高坐圣殿，向信众传授智慧，象征传统、信仰与精神指引。此牌代表遵循既定的规范与价值观，从师长、体制或信仰中获得教诲与归属。此刻适合寻求前辈的建议，走稳妥而被认可的道路，让传统的智慧为你指引方向。",
        love: "感情走向传统而稳定，适合以正式的方式确立关系，如订婚、结婚。彼此价值观契合，得到家庭与社会的祝福。",
        career: "适合在成熟体制内发展，遵循规范能获得认可。良师益友的指点助你成长。学业上适合系统性学习与考取资格认证。",
        wealth: "财务采取传统稳健之道，遵循经验法则可保平安。适合正规渠道的理财与长期规划，不宜投机。",
        health: "遵循正统的养生与医疗方式最为稳妥。规律作息、听从专业建议有助康复。身心需要精神层面的安顿。"
      },
      rev: {
        general: "逆位教皇象征对传统的质疑与突破。你或许厌倦了教条的束缚，渴望走自己的路，挑战陈规。这可以是解放，也可能是叛逆与迷失。请分辨哪些规范值得打破、哪些智慧仍需尊重，在独立与传承之间找到自己的信念。",
        love: "关系不愿受传统束缚，或价值观出现分歧。可能抗拒承诺、挑战世俗眼光，需坦诚沟通彼此的期待。",
        career: "不满体制的僵化，想另辟蹊径或自立门户。创新虽好，但需承担脱离规范的风险。学业上排斥填鸭式教育。",
        wealth: "打破常规的理财方式，可能带来突破也可能招致风险。警惕盲目跟从或落入伪权威的圈套。",
        health: "尝试非主流的疗法需谨慎判断。抗拒正规医疗建议恐延误调理，身心需要重新找回信任与依靠。"
      }
    },
    meaningEn: {
      up: {
        general: "Enthroned in his temple, imparting wisdom to his followers, the Hierophant embodies tradition, faith, and spiritual guidance. This card is about following established norms and values, finding teaching and belonging through mentors, institutions, or faith. It's a good time to seek counsel from those with experience and walk a proven, respected path, letting traditional wisdom point the way.",
        love: "Love turns traditional and stable, well suited to formalizing the bond through engagement or marriage. Shared values align, and the union earns the blessing of family and society.",
        career: "You do well advancing within an established institution, where following the rules brings recognition. Mentors and good colleagues aid your growth. Students benefit from structured study and earning credentials.",
        wealth: "Handle money in the traditional, prudent way, and time-tested principles keep you safe. Formal channels and long-term planning suit you; avoid speculation.",
        health: "Orthodox wellness and medical approaches are safest. Regular routines and following professional advice aid recovery. Body and mind also need spiritual grounding."
      },
      rev: {
        general: "Reversed, the Hierophant signals questioning and breaking from tradition. You may be weary of dogma's constraints, longing to walk your own road and challenge convention. This can be liberation, or it can be rebellion and drift. Discern which rules deserve breaking and which wisdom still merits respect, finding your own belief between independence and inheritance.",
        love: "The relationship resists traditional expectations, or values diverge. There may be reluctance to commit or a defiance of social norms; talk openly about what each of you expects.",
        career: "Frustrated with a rigid system, you want to forge your own path or strike out independently. Innovation is good, but carries the risk of departing from the norm. Students resist rote learning.",
        wealth: "Unconventional financial methods may bring breakthroughs or invite risk. Beware following blindly or falling for false authorities.",
        health: "Approach alternative therapies with careful judgment. Rejecting sound medical advice may delay healing; body and mind need to rediscover trust and support."
      }
    }
  },
  {
    id: 6,
    name: "恋人",
    nameEn: "The Lovers",
    arcana: "major",
    suit: null,
    number: 6,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/major-06.jpg",
    keywords: { up: ["爱情", "结合", "选择", "和谐"], rev: ["分歧", "诱惑", "犹豫", "失衡"] },
    keywordsEn: { up: ["Love", "Union", "Choice", "Harmony"], rev: ["Discord", "Temptation", "Indecision", "Imbalance"] },
    meaning: {
      up: {
        general: "恋人牌中天使祝福着相拥的两人，象征爱、结合与重要的抉择。此牌代表心灵与价值观的契合，也意味着你正面临需要遵从内心的选择。真正的结合建立在坦诚与和谐之上，倾听内心真实的渴望，做出忠于自我的决定。",
        love: "感情进入甜蜜和谐的阶段，两情相悦、心灵相通。单身者将遇到灵魂契合之人，有伴者关系升温。是表白与承诺的良机。",
        career: "合作顺利，与伙伴价值观一致，能激发火花。面临重要抉择时，遵从热爱所在。学业上找到志同道合的伙伴或方向。",
        wealth: "财务上面临选择，需权衡取舍。合作投资有利，但要确保双方理念一致。跟随价值观做决定较为稳妥。",
        health: "身心和谐，情绪愉悦有益健康。良好的人际关系是疗愈的力量。选择生活方式时倾听身体的声音。"
      },
      rev: {
        general: "逆位恋人揭示关系的失衡与内在的矛盾。你或许正被诱惑动摇，或在重大选择前犹豫不决、逃避责任。价值观的分歧让和谐蒙上阴影。请诚实面对内心的冲突，别因一时的迷惑而做出违背本心的决定。",
        love: "感情出现裂痕、沟通不良或第三者的诱惑。价值观分歧引发矛盾，或因逃避承诺而关系停滞，需坦诚化解。",
        career: "合作理念不合，团队失和。面临选择时摇摆不定，错失时机。学业上分心于诱惑，难以专注于正途。",
        wealth: "财务决策失误或受诱惑冲动消费。合作中利益分配不均引发纠纷，需谨慎审视动机。",
        health: "情绪困扰与关系压力影响身心健康。内在的矛盾消耗能量，需先安顿好自己的心。"
      }
    },
    meaningEn: {
      up: {
        general: "In the Lovers, an angel blesses the couple below, symbolizing love, union, and a meaningful choice. This card speaks of alignment in heart and values, and of a decision that must come from within. True union rests on honesty and harmony, so listen to your deepest longing and choose in a way that stays true to yourself.",
        love: "Love enters a sweet, harmonious phase of mutual feeling and soul connection. Singles may meet a kindred spirit; couples grow closer. A fine time to confess feelings or make a commitment.",
        career: "Collaboration flows well with partners who share your values, sparking creativity. When a key choice arises, follow where your passion lies. Students find like-minded companions or direction.",
        wealth: "A financial choice calls for weighing your options. Joint ventures favor you, provided both sides truly align. Deciding in line with your values is the safer path.",
        health: "Body and mind are in harmony, and good spirits benefit health. Warm relationships are a healing force. Listen to your body when choosing how to live."
      },
      rev: {
        general: "Reversed, the Lovers reveal imbalance in relationships and conflict within. You may be swayed by temptation, or stuck before an important choice, avoiding responsibility. A clash of values casts a shadow over harmony. Face your inner conflict honestly, and do not let a passing infatuation lead you to a decision that betrays your heart.",
        love: "Cracks appear through poor communication or the temptation of a third party. Clashing values spark conflict, or avoidance of commitment stalls the bond; resolve it with honesty.",
        career: "Partners' visions diverge and the team falls out of sync. Wavering before a choice makes you miss the moment. Students are distracted by temptation and drift from the right path.",
        wealth: "Financial missteps or impulse spending driven by temptation. Uneven splits in a partnership spark disputes; examine motives carefully.",
        health: "Emotional strain and relationship stress affect well-being. Inner conflict drains your energy, so settle your own heart first."
      }
    }
  },
  {
    id: 7,
    name: "战车",
    nameEn: "The Chariot",
    arcana: "major",
    suit: null,
    number: 7,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/major-07.jpg",
    keywords: { up: ["胜利", "意志", "前进", "掌控"], rev: ["失控", "受阻", "方向迷失", "冲动"] },
    keywordsEn: { up: ["Victory", "Willpower", "Drive", "Control"], rev: ["Loss of control", "Obstacles", "Lost direction", "Aggression"] },
    meaning: {
      up: {
        general: "战车上的驭者驾驭黑白双狮，象征以坚定意志驾驭对立的力量，勇往直前迈向胜利。此牌代表凭借决心、自律与专注克服障碍，掌控局面、达成目标。前方虽有挑战，但只要你紧握方向、坚定信念，胜利终将属于你。",
        love: "以主动积极的姿态赢得爱情，克服阻碍后关系更进一步。适合勇敢表白或推动关系向前。异地或克服考验的恋情终成正果。",
        career: "凭借强大的执行力与决心达成目标，事业高歌猛进。适合争取晋升、拿下项目。学业上目标明确、全力冲刺，成绩突出。",
        wealth: "财运随行动力提升而上扬，主动进取能有斩获。适合把握机会果断出手，但需保持理性掌控，切勿冲动。",
        health: "精力旺盛，意志力助你战胜病痛。适合有目标的锻炼计划。注意别过度逞强，身心也需要驾驭与调节。"
      },
      rev: {
        general: "逆位战车暗示失去掌控与方向。你或许被情绪与冲动裹挟，横冲直撞却偏离目标，或遭遇阻碍而进退失据。对立的力量拉扯着你，难以协调。请稳住心神，重新厘清方向，用自律取代蛮力，才能重掌局面。",
        love: "关系失去方向或节奏，一方过于强势导致失衡。冲动与固执引发争执，或因阻力太大而停滞不前。",
        career: "计划受阻、进展停滞，或因急躁莽撞而失误。缺乏明确目标令人迷失。学业上心浮气躁，难以持续专注。",
        wealth: "财务失控，冲动决策带来损失。缺乏规划与自制，钱财如脱缰之马。需重新掌握节奏与方向。",
        health: "压力与情绪失控影响身心，易疲惫或急躁上火。过度透支需要及时踩下刹车，重建平衡。"
      }
    },
    meaningEn: {
      up: {
        general: "The charioteer reins two sphinxes of black and white, symbolizing the will that masters opposing forces and drives forward to victory. This card is about overcoming obstacles through determination, discipline, and focus, taking command and reaching your goal. Challenges lie ahead, but hold your direction and keep faith, and victory will be yours.",
        love: "You win love through bold, active pursuit, and the bond deepens once obstacles are cleared. A good time to confess or push things forward. Long-distance or hard-tested romances reach fruition.",
        career: "Powerful execution and resolve carry you to your goals as your career surges. A strong time to seek promotion or land a project. Focused students who go all-out excel.",
        wealth: "Finances rise with your momentum, and bold initiative brings gains. Seize chances decisively, but keep rational control and avoid rashness.",
        health: "Energy runs high, and willpower helps you overcome illness. Goal-driven training suits you. Just do not overexert; body and mind also need steering and pacing."
      },
      rev: {
        general: "Reversed, the Chariot signals lost control and lost direction. You may be swept up by emotion and impulse, charging ahead yet veering off target, or blocked and unable to advance or retreat. Opposing forces pull at you and refuse to align. Steady your mind, clarify your direction anew, and replace brute force with discipline to regain command.",
        love: "The relationship loses direction or rhythm as one partner grows too forceful, tipping the balance. Impulse and stubbornness spark quarrels, or heavy resistance stalls progress.",
        career: "Plans stall or falter, or haste and recklessness cause mistakes. Without a clear goal you drift. Students feel restless and struggle to sustain focus.",
        wealth: "Finances slip out of control as impulsive decisions bring losses. Lacking planning and restraint, money runs off like an unbridled horse. Reclaim your pace and direction.",
        health: "Stress and runaway emotion affect body and mind, bringing fatigue or flare-ups. Overexertion calls for hitting the brakes in time and rebuilding balance."
      }
    }
  },
  {
    id: 8,
    name: "力量",
    nameEn: "Strength",
    arcana: "major",
    suit: null,
    number: 8,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-08.jpg",
    keywords: { up: ["勇气", "内在力量", "耐心", "柔韧"], rev: ["软弱", "自我怀疑", "失控", "退缩"] },
    keywordsEn: { up: ["Courage", "Inner strength", "Patience", "Compassion"], rev: ["Weakness", "Self-doubt", "Loss of control", "Withdrawal"] },
    meaning: {
      up: {
        general: "少女温柔地驯服雄狮，象征以柔克刚的内在力量。此牌代表的不是蛮力，而是勇气、耐心与自我掌控，用爱与坚定驯服内心的欲望与恐惧。真正的强大源于温柔而坚韧的心，相信自己的力量，从容面对一切挑战。",
        love: "以包容与耐心经营感情，化解冲突。真诚而温柔的力量能打动人心，修复裂痕。关系在相互理解中愈发坚固。",
        career: "凭借坚韧与自信克服困难，以柔和而坚定的方式赢得信任。面对压力保持冷静。学业上需要耐心与毅力，终将厚积薄发。",
        wealth: "以稳健耐心的态度对待财务，不为一时波动所动。凭借毅力持续积累，克制冲动消费，稳步向好。",
        health: "内在能量充沛，恢复力强。以温柔而坚定的意志战胜病痛。保持平和心态，身心的韧性是最好的良药。"
      },
      rev: {
        general: "逆位力量透露出内在的虚弱与失衡。你或许被恐惧、自我怀疑或情绪所支配，感到力不从心、意志消沉。也可能过度压抑或以蛮力强撑。请重新与内在的勇气连结，温柔地接纳自己的脆弱，从自我关怀中重拾力量。",
        love: "关系中缺乏耐心与包容，情绪化引发摩擦。自卑或过度忍让让人失去自我，需重建内心的笃定与自尊。",
        career: "面对压力信心不足，容易退缩放弃。情绪管理失当影响表现。学业上意志薄弱、半途而废，需重振动力。",
        wealth: "财务上缺乏定力，易受情绪与他人影响而冲动。也可能因过度焦虑而畏首畏尾，错失机会。",
        health: "身心能量低落，抵抗力下降。情绪耗损与自我压抑影响健康，需要休息与自我疗愈，重拾内在力量。"
      }
    },
    meaningEn: {
      up: {
        general: "A maiden gently tames the lion, symbolizing the inner strength that overcomes force with softness. This card is not about brute power but courage, patience, and self-mastery, taming inner desire and fear through love and steadiness. True strength flows from a tender yet resilient heart; trust your own power and meet every challenge with calm.",
        love: "Nurture love with acceptance and patience to dissolve conflict. Sincere, gentle strength touches the heart and mends rifts. The bond grows firmer through mutual understanding.",
        career: "Resilience and quiet confidence carry you past difficulty, winning trust through a soft yet firm manner. Stay calm under pressure. Students need patience and grit, and steady effort pays off in time.",
        wealth: "Approach money with steady patience, unmoved by short-term swings. Persistence builds wealth; curb impulse spending and progress steadily.",
        health: "Inner energy is strong, with good recovery. A gentle yet firm will helps you overcome illness. Keep a calm mind; resilience of body and spirit is the finest remedy."
      },
      rev: {
        general: "Reversed, Strength reveals inner weakness and imbalance. You may be ruled by fear, self-doubt, or emotion, feeling powerless and low in spirit. Or you may be over-suppressing feelings, or forcing your way through by sheer force. Reconnect with your inner courage, gently accept your own vulnerability, and recover strength through self-compassion.",
        love: "Impatience and intolerance breed friction, and moodiness stirs conflict. Low self-worth or excessive self-sacrifice erodes your sense of self; rebuild inner steadiness and self-respect.",
        career: "Confidence falters under pressure and you are prone to retreat or give up. Poor emotional management hurts performance. Students with weak resolve quit halfway and must reignite their drive.",
        wealth: "You lack steadiness with money, easily swayed to impulse by emotion or others. Or anxiety makes you overly timid, and you miss opportunities.",
        health: "Energy of body and mind runs low and resistance drops. Emotional drain and self-repression harm health; rest and self-healing restore your inner strength."
      }
    }
  },
  {
    id: 9,
    name: "隐者",
    nameEn: "The Hermit",
    arcana: "major",
    suit: null,
    number: 9,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/major-09.jpg",
    keywords: { up: ["内省", "智慧", "指引", "独处"], rev: ["孤僻", "逃避", "封闭", "迷失"] },
    keywordsEn: { up: ["Introspection", "Wisdom", "Guidance", "Solitude"], rev: ["Isolation", "Avoidance", "Withdrawal", "Lost bearings"] },
    meaning: {
      up: {
        general: "隐者手提明灯独立山巅，象征向内探寻的智慧与孤独中的觉悟。此牌代表退居内心、沉思与自省，在独处中寻找真理的光亮。这是一段需要放慢脚步、聆听灵魂的时期。答案不在外界的喧嚣，而在你静默的内心深处。",
        love: "感情进入沉淀期，需要独处思考真正的需求。不宜急于推进，先厘清内心。也可能与人保持距离，或遇到成熟内敛之人。",
        career: "适合专注钻研、独立作业，沉潜积累实力。寻求内在的方向比盲目行动更重要。学业上适合深度自学与静心研究。",
        wealth: "财务宜低调守成，独立审慎地做决定。此时不宜张扬或冒进，静观其变、深思熟虑为上。",
        health: "身心需要静养与独处，远离喧嚣有助恢复。冥想、独处与内省能疗愈心灵。倾听身体真正的需要。"
      },
      rev: {
        general: "逆位隐者暗示过度的孤立与逃避。你或许把自己封闭起来，拒绝他人靠近，陷入孤独的深渊，或因逃避现实而迷失方向。独处本是智慧，但过度则成枷锁。请适度向外敞开，重新与世界连结，别让沉默变成孤绝。",
        love: "过度封闭自我，害怕亲密而拒人千里。孤独感加深或因逃避沟通导致疏离，需勇敢走出内心的高墙。",
        career: "过度独来独往，与团队脱节；或钻牛角尖、迷失方向。逃避现实问题使进展停滞。学业上闭门造车，缺乏交流。",
        wealth: "财务上过度保守封闭，错失良机；或因孤立无援而缺乏正确建议，陷入迷茫。",
        health: "长期孤独与自我封闭影响心理健康，易生抑郁。需要走出去、寻求陪伴与支持，重建与外界的连结。"
      }
    },
    meaningEn: {
      up: {
        general: "The Hermit stands alone on a peak, lantern raised, symbolizing the wisdom found within and the awakening born of solitude. This card is about withdrawing inward for contemplation and self-examination, seeking the light of truth in quiet. It is a time to slow down and listen to the soul. The answer lies not in the noise outside but deep in your silent core.",
        love: "Love enters a period of settling, calling for solitude to reflect on what you truly need. Do not rush things; clarify your heart first. You may keep some distance, or meet someone mature and reserved.",
        career: "Focused study and independent work suit you, quietly building your strength. Seeking inner direction matters more than blind action. Students do well with deep self-study and reflection.",
        wealth: "Keep finances low-key and steady, deciding independently and with care. This is no time for display or bold moves; watchful patience and deep thought serve best.",
        health: "Body and mind need quiet rest and solitude, and stepping away from the clamor aids recovery. Meditation, time alone, and reflection heal the spirit. Listen to what the body truly needs."
      },
      rev: {
        general: "Reversed, the Hermit warns of excessive isolation and avoidance. You may have sealed yourself off, refusing others in, sinking into loneliness, or lost your way by fleeing reality. Solitude is wisdom, but taken too far it becomes a cage. Open outward in measure, reconnect with the world, and do not let silence harden into estrangement.",
        love: "You close off too much, fearing intimacy and keeping others at arm's length. Loneliness deepens, or avoiding communication breeds distance; find the courage to step past your inner wall.",
        career: "Too much going it alone leaves you out of step with the team, or you fixate on details and lose your way. Avoiding real problems stalls progress. Students work in a vacuum, lacking exchange.",
        wealth: "Finances handled too conservatively and closed off miss opportunities, or isolation leaves you without sound advice, adrift in confusion.",
        health: "Prolonged loneliness and self-isolation harm mental health and can breed depression. Step out, seek company and support, and rebuild your connection with the world."
      }
    }
  },
  {
    id: 10,
    name: "命运之轮",
    nameEn: "Wheel of Fortune",
    arcana: "major",
    suit: null,
    number: 10,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-10.jpg",
    keywords: { up: ["转机", "命运", "循环", "好运"], rev: ["逆转", "厄运", "停滞", "失控"] },
    keywordsEn: { up: ["Turning point", "Destiny", "Cycles", "Good fortune"], rev: ["Reversal", "Bad luck", "Stagnation", "Loss of control"] },
    meaning: {
      up: {
        general: "命运之轮不停转动，象征人生的起伏循环与不可抗拒的转机。此牌预示时来运转，一个新的周期正在开启，好运降临、局势翻转。把握机遇、顺势而为，因为命运的齿轮正朝有利的方向转动。谨记盛衰有时，以豁达之心接纳变化。",
        love: "感情迎来转机，命中注定的缘分悄然而至。关系进入新阶段，久别重逢或旧情复燃皆有可能。顺其自然，好事将近。",
        career: "事业出现转折与机遇，时机成熟、水到渠成。把握突如其来的好运能一举突破。学业上时运佳，努力得到回报。",
        wealth: "财运上扬，可能有意外之财或投资获利。是把握机会的好时机，但记住盛极必衰，见好就收更明智。",
        health: "健康状况好转，度过低谷迎来复原。顺应身体的自然节律，把握调理的良机，整体趋势向好。"
      },
      rev: {
        general: "逆位命运之轮暗示时运不济与循环的低谷。局势可能朝不利方向逆转，计划受阻、好运消退，让人感到无力掌控。也可能是重蹈覆辙、困在旧有的循环中。请顺应变化、稳住心态，低谷终会过去，从中汲取教训方能破局。",
        love: "感情走下坡或遭遇变故，缘分似乎渐行渐远。可能重复过往的错误模式，需反思并打破恶性循环。",
        career: "计划受挫、时机不利，努力似乎付诸东流。局势动荡难以掌控。学业上遭遇瓶颈，需耐心等待转机。",
        wealth: "财运低迷，投资失利或意外破财。市场变化难测，此时宜保守观望，避免逆势操作扩大损失。",
        health: "健康出现反复或走下坡，旧疾复发。需顺应身体节律、耐心调养，避免在低谷期过度消耗。"
      }
    },
    meaningEn: {
      up: {
        general: "The Wheel of Fortune turns without pause, symbolizing life's rising and falling cycles and the turning points beyond our control. This card foretells a change of fortune, a new cycle opening as luck arrives and circumstances shift. Seize the opening and move with the momentum, for destiny's gears are turning in your favor. Remember that fortunes rise and fall, and meet change with an open heart.",
        love: "Love reaches a turning point as a fated connection quietly arrives. The bond enters a new phase, and reunion or rekindled romance is possible. Let things flow; good news is near.",
        career: "A turning point and opportunity appear, ripe and ready. Seizing a sudden stroke of luck can bring a breakthrough. For students, timing favors you and effort is rewarded.",
        wealth: "Finances rise, with possible windfalls or investment gains. A good time to seize chances, but remember what peaks will fall, so it is wiser to take profit while ahead.",
        health: "Health improves as you pass through the low point into recovery. Move with the body's natural rhythm and seize this good moment to restore yourself; the trend is upward."
      },
      rev: {
        general: "Reversed, the Wheel of Fortune signals ill luck and the trough of the cycle. Circumstances may turn against you, plans stall, and good fortune recedes, leaving you feeling powerless. You may be repeating old patterns, trapped in a familiar loop. Move with change and steady your mind; the low point will pass, and only by drawing the lesson can you break free.",
        love: "Love declines or meets an upset, and the connection seems to drift away. You may repeat old mistakes; reflect and break the vicious cycle.",
        career: "Plans falter and timing is poor, and effort seems wasted. Circumstances are turbulent and hard to control. Students hit a wall and must patiently await a turn.",
        wealth: "Finances sag, with investment losses or unexpected expenses. Markets are unpredictable, so stay conservative and watchful, avoiding moves against the tide that deepen losses.",
        health: "Health wavers or declines, and old ailments return. Move with the body's rhythm and recover with patience, avoiding overexertion during the low phase."
      }
    }
  },
  {
    id: 11,
    name: "正义",
    nameEn: "Justice",
    arcana: "major",
    suit: null,
    number: 11,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/major-11.jpg",
    keywords: { up: ["公正", "平衡", "因果", "责任"], rev: ["不公", "偏颇", "推诿", "失衡"] },
    keywordsEn: { up: ["Justice", "Balance", "Cause and effect", "Accountability"], rev: ["Injustice", "Bias", "Avoidance", "Imbalance"] },
    meaning: {
      up: {
        general: "正义手持天平与利剑，象征公正、真理与因果的裁决。此牌代表事情将得到公平的裁断，善恶终有报应，你也需为自己的选择负责。以理性与诚实面对现实，做出合乎道义的决定。种什么因得什么果，此刻是清算与平衡的时刻。",
        love: "感情讲求平等与坦诚，关系需要公平的付出与回应。适合厘清责任、做出理性的承诺。涉及婚姻或法律事宜将有公正结果。",
        career: "凭实力与诚信获得公正评价，付出终得应有回报。适合处理合约、法律与需要公正判断的事务。学业上一分耕耘一分收获。",
        wealth: "财务往来公平透明，账目清晰。合理规划、诚信经营带来稳定收益。涉及财产分割或诉讼将有公道结果。",
        health: "身心需要恢复平衡，为过往的生活方式承担后果。理性面对健康问题，及时纠偏、恢复规律最为重要。"
      },
      rev: {
        general: "逆位正义揭示不公与失衡。你可能遭遇不公正的对待，或自己逃避责任、拒绝承担后果。真相被扭曲，判断带有偏见。请诚实面对自己的行为，别推诿责任，也别在不公面前沉默。唯有正视因果，才能恢复内心的平衡。",
        love: "关系中付出与回报失衡，一方逃避责任或存在欺瞒。感情缺乏公平，需正视问题，别让不诚实腐蚀信任。",
        career: "遭遇不公待遇或评价偏颇，努力未获应有认可。也可能因推卸责任而招致后果。学业上需警惕作弊或投机的恶果。",
        wealth: "财务纠纷或不公平的交易带来损失。账目不清、逃避债务终将反噬。需以诚信面对，理清财务责任。",
        health: "长期忽视健康的代价开始显现。逃避问题只会加重失衡，需正视身体的警讯，负责任地调整生活。"
      }
    },
    meaningEn: {
      up: {
        general: "Justice holds the scales and the sword, symbolizing fairness, truth, and the judgment of cause and effect. This card foretells a fair verdict, where actions meet their consequences and you must answer for your own choices. Face reality with reason and honesty and decide in line with what is right. As you sow, so shall you reap; this is a time of reckoning and balance.",
        love: "Love calls for equality and honesty, with fair giving and response on both sides. A good time to clarify responsibilities and make a considered commitment. Marriage or legal matters will reach a just outcome.",
        career: "Merit and integrity earn you a fair assessment, and effort receives its due. Contracts, legal matters, and decisions requiring impartial judgment favor you. For students, you reap what you sow.",
        wealth: "Financial dealings are fair and transparent, with clear accounts. Sound planning and honest practice bring steady returns. Property division or litigation reaches a fair result.",
        health: "Body and mind need to regain balance, answering for past habits. Face health issues rationally; timely correction and a return to routine matter most."
      },
      rev: {
        general: "Reversed, Justice reveals unfairness and imbalance. You may face unjust treatment, or you may be dodging responsibility and refusing to bear the consequences. Truth is distorted and judgment is biased. Face your own actions honestly, do not shift the blame, and do not stay silent before injustice. Only by facing cause and effect can inner balance be restored.",
        love: "Giving and receiving fall out of balance, with one partner evading responsibility or hiding the truth. The relationship lacks fairness; face the issue and do not let dishonesty erode trust.",
        career: "You meet unfair treatment or biased evaluation, and effort goes unrecognized. Shirking responsibility invites consequences. Students should beware the fallout of cheating or shortcuts.",
        wealth: "Financial disputes or unfair dealings bring losses. Murky accounts and dodged debts eventually rebound. Meet it with integrity and sort out your financial responsibilities.",
        health: "The cost of long-neglected health begins to show. Avoidance only worsens the imbalance; face the body's warnings and adjust your life responsibly."
      }
    }
  },
  {
    id: 12,
    name: "倒吊人",
    nameEn: "The Hanged Man",
    arcana: "major",
    suit: null,
    number: 12,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/major-12.jpg",
    keywords: { up: ["牺牲", "换位思考", "等待", "顿悟"], rev: ["徒劳", "固执", "拖延", "逃避牺牲"] },
    keywordsEn: { up: ["Sacrifice", "New perspective", "Surrender", "Insight"], rev: ["Stalling", "Stubbornness", "Delay", "Pointless sacrifice"] },
    meaning: {
      up: {
        general: "倒吊人倒悬于树，神情安详，象征以全新视角看待世界的智慧。此牌代表暂停、放下与主动的牺牲，在等待与静止中获得顿悟。有时停下脚步、转换观点，反而能看清真相。接受当下的停滞，臣服于过程，转机将在放手之后浮现。",
        love: "感情进入停滞或等待期，需要换位思考、体谅对方。为爱付出与包容能化解僵局。放下执念，顺其自然反而柳暗花明。",
        career: "计划暂时搁置，需耐心等待时机。换个角度思考问题能带来突破。适当的牺牲与付出为长远铺路。学业上需沉淀与转念。",
        wealth: "财务处于停滞期，不宜强求或急进。有时暂时的付出或放弃是为了更大的收获，耐心等待更好的时机。",
        health: "身心需要彻底的休息与放松，暂停忙碌。以平和的心态接纳现状，静养与转念有助身心的疗愈与更新。"
      },
      rev: {
        general: "逆位倒吊人暗示无谓的牺牲与固执的停滞。你或许在做无意义的等待与付出，或抗拒必要的改变、逃避该有的放下。视角僵化，让自己困在原地。请审视这份牺牲是否值得，别用拖延掩饰恐惧，该行动时就要果断挣脱。",
        love: "为感情做出的牺牲得不到回应，陷入单方面的付出。固执己见、不愿改变让关系停滞，需重新评估值不值得。",
        career: "计划长期停滞、进退两难，无谓的等待消磨斗志。抗拒改变使人错失良机。学业上钻牛角尖，难以转念突破。",
        wealth: "财务陷入僵局，犹豫不决错失时机。不切实际的坚持或逃避决策带来损失，需要果断调整。",
        health: "长期消耗却不见改善，忽视了必要的调整。逃避面对健康问题只会拖延康复，需主动改变、及时行动。"
      }
    },
    meaningEn: {
      up: {
        general: "The Hanged Man hangs serenely from the tree, symbolizing the wisdom of seeing the world from an entirely new angle. This card is about pausing, letting go, and willing sacrifice, gaining insight through waiting and stillness. Sometimes stopping and shifting your view reveals the truth. Accept the present standstill, surrender to the process, and the turning point will surface once you release your grip.",
        love: "Love enters a pause or waiting period, calling for empathy and seeing things from your partner's view. Giving and patience break the deadlock. Release your fixations, and letting things be brings a brighter turn.",
        career: "Plans are set aside for now, calling for patience with timing. Looking at problems from a new angle brings breakthroughs. A fitting sacrifice paves the long road. Students need to settle and shift their thinking.",
        wealth: "Finances are at a standstill; do not force matters or rush. Sometimes a temporary giving-up serves a greater gain, so wait patiently for a better moment.",
        health: "Body and mind need complete rest and release, a pause from the rush. Accept the present with a calm heart; quiet recovery and a shift in outlook heal and renew."
      },
      rev: {
        general: "Reversed, the Hanged Man signals pointless sacrifice and stubborn stagnation. You may be waiting and giving to no end, or resisting necessary change and avoiding the letting-go that is due. A rigid perspective keeps you stuck. Weigh whether this sacrifice is worth it, do not let delay mask fear, and when it is time to act, break free decisively.",
        love: "Sacrifices made for love go unanswered, leaving you in one-sided giving. Stubbornness and refusal to change stall the bond; reassess whether it is worth it.",
        career: "Plans stall for the long term and you are caught between advance and retreat as futile waiting saps your drive. Resisting change costs you opportunities. Students fixate and cannot shift to break through.",
        wealth: "Finances reach a deadlock and indecision costs you the moment. Unrealistic persistence or avoided decisions bring losses; adjust decisively.",
        health: "You keep depleting yourself with no improvement, neglecting needed change. Avoiding health issues only delays recovery; act on your own initiative and in time."
      }
    }
  },
  {
    id: 13,
    name: "死神",
    nameEn: "Death",
    arcana: "major",
    suit: null,
    number: 13,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/major-13.jpg",
    keywords: { up: ["结束", "转变", "重生", "放下"], rev: ["抗拒改变", "停滞", "恐惧", "拖延"] },
    keywordsEn: { up: ["Endings", "Transformation", "Rebirth", "Letting go"], rev: ["Resistance to change", "Stagnation", "Fear", "Clinging"] },
    meaning: {
      up: {
        general: "死神骑马而来，象征旧事物的终结与新生命的开始。此牌并非字面的死亡，而是深刻的转变与蜕变，一个阶段的结束，为重生腾出空间。放下已经不再适合的人事物，勇敢告别过去。唯有经历终结，才能迎来焕然一新的自己。",
        love: "一段关系或旧有模式走向终结，为新的开始让路。放下执念才能迎来蜕变。有伴者关系将脱胎换骨，单身者告别过去。",
        career: "旧的工作或阶段结束，转型与变革势在必行。放下不适合的路，才能开启新篇。学业上需彻底改变方法，破旧立新。",
        wealth: "财务模式面临重大调整，旧的方式已不再奏效。及时止损、断舍离，为新的财务格局腾出空间。",
        health: "身心经历重要的转变期，旧习惯需要彻底革除。这是重生与康复的契机，放下消耗你的一切，迎接新生。"
      },
      rev: {
        general: "逆位死神揭示对改变的抗拒与停滞。你或许紧抓着早该放下的过去不肯松手，恐惧转变而困在原地，让该结束的迟迟不能结束。这种停滞带来痛苦的煎熬。请正视终结的必然，唯有勇敢放手，蜕变的契机才会真正到来。",
        love: "明知关系已尽却不愿放手，痛苦地拖延着结局。抗拒改变让彼此都受困，需要勇气面对告别与新生。",
        career: "抗拒必要的转型，死守过时的方式。停滞不前让局面恶化。学业上固守旧法、拒绝革新，难有起色。",
        wealth: "不愿面对财务的现实，拖延止损导致损失扩大。抱守失效的策略，需要果断放下、重新出发。",
        health: "抗拒改变不良习惯，恐惧面对健康问题。拖延只会加重困境，需正视并接受必要的转变。"
      }
    },
    meaningEn: {
      up: {
        general: "Death rides forth, symbolizing the end of the old and the birth of the new. This card is not literal death but profound transformation, the close of one chapter that clears space for rebirth. Release the people and things that no longer fit, and bid the past a brave farewell. Only by passing through an ending can you meet a wholly renewed self.",
        love: "A relationship or old pattern comes to an end, making way for a new beginning. Only by releasing attachment can transformation come. Couples' bonds are remade; singles bid the past goodbye.",
        career: "An old job or phase ends, and transformation is unavoidable. Only by leaving the unfit path can a new chapter open. Students must overhaul their methods, clearing out the old for the new.",
        wealth: "Your financial approach faces major change, as the old ways no longer work. Cut losses in time and declutter to make room for a new financial order.",
        health: "Body and mind pass through a pivotal transition, and old habits need thorough clearing. This is a chance for rebirth and recovery; release all that drains you and welcome renewal."
      },
      rev: {
        general: "Reversed, Death reveals resistance to change and stagnation. You may be clutching a past that should have been released, gripped by fear of transformation and stuck in place, letting what should end drag on. This stalling brings painful torment. Face the inevitability of the ending; only by letting go bravely will the chance for transformation truly arrive.",
        love: "You know the relationship is over yet will not let go, painfully drawing out the end. Resisting change traps you both; find the courage to face farewell and renewal.",
        career: "Resisting necessary transformation, you cling to outdated ways. Standing still lets the situation worsen. Students who hold to old methods and refuse to innovate make little progress.",
        wealth: "Unwilling to face financial reality, you delay cutting losses and they widen. Clinging to failed strategies, you need to let go decisively and start again.",
        health: "You resist changing bad habits and fear facing health issues. Delay only deepens the difficulty; face and accept the change that is needed."
      }
    }
  },
  {
    id: 14,
    name: "节制",
    nameEn: "Temperance",
    arcana: "major",
    suit: null,
    number: 14,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-14.jpg",
    keywords: { up: ["平衡", "调和", "耐心", "中庸"], rev: ["失衡", "过度", "冲突", "焦躁"] },
    keywordsEn: { up: ["Balance", "Moderation", "Patience", "Synthesis"], rev: ["Imbalance", "Excess", "Conflict", "Restlessness"] },
    meaning: {
      up: {
        general: "天使在两杯之间调和圣水，象征平衡、节制与耐心的艺术。此牌代表以中庸之道调和对立，在极端之间找到和谐的中点。凡事讲求适度与耐心，从容不迫地整合资源与情绪。稳定而持续的调和，将带你走向内在的平静与圆融。",
        love: "感情和谐融洽，双方懂得包容与调和，关系稳定而长久。以耐心与温和经营，能化解分歧。适合细水长流的相处。",
        career: "团队协作顺畅，善于调和各方、平衡资源。以耐心稳步推进，事情自然水到渠成。学业上讲求平衡与循序渐进。",
        wealth: "财务管理得当，收支平衡、稳健积累。以耐心和节制的态度理财，避免极端，稳步实现目标。",
        health: "身心平衡，作息规律，恢复良好。节制饮食与适度运动是养生之道。保持平和心态，整体状态和谐健康。"
      },
      rev: {
        general: "逆位节制暗示失衡与过度。你或许在某方面走了极端，挥霍、放纵或急躁失控，失去了内在的和谐。资源与情绪难以协调，冲突与焦躁四起。请重新校准生活的节奏，回归适度与耐心，别让失衡持续侵蚀你的平静。",
        love: "关系失衡，一方付出过多或彼此需求难以调和。缺乏耐心引发争执，或因过度纵容而失去分寸，需重建和谐。",
        career: "工作节奏失调，过劳或懈怠走向极端。团队协作不畅、冲突频生。学业上急于求成或严重拖延，难以持续。",
        wealth: "财务失衡，过度消费或投机导致收支失控。缺乏节制与规划，需重新找回理性与平衡。",
        health: "生活失去节制，饮食作息紊乱影响健康。压力与焦躁令身心失调，需要重建规律、回归中道。"
      }
    },
    meaningEn: {
      up: {
        general: "The angel blends water between two cups, symbolizing the art of balance, moderation, and patience. This card is about reconciling opposites through the middle way, finding the harmonious midpoint between extremes. Do all things with measure and patience, calmly integrating resources and emotions. Steady, sustained blending leads you toward inner peace and wholeness.",
        love: "Love is harmonious and easy, with both partners practicing acceptance and give-and-take, and the bond is steady and lasting. Patience and gentleness dissolve differences. This suits a slow, enduring relationship.",
        career: "Teamwork flows smoothly, and you skillfully harmonize all sides and balance resources. Advance patiently and steadily, and things fall into place. Students thrive on balance and gradual progress.",
        wealth: "Money is well managed, with balanced income and outgo and steady accumulation. Handle finances with patience and moderation, avoid extremes, and reach your goals step by step.",
        health: "Body and mind are balanced, routines regular, and recovery good. Moderate eating and gentle exercise are the way of wellness. Keep a calm mind, and your overall state stays harmonious."
      },
      rev: {
        general: "Reversed, Temperance signals imbalance and excess. You may have gone to an extreme somewhere, in overspending, indulgence, or restless loss of control, and lost your inner harmony. Resources and emotions refuse to align, and conflict and agitation break out. Recalibrate the pace of your life, return to moderation and patience, and do not let imbalance keep eroding your peace.",
        love: "The relationship tips off balance as one gives too much or needs cannot be reconciled. Impatience sparks quarrels, or over-indulgence loses all measure; rebuild harmony.",
        career: "Your work rhythm is off, swinging between overwork and slacking. Teamwork is rough and conflicts arise. Students who rush or badly procrastinate cannot sustain their pace.",
        wealth: "Finances fall out of balance as overspending or speculation throws income and outgo into disorder. Lacking moderation and planning, you must recover reason and balance.",
        health: "Life loses moderation as erratic eating and sleep harm health. Stress and agitation unsettle body and mind; rebuild routine and return to the middle way."
      }
    }
  },
  {
    id: 15,
    name: "恶魔",
    nameEn: "The Devil",
    arcana: "major",
    suit: null,
    number: 15,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/major-15.jpg",
    keywords: { up: ["束缚", "欲望", "执着", "诱惑"], rev: ["解脱", "觉醒", "挣脱", "释放"] },
    keywordsEn: { up: ["Bondage", "Desire", "Attachment", "Temptation"], rev: ["Release", "Awakening", "Breaking free", "Liberation"] },
    meaning: {
      up: {
        general: "恶魔高踞王座，脚下的人被松垮的锁链拴住，象征欲望、执着与自我设限的枷锁。此牌揭示你可能受困于物欲、成瘾或不健康的关系中，被诱惑与恐惧所支配。然而那锁链其实松动，束缚往往源于内心。看清真相，你便握有挣脱的钥匙。",
        love: "关系中存在强烈的吸引与欲望，也可能夹杂占有、依赖或不健康的纠缠。激情之下需警惕控制与执念，看清是爱还是瘾。",
        career: "或被利益与欲望捆绑，困在不满意的工作中难以脱身。警惕为达目的不择手段。学业上易被诱惑分心，或陷入压力的束缚。",
        wealth: "物欲膨胀，容易过度消费或贪婪冒进。警惕被金钱奴役、深陷债务或投机的诱惑，别让欲望蒙蔽理智。",
        health: "警惕成瘾性的不良习惯，如烟酒、暴食或熬夜等，正在悄悄消耗健康。身心被欲望束缚，需要觉察与自律。"
      },
      rev: {
        general: "逆位恶魔带来解脱与觉醒的曙光。你开始意识到束缚自己的枷锁，鼓起勇气挣脱欲望、成瘾或有害关系的控制。这是重获自由的转折，直面内心的阴影并将其释放。挣脱锁链的过程或许艰难，但自由与清明正在前方等你。",
        love: "从不健康的关系或执念中觉醒、解脱，重获自由与自尊。也可能是斩断孽缘、走出情感的泥沼，迎接更健康的爱。",
        career: "摆脱令人窒息的工作或利益的捆绑，重新找回方向与热情。勇于打破束缚将迎来新生。学业上挣脱惰性与诱惑。",
        wealth: "开始正视并摆脱财务的困境，戒除挥霍或投机的恶习。逐步走出债务与欲望的深渊，重建健康的金钱观。",
        health: "下定决心戒除成瘾与不良习惯，重掌身心的主导权。摆脱消耗你的一切，健康正逐步回归。"
      }
    },
    meaningEn: {
      up: {
        general: "The Devil looms over his throne while the figures below are bound by loose chains, symbolizing desire, attachment, and the shackles we place on ourselves. This card reveals that you may be trapped by materialism, addiction, or an unhealthy relationship, ruled by temptation and fear. Yet the chains are loose, for bondage often springs from within. See the truth clearly and you hold the key to break free.",
        love: "Powerful attraction and desire run through the bond, perhaps mixed with possession, dependence, or unhealthy entanglement. Beneath the passion, beware control and obsession, and see whether it is love or craving.",
        career: "You may be bound by profit and desire, stuck in unsatisfying work and unable to leave. Beware doing whatever it takes to get ahead. Students are easily distracted by temptation or trapped by pressure.",
        wealth: "Material craving swells, and overspending or greedy risk-taking tempts you. Beware being enslaved by money, sinking into debt, or the lure of speculation; do not let desire cloud reason.",
        health: "Beware addictive bad habits, such as tobacco, alcohol, overeating, or staying up late, quietly draining your health. Body and mind are bound by craving; awareness and self-discipline are needed."
      },
      rev: {
        general: "Reversed, the Devil brings the dawn of release and awakening. You begin to see the shackles binding you and find the courage to break free of desire, addiction, or a harmful bond's control. This is a turning point back to freedom, facing your inner shadow and releasing it. Breaking the chains may be hard, but freedom and clarity await you ahead.",
        love: "You awaken and break free from an unhealthy bond or obsession, reclaiming freedom and self-respect. Or you cut a toxic tie, climb out of an emotional mire, and open to healthier love.",
        career: "You escape suffocating work or the grip of profit and rediscover direction and passion. Daring to break the bonds brings new life. Students shake off inertia and temptation.",
        wealth: "You begin to face and escape financial trouble, quitting habits of overspending or speculation. Step by step you climb out of the pit of debt and craving and rebuild a healthy view of money.",
        health: "You resolve to quit addictions and bad habits and reclaim command of body and mind. As you shed all that drains you, health gradually returns."
      }
    }
  },
  {
    id: 16,
    name: "高塔",
    nameEn: "The Tower",
    arcana: "major",
    suit: null,
    number: 16,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-16.jpg",
    keywords: { up: ["剧变", "崩塌", "觉醒", "释放"], rev: ["逃避剧变", "延迟", "内在崩溃", "余震"] },
    keywordsEn: { up: ["Upheaval", "Collapse", "Sudden awakening", "Release"], rev: ["Averted disaster", "Delay", "Inner turmoil", "Aftermath"] },
    meaning: {
      up: {
        general: "闪电击中高塔，塔顶崩裂、人影坠落，象征突如其来的剧变与旧结构的瓦解。此牌预示措手不及的动荡，虚假的根基被彻底摧毁。虽然过程震撼而痛苦，却也是打破幻象、迎来觉醒的契机。废墟之上，将建起更真实、更坚固的新生。",
        love: "关系可能遭遇突发的冲击或真相的揭露，动摇原有的基础。虽然痛苦，却揭开了被掩盖的问题，为真正的重建创造机会。",
        career: "事业遭遇突变、计划崩塌或职位动荡，措手不及。这是打破旧格局的强制转折，废墟之中孕育新机。学业上遭遇重大挫折。",
        wealth: "财务可能遭遇突发的损失或危机，原有的规划被打乱。这是重新审视根基的警钟，及时应对方能转危为安。",
        health: "健康可能突发状况，敲响警钟。身体的剧烈反应迫使你正视长期忽视的问题，是彻底调整的转折点。"
      },
      rev: {
        general: "逆位高塔暗示对剧变的抗拒或延迟的崩塌。你或许在竭力回避一场必要的瓦解，勉强维持摇摇欲坠的现状，让危机暗中累积。也可能是灾难已过、正处于余震与重建之中。请正视问题的根源，与其苟延残喘，不如主动破而后立。",
        love: "勉强维系着早有裂痕的关系，回避正视深层的问题。压抑的矛盾迟早爆发，或正从一场剧变的余波中缓慢复原。",
        career: "极力避免必要的变革，让危机潜伏累积。表面平静下暗流汹涌，或正艰难地从动荡后重建。需从根本上解决问题。",
        wealth: "拖延面对财务危机，勉强支撑只会让隐患扩大。也可能刚经历损失、正在恢复元气，需谨慎重整旗鼓。",
        health: "忽视身体累积的警讯，逃避必要的检查与调整。内在的失衡悄然加剧，需及时正视，别等崩溃才后悔。"
      }
    },
    meaningEn: {
      up: {
        general: "Lightning strikes the Tower, its crown splitting and figures falling, symbolizing sudden upheaval and the collapse of old structures. This card foretells shock and turmoil, as a false foundation is utterly destroyed. Though the process is jarring and painful, it is also a chance to shatter illusion and awaken. Upon the ruins, a truer and stronger life will be built.",
        love: "The relationship may face a sudden shock or a revealed truth that shakes its foundation. Painful as it is, it exposes hidden problems and opens the way to genuine rebuilding.",
        career: "Your work meets sudden upheaval, collapsed plans, or job instability that catches you off guard. This is a forced break with the old order, and new chances stir in the rubble. Students face a major setback.",
        wealth: "Finances may meet sudden loss or crisis that upends your plans. It is an alarm bell to re-examine your foundation; timely response turns danger into safety.",
        health: "Health may flare up suddenly, sounding an alarm. The body's sharp reaction forces you to face long-ignored problems, a turning point for thorough change."
      },
      rev: {
        general: "Reversed, the Tower signals resistance to upheaval or a delayed collapse. You may be straining to avoid a necessary breakdown, propping up a crumbling status quo and letting the crisis build in secret. Or the disaster has passed and you are amid the aftershocks and rebuilding. Face the root of the problem; rather than cling on, choose to break and then rebuild.",
        love: "You force a long-cracked relationship to hold, avoiding its deeper problems. Suppressed conflict will erupt sooner or later, or you are slowly recovering from the aftermath of an upheaval.",
        career: "Straining to avoid needed change, you let the crisis lurk and grow. Undercurrents churn beneath a calm surface, or you are painfully rebuilding after turmoil. Solve the problem at its root.",
        wealth: "Delaying a financial crisis, you prop things up and only widen the hidden danger. Or you have just weathered a loss and are recovering; regroup with care.",
        health: "Ignoring the body's mounting warnings, you avoid needed check-ups and adjustments. The inner imbalance quietly worsens; face it in time and do not wait for collapse to regret it."
      }
    }
  },
  {
    id: 17,
    name: "星星",
    nameEn: "The Star",
    arcana: "major",
    suit: null,
    number: 17,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/major-17.jpg",
    keywords: { up: ["希望", "疗愈", "灵感", "信念"], rev: ["失望", "怀疑", "枯竭", "迷茫"] },
    keywordsEn: { up: ["Hope", "Healing", "Inspiration", "Faith"], rev: ["Disappointment", "Doubt", "Depletion", "Disillusion"] },
    meaning: {
      up: {
        general: "星空下少女将圣水倾注于大地与池塘，象征希望、疗愈与心灵的宁静。历经高塔的动荡之后，此牌带来温柔的抚慰与重生的信念。宇宙正在指引你，保持信心与开放，灵感与好运将悄然降临。这是身心疗愈、重拾希望的美好时刻。",
        love: "感情充满希望与真诚，心灵得到疗愈。以坦诚与信任经营，关系温暖而美好。单身者将迎来令人怀抱憧憬的缘分。",
        career: "前景光明，灵感与机遇纷至沓来。怀抱信念追求理想，努力终将得到宇宙的回应。学业上思路开阔，充满灵感与动力。",
        wealth: "财运回暖，前景乐观。怀抱希望稳步前行，机会正在酝酿。适合朝理想的方向投资未来，好运将至。",
        health: "身心得到疗愈与更新，逐渐恢复元气。保持乐观与宁静的心境，是最好的良药。整体状态趋向平静与康复。"
      },
      rev: {
        general: "逆位星星透露出希望的黯淡与内在的枯竭。你或许陷入失望、怀疑与迷茫，对未来失去信心，灵感也仿佛枯竭。心灵疲惫，看不清方向。请给自己时间疗愈，重新与内在的光连结。乌云终会散去，别让一时的低落遮蔽了希望的星光。",
        love: "对感情失去信心，陷入失望或不安全感。心灵疲惫、缺乏憧憬，或因过往创伤难以敞开。需要时间疗愈与重建信任。",
        career: "对前景感到迷茫与灰心，灵感枯竭、动力不足。理想似乎遥不可及。学业上信心受挫，需重新找回热情与方向。",
        wealth: "财务前景不明，缺乏信心与规划。悲观情绪影响判断，或因过度理想而不切实际，需回归务实与耐心。",
        health: "身心疲惫、能量低落，恢复缓慢。悲观情绪拖累身体，需要充分休息与心灵的抚慰，慢慢找回生机。"
      }
    },
    meaningEn: {
      up: {
        general: "Beneath the starlit sky, the maiden pours sacred water onto land and pool, symbolizing hope, healing, and serenity of spirit. After the turmoil of the Tower, this card brings gentle comfort and renewed faith. The universe is guiding you; stay hopeful and open, and inspiration and good fortune will quietly arrive. This is a beautiful time for healing and rediscovering hope.",
        love: "Love is full of hope and sincerity, and the heart is healed. Nurtured with honesty and trust, the bond is warm and lovely. Singles may meet a connection worth dreaming of.",
        career: "The outlook is bright, with inspiration and opportunity streaming in. Pursue your ideals with faith, and your effort will meet the universe's answer. Students think expansively, full of inspiration and drive.",
        wealth: "Finances warm up and the outlook is bright. Move steadily with hope, as opportunities take shape. A good time to invest in a future aligned with your ideals; good luck is coming.",
        health: "Body and mind are healed and renewed, and vitality gradually returns. An optimistic, serene state of mind is the finest medicine. Your overall condition trends toward calm and recovery."
      },
      rev: {
        general: "Reversed, the Star reveals dimmed hope and inner depletion. You may be caught in disappointment, doubt, and confusion, losing faith in the future as inspiration seems to run dry. The spirit is weary and the way unclear. Give yourself time to heal and reconnect with your inner light. The clouds will part; do not let a passing low eclipse the starlight of hope.",
        love: "You lose faith in love and sink into disappointment or insecurity. The spirit is weary and dreams are faint, or past wounds make it hard to open up. Time to heal and rebuild trust is needed.",
        career: "You feel lost and discouraged about the outlook, inspiration dry and drive low, and your ideal seems out of reach. Students' confidence is shaken and must rediscover passion and direction.",
        wealth: "The financial outlook is unclear, lacking confidence and planning. Pessimism clouds judgment, or over-idealism grows unrealistic; return to practicality and patience.",
        health: "Body and mind are weary and low in energy, and recovery is slow. Pessimism weighs the body down; ample rest and comfort of spirit slowly restore your vitality."
      }
    }
  },
  {
    id: 18,
    name: "月亮",
    nameEn: "The Moon",
    arcana: "major",
    suit: null,
    number: 18,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/major-18.jpg",
    keywords: { up: ["幻象", "潜意识", "不安", "直觉"], rev: ["拨云见日", "释放恐惧", "真相", "清明"] },
    keywordsEn: { up: ["Illusion", "The subconscious", "Anxiety", "Intuition"], rev: ["Clarity emerging", "Releasing fear", "Truth revealed", "Confusion lifting"] },
    meaning: {
      up: {
        general: "月光下的小径通向未知，犬狼吠月、螯虾出水，象征潜意识、幻象与深层的不安。此牌揭示真相尚被迷雾笼罩，你可能被恐惧、错觉或模糊的直觉所困扰。前路虽不明朗，却是探索内心幽微、直面隐藏情绪的时刻。相信直觉，但需警惕自我欺骗。",
        love: "感情笼罩着朦胧与不确定，可能存在误会、隐瞒或猜疑。内心的不安放大了幻象，需要看清真相，别被表象与情绪迷惑。",
        career: "局势不明朗，暗藏未知的变数与隐忧。凭直觉行事的同时需警惕假象。学业上思绪混乱、方向模糊，需拨开迷雾。",
        wealth: "财务状况扑朔迷离，存在隐藏的风险或信息不透明。此时不宜贸然决策，需谨慎辨别，避免被虚假的机会蒙蔽。",
        health: "身心受潜意识与情绪困扰，易有失眠、焦虑或说不清的不适。压抑的情绪浮现，需正视内心，安抚不安的心绪。"
      },
      rev: {
        general: "逆位月亮预示迷雾的消散与真相的浮现。困扰你的幻象与恐惧正逐渐退去，混乱的局面开始明朗，你终于能看清被掩盖的真相。这是释放焦虑、走出迷惘的转折。相信内在的清明，那些曾让你不安的谜团，即将真相大白。",
        love: "误会渐渐澄清，隐藏的真相浮出水面，感情的迷雾散去。走出猜疑与不安，或看清一段虚幻的关系，回归清明。",
        career: "混乱的局势逐渐明朗，隐藏的问题得以揭露。走出迷惘、看清方向，但也可能真相令人失望。学业上思路渐清。",
        wealth: "财务的模糊地带逐渐清晰，隐藏的风险浮现或被识破。走出盲目，以更清醒的判断重新规划。",
        health: "困扰身心的问题找到根源，焦虑与失眠有所缓解。压抑的情绪得到释放，身心逐渐走出阴霾，趋于清明。"
      }
    },
    meaningEn: {
      up: {
        general: "The moonlit path leads into the unknown, as dog and wolf howl and a crayfish crawls from the water, symbolizing the subconscious, illusion, and deep unease. This card reveals that truth is still veiled in mist, and you may be troubled by fear, delusion, or a hazy intuition. The way is unclear, yet it is a time to explore the depths of the psyche and face hidden emotion. Trust your intuition, but beware self-deception.",
        love: "Love is wrapped in haze and uncertainty, with possible misunderstanding, concealment, or suspicion. Inner unease magnifies illusions; see the truth and do not be fooled by appearances and emotion.",
        career: "The situation is unclear, hiding unknown variables and quiet worries. Act on intuition, but stay alert to false impressions. Students feel muddled with a vague direction and must part the fog.",
        wealth: "Your finances are murky, with hidden risks or opaque information. This is no time for hasty decisions; discern carefully and avoid being fooled by false opportunities.",
        health: "Body and mind are troubled by the subconscious and emotion, prone to insomnia, anxiety, or vague discomfort. Suppressed feelings surface; face your inner world and soothe the restless heart."
      },
      rev: {
        general: "Reversed, the Moon foretells the mist dispersing and the truth emerging. The illusions and fears that troubled you gradually recede, the confusion begins to clear, and you can finally see the truth that was hidden. This is a turning point for releasing anxiety and stepping out of bewilderment. Trust your inner clarity; the riddles that once unsettled you are about to come to light.",
        love: "Misunderstandings clear and hidden truths surface as love's fog lifts. You move past suspicion and unease, or see through an illusory relationship and return to clarity.",
        career: "The muddled situation gradually clears and hidden problems are exposed. You emerge from bewilderment and see your direction, though the truth may disappoint. Students' thinking grows clearer.",
        wealth: "The murky areas of your finances gradually clarify, and hidden risks surface or are seen through. Step out of blindness and re-plan with clearer judgment.",
        health: "The problems troubling body and mind find their root, and anxiety and insomnia ease. Suppressed emotion is released, and body and mind gradually leave the shadows for clarity."
      }
    }
  },
  {
    id: 19,
    name: "太阳",
    nameEn: "The Sun",
    arcana: "major",
    suit: null,
    number: 19,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-19.jpg",
    keywords: { up: ["喜悦", "成功", "活力", "光明"], rev: ["短暂受挫", "过度乐观", "延迟", "阴霾"] },
    keywordsEn: { up: ["Joy", "Success", "Vitality", "Positivity"], rev: ["Temporary setback", "Over-optimism", "Delay", "Clouded joy"] },
    meaning: {
      up: {
        general: "灿烂的太阳下，孩童骑着白马在花园中欢笑，象征喜悦、成功与蓬勃的生命力。此牌是塔罗中最光明的牌之一，预示光明、温暖与圆满的到来。一切都朝好的方向发展，尽情享受当下的幸福与成就，让自信与热情照亮前路。",
        love: "感情阳光灿烂，甜蜜幸福、坦诚而热烈。关系升温、水到渠成，适合结婚或迎接新生命。单身者魅力四射，喜结良缘。",
        career: "事业顺风顺水，成功在望、备受肯定。充满自信与活力，努力开花结果。学业上表现优异、成绩喜人，前途光明。",
        wealth: "财运亨通，收获丰厚、前景乐观。投资顺利、收益可观，是丰收与庆祝的时刻，但仍需保持理性与感恩。",
        health: "身心充满活力，健康状况极佳，恢复迅速。阳光的心态是最好的滋养。适合户外活动，尽情享受生命的能量。"
      },
      rev: {
        general: "逆位太阳暗示光明暂时被遮蔽。喜悦与成功或许有所延迟，你可能感到力不从心，或因过度乐观而忽视现实。快乐蒙上了一层薄云，但太阳仍在。请调整期待、脚踏实地，那份光明并未远离，只是需要多一点耐心去等待云散日出。",
        love: "感情的热度有所降温，或因过度理想化而失望。快乐蒙上阴影，需要真诚沟通，找回彼此间温暖的连结。",
        career: "成功暂时受阻或延迟，热情消退、动力不足。过度自信可能带来疏忽。学业上状态起伏，需调整心态、重振信心。",
        wealth: "财运稍显平淡，收益不如预期或有所延迟。过度乐观易导致误判，需脚踏实地、耐心积累。",
        health: "活力略有下降，或因过度消耗而疲惫。乐观虽好但别忽视身体的警讯，适度休息能让光彩重现。"
      }
    },
    meaningEn: {
      up: {
        general: "Under a radiant sun, a child rides a white horse laughing in the garden, symbolizing joy, success, and abundant life force. One of the brightest cards in the tarot, it foretells light, warmth, and fulfillment. Everything moves in a good direction, so savor the happiness and achievement of the present, and let confidence and warmth light your way.",
        love: "Love is sunlit, sweet, honest, and ardent. The bond warms and ripens naturally, well suited to marriage or welcoming new life. Singles are radiant and magnetic, and happy unions form.",
        career: "Your career sails smoothly, success in sight and widely affirmed. Full of confidence and vigor, your efforts blossom. Students excel with pleasing results and a bright road ahead.",
        wealth: "Finances prosper, with rich gains and a bright outlook. Investments go well and returns are strong; it is a time of harvest and celebration, yet stay rational and grateful.",
        health: "Body and mind brim with vitality, health is excellent, and recovery is swift. A sunny outlook is the finest nourishment. Outdoor activity suits you; enjoy the energy of life to the full."
      },
      rev: {
        general: "Reversed, the Sun suggests light briefly obscured. Joy and success may be delayed, and you may feel not quite up to par, or overlook reality through excess optimism. Happiness is veiled by a thin cloud, but the sun remains. Adjust your expectations and stay grounded; that brightness has not gone far, it just needs a little patience for the clouds to part.",
        love: "The warmth of love cools somewhat, or over-idealizing leads to disappointment. Joy is shadowed; sincere communication is needed to recover the warm connection between you.",
        career: "Success is briefly blocked or delayed, enthusiasm fades, and drive runs low. Overconfidence can bring oversights. Students' state fluctuates; adjust your mindset and rebuild confidence.",
        wealth: "Finances look a bit flat, with returns below expectations or delayed. Over-optimism easily leads to misjudgment; stay grounded and accumulate with patience.",
        health: "Vitality dips slightly, or fatigue sets in from overexertion. Optimism is good, but do not ignore the body's warnings; adequate rest lets your glow return."
      }
    }
  },
  {
    id: 20,
    name: "审判",
    nameEn: "Judgement",
    arcana: "major",
    suit: null,
    number: 20,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/major-20.jpg",
    keywords: { up: ["觉醒", "重生", "召唤", "宽恕"], rev: ["自我怀疑", "逃避", "悔恨", "停滞"] },
    keywordsEn: { up: ["Awakening", "Rebirth", "A calling", "Absolution"], rev: ["Self-doubt", "Avoidance", "Regret", "Stagnation"] },
    meaning: {
      up: {
        general: "天使吹响号角，众人从坟墓中苏醒升起，象征觉醒、审视与灵魂的重生。此牌代表一个重要的转折与召唤，你正对过往进行清算与反思，并聆听内心深处的呼唤。放下悔恨、宽恕自己，回应更高的使命。这是脱胎换骨、迎接新生的关键时刻。",
        love: "感情迎来关键的觉醒与决断，重新审视关系的意义。或有旧情复燃、破镜重圆的契机。放下过往的心结，坦诚面对彼此。",
        career: "事业出现重要的转折与召唤，是重新评估与重生的时刻。过往的努力得到清算与回报。学业上顿悟方向，重新出发。",
        wealth: "财务需要全面的审视与反思，是清算与重新规划的契机。放下过往的失误，做出明智的决断，迎来转机。",
        health: "身心迎来觉醒与康复的转折，是彻底调整的契机。倾听内在的召唤，宽恕并放下过往，迎接焕然一新的自己。"
      },
      rev: {
        general: "逆位审判揭示自我怀疑与逃避。你或许沉溺于过往的悔恨中无法自拔，或对内心的召唤充耳不闻，逃避必要的反省与决断。严苛的自我批判让你停滞不前。请学会宽恕自己，放下沉重的过去，勇敢回应那个渴望重生的内在声音。",
        love: "困在过往的伤痛与悔恨中，难以放下或原谅。逃避面对关系的真相，或因自我怀疑而错失重修旧好的机会。",
        career: "对自己的能力充满怀疑，逃避重要的决断与转变。困于过往的失败，停滞不前。学业上缺乏反省，重蹈覆辙。",
        wealth: "逃避面对财务的问题，沉溺于过往的失误而不敢重新规划。自我怀疑令人错失翻身的良机，需放下包袱。",
        health: "忽视身体的召唤，逃避必要的调整与治疗。悔恨与自责的情绪拖累康复，需要自我宽恕，重新振作。"
      }
    },
    meaningEn: {
      up: {
        general: "The angel sounds the trumpet and the dead rise from their graves, symbolizing awakening, reckoning, and the soul's rebirth. This card marks a pivotal turning point and calling, as you take stock of the past and reflect, listening to the deep call within. Release regret, forgive yourself, and answer a higher purpose. This is the crucial moment of transformation and new life.",
        love: "Love reaches a pivotal awakening and decision, as you reconsider what the bond means. There may be a chance to rekindle old feelings or reconcile. Release past grievances and face each other honestly.",
        career: "An important turning point and calling appear, a time to reassess and be reborn. Past efforts are tallied and rewarded. Students realize their direction and set out anew.",
        wealth: "Finances need a full review and reflection, a chance to take stock and re-plan. Release past mistakes, make wise decisions, and a turn for the better arrives.",
        health: "Body and mind reach a turning point of awakening and recovery, a chance for thorough change. Heed the inner call, forgive and release the past, and welcome a wholly renewed self."
      },
      rev: {
        general: "Reversed, Judgement reveals self-doubt and avoidance. You may be mired in regret over the past, unable to pull free, or deaf to your inner calling, dodging the reflection and decision that are due. Harsh self-criticism keeps you stuck. Learn to forgive yourself, set down the heavy past, and bravely answer the inner voice that longs to be reborn.",
        love: "Trapped in past hurt and regret, you struggle to release or forgive. You avoid facing the truth of the relationship, or self-doubt costs you the chance to reconcile.",
        career: "Full of doubt in your own ability, you avoid important decisions and change. Stuck in past failure, you stand still. Students who fail to reflect repeat their mistakes.",
        wealth: "You avoid facing financial problems, mired in past mistakes and afraid to re-plan. Self-doubt costs you a good chance to turn things around; set down the burden.",
        health: "Ignoring the body's call, you avoid needed adjustments and treatment. Regret and self-blame drag on recovery; self-forgiveness and a fresh resolve are needed."
      }
    }
  },
  {
    id: 21,
    name: "世界",
    nameEn: "The World",
    arcana: "major",
    suit: null,
    number: 21,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/major-21.jpg",
    keywords: { up: ["圆满", "成就", "完整", "旅程终点"], rev: ["未竟", "拖延", "缺憾", "停滞"] },
    keywordsEn: { up: ["Completion", "Achievement", "Wholeness", "Fulfillment"], rev: ["Incompletion", "Delay", "Shortfall", "Stagnation"] },
    meaning: {
      up: {
        general: "舞者在环形花冠中翩然起舞，四方环绕着象征四元素的神兽，象征圆满、成就与旅程的完成。此牌是大阿卡纳的终章，代表一个重要阶段的圆满达成，你已整合所学、实现目标。尽情庆祝这份完整与和谐，同时准备好迎接崭新的循环。",
        love: "感情圆满和谐，达到彼此契合的完满境界。关系稳固、修成正果，适合步入婚姻或迎接新阶段。是幸福圆满的写照。",
        career: "事业达成重大成就，目标圆满实现、备受认可。一个阶段功德圆满，新的机遇也在招手。学业上顺利毕业或取得成果。",
        wealth: "财务丰盈圆满，达成既定目标、成果丰硕。前期的努力开花结果，是收获与庆祝的时刻，可着手规划新的篇章。",
        health: "身心和谐完整，达到理想的健康状态。历经调理终获圆满，充满活力与平衡。是身心整合、圆满康复的写照。"
      },
      rev: {
        general: "逆位世界暗示未竟的圆满与收尾的困难。你或许即将抵达终点却卡在最后一步，因拖延或缺憾而无法真正完成。心中留有未了的遗憾，让人难以释怀。请找出阻碍收尾的症结，补上缺失的一环，为这段旅程画上真正圆满的句点。",
        love: "关系接近圆满却差临门一脚，或存在未解的心结。因拖延或缺憾而难以圆满，需要补足缺失，方能真正圆满。",
        career: "目标接近完成却迟迟无法收尾，或成果不尽如人意。停滞与拖延阻碍了圆满。学业上功亏一篑，需坚持到最后。",
        wealth: "财务目标即将达成却卡在最后阶段，或成果打了折扣。需查漏补缺、坚持到底，别让缺憾功败垂成。",
        health: "康复接近尾声却出现反复，或调理未竟全功。需坚持到底、补足最后的努力，方能达到真正的圆满健康。"
      }
    },
    meaningEn: {
      up: {
        general: "The dancer moves gracefully within a laurel wreath, encircled by the four creatures of the elements, symbolizing completion, achievement, and the journey's end. As the final card of the Major Arcana, it marks the fulfilling close of an important phase, your learning integrated and your goal reached. Celebrate this wholeness and harmony, and ready yourself to welcome a brand-new cycle.",
        love: "Love is complete and harmonious, reaching a state of mutual fulfillment. The bond is solid and comes to fruition, well suited to marriage or a new phase. It is a picture of happiness fulfilled.",
        career: "Your career reaches a major achievement, goals fulfilled and widely recognized. One phase comes to a satisfying close as new opportunities beckon. Students graduate smoothly or attain their results.",
        wealth: "Finances are abundant and complete, goals met with rich results. Earlier effort bears fruit; it is a time to harvest and celebrate, and to begin planning a new chapter.",
        health: "Body and mind are harmonious and whole, reaching an ideal state of health. After careful care you attain wholeness, full of vitality and balance, a picture of integrated, complete recovery."
      },
      rev: {
        general: "Reversed, the World signals an unfinished completion and difficulty in wrapping up. You may be nearing the finish yet stuck on the last step, unable to truly complete through delay or a shortfall. An unresolved regret lingers and is hard to release. Find what blocks the closing, supply the missing piece, and place a truly complete full stop on this journey.",
        love: "The relationship is near complete but a step short, or an unresolved knot remains. Delay or a shortfall makes fulfillment elusive; supply what is missing to truly complete it.",
        career: "The goal nears completion but cannot be closed out, or the results fall short. Stagnation and delay block fulfillment. Students risk falling short at the last; persist to the end.",
        wealth: "A financial goal is about to be reached but stalls at the final stage, or the result is discounted. Fill the gaps and persist to the end; do not let a shortfall spoil near-success.",
        health: "Recovery nears its end but wavers, or the care is not quite complete. Persist to the end and supply the final effort to reach truly complete health."
      }
    }
  },
  {
    id: 22,
    name: "权杖一",
    nameEn: "Ace of Wands",
    arcana: "minor",
    suit: "wands",
    number: 1,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-01.jpg",
    keywords: { up: ["灵感", "热情", "新契机", "行动力"], rev: ["拖延", "热情消退", "受阻", "方向不明"] },
    keywordsEn: { up: ["Inspiration", "Passion", "New venture", "Drive"], rev: ["Delay", "Waning passion", "Blocked energy", "Lost direction"] },
    meaning: {
      up: {
        general: "一只手自云中握出新生的权杖，嫩芽萌发，象征灵感与热情的火花乍现。这是一个充满创造力与行动力的崭新契机，一股原始的冲劲正在涌动。顺应这股热情，大胆去开创，让内在的火焰点燃全新的旅程与可能。",
        love: "激情被点燃，新的吸引力或关系的火苗正旺。勇敢表达热情，主动出击。有伴者可为感情注入新的活力与冒险。",
        career: "新项目、新点子降临，是启动与开创的绝佳时机。充沛的干劲助你大展身手，把握灵感立即付诸行动。",
        wealth: "新的赚钱机会浮现，带着冲劲去尝试。适合开拓性的投入，但需将热情转化为实际的行动。",
        health: "活力回升，精力旺盛。适合开始新的锻炼或活力充沛的运动，身体渴望释放能量。"
      },
      rev: {
        general: "逆位显示火花难以点燃，灵感受阻、热情消退或行动被延宕。你可能感到提不起劲，或方向尚未明朗，空有想法却迟迟无法启动。别强求，先重新点燃内在的动机，等待火焰重新燃起。",
        love: "热情冷却或时机未到，关系进展停滞。缺乏主动与激情，需要重新找回心动的感觉。",
        career: "计划受阻、缺乏动力，新点子难以落地。行动一再拖延，或方向不清导致原地打转。",
        wealth: "机会延迟或落空，投入难见回报。冲动的尝试缺乏根基，需谨慎评估。",
        health: "精力低迷、意兴阑珊，缺乏运动的动力。需要重新激发身体的活力。"
      }
    },
    meaningEn: {
      up: {
        general: "A hand emerges from the clouds grasping a fresh, sprouting wand, symbolizing the sudden spark of inspiration and passion. This is a brand-new opening full of creativity and drive, a raw surge of energy rising within. Move with this passion, dare to begin, and let the inner flame ignite a whole new journey of possibility.",
        love: "Passion is kindled and a new attraction or spark burns bright. Express your ardor boldly and take the initiative. Couples can inject fresh vitality and adventure into the bond.",
        career: "A new project or idea arrives, an ideal time to launch and create. Abundant drive lets you shine; seize the inspiration and act on it at once.",
        wealth: "A new earning opportunity surfaces; approach it with momentum. Pioneering ventures suit you, but turn passion into concrete action.",
        health: "Vitality rebounds and energy runs high. A good time to start new or vigorous exercise, as the body longs to release its energy."
      },
      rev: {
        general: "Reversed, the spark struggles to catch, with inspiration blocked, passion fading, or action delayed. You may feel listless, or the direction is unclear, full of ideas yet unable to begin. Do not force it; first rekindle your inner motivation and wait for the flame to rise again.",
        love: "Passion cools or the timing is not right, and the relationship stalls. Lacking initiative and spark, you need to rediscover that flutter of feeling.",
        career: "Plans are blocked and drive is low, and new ideas fail to land. Action is repeatedly delayed, or an unclear direction leaves you spinning in place.",
        wealth: "Opportunities are delayed or fall through, and effort brings little return. Impulsive ventures lack a foundation; assess with care.",
        health: "Energy is low and enthusiasm flags, with little motivation to exercise. You need to reawaken the body's vitality."
      }
    }
  },
  {
    id: 23,
    name: "权杖二",
    nameEn: "Two of Wands",
    arcana: "minor",
    suit: "wands",
    number: 2,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-02.jpg",
    keywords: { up: ["规划", "远见", "抉择", "掌控未来"], rev: ["犹豫", "计划受阻", "眼界受限", "恐惧未知"] },
    keywordsEn: { up: ["Planning", "Vision", "Decision", "Future control"], rev: ["Indecision", "Stalled plans", "Limited vision", "Fear of the unknown"] },
    meaning: {
      up: {
        general: "一人手持地球仪立于城墙之上，眺望远方，象征远见、规划与对未来的掌控。你已迈出第一步，如今站在抉择的关口，衡量着更广阔的天地。以长远的眼光制定蓝图，勇敢走出舒适圈，世界正等待你去探索。",
        love: "在感情中权衡未来的方向，考虑是否要更进一步。适合规划共同的长远蓝图，或勇敢跨出一步拓展视野。",
        career: "站在事业规划的十字路口，需要放眼长远做出抉择。有扩展、合作或开拓新市场的机会，眼界决定格局。",
        wealth: "适合制定长期的财务规划与布局。放眼未来的投资眼光带来回报，但需在稳妥与开拓间权衡。",
        health: "适合为长期健康制定计划，审视生活方式。以前瞻的眼光调整习惯，为未来打下根基。"
      },
      rev: {
        general: "逆位透露出规划的停滞与内在的犹豫。你或许因恐惧未知而迟迟不敢行动，或眼界受限、计划难以推进。害怕离开熟悉的领域让你原地踏步。请厘清真正想要的方向，别让恐惧困住你的脚步。",
        love: "对感情的未来感到迷茫或犹豫，不敢做出承诺或改变。眼界的局限让关系停滞，需坦诚面对内心。",
        career: "计划受阻或缺乏远见，害怕冒险而错失扩展的良机。选择困难让事业停滞不前。",
        wealth: "财务规划摇摆不定，或因过度保守而错失机会。缺乏长远眼光影响布局。",
        health: "健康计划难以坚持或方向不明。对改变的抗拒让状态停滞，需重新审视目标。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure stands on the battlements holding a globe, gazing into the distance, symbolizing vision, planning, and command over the future. You have taken the first step and now stand at a point of decision, weighing a wider world. Draw up your blueprint with a long view and dare to step beyond your comfort zone, for the world awaits your exploration.",
        love: "You weigh the future direction of the relationship and consider whether to go further. A good time to plan a shared long-term vision, or to bravely take a step and broaden your horizons.",
        career: "You stand at a crossroads of career planning, needing to take the long view and decide. There are chances to expand, partner, or open new markets; your vision sets your scope.",
        wealth: "A good time to draw up long-term financial plans and positioning. A forward-looking investment eye brings returns, but weigh security against expansion.",
        health: "A good time to plan for long-term health and review your lifestyle. Adjust habits with a forward-looking eye to lay a foundation for the future."
      },
      rev: {
        general: "Reversed, this reveals stalled planning and inner hesitation. You may be afraid to act in the face of the unknown, or your vision is narrow and plans fail to advance. Fear of leaving the familiar keeps you marking time. Clarify the direction you truly want and do not let fear trap your steps.",
        love: "You feel lost or hesitant about the relationship's future, afraid to commit or change. Limited vision stalls the bond; face your heart honestly.",
        career: "Plans are blocked or vision is lacking, and fear of risk costs you a good chance to expand. Difficulty deciding leaves your career stuck.",
        wealth: "Financial planning wavers, or excessive caution costs you opportunities. A lack of long-term vision hampers your positioning.",
        health: "Health plans are hard to sustain or lack direction. Resistance to change leaves your state stagnant; reexamine your goals."
      }
    }
  },
  {
    id: 24,
    name: "权杖三",
    nameEn: "Three of Wands",
    arcana: "minor",
    suit: "wands",
    number: 3,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-03.jpg",
    keywords: { up: ["扩展", "远景", "机会", "静待成果"], rev: ["延误", "受阻", "短视", "计划落空"] },
    keywordsEn: { up: ["Expansion", "Foresight", "Opportunity", "Awaiting results"], rev: ["Delays", "Obstacles", "Short-sightedness", "Failed plans"] },
    meaning: {
      up: {
        general: "一人立于高处，眺望远方归来的船只，象征扩展、远见与初步努力的成果即将到来。你已播下种子，如今正满怀信心地等待收获。视野开阔、格局远大，机会正从四面八方驶来，是拓展疆域、把握良机的时刻。",
        love: "感情视野开阔，或有异地、跨文化的缘分。关系向更广阔的阶段发展，耐心等待将有美好的进展。",
        career: "事业进入扩展期，前期的努力开始显现成果。适合拓展合作、开拓市场或向外发展，机会源源而来。",
        wealth: "财务前景看好，投资与布局开始回报。适合放眼长远、拓展收入来源，静待成果的到来。",
        health: "身心状态稳步向好，前期的调理开始见效。保持长远的规划，健康正朝积极方向发展。"
      },
      rev: {
        general: "逆位暗示扩展受阻与成果的延误。你期待的回报迟迟未至，或计划因短视与准备不足而受挫。视野的局限让机会溜走。请重新检视规划，保持耐心，别因一时的挫折而放弃长远的目标。",
        love: "感情进展缓慢或遭遇距离的阻碍。期待落空或视野狭隘，需要更多耐心与开放的心态。",
        career: "计划延误、扩展受阻，成果不如预期。合作出现变数或市场判断失误，需重新调整策略。",
        wealth: "投资回报延迟或落空，财务扩展受挫。短视的决策带来损失，需放长眼光重新规划。",
        health: "调理成效缓慢或出现反复。缺乏长远规划让健康停滞，需要耐心与调整。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure stands on high, watching ships return from afar, symbolizing expansion, foresight, and the coming fruits of early effort. You have sown the seeds and now await the harvest with confidence. Your view is broad and your scope ambitious, as opportunities sail in from every side. It is a time to widen your territory and seize good chances.",
        love: "Love broadens its horizons, perhaps a long-distance or cross-cultural connection. The bond grows toward a wider stage; patient waiting brings lovely progress.",
        career: "Your career enters expansion as early efforts begin to show. A good time to broaden partnerships, open markets, or reach outward, with opportunities flowing in.",
        wealth: "The financial outlook is promising as investments and positioning start to pay off. Take the long view, broaden income streams, and await the results.",
        health: "Body and mind steadily improve as earlier care takes effect. Keep a long-term plan, and health moves in a positive direction."
      },
      rev: {
        general: "Reversed, this signals blocked expansion and delayed results. The returns you await are slow to come, or plans are set back by short-sightedness and poor preparation. Limited vision lets opportunities slip. Review your planning anew, keep patience, and do not abandon long-term goals over a passing setback.",
        love: "Love progresses slowly or meets the obstacle of distance. Expectations go unmet or vision is narrow; more patience and openness are needed.",
        career: "Plans are delayed and expansion is blocked, with results below expectation. Partnerships shift or market judgment misfires; readjust your strategy.",
        wealth: "Investment returns are delayed or fall through, and financial expansion stalls. Short-sighted decisions bring losses; take the long view and re-plan.",
        health: "Progress is slow or wavers. Lacking a long-term plan leaves health stagnant; patience and adjustment are needed."
      }
    }
  },
  {
    id: 25,
    name: "权杖四",
    nameEn: "Four of Wands",
    arcana: "minor",
    suit: "wands",
    number: 4,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-04.jpg",
    keywords: { up: ["庆祝", "和谐", "归属", "里程碑"], rev: ["不稳", "延迟的庆祝", "家庭失和", "过渡"] },
    keywordsEn: { up: ["Celebration", "Harmony", "Belonging", "Milestone"], rev: ["Instability", "Delayed celebration", "Discord", "Transition"] },
    meaning: {
      up: {
        general: "四根权杖撑起华美的花环，人们在其下欢庆，象征庆祝、和谐与稳固的归属。这是值得欢欣的里程碑时刻，努力换来了安稳的成果。家庭、团体或关系带来温暖的支持，尽情享受这份团聚与丰收的喜悦。",
        love: "感情稳定和谐，进入值得庆祝的阶段。适合订婚、结婚或同居，家庭与关系带来幸福与归属感。",
        career: "阶段性目标达成，团队和谐、成果稳固。是值得庆祝的里程碑，付出得到认可，工作氛围融洽愉悦。",
        wealth: "财务稳定，达成一个安稳的阶段。适合置产或享受劳动成果，根基稳固带来安全感。",
        health: "身心安稳和谐，充满幸福感。适合在轻松愉悦的氛围中放松身心，与亲友相聚带来滋养。"
      },
      rev: {
        general: "逆位暗示表面和谐下的不稳，或庆祝的延迟。你或许尚未真正安定，家庭或团体中存在潜在的失和与过渡的动荡。稳固的根基尚需时日。请正视被掩盖的问题，在过渡中耐心经营真正的归属。",
        love: "关系缺乏稳定感，或家庭因素带来阻碍。庆祝延迟，归属感不足，需要用心经营彼此的连结。",
        career: "团队和谐表象下暗藏矛盾，或成果尚不稳固。处于过渡阶段，需要巩固根基才能真正安定。",
        wealth: "财务基础不稳，或置产计划受阻。安全感不足，需要更扎实的规划与积累。",
        health: "身心缺乏安定，易受环境与家庭氛围影响。需要营造稳定和谐的生活来滋养身心。"
      }
    },
    meaningEn: {
      up: {
        general: "Four wands hold up a splendid garland as people celebrate beneath, symbolizing celebration, harmony, and secure belonging. This is a milestone worth rejoicing, effort rewarded with stable results. Family, community, or a relationship offers warm support; savor fully this joy of reunion and abundance.",
        love: "Love is stable and harmonious, entering a phase worth celebrating. It suits engagement, marriage, or moving in together, as family and the bond bring happiness and belonging.",
        career: "A milestone goal is reached, with a harmonious team and solid results. It is a milestone worth celebrating, effort recognized, and the work atmosphere warm and pleasant.",
        wealth: "Finances are stable, reaching a secure stage. A good time to buy property or enjoy the fruits of your labor, as a solid foundation brings a sense of security.",
        health: "Body and mind are settled and harmonious, full of contentment. Relax in an easy, joyful atmosphere, as gathering with loved ones nourishes you."
      },
      rev: {
        general: "Reversed, this hints at instability beneath surface harmony, or a delayed celebration. You may not yet be truly settled, with latent discord and transitional turbulence in family or group. A solid foundation still needs time. Face the hidden problems and patiently cultivate true belonging through the transition.",
        love: "The relationship lacks a sense of stability, or family factors create obstacles. Celebration is delayed and belonging is thin; tend the connection between you with care.",
        career: "Beneath a harmonious surface, tensions hide, or results are not yet secure. In a transitional phase, you must shore up the foundation to truly settle.",
        wealth: "The financial base is unstable, or a property plan is blocked. Security is thin; more solid planning and accumulation are needed.",
        health: "Body and mind lack settledness, easily swayed by environment and family mood. Create a stable, harmonious life to nourish yourself."
      }
    }
  },
  {
    id: 26,
    name: "权杖五",
    nameEn: "Five of Wands",
    arcana: "minor",
    suit: "wands",
    number: 5,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-05.jpg",
    keywords: { up: ["竞争", "冲突", "混乱", "较劲"], rev: ["化解冲突", "逃避竞争", "内耗", "妥协"] },
    keywordsEn: { up: ["Competition", "Conflict", "Chaos", "Rivalry"], rev: ["Resolving conflict", "Avoiding rivalry", "Inner tension", "Compromise"] },
    meaning: {
      up: {
        general: "五人各持权杖相互挥舞，看似混战，象征竞争、冲突与观点的碰撞。这是充满活力却也纷乱的局面，人人各执一词、争相表现。竞争虽带来压力，却也能激发潜能。以建设性的态度面对分歧，从碰撞中找到成长的契机。",
        love: "关系中摩擦不断，观点分歧引发争执。也可能面临竞争者或众多追求者。需要耐心磨合，别让口角伤了感情。",
        career: "职场竞争激烈，意见冲突、各自较劲。团队协作不畅，充满你争我夺的紧张氛围。需以良性竞争激励自己。",
        wealth: "财务上面临竞争或利益的争夺。多方角力让局面混乱，需理性应对，避免因争抢而两败俱伤。",
        health: "压力与紧张带来身心的消耗，易烦躁不安。过度的竞争心态影响健康，需要适度释放压力。"
      },
      rev: {
        general: "逆位暗示冲突的化解或逃避。你或许正努力平息纷争、寻求共识，也可能选择回避竞争、隐忍退让。若是内在的自我较劲与内耗，则需正视根源。找到化解矛盾的方式，让紧张的局面归于平和。",
        love: "努力化解关系中的摩擦，或选择回避争执。压抑的不满需要疏导，别让内耗侵蚀感情。",
        career: "冲突趋于缓和，或以妥协化解竞争。也可能因逃避竞争而错失机会，需在和谐与进取间平衡。",
        wealth: "财务纷争得到调解，或选择退让避免冲突。需理性权衡，别因一味退缩而损失利益。",
        health: "压力逐渐释放，紧张有所缓解。但若持续内耗与压抑，仍需寻求真正的放松与疏导。"
      }
    },
    meaningEn: {
      up: {
        general: "Five figures brandish their wands in seeming melee, symbolizing competition, conflict, and clashing viewpoints. It is a lively yet chaotic scene, everyone asserting their own view and vying to be seen. Competition brings pressure but can also draw out potential. Meet differences constructively and find, within the clash, an opening for growth.",
        love: "Friction is constant and differing views spark quarrels. You may also face rivals or many suitors. Patient adjustment is needed; do not let bickering wound the bond.",
        career: "Workplace competition is fierce, with clashing opinions and jockeying for position. Teamwork is rough, thick with a tense, competitive air. Let healthy rivalry spur you on.",
        wealth: "You face competition or a contest over interests. Multiple parties pulling in different ways create chaos; respond rationally and avoid mutual loss from scrambling.",
        health: "Pressure and tension drain body and mind, and irritability comes easily. An overly competitive mindset harms health; release the pressure in measure."
      },
      rev: {
        general: "Reversed, this hints at conflict resolved or avoided. You may be working to calm disputes and seek consensus, or choosing to dodge competition and yield. If it is inner self-rivalry and drain, face the root cause. Find a way to dissolve the tension and bring the fraught situation back to peace.",
        love: "You work to smooth friction in the relationship, or choose to avoid quarrels. Suppressed discontent needs an outlet; do not let inner drain erode the bond.",
        career: "Conflict eases, or competition is resolved through compromise. Or avoiding rivalry costs you a chance; balance harmony with ambition.",
        wealth: "Financial disputes are mediated, or you yield to avoid conflict. Weigh things rationally and do not lose out by simply backing down.",
        health: "Pressure gradually releases and tension eases. But if inner drain and repression persist, seek genuine relaxation and release."
      }
    }
  },
  {
    id: 27,
    name: "权杖六",
    nameEn: "Six of Wands",
    arcana: "minor",
    suit: "wands",
    number: 6,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-06.jpg",
    keywords: { up: ["胜利", "认可", "荣誉", "自信"], rev: ["挫败", "不被认可", "自负", "胜利落空"] },
    keywordsEn: { up: ["Victory", "Recognition", "Honor", "Confidence"], rev: ["Setback", "Lack of recognition", "Arrogance", "Fallen from grace"] },
    meaning: {
      up: {
        general: "骑士头戴桂冠、骑马凯旋，众人簇拥欢呼，象征胜利、认可与公开的荣耀。你的努力终获肯定，站上众人瞩目的高台。这是收获掌声与自信的时刻，昂首享受成功，但也别忘记支持你的人，谦逊将让荣光更持久。",
        love: "感情中获得认可与青睐，魅力大增、备受欣赏。适合公开关系或赢得追求的胜利，自信让你更具吸引力。",
        career: "事业取得胜利，成就获得公开表彰。适合争取晋升、领奖或展示成果，众望所归、备受推崇。",
        wealth: "财务上有令人满意的收获，投资或努力得到丰厚回报。成功在望，是收割成果的好时机。",
        health: "身心状态高昂，充满活力与自信。战胜病痛或达成健康目标，整体状态积极向上。"
      },
      rev: {
        general: "逆位透露出胜利的落空或认可的缺失。你或许努力却未获肯定，或因过度自负而招致挫败。荣耀蒙上阴影，掌声迟迟未至。请调整心态，别让骄傲遮蔽了成长，也别因一时的失意而否定自己。",
        love: "感情中缺乏认可或自信受挫，付出未获回应。也可能因自负而忽略对方，需重新审视相处之道。",
        career: "努力未获认可，晋升或成果落空。也可能因骄傲自满而失误，声誉受损，需谦逊反省。",
        wealth: "预期的收获落空，投资回报不如意。过度乐观或自负导致失算，需重新评估。",
        health: "状态不如预期，或因逞强而受挫。别过度自信而忽视身体的真实需求。"
      }
    },
    meaningEn: {
      up: {
        general: "The rider returns crowned with laurel, cheered by the crowd, symbolizing victory, recognition, and public honor. Your effort is at last affirmed and you stand in the spotlight. It is a moment to receive applause and confidence, so hold your head high and enjoy the success, but do not forget those who supported you, for humility makes the glory last.",
        love: "You win recognition and favor in love, your charm heightened and admired. A good time to make a relationship public or win a pursuit, as confidence makes you more attractive.",
        career: "Your career achieves victory, your accomplishments publicly honored. A good time to seek promotion, receive an award, or showcase results, well regarded and esteemed.",
        wealth: "You reap satisfying gains, as investment or effort brings rich reward. Success is in sight, a good time to harvest the fruits.",
        health: "Body and mind are buoyant, full of vitality and confidence. You overcome illness or reach a health goal, with an upward overall state."
      },
      rev: {
        general: "Reversed, this reveals victory falling through or recognition withheld. You may work hard yet go unacknowledged, or invite setback through overconfidence. Glory is shadowed and the applause is slow to come. Adjust your mindset; do not let pride eclipse your growth, nor deny yourself over a passing disappointment.",
        love: "The relationship lacks recognition or your confidence is shaken, and giving goes unanswered. Or arrogance makes you overlook your partner; reexamine how you relate.",
        career: "Effort goes unrecognized, and a promotion or result falls through. Or complacency causes a misstep and reputation suffers; reflect with humility.",
        wealth: "Expected gains fail to materialize and returns disappoint. Over-optimism or arrogance leads to miscalculation; reassess.",
        health: "Your state is below expectation, or a setback comes from overexertion. Do not let overconfidence blind you to the body's real needs."
      }
    }
  },
  {
    id: 28,
    name: "权杖七",
    nameEn: "Seven of Wands",
    arcana: "minor",
    suit: "wands",
    number: 7,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-07.jpg",
    keywords: { up: ["捍卫", "坚守", "挑战", "勇气"], rev: ["招架不住", "退缩", "疲于应付", "放弃立场"] },
    keywordsEn: { up: ["Defense", "Standing firm", "Challenge", "Courage"], rev: ["Overwhelmed", "Backing down", "Exhaustion", "Yielding ground"] },
    meaning: {
      up: {
        general: "一人立于高处，挥杖抵御下方多方的挑战，象征捍卫、坚守与不屈的勇气。你占据着有利的位置，却面临接踵而来的质疑与竞争。坚守你的立场与信念，勇敢迎战，只要不轻言放弃，便能守住来之不易的成果。",
        love: "需要为感情坚守立场，抵御外界的质疑或干扰。捍卫这段关系需要勇气与坚持，别轻易动摇。",
        career: "面临竞争与挑战，需要捍卫自己的地位与成果。坚守立场、据理力争，勇于迎战方能守住优势。",
        wealth: "需要守护既有的财务成果，抵御风险或他人的觊觎。坚定立场、谨慎防守，方能保住利益。",
        health: "需要坚持不懈地对抗健康的挑战。以顽强的意志守护身心，别在压力下轻易放弃自我照顾。"
      },
      rev: {
        general: "逆位暗示招架不住与立场的动摇。你或许在接连的压力下疲于应付，感到力不从心，甚至想要退缩放弃。防线开始松动，自信受到侵蚀。请重新评估这场战斗是否值得，量力而为，别让消耗拖垮了自己。",
        love: "在感情的压力下感到疲惫，难以坚守。可能因招架不住而退让，或放弃了捍卫关系的立场。",
        career: "面对竞争力不从心，防线失守。压力接踵而至让人疲于应付，或因退缩而失去优势。",
        wealth: "难以守住财务成果，或在压力下做出让步。防守乏力可能带来损失，需重新稳固阵脚。",
        health: "身心疲于应付，抵抗力下降。持续的压力让人难以坚持，需要及时休整，别硬撑。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure on higher ground wields a staff against challengers below, symbolizing defense, standing firm, and unyielding courage. You hold the advantageous position yet face wave after wave of doubt and competition. Hold to your stance and conviction and meet the fight bravely; as long as you do not give in lightly, you can hold the hard-won ground.",
        love: "You must stand firm for the relationship, warding off outside doubt or interference. Defending this bond takes courage and persistence; do not waver easily.",
        career: "You face competition and challenge and must defend your position and results. Hold your stance, argue your case, and fight bravely to keep your edge.",
        wealth: "You must guard existing financial gains against risk or others' designs. Stand firm and defend carefully to protect your interests.",
        health: "You must persevere against a health challenge. Guard body and mind with a tenacious will and do not abandon self-care under pressure."
      },
      rev: {
        general: "Reversed, this hints at being overwhelmed and a wavering stance. You may be worn down by relentless pressure, feeling unequal to it, even tempted to retreat and give up. The defenses begin to loosen and confidence erodes. Reassess whether this battle is worth it, act within your limits, and do not let the drain wear you down.",
        love: "Weary under the relationship's pressure, you struggle to hold firm. Overwhelmed, you may yield, or give up defending the bond's ground.",
        career: "Feeling unequal to the competition, your defenses fall. Relentless pressure wears you down, or retreat costs you your advantage.",
        wealth: "You struggle to hold financial gains, or make concessions under pressure. Weak defense may bring losses; steady your footing anew.",
        health: "Body and mind are worn down and resistance drops. Sustained pressure makes it hard to hold on; rest in time and do not push through by force."
      }
    }
  },
  {
    id: 29,
    name: "权杖八",
    nameEn: "Eight of Wands",
    arcana: "minor",
    suit: "wands",
    number: 8,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-08.jpg",
    keywords: { up: ["迅速", "行动", "进展", "消息"], rev: ["延迟", "混乱", "急躁", "受阻"] },
    keywordsEn: { up: ["Swiftness", "Action", "Momentum", "News"], rev: ["Delays", "Chaos", "Haste", "Obstruction"] },
    meaning: {
      up: {
        general: "八根权杖并行掠过天空，疾速飞驰，象征迅速的进展、行动与消息的到来。停滞的局面骤然加速，事情正快马加鞭地推进。把握这股势头，果断行动，重要的消息或转机即将降临，是乘势而上的绝佳时机。",
        love: "感情快速升温，进展神速。可能有令人心动的消息或突然的表白，把握时机，让感情顺势推进。",
        career: "工作进展飞速，项目高效推进。可能收到重要通知或好消息，把握快节奏的机会，果断行动。",
        wealth: "财务快速流动，机会转瞬即逝。适合把握时机迅速决策，进账或回报来得比预期更快。",
        health: "身体恢复迅速，能量畅通。适合快节奏的活动与运动，行动力强，状态积极。"
      },
      rev: {
        general: "逆位暗示进展的延迟与混乱。原本顺畅的势头受阻，事情陷入停滞或节奏错乱。你或许过于急躁，反而弄巧成拙，或重要的消息迟迟未到。请稳住阵脚，理清头绪，别在混乱中盲目冲动。",
        love: "感情进展受阻或节奏混乱，消息延迟令人焦急。过于急躁反而适得其反，需要放缓脚步。",
        career: "项目延误、进展停滞，沟通不畅导致混乱。急于求成容易出错，需理清优先次序。",
        wealth: "财务往来延迟或出现混乱，预期的进账受阻。急躁的决策带来失误，需耐心等待时机。",
        health: "身体状态起伏或恢复延迟。急于求成或作息混乱影响健康，需要放慢节奏、稳步调理。"
      }
    },
    meaningEn: {
      up: {
        general: "Eight wands streak across the sky in swift parallel flight, symbolizing rapid progress, action, and incoming news. A stalled situation suddenly accelerates and things move at full gallop. Seize this momentum and act decisively; important news or a turning point is about to arrive, an excellent time to ride the wave forward.",
        love: "Love heats up fast and progresses swiftly. There may be exciting news or a sudden confession; seize the moment and let the relationship ride the momentum forward.",
        career: "Work moves quickly and projects advance efficiently. You may receive an important notice or good news; seize the fast-paced chance and act decisively.",
        wealth: "Money moves quickly and opportunities are fleeting. Seize the moment to decide fast, as income or returns arrive sooner than expected.",
        health: "The body recovers quickly and energy flows freely. Fast-paced activity and exercise suit you, with strong drive and a positive state."
      },
      rev: {
        general: "Reversed, this signals delayed and chaotic progress. The once-smooth momentum is blocked and things stall or fall out of rhythm. You may be too hasty and undo your own work, or important news is slow to come. Steady your footing, sort out the threads, and do not act blindly and impulsively amid the chaos.",
        love: "Progress is blocked or the rhythm is muddled, and delayed news causes anxiety. Excess haste backfires; slow your pace.",
        career: "Projects are delayed and progress stalls, and poor communication brings chaos. Rushing invites mistakes; sort out your priorities.",
        wealth: "Financial dealings are delayed or muddled, and expected income is blocked. Hasty decisions bring errors; wait patiently for the right time.",
        health: "Your state fluctuates or recovery is delayed. Rushing or an erratic routine harms health; slow down and recover steadily."
      }
    }
  },
  {
    id: 30,
    name: "权杖九",
    nameEn: "Nine of Wands",
    arcana: "minor",
    suit: "wands",
    number: 9,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-09.jpg",
    keywords: { up: ["坚韧", "戒备", "最后防线", "毅力"], rev: ["精疲力竭", "偏执", "固守", "崩溃边缘"] },
    keywordsEn: { up: ["Resilience", "Vigilance", "Last stand", "Perseverance"], rev: ["Burnout", "Paranoia", "Defensiveness", "On the brink"] },
    meaning: {
      up: {
        general: "一人带伤紧握权杖，警惕地守望身后的防线，象征坚韧、戒备与最后的坚持。你已历经重重考验，虽身心俱疲却依然屹立不倒。胜利就在眼前，别在最后一刻松懈。凭借顽强的毅力守住阵地，你比想象中更强大。",
        love: "感情历经波折，仍在坚守。虽带着过往的伤痕而有所戒备，但只要不放弃，终能守得云开见月明。",
        career: "面对接连的挑战仍坚持不懈，已接近成功。虽然疲惫，但最后的坚守至关重要，别在临门一脚放弃。",
        wealth: "财务上需要坚守与谨慎防御，历经考验后趋于稳固。保持警惕，守住成果，胜利就在不远处。",
        health: "身心虽感疲惫，但恢复力顽强。凭借毅力挺过难关，别过度勉强，适度休整后将重获力量。"
      },
      rev: {
        general: "逆位暗示精疲力竭与过度的防备。你或许已被消耗到极限，濒临崩溃却仍死撑，或因过往的伤痛而变得偏执多疑。固守的姿态让你孤立无援。请学会适时放下防备、寻求支持，别让顽固耗尽你最后的力气。",
        love: "在感情中筑起高墙，因过往创伤而过度戒备。身心俱疲难以敞开，需要卸下防备、重建信任。",
        career: "已疲惫不堪却仍硬撑，濒临崩溃边缘。固执己见让人孤立，需要适时求助或调整策略。",
        wealth: "财务上过度防守或偏执，反而错失机会。精力耗尽让判断失准，需要休整后重新规划。",
        health: "身心透支、濒临崩溃，硬撑只会加重损耗。务必正视疲惫的信号，及时休息与寻求帮助。"
      }
    },
    meaningEn: {
      up: {
        general: "A wounded figure grips a staff, warily watching the line of wands behind, symbolizing resilience, vigilance, and a final stand. You have weathered trial after trial and, though worn in body and mind, still stand unbroken. Victory is within reach, so do not slacken at the last moment. Hold the ground through sheer perseverance; you are stronger than you think.",
        love: "Love has weathered ups and downs and you are still holding on. Though guarded by old scars, if you do not give up, the clouds will part to reveal the moon.",
        career: "You persevere through relentless challenges and are near success. Weary as you are, the final stand is crucial; do not give up at the last step.",
        wealth: "Finances call for holding firm and careful defense, growing solid after trials. Stay vigilant and hold your gains, for victory is not far off.",
        health: "Though body and mind feel weary, your resilience is strong. Persevere through the hard patch, but do not overstrain; adequate rest will restore your strength."
      },
      rev: {
        general: "Reversed, this signals burnout and excessive defensiveness. You may be drained to the limit, on the brink yet still forcing on, or grown paranoid and suspicious from past hurt. A rigidly guarded stance leaves you isolated. Learn to lower your defenses in time and seek support; do not let stubbornness burn through your last reserves of strength.",
        love: "You build high walls in love, overly guarded by past wounds. Worn in body and mind, you struggle to open up; lower your defenses and rebuild trust.",
        career: "Already exhausted yet still forcing on, you near the point of collapse. Rigid insistence leaves you isolated; ask for help or adjust your strategy in time.",
        wealth: "Over-defensive or paranoid with money, you miss opportunities. Depleted energy skews your judgment; rest, then re-plan.",
        health: "Body and mind are overdrawn and near collapse, and forcing on only deepens the damage. Heed the signs of exhaustion and rest and seek help in time."
      }
    }
  },
  {
    id: 31,
    name: "权杖十",
    nameEn: "Ten of Wands",
    arcana: "minor",
    suit: "wands",
    number: 10,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-10.jpg",
    keywords: { up: ["重担", "责任", "负荷", "坚持到底"], rev: ["卸下重担", "崩溃", "推卸", "解脱"] },
    keywordsEn: { up: ["Burden", "Responsibility", "Overload", "Duty"], rev: ["Releasing burdens", "Breakdown", "Delegation", "Relief"] },
    meaning: {
      up: {
        general: "一人吃力地抱着十根权杖艰难前行，象征沉重的负担、责任与压力。你或许扛下了过多的重担，被责任压得喘不过气。成功近在眼前，但代价是筋疲力竭。学会取舍、适度分担，别让肩上的重量压垮了前行的脚步。",
        love: "感情中背负过多的责任或压力，让人疲惫不堪。付出失衡令人喘不过气，需要学会分担与放下。",
        career: "工作负荷过重，责任堆积如山。虽接近目标，却已不堪重负。需要学会授权与取舍，别独自硬扛。",
        wealth: "财务负担沉重，债务或开销压力大。责任缠身让人疲惫，需要理清优先级，减轻不必要的负担。",
        health: "身心承受过重的压力，疲惫透支。长期的重负影响健康，务必学会减压与分担，善待自己。"
      },
      rev: {
        general: "逆位暗示重担的卸下或不堪重负的崩溃。你或许终于学会放手、分担责任，从沉重的压力中解脱；也可能是负荷已超出极限，濒临崩溃，或选择逃避推卸。请诚实评估自己的承受力，该放下的就勇敢放下。",
        love: "从感情的重担中解脱，或因不堪重负而抽离。学会放下过度的付出，让关系回归轻松与平衡。",
        career: "卸下过重的工作负担，或因压力过大而崩溃。适时授权、取舍，别让责任压垮自己。",
        wealth: "开始减轻财务负担，理清债务与开销。也可能因压力过大而失控，需要重新规划、量力而行。",
        health: "压力得到释放，身心逐渐轻松；或因长期透支而濒临崩溃。务必卸下重担，优先照顾身心。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure struggles forward clutching all ten wands, symbolizing heavy burdens, responsibility, and pressure. You may have taken on too much, weighed down by duty until you can barely breathe. Success is close, but the cost is exhaustion. Learn to choose and share the load, and do not let the weight on your shoulders crush your forward steps.",
        love: "You carry too much responsibility or pressure in the relationship, worn thin. Unbalanced giving leaves you breathless; learn to share and let go.",
        career: "Your workload is too heavy and responsibilities pile up. Though near your goal, you are overburdened. Learn to delegate and prioritize; do not shoulder it all alone.",
        wealth: "Financial burdens are heavy, with debt or expenses pressing hard. Duty weighs you down; sort your priorities and shed unnecessary loads.",
        health: "Body and mind bear too much pressure, worn and overdrawn. Long-term burden harms health; learn to reduce stress, share the load, and treat yourself well."
      },
      rev: {
        general: "Reversed, this signals burdens set down or an overwhelmed collapse. You may finally be learning to let go and share responsibility, freed from crushing pressure; or the load has passed your limit, nearing breakdown, or you choose to dodge and offload. Honestly assess what you can bear, and bravely set down what should be released.",
        love: "You free yourself from the relationship's burden, or withdraw under the weight. Learn to release excessive giving and let the bond return to ease and balance.",
        career: "You set down an overheavy workload, or collapse under too much pressure. Delegate and prioritize in time; do not let duty crush you.",
        wealth: "You begin to ease financial burdens, sorting out debt and spending. Or excess pressure spins out of control; re-plan and act within your means.",
        health: "Pressure is released and body and mind gradually lighten; or long depletion nears collapse. Set down the burden and put your well-being first."
      }
    }
  },
  {
    id: 32,
    name: "权杖侍从",
    nameEn: "Page of Wands",
    arcana: "minor",
    suit: "wands",
    number: 11,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-11.jpg",
    keywords: { up: ["热情", "探索", "好奇", "新点子"], rev: ["三分钟热度", "浮躁", "计划不周", "受阻"] },
    keywordsEn: { up: ["Enthusiasm", "Exploration", "Curiosity", "Fresh ideas"], rev: ["Fleeting passion", "Impulsiveness", "Poor planning", "Frustration"] },
    meaning: {
      up: {
        general: "权杖侍从手持权杖、目光炯炯，象征热情、好奇与探索的精神。他是充满活力的信使，带来令人振奋的新点子与冒险的邀约。以孩童般的热忱拥抱新事物，勇敢尝试、自由探索，你正站在一段激动人心旅程的起点。",
        love: "感情充满新鲜与热情，一段轻松愉快的邂逅正在展开。以真诚与活力主动出击，享受悸动与探索的乐趣。",
        career: "涌现新的点子与学习机会，适合尝试新领域。以热情和好奇心投入，虽经验尚浅，但潜力无限。",
        wealth: "出现新的赚钱灵感或小机会，值得尝试。保持热情但需做好功课，别只凭一时冲动。",
        health: "活力充沛，充满探索的能量。适合尝试新的运动或健康方式，让身体在新鲜中焕发生机。"
      },
      rev: {
        general: "逆位透露出热情的短暂与浮躁。你或许对新事物三分钟热度，兴致来得快去得也快，或因计划不周、准备不足而受挫。缺乏定性让灵感难以落地。请沉下心来，把热情转化为持续的行动，别让浮躁耗散了潜力。",
        love: "感情来得快去得快，缺乏深度与承诺。浮躁善变让关系难以稳定，需要更多真诚与耐心。",
        career: "新点子虎头蛇尾，难以坚持。计划不周或经验不足导致受挫，需要沉稳与踏实。",
        wealth: "因一时冲动而投入，缺乏周全的评估。热情消退后计划落空，需谨慎务实。",
        health: "健康计划难以持续，三分钟热度。作息浮躁影响状态，需要稳定的节奏与坚持。"
      }
    },
    meaningEn: {
      up: {
        general: "The Page of Wands holds his staff with bright, eager eyes, symbolizing enthusiasm, curiosity, and the spirit of exploration. He is a lively messenger bringing exciting new ideas and invitations to adventure. Embrace the new with childlike zeal, try boldly, and explore freely; you stand at the start of a thrilling journey.",
        love: "Love is fresh and full of passion, a light and joyful encounter unfolding. Take the initiative with sincerity and energy, and enjoy the flutter and fun of discovery.",
        career: "New ideas and learning opportunities surface, and trying a new field suits you. Dive in with enthusiasm and curiosity; though your experience is thin, your potential is boundless.",
        wealth: "A new earning idea or small opportunity appears, worth a try. Keep your enthusiasm but do your homework; do not act on a whim alone.",
        health: "Energy is abundant, brimming with exploratory drive. A good time to try a new sport or wellness approach, letting the body come alive through novelty."
      },
      rev: {
        general: "Reversed, this reveals fleeting passion and restlessness. You may burn hot then cold over new things, interest flaring up and fading fast, or stumble through poor planning and preparation. A lack of steadiness keeps inspiration from landing. Settle yourself, turn passion into sustained action, and do not let restlessness scatter your potential.",
        love: "Love comes and goes quickly, lacking depth and commitment. Restless fickleness keeps the bond from steadying; more sincerity and patience are needed.",
        career: "New ideas start strong but fizzle, hard to sustain. Poor planning or thin experience brings setbacks; steadiness and grounding are needed.",
        wealth: "You commit on impulse, without thorough assessment. Once enthusiasm fades, plans fall through; be careful and practical.",
        health: "Health plans are hard to sustain, hot then cold. A restless routine hurts your state; a steady rhythm and persistence are needed."
      }
    }
  },
  {
    id: 33,
    name: "权杖骑士",
    nameEn: "Knight of Wands",
    arcana: "minor",
    suit: "wands",
    number: 12,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-12.jpg",
    keywords: { up: ["行动", "冒险", "激情", "闯劲"], rev: ["鲁莽", "冲动", "半途而废", "急躁"] },
    keywordsEn: { up: ["Action", "Adventure", "Passion", "Boldness"], rev: ["Recklessness", "Impulsiveness", "Quitting halfway", "Impatience"] },
    meaning: {
      up: {
        general: "权杖骑士策马腾跃，充满激情与冲劲，象征果敢的行动与热血的冒险精神。他是无所畏惧的行动派，追逐目标时义无反顾。带着这股炽热的能量勇往直前，敢作敢为，你的热情与魄力将开创精彩的局面。",
        love: "感情热烈奔放，充满激情与浪漫。主动追求、大胆示爱，是充满冒险与刺激的恋情，但需注意别只有三分钟热度。",
        career: "以充沛的干劲和魄力推进事业，勇于闯荡与冒险。行动力十足，适合开拓性的挑战，但需注意持续与稳定。",
        wealth: "以果敢的姿态把握机会，敢于冒险投入。行动迅速能有斩获，但需警惕冲动带来的风险。",
        health: "精力旺盛、活力四射，适合充满挑战的运动。释放这股能量的同时，注意别因逞强而受伤。"
      },
      rev: {
        general: "逆位暗示鲁莽的冲动与虎头蛇尾。你或许行事过于急躁，不顾后果地横冲直撞，或热情来得快去得快，事情半途而废。缺乏耐心与计划让能量白白消耗。请收敛冲劲，三思而后行，把热情坚持到底。",
        love: "感情中冲动善变，激情消退后草草收场。缺乏承诺与耐心，需要收敛急躁，学会稳定经营。",
        career: "急于求成、鲁莽行事，导致错误频出。项目虎头蛇尾、难以坚持，需要沉稳与规划。",
        wealth: "冲动投资、不计后果，容易招致损失。缺乏审慎的评估，需要克制冒进的心态。",
        health: "过度逞强或行事鲁莽，易引发意外或损耗。急躁的心态影响健康，需要放缓与节制。"
      }
    },
    meaningEn: {
      up: {
        general: "The Knight of Wands leaps forward on his horse, full of passion and drive, symbolizing bold action and a fiery spirit of adventure. He is a fearless doer who chases his goals without looking back. Carry this blazing energy forward, dare to act, and your passion and daring will open up a brilliant scene.",
        love: "Love is ardent and free, full of passion and romance. Pursue actively and confess boldly; it is an adventurous, exciting romance, but beware burning hot then cold.",
        career: "You drive your career with abundant energy and daring, bold to venture and take risks. Full of momentum, you suit pioneering challenges, but mind consistency and stability.",
        wealth: "You seize opportunities boldly and dare to take risks. Quick action can bring gains, but beware the risks that impulse brings.",
        health: "Energy runs high and vitality radiates, suiting challenging sports. As you release this energy, take care not to get hurt by overexertion."
      },
      rev: {
        general: "Reversed, this signals reckless impulse and starting strong but fizzling out. You may act too hastily, charging ahead heedless of consequences, or your passion flares and fades and things are left half-done. Impatience and lack of planning waste your energy. Rein in the drive, think before you leap, and see your passion through to the end.",
        love: "Impulsive and fickle in love, you rush to an end once passion fades. Lacking commitment and patience, curb the haste and learn to build steadily.",
        career: "Rushing for results and acting rashly, you make frequent mistakes. Projects start strong but stall; steadiness and planning are needed.",
        wealth: "Impulsive, heedless investment easily brings losses. Lacking careful assessment, restrain the urge to rush in.",
        health: "Overexertion or reckless action easily leads to accidents or depletion. An impatient mindset harms health; slow down and practice restraint."
      }
    }
  },
  {
    id: 34,
    name: "权杖皇后",
    nameEn: "Queen of Wands",
    arcana: "minor",
    suit: "wands",
    number: 13,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-13.jpg",
    keywords: { up: ["自信", "魅力", "热情", "独立"], rev: ["缺乏自信", "善妒", "跋扈", "情绪化"] },
    keywordsEn: { up: ["Confidence", "Charisma", "Passion", "Independence"], rev: ["Insecurity", "Jealousy", "Domineering", "Moodiness"] },
    meaning: {
      up: {
        general: "权杖皇后端坐王座、脚边卧着黑猫，象征自信、魅力与热情洋溢的领导力。她独立而温暖，光芒四射却不失亲和，既能温柔待人，也能坚定果决。散发你独特的魅力，以自信和热情感染他人，从容地掌握属于自己的舞台。",
        love: "散发迷人的魅力与自信，在感情中热情而独立。以真诚和活力吸引对方，是充满魅力与温度的关系。",
        career: "以自信和领导魅力赢得他人追随，善于激励团队。热情与能力兼备，适合展现才华、独当一面。",
        wealth: "以自信和魄力经营财务，眼光独到。善于把握机会，独立自主地创造收益，财运随魅力提升。",
        health: "身心充满活力与热情，光彩照人。积极乐观的心态是健康之源，适合充满活力的生活方式。"
      },
      rev: {
        general: "逆位透露出自信的缺失或过度的强势。你或许因不安全感而善妒、多疑，或反之变得跋扈专横、情绪化。内在的光芒被恐惧遮蔽。请重新与自己的价值连结，别让嫉妒与自我怀疑侵蚀你的魅力与力量。",
        love: "因缺乏安全感而善妒、控制，或情绪化引发摩擦。需要重建自信，别让不安侵蚀感情的温度。",
        career: "自信受挫或过度强势，影响人际与合作。情绪化的表现削弱领导力，需要找回内在的笃定。",
        wealth: "因不安或冲动而财务失当，判断受情绪左右。需要重拾理性与自信，稳健经营。",
        health: "情绪起伏影响身心，压力与焦虑消耗活力。需要安抚内在的不安，重建平和与自信。"
      }
    },
    meaningEn: {
      up: {
        general: "The Queen of Wands sits on her throne with a black cat at her feet, symbolizing confidence, charisma, and radiant, warm leadership. Independent yet warm, she shines brightly without losing her approachability, gentle with others yet firm and decisive. Radiate your unique charm, inspire others with confidence and passion, and command your own stage with ease.",
        love: "You radiate magnetic charm and confidence, warm yet independent in love. Draw your partner with sincerity and vitality, in a relationship full of charisma and warmth.",
        career: "You win others' following through confidence and charismatic leadership, skilled at inspiring the team. Passion and ability together suit you to shine and stand on your own.",
        wealth: "You handle finances with confidence and daring, with a keen eye. Skilled at seizing chances, you create income independently, and fortune rises with your charisma.",
        health: "Body and mind brim with vitality and passion, radiant and glowing. A positive, optimistic outlook is the source of health, suiting a lively way of life."
      },
      rev: {
        general: "Reversed, this reveals a lack of confidence or excessive forcefulness. You may grow jealous and suspicious from insecurity, or conversely turn domineering and moody. Your inner light is dimmed by fear. Reconnect with your own worth, and do not let jealousy and self-doubt eat away at your charm and strength.",
        love: "Insecurity breeds jealousy and control, or moodiness sparks friction. Rebuild confidence and do not let unease erode the warmth of the bond.",
        career: "Shaken confidence or excessive forcefulness harms relationships and cooperation. Moody displays weaken your leadership; recover your inner steadiness.",
        wealth: "Unease or impulse leads to financial missteps, and judgment is swayed by emotion. Recover reason and confidence, and manage steadily.",
        health: "Mood swings affect body and mind, and stress and anxiety drain vitality. Soothe the inner unease and rebuild calm and confidence."
      }
    }
  },
  {
    id: 35,
    name: "权杖国王",
    nameEn: "King of Wands",
    arcana: "minor",
    suit: "wands",
    number: 14,
    element: "火",
    elementEn: "Fire",
    img: "assets/cards/wands-14.jpg",
    keywords: { up: ["领导", "远见", "魄力", "感召力"], rev: ["专横", "急躁", "刚愎自用", "好高骛远"] },
    keywordsEn: { up: ["Leadership", "Vision", "Boldness", "Charisma"], rev: ["Tyranny", "Impatience", "Stubbornness", "Overreach"] },
    meaning: {
      up: {
        general: "权杖国王稳坐王座、手握权杖，象征远见卓识的领导力与感召人心的魄力。他是天生的领袖，以热情和魅力凝聚众人，凭借果敢的决断开创大局。发挥你的远见与领导才能，勇于承担、以身作则，成为激励他人前行的力量。",
        love: "以成熟的魅力和担当经营感情，坦率而热情。是可靠而有魄力的伴侣，能给予对方坚定的支持与激励。",
        career: "以卓越的领导力和远见掌控大局，深具感召力。适合创业、管理或领导团队，果敢的决策带来成功。",
        wealth: "以远见和魄力布局财务，善于把握大局。领导性的投资眼光带来丰厚回报，敢于决断、善于开创。",
        health: "精力充沛、意志坚定，充满领袖的活力。以积极进取的态度管理健康，但需注意别过度操劳。"
      },
      rev: {
        general: "逆位暗示领导的失当与刚愎自用。你或许变得专横霸道，独断专行，容不下异议，或因急躁与好高骛远而失去分寸。魄力沦为鲁莽，自信变成傲慢。请倾听他人、收敛锋芒，让远见回归务实的根基。",
        love: "在感情中过于强势或霸道，忽略对方的感受。急躁与固执引发冲突，需要学会尊重与倾听。",
        career: "独断专行、刚愎自用，引发团队的抵触。好高骛远的决策脱离实际，需要务实与谦逊。",
        wealth: "因过度自信或冲动而财务失算，决策脱离现实。需要收敛野心，回归审慎的判断。",
        health: "过度操劳或急躁易怒，透支身心。专横的压力影响健康，需要放缓脚步、学会放松。"
      }
    },
    meaningEn: {
      up: {
        general: "The King of Wands sits firmly on his throne, staff in hand, symbolizing visionary leadership and heart-stirring boldness. A born leader, he unites people through passion and charisma and shapes the larger picture with decisive resolve. Exercise your vision and leadership, dare to take charge, lead by example, and become a force that inspires others forward.",
        love: "You handle love with mature charm and responsibility, frank and passionate. A reliable, bold partner, you offer your other half firm support and encouragement.",
        career: "You command the big picture with outstanding leadership and vision, deeply charismatic. Suited to entrepreneurship, management, or leading a team, your bold decisions bring success.",
        wealth: "You position your finances with vision and boldness, skilled at grasping the whole. A leaderly investment eye brings rich returns; you dare to decide and love to pioneer.",
        health: "Energetic and firm of will, full of a leader's vitality. Manage your health with an active, striving attitude, but take care not to overwork."
      },
      rev: {
        general: "Reversed, this signals leadership gone wrong and stubborn self-will. You may turn domineering and autocratic, brooking no dissent, or lose all measure through impatience and overreach. Boldness curdles into recklessness and confidence into arrogance. Listen to others, temper your edge, and return your vision to a practical foundation.",
        love: "Too forceful or overbearing in love, you overlook your partner's feelings. Impatience and stubbornness spark conflict; learn to respect and listen.",
        career: "Autocratic and headstrong, you provoke the team's resistance. Overreaching decisions detach from reality; practicality and humility are needed.",
        wealth: "Overconfidence or impulse leads to financial miscalculation, with decisions detached from reality. Rein in ambition and return to careful judgment.",
        health: "Overwork or a short, hot temper overdraws body and mind. Domineering pressure harms health; slow your pace and learn to relax."
      }
    }
  },
  {
    id: 36,
    name: "圣杯一",
    nameEn: "Ace of Cups",
    arcana: "minor",
    suit: "cups",
    number: 1,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-01.jpg",
    keywords: { up: ["新感情", "爱的萌芽", "情感丰盈", "直觉"], rev: ["情感压抑", "空虚", "错失", "封闭"] },
    keywordsEn: { up: ["New love", "Emotional beginning", "Overflowing feeling", "Intuition"], rev: ["Blocked emotion", "Emptiness", "Missed chance", "Withdrawal"] },
    meaning: {
      up: {
        general: "一只手自云中托起满溢的圣杯，圣水如泉倾泻，象征爱与情感的全新开端。这是心灵敞开、情感丰盈的时刻，爱、慈悲与喜悦如泉涌流。敞开你的心扉，接纳这份纯净的情感馈赠，让爱在生命中自由流淌、滋养万物。",
        love: "爱情的崭新开端，情感如泉涌动。一段真挚的感情正要萌芽，敞开心扉去爱与被爱，充满温柔与喜悦。",
        career: "工作中充满热情与情感的满足，人际关系融洽。适合从事与创意、关怀或人心相关的领域，灵感丰沛。",
        wealth: "财务上有令人愉悦的新机会，或因人际与善意而得益。以感恩之心对待金钱，好运随之流动。",
        health: "身心得到情感的滋养，充满平和与喜悦。情绪的疗愈带来整体的健康，适合亲近水与自然。"
      },
      rev: {
        general: "逆位暗示情感的压抑与内在的空虚。你或许封闭了自己的心，压抑真实的感受，或因过往的伤痛而难以敞开。爱的泉水被堵塞，让人感到失落与疏离。请温柔地面对内心，重新与自己的情感连结，让爱重新流动。",
        love: "情感压抑或封闭，难以敞开心扉。可能错失一段良缘，或因过往创伤而回避亲密，需要疗愈与勇气。",
        career: "工作缺乏热情与满足感，人际关系冷淡。情感的空虚让人提不起劲，需要重新寻回内在的动力。",
        wealth: "因情绪或人际因素影响财务，或错失机会。心态失衡影响判断，需要平复情绪再做决定。",
        health: "情绪淤积影响身心，感到空虚或低落。压抑的情感需要疏导，别忽视内心的疗愈需求。"
      }
    },
    meaningEn: {
      up: {
        general: "A hand from the clouds holds up an overflowing cup, sacred water cascading like a spring, symbolizing a fresh beginning of love and emotion. This is a moment of an open heart and abundant feeling, as love, compassion, and joy pour forth. Open your heart, receive this pure emotional gift, and let love flow freely through your life and nourish all it touches.",
        love: "A fresh start in love, feeling welling up like a spring. A sincere relationship is about to bud; open your heart to love and be loved, full of tenderness and joy.",
        career: "Work is full of passion and emotional fulfillment, with warm relationships. Fields tied to creativity, care, or the heart suit you, and inspiration flows freely.",
        wealth: "A pleasing new opportunity appears, or you benefit through relationships and goodwill. Treat money with gratitude, and good fortune flows in.",
        health: "Body and mind are nourished by feeling, full of peace and joy. Emotional healing brings overall health; drawing near water and nature suits you."
      },
      rev: {
        general: "Reversed, this signals blocked emotion and inner emptiness. You may have closed your heart, suppressing true feeling, or find it hard to open up because of past hurt. The spring of love is dammed, leaving you feeling lost and distant. Gently face your inner world, reconnect with your own feelings, and let love flow again.",
        love: "Feelings are suppressed or shut away, and opening the heart is hard. You may miss a good match, or avoid intimacy from past wounds; healing and courage are needed.",
        career: "Work lacks passion and fulfillment, and relationships feel cold. Emotional emptiness saps your drive; rediscover your inner motivation.",
        wealth: "Emotions or relationship factors affect finances, or you miss a chance. An unbalanced state of mind skews judgment; settle your emotions before deciding.",
        health: "Bottled-up emotion affects body and mind, and you feel empty or low. Suppressed feelings need an outlet; do not ignore the heart's need for healing."
      }
    }
  },
  {
    id: 37,
    name: "圣杯二",
    nameEn: "Two of Cups",
    arcana: "minor",
    suit: "cups",
    number: 2,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-02.jpg",
    keywords: { up: ["结合", "互相吸引", "伙伴", "和谐"], rev: ["失衡", "误会", "分离", "关系紧张"] },
    keywordsEn: { up: ["Union", "Mutual attraction", "Partnership", "Harmony"], rev: ["Imbalance", "Misunderstanding", "Separation", "Tension"] },
    meaning: {
      up: {
        general: "两人举杯相对、以誓约相连，象征心灵的结合与相互的吸引。这是一段平等而和谐的连结，无论是爱情、友谊还是合作，都建立在真诚与彼此尊重之上。以开放的心迎接这份美好的缘分，两颗心的交融将带来深切的满足。",
        love: "两情相悦、彼此吸引，是感情和谐美满的象征。适合确立关系、订下承诺，一段心灵契合的姻缘正在展开。",
        career: "合作顺利，与伙伴建立互信而融洽的关系。是签订合约、结成同盟的良机，团队默契带来共赢。",
        wealth: "合作性的财务往来顺利，互利共赢。适合与信任的伙伴共同投资或经营，和气生财。",
        health: "身心平衡和谐，情感的滋养带来健康。良好的关系是疗愈的力量，与他人的连结让你身心愉悦。"
      },
      rev: {
        general: "逆位透露出关系的失衡与不和。你或许与对方产生了误会、隔阂，或彼此的付出失去了平衡，连结出现裂痕。曾经的和谐蒙上阴影。请坦诚沟通、化解误会，若关系已难以维系，也要学会优雅地放手。",
        love: "感情出现失衡、误会或裂痕，甜蜜不再。可能面临分离或冷战，需要真诚沟通，重建彼此的信任。",
        career: "合作关系紧张，出现分歧或信任危机。伙伴间失去默契，需要坦诚化解，重新找回平衡。",
        wealth: "合作性财务出现纠纷或失衡，利益分配不均。需谨慎处理，避免因误会而损失。",
        health: "情感失衡或关系压力影响身心。人际的摩擦消耗能量，需要修复连结、安抚情绪。"
      }
    },
    meaningEn: {
      up: {
        general: "Two figures raise their cups toward each other, bound by a vow, symbolizing the union of hearts and mutual attraction. This is an equal, harmonious connection, whether love, friendship, or partnership, built on sincerity and mutual respect. Welcome this lovely bond with an open heart, for the merging of two hearts brings deep fulfillment.",
        love: "Mutual feeling and attraction, a picture of harmonious, fulfilling love. A good time to define the relationship and make a commitment, as a soul-matched union unfolds.",
        career: "Collaboration flows well, building trust and rapport with a partner. A fine time to sign a contract or form an alliance, as team chemistry brings mutual success.",
        wealth: "Collaborative finances flow smoothly, to mutual benefit. Investing or running a venture with a trusted partner suits you; harmony brings prosperity.",
        health: "Body and mind are balanced and harmonious, and emotional nourishment brings health. A good relationship is a healing force, and connection with others gladdens you."
      },
      rev: {
        general: "Reversed, this reveals imbalance and discord in a relationship. You may have fallen into misunderstanding and estrangement, or the giving between you has lost its balance and a crack appears. The former harmony is shadowed. Communicate honestly and clear the air; and if the bond can no longer hold, learn to let go with grace.",
        love: "Imbalance, misunderstanding, or a rift appears, and the sweetness fades. Separation or a cold war may loom; sincere communication is needed to rebuild trust.",
        career: "A partnership grows tense, with disagreement or a crisis of trust. Rapport is lost between partners; resolve it honestly and restore the balance.",
        wealth: "Collaborative finances hit disputes or imbalance, with uneven splits. Handle it carefully to avoid loss from misunderstanding.",
        health: "Emotional imbalance or relationship stress affects body and mind. Interpersonal friction drains energy; mend the connection and soothe your emotions."
      }
    }
  },
  {
    id: 38,
    name: "圣杯三",
    nameEn: "Three of Cups",
    arcana: "minor",
    suit: "cups",
    number: 3,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-03.jpg",
    keywords: { up: ["欢庆", "友谊", "团聚", "喜悦"], rev: ["过度放纵", "三角关系", "疏离", "流言"] },
    keywordsEn: { up: ["Celebration", "Friendship", "Community", "Joy"], rev: ["Overindulgence", "Love triangle", "Estrangement", "Gossip"] },
    meaning: {
      up: {
        general: "三位女子举杯共舞、欢庆丰收，象征友谊、团聚与共享的喜悦。这是值得庆祝的欢乐时光，与挚友、家人或社群共度美好。珍视身边支持你的人，敞开心怀分享成果与欢笑，情谊的温暖将让生活更加丰盈美满。",
        love: "感情欢乐甜蜜，充满温馨的相处。适合与亲友分享喜悦，或在社交场合结识良缘，关系轻松而美好。",
        career: "团队合作愉快，共享成功的喜悦。人脉与友谊助你一臂之力，适合庆祝成果、拓展社交圈。",
        wealth: "财务上有值得庆祝的收获，或因人脉而得益。适合与他人共享资源，团体合作带来丰收。",
        health: "身心愉悦，社交与欢聚带来滋养。良好的情谊是健康的良药，享受与人相处的温暖时光。"
      },
      rev: {
        general: "逆位暗示欢庆的过度或人际的失和。你或许沉溺于放纵与享乐，忽略了真正重要的事，或友谊中出现了流言、嫉妒与疏离。也可能涉及复杂的三角关系。请珍惜真诚的情谊，远离虚浮的应酬与是非。",
        love: "感情出现第三者或复杂的三角关系。也可能因过度社交而忽略彼此，需要回归两人真诚的相处。",
        career: "团队出现小圈子、流言或不和。过度的应酬分散精力，需要专注正事、远离是非。",
        wealth: "因过度享乐或社交应酬而破财。人际中的复杂关系影响财务，需谨慎理性。",
        health: "过度放纵、饮食无度影响健康。社交疲劳或情绪耗损让人透支，需要节制与休整。"
      }
    },
    meaningEn: {
      up: {
        general: "Three women raise their cups and dance in celebration of the harvest, symbolizing friendship, community, and shared joy. This is a happy time worth celebrating, spent well with close friends, family, or community. Cherish those who support you, share your results and laughter with an open heart, and let the warmth of fellowship make life richer and fuller.",
        love: "Love is joyful and sweet, full of warm companionship. A good time to share happiness with loved ones, or meet someone at a social gathering; the bond is easy and lovely.",
        career: "Teamwork is happy and success is shared. Connections and friendship lend you a hand; a good time to celebrate results and widen your social circle.",
        wealth: "A financial gain worth celebrating appears, or you benefit through your network. Sharing resources suits you, and group collaboration brings a rich yield.",
        health: "Body and mind are glad, and socializing and gathering nourish you. Good fellowship is fine medicine; enjoy warm time in others' company."
      },
      rev: {
        general: "Reversed, this hints at celebration taken too far or discord among friends. You may be lost in indulgence and pleasure, neglecting what truly matters, or friendship may fray with gossip, envy, and estrangement. A tangled love triangle may be involved. Cherish sincere fellowship and keep away from empty socializing and intrigue.",
        love: "A third party or a tangled love triangle appears. Or excess socializing makes you neglect each other; return to sincere time as a couple.",
        career: "Cliques, gossip, or discord surface in the team. Excess socializing scatters your energy; focus on real work and steer clear of intrigue.",
        wealth: "Overindulgence or social spending drains money. Tangled relationships affect finances; be careful and rational.",
        health: "Overindulgence and unrestrained eating harm health. Social fatigue or emotional drain overdraws you; practice moderation and rest."
      }
    }
  },
  {
    id: 39,
    name: "圣杯四",
    nameEn: "Four of Cups",
    arcana: "minor",
    suit: "cups",
    number: 4,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-04.jpg",
    keywords: { up: ["冷漠", "厌倦", "内省", "错失机会"], rev: ["重燃兴趣", "接受", "觉醒", "把握机会"] },
    keywordsEn: { up: ["Apathy", "Boredom", "Contemplation", "Missed opportunity"], rev: ["Renewed interest", "Acceptance", "Awakening", "Seizing chances"] },
    meaning: {
      up: {
        general: "一人抱臂坐于树下，对眼前递来的圣杯视而不见，象征冷漠、厌倦与向内的沉思。你或许陷入了倦怠与不满，对周遭的机会麻木不觉。这是一段需要内省的时期，但别让消极的情绪蒙蔽双眼，错失了近在眼前的美好。",
        love: "感情陷入平淡或倦怠，缺乏激情与投入。可能对眼前的缘分视而不见，需要重新审视内心真正的渴望。",
        career: "工作感到厌倦、提不起劲，对机会漠不关心。可能错失眼前的良机，需要打起精神、重新发现价值。",
        wealth: "对财务机会兴趣缺缺或视而不见。消极的心态让人错失良机，需要重新审视、把握眼前的可能。",
        health: "身心感到倦怠或情绪低落，缺乏活力。内在的沉闷需要疏导，别让消极情绪影响整体状态。"
      },
      rev: {
        general: "逆位暗示重燃的兴趣与觉醒。你或许走出了倦怠与冷漠，重新对生活燃起热情，愿意接纳新的机会。沉思之后的顿悟让你看清了方向。把握这股重新振作的能量，敞开心扉迎接眼前的美好与可能。",
        love: "重新对感情燃起兴趣，走出倦怠。愿意敞开心扉接纳缘分，或修复一段冷淡的关系，重拾热情。",
        career: "走出厌倦，重新找回工作的动力与热情。愿意把握之前忽略的机会，积极行动带来转机。",
        wealth: "重新关注财务机会，走出消极。以觉醒的心态把握之前错过的可能，财运随积极而回升。",
        health: "身心重新焕发活力，走出低落。愿意积极照顾自己，恢复良好的状态与生活热情。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure sits under a tree with folded arms, ignoring the cup offered before him, symbolizing apathy, boredom, and inward contemplation. You may be caught in weariness and discontent, numb to the opportunities around you. This is a time that calls for reflection, but do not let negative feeling blind you and cause you to miss the good that lies right before you.",
        love: "Love slips into dullness or boredom, lacking passion and involvement. You may overlook the connection before you; reexamine what your heart truly longs for.",
        career: "Work feels tiresome and uninspiring, and you are indifferent to opportunity. You may miss a good chance close at hand; rouse yourself and rediscover its value.",
        wealth: "Little interest in or notice of financial opportunity. A negative mindset costs you good chances; reexamine and seize the possibilities before you.",
        health: "Body and mind feel weary or low, lacking vitality. Inner dullness needs an outlet; do not let negativity affect your overall state."
      },
      rev: {
        general: "Reversed, this signals renewed interest and awakening. You may be emerging from weariness and apathy, rekindling passion for life and willing to accept new chances. Insight after reflection shows you the way. Seize this energy of revival, open your heart, and welcome the good and possibility before you.",
        love: "Interest in love rekindles and you emerge from boredom. Willing to open your heart to a connection, or mend a cooled relationship, you rediscover passion.",
        career: "Emerging from tedium, you recover drive and passion for work. Willing to seize a chance you overlooked, active effort brings a turn for the better.",
        wealth: "You refocus on financial opportunity and shake off negativity. With an awakened mindset, seize the chances you missed, and fortune rises with your activity.",
        health: "Body and mind revive with vitality as you emerge from a low. Willing to care for yourself actively, you recover a good state and zest for life."
      }
    }
  },
  {
    id: 40,
    name: "圣杯五",
    nameEn: "Five of Cups",
    arcana: "minor",
    suit: "cups",
    number: 5,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-05.jpg",
    keywords: { up: ["失落", "遗憾", "悲伤", "沉溺过去"], rev: ["接受", "释怀", "复原", "看见希望"] },
    keywordsEn: { up: ["Loss", "Regret", "Grief", "Dwelling on the past"], rev: ["Acceptance", "Letting go", "Recovery", "Finding hope"] },
    meaning: {
      up: {
        general: "一人低头凝视倾倒的三只杯子，却未看见身后仍立着的两只，象征失落、遗憾与悲伤。你或许正沉浸在损失的痛苦中，为逝去的事物而神伤。悲伤是必经的历程，但别忘了回头看看——尚有未倒的圣杯，希望仍在你身后静静等待。",
        love: "感情遭遇失落或遗憾，为过往的伤痛而悲伤。沉溺于失去让人忽略了仍存的美好，需要疗愈与转身。",
        career: "工作上遭遇挫败或失望，为未竟之事懊悔。别只看见失去，尚有转机与资源值得珍惜与把握。",
        wealth: "财务上有损失或投资失利，令人沮丧。别沉溺于懊悔，理性面对现状，仍有可挽回的余地。",
        health: "情绪低落、悲伤消沉影响身心。沉浸于负面情绪不利康复，需要疗愈心灵、重新看见希望。"
      },
      rev: {
        general: "逆位透露出接受与释怀的转机。你正逐渐走出失落的阴霾，学会与遗憾和解，看见身后仍存的希望。悲伤开始沉淀，宽恕与放下让心灵重获轻盈。带着从伤痛中汲取的智慧，转身迎向新的可能与疗愈。",
        love: "从感情的伤痛中逐渐复原，学会释怀。愿意放下过往、重新出发，或修复一段受伤的关系，重拾希望。",
        career: "走出挫败的阴影，重新振作。接受既成的事实，把握仍存的机会，从失败中汲取宝贵的经验。",
        wealth: "财务损失逐渐平复，开始理性面对。放下懊悔、重新规划，把握尚存的资源，稳步复原。",
        health: "情绪逐渐平复，身心走出低谷。学会释怀与自我疗愈，以积极的心态重建健康与希望。"
      }
    },
    meaningEn: {
      up: {
        general: "A cloaked figure gazes down at three spilled cups, not seeing the two still standing behind, symbolizing loss, regret, and grief. You may be immersed in the pain of loss, grieving what is gone. Sorrow is a passage that must be walked, but do not forget to look back, for cups still stand upright and hope waits quietly behind you.",
        love: "Love meets loss or regret, and you grieve past hurt. Dwelling on what is gone blinds you to the good that remains; healing and turning around are needed.",
        career: "Setback or disappointment at work leaves you rueing what went unfinished. Do not see only the loss; there are still turns and resources worth cherishing and seizing.",
        wealth: "A financial loss or failed investment is disheartening. Do not wallow in regret; face the situation rationally, for there is still room to recover.",
        health: "Low spirits and grief affect body and mind. Immersion in negative feeling hinders recovery; heal the heart and find hope again."
      },
      rev: {
        general: "Reversed, this reveals a turn toward acceptance and letting go. You are gradually emerging from the shadow of loss, learning to make peace with regret and seeing the hope that still stands behind you. Grief begins to settle, and forgiveness and release make the heart light again. Carrying the wisdom drawn from pain, turn toward new possibility and healing.",
        love: "You gradually recover from love's hurt and learn to let go. Willing to release the past and begin again, or mend a wounded bond, you regain hope.",
        career: "Emerging from the shadow of setback, you rally. Accept what is done, seize the chances that remain, and draw valuable lessons from failure.",
        wealth: "The financial loss gradually settles and you begin to face it rationally. Release regret, re-plan, seize the resources still at hand, and steadily recover.",
        health: "Emotions gradually settle and body and mind climb out of the trough. Learn to let go and self-heal, rebuilding health and hope with a positive outlook."
      }
    }
  },
  {
    id: 41,
    name: "圣杯六",
    nameEn: "Six of Cups",
    arcana: "minor",
    suit: "cups",
    number: 6,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-06.jpg",
    keywords: { up: ["怀旧", "纯真", "重逢", "温暖回忆"], rev: ["困于过去", "逃避现实", "长不大", "放下往事"] },
    keywordsEn: { up: ["Nostalgia", "Innocence", "Reunion", "Fond memories"], rev: ["Stuck in the past", "Escapism", "Refusing to grow", "Moving on"] },
    meaning: {
      up: {
        general: "孩童在庭院中互赠盛满鲜花的圣杯，画面温馨纯真，象征怀旧、童真与温暖的回忆。往昔的美好浮现心头，或有故人重逢、旧缘再续。以纯真善良之心对待他人，从过去的温情中汲取力量，让单纯的快乐重新滋养你的心灵。",
        love: "旧情复燃或与故人重逢，感情充满纯真与温情。以真诚善良经营关系，青梅竹马般的甜蜜带来幸福。",
        career: "旧的人脉或机会重现，故友相助。以真诚待人赢得信任，怀旧或经典的方向反而带来助力。",
        wealth: "可能有来自过往的收益，如旧投资回报或家族的馈赠。以善意分享，财运在温情中流动。",
        health: "身心在温暖回忆与单纯快乐中得到疗愈。回归简单纯粹的生活方式，让心灵重获宁静与滋养。"
      },
      rev: {
        general: "逆位暗示困于过去或逃避现实。你或许过度沉湎于往昔，不愿面对当下，或用美化的回忆逃避成长的责任。留恋过去让你止步不前。请珍惜回忆但也要向前看，放下不再适合的往事，勇敢地活在当下。",
        love: "沉溺于过往的感情，难以放下旧人旧事。用回忆逃避现实的关系，需要面对当下、勇敢向前。",
        career: "困守过时的方式或旧有的舒适圈，抗拒改变。沉湎于往日的成就让人停滞，需要与时俱进。",
        wealth: "依赖过往的模式或家庭支援，缺乏独立。逃避现实的财务问题，需要面对当下、重新规划。",
        health: "沉溺于负面的过往或旧习惯影响健康。逃避现实的压力不利身心，需要活在当下、积极面对。"
      }
    },
    meaningEn: {
      up: {
        general: "Children exchange cups brimming with flowers in a courtyard, a scene warm and innocent, symbolizing nostalgia, childlike purity, and fond memories. The sweetness of the past rises in the heart, or an old friend returns and a former bond renews. Treat others with an innocent, kind heart, draw strength from past warmth, and let simple joy nourish your spirit anew.",
        love: "Old feelings rekindle or an old flame returns, love full of innocence and warmth. Nurtured with sincerity and kindness, a childhood-sweetheart tenderness brings happiness.",
        career: "Old contacts or opportunities resurface and old friends lend a hand. Winning trust through sincerity, a nostalgic or classic direction proves surprisingly helpful.",
        wealth: "Gains may come from the past, such as returns on an old investment or a family gift. Sharing with goodwill, fortune flows through warmth.",
        health: "Body and mind heal through warm memories and simple joy. Returning to a simple, pure way of life restores peace and nourishment to the spirit."
      },
      rev: {
        general: "Reversed, this hints at being stuck in the past or escaping reality. You may dwell too much in bygone days, unwilling to face the present, or use idealized memories to dodge the responsibility of growing up. Clinging to the past keeps you from moving forward. Cherish memories but look ahead; release what no longer fits and bravely live in the present.",
        love: "Immersed in a past relationship, you struggle to release old people and old matters. Using memory to avoid the present bond, face the here and now and move bravely forward.",
        career: "Clinging to outdated methods or an old comfort zone, you resist change. Dwelling on past achievement leaves you stuck; keep pace with the times.",
        wealth: "Relying on old patterns or family support, you lack independence. Avoiding present financial problems, face the now and re-plan.",
        health: "Dwelling on a negative past or old habits harms health. Escaping present pressure hurts body and mind; live in the present and face things actively."
      }
    }
  },
  {
    id: 42,
    name: "圣杯七",
    nameEn: "Seven of Cups",
    arcana: "minor",
    suit: "cups",
    number: 7,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-07.jpg",
    keywords: { up: ["幻想", "选择", "白日梦", "诱惑"], rev: ["清醒", "抉择", "务实", "看清真相"] },
    keywordsEn: { up: ["Fantasy", "Choices", "Daydreams", "Illusion"], rev: ["Clarity", "Decision", "Practicality", "Seeing through"] },
    meaning: {
      up: {
        general: "云端浮现七只圣杯，各自盛着财富、桂冠、幻影等诱惑，象征幻想、众多选择与虚实交织的迷惑。眼前的可能性令人眼花缭乱，却也真假难辨。别被空想与诱惑迷了眼，需要脚踏实地地分辨，看清哪些是海市蜃楼，哪些才是真实可行的道路。",
        love: "感情充满幻想或选择的迷惑，难以看清真心。可能陷入不切实际的憧憬，需要认清现实，别被表象迷惑。",
        career: "面临众多选择或机会，令人难以取舍。别被不切实际的空想迷惑，需要务实评估，聚焦真正可行的方向。",
        wealth: "财务上面临多种诱惑或选择，眼花缭乱。警惕好高骛远的空想与投机，需要理性分辨、脚踏实地。",
        health: "身心易受幻想或情绪迷惑，缺乏清晰。逃避现实或沉溺空想不利健康，需要回归务实的生活。"
      },
      rev: {
        general: "逆位透露出清醒与抉择的到来。你或许从迷惑的幻想中醒来，看清了虚实，终于能做出务实而明确的决定。海市蜃楼消散，方向渐渐清晰。带着这份清明，聚焦真正重要的目标，脚踏实地地付诸行动。",
        love: "从感情的幻想中清醒，看清真实的关系。做出明确的选择，不再被虚幻的憧憬迷惑，回归务实。",
        career: "走出选择的迷惘，聚焦明确的目标。看清哪些机会切实可行，以务实的行动取代空想。",
        wealth: "从投机的诱惑中清醒，回归理性。看清真正可行的财务方向，做出脚踏实地的决定。",
        health: "身心走出迷惑，重获清晰。愿意面对现实、务实地照顾健康，以清醒的心态重建生活。"
      }
    },
    meaningEn: {
      up: {
        general: "Seven cups float amid the clouds, each holding a temptation, treasure, a laurel, a phantom, symbolizing fantasy, many choices, and a bewildering blur of real and unreal. The possibilities before you dazzle, yet true and false are hard to tell apart. Do not be dazzled by daydreams and temptation; discern with your feet on the ground, and see which are mirages and which are truly viable paths.",
        love: "Love is full of fantasy or bewildering choices, and true feeling is hard to see. You may fall into unrealistic longing; face reality and do not be fooled by appearances.",
        career: "You face many choices or opportunities and struggle to choose. Do not be misled by impractical daydreams; assess realistically and focus on the truly viable direction.",
        wealth: "You face many financial temptations or choices, dazzling and confusing. Beware over-ambitious fantasies and speculation; discern rationally and stay grounded.",
        health: "Body and mind are easily fooled by fantasy or emotion, lacking clarity. Escaping reality or dwelling on daydreams hurts health; return to a practical life."
      },
      rev: {
        general: "Reversed, this reveals the arrival of clarity and decision. You may be waking from bewildering fantasy, seeing truth from illusion, and finally able to make a practical, clear choice. The mirage dissolves and the direction grows clear. Carry this clarity, focus on what truly matters, and act on it with your feet on the ground.",
        love: "You wake from romantic fantasy and see the real relationship. Making a clear choice, no longer fooled by illusory longing, you return to the practical.",
        career: "Emerging from a maze of choices, you focus on a clear goal. Seeing which opportunities are truly viable, you replace daydreams with practical action.",
        wealth: "Waking from the lure of speculation, you return to reason. Seeing the truly viable financial direction, you make a grounded decision.",
        health: "Body and mind emerge from confusion into clarity. Willing to face reality and care for health practically, you rebuild life with a clear mind."
      }
    }
  },
  {
    id: 43,
    name: "圣杯八",
    nameEn: "Eight of Cups",
    arcana: "minor",
    suit: "cups",
    number: 8,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-08.jpg",
    keywords: { up: ["离开", "追寻", "放下", "转身"], rev: ["徘徊", "害怕改变", "回头", "逃避"] },
    keywordsEn: { up: ["Walking away", "Seeking", "Letting go", "Moving on"], rev: ["Wavering", "Fear of change", "Turning back", "Avoidance"] },
    meaning: {
      up: {
        general: "一人在月夜下背对着堆叠的圣杯，独自走向远方的山峦，象征主动的离开、放下与更深的追寻。你意识到眼前的一切已无法满足内心，毅然转身去寻找更有意义的方向。这需要勇气，但唯有放下已完成的过往，才能踏上真正的心灵之旅。",
        love: "选择离开一段无法满足内心的关系，追寻真正的归属。放下虽然艰难，却是忠于自我的勇敢决定。",
        career: "毅然离开安稳却不再有意义的工作，追寻更深的价值。转身需要勇气，前方有更契合心灵的道路。",
        wealth: "放下不再有前景的财务模式，转向更有意义的方向。舍弃眼前的安逸，为长远的追寻做准备。",
        health: "为了身心的健康而放下消耗你的一切。转身离开不良的环境或习惯，踏上自我疗愈的旅程。"
      },
      rev: {
        general: "逆位暗示离开的徘徊与害怕改变。你或许在去留之间反复挣扎，明知该放下却依依不舍，或因恐惧未知而不敢转身。也可能是逃避问题的仓皇出走。请厘清内心真正的方向，别在原地徘徊，也别用逃避代替真正的放下。",
        love: "在感情的去留间徘徊挣扎，害怕放手也害怕改变。需要看清内心，别在犹豫中消耗彼此。",
        career: "想离开却害怕改变，在原地反复纠结。也可能是逃避问题的冲动离职，需要厘清真正的方向。",
        wealth: "在财务的抉择间犹豫不决，害怕放下已投入的。需要理性评估，别因留恋沉没成本而受困。",
        health: "明知需要改变却难以行动，在旧习惯中徘徊。逃避面对问题不利康复，需要下定决心。"
      }
    },
    meaningEn: {
      up: {
        general: "Under a moonlit sky, a figure turns his back on a stack of cups and walks alone toward distant mountains, symbolizing a deliberate departure, release, and a deeper search. You realize that what lies before you can no longer satisfy your heart, and resolutely turn to seek a more meaningful direction. It takes courage, but only by releasing a completed past can you set out on a true journey of the soul.",
        love: "You choose to leave a relationship that cannot satisfy your heart and seek true belonging. Letting go is hard, but it is a brave decision true to yourself.",
        career: "You resolutely leave stable but no longer meaningful work to seek deeper value. Turning away takes courage; a path more aligned with your heart lies ahead.",
        wealth: "You release a financial approach with no future and turn toward something more meaningful. Giving up present ease, you prepare for a longer-term pursuit.",
        health: "For the sake of your well-being, you release all that drains you. Turning away from a harmful environment or habit, you set out on a journey of self-healing."
      },
      rev: {
        general: "Reversed, this hints at wavering over leaving and fear of change. You may struggle back and forth between staying and going, knowing you should let go yet clinging on, or afraid to turn away from the unknown. It may also be a panicked flight that avoids the problem. Clarify the direction your heart truly wants; do not linger in place, nor let avoidance stand in for true release.",
        love: "You waver between staying and leaving, afraid both to let go and to change. See your heart clearly and do not wear each other down in hesitation.",
        career: "You want to leave but fear change, tangled in place. Or an impulsive quit avoids the problem; clarify your true direction.",
        wealth: "Indecisive over a financial choice, you fear releasing what you have invested. Assess rationally and do not be trapped by clinging to sunk costs.",
        health: "You know change is needed yet struggle to act, lingering in old habits. Avoiding the problem hinders recovery; make up your mind."
      }
    }
  },
  {
    id: 44,
    name: "圣杯九",
    nameEn: "Nine of Cups",
    arcana: "minor",
    suit: "cups",
    number: 9,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-09.jpg",
    keywords: { up: ["满足", "愿望成真", "幸福", "享受"], rev: ["虚荣", "贪求", "不满足", "空洞的快乐"] },
    keywordsEn: { up: ["Contentment", "Wishes fulfilled", "Happiness", "Indulgence"], rev: ["Vanity", "Greed", "Dissatisfaction", "Hollow pleasure"] },
    meaning: {
      up: {
        general: "一人心满意足地端坐，身后九只圣杯排列成排，象征满足、愿望成真与由衷的幸福。这是塔罗中的「许愿牌」，预示心愿得偿、丰盛安逸。尽情享受这份来之不易的满足与喜悦，感恩当下的美好，你所渴望的正在或即将实现。",
        love: "感情美满幸福，心愿得偿。享受甜蜜与满足的关系，单身者可望遇到理想的对象，愿望正在成真。",
        career: "事业顺遂，达成心愿、备感满足。努力换来了丰盛的成果，享受成就带来的自信与喜悦。",
        wealth: "财运丰盈，物质愿望得以满足。收获颇丰、生活富足，是享受劳动成果、心满意足的时刻。",
        health: "身心舒适满足，充满幸福感。良好的状态让人身心愉悦，适度享受生活的美好与安逸。"
      },
      rev: {
        general: "逆位透露出满足的空洞或过度的贪求。你或许拥有了物质却仍感到内心空虚，或沉溺于虚荣与享乐，永不知足。表面的快乐掩盖了真正的匮乏。请审视内心真正的渴望，别让贪求蒙蔽了幸福的本质，回归简单的满足。",
        love: "感情表面美满却缺乏深度，或因贪求而不知足。虚荣的满足难以填补内心，需要真诚的情感连结。",
        career: "成就带来的满足感空洞，或因贪心而永不知足。表面的成功掩盖了内在的匮乏，需要审视真正的追求。",
        wealth: "物质的满足难以填补空虚，或因贪婪而过度消费。警惕虚荣的挥霍，回归务实与知足。",
        health: "过度享乐或放纵影响健康，如暴饮暴食。表面的满足掩盖了身心的失衡，需要节制与自省。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure sits contentedly with nine cups arrayed in a row behind him, symbolizing satisfaction, wishes fulfilled, and heartfelt happiness. Known as the wish card of the tarot, it foretells desires granted and abundant ease. Savor fully this hard-won contentment and joy, be grateful for the present good, for what you long for is being, or is about to be, fulfilled.",
        love: "Love is happy and fulfilling, and wishes are granted. Enjoy a sweet, satisfying bond; singles may meet an ideal match, as your wish comes true.",
        career: "Your career goes smoothly, your wish fulfilled and deeply satisfying. Effort has brought abundant results; enjoy the confidence and joy that achievement brings.",
        wealth: "Finances are abundant and material wishes are met. With rich gains and a comfortable life, it is a time to enjoy the fruits of your labor with contentment.",
        health: "Body and mind are comfortable and content, full of well-being. A good state gladdens you; enjoy life's beauty and ease in measure."
      },
      rev: {
        general: "Reversed, this reveals hollow satisfaction or excessive greed. You may possess material things yet still feel empty within, or be lost in vanity and pleasure, never satisfied. Surface happiness masks a real lack. Examine what your heart truly longs for, do not let craving blind you to the essence of happiness, and return to simple contentment.",
        love: "Love looks fulfilling on the surface but lacks depth, or craving leaves you unsatisfied. Vain satisfaction cannot fill the heart; a sincere emotional bond is needed.",
        career: "The satisfaction of achievement rings hollow, or greed leaves you never content. Surface success masks inner lack; examine what you truly pursue.",
        wealth: "Material satisfaction cannot fill the emptiness, or greed drives overspending. Beware vain extravagance and return to practicality and contentment.",
        health: "Overindulgence or excess, like overeating, harms health. Surface satisfaction masks an imbalance of body and mind; moderation and reflection are needed."
      }
    }
  },
  {
    id: 45,
    name: "圣杯十",
    nameEn: "Ten of Cups",
    arcana: "minor",
    suit: "cups",
    number: 10,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-10.jpg",
    keywords: { up: ["圆满", "家庭幸福", "和谐", "情感满足"], rev: ["家庭失和", "破裂的理想", "疏离", "表面和谐"] },
    keywordsEn: { up: ["Fulfillment", "Family happiness", "Harmony", "Emotional bliss"], rev: ["Family discord", "Broken ideals", "Estrangement", "Superficial harmony"] },
    meaning: {
      up: {
        general: "一家人在彩虹下相拥欢庆，孩童雀跃嬉戏，象征情感的圆满、家庭的幸福与和谐的归属。这是心灵满足的巅峰，爱、温暖与团聚交织成美满的画面。珍惜这份来自亲密关系的幸福，与所爱之人共享生命的喜悦，圆满就在此刻。",
        love: "感情圆满幸福，和谐美满、心灵契合。适合步入婚姻或组建家庭，充满爱与承诺的关系令人向往。",
        career: "工作与生活和谐平衡，团队如家人般融洽。事业带来情感的满足与归属感，是幸福圆满的写照。",
        wealth: "财务稳定丰盈，为家庭带来安稳与幸福。物质与情感双丰收，享受与所爱之人共享的富足。",
        health: "身心和谐圆满，充满幸福与安宁。和睦的家庭与情感是健康的基石，整体状态平和而美好。"
      },
      rev: {
        general: "逆位暗示家庭的失和或理想的破裂。你或许在追求圆满的表象下，掩盖着疏离与不满，或家庭关系出现了裂痕。理想中的幸福与现实产生了落差。请正视被忽略的情感需求，用心修复关系，别让表面的和谐掩盖真正的问题。",
        love: "感情的理想与现实落差，出现疏离或不和。表面和谐下暗藏问题，需要真诚沟通，修复情感的裂痕。",
        career: "工作与生活失衡，团队关系表面融洽却暗藏矛盾。缺乏真正的归属感，需要重建和谐与信任。",
        wealth: "为家庭的财务承担压力，或理想的富足未能实现。需要务实规划，别让物质压力破坏和谐。",
        health: "家庭或情感的失和影响身心，感到疏离或不满。压抑的情绪需要疏导，修复关系有助身心康健。"
      }
    },
    meaningEn: {
      up: {
        general: "A family embraces in celebration beneath a rainbow as children play joyfully, symbolizing emotional fulfillment, family happiness, and harmonious belonging. This is the peak of heartfelt contentment, love, warmth, and togetherness woven into a picture of bliss. Cherish this happiness born of close bonds, share life's joy with those you love, for fulfillment is here in this very moment.",
        love: "Love is complete and happy, harmonious and soul-matched. Well suited to marriage or building a family, a bond full of love and commitment is deeply desirable.",
        career: "Work and life are in harmonious balance, the team as warm as family. Your work brings emotional fulfillment and belonging, a picture of complete happiness.",
        wealth: "Finances are stable and abundant, bringing security and happiness to the family. A double harvest of material and emotional wealth; enjoy shared abundance with loved ones.",
        health: "Body and mind are harmonious and whole, full of happiness and peace. A harmonious family and warm bonds are the cornerstone of health, your overall state calm and lovely."
      },
      rev: {
        general: "Reversed, this hints at family discord or broken ideals. Beneath the pursuit of a picture-perfect fulfillment, you may be masking estrangement and discontent, or a crack has appeared in family bonds. The imagined happiness falls short of reality. Face the emotional needs you have overlooked, mend the bonds with care, and do not let surface harmony hide the real problems.",
        love: "The ideal of love falls short of reality, and estrangement or discord appears. Problems hide beneath a harmonious surface; sincere communication is needed to mend the rift.",
        career: "Work and life fall out of balance, and team relations look warm but hide tension. Lacking real belonging, you must rebuild harmony and trust.",
        wealth: "You bear pressure over the family's finances, or the imagined abundance is not realized. Plan practically and do not let material strain break the harmony.",
        health: "Family or emotional discord affects body and mind, and you feel distant or unhappy. Suppressed emotion needs an outlet, and mending bonds aids health."
      }
    }
  },
  {
    id: 46,
    name: "圣杯侍从",
    nameEn: "Page of Cups",
    arcana: "minor",
    suit: "cups",
    number: 11,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-11.jpg",
    keywords: { up: ["感性", "创意", "浪漫", "惊喜消息"], rev: ["情绪化", "不成熟", "逃避", "灵感受阻"] },
    keywordsEn: { up: ["Sensitivity", "Creativity", "Romance", "Sweet news"], rev: ["Moodiness", "Immaturity", "Escapism", "Creative block"] },
    meaning: {
      up: {
        general: "圣杯侍从手托圣杯，杯中跃出一条鱼，象征感性、创意与来自内心的惊喜。他是温柔而富有想象力的信使，带来浪漫的消息或灵感的火花。敞开心扉，聆听直觉与情感的低语，以纯真而柔软的心去感受这个世界的诗意与美好。",
        love: "一段浪漫温柔的感情正要萌芽，或收到令人心动的示爱。以真诚和感性去表达，享受爱情初萌的甜蜜。",
        career: "涌现富有创意的点子或灵感，适合从事艺术、创意工作。以敏锐的感受力和想象力投入，会有惊喜的收获。",
        wealth: "可能有来自意外或直觉的小机会。以感性但不失谨慎的态度对待，别忽略内心的灵感提示。",
        health: "身心敏感而柔软，情绪对健康影响较大。适合以创意与情感的表达疗愈自己，亲近水与艺术。"
      },
      rev: {
        general: "逆位透露出情绪化与不成熟。你或许过度敏感、易受伤害，或用幻想逃避现实的责任。创意的灵感受阻，情感变得脆弱而多变。请学会成熟地面对情绪，别让敏感沦为逃避的借口，温柔而坚定地成长。",
        love: "感情中过于情绪化或不成熟，患得患失。可能用幻想逃避真实的关系，需要更稳定的情感态度。",
        career: "创意受阻或情绪影响工作，难以专注。不成熟的态度让人难以承担责任，需要脚踏实地。",
        wealth: "因情绪化或不切实际而财务失当。缺乏务实的判断，需要收敛幻想，理性对待金钱。",
        health: "情绪波动大、易感脆弱，影响身心。逃避现实压力不利健康，需要正视并疏导内在情绪。"
      }
    },
    meaningEn: {
      up: {
        general: "The Page of Cups holds a cup from which a fish leaps, symbolizing sensitivity, creativity, and a surprise from the heart. A gentle, imaginative messenger, he brings romantic news or a spark of inspiration. Open your heart, listen to the whispers of intuition and feeling, and take in the poetry and beauty of the world with an innocent, tender heart.",
        love: "A tender, romantic bond is about to bud, or a heart-stirring gesture of love arrives. Express yourself with sincerity and feeling, and savor the sweetness of new love.",
        career: "Creative ideas or inspiration surface, suiting art and creative work. Dive in with keen feeling and imagination, and pleasant surprises await.",
        wealth: "A small chance may come from the unexpected or from intuition. Approach it with feeling but not without care, and do not ignore the hints of inner inspiration.",
        health: "Body and mind are sensitive and tender, and emotions strongly affect health. Heal yourself through creative and emotional expression, drawing near water and art."
      },
      rev: {
        general: "Reversed, this reveals moodiness and immaturity. You may be overly sensitive and easily hurt, or use fantasy to escape real responsibility. Creative inspiration is blocked, and feelings turn fragile and changeable. Learn to face your emotions with maturity, do not let sensitivity become an excuse to escape, and grow with tenderness and resolve.",
        love: "Overly emotional or immature in love, you fret over every gain and loss. You may use fantasy to avoid the real relationship; a steadier emotional stance is needed.",
        career: "Creative block or emotions affect work, and focus is hard. An immature attitude makes it hard to shoulder responsibility; stay grounded.",
        wealth: "Moodiness or unrealistic notions lead to financial missteps. Lacking practical judgment, rein in fantasy and treat money rationally.",
        health: "Large mood swings and fragility affect body and mind. Escaping real pressure harms health; face and channel your inner emotions."
      }
    }
  },
  {
    id: 47,
    name: "圣杯骑士",
    nameEn: "Knight of Cups",
    arcana: "minor",
    suit: "cups",
    number: 12,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-12.jpg",
    keywords: { up: ["浪漫", "追随内心", "魅力", "理想主义"], rev: ["善变", "不切实际", "情感操弄", "逃避"] },
    keywordsEn: { up: ["Romance", "Following the heart", "Charm", "Idealism"], rev: ["Fickleness", "Unrealistic", "Emotional manipulation", "Escapism"] },
    meaning: {
      up: {
        general: "圣杯骑士优雅地骑马缓行，手托圣杯，象征浪漫、理想与追随内心的柔情。他是深情的追梦者，以魅力和真情打动人心，为爱与美好而行动。带着这份浪漫与理想主义前行，倾听内心的召唤，勇敢地追随你所热爱与向往的一切。",
        love: "浪漫的爱情降临，或有深情的追求者带着真心而来。以温柔和真情经营，是充满诗意与心动的关系。",
        career: "追随内心热爱的方向，以理想和创意投入工作。适合艺术、文化或需要情感投入的领域，魅力助你成事。",
        wealth: "以直觉和理想追求财务目标，可能有与创意相关的收益。别过于理想化，需兼顾现实的评估。",
        health: "身心追求和谐与美好，情感的满足带来健康。适合以艺术、浪漫或亲近自然的方式滋养身心。"
      },
      rev: {
        general: "逆位暗示善变与不切实际。你或许沉溺于不切实际的幻想，或情感上反复无常、难以捉摸，甚至以浪漫为幌子操弄他人。理想与现实脱节让人失望。请脚踏实地地面对情感，别让空泛的承诺与逃避取代真诚的行动。",
        love: "感情中善变或不切实际，甜言蜜语难以兑现。警惕情感的操弄或逃避承诺，需要真诚与稳定。",
        career: "理想脱离现实，计划难以落实。情绪化或善变影响工作的持续性，需要务实与坚持。",
        wealth: "因不切实际的幻想而财务失当。空泛的计划难有回报，需要回归理性与务实的判断。",
        health: "情绪反复、逃避现实影响身心。沉溺于消极的幻想不利健康，需要正视问题、积极面对。"
      }
    },
    meaningEn: {
      up: {
        general: "The Knight of Cups rides gracefully forward, cup held out, symbolizing romance, ideals, and the tenderness of following the heart. A devoted dreamer, he moves people with charm and genuine feeling and acts for the sake of love and beauty. Carry this romance and idealism forward, listen to your heart's call, and bravely follow all that you love and long for.",
        love: "Romantic love arrives, or a devoted suitor comes bearing true feeling. Nurtured with tenderness and sincerity, it is a poetic, heart-fluttering bond.",
        career: "Follow the direction your heart loves, pouring ideals and creativity into your work. Fields of art, culture, or emotional engagement suit you, and charm helps you succeed.",
        wealth: "You pursue financial goals through intuition and ideals, with possible creative-related gains. Do not over-idealize; balance it with realistic assessment.",
        health: "Body and mind seek harmony and beauty, and emotional fulfillment brings health. Nourish yourself through art, romance, or closeness to nature."
      },
      rev: {
        general: "Reversed, this hints at fickleness and unrealistic notions. You may be lost in impractical fantasy, or emotionally erratic and hard to read, even using romance as a cover to manipulate. Ideals detached from reality lead to disappointment. Face your feelings with your feet on the ground, and do not let empty promises and escapism replace sincere action.",
        love: "Fickle or unrealistic in love, sweet words go unfulfilled. Beware emotional manipulation or dodged commitment; sincerity and steadiness are needed.",
        career: "Ideals detached from reality make plans hard to realize. Moodiness or fickleness undermines consistency; be practical and persistent.",
        wealth: "Impractical fantasies lead to financial missteps. Vague plans yield little; return to reason and grounded judgment.",
        health: "Erratic emotions and escaping reality affect body and mind. Dwelling on negative fantasy harms health; face problems and act positively."
      }
    }
  },
  {
    id: 48,
    name: "圣杯皇后",
    nameEn: "Queen of Cups",
    arcana: "minor",
    suit: "cups",
    number: 13,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-13.jpg",
    keywords: { up: ["温柔", "同理心", "直觉", "情感智慧"], rev: ["情绪失控", "过度敏感", "依赖", "自我牺牲"] },
    keywordsEn: { up: ["Compassion", "Empathy", "Intuition", "Emotional wisdom"], rev: ["Emotional overwhelm", "Over-sensitivity", "Dependence", "Martyrdom"] },
    meaning: {
      up: {
        general: "圣杯皇后端坐于水岸，凝视手中华美的圣杯，象征温柔、同理与深邃的情感智慧。她体贴入微、直觉敏锐，能包容并疗愈他人的情感。以慈悲与关怀善待身边的人，信任你敏锐的直觉，让爱与理解从你心中温柔地流淌而出。",
        love: "以温柔和同理心经营感情，善解人意、包容体贴。是充满爱与情感深度的关系，直觉助你洞察对方的心。",
        career: "以细腻的同理心和直觉待人处事，善于关怀与支持他人。适合咨询、疗愈、艺术等需要情感投入的领域。",
        wealth: "以直觉和感性对待财务，善于关照他人的需求。适合稳健守成，别因过度慷慨或心软而失衡。",
        health: "身心敏感而富有疗愈力，情感的平衡是健康之本。适合以关怀自己、亲近水与静心的方式滋养身心。"
      },
      rev: {
        general: "逆位透露出情绪的失控与过度的付出。你或许被汹涌的情绪淹没，难以自持，或过度敏感、依赖他人，甚至一味自我牺牲而忽略了自己。情感的界限模糊不清。请学会照顾自己的需求，在关怀他人与自我保护之间找回平衡。",
        love: "情绪化或过度依赖，让关系失去平衡。一味付出或过度敏感消耗自己，需要建立健康的情感界限。",
        career: "情绪影响判断与工作，难以理性。过度在意他人或自我牺牲让人疲惫，需要保护自己的能量。",
        wealth: "因心软或情绪化而财务失当，缺乏理性。过度慷慨或依赖他人影响独立，需要理智的界限。",
        health: "情绪失控或压抑影响身心，易感疲惫脆弱。过度付出耗损能量，需要优先照顾自己的情感需求。"
      }
    },
    meaningEn: {
      up: {
        general: "The Queen of Cups sits by the water, gazing into her ornate cup, symbolizing tenderness, empathy, and deep emotional wisdom. Deeply considerate and keenly intuitive, she can hold and heal others' feelings. Treat those around you with compassion and care, trust your keen intuition, and let love and understanding flow gently from your heart.",
        love: "You nurture love with tenderness and empathy, understanding and considerate. It is a bond full of love and emotional depth, and intuition helps you read your partner's heart.",
        career: "You handle people and tasks with fine empathy and intuition, skilled at caring for and supporting others. Counseling, healing, and the arts, fields of emotional engagement, suit you.",
        wealth: "You approach money with intuition and feeling, attentive to others' needs. Steady preservation suits you; do not lose balance through excess generosity or softheartedness.",
        health: "Body and mind are sensitive and healing, and emotional balance is the root of health. Nourish yourself through self-care, closeness to water, and quiet stillness."
      },
      rev: {
        general: "Reversed, this reveals emotions out of control and excessive giving. You may be flooded by surging feelings, hard to steady, or overly sensitive and dependent on others, even sacrificing yourself and neglecting your own needs. Emotional boundaries are blurred. Learn to tend to your own needs and recover balance between caring for others and protecting yourself.",
        love: "Moodiness or over-dependence tips the relationship off balance. Giving relentlessly or over-sensitivity drains you; build healthy emotional boundaries.",
        career: "Emotions cloud judgment and work, and reason is hard. Caring too much for others or self-sacrifice wears you out; protect your energy.",
        wealth: "Softheartedness or moodiness leads to financial missteps, lacking reason. Excess generosity or dependence hampers independence; set sensible boundaries.",
        health: "Emotions out of control or repressed affect body and mind, prone to fatigue and fragility. Over-giving drains energy; put your own emotional needs first."
      }
    }
  },
  {
    id: 49,
    name: "圣杯国王",
    nameEn: "King of Cups",
    arcana: "minor",
    suit: "cups",
    number: 14,
    element: "水",
    elementEn: "Water",
    img: "assets/cards/cups-14.jpg",
    keywords: { up: ["情感成熟", "包容", "沉稳", "同理"], rev: ["情绪压抑", "操控", "喜怒无常", "冷漠"] },
    keywordsEn: { up: ["Emotional maturity", "Compassion", "Composure", "Diplomacy"], rev: ["Repression", "Manipulation", "Volatility", "Coldness"] },
    meaning: {
      up: {
        general: "圣杯国王稳坐于波涛之上的宝座，神情从容，象征在汹涌情感中依然沉稳的成熟与智慧。他富有同理心却不被情绪淹没，是能给予他人慰藉与稳定的存在。以成熟而平衡的方式驾驭情感，用你的智慧与温厚，成为风浪中稳定人心的力量。",
        love: "以成熟包容的爱经营感情，善于体察与照顾对方的情感。是可靠而温厚的伴侣，给予对方安定与支持。",
        career: "以沉稳的情商和同理心化解冲突、协调各方。适合需要人际智慧与关怀的领导角色，深受信赖。",
        wealth: "情绪不左右财务判断，理性而稳健地管理资源。以成熟的态度平衡付出与积累，财务稳定可靠。",
        health: "情绪平和、懂得自我调节，身心平衡。成熟的情绪管理是健康的基石，以从容的心态面对压力。"
      },
      rev: {
        general: "逆位暗示情感的失衡与压抑。你或许压抑了真实的感受，表面平静下暗流涌动，或以情绪操控他人、喜怒无常。也可能变得冷漠疏离，难以真诚交流。请诚实面对自己的情感，别让压抑与操控取代了真挚的连结与温度。",
        love: "情感封闭或忽冷忽热，难以真诚交流。也可能以情绪操控对方，需要坦诚面对内心，重建温度。",
        career: "情绪化的决策或消极冷漠影响人际与合作。压抑的情绪暗流涌动，需要健康地表达与疏导。",
        wealth: "被压抑的情绪或冲动左右财务选择，失去理性的平衡。需要以成熟稳定的心态重新掌控。",
        health: "压抑情绪导致身心紧绷，暗藏隐患。表面平静下的情绪淤积影响健康，需要真诚的疏导与释放。"
      }
    },
    meaningEn: {
      up: {
        general: "The King of Cups sits composed on a throne amid the waves, symbolizing the maturity and wisdom that stay steady within surging emotion. Deeply empathetic yet never swept away by feeling, he is a presence that offers others comfort and stability. Master your emotions in a mature, balanced way, and with your wisdom and warmth, become the steadying force amid the storm.",
        love: "You nurture love with mature acceptance, attuned to and caring for your partner's feelings. A reliable, warm partner, you give your other half stability and support.",
        career: "You resolve conflict and harmonize all sides with steady emotional intelligence and empathy. Leadership roles needing people wisdom and care suit you, and you are deeply trusted.",
        wealth: "Emotion does not sway your financial judgment; you manage resources rationally and steadily. With a mature attitude you balance giving and saving, and finances are stable and reliable.",
        health: "Calm in emotion and skilled at self-regulation, body and mind are balanced. Mature emotional management is the cornerstone of health; face pressure with composure."
      },
      rev: {
        general: "Reversed, this hints at emotional imbalance and repression. You may be suppressing true feelings, undercurrents churning beneath a calm surface, or manipulating others with emotion and swinging between moods. You may also grow cold and distant, struggling to connect sincerely. Face your feelings honestly, and do not let repression and manipulation replace genuine, warm connection.",
        love: "Feelings are shut away or blow hot and cold, and sincere exchange is hard. You may manipulate your partner with emotion; face your heart honestly and rebuild warmth.",
        career: "Moody decisions or cold detachment harm relationships and cooperation. Suppressed emotion churns beneath; express and channel it healthily.",
        wealth: "Repressed emotion or impulse sways financial choices, losing rational balance. Take back control with a mature, steady mindset.",
        health: "Suppressed emotion leaves body and mind tense, with hidden risks. Emotion pent up beneath a calm surface harms health; genuine release and channeling are needed."
      }
    }
  },
  {
    id: 50,
    name: "宝剑一",
    nameEn: "Ace of Swords",
    arcana: "minor",
    suit: "swords",
    number: 1,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-01.jpg",
    keywords: { up: ["清晰", "真相", "突破", "决断"], rev: ["混乱", "误判", "滥用力量", "思绪不清"] },
    keywordsEn: { up: ["Clarity", "Truth", "Breakthrough", "Decisiveness"], rev: ["Confusion", "Misjudgment", "Misused power", "Muddled thinking"] },
    meaning: {
      up: {
        general: "一只手自云中握出一柄直立的利剑，剑尖挑起王冠，象征思想的清晰、真理的力量与突破性的洞见。迷雾散去，你终于看清了真相，获得了斩断混乱、直指核心的决断力。以理性与诚实为剑，勇敢地做出明智的决定，开创崭新的局面。",
        love: "感情中迎来清晰的认知或坦诚的沟通。看清彼此真心，做出明确的决定，理性的交流让关系更加透彻。",
        career: "思路清晰、洞见突破，是做出重要决策的好时机。以敏锐的判断和坚定的决心迎接挑战，真相助你破局。",
        wealth: "财务上思路清晰，能做出明智而果断的决定。看清机会与风险的本质，理性的判断带来突破。",
        health: "身心清明，适合以理性的态度面对健康问题。明确的诊断或决心带来突破，是新的开始与康复的契机。"
      },
      rev: {
        general: "逆位透露出思绪的混乱与判断的失准。你或许被混乱的信息淹没，难以看清真相，或滥用了理性与言辞，造成伤害。清晰的力量被扭曲。请沉淀纷乱的思绪，回归诚实与理性，别让偏见与冲动蒙蔽了你的判断。",
        love: "沟通不清或误解丛生，难以看清真相。言语的伤害或混乱的思绪影响关系，需要理性而温和地厘清。",
        career: "思路混乱、判断失准，决策容易出错。信息不清或滥用言辞引发问题，需要冷静沉淀、厘清方向。",
        wealth: "财务判断不清或被误导，容易失算。混乱的信息影响决策，需要谨慎核实、理性分析。",
        health: "思绪混乱、焦虑不安影响身心。误判或错误的信息不利健康，需要冷静客观地面对问题。"
      }
    },
    meaningEn: {
      up: {
        general: "A hand from the clouds grasps an upright sword, its point lifting a crown, symbolizing clarity of mind, the power of truth, and breakthrough insight. The fog lifts and you finally see the truth, gaining the decisiveness to cut through confusion straight to the core. Wield reason and honesty as your blade, make wise decisions bravely, and open a brand-new situation.",
        love: "Clear understanding or honest communication arrives in love. Seeing each other's true feelings, you make a clear decision, and rational exchange makes the bond more transparent.",
        career: "Thinking is clear and insight breaks through, a good time for important decisions. Meet challenges with keen judgment and firm resolve, as truth helps you break the deadlock.",
        wealth: "Financial thinking is clear, and you can make wise, decisive choices. Seeing the true nature of opportunity and risk, rational judgment brings a breakthrough.",
        health: "Body and mind are clear, suiting a rational approach to health issues. A clear diagnosis or resolve brings a breakthrough, a fresh start and a chance to recover."
      },
      rev: {
        general: "Reversed, this reveals muddled thinking and faulty judgment. You may be flooded by confusing information, unable to see the truth, or you may misuse reason and words and cause harm. The power of clarity is distorted. Let your jumbled thoughts settle, return to honesty and reason, and do not let bias and impulse blind your judgment.",
        love: "Unclear communication or rife misunderstanding makes truth hard to see. Hurtful words or muddled thoughts affect the bond; clarify things rationally and gently.",
        career: "Muddled thinking and faulty judgment make decisions prone to error. Unclear information or misused words cause problems; settle down calmly and clarify your direction.",
        wealth: "Financial judgment is unclear or misled, prone to miscalculation. Confusing information skews decisions; verify carefully and analyze rationally.",
        health: "Muddled thoughts and anxiety affect body and mind. Misjudgment or wrong information harms health; face the issue calmly and objectively."
      }
    }
  },
  {
    id: 51,
    name: "宝剑二",
    nameEn: "Two of Swords",
    arcana: "minor",
    suit: "swords",
    number: 2,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-02.jpg",
    keywords: { up: ["抉择", "僵局", "权衡", "回避"], rev: ["打破僵局", "做出决定", "真相浮现", "犹豫消解"] },
    keywordsEn: { up: ["Difficult choice", "Stalemate", "Weighing options", "Avoidance"], rev: ["Breaking the deadlock", "Making a decision", "Truth surfacing", "Resolution"] },
    meaning: {
      up: {
        general: "蒙眼女子交叉双剑于胸前，象征艰难的抉择、僵局与刻意的回避。你或许被困在两难之间，因不愿面对而蒙住了双眼，迟迟无法决断。这是需要平衡与深思的时刻，但逃避只会延长僵局。摘下蒙眼布，倾听内心，勇敢地做出选择。",
        love: "感情陷入僵局或难以抉择，可能刻意回避问题。需要坦诚面对内心，别让犹豫和逃避让关系停滞不前。",
        career: "面临艰难的抉择或陷入僵持，难以取舍。回避无法解决问题，需要权衡利弊，冷静而果断地做出决定。",
        wealth: "财务上面临两难的选择，犹豫不决。逃避决策只会错失时机，需要理性权衡，勇敢地做出取舍。",
        health: "身心处于紧张的平衡或压抑状态，回避问题。内在的犹豫消耗能量，需要面对并疏导压力。"
      },
      rev: {
        general: "逆位暗示僵局的打破与决定的做出。你或许终于摘下蒙眼布，看清了真相，鼓起勇气走出两难的困境。犹豫开始消解，被回避的问题浮出水面。带着新的清晰，做出那个一直逃避的决定，让停滞的局面重新流动起来。",
        love: "走出感情的僵局，做出明确的决定。不再回避问题，坦诚面对让关系有了转机，真相逐渐清晰。",
        career: "打破僵持的局面，终于做出抉择。看清方向后勇敢行动，被搁置的问题得以推进和解决。",
        wealth: "走出财务的两难，做出理性的决定。不再犹豫拖延，看清利弊后果断行动，局面重新明朗。",
        health: "走出压抑与犹豫，正视健康问题。做出必要的调整与决定，紧张的状态得到疏解与释放。"
      }
    },
    meaningEn: {
      up: {
        general: "A blindfolded woman holds two swords crossed at her chest, symbolizing a hard choice, stalemate, and deliberate avoidance. You may be caught between two options, blindfolding yourself because you will not face them, unable to decide. This is a time for balance and deep thought, but avoidance only prolongs the deadlock. Remove the blindfold, listen within, and bravely make your choice.",
        love: "Love reaches a stalemate or a hard choice, and you may deliberately avoid the issue. Face your heart honestly, and do not let hesitation and avoidance leave the bond stuck.",
        career: "You face a hard choice or a standoff, difficult to resolve. Avoidance solves nothing; weigh the pros and cons and decide calmly and decisively.",
        wealth: "You face a financial dilemma and cannot decide. Avoiding the decision only costs you the moment; weigh it rationally and make a brave choice.",
        health: "Body and mind are in tense balance or repression, and you avoid the issue. Inner hesitation drains energy; face and channel the pressure."
      },
      rev: {
        general: "Reversed, this signals the deadlock breaking and a decision made. You may finally remove the blindfold, see the truth, and find the courage to step out of the dilemma. Hesitation begins to dissolve, and the avoided problem surfaces. With new clarity, make the decision you have long dodged and let the stalled situation flow again.",
        love: "You emerge from the relationship's stalemate and make a clear decision. No longer avoiding the issue, honest facing brings a turn, and the truth grows clear.",
        career: "You break the standoff and finally make a choice. Seeing your direction, you act bravely, and shelved matters move forward and resolve.",
        wealth: "You emerge from a financial dilemma and decide rationally. No longer hesitating, you act decisively after seeing the pros and cons, and the situation clears.",
        health: "You emerge from repression and hesitation and face the health issue. Making needed adjustments and decisions, the tension is eased and released."
      }
    }
  },
  {
    id: 52,
    name: "宝剑三",
    nameEn: "Three of Swords",
    arcana: "minor",
    suit: "swords",
    number: 3,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-03.jpg",
    keywords: { up: ["心碎", "伤痛", "背叛", "悲伤"], rev: ["疗愈", "释放痛苦", "宽恕", "复原"] },
    keywordsEn: { up: ["Heartbreak", "Pain", "Betrayal", "Sorrow"], rev: ["Healing", "Releasing pain", "Forgiveness", "Recovery"] },
    meaning: {
      up: {
        general: "三把利剑刺穿一颗心，乌云密布、风雨交加，象征心碎、伤痛与深切的悲伤。你或许正经历着背叛、离别或残酷真相带来的痛苦。这份伤痛虽然深刻，却也是必经的洗礼。允许自己流泪与哀伤，痛过之后，心灵终将在雨过天晴中获得疗愈。",
        love: "感情遭遇心碎、背叛或痛苦的分离。伤痛虽深，但唯有正视并释放，才能走出阴霾、重获新生。",
        career: "工作上遭遇打击、批评或痛苦的挫败。真相或冲突带来伤害，需要理性面对，从痛楚中汲取教训。",
        wealth: "财务上遭遇损失或痛苦的决定，令人心痛。别沉溺于悲伤，理性止损、面对现实才能重新出发。",
        health: "身心承受痛苦或悲伤的煎熬，情绪低落影响健康。压抑的伤痛需要释放，允许自己疗愈是康复的开始。"
      },
      rev: {
        general: "逆位透露出疗愈与痛苦的释放。你正逐渐走出心碎的阴霾，学会宽恕与放下，让积压的悲伤得以流淌而出。伤口开始愈合，乌云渐渐散去。带着从伤痛中获得的成长，温柔地拥抱自己，重新向着光明与希望迈进。",
        love: "从感情的伤痛中逐渐复原，学会释怀与宽恕。放下背叛与心碎，愿意重新敞开心扉，迎接新的可能。",
        career: "走出挫败与打击的阴影，重新振作。释放积压的负面情绪，从教训中成长，以更坚强的姿态前行。",
        wealth: "财务的伤痛逐渐平复，开始理性面对。放下损失的懊悔，重新规划，稳步走向复原。",
        health: "情绪的伤痛得到疗愈，身心逐渐复原。释放压抑的悲伤，以宽容和善待自己的心态重建健康。"
      }
    },
    meaningEn: {
      up: {
        general: "Three swords pierce a heart beneath storm clouds and driving rain, symbolizing heartbreak, pain, and deep sorrow. You may be living through the pain of betrayal, parting, or a cruel truth. This hurt runs deep, yet it is a necessary passage. Allow yourself to weep and grieve; once the pain has passed, the heart will heal as the storm clears.",
        love: "Love meets heartbreak, betrayal, or a painful separation. The hurt is deep, but only by facing and releasing it can you leave the shadow and be renewed.",
        career: "You face a blow, criticism, or painful setback at work. Truth or conflict brings hurt; face it rationally and draw the lesson from the pain.",
        wealth: "You meet a loss or a painful decision that hurts. Do not wallow in sorrow; cut losses rationally and face reality to set out again.",
        health: "Body and mind bear pain or grief, and low spirits affect health. Suppressed hurt needs release; allowing yourself to heal is the start of recovery."
      },
      rev: {
        general: "Reversed, this reveals healing and the release of pain. You are gradually emerging from the shadow of heartbreak, learning to forgive and let go, letting pent-up sorrow flow out. The wound begins to close and the storm clouds part. Carrying the growth gained from pain, gently embrace yourself and move again toward light and hope.",
        love: "You gradually recover from love's hurt and learn to let go and forgive. Releasing betrayal and heartbreak, you are willing to open your heart to new possibility.",
        career: "Emerging from the shadow of setback and blows, you rally. Releasing pent-up negative feeling, you grow from the lesson and move forward stronger.",
        wealth: "The financial hurt gradually settles and you begin to face it rationally. Releasing regret over the loss, you re-plan and steadily recover.",
        health: "Emotional wounds heal and body and mind gradually recover. Releasing suppressed sorrow, rebuild health by being tolerant and kind to yourself."
      }
    }
  },
  {
    id: 53,
    name: "宝剑四",
    nameEn: "Four of Swords",
    arcana: "minor",
    suit: "swords",
    number: 4,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-04.jpg",
    keywords: { up: ["休息", "恢复", "沉淀", "静养"], rev: ["倦怠", "耗竭", "重新出发", "拒绝休息"] },
    keywordsEn: { up: ["Rest", "Recovery", "Contemplation", "Recuperation"], rev: ["Burnout", "Exhaustion", "Restlessness", "Refusing rest"] },
    meaning: {
      up: {
        general: "骑士静卧于石棺之上，宛如沉睡，三把剑悬于墙上，象征休息、恢复与内在的沉淀。历经纷争与劳累之后，此牌邀请你暂时抽离，让身心得到充分的休整。这不是放弃，而是蓄势。在宁静的独处中恢复元气，为下一段旅程养精蓄锐。",
        love: "感情需要暂时的冷静与空间，让彼此沉淀。不宜强求进展，静养之后关系将以更好的状态重新出发。",
        career: "工作需要暂停与休整，别再硬撑。适当的休息与沉淀让你恢复精力，以更清晰的头脑迎接挑战。",
        wealth: "财务上宜暂停观望、休养生息。不急于行动，趁此沉淀思考，为下一步的规划积蓄力量。",
        health: "身心亟需充分的休息与静养，这是恢复的关键时期。放慢脚步、好好休息，让身体自然地复原。"
      },
      rev: {
        general: "逆位暗示倦怠的极限或重新出发的时机。你或许已因过度劳累而濒临耗竭，却仍拒绝休息，硬撑到极限；也可能是休整已足，是时候重新振作、回归行动了。请诚实倾听身体的需要，该休息时休息，该出发时勇敢地重新启程。",
        love: "感情因过度疲惫而停滞，或是时候走出冷静期重新经营。别让倦怠拖垮关系，适时恢复热度。",
        career: "身心俱疲却拒绝休息，濒临崩溃；或休整已足，该重新投入工作了。倾听身体，把握复出的时机。",
        wealth: "长期的观望需要打破，或过度消耗需要休整。重新评估状态，把握重新行动或继续休养的时机。",
        health: "过度劳累、濒临耗竭，务必强制休息；或恢复已足，可逐步重启活动。别忽视身体的极限信号。"
      }
    },
    meaningEn: {
      up: {
        general: "A knight lies still atop a tomb as if in slumber, three swords hung on the wall, symbolizing rest, recovery, and inner contemplation. After strife and toil, this card invites you to withdraw for a while and let body and mind fully recuperate. This is not giving up but gathering strength. Restore your vitality in quiet solitude and store up energy for the next stage of the journey.",
        love: "Love needs a brief calm and space to let things settle. Do not force progress; after rest, the bond sets out again in a better state.",
        career: "Work needs a pause and recuperation; stop forcing on. Proper rest and reflection restore your energy to meet challenges with a clearer mind.",
        wealth: "Finances call for pausing to observe and recover. Do not rush to act; use this time to reflect and gather strength for the next plan.",
        health: "Body and mind urgently need full rest and quiet recovery, a crucial period for healing. Slow down, rest well, and let the body recover naturally."
      },
      rev: {
        general: "Reversed, this hints at the limit of weariness or the time to set out again. You may be near exhaustion from overwork yet still refusing rest, forcing on to the limit; or recuperation is enough and it is time to rally and return to action. Listen honestly to your body's needs, rest when you should, and when it is time, bravely start again.",
        love: "Love stalls from excess fatigue, or it is time to leave the calm period and reconnect. Do not let weariness drag the bond down; revive the warmth in time.",
        career: "Exhausted yet refusing rest, you near collapse; or recuperation is enough and it is time to return to work. Listen to your body and seize the moment to come back.",
        wealth: "A long wait-and-see needs breaking, or overexertion needs rest. Reassess your state and seize the moment to act again or keep recovering.",
        health: "Overworked and near exhaustion, you must rest by force; or recovery is enough and you can gradually resume activity. Do not ignore the body's limit signals."
      }
    }
  },
  {
    id: 54,
    name: "宝剑五",
    nameEn: "Five of Swords",
    arcana: "minor",
    suit: "swords",
    number: 5,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-05.jpg",
    keywords: { up: ["冲突", "失败", "自私", "得不偿失"], rev: ["和解", "放下恩怨", "反省", "弥补"] },
    keywordsEn: { up: ["Conflict", "Defeat", "Self-interest", "Hollow victory"], rev: ["Reconciliation", "Letting go of grudges", "Reflection", "Making amends"] },
    meaning: {
      up: {
        general: "一人得意地收起他人丢弃的剑，背后两人黯然离去，象征冲突、失败与得不偿失的胜利。这是一场没有真正赢家的争斗，即便获胜也可能付出关系破裂的代价。请审视这场冲突是否值得，别为了逞一时之快或不择手段的胜利，而失去了更重要的东西。",
        love: "关系中充满争执与伤害，可能有一方为求胜而不惜伤人。逞强只会两败俱伤，需要放下输赢、真诚沟通。",
        career: "职场冲突激烈，或以不光彩的方式取胜。表面赢了却失了人心，需要反省手段，别为胜利付出更大代价。",
        wealth: "财务上的争夺或不义之财，看似获利实则得不偿失。警惕损人利己的做法，长远来看反受其害。",
        health: "冲突与争斗带来身心的消耗，压力与怨气影响健康。别在无谓的争执中耗损自己，学会放下与释怀。"
      },
      rev: {
        general: "逆位透露出和解与放下的转机。你或许开始厌倦无谓的争斗，愿意反省过错、修复破裂的关系，或从一场冲突中抽身而退。放下恩怨与执念让人如释重负。带着反省后的成熟，弥补裂痕、握手言和，让紧绷的局面归于平静。",
        love: "愿意放下争执与恩怨，修复受伤的关系。反省过错、真诚道歉，为破裂的感情寻求和解的可能。",
        career: "走出职场的冲突，寻求和解或抽身而退。反省过往的手段，以更成熟的方式重建人际关系。",
        wealth: "放下财务的争夺，寻求公平的解决。反省得不偿失的做法，以更长远的眼光弥补损失。",
        health: "从冲突与怨气中释放，身心逐渐平复。放下执念与压力，以平和的心态修复身心的消耗。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure smugly gathers up the swords others have dropped as two walk away dejected, symbolizing conflict, defeat, and a hollow victory. This is a fight with no true winner, where even winning may cost you a broken relationship. Consider whether this conflict is worth it, and do not lose what matters more for a moment's triumph or a win by any means.",
        love: "The relationship is full of quarrels and hurt, and one side may wound the other to win. Forcing it only leads to mutual loss; set aside winning and losing and communicate sincerely.",
        career: "Workplace conflict is fierce, or you win by dishonorable means. You win on the surface but lose people's hearts; reflect on your methods and do not pay a greater price for victory.",
        wealth: "A financial scramble or ill-gotten gain seems profitable but is not worth the cost. Beware gaining at others' expense; in the long run it rebounds on you.",
        health: "Conflict and strife drain body and mind, and stress and resentment affect health. Do not deplete yourself in pointless quarrels; learn to let go and release."
      },
      rev: {
        general: "Reversed, this reveals a turn toward reconciliation and letting go. You may be growing weary of pointless strife, willing to reflect on your faults and mend broken bonds, or to withdraw from a conflict. Releasing grudges and fixations brings great relief. With the maturity of reflection, mend the rift, make peace, and let the tense situation return to calm.",
        love: "Willing to set aside quarrels and grudges, you mend a wounded bond. Reflecting on your faults and apologizing sincerely, you seek a chance to reconcile.",
        career: "Emerging from workplace conflict, you seek reconciliation or withdraw. Reflecting on past methods, you rebuild relationships in a more mature way.",
        wealth: "Setting aside the financial scramble, you seek a fair resolution. Reflecting on what was not worth the cost, you make up the loss with a longer view.",
        health: "Released from conflict and resentment, body and mind gradually settle. Letting go of fixation and stress, mend the depletion with a peaceful mind."
      }
    }
  },
  {
    id: 55,
    name: "宝剑六",
    nameEn: "Six of Swords",
    arcana: "minor",
    suit: "swords",
    number: 6,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-06.jpg",
    keywords: { up: ["过渡", "远离", "疗伤", "驶向平静"], rev: ["停滞", "无法放下", "反复", "困于原地"] },
    keywordsEn: { up: ["Transition", "Moving away", "Healing", "Toward calmer waters"], rev: ["Stagnation", "Unable to let go", "Setbacks", "Stuck"] },
    meaning: {
      up: {
        general: "船夫撑篙载着母子驶向对岸，水面一侧波涛、一侧平静，象征过渡、远离与驶向平静的旅程。你正逐渐离开动荡与伤痛，朝着更安宁的彼岸前行。这段旅程或许带着不舍，但每一桨都在带你远离困境。相信前方会更好，平静终将到来。",
        love: "感情走出动荡，逐渐趋于平静，或需要一段距离来疗伤。放下过往的伤痛，向着更和谐的关系过渡。",
        career: "工作走出困境，向更好的环境或阶段过渡。可能有转职、调动或改变，虽有不舍，但前方渐入佳境。",
        wealth: "财务逐渐走出低谷，趋于平稳。经历调整后驶向更安稳的境地，别回头，稳步向前会更好。",
        health: "身心正从动荡中逐渐恢复平静，走出病痛或压力的困扰。给自己时间过渡，平稳的康复正在到来。"
      },
      rev: {
        general: "逆位暗示过渡的停滞与无法放下。你或许想要离开却困于原地，被过往的牵绊拖住脚步，或反复回到已知痛苦的处境。心中的包袱让旅程举步维艰。请厘清究竟是什么牵绊着你，鼓起勇气真正地放下，才能驶向渴望的平静。",
        love: "想走出感情的困境却难以放下，反复纠缠。被过往牵绊无法真正远离，需要下定决心、彻底告别。",
        career: "想改变现状却停滞不前，或转变遭遇阻碍。困于熟悉的困境难以突破，需要勇气才能真正过渡。",
        wealth: "财务难以走出困境，反复陷入相同的问题。无法放下旧有的模式，需要彻底调整才能趋于平稳。",
        health: "康复过程反复或停滞，难以走出困扰。被负面情绪或旧习惯牵绊，需要真正地放下与改变。"
      }
    },
    meaningEn: {
      up: {
        general: "A ferryman poles a mother and child toward the far shore, the water choppy on one side and calm on the other, symbolizing transition, moving away, and a journey toward calmer waters. You are gradually leaving turbulence and hurt behind, heading for a more peaceful shore. The journey may carry reluctance, but each stroke carries you from hardship. Trust that better lies ahead, and calm will come.",
        love: "Love emerges from turbulence toward calm, or needs some distance to heal. Release past hurt and transition toward a more harmonious bond.",
        career: "Work emerges from difficulty, transitioning to a better setting or stage. A job change, transfer, or shift may come; reluctant as it is, better lies ahead.",
        wealth: "Finances gradually climb out of the trough toward stability. After adjustment you head for a safer place; do not look back, steady forward is better.",
        health: "Body and mind are recovering calm from turbulence, leaving illness or stress behind. Give yourself time to transition, as steady recovery arrives."
      },
      rev: {
        general: "Reversed, this hints at a stalled transition and an inability to let go. You may wish to leave yet be stuck in place, held back by past ties, or keep returning to a known, painful situation. The burden in your heart makes the journey hard. Clarify just what is holding you back and find the courage to truly release it, so you can sail toward the calm you long for.",
        love: "Wanting to leave the relationship's difficulty yet unable to let go, you tangle back and forth. Held by the past, you cannot truly move away; resolve to say a full goodbye.",
        career: "Wanting to change yet stuck in place, or a shift meets obstacles. Trapped in familiar difficulty, you need courage to truly transition.",
        wealth: "Finances struggle to escape difficulty, falling back into the same problems. Unable to release old patterns, you need a thorough overhaul to reach stability.",
        health: "Recovery wavers or stalls, hard to leave behind. Held by negative emotion or old habits, you need to truly let go and change."
      }
    }
  },
  {
    id: 56,
    name: "宝剑七",
    nameEn: "Seven of Swords",
    arcana: "minor",
    suit: "swords",
    number: 7,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-07.jpg",
    keywords: { up: ["策略", "欺瞒", "独行", "投机取巧"], rev: ["坦白", "良心发现", "揭穿", "放弃欺瞒"] },
    keywordsEn: { up: ["Strategy", "Deception", "Acting alone", "Cunning"], rev: ["Confession", "Conscience", "Exposure", "Coming clean"] },
    meaning: {
      up: {
        general: "一人蹑手蹑脚地抱着几把剑溜走，回头张望，象征策略、欺瞒与独自行动的心机。这可能意味着你需要以智取胜、暗中筹谋，也可能警示着某种欺骗或投机取巧。谨慎行事、精明策划无妨，但切莫为了走捷径而背弃诚信，否则终将露出破绽。",
        love: "感情中可能存在隐瞒、不诚实或信任危机。有话直说才是长久之道，别用欺瞒或逃避处理关系中的问题。",
        career: "职场需要策略与智慧，但也警惕背后的算计或不正当手段。靠投机取巧难以长久，脚踏实地方为正道。",
        wealth: "财务上需精明谋划，但警惕欺诈或走捷径的诱惑。别贪图不义之财或投机取巧，以免因小失大。",
        health: "可能在健康上自欺欺人或逃避问题。别用侥幸心态对待身体，诚实面对才能真正解决隐患。"
      },
      rev: {
        general: "逆位透露出坦白与良心的觉醒。你或许决定停止欺瞒、坦承真相，或某个隐藏的伎俩被揭穿。逃避与算计难以为继，诚实的时刻到来了。放下那些不光彩的捷径与谎言，以坦荡之心面对，你会发现真诚才是最持久的力量。",
        love: "隐瞒的真相被揭穿，或愿意坦诚以对。放下欺瞒与逃避，以诚实重建信任，让关系回归坦荡。",
        career: "不正当的手段被识破，或决定回归正道。放弃投机取巧，以真才实干重建信誉，脚踏实地更长久。",
        wealth: "财务的欺瞒或漏洞被发现，或决定诚实面对。放下走捷径的侥幸，以正当的方式重建财务。",
        health: "停止对健康的自欺，愿意诚实面对问题。放下侥幸心态，正视并解决隐患，走上真正康复的道路。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure tiptoes away clutching several swords, glancing back, symbolizing strategy, deception, and acting alone by cunning. This may mean you need to win by wit and quiet planning, or it may warn of some deceit or cutting corners. Careful, shrewd planning is fine, but do not betray your integrity for a shortcut, or the flaw will eventually show.",
        love: "There may be concealment, dishonesty, or a crisis of trust in the relationship. Speaking plainly is the lasting way; do not handle problems with deceit or avoidance.",
        career: "The workplace calls for strategy and wit, but beware scheming behind your back or improper means. Cunning shortcuts do not last; staying grounded is the true path.",
        wealth: "Finances call for shrewd planning, but beware fraud or the lure of shortcuts. Do not covet ill-gotten gains or cut corners, lest you lose big for a small gain.",
        health: "You may deceive yourself or avoid a health problem. Do not treat your body with a chancer's mindset; only honest facing truly resolves the hidden trouble."
      },
      rev: {
        general: "Reversed, this reveals confession and the awakening of conscience. You may decide to stop deceiving and admit the truth, or a hidden ploy is exposed. Avoidance and scheming cannot go on, and the moment for honesty has come. Set down the shady shortcuts and lies, face things with an open heart, and you will find sincerity is the most lasting strength.",
        love: "A concealed truth is exposed, or you become willing to be honest. Setting down deceit and avoidance, rebuild trust through honesty and let the bond be open again.",
        career: "Improper means are seen through, or you decide to return to the right path. Giving up cunning shortcuts, rebuild your reputation through real ability; grounded work lasts.",
        wealth: "Financial deceit or a loophole is found, or you decide to face things honestly. Set down the gambler's shortcut and rebuild finances by proper means.",
        health: "You stop deceiving yourself about health and become willing to face the problem. Setting down wishful thinking, confront and resolve the hidden trouble toward true recovery."
      }
    }
  },
  {
    id: 57,
    name: "宝剑八",
    nameEn: "Eight of Swords",
    arcana: "minor",
    suit: "swords",
    number: 8,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-08.jpg",
    keywords: { up: ["受困", "自我设限", "无力感", "受害者心态"], rev: ["解脱", "重获力量", "看清出路", "自我释放"] },
    keywordsEn: { up: ["Restriction", "Self-imposed limits", "Powerlessness", "Victim mentality"], rev: ["Release", "Reclaiming power", "Seeing a way out", "Self-liberation"] },
    meaning: {
      up: {
        general: "女子被蒙眼、捆绑，八把剑环立四周，象征受困、无力与自我设限的囚笼。你或许感到进退维谷、束手无策，但仔细看，绳索松动、前方有路——困住你的，往往是恐惧与消极的信念。摘下蒙眼布，你会发现出路一直都在，你远比自己想象的更自由。",
        love: "在感情中感到被困或无力，仿佛没有选择。多是自我设限或恐惧作祟，需要看清其实你有能力改变现状。",
        career: "工作上感到受困、动弹不得，被无力感笼罩。困境多源于自我怀疑，转换思维便能看见突破的可能。",
        wealth: "财务上感到束手无策、看不到出路。别被恐惧困住，理清思绪你会发现选择其实比想象中更多。",
        health: "身心被焦虑与消极的信念束缚，感到无助。困住你的多是心理因素，转念与求助能带来解脱。"
      },
      rev: {
        general: "逆位透露出解脱与重获力量的转机。你开始意识到束缚自己的其实是内心的恐惧，鼓起勇气摘下蒙眼布，看清了一直存在的出路。自我设限的枷锁正在松脱。夺回属于自己的力量，勇敢地走出困境，你终于明白——自由的钥匙一直握在自己手中。",
        love: "走出感情的困境与无力感，重获自主。看清自己有选择的权利，勇敢地改变现状或离开束缚。",
        career: "打破工作的困局，重拾行动的力量。摆脱自我怀疑与消极心态，看清出路并勇敢地迈出突破的一步。",
        wealth: "走出财务的困境，看见新的可能。摆脱无力感与恐惧，主动寻求解决之道，重新掌控财务。",
        health: "从焦虑与消极的束缚中解脱，身心重获自由。转念放下自我设限，积极求助与行动带来真正的康复。"
      }
    },
    meaningEn: {
      up: {
        general: "A woman stands blindfolded and bound, ringed by eight swords, symbolizing restriction, powerlessness, and a self-made cage. You may feel cornered and helpless, but look closely, the ropes are loose and a path lies open ahead, for what traps you is often fear and negative belief. Remove the blindfold and you will find the way out was always there; you are far freer than you imagine.",
        love: "You feel trapped or powerless in love, as if you have no choice. It is mostly self-imposed limits or fear; recognize that you do have the power to change things.",
        career: "You feel stuck and unable to move at work, wrapped in helplessness. The difficulty stems mostly from self-doubt; a shift in thinking reveals a way to break through.",
        wealth: "You feel helpless with finances and see no way out. Do not be trapped by fear; sort out your thoughts and you will find more choices than you imagined.",
        health: "Body and mind are bound by anxiety and negative belief, and you feel helpless. What traps you is mostly psychological; a change of mind and asking for help bring release."
      },
      rev: {
        general: "Reversed, this reveals a turn toward release and reclaiming power. You begin to see that what binds you is your own fear, find the courage to remove the blindfold, and see the way out that was always there. The shackles of self-imposed limits are loosening. Reclaim the power that is yours, bravely step out of the difficulty, and understand at last, the key to freedom was in your own hand all along.",
        love: "You emerge from the relationship's trap and helplessness, regaining autonomy. Seeing that you have the right to choose, bravely change things or leave what binds you.",
        career: "You break the work deadlock and recover the power to act. Shedding self-doubt and negativity, see the way out and bravely take the step to break through.",
        wealth: "You emerge from financial difficulty and see new possibility. Shedding helplessness and fear, actively seek solutions and take back control of your finances.",
        health: "Released from the bonds of anxiety and negativity, body and mind regain freedom. Letting go of self-imposed limits, active help-seeking and action bring true recovery."
      }
    }
  },
  {
    id: 58,
    name: "宝剑九",
    nameEn: "Nine of Swords",
    arcana: "minor",
    suit: "swords",
    number: 9,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-09.jpg",
    keywords: { up: ["焦虑", "恐惧", "失眠", "内心煎熬"], rev: ["走出焦虑", "寻求帮助", "释放恐惧", "曙光初现"] },
    keywordsEn: { up: ["Anxiety", "Fear", "Insomnia", "Inner torment"], rev: ["Easing anxiety", "Seeking help", "Releasing fear", "First light"] },
    meaning: {
      up: {
        general: "一人在深夜从睡梦中惊坐、以手掩面，九把剑悬于墙上，象征焦虑、恐惧与深夜的内心煎熬。你或许被忧虑、罪疚或挥之不去的念头折磨得辗转难眠。然而这些恐惧多存在于脑海之中，往往比现实更为夸大。别独自承受，将忧虑说出口，黑夜终会迎来黎明。",
        love: "为感情忧心忡忡、夜不能寐，被不安与猜疑折磨。多是内心的恐惧放大了担忧，需要坦诚沟通、释放焦虑。",
        career: "工作压力带来严重的焦虑与失眠，忧虑缠身。别让恐惧吞噬你，理清实际问题，多数担忧并没有想象中可怕。",
        wealth: "为财务问题深感焦虑与恐慌，寝食难安。忧虑往往夸大了现实，冷静评估、寻求建议能缓解内心的煎熬。",
        health: "焦虑、失眠与精神压力严重影响身心健康。长期的心理煎熬需要重视，别独自硬扛，及时寻求支持与疏导。"
      },
      rev: {
        general: "逆位透露出走出焦虑的曙光。你或许开始正视并释放内心的恐惧，愿意寻求帮助，或发现事情并没有想象中糟糕。漫漫长夜即将过去，希望的微光正悄然浮现。把压在心底的忧虑说出来，一步步走出煎熬，你终将重获内心的平静与安宁。",
        love: "逐渐走出感情的焦虑与不安，释放内心的恐惧。愿意坦诚沟通、寻求慰藉，关系的阴霾开始散去。",
        career: "工作的焦虑逐渐缓解，压力得到疏解。正视问题、寻求帮助后发现并没那么糟，逐步走出煎熬。",
        wealth: "财务的恐慌逐渐平复，看清实际状况后释怀。寻求专业建议、理性面对，焦虑随之减轻，曙光初现。",
        health: "焦虑与失眠有所改善，身心逐渐平静。愿意寻求帮助、疏导情绪，走出精神的煎熬，重获安宁。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure sits up in the dead of night, face in hands, nine swords hung on the wall, symbolizing anxiety, fear, and the inner torment of the small hours. You may be tossing sleeplessly, tormented by worry, guilt, or thoughts that will not leave. Yet these fears live mostly in the mind and are often exaggerated beyond reality. Do not bear it alone; speak your worries aloud, for the night will always give way to dawn.",
        love: "You worry over the relationship and cannot sleep, tormented by unease and suspicion. Inner fear mostly magnifies the worry; honest communication and releasing anxiety are needed.",
        career: "Work pressure brings severe anxiety and insomnia, worry clinging to you. Do not let fear devour you; sort out the real problems, for most worries are less terrible than imagined.",
        wealth: "You feel deep anxiety and panic over money, unable to rest. Worry often exaggerates reality; calm assessment and seeking advice ease the inner torment.",
        health: "Anxiety, insomnia, and mental strain seriously affect body and mind. Long psychological torment must be taken seriously; do not tough it out alone, and seek support in time."
      },
      rev: {
        general: "Reversed, this reveals the first light of leaving anxiety behind. You may begin to face and release your inner fears, willing to seek help, or find things are not as bad as imagined. The long night is about to pass, and the faint light of hope quietly appears. Speak the worries pressing on your heart, step by step out of the torment, and you will regain inner peace and calm.",
        love: "You gradually leave the relationship's anxiety and unease, releasing inner fear. Willing to communicate honestly and seek comfort, the shadow over the bond begins to lift.",
        career: "Work anxiety gradually eases and pressure is released. Facing the problem and seeking help, you find it is not so bad and step out of the torment.",
        wealth: "Financial panic gradually settles, and seeing the real situation brings relief. Seeking professional advice and facing it rationally eases anxiety, and first light appears.",
        health: "Anxiety and insomnia improve and body and mind gradually calm. Willing to seek help and channel emotion, you leave the mental torment and regain peace."
      }
    }
  },
  {
    id: 59,
    name: "宝剑十",
    nameEn: "Ten of Swords",
    arcana: "minor",
    suit: "swords",
    number: 10,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-10.jpg",
    keywords: { up: ["终结", "谷底", "背叛", "黎明将至"], rev: ["复原", "触底反弹", "余痛", "重生"] },
    keywordsEn: { up: ["Painful ending", "Rock bottom", "Betrayal", "Dawn approaches"], rev: ["Recovery", "Rebound", "Lingering pain", "Regeneration"] },
    meaning: {
      up: {
        general: "一人伏地，背上插着十把剑，画面沉痛，然而远方天际已泛起黎明的曙光。此牌象征一段历程的彻底终结与最深的谷底。最坏的情况已然发生，痛楚虽深，却也意味着无法再更糟。唯有承认结束、放下执念，远方的黎明才会真正降临，新生即将开始。",
        love: "一段关系走到尽头，或遭受背叛的沉痛打击。接受终结虽然痛苦，却是疗愈与新生的开始，黎明就在前方。",
        career: "工作遭遇彻底的失败或打击，跌至谷底。虽然沉痛，但触底之后即是反弹，放下过往才能重新出发。",
        wealth: "财务经历重大损失或惨痛的低谷。最坏已成过去，坦然面对、及时止损，一切只会朝好的方向发展。",
        health: "身心极度疲惫或旧疾发作，跌入低谷。这是彻底休整与放下的时刻，谷底之后，康复的曙光正在到来。"
      },
      rev: {
        general: "逆位暗示最艰难的时刻正在过去，你开始从谷底缓缓复原。伤痛虽仍有余温，但生机已在废墟中萌发。也可能是你仍在抗拒某个必然的结束，迟迟不愿放手。请允许自己疗愈与重生，相信最坏已然过去，浴火之后终将迎来崭新的自己。",
        love: "从感情的伤痛中慢慢走出，逐渐复原；或迟迟不愿放手已逝的关系。允许自己疗愈，新生正在到来。",
        career: "困境出现转机，劫后余生逐步恢复。虽有余痛，但最艰难的已经过去，带着教训重新振作。",
        wealth: "财务损失止跌回稳，开始缓慢复苏。谷底已过，别再恐惧，稳步重建会让一切重回正轨。",
        health: "身体逐渐康复，走出最艰难的阶段；但仍需耐心调养，别操之过急。生机正在慢慢恢复。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure lies face down with ten swords in his back, a scene of deep pain, yet on the far horizon the light of dawn is breaking. This card symbolizes the utter end of a chapter and the deepest low point. The worst has already happened; the pain runs deep, but it also means things cannot get worse. Only by accepting the ending and releasing attachment will the distant dawn truly come, and new life begin.",
        love: "A relationship reaches its end, or suffers the heavy blow of betrayal. Accepting the ending is painful, but it is the start of healing and renewal; dawn lies ahead.",
        career: "Work meets utter failure or a blow, falling to rock bottom. Painful as it is, the bottom is where the rebound begins; only by releasing the past can you set out again.",
        wealth: "Finances go through major loss or a bitter low. The worst is past; face it calmly, cut losses in time, and things can only move in a better direction.",
        health: "Body and mind are utterly worn or an old ailment flares, falling to a low. This is a time for complete rest and release; after the bottom, the light of recovery is coming."
      },
      rev: {
        general: "Reversed, this hints that the hardest moment is passing and you begin to recover slowly from the bottom. The hurt still lingers, but life is already sprouting in the ruins. It may also be that you are still resisting a necessary ending, slow to let go. Allow yourself to heal and be reborn, trust that the worst is past, and after the fire you will meet a brand-new self.",
        love: "You slowly emerge from love's hurt and gradually recover; or you are slow to release a bond that is over. Allow yourself to heal, for new life is coming.",
        career: "A turn appears in the difficulty and you recover step by step after the ordeal. Some pain lingers, but the hardest is past; rally with the lesson learned.",
        wealth: "Financial loss steadies and slow recovery begins. The bottom is past; fear no more, and steady rebuilding sets everything back on track.",
        health: "The body gradually recovers, leaving the hardest stage behind; but patient care is still needed, so do not rush. Vitality is slowly returning."
      }
    }
  },
  {
    id: 60,
    name: "宝剑侍从",
    nameEn: "Page of Swords",
    arcana: "minor",
    suit: "swords",
    number: 11,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-11.jpg",
    keywords: { up: ["好奇", "机敏", "求知", "警觉"], rev: ["爱说闲话", "冲动", "刺探", "言语伤人"] },
    keywordsEn: { up: ["Curiosity", "Wit", "Thirst for knowledge", "Vigilance"], rev: ["Gossip", "Impulsiveness", "Prying", "Cutting words"] },
    meaning: {
      up: {
        general: "宝剑侍从高举利剑、迎风而立，目光警觉而机敏，象征好奇、求知与敏锐的思维。他是充满活力的信息使者，渴望学习真相、探究一切。保持这份求知的热情与警觉的头脑，以理性和好奇拥抱新知，但也需注意言辞的分寸与思考的深度。",
        love: "感情中充满好奇与思维的交流，喜欢以言语和智慧互动。坦诚沟通带来新鲜感，但别只停留在理性的层面。",
        career: "适合学习新知、收集信息或从事沟通相关的工作。机敏好学、思维活跃，以敏锐的洞察力把握新的资讯。",
        wealth: "以敏锐的头脑收集财务资讯，寻找新机会。保持好奇与警觉，但需深入研究，别只凭一知半解行动。",
        health: "思维活跃、精力充沛，对健康充满好奇。适合学习新的养生知识，但别让过度的思虑影响身心平静。"
      },
      rev: {
        general: "逆位透露出冲动的言辞与是非。你或许口无遮拦、爱说闲话，或用尖锐的言语伤人，甚至暗中刺探、搬弄是非。机敏沦为狡黠，好奇变成窥探。请谨言慎行，别让轻率的言语与八卦招惹麻烦，收敛锋芒方能赢得信任。",
        love: "感情中言语尖锐或爱翻旧账，沟通伤人。也可能猜疑、刺探对方，需要收敛言辞、以真诚化解隔阂。",
        career: "职场中口无遮拦或卷入是非，言语招惹麻烦。冲动的表达或八卦损害信誉，需要谨慎言行。",
        wealth: "因冲动或轻信不实信息而财务失当。道听途说的消息不可靠，需要审慎核实、理性判断。",
        health: "过度思虑、心神不宁影响身心。焦躁的思绪或负面言语消耗能量，需要平静心神、谨言慎行。"
      }
    },
    meaningEn: {
      up: {
        general: "The Page of Swords stands facing the wind, sword raised, gaze alert and quick, symbolizing curiosity, a thirst for knowledge, and a keen mind. A lively messenger of information, he longs to learn the truth and probe all things. Keep this eager curiosity and vigilant mind, embrace new knowledge with reason and interest, but mind your measure in speech and the depth of your thinking.",
        love: "Love is full of curiosity and mental exchange, delighting in words and wit. Honest communication brings freshness, but do not linger only on the rational level.",
        career: "Suited to learning, gathering information, or communication-related work. Quick-witted and eager to learn, seize new information with keen insight.",
        wealth: "Gather financial information with a keen mind and seek new opportunities. Stay curious and alert, but research deeply and do not act on half-knowledge.",
        health: "Mentally active and energetic, curious about health. Suited to learning new wellness knowledge, but do not let overthinking disturb your inner calm."
      },
      rev: {
        general: "Reversed, this reveals impulsive words and intrigue. You may speak without a filter and love to gossip, or wound with sharp words, even prying and stirring up trouble. Wit turns to slyness, curiosity to snooping. Guard your words and conduct, do not invite trouble with careless speech and gossip, and temper your edge to win trust.",
        love: "Sharp words or dredging up old grievances hurt communication. Or you suspect and pry into your partner; rein in your words and dissolve the rift with sincerity.",
        career: "Speaking without a filter or getting caught in intrigue, your words invite trouble. Impulsive remarks or gossip harm your reputation; be careful in word and deed.",
        wealth: "Impulse or trusting false information leads to financial missteps. Hearsay is unreliable; verify carefully and judge rationally.",
        health: "Overthinking and restlessness affect body and mind. Agitated thoughts or negative words drain energy; calm the mind and guard your speech."
      }
    }
  },
  {
    id: 61,
    name: "宝剑骑士",
    nameEn: "Knight of Swords",
    arcana: "minor",
    suit: "swords",
    number: 12,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-12.jpg",
    keywords: { up: ["果断", "行动迅速", "雄心", "直率"], rev: ["鲁莽", "急躁", "横冲直撞", "考虑不周"] },
    keywordsEn: { up: ["Decisiveness", "Swift action", "Ambition", "Directness"], rev: ["Recklessness", "Impatience", "Charging in", "Thoughtlessness"] },
    meaning: {
      up: {
        general: "宝剑骑士挥剑策马、疾驰向前，象征果断、迅速的行动与勇往直前的雄心。他思维敏捷、目标明确，一旦决定便全力冲刺，无所畏惧。带着这股锐不可当的气势追逐目标，果敢而直率地行动，但也别忘记在冲刺中保持清醒的头脑。",
        love: "感情中主动直率、行动迅速，勇于追求。热烈而果断的攻势充满魅力，但别操之过急，也要顾及对方节奏。",
        career: "以果断的行动和敏捷的思维快速推进，雄心勃勃。适合需要魄力和效率的挑战，勇往直前能迅速突破。",
        wealth: "以果断敏捷的判断把握机会，行动迅速。适合当机立断，但需在冲劲中保持理性，别忽略潜在风险。",
        health: "精力充沛、行动力强，适合高强度的运动。释放这股冲劲的同时，注意别因急躁逞强而损耗身心。"
      },
      rev: {
        general: "逆位暗示鲁莽的冲动与考虑不周。你或许行事过于急躁，不顾后果地横冲直撞，或言辞尖锐、咄咄逼人，反而弄巧成拙。锐气沦为莽撞，果断变成鲁莽。请收敛冲劲，三思而后行，别让急于求成毁了原本可行的计划。",
        love: "感情中过于急躁或强势，忽略对方感受。咄咄逼人的态度引发冲突，需要放缓脚步、多些体谅。",
        career: "急于求成、鲁莽行事，导致考虑不周而失误。冲动的决策与尖锐的言辞招惹麻烦，需要沉稳与耐心。",
        wealth: "因冲动而仓促决策，忽略风险导致损失。急功近利的心态不利财务，需要冷静评估、谨慎行动。",
        health: "过度逞强或行事鲁莽，易引发意外或透支。急躁的心态影响身心，需要放慢节奏、学会节制。"
      }
    },
    meaningEn: {
      up: {
        general: "The Knight of Swords charges forward on his horse, sword raised, symbolizing decisiveness, swift action, and forward-driving ambition. Quick of thought and clear of aim, once decided he sprints with all his might, fearless. Carry this unstoppable momentum toward your goal, acting boldly and directly, but do not forget to keep a clear head amid the charge.",
        love: "Direct and swift in love, you dare to pursue. An ardent, decisive approach is charming, but do not rush, and mind your partner's pace.",
        career: "You advance fast with decisive action and quick thinking, full of ambition. Suited to challenges needing daring and efficiency, charging forward brings swift breakthroughs.",
        wealth: "Seize opportunities with decisive, quick judgment and act fast. Suited to prompt decisions, but keep reason amid the drive and do not ignore hidden risks.",
        health: "Energetic and driven, suited to high-intensity exercise. As you release this drive, take care not to strain body and mind through haste."
      },
      rev: {
        general: "Reversed, this hints at reckless impulse and poor forethought. You may act too hastily, charging ahead heedless of consequences, or speak sharply and aggressively and undo your own work. Sharpness turns to rashness, decisiveness to recklessness. Rein in the drive, think before you leap, and do not let rushing for results ruin an otherwise workable plan.",
        love: "Too hasty or forceful in love, you overlook your partner's feelings. An aggressive manner sparks conflict; slow down and show more consideration.",
        career: "Rushing for results and acting rashly, poor forethought causes mistakes. Impulsive decisions and sharp words invite trouble; steadiness and patience are needed.",
        wealth: "Impulse leads to hasty decisions, and ignoring risk brings loss. A quick-profit mindset harms finances; assess calmly and act carefully.",
        health: "Overexertion or rash action easily brings accidents or depletion. An impatient mindset affects body and mind; slow your pace and learn restraint."
      }
    }
  },
  {
    id: 62,
    name: "宝剑皇后",
    nameEn: "Queen of Swords",
    arcana: "minor",
    suit: "swords",
    number: 13,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-13.jpg",
    keywords: { up: ["理智", "独立", "洞察", "坦率"], rev: ["冷漠", "苛刻", "刻薄", "孤立"] },
    keywordsEn: { up: ["Clear-headedness", "Independence", "Perception", "Candor"], rev: ["Coldness", "Harshness", "Bitterness", "Isolation"] },
    meaning: {
      up: {
        general: "宝剑皇后端坐王座、举剑向天，神情冷静而睿智，象征理智、独立与敏锐的洞察力。她历经沧桑却愈发通透，以清醒的头脑和公正的判断看待世界，不被情绪所左右。以理性和坦率待人处事，凭借你的智慧与独立，做出清晰而公正的决定。",
        love: "在感情中理性独立，重视真诚与坦率的沟通。不被情绪冲昏头脑，以清醒的眼光看待关系，理智而不失温度。",
        career: "以敏锐的洞察和理性的判断处理事务，公正而专业。适合需要清晰思维和独立决断的领域，深受尊重。",
        wealth: "以清醒理智的头脑管理财务，判断精准。不被情绪或诱惑左右，独立自主地做出明智的财务决策。",
        health: "以理性客观的态度关注健康，善于分析问题。清晰的头脑助你做出明智的选择，保持身心的独立与平衡。"
      },
      rev: {
        general: "逆位透露出冷漠与苛刻。你或许因过往的伤痛而筑起高墙，变得冷淡疏离、言语刻薄，或以过度的理性压抑了情感，陷入孤立。批判的锋芒伤人也伤己。请让理智与温情重新平衡，别让防备的坚冰冻结了你与他人真诚的连结。",
        love: "感情中过于冷漠或苛刻，言语尖锐伤人。因防备而疏离，压抑情感让关系冰冷，需要卸下心防、重拾温度。",
        career: "过度批判或冷漠孤立，影响人际与合作。苛刻的态度让人难以亲近，需要在理性中融入更多包容。",
        wealth: "因过度苛刻或多疑而财务决策失衡。冷漠的态度影响合作，需要在谨慎中保持开放与信任。",
        health: "情感的压抑与孤立影响身心，内心的冰冷带来消耗。别用理性掩盖情感需求，学会向他人敞开与求助。"
      }
    },
    meaningEn: {
      up: {
        general: "The Queen of Swords sits on her throne, sword raised skyward, her expression calm and wise, symbolizing clear-headedness, independence, and keen perception. Having weathered hardship, she has grown only more lucid, viewing the world with a sober mind and fair judgment, unswayed by emotion. Deal with people and matters through reason and candor, and with your wisdom and independence, make clear and fair decisions.",
        love: "Rational and independent in love, you value sincere, candid communication. Not carried away by emotion, you view the bond with a clear eye, sensible yet still warm.",
        career: "You handle matters with keen perception and rational judgment, fair and professional. Suited to fields needing clear thinking and independent decisions, you are deeply respected.",
        wealth: "You manage finances with a sober, rational mind and precise judgment. Unswayed by emotion or temptation, you make wise financial decisions independently.",
        health: "You attend to health with a rational, objective attitude, good at analyzing problems. A clear mind helps you choose wisely, keeping body and mind independent and balanced."
      },
      rev: {
        general: "Reversed, this reveals coldness and harshness. You may have built high walls from past hurt, growing distant and cutting in speech, or suppressed feeling through excess reason and fallen into isolation. A critical edge wounds others and yourself. Let reason and warmth find balance again, and do not let the ice of defensiveness freeze your sincere connection with others.",
        love: "Too cold or harsh in love, sharp words wound. Distant from defensiveness, suppressed feeling leaves the bond chilly; lower your guard and rekindle warmth.",
        career: "Excessive criticism or cold isolation harms relationships and cooperation. A harsh manner keeps people at bay; blend more tolerance into your reason.",
        wealth: "Excess harshness or suspicion unbalances financial decisions. A cold attitude hampers cooperation; keep openness and trust within your caution.",
        health: "Emotional repression and isolation affect body and mind, and inner coldness brings depletion. Do not mask emotional needs with reason; learn to open up and ask for help."
      }
    }
  },
  {
    id: 63,
    name: "宝剑国王",
    nameEn: "King of Swords",
    arcana: "minor",
    suit: "swords",
    number: 14,
    element: "风",
    elementEn: "Air",
    img: "assets/cards/swords-14.jpg",
    keywords: { up: ["理性权威", "公正", "智慧", "决断"], rev: ["专断", "冷酷", "滥用权力", "操纵"] },
    keywordsEn: { up: ["Rational authority", "Justice", "Wisdom", "Decisiveness"], rev: ["Authoritarianism", "Ruthlessness", "Abuse of power", "Manipulation"] },
    meaning: {
      up: {
        general: "宝剑国王正襟危坐、剑锋笔直，象征理性的权威、公正的判断与深刻的智慧。他以清晰的逻辑和不偏不倚的立场做出决断，是真理与规则的守护者。运用你的理智与专业，以公正而果断的方式处理事务，凭借智慧与诚信赢得众人的信服与尊重。",
        love: "在感情中理性成熟，重视沟通与原则。以诚实和公正对待关系，是可靠而有担当的伴侣，给予对方清晰的方向。",
        career: "以卓越的智慧和公正的判断掌控大局，专业而权威。适合法律、管理、决策等领域，理性的决断带来成功。",
        wealth: "以理性和专业的眼光管理财务，判断精准公正。善于制定清晰的策略，凭借智慧与纪律实现稳健增长。",
        health: "以理智和自律管理健康，善于分析和决策。清晰的规划与坚定的执行是健康之本，保持身心的秩序。"
      },
      rev: {
        general: "逆位暗示权威的滥用与冷酷。你或许变得专断独裁，以强硬的逻辑压制他人，或滥用权力、操纵人心，冷酷而不近人情。理性沦为冷血，权威变成压迫。请让智慧回归善意，别让冰冷的逻辑与控制欲，割裂了你与他人之间的信任。",
        love: "感情中过于强势专断或冷酷理性，忽略情感。以逻辑压制对方引发疏离，需要在理性中融入温情与体谅。",
        career: "独断专行、滥用权威，引发团队抵触。冷酷或操纵的手段损害信任，需要以公正和善意重建权威。",
        wealth: "因专断或过度算计而财务失衡，手段冷酷。滥用优势或操纵他人终将反噬，需要回归诚信与公正。",
        health: "过度自律或压抑情感，身心紧绷失衡。冷硬的态度掩盖了真实需求，需要柔软待己、平衡理性与情感。"
      }
    },
    meaningEn: {
      up: {
        general: "The King of Swords sits upright, blade straight, symbolizing rational authority, fair judgment, and profound wisdom. He decides through clear logic and an impartial stance, a guardian of truth and rule. Use your reason and expertise to handle matters fairly and decisively, and through wisdom and integrity, win others' trust and respect.",
        love: "Rational and mature in love, you value communication and principle. Treating the bond with honesty and fairness, you are a reliable, responsible partner who gives clear direction.",
        career: "You command the big picture with outstanding wisdom and fair judgment, professional and authoritative. Suited to law, management, and decision-making, rational resolve brings success.",
        wealth: "You manage finances with a rational, expert eye and precise, fair judgment. Skilled at setting clear strategy, you achieve steady growth through wisdom and discipline.",
        health: "You manage health with reason and discipline, good at analysis and decisions. Clear planning and firm execution are the root of health; keep body and mind in order."
      },
      rev: {
        general: "Reversed, this hints at abused authority and ruthlessness. You may turn autocratic, crushing others with hard logic, or abuse power and manipulate hearts, cold and unfeeling. Reason curdles into cold-bloodedness and authority into oppression. Let wisdom return to goodwill, and do not let icy logic and the urge to control sever the trust between you and others.",
        love: "Too forceful and autocratic or coldly rational in love, you overlook feelings. Crushing your partner with logic breeds distance; blend warmth and understanding into your reason.",
        career: "Autocratic and abusing authority, you provoke the team's resistance. Cold or manipulative means harm trust; rebuild authority through fairness and goodwill.",
        wealth: "Autocratic ways or excess scheming unbalance finances, the methods ruthless. Abusing advantage or manipulating others eventually rebounds; return to integrity and fairness.",
        health: "Excess discipline or suppressed emotion leaves body and mind tense and unbalanced. A hard attitude masks real needs; treat yourself gently and balance reason with feeling."
      }
    }
  },
  {
    id: 64,
    name: "星币一",
    nameEn: "Ace of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 1,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-01.jpg",
    keywords: { up: ["机遇", "丰盛", "务实", "新财源"], rev: ["机会流失", "贪婪", "计划落空", "根基不稳"] },
    keywordsEn: { up: ["Opportunity", "Prosperity", "Manifestation", "New income"], rev: ["Lost opportunity", "Greed", "Failed plans", "Instability"] },
    meaning: {
      up: {
        general: "一只手自云中托出金光闪闪的星币，脚下花园繁茂，象征物质世界中坚实的新机遇。一份工作、一笔收入或一个能生根发芽的计划正降临。这是丰盛与安稳的种子，只要脚踏实地地耕耘，让理想落地生根，丰厚的成果终将随之而来。",
        love: "关系稳定务实地发展，或有机会建立长久可靠的连结。以真诚和承诺为基础，感情如种子般踏实地生长。",
        career: "新工作或事业机会降临，基础扎实、前景可期。以务实的态度投入，付出的努力将带来稳固的回报。",
        wealth: "新的财源或投资机会出现，回报可期。这是财务丰盛的开端，脚踏实地地把握，稳健经营带来收获。",
        health: "身体状态踏实向好，适合建立长期健康的根基。注重务实的养生与规律的生活，为健康打下坚实基础。"
      },
      rev: {
        general: "逆位暗示机会的流失或根基的不稳。你或许错失了一个宝贵的机遇，或计划因准备不足而落空，也可能因贪婪与短视而急于求成。丰盛的种子未能生根。请回归务实与耐心，稳固根基，别让浮躁与贪心断送了原本的良机。",
        love: "关系缺乏稳固的基础，或因现实条件而受阻。急于求成或不够踏实，需要以耐心和诚意重建可靠的连结。",
        career: "机会延迟或落空，项目根基不牢。准备不足或时机不对导致受挫，需要重新夯实基础、稳步推进。",
        wealth: "投资失利或财务不稳，谨防因贪婪而因小失大。错失良机或计划落空，需要务实规划、耐心积累。",
        health: "健康投入未见成效，或根基不稳。急于求成的方法难有效果，需要调整方法、踏实坚持。"
      }
    },
    meaningEn: {
      up: {
        general: "A hand from the clouds offers a gleaming pentacle above a lush garden, symbolizing a solid new opportunity in the material world. A job, an income, or a plan that can take root is arriving. This is a seed of prosperity and stability; work it with your feet on the ground, let your ideal take root, and rich results will follow.",
        love: "The relationship develops in a stable, practical way, or there is a chance to build a lasting, reliable bond. Founded on sincerity and commitment, love grows steadily like a seed.",
        career: "A new job or business opportunity arrives, well founded and promising. Commit with a practical attitude, and your effort will bring solid returns.",
        wealth: "A new income source or investment opportunity appears, with returns in prospect. This is the start of financial abundance; seize it with your feet on the ground, and steady management brings a harvest.",
        health: "Your physical state steadily improves, suiting the building of a long-term foundation. Focus on practical wellness and a regular life to lay a solid base for health."
      },
      rev: {
        general: "Reversed, this hints at lost opportunity or an unstable foundation. You may have missed a precious chance, or a plan falls through from poor preparation, or you rush for results out of greed and short-sightedness. The seed of abundance fails to root. Return to practicality and patience, secure the foundation, and do not let restlessness and greed squander a good chance.",
        love: "The relationship lacks a solid base, or is blocked by practical conditions. Rushing or being insufficiently grounded, rebuild a reliable bond with patience and sincerity.",
        career: "Opportunities are delayed or fall through, and a project's foundation is shaky. Poor preparation or bad timing brings setbacks; re-firm the base and advance steadily.",
        wealth: "Investment losses or instability; beware losing big for a small gain out of greed. Missed chances or failed plans call for practical planning and patient accumulation.",
        health: "Health efforts show no results, or the foundation is unstable. Rushed methods bear little fruit; adjust your approach and persist steadily."
      }
    }
  },
  {
    id: 65,
    name: "星币二",
    nameEn: "Two of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 2,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-02.jpg",
    keywords: { up: ["平衡", "灵活", "多重任务", "应变"], rev: ["失衡", "手忙脚乱", "分身乏术", "顾此失彼"] },
    keywordsEn: { up: ["Balance", "Adaptability", "Juggling", "Flexibility"], rev: ["Imbalance", "Overwhelm", "Spread too thin", "Disorganization"] },
    meaning: {
      up: {
        general: "一人灵巧地玩弄着两枚以无限符号相连的星币，身后波涛起伏，象征平衡、灵活与在变动中的应变能力。你正同时兼顾多重事务，如同踩着节奏起舞。以从容和弹性应对生活的起伏，只要保持灵活的身段，便能在忙碌中巧妙地维持平衡。",
        love: "在感情与其他事务间寻求平衡，需要灵活地兼顾。以轻松的心态应对关系的起伏，别让忙碌冷落了彼此。",
        career: "同时处理多项任务，需要灵活的时间管理与应变能力。以从容的节奏兼顾各方，忙碌中仍能游刃有余。",
        wealth: "财务上需要灵活地平衡收支与多方开销。以弹性的方式管理资源，量入为出，在变动中维持稳定。",
        health: "在忙碌中平衡身心，需要灵活地安排作息。别让多重压力打乱节奏，适度调节能保持身心的平衡。"
      },
      rev: {
        general: "逆位暗示失衡与手忙脚乱。你或许同时承担了过多的事务，分身乏术、顾此失彼，被压力压得喘不过气。平衡的舞步乱了节奏。请重新厘清优先次序，学会取舍与放手，别让过度的负荷让你在忙乱中失去了掌控。",
        love: "在感情与其他事务间失去平衡，无暇顾及关系。手忙脚乱让人疏于经营，需要重新分配时间与精力。",
        career: "任务过多、分身乏术，顾此失彼导致效率低下。缺乏条理让人手忙脚乱，需要理清优先级、学会取舍。",
        wealth: "财务失衡、收支难以协调，多方开销让人捉襟见肘。缺乏规划导致混乱，需要重新梳理、量力而行。",
        health: "多重压力打乱作息，身心疲于应付。忙乱与失衡影响健康，需要放慢脚步、重新找回生活的节奏。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure nimbly juggles two pentacles linked by an infinity symbol, waves rolling behind, symbolizing balance, flexibility, and adaptability amid change. You are handling several matters at once, as if dancing to a rhythm. Meet life's ups and downs with ease and elasticity; keep a supple stance and you can skillfully hold your balance amid the busyness.",
        love: "You seek balance between the relationship and other matters, needing to juggle flexibly. Meet the bond's ups and downs with a light heart, and do not let busyness neglect each other.",
        career: "Handling several tasks at once calls for flexible time management and adaptability. Balance all sides at an easy pace, and you can stay capable even when busy.",
        wealth: "Finances call for flexibly balancing income, outgo, and many expenses. Manage resources elastically, live within your means, and stay stable amid change.",
        health: "Balance body and mind amid busyness, arranging your routine flexibly. Do not let multiple pressures upset your rhythm; measured adjustment keeps balance."
      },
      rev: {
        general: "Reversed, this hints at imbalance and being overwhelmed. You may have taken on too much at once, spread too thin and dropping the ball, breathless under pressure. The dance of balance has lost its rhythm. Reclarify your priorities, learn to choose and let go, and do not let an excessive load make you lose control amid the chaos.",
        love: "You lose balance between the relationship and other matters, with no time for the bond. Being overwhelmed leaves it neglected; redistribute your time and energy.",
        career: "Too many tasks and spread too thin, dropping the ball lowers efficiency. Disorganization leaves you frazzled; sort your priorities and learn to choose.",
        wealth: "Finances are unbalanced, income and outgo hard to reconcile, and many expenses stretch you thin. Lack of planning brings chaos; reorganize and live within your means.",
        health: "Multiple pressures upset your routine and body and mind struggle to keep up. Chaos and imbalance affect health; slow down and rediscover life's rhythm."
      }
    }
  },
  {
    id: 66,
    name: "星币三",
    nameEn: "Three of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 3,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-03.jpg",
    keywords: { up: ["合作", "技艺", "认可", "团队"], rev: ["不协调", "技艺不足", "缺乏认可", "各自为政"] },
    keywordsEn: { up: ["Collaboration", "Craftsmanship", "Recognition", "Teamwork"], rev: ["Discord", "Lack of skill", "Unrecognized", "Working alone"] },
    meaning: {
      up: {
        general: "工匠在教堂中展示技艺，与他人商讨合作，象征团队协作、精湛技艺与得到认可。你的专业能力正受到肯定，凭借与他人的通力合作，共同打造出色的成果。虚心学习、发挥所长，在集思广益中精进技艺，团队的智慧将成就更大的作品。",
        love: "感情需要双方共同的经营与付出，如同携手筑造。良好的合作与沟通让关系稳固，彼此的努力得到认可。",
        career: "团队合作顺畅，专业技能获得认可与赞赏。集众人之长共创佳绩，是发挥所长、精进技艺的好时机。",
        wealth: "通过合作或专业技能获得稳定收益。团队的协作带来共赢，凭借扎实的能力换取应得的回报。",
        health: "在专业的指导与团队的支持下，身心稳步改善。听取专家建议、循序渐进，健康管理事半功倍。"
      },
      rev: {
        general: "逆位暗示合作的不协调或技艺的不足。你或许在团队中各自为政、缺乏配合，或因能力尚有欠缺而难以胜任，努力未获认可。缺乏沟通让协作事倍功半。请虚心学习、加强配合，别让骄傲或散漫破坏了共同的成果。",
        love: "感情中缺乏共同的经营与配合，各自为政。付出不被认可或沟通不畅，需要重新携手、用心经营。",
        career: "团队协作不畅、配合欠佳，或专业能力不足。努力未获认可让人沮丧，需要提升技能、加强沟通。",
        wealth: "合作出现分歧或利益不均，影响收益。能力或配合的欠缺导致回报不如预期，需要精进与协调。",
        health: "缺乏专业指导或方法不当，健康改善缓慢。各自为政或不听建议不利康复，需要正确的指导与配合。"
      }
    },
    meaningEn: {
      up: {
        general: "A craftsman displays his skill in a cathedral, conferring with others on the work, symbolizing teamwork, fine craftsmanship, and recognition. Your professional ability is being affirmed, and through wholehearted collaboration you create excellent results together. Learn humbly, play to your strengths, and refine your craft through shared thinking, for the team's wisdom achieves greater work.",
        love: "Love needs both to build and give together, like raising something hand in hand. Good cooperation and communication make the bond solid, and each other's effort is recognized.",
        career: "Teamwork flows smoothly and your professional skills win recognition and praise. Combining everyone's strengths creates fine results, a good time to play to your strengths and refine your craft.",
        wealth: "Steady income comes through collaboration or professional skill. Teamwork brings mutual gain, and solid ability earns you the returns you deserve.",
        health: "Under professional guidance and team support, body and mind steadily improve. Heeding expert advice and progressing step by step makes health management doubly effective."
      },
      rev: {
        general: "Reversed, this hints at poor collaboration or insufficient skill. You may be working at cross-purposes in the team, lacking coordination, or unable to keep up due to gaps in ability, your effort unrecognized. Lack of communication makes teamwork twice the work for half the result. Learn humbly, coordinate better, and do not let pride or slackness spoil the shared result.",
        love: "The relationship lacks shared effort and coordination, each going their own way. Giving goes unrecognized or communication is poor; join hands again and tend it with care.",
        career: "Teamwork is rough and coordination poor, or professional ability falls short. Unrecognized effort is disheartening; upgrade your skills and improve communication.",
        wealth: "Disagreement or uneven splits in a partnership affect returns. Gaps in ability or coordination make returns fall short; refine your skills and coordinate.",
        health: "Lacking professional guidance or using the wrong methods, health improves slowly. Going it alone or ignoring advice hinders recovery; proper guidance and cooperation are needed."
      }
    }
  },
  {
    id: 67,
    name: "星币四",
    nameEn: "Four of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 4,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-04.jpg",
    keywords: { up: ["稳固", "保守", "掌控", "安全感"], rev: ["过度执着", "吝啬", "松手", "释放掌控"] },
    keywordsEn: { up: ["Security", "Conservation", "Control", "Stability"], rev: ["Possessiveness", "Miserliness", "Letting go", "Releasing control"] },
    meaning: {
      up: {
        general: "一人紧抱着星币、稳坐不动，象征稳固、保守与对物质安全的掌控。你重视安稳，努力守护已有的成果与资源，追求确定的安全感。适度的保守能让根基稳固，但也要留意——过度紧握不放，可能会阻碍新的流动与成长的空间。",
        love: "感情中重视安全感与稳定，倾向于守护现有的关系。适度的珍视是好事，但别因过度掌控而让对方感到束缚。",
        career: "稳守现有的地位与成果，作风保守而稳健。适合巩固根基、守成为主，但别因过度谨慎而错失发展的机会。",
        wealth: "财务稳固、善于积累与守财，安全感十足。储蓄有道值得肯定，但别过度吝啬，适度的流动才能带来增长。",
        health: "身心状态稳定，注重维护与保养。规律而稳健的方式有益健康，但别因过度控制而让自己紧绷僵化。"
      },
      rev: {
        general: "逆位透露出过度的执着或松手的转机。你或许因不安全感而变得吝啬、抓得太紧，被物质与掌控欲所束缚；也可能是终于学会放手，释放了紧握的执念。请审视你紧抓不放的是什么，适度地松开手，让财富与能量重新流动起来。",
        love: "因过度掌控或占有而让关系窒息，或终于学会放手。别用控制换取安全感，适度的信任让感情更自由。",
        career: "过度保守或抓权不放，阻碍了发展；或开始愿意放手尝试新的可能。别因固守而僵化，适度开放带来机会。",
        wealth: "因吝啬或过度囤积而阻碍财富流动，或开始学会合理地花用与分享。别让金钱奴役你，适度松手才能生财。",
        health: "过度控制或压抑让身心紧绷失衡，或开始学会放松。别把自己绷得太紧，适度地释放能让身心重获流动。"
      }
    },
    meaningEn: {
      up: {
        general: "A figure clutches his pentacles, sitting firm and unmoving, symbolizing security, conservation, and control over material safety. You value stability and work to guard your existing gains and resources, seeking sure security. Measured caution keeps the foundation solid, but take note, holding on too tightly can block new flow and the room to grow.",
        love: "You value security and stability in love, inclined to guard the existing bond. Measured cherishing is good, but do not let over-control make your partner feel confined.",
        career: "You hold firm to your position and gains, conservative and steady in style. Suited to shoring up the base and preserving, but do not let over-caution cost you chances to grow.",
        wealth: "Finances are secure, and you save and preserve well, full of security. Prudent saving is commendable, but do not be overly miserly; measured flow brings growth.",
        health: "Your state is stable and you focus on upkeep and care. Regular, steady ways benefit health, but do not tense and stiffen through over-control."
      },
      rev: {
        general: "Reversed, this reveals excessive clinging or a turn toward letting go. You may grow miserly and grip too tightly from insecurity, bound by materialism and the urge to control; or you may finally learn to let go, releasing a tight-held fixation. Examine what you are clutching, loosen your grip in measure, and let wealth and energy flow again.",
        love: "Over-control or possessiveness suffocates the bond, or you finally learn to let go. Do not trade control for security; measured trust makes love freer.",
        career: "Over-caution or clinging to power blocks growth; or you begin willing to let go and try new possibilities. Do not stiffen through holding on; measured openness brings chances.",
        wealth: "Miserliness or over-hoarding blocks the flow of wealth, or you begin to learn to spend and share sensibly. Do not be enslaved by money; measured loosening lets it grow.",
        health: "Over-control or repression leaves body and mind tense and unbalanced, or you begin to learn to relax. Do not wind yourself too tight; measured release restores flow."
      }
    }
  },
  {
    id: 68,
    name: "星币五",
    nameEn: "Five of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 5,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-05.jpg",
    keywords: { up: ["匮乏", "困顿", "孤立", "失去支持"], rev: ["复原", "度过难关", "寻求帮助", "重获支持"] },
    keywordsEn: { up: ["Hardship", "Lack", "Isolation", "Loss of support"], rev: ["Recovery", "Weathering hardship", "Seeking help", "Regaining support"] },
    meaning: {
      up: {
        general: "两个衣衫褴褛的身影在风雪中艰难前行，走过透着灯光的教堂窗前，象征匮乏、困顿与被孤立的处境。你或许正经历物质或精神上的艰难，感到孤立无援。然而温暖的援助其实近在咫尺——别因骄傲或绝望而错过，寻求帮助并非软弱，困境终会过去。",
        love: "感情中感到疏离、匮乏或缺乏支持，共患难考验着彼此。别让困境中的孤立感加深隔阂，相互扶持能共度难关。",
        career: "工作陷入困境，或失去支持与机会，倍感艰难。别独自硬撑，主动寻求帮助与资源，困顿只是暂时的。",
        wealth: "财务陷入拮据或匮乏，倍感压力。别因窘迫而绝望或羞于求助，寻求支援、开源节流能助你度过难关。",
        health: "身心俱疲、感到孤立无援，健康或精神状态低落。别忽视自己的需求，及时寻求帮助与支持是复原的关键。"
      },
      rev: {
        general: "逆位透露出困境的好转与复原的希望。你正逐渐走出匮乏与艰难，或终于放下骄傲、寻求并获得了帮助。寒冬即将过去，温暖的支持重新回到身边。带着劫后余生的坚韧，重建你的资源与信心，最艰难的日子已经过去。",
        love: "从感情的困境中逐渐走出，重获支持与温暖。放下隔阂、相互扶持，共患难后的关系更加坚固。",
        career: "工作困境出现转机，逐步走出低谷。重新获得支持与机会，或寻求帮助后柳暗花明，稳步复原。",
        wealth: "财务拮据逐渐缓解，开始复苏。寻求援助或开源节流见效，走出匮乏，重建稳定的经济基础。",
        health: "身心逐渐复原，走出低谷。寻求帮助与支持后状态好转，别再独自硬撑，康复的希望正在到来。"
      }
    },
    meaningEn: {
      up: {
        general: "Two ragged figures trudge through the snow past a lit church window, symbolizing hardship, lack, and isolation. You may be going through material or spiritual difficulty, feeling alone and unsupported. Yet warm help is in fact close at hand, do not miss it through pride or despair, for seeking help is no weakness, and the hardship will pass.",
        love: "You feel distant, deprived, or unsupported in love, and shared hardship tests you both. Do not let isolation deepen the rift; supporting each other, you can weather it together.",
        career: "Work falls into difficulty, or you lose support and opportunity, feeling the strain. Do not tough it out alone; seek help and resources, for the hardship is only temporary.",
        wealth: "Finances fall into tight straits or lack, and pressure mounts. Do not despair or feel ashamed to ask for help; seeking support and managing income and expenses helps you through.",
        health: "Worn in body and mind and feeling alone, your health or spirits are low. Do not ignore your needs; seeking help and support in time is key to recovery."
      },
      rev: {
        general: "Reversed, this reveals a turn for the better and hope of recovery. You are gradually emerging from lack and hardship, or you finally set down pride and sought and received help. The winter is about to pass, and warm support returns to your side. With the resilience of a survivor, rebuild your resources and confidence, for the hardest days are behind you.",
        love: "You gradually emerge from the relationship's hardship and regain support and warmth. Setting aside the rift and supporting each other, the bond grows firmer after shared trials.",
        career: "A turn appears in work difficulty and you climb out of the trough. Regaining support and opportunity, or finding a way after seeking help, you steadily recover.",
        wealth: "Tight finances gradually ease and recovery begins. Seeking help or managing income and expenses takes effect; leaving lack behind, rebuild a stable base.",
        health: "Body and mind gradually recover and climb out of the trough. After seeking help and support your state improves; stop toughing it out alone, for hope of recovery is coming."
      }
    }
  },
  {
    id: 69,
    name: "星币六",
    nameEn: "Six of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 6,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-06.jpg",
    keywords: { up: ["慷慨", "施与受", "分享", "公平"], rev: ["失衡的给予", "债务", "附带条件", "依赖"] },
    keywordsEn: { up: ["Generosity", "Giving and receiving", "Sharing", "Fairness"], rev: ["Unequal exchange", "Debt", "Strings attached", "Dependence"] },
    meaning: {
      up: {
        general: "富商手持天平，慷慨地向乞者施予钱财，象征给予、接受与资源的公平流动。这是关于慷慨与互助的牌，你或许正处于施予或受助的位置。以感恩的心接受，以善意的手给予，让资源在公平与慈悲中流转，回馈终将以另一种形式回到你身边。",
        love: "感情中的付出与回报趋于平衡，彼此慷慨给予、真诚接受。健康的关系建立在公平的互助与分享之上。",
        career: "获得他人的帮助、指导或认可，或慷慨地提携他人。团队中的公平互助带来共赢，善意的付出得到回响。",
        wealth: "财务上有得到援助或回馈的机会，收支趋于平衡。适合慷慨分享或接受帮助，善用资源、量入为出。",
        health: "身心在给予与接受的平衡中得到滋养。接受他人的关怀与支持，或分享自己的能量，让身心和谐流动。"
      },
      rev: {
        general: "逆位透露出给予的失衡或附带条件的施舍。你或许在关系中付出与接受严重失衡，或某些帮助暗藏着操控与债务。慷慨背后可能有不对等的权力。请审视施与受的动机，别让不健康的依赖或亏欠，破坏了本该公平的流动。",
        love: "感情中付出与回报失衡，一方过度给予或索取。附带条件的爱或权力不对等让人疲惫，需要重建公平。",
        career: "帮助或回报暗藏条件，或付出得不到应有的认可。职场的施与受失衡，需要厘清界限、争取公平。",
        wealth: "财务上陷入债务或不对等的借贷，或施舍暗藏操控。别让金钱的往来变成负担与依赖，需谨慎权衡。",
        health: "在照顾他人中过度消耗，或过度依赖他人的支持。给予与接受的失衡影响身心，需要重新平衡自己的能量。"
      }
    },
    meaningEn: {
      up: {
        general: "A wealthy merchant holds his scales and gives generously to beggars, symbolizing giving, receiving, and the fair flow of resources. This is a card of generosity and mutual aid, and you may be in the position of giver or receiver. Receive with a grateful heart, give with a kind hand, and let resources circulate in fairness and compassion, for what you give will return to you in another form.",
        love: "Giving and receiving in the relationship move toward balance, both giving generously and receiving sincerely. A healthy bond rests on fair mutual aid and sharing.",
        career: "You receive help, mentoring, or recognition, or generously lift others up. Fair mutual aid in the team brings mutual gain, and kind giving is echoed back.",
        wealth: "There is a chance to receive aid or a return, and income and outgo move toward balance. Suited to sharing generously or accepting help; use resources well and live within your means.",
        health: "Body and mind are nourished in the balance of giving and receiving. Accept others' care and support, or share your own energy, and let body and mind flow in harmony."
      },
      rev: {
        general: "Reversed, this reveals unbalanced giving or charity with strings attached. You may have a severe imbalance of giving and receiving in a relationship, or some help hides control and debt. Behind the generosity may lie an unequal power. Examine the motives of giving and receiving, and do not let unhealthy dependence or obligation spoil what should be a fair flow.",
        love: "Giving and receiving fall out of balance, with one giving or taking too much. Love with strings or an unequal power drains you; rebuild fairness.",
        career: "Help or reward hides conditions, or your giving goes unrecognized. Workplace exchange is unbalanced; clarify boundaries and seek fairness.",
        wealth: "You fall into debt or unequal lending, or charity hides control. Do not let money's flow become a burden and dependence; weigh things carefully.",
        health: "You over-deplete in caring for others, or over-rely on others' support. An imbalance of giving and receiving affects body and mind; rebalance your own energy."
      }
    }
  },
  {
    id: 70,
    name: "星币七",
    nameEn: "Seven of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 7,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-07.jpg",
    keywords: { up: ["耐心", "投资", "评估", "静待收成"], rev: ["急躁", "徒劳", "缺乏耐心", "投资失利"] },
    keywordsEn: { up: ["Patience", "Investment", "Assessment", "Long-term view"], rev: ["Impatience", "Wasted effort", "Frustration", "Poor return"] },
    meaning: {
      up: {
        general: "农人拄着锄头，凝望着藤上渐渐成熟的果实，象征耐心、投资与静待收成的智慧。你已辛勤耕耘许久，如今是暂停脚步、评估成果的时刻。别急于求成，好的收获需要时间酝酿。以耐心和长远的眼光看待付出，坚持终将迎来丰硕的回报。",
        love: "感情需要耐心的经营与等待，用心的付出正慢慢开花结果。别急于求成，给关系时间成长与沉淀。",
        career: "前期的努力正在积累成果，需要耐心等待收成。适合评估进展、审视方向，坚持不懈终将有所回报。",
        wealth: "长期投资或积累开始显现回报，需要耐心持有。别因短期波动而急躁，放眼长远，稳健的耕耘终有丰收。",
        health: "健康的调理需要时间与耐心，成效正在缓慢累积。坚持规律的养生，别急于看到结果，身心会稳步向好。"
      },
      rev: {
        general: "逆位暗示急躁与徒劳的付出。你或许因缺乏耐心而焦虑不安，急于看到成果，或发现长期的投入回报甚微，感到努力白费。收成不如预期让人沮丧。请重新评估方向与方法，别因一时的急躁而放弃，或及时止损、调整策略。",
        love: "对感情的进展缺乏耐心，急于求成或感到付出徒劳。别因焦躁而放弃，或需重新评估这段关系是否值得。",
        career: "努力未见预期的回报，令人焦虑沮丧。急于求成或方向有误导致徒劳，需要耐心调整或重新评估策略。",
        wealth: "投资回报不如预期或长期未见收益，令人心急。别因焦躁而冲动操作，需重新评估、耐心或及时止损。",
        health: "调理未见成效而心急，或方法不当导致徒劳。别因缺乏耐心而放弃，需要调整方法、持之以恒。"
      }
    },
    meaningEn: {
      up: {
        general: "A farmer leans on his hoe, gazing at the fruit ripening on the vine, symbolizing patience, investment, and the wisdom of awaiting the harvest. You have toiled long, and now it is time to pause and assess your results. Do not rush; a good harvest needs time to ripen. View your effort with patience and a long-term eye, and perseverance will at last bring a rich return.",
        love: "Love needs patient cultivation and waiting, as heartfelt giving slowly bears fruit. Do not rush; give the bond time to grow and settle.",
        career: "Early efforts are accruing into results that need patient waiting. A good time to assess progress and review direction; steady perseverance will be rewarded.",
        wealth: "Long-term investment or accumulation begins to show returns that call for patient holding. Do not fret over short-term swings; take the long view, for steady tending brings a harvest.",
        health: "Health care needs time and patience, and its effects are slowly accruing. Keep to regular wellness and do not rush to see results, and body and mind will steadily improve."
      },
      rev: {
        general: "Reversed, this hints at impatience and wasted effort. You may be anxious from a lack of patience, eager to see results, or find that long investment brings little return and your effort feels wasted. A harvest below expectation is disheartening. Reassess your direction and methods, do not give up over passing impatience, and cut losses and adjust your strategy in time.",
        love: "Impatient with the relationship's progress, you rush or feel your giving is wasted. Do not give up out of agitation, or reassess whether this bond is worth it.",
        career: "Effort brings no expected return, causing anxiety and frustration. Rushing or a wrong direction wastes effort; adjust patiently or reassess your strategy.",
        wealth: "Returns fall short of expectation or show no gain for long, causing worry. Do not act impulsively out of agitation; reassess, be patient, or cut losses in time.",
        health: "Anxious that care shows no effect, or wrong methods waste effort. Do not give up for lack of patience; adjust your approach and persevere."
      }
    }
  },
  {
    id: 71,
    name: "星币八",
    nameEn: "Eight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 8,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-08.jpg",
    keywords: { up: ["专注", "勤奋", "精进", "钻研"], rev: ["敷衍", "缺乏专注", "完美主义", "重复乏味"] },
    keywordsEn: { up: ["Diligence", "Mastery", "Dedication", "Skill-building"], rev: ["Carelessness", "Lack of focus", "Perfectionism", "Tedium"] },
    meaning: {
      up: {
        general: "工匠专心致志地雕琢星币，一枚接一枚地精进技艺，象征专注、勤奋与对卓越的追求。你正埋首于磨练技能、精益求精，一步一个脚印地稳步成长。以工匠般的专注和毅力投入手中的事，用心打磨每一个细节，精湛的技艺终将带来应得的成就。",
        love: "用心经营感情，愿意为关系投入时间与努力。踏实的付出与不断的磨合让感情日益深厚而稳固。",
        career: "专注钻研、精进技能，是提升专业能力的好时机。勤奋踏实的态度获得肯定，一步步积累成就与口碑。",
        wealth: "凭借专业技能和勤奋努力稳定获利，脚踏实地地积累财富。精进本领是最好的投资，回报稳步增长。",
        health: "以专注和自律投入健康管理，养成良好的习惯。持之以恒的努力见成效，身心在稳步的耕耘中日益强健。"
      },
      rev: {
        general: "逆位透露出敷衍与专注的缺失。你或许对手中的事失去了热情，草率应付、缺乏用心，或陷入了枯燥重复的倦怠。也可能相反，被完美主义困住，钻牛角尖而止步不前。请重拾对精进的热忱，在专注与放松之间找到平衡。",
        love: "对感情敷衍应付、缺乏用心经营，或陷入乏味的重复。别让懈怠冷却了关系，需要重新投入真诚与热情。",
        career: "工作敷衍、缺乏专注，或陷入枯燥的重复而倦怠。技能停滞不前，需要重燃热情，或摆脱完美主义的束缚。",
        wealth: "因敷衍或缺乏钻研而收益停滞。心不在焉的态度难有回报，需要重新专注、精进本领以提升价值。",
        health: "健康管理松懈敷衍、难以坚持，或过度苛求反而适得其反。需要找回专注与自律，以平衡的态度持续。"
      }
    },
    meaningEn: {
      up: {
        general: "A craftsman focuses intently on carving pentacles, refining his skill one by one, symbolizing diligence, dedication, and the pursuit of excellence. You are absorbed in honing your skills and striving for better, growing steadily step by step. Apply a craftsman's focus and perseverance to the work at hand, polish every detail with care, and fine skill will bring the achievement you deserve.",
        love: "You tend the relationship with care, willing to invest time and effort. Grounded giving and continual adjustment make the bond ever deeper and more solid.",
        career: "Focused study and skill-building make this a good time to raise your professional ability. A diligent, grounded attitude wins recognition as you build achievement and reputation step by step.",
        wealth: "You gain steadily through professional skill and diligence, accumulating wealth with your feet on the ground. Refining your craft is the best investment, and returns grow steadily.",
        health: "Applying focus and discipline to health management, you build good habits. Persevering effort shows results, and body and mind grow ever stronger through steady tending."
      },
      rev: {
        general: "Reversed, this reveals carelessness and a lack of focus. You may have lost passion for the work at hand, doing it sloppily without care, or fallen into the tedium of dull repetition. Or, conversely, you may be trapped by perfectionism, fixating on details and stalling. Rekindle your zeal for mastery and find balance between focus and ease.",
        love: "You go through the motions in love without real care, or fall into dull repetition. Do not let slackness cool the bond; reinvest sincerity and warmth.",
        career: "Work is careless and unfocused, or dull repetition breeds tedium. Skills stall; rekindle passion, or shake off the grip of perfectionism.",
        wealth: "Carelessness or a lack of study stalls returns. An absent-minded attitude yields little; refocus and refine your craft to raise your value.",
        health: "Health management is slack and hard to sustain, or over-strict demands backfire. Recover focus and discipline and continue with a balanced attitude."
      }
    }
  },
  {
    id: 72,
    name: "星币九",
    nameEn: "Nine of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 9,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-09.jpg",
    keywords: { up: ["富足", "独立", "自给自足", "享受成果"], rev: ["物质空虚", "过度依赖", "挥霍", "得不偿失"] },
    keywordsEn: { up: ["Abundance", "Independence", "Self-sufficiency", "Enjoying rewards"], rev: ["Material emptiness", "Over-reliance", "Overspending", "Hollow success"] },
    meaning: {
      up: {
        general: "优雅的女子独立于丰饶的花园中，手上停着驯服的猎鹰，象征富足、独立与自给自足的从容。你凭借自身的努力赢得了物质的丰盛与精神的自由，得以优雅地享受劳动的成果。以独立自主的姿态品味这份来之不易的富足，你值得拥有这份丰盛与安宁。",
        love: "享受独立而自信的状态，不依附于他人也能怡然自得。感情中保持自我的完整，成熟独立的魅力尤为动人。",
        career: "凭借自身努力取得独立的成就，享受专业带来的自由与丰盛。自给自足的能力让你从容优雅、备受肯定。",
        wealth: "财务独立丰盈，享受劳动换来的富足。凭借自己的努力实现经济自由，是品味成果、稳健增值的好时机。",
        health: "身心处于富足安宁的状态，懂得优雅地善待自己。独立自主的生活方式带来身心的和谐与从容。"
      },
      rev: {
        general: "逆位透露出物质的空虚或独立的失衡。你或许拥有了物质却感到精神的空洞，或过度依赖他人而失去了自主，也可能因挥霍或投机而根基不稳。表面的丰盛掩盖了内在的匮乏。请审视真正的价值所在，在物质与心灵之间找回平衡。",
        love: "感情中过度依赖或失去自我，或因物质而忽略了情感的空虚。需要重建独立的自我，别用外在填补内心。",
        career: "看似独立的成就背后暗藏不安，或过度依赖他人。缺乏真正的自主，需要脚踏实地地建立自己的根基。",
        wealth: "因挥霍或投机而财务不稳，或物质的丰盛难掩空虚。别只追求表面的富足，需要务实经营、量入为出。",
        health: "物质满足却身心空虚，或过度放纵影响健康。别忽视内在的需求，需要在享受与节制间找回平衡。"
      }
    },
    meaningEn: {
      up: {
        general: "An elegant woman stands alone in a lush garden, a tamed falcon on her hand, symbolizing abundance, independence, and self-sufficient ease. Through your own effort you have won material plenty and inner freedom, and can gracefully enjoy the fruits of your labor. Savor this hard-won abundance with independence and poise, for you deserve this plenty and peace.",
        love: "You enjoy an independent, confident state, content even without leaning on anyone. Keeping your wholeness within the bond, your mature, independent charm is especially appealing.",
        career: "Through your own effort you achieve independent success, enjoying the freedom and plenty your profession brings. Self-sufficiency lets you be poised, graceful, and well regarded.",
        wealth: "Finances are independent and abundant, and you enjoy the plenty your labor has earned. Achieving financial freedom by your own effort, it is a good time to savor results and grow steadily.",
        health: "Body and mind are in a state of abundance and peace, and you know how to treat yourself with grace. An independent way of life brings harmony and ease to body and mind."
      },
      rev: {
        general: "Reversed, this reveals material emptiness or unbalanced independence. You may possess material things yet feel spiritually hollow, or over-rely on others and lose your autonomy, or your foundation may be shaky from overspending or speculation. Surface plenty masks inner lack. Examine where true value lies and recover balance between the material and the spiritual.",
        love: "Over-dependence or loss of self in love, or material things mask an emotional emptiness. Rebuild an independent self and do not fill the heart with the external.",
        career: "Behind seemingly independent success lies unease, or over-reliance on others. Lacking true autonomy, build your own foundation with your feet on the ground.",
        wealth: "Overspending or speculation makes finances unstable, or material plenty cannot hide the emptiness. Do not chase only surface abundance; manage practically and live within your means.",
        health: "Materially satisfied yet hollow within, or overindulgence harms health. Do not ignore inner needs; recover balance between enjoyment and restraint."
      }
    }
  },
  {
    id: 73,
    name: "星币十",
    nameEn: "Ten of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 10,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-10.jpg",
    keywords: { up: ["财富", "传承", "家族", "长久稳固"], rev: ["财务纠纷", "家庭矛盾", "短视", "根基动摇"] },
    keywordsEn: { up: ["Wealth", "Legacy", "Family", "Lasting stability"], rev: ["Financial dispute", "Family conflict", "Short-sightedness", "Shaky foundation"] },
    meaning: {
      up: {
        general: "祖孙三代于华宅庭院中团聚，老者与犬相伴，象征财富的传承、家族的兴旺与长久的稳固。这是物质与情感双重富足的圆满境界，代表着世代积累的丰盛与安稳的归属。珍视这份来自家庭与传承的根基，你所建立的一切，将惠及长远、绵延不绝。",
        love: "感情稳定长久，得到家庭的祝福与支持。适合建立家庭、共组未来，是踏实而有归属感的长久关系。",
        career: "事业稳固兴旺，建立起长远的基业。得到体制或家族的支持，成就可传承延续，是根基深厚的丰收。",
        wealth: "财务丰盈稳固，积累起可传承的财富。适合长期投资、置产或家族理财，稳健的根基带来世代的安稳。",
        health: "身心稳定安康，得益于稳固的生活基础与家庭支持。注重可持续的健康管理，为长远的安康打下根基。"
      },
      rev: {
        general: "逆位暗示财务的纠纷或家族的矛盾。你或许正面临遗产、财产的争议，或家庭关系因利益而生嫌隙，也可能因短视而动摇了长远的根基。稳固的表象下暗藏裂痕。请以长远的眼光化解纷争，别让眼前的利益损害了家庭与传承的根基。",
        love: "感情因家庭因素或现实压力而生矛盾，稳定性受考验。别让物质纷争伤了感情，需要以长远眼光化解。",
        career: "事业根基动摇，或因短视而危及长远发展。体制或家族内部出现分歧，需要顾全大局、稳固根基。",
        wealth: "财务纠纷或遗产争议带来困扰，或因短视挥霍而根基不稳。需要长远规划、妥善处理，别因小失大。",
        health: "家庭或财务的压力影响身心稳定。别让长期的隐忧累积成疾，需要从根本上稳固生活与内心的基础。"
      }
    },
    meaningEn: {
      up: {
        general: "Three generations gather in the courtyard of a grand house, an elder with his dogs, symbolizing the passing on of wealth, a flourishing family, and lasting stability. This is the fulfillment of both material and emotional abundance, representing plenty accumulated across generations and secure belonging. Cherish this foundation of family and legacy, for all you build will benefit the long term and endure.",
        love: "Love is stable and lasting, with the blessing and support of family. Well suited to building a family and a shared future, it is a grounded, long-term bond with a sense of belonging.",
        career: "Your career is solid and flourishing, building a long-term foundation. With institutional or family support, your achievements can be passed on, a harvest of deep roots.",
        wealth: "Finances are abundant and secure, building wealth that can be passed on. Suited to long-term investment, property, or family finance, a solid base brings security across generations.",
        health: "Body and mind are stable and well, aided by a solid base of life and family support. Focus on sustainable health management to lay a foundation for lasting well-being."
      },
      rev: {
        general: "Reversed, this hints at financial dispute or family conflict. You may face an argument over inheritance or property, or family bonds may fray over interests, or short-sightedness may shake the long-term foundation. Beneath a solid surface lie hidden cracks. Resolve disputes with a long view, and do not let present interests harm the foundation of family and legacy.",
        love: "Conflict arises in love over family factors or real pressures, and stability is tested. Do not let material disputes wound the bond; resolve them with a long view.",
        career: "The foundation is shaken, or short-sightedness endangers long-term growth. Disagreements arise within the institution or family; consider the whole and secure the base.",
        wealth: "Financial disputes or inheritance quarrels cause trouble, or short-sighted spending leaves the base unstable. Plan long-term and handle things well; do not lose big for a small gain.",
        health: "Family or financial pressure affects your stability. Do not let long-standing worries build into illness; secure the foundation of your life and inner world at the root."
      }
    }
  },
  {
    id: 74,
    name: "星币侍从",
    nameEn: "Page of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 11,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-11.jpg",
    keywords: { up: ["学习", "机会", "务实", "专注目标"], rev: ["拖延", "眼高手低", "不切实际", "分心"] },
    keywordsEn: { up: ["Learning", "Opportunity", "Diligence", "Goal-focus"], rev: ["Procrastination", "Unrealistic goals", "Impracticality", "Distraction"] },
    meaning: {
      up: {
        general: "星币侍从专注地捧着一枚星币凝视，脚踏实地地站在田野中，象征学习、务实与对目标的专注。他是勤勉好学的信使，带来新的机会或有前景的计划。以脚踏实地的态度投入学习与耕耘，怀抱清晰的目标稳步前行，勤奋的种子终将结出丰硕的果实。",
        love: "感情踏实起步，愿意认真学习与经营。以真诚务实的态度对待关系，脚踏实地地培养细水长流的感情。",
        career: "带来新的学习机会或有前景的项目，适合脚踏实地地积累。以勤奋专注的态度投入，为长远的发展打基础。",
        wealth: "出现务实的赚钱机会或学习理财的契机。以踏实的态度规划，脚踏实地地积累，稳健的开端值得把握。",
        health: "适合以务实的态度学习健康知识、建立好习惯。脚踏实地地照顾身体，专注于长期的健康目标。"
      },
      rev: {
        general: "逆位透露出拖延与眼高手低。你或许空有目标却迟迟不行动，或制定了不切实际的计划，好高骛远而难以落地。分心与懒散让机会白白溜走。请收敛不切实际的幻想，脚踏实地地从小事做起，把专注与行动落到实处。",
        love: "对感情缺乏踏实的投入，或期待不切实际。三心二意或拖延让关系停滞，需要更认真务实的态度。",
        career: "计划不切实际或眼高手低，难以落地。拖延与分心让学习和机会白费，需要脚踏实地、专注行动。",
        wealth: "因不切实际或拖延而错失务实的机会。空谈计划难有回报，需要收敛幻想、踏实地付诸行动。",
        health: "健康计划难以坚持，或方法不切实际。三分钟热度或拖延不利养生，需要务实规划、专注执行。"
      }
    },
    meaningEn: {
      up: {
        general: "The Page of Pentacles gazes intently at a pentacle in his hands, standing grounded in the fields, symbolizing learning, diligence, and focus on a goal. A studious, hardworking messenger, he brings new opportunity or a promising plan. Apply a grounded attitude to study and cultivation, move steadily toward a clear goal, and the seeds of diligence will bear rich fruit.",
        love: "Love starts on solid ground, and you are willing to learn and tend it seriously. Treating the bond with sincere practicality, nurture a slow, lasting love with your feet on the ground.",
        career: "A new learning opportunity or promising project arrives, suited to grounded accumulation. Commit with diligence and focus to lay a base for long-term growth.",
        wealth: "A practical earning opportunity or a chance to learn about money appears. Plan with a grounded attitude and accumulate steadily; a solid start is worth seizing.",
        health: "Suited to learning health knowledge and building good habits with a practical attitude. Care for the body with your feet on the ground, focused on long-term health goals."
      },
      rev: {
        general: "Reversed, this reveals procrastination and ambition beyond ability. You may be full of goals yet slow to act, or set unrealistic plans, overreaching and unable to land them. Distraction and idleness let opportunities slip away. Rein in impractical fantasies, start small with your feet on the ground, and put focus and action into practice.",
        love: "You lack grounded investment in love, or hold unrealistic expectations. Half-heartedness or procrastination stalls the bond; a more earnest, practical attitude is needed.",
        career: "Plans are unrealistic or ambition outruns ability, hard to land. Procrastination and distraction waste learning and chances; stay grounded and focus on action.",
        wealth: "Impracticality or procrastination costs you practical opportunities. Empty plans yield little; rein in fantasy and put things into practice with your feet on the ground.",
        health: "Health plans are hard to sustain, or methods are impractical. Fleeting enthusiasm or procrastination hurts wellness; plan practically and execute with focus."
      }
    }
  },
  {
    id: 75,
    name: "星币骑士",
    nameEn: "Knight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 12,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-12.jpg",
    keywords: { up: ["勤勉", "可靠", "坚持", "脚踏实地"], rev: ["固执", "停滞", "墨守成规", "无趣"] },
    keywordsEn: { up: ["Diligence", "Reliability", "Perseverance", "Groundedness"], rev: ["Stubbornness", "Stagnation", "Rigidity", "Dullness"] },
    meaning: {
      up: {
        general: "星币骑士骑着壮实的黑马静立田间，沉稳而可靠，象征勤勉、坚持与脚踏实地的作风。他不追求速度，而以稳健的步伐一丝不苟地履行职责。以踏实可靠的态度对待手中的事，坚持不懈、有始有终，稳扎稳打的努力终将带来踏实而长久的成果。",
        love: "感情稳定可靠，以踏实和忠诚经营关系。虽然缺乏浪漫的惊喜，但细水长流的真心与承诺令人安心。",
        career: "以勤勉务实、坚持不懈的态度稳步推进工作。虽然进展缓慢，但踏实可靠的表现值得信赖，终有回报。",
        wealth: "以稳健保守的方式管理财务，脚踏实地地积累。不追求快钱，而以持之以恒的努力实现稳定的增长。",
        health: "以规律自律的方式维护健康，坚持良好的习惯。虽然见效缓慢，但持之以恒的努力带来稳固的体魄。"
      },
      rev: {
        general: "逆位暗示固执与停滞。你或许过于墨守成规、抗拒改变，被一成不变的方式困住，陷入乏味的停滞。稳健沦为僵化，坚持变成顽固。请为一成不变的生活注入一些灵活与新意，别让过度的保守与固执阻碍了前进的脚步。",
        love: "感情陷入乏味的停滞，缺乏新鲜与激情。过于固执或一成不变让关系失去活力，需要注入新意与用心。",
        career: "工作墨守成规、停滞不前，抗拒改变。过度保守让人错失机会，缺乏效率，需要灵活变通、注入活力。",
        wealth: "财务过于保守僵化，错失增值的机会。墨守成规难有突破，需要在稳健中适度尝试新的可能。",
        health: "健康习惯僵化或过度死板，缺乏调整。一成不变的方式效果停滞，需要为身心注入一些变化与活力。"
      }
    },
    meaningEn: {
      up: {
        general: "The Knight of Pentacles sits still in the fields on his sturdy black horse, steady and reliable, symbolizing diligence, perseverance, and a grounded way. He does not chase speed but fulfills his duty meticulously at a steady pace. Treat the work at hand with a solid, dependable attitude, persevere and see things through, for steady, methodical effort brings grounded and lasting results.",
        love: "Love is stable and reliable, nurtured with groundedness and loyalty. Though short on romantic surprises, its steady sincerity and commitment bring reassurance.",
        career: "You advance work steadily with a diligent, practical, persevering attitude. Progress may be slow, but your dependable performance earns trust and is rewarded in time.",
        wealth: "You manage finances in a steady, conservative way, accumulating with your feet on the ground. Not chasing quick money, you achieve stable growth through persistent effort.",
        health: "You maintain health with regularity and discipline, keeping good habits. Though results come slowly, persevering effort brings a solid constitution."
      },
      rev: {
        general: "Reversed, this hints at stubbornness and stagnation. You may be too rigid and resistant to change, trapped by an unvarying routine and mired in dull stagnation. Steadiness curdles into rigidity and perseverance into obstinacy. Inject some flexibility and freshness into an unchanging life, and do not let over-caution and stubbornness block your forward steps.",
        love: "Love falls into dull stagnation, lacking freshness and passion. Too stubborn or unchanging, the bond loses vitality; inject freshness and care.",
        career: "Work is rigid and stagnant, resistant to change. Over-caution costs opportunities and lowers efficiency; be flexible and inject vitality.",
        wealth: "Finances are too conservative and rigid, missing chances to grow. Rigid ways bring no breakthrough; within your steadiness, try new possibilities in measure.",
        health: "Health habits are rigid or overly stiff, lacking adjustment. Unvarying methods stall results; inject some change and vitality into body and mind."
      }
    }
  },
  {
    id: 76,
    name: "星币皇后",
    nameEn: "Queen of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 13,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-13.jpg",
    keywords: { up: ["务实", "滋养", "丰饶", "能干"], rev: ["失衡", "过度操劳", "物质焦虑", "自我忽略"] },
    keywordsEn: { up: ["Practicality", "Nurturing", "Abundance", "Capability"], rev: ["Imbalance", "Overwork", "Material anxiety", "Self-neglect"] },
    meaning: {
      up: {
        general: "星币皇后端坐于繁花之间、脚边卧着兔子，怀抱星币，象征务实、丰饶与温暖的滋养。她能干而慷慨，将生活与事业打理得井井有条，兼顾物质的丰盛与情感的温暖。以务实而滋养的方式经营生活，用你的能干与关怀，为自己和所爱之人营造安稳丰盈的天地。",
        love: "以务实而温暖的方式经营感情，体贴而顾家。给予对方稳定的照顾与滋养，是可靠而丰盛的关系。",
        career: "以能干务实的态度处理事务，兼顾效率与关怀。善于管理资源、平衡多重角色，脚踏实地地创造丰盛。",
        wealth: "以务实精明的方式管理财务，善于持家理财。稳健地积累与经营，兼顾家庭与事业，物质丰足而安稳。",
        health: "懂得务实地照顾身心，注重滋养与平衡。以温暖而实际的方式关爱自己，营造健康而丰盈的生活。"
      },
      rev: {
        general: "逆位透露出失衡与自我忽略。你或许为了照顾他人或事业而过度操劳，忽略了自己的需求，或陷入了对物质与金钱的焦虑。付出与自我之间失去了平衡。请记得先照顾好自己，别让无止境的操劳与物质的忧虑，耗尽了你滋养他人的能量。",
        love: "为感情或家庭过度付出，忽略了自己的需求。失衡的操劳让人疲惫，需要在照顾他人与自我关爱间找回平衡。",
        career: "过度操劳、事必躬亲，身心俱疲。物质的焦虑或对掌控的执着影响状态，需要适度放手、照顾自己。",
        wealth: "陷入对金钱的焦虑或过度算计，患得患失。别让物质的担忧主宰生活，需要重建务实而从容的财务心态。",
        health: "因过度操劳或忽略自己而身心失衡，透支健康。别只顾着照顾他人，务必优先滋养自己的身心。"
      }
    },
    meaningEn: {
      up: {
        general: "The Queen of Pentacles sits amid blooming flowers with a rabbit at her feet, cradling a pentacle, symbolizing practicality, abundance, and warm nurturing. Capable and generous, she keeps home and work in good order, balancing material plenty with emotional warmth. Run your life in a practical, nurturing way, and with your capability and care, create a secure, abundant world for yourself and those you love.",
        love: "You nurture love in a practical, warm way, considerate and devoted to home. Giving your partner steady care and nourishment, it is a reliable, abundant bond.",
        career: "You handle affairs with capability and practicality, balancing efficiency with care. Skilled at managing resources and juggling roles, you create abundance with your feet on the ground.",
        wealth: "You manage finances practically and shrewdly, good at running a household budget. Accumulating and managing steadily while balancing family and work, you enjoy material plenty and security.",
        health: "You know how to care for body and mind practically, focused on nourishment and balance. Tending yourself in a warm, practical way, you build a healthy, abundant life."
      },
      rev: {
        general: "Reversed, this reveals imbalance and self-neglect. You may overwork to care for others or your career, neglecting your own needs, or sink into anxiety over money and material things. Balance is lost between giving and self. Remember to care for yourself first, and do not let endless toil and material worry exhaust the energy with which you nourish others.",
        love: "You over-give to the relationship or family and neglect your own needs. Unbalanced toil wears you out; find balance between caring for others and caring for yourself.",
        career: "Overworking and doing everything yourself, you are worn out. Material anxiety or a fixation on control affects your state; let go in measure and care for yourself.",
        wealth: "Caught in money anxiety or excessive calculation, you fret over every gain and loss. Do not let material worry rule your life; rebuild a practical, easeful financial mindset.",
        health: "Overwork or self-neglect unbalances body and mind and overdraws health. Do not only tend to others; put nourishing your own body and mind first."
      }
    }
  },
  {
    id: 77,
    name: "星币国王",
    nameEn: "King of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 14,
    element: "土",
    elementEn: "Earth",
    img: "assets/cards/pentacles-14.jpg",
    keywords: { up: ["富足", "稳健", "事业有成", "可靠"], rev: ["固执守财", "贪婪", "物质主义", "顽固"] },
    keywordsEn: { up: ["Prosperity", "Stability", "Success", "Reliability"], rev: ["Miserliness", "Greed", "Materialism", "Stubbornness"] },
    meaning: {
      up: {
        general: "星币国王端坐于华美的宝座，四周硕果累累、藤蔓环绕，象征富足、稳健与事业有成的成就。他凭借勤勉与远见建立起丰盛而稳固的王国，是可靠而慷慨的物质大师。以稳健务实的智慧经营事业与财富，脚踏实地、慷慨大度，你已具备缔造长久繁荣的能力与格局。",
        love: "以成熟稳重和慷慨可靠经营感情，是值得信赖的伴侣。给予对方富足的安全感与踏实的承诺，关系稳固长久。",
        career: "事业有成、根基稳固，以务实的智慧和远见掌控大局。适合管理、经营与投资，稳健的领导带来持久的成功。",
        wealth: "财务丰盈稳健，善于理财与创造财富。以精明务实的眼光稳步积累，成就丰厚而可持续的物质基础。",
        health: "身心稳健安康，以自律和务实的方式维护健康。稳定的生活根基带来强健的体魄，从容而有余裕。"
      },
      rev: {
        general: "逆位暗示固执守财与物质主义。你或许过度看重金钱与物质，变得贪婪吝啬，或固执顽固、抗拒改变。对财富的执着蒙蔽了更重要的价值。请审视金钱之外真正重要的东西，别让物质主义与固执，把你困在成功的牢笼之中。",
        love: "在感情中过度看重物质条件，或固执顽固难以变通。别用物质衡量感情，需要重视情感的真诚与灵活。",
        career: "过度保守固执或唯利是图，抗拒创新与改变。对成功的执着让人僵化，需要平衡物质追求与长远格局。",
        wealth: "因贪婪、吝啬或过度投机而失衡，被金钱所奴役。别让物质主义主宰一切，需要回归务实而豁达的财富观。",
        health: "因过度看重事业或物质而忽略健康，或固执于旧习惯。别让贪求与顽固损害身心，需要务实地平衡与调整。"
      }
    },
    meaningEn: {
      up: {
        general: "The King of Pentacles sits on an ornate throne amid ripe fruit and twining vines, symbolizing prosperity, stability, and hard-won success. Through diligence and foresight he has built an abundant, secure kingdom, a reliable and generous master of the material world. Run your work and wealth with steady, practical wisdom; grounded and openhanded, you already have the capacity and scope to create lasting prosperity.",
        love: "You nurture love with mature steadiness and generous reliability, a trustworthy partner. Giving your other half abundant security and solid commitment, the bond is stable and lasting.",
        career: "Successful and solidly founded, you command the big picture with practical wisdom and foresight. Suited to management, enterprise, and investment, steady leadership brings lasting success.",
        wealth: "Finances are abundant and steady, and you are skilled at managing money and creating wealth. Accumulating steadily with a shrewd, practical eye, you build a rich, sustainable material base.",
        health: "Body and mind are steady and well, maintained through discipline and practicality. A stable base of life brings a strong constitution, with ease and reserves to spare."
      },
      rev: {
        general: "Reversed, this hints at miserliness and materialism. You may weigh money and material things too heavily, growing greedy and stingy, or turn stubborn and resistant to change. Fixation on wealth blinds you to more important values. Examine what truly matters beyond money, and do not let materialism and obstinacy trap you in a cage of success.",
        love: "You weigh material conditions too heavily in love, or are too stubborn to bend. Do not measure love by material things; value emotional sincerity and flexibility.",
        career: "Over-conservative and stubborn or purely profit-driven, you resist innovation and change. Fixation on success makes you rigid; balance material pursuit with a longer-term scope.",
        wealth: "Greed, stinginess, or over-speculation unbalances you, enslaved by money. Do not let materialism rule all; return to a practical, openhearted view of wealth.",
        health: "Weighing career or material things too heavily, you neglect health, or cling to old habits. Do not let greed and obstinacy harm body and mind; balance and adjust practically."
      }
    }
  }
];
