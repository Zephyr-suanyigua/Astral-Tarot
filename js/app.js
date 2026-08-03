/* ============================================================
   星界塔罗 Astral Tarot · 核心逻辑(中英双语 i18n)
   纯前端,无 AI 接口。洗牌 / 抽牌 / 正逆位 / 查表解读 / 渲染
   依赖:cards-data.js (window.TAROT_CARDS)、spreads.js (window.TAROT_SPREADS)
   ============================================================ */
(function () {
  "use strict";

  const CARDS = window.TAROT_CARDS || [];
  const SPREADS = window.TAROT_SPREADS || [];

  // ---------- 文案字典 ----------
  const I18N = {
    en: {
      htmlLang: "en",
      brand: "ASTRAL TAROT", brandSub: "&#10013; ARCANA OF THE STARS &#10013;",
      tagline: "Still your mind, and let the stars draw back the veil of fate.",
      start: "Begin Reading",
      focusTitle: "Focus Your Intention",
      focusHint: "Hold your question in mind, then write it below (optional).",
      qPlaceholder: "e.g. Where is this relationship heading? How will my career unfold?",
      chooseSpread: "Choose a Spread",
      draw: n => "Draw " + n,
      back: "Back",
      shuffle: "Shuffle",
      shuffling: "Shuffling the deck… focus on your question",
      pickTitle: "Choose by Intuition",
      pickTip: "Glide across the cards — a card rises as you pass; tap a raised card to claim it.",
      pickHint: (c, n) => "Pick card <b>" + (c + 1) + "</b> &nbsp;·&nbsp; chosen " + c + " / " + n,
      pickDone: n => "All " + n + " chosen — revealing your reading…",
      drawnLabel: "DRAWN",
      upright: "Upright", reversed: "Reversed", revShort: "R",
      domains: { general: "Overview", love: "Love", career: "Career", wealth: "Wealth", health: "Health" },
      summaryTitle: "Star Reading",
      sMajorHigh: "The Major Arcana dominate this reading — your question touches a pivotal chapter of life. Great forces of destiny are at work; treat it with due weight.",
      sMajorNone: "This reading is all Minor Arcana — matters driven by daily choices and details. The reins are largely in your own hands.",
      sMajorMix: "Major and Minor Arcana interweave — fate guides while practical factors remain yours to shape. Move with the current for the best result.",
      sRevNone: "All cards fall upright: energy flows freely — a clear and favorable sign.",
      sRevMany: "Reversals prevail, pointing to blocks or inner lessons. Steady yourself and reflect before acting.",
      sRevMix: "Upright and reversed mingle — ease and challenge coexist. Heed the warnings of the reversed cards.",
      sNote: "Tarot reveals energies and possibilities, not fixed fate. The path, always, is written by your own hand.",
      again: "New Reading", home: "Home",
      copy: "Copy to ask AI", copied: "Copied to clipboard!",
      copyFail: "Copy failed — please select and copy manually.",
      cIntro: "I drew a tarot reading and would like your interpretation.",
      cSpread: "Spread", cQuestion: "My question", cKeywords: "Keywords",
      cClosing: "Please give an insightful, integrated interpretation of this reading in relation to my question, and end with gentle, practical advice.",
      noDeck: "The deck failed to load. Please check cards-data.js.",
      noText: "(no reading for this area yet)",
      toLang: "中文"
    },
    zh: {
      htmlLang: "zh-CN",
      brand: "星 界 塔 罗", brandSub: "ASTRAL TAROT",
      tagline: "静心凝神,让星辰为你揭开命运的帷幕。",
      start: "开始占卜",
      focusTitle: "凝聚你的意念",
      focusHint: "在心中默想你想探问之事,然后写下你的问题(可留空)。",
      qPlaceholder: "例如:这段关系将走向何方?我近期的事业运势如何?",
      chooseSpread: "选择牌阵",
      draw: n => "抽 " + n + " 张",
      back: "返回",
      shuffle: "洗 牌",
      shuffling: "正在洗牌……凝神于你的问题",
      pickTitle: "凭直觉选牌",
      pickTip: "手指划过牌面,划到的牌会弹起;再点一下弹起的牌即可选定。",
      pickHint: (c, n) => "请选择第 <b>" + (c + 1) + "</b> 张牌 &nbsp;·&nbsp; 已选 " + c + " / " + n,
      pickDone: n => "已选满 " + n + " 张,正在为你揭示……",
      drawnLabel: "已抽取",
      upright: "正位", reversed: "逆位", revShort: "逆",
      domains: { general: "综合", love: "爱情", career: "事业", wealth: "财运", health: "健康" },
      summaryTitle: "星语综述",
      sMajorHigh: "本次占卜中大阿卡纳占据主导 —— 你所探问之事关乎人生的重要转折,命运的大势正在其中运作,值得郑重对待。",
      sMajorNone: "本次全为小阿卡纳 —— 事态多由日常的选择与细节推动,主动权大多握在你自己手中。",
      sMajorMix: "大小阿卡纳交织 —— 既有命运的引导,也有可由你把握的现实因素,顺势而为方能事半功倍。",
      sRevNone: "全部为正位,能量流动顺畅,是较为明朗的征兆。",
      sRevMany: "逆位偏多,提示当前存在阻滞或内在的功课,宜沉静内省、调整心态后再行动。",
      sRevMix: "正逆交错,顺遂与考验并存,留意逆位牌所指出的提醒。",
      sNote: "塔罗揭示的是能量与可能性,而非命定。最终的路,始终由你亲手书写。",
      again: "再次占卜", home: "回到星界",
      copy: "复制去问 AI", copied: "已复制到剪贴板!",
      copyFail: "复制失败,请手动选中复制。",
      cIntro: "我做了一次塔罗占卜,想请你帮我解读。",
      cSpread: "牌阵", cQuestion: "我的问题", cKeywords: "关键词",
      cClosing: "请结合我的问题,给出富有洞见的整体解读,并在最后给我温和而实际的建议。",
      noDeck: "牌库未能载入,请检查 cards-data.js。",
      noText: "(暂无该领域解读)",
      toLang: "EN"
    }
  };

  // ---------- 状态 ----------
  const state = {
    lang: (function () {
      const saved = localStorage.getItem("tarot_lang");
      if (saved === "en" || saved === "zh") return saved;
      // 默认英文(主要面向外国用户);仅当浏览器为中文时用中文
      return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    })(),
    spread: null,
    question: "",
    focus: "general",
    deck: [],
    picked: [],
    step: "home"
  };

  const t = () => I18N[state.lang];
  const DOMAIN_KEYS = ["general", "love", "career", "wealth", "health"];

  // ---------- 语言相关取值 ----------
  const en = () => state.lang === "en";
  // 主题随语言:英文=哥特,中文=星空
  function currentTheme() { return state.lang === "en" ? "gothic" : "cosmic"; }
  function applyTheme() { document.documentElement.dataset.theme = currentTheme(); }
  function sigilChar() { return currentTheme() === "gothic" ? "&#9884;" : "&#10022;"; }   // ⚜ / ✦
  function emblemChar() { return currentTheme() === "gothic" ? "&#10013;" : "&#10022;"; }  // ✝ / ✦
  function cName(c) { return en() ? (c.nameEn || c.name) : c.name; }
  function cKeywords(c, ori) { const k = (en() && c.keywordsEn) ? c.keywordsEn : c.keywords; return (k && k[ori]) || []; }
  function cMeaning(c, ori) { const m = (en() && c.meaningEn) ? c.meaningEn : c.meaning; return (m && m[ori]) || {}; }
  function spName(s) { return en() ? (s.nameEn || s.name) : s.name; }
  function spDesc(s) { return en() ? (s.descEn || s.desc) : s.desc; }
  function posTitle(p) { return en() ? (p.titleEn || p.title) : p.title; }
  function posDesc(p) { return en() ? (p.descEn || p.desc) : p.desc; }

  // ---------- 随机 ----------
  function rand() {
    if (window.crypto && window.crypto.getRandomValues) {
      const u = new Uint32Array(1); window.crypto.getRandomValues(u); return u[0] / 4294967296;
    }
    return Math.random();
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // ---------- DOM 工具 ----------
  const $ = (s, r) => (r || document).querySelector(s);
  const $all = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  function el(tag, cls, html) { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }

  const scenes = {};
  function show(step) {
    state.step = step;
    Object.keys(scenes).forEach(k => scenes[k].classList.toggle("active", k === step));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ============================================================
  //  语言切换
  // ============================================================
  function setLang(lang) {
    if (lang === state.lang) return;
    state.lang = lang;
    localStorage.setItem("tarot_lang", lang);
    document.documentElement.lang = t().htmlLang;
    applyTheme();
    updateLangBtn();
    rerender();
  }
  function updateLangBtn() {
    const b = document.getElementById("lang-btn");
    if (b) b.textContent = t().toLang;
  }
  function rerender() {
    switch (state.step) {
      case "home": buildHome(); break;
      case "question": buildQuestion(); break;
      case "reading": renderReadingScene(false); break;   // 静态重绘(牌已揭示)
      case "shuffle":
      case "pick": buildQuestion(); show("question"); break;  // 流程中途:退回问题页
    }
  }

  // ============================================================
  //  场景一:首页
  // ============================================================
  function buildHome() {
    const s = scenes.home; s.innerHTML = "";
    const wrap = el("div", "home-inner");
    wrap.appendChild(el("div", "sigil", sigilChar()));
    wrap.appendChild(el("h1", "title", t().brand));
    wrap.appendChild(el("p", "subtitle", t().brandSub));
    wrap.appendChild(el("p", "tagline", t().tagline));
    const btn = el("button", "btn-primary glow", t().start);
    btn.addEventListener("click", () => { buildQuestion(); show("question"); });
    wrap.appendChild(btn);
    s.appendChild(wrap);
  }

  // ============================================================
  //  场景二:输入问题 + 选牌阵
  // ============================================================
  function buildQuestion() {
    const s = scenes.question; s.innerHTML = "";
    const wrap = el("div", "panel");
    wrap.appendChild(el("h2", "panel-title", t().focusTitle));
    wrap.appendChild(el("p", "panel-hint", t().focusHint));

    const ta = el("textarea", "q-input");
    ta.placeholder = t().qPlaceholder; ta.value = state.question;
    ta.addEventListener("input", () => { state.question = ta.value; });
    wrap.appendChild(ta);

    wrap.appendChild(el("h3", "panel-sub", t().chooseSpread));
    const list = el("div", "spread-list");
    const currentId = state.spread ? state.spread.id : SPREADS[0].id;
    SPREADS.forEach(sp => {
      const card = el("div", "spread-card");
      if (sp.id === currentId) card.classList.add("selected");
      card.dataset.id = sp.id;
      card.appendChild(el("div", "spread-name", spName(sp)));
      card.appendChild(el("div", "spread-count", t().draw(sp.count)));
      card.appendChild(el("div", "spread-desc", spDesc(sp)));
      card.addEventListener("click", () => {
        $all(".spread-card", list).forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
      });
      list.appendChild(card);
    });
    wrap.appendChild(list);

    const row = el("div", "btn-row");
    const back = el("button", "btn-ghost", t().back);
    back.addEventListener("click", () => show("home"));
    const go = el("button", "btn-primary glow", t().shuffle);
    go.addEventListener("click", () => {
      const sel = $(".spread-card.selected", list);
      state.spread = SPREADS.find(x => x.id === sel.dataset.id);
      state.question = ta.value.trim();
      state.focus = state.spread.focus || "general";
      startShuffle();
    });
    row.appendChild(back); row.appendChild(go);
    wrap.appendChild(row);
    s.appendChild(wrap);
  }

  // ============================================================
  //  场景三:洗牌动画
  // ============================================================
  function startShuffle() {
    show("shuffle");
    const s = scenes.shuffle; s.innerHTML = "";
    const wrap = el("div", "shuffle-wrap");
    const stage = el("div", "shuffle3d");
    const ring = el("div", "ring");
    const N = 22;
    for (let i = 0; i < N; i++) {
      const c = el("div", "ring-card");
      c.appendChild(ornateBack());
      c.style.setProperty("--a", (i * (360 / N)).toFixed(2) + "deg");
      ring.appendChild(c);
    }
    stage.appendChild(ring);
    wrap.appendChild(stage);
    wrap.appendChild(el("p", "shuffle-text", t().shuffling));
    s.appendChild(wrap);
    requestAnimationFrame(() => stage.classList.add("go"));
    setTimeout(() => { buildDeck(); startPick(); }, 2900);
  }
  function buildDeck() {
    state.deck = shuffle(CARDS).map(card => ({ card: card, reversed: rand() < 0.5 }));
    state.picked = [];
  }

  // ============================================================
  //  场景四:扇形铺牌 + 选牌
  // ============================================================
  // 华丽的神秘光纹卡背(元素化,便于放大/复用)
  function ornateBack() {
    const b = el("div", "card-back");
    b.innerHTML =
      '<span class="cb-corner tl"></span><span class="cb-corner tr"></span>' +
      '<span class="cb-corner bl"></span><span class="cb-corner br"></span>' +
      '<span class="cb-ring r1"></span><span class="cb-ring r2"></span>' +
      '<span class="cb-emblem">' + emblemChar() + '</span>' +
      '<span class="cb-moon"></span>';
    return b;
  }

  // 顶层特效画布
  function fxLayer() {
    let l = document.getElementById("draw-fx");
    if (!l) { l = el("div"); l.id = "draw-fx"; document.body.appendChild(l); }
    return l;
  }

  function peekCard(card) {
    if (!card || card === state._peeked) return;
    if (state._peeked) state._peeked.classList.remove("peek");
    card.classList.add("peek");
    state._peeked = card;
  }

  function startPick() {
    show("pick");
    const s = scenes.pick; s.innerHTML = "";
    state._peeked = null; state._didMove = false; state._suppressClick = false;
    const need = state.spread.count;
    const head = el("div", "pick-head");
    head.appendChild(el("h2", "panel-title", t().pickTitle));
    head.appendChild(el("p", "pick-tip", t().pickTip));
    const hint = el("p", "pick-hint", ""); head.appendChild(hint);
    s.appendChild(head);

    // 收集区(置于上方,与候选牌分离):带标题的"已抽取"槽位
    const zone = el("div", "draw-zone");
    zone.appendChild(el("div", "draw-zone-label", t().drawnLabel));
    const tray = el("div", "draw-tray");
    for (let i = 0; i < need; i++) {
      const slot = el("div", "tray-slot"); slot.dataset.i = i;
      slot.appendChild(el("span", "tray-num", String(i + 1)));
      tray.appendChild(slot);
    }
    zone.appendChild(tray);
    s.appendChild(zone);

    // 候选牌:数量随牌阵而变,沿"从上而下"的竖向 S 形曲线铺开(仍从洗好的整副中随机取)
    const fan = el("div", "fan snake"); s.appendChild(fan);
    const poolSize = Math.min(34, Math.max(12, need * 6));
    const pool = state.deck.slice(0, poolSize);
    const n = pool.length;
    updateHint(hint, 0, need);

    pool.forEach((entry, idx) => {
      const tt = n > 1 ? idx / (n - 1) : 0.5;          // 0..1 从上到下
      const phase = tt * Math.PI * 2;                   // 一个完整波 = 竖向 S
      const sinp = Math.sin(phase);
      const y = (6 + tt * 86).toFixed(2);               // 纵向 6%..92%(从上而下)
      const x = (50 + sinp * 22).toFixed(2);            // 横向蜿蜒 ±22%
      const rot = (Math.cos(phase) * 15).toFixed(2);    // 沿切线倾斜
      const side = sinp >= 0 ? 1 : -1;                  // 悬浮时向外露出的方向
      const c = el("div", "fan-card");
      c.appendChild(ornateBack());
      c.style.setProperty("--x", x + "%");
      c.style.setProperty("--y", y + "%");
      c.style.setProperty("--rot", rot + "deg");
      c.style.setProperty("--side", String(side));
      c.style.setProperty("--delay", (idx * 14) + "ms");
      c.style.zIndex = String(idx);            // 自然叠压顺序 → 真实遮挡
      c.dataset.idx = idx;
      c.addEventListener("click", () => {
        if (state._suppressClick) { state._suppressClick = false; return; } // 刚才是滑动,不算选中
        if (c.classList.contains("picked") || state._drawing) return;
        if (state._peeked === c) confirmPick(c, entry, need, hint, tray); // 已弹起 → 再点选中
        else peekCard(c);                                                 // 未弹起 → 先弹出
      });
      fan.appendChild(c);
    });

    // 划过/悬停:让指到的牌弹出到 3/4 位置(逐张弹出)
    function peekFromPoint(x, y) {
      const target = document.elementFromPoint(x, y);
      if (!target || !target.closest) return;
      const card = target.closest(".fan-card");
      if (card && !card.classList.contains("picked")) peekCard(card);
    }
    fan.addEventListener("mousemove", e => { if (!state._drawing) peekFromPoint(e.clientX, e.clientY); });
    fan.addEventListener("touchstart", () => { state._didMove = false; }, { passive: true });
    fan.addEventListener("touchmove", e => {
      state._didMove = true;
      const tt = e.touches[0]; if (tt) peekFromPoint(tt.clientX, tt.clientY);
    }, { passive: true });
    fan.addEventListener("touchend", () => { if (state._didMove) state._suppressClick = true; });

    requestAnimationFrame(() => fan.classList.add("dealt"));
    setTimeout(() => fan.classList.add("ready"), pool.length * 14 + 600); // 铺开完成后允许即时弹动
  }

  function updateHint(hintEl, chosen, need) {
    hintEl.innerHTML = chosen < need ? t().pickHint(chosen, need) : t().pickDone(need);
  }

  function confirmPick(cardEl, entry, need, hintEl, tray) {
    if (state._drawing) return;
    if (cardEl.classList.contains("picked")) return;
    if (state.picked.length >= need) return;
    state._drawing = true;
    cardEl.classList.remove("peek"); state._peeked = null;
    cardEl.classList.add("picked");
    const posIndex = state.picked.length;
    const position = state.spread.positions[posIndex];
    state.picked.push({ card: entry.card, reversed: entry.reversed, position: position });
    updateHint(hintEl, state.picked.length, need);
    flourishDraw(cardEl, tray, posIndex, () => {
      state._drawing = false;
      if (state.picked.length >= need) {
        updateHint(hintEl, need, need);
        setTimeout(() => renderReadingScene(true), 620);
      }
    });
  }

  // 抽卡华丽特效:牌飞向中央放大发光 → 停顿 → 飞入底部托盘
  function flourishDraw(fanCardEl, tray, posIndex, done) {
    const overlay = fxLayer();
    const rect = fanCardEl.getBoundingClientRect();
    const cw = fanCardEl.offsetWidth, ch = fanCardEl.offsetHeight;
    const sx = rect.left + rect.width / 2, sy = rect.top + rect.height / 2;
    const cx = window.innerWidth / 2, cy = window.innerHeight * 0.42;
    const traySlot = tray.querySelector('.tray-slot[data-i="' + posIndex + '"]');

    // 光环 + 光芒
    const aura = el("div", "draw-aura");
    aura.style.left = cx + "px"; aura.style.top = cy + "px";
    overlay.appendChild(aura);
    requestAnimationFrame(() => aura.classList.add("on"));

    // 飞行的牌
    const fly = el("div", "fly-card");
    fly.style.width = cw + "px"; fly.style.height = ch + "px";
    fly.style.left = (sx - cw / 2) + "px"; fly.style.top = (sy - ch / 2) + "px";
    fly.appendChild(ornateBack());
    overlay.appendChild(fly);

    const scale = Math.min(2.6, (window.innerHeight * 0.5) / ch);
    const toCX = cx - sx, toCY = cy - sy;

    const supportsWAAPI = typeof fly.animate === "function";
    if (!supportsWAAPI) { // 极端降级:直接完成
      fly.remove(); aura.remove(); fillTray(traySlot); done && done(); return;
    }

    const a1 = fly.animate([
      { transform: "translate(0,0) rotate(-8deg) scale(1)", filter: "brightness(1)" },
      { transform: "translate(" + toCX + "px," + toCY + "px) rotate(0deg) scale(" + scale + ")", filter: "brightness(1.35) drop-shadow(0 0 26px rgba(231,200,106,.9))" }
    ], { duration: 640, easing: "cubic-bezier(.18,.9,.24,1)", fill: "forwards" });

    spawnSparks(overlay, cx, cy, 22);

    a1.onfinish = () => {
      // 停顿蓄势
      setTimeout(() => {
        const tr = traySlot.getBoundingClientRect();
        const toTX = (tr.left + tr.width / 2) - sx, toTY = (tr.top + tr.height / 2) - sy;
        const tScale = tr.width / cw;
        aura.classList.remove("on"); aura.classList.add("off");
        const a2 = fly.animate([
          { transform: "translate(" + toCX + "px," + toCY + "px) scale(" + scale + ")", opacity: 1 },
          { transform: "translate(" + toTX + "px," + toTY + "px) scale(" + tScale + ")", opacity: 0.9 }
        ], { duration: 500, easing: "cubic-bezier(.6,0,.25,1)", fill: "forwards" });
        a2.onfinish = () => {
          fly.remove(); aura.remove();
          fillTray(traySlot);
          done && done();
        };
      }, 400);
    };
  }

  function fillTray(slot) {
    if (!slot) return;
    slot.classList.add("filled"); slot.innerHTML = "";
    const mini = ornateBack(); mini.classList.add("mini");
    slot.appendChild(mini);
    if (slot.animate) slot.animate([{ transform: "scale(.3)", opacity: 0 }, { transform: "scale(1.12)", opacity: 1, offset: .7 }, { transform: "scale(1)", opacity: 1 }], { duration: 340, easing: "cubic-bezier(.2,1.3,.4,1)" });
  }

  // 金色星尘粒子爆发
  function spawnSparks(overlay, x, y, n) {
    for (let i = 0; i < n; i++) {
      const p = el("div", "spark");
      const ang = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 190;
      const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist;
      const sz = 3 + Math.random() * 5;
      p.style.left = x + "px"; p.style.top = y + "px";
      p.style.width = p.style.height = sz + "px";
      overlay.appendChild(p);
      if (p.animate) {
        p.animate([
          { transform: "translate(-50%,-50%) translate(0,0) scale(1)", opacity: 1 },
          { transform: "translate(-50%,-50%) translate(" + dx + "px," + dy + "px) scale(0)", opacity: 0 }
        ], { duration: 700 + Math.random() * 500, easing: "cubic-bezier(.1,.7,.3,1)", fill: "forwards" }).onfinish = () => p.remove();
      } else setTimeout(() => p.remove(), 900);
    }
  }

  // ============================================================
  //  场景五:牌阵摆放 + 翻牌揭示 + 解读
  //  animated=true 首次带翻牌动画;false 为静态重绘(如语言切换)
  // ============================================================
  function renderReadingScene(animated) {
    show("reading");
    const s = scenes.reading; s.innerHTML = "";

    const header = el("div", "read-head");
    header.appendChild(el("h2", "panel-title", spName(state.spread)));
    if (state.question) header.appendChild(el("p", "read-question", "&ldquo;" + escapeHtml(state.question) + "&rdquo;"));
    s.appendChild(header);

    const table = el("div", "table table-" + state.spread.id);
    s.appendChild(table);

    const cardEls = [];
    state.picked.forEach(p => {
      const slot = el("div", "slot");
      slot.style.left = p.position.x + "%"; slot.style.top = p.position.y + "%";
      if (p.position.cross) slot.classList.add("cross");
      const flip = el("div", "flip-card");
      const inner = el("div", "flip-inner");
      const back = el("div", "flip-face flip-back");
      const front = el("div", "flip-face flip-front");
      if (p.reversed) front.classList.add("reversed");
      const img = el("img", "card-img");
      img.alt = cName(p.card); img.loading = "lazy"; img.src = p.card.img;
      img.addEventListener("error", () => img.replaceWith(cardFallback(p.card)));
      front.appendChild(img);
      front.appendChild(el("div", "card-cap", cName(p.card) + (p.reversed ? " (" + t().revShort + ")" : "")));
      inner.appendChild(back); inner.appendChild(front);
      flip.appendChild(inner); slot.appendChild(flip);
      slot.appendChild(el("div", "slot-label", posTitle(p.position)));
      table.appendChild(slot);
      cardEls.push({ flip: flip, slot: slot });
    });

    if (animated) {
      // 入场:各牌依次升起就位
      cardEls.forEach((c, i) => {
        if (c.slot.animate && !c.slot.classList.contains("cross")) {
          c.slot.animate([
            { transform: "translate(-50%,-50%) translateY(46px) scale(.55)", opacity: 0 },
            { transform: "translate(-50%,-50%) translateY(0) scale(1)", opacity: 1 }
          ], { duration: 440, delay: i * 140, easing: "cubic-bezier(.2,.9,.3,1)", fill: "backwards" });
        }
      });
      const base = cardEls.length * 140 + 280;
      cardEls.forEach((c, i) => setTimeout(() => { c.flip.classList.add("revealed"); revealBurst(c.flip); }, base + i * 480));
      setTimeout(() => renderReadingText(s), base + cardEls.length * 480 + 380);
    } else {
      cardEls.forEach(c => c.flip.classList.add("revealed"));
      renderReadingText(s);
    }
  }

  function cardFallback(card) {
    const box = el("div", "card-fallback");
    box.appendChild(el("div", "fb-orn", "&#10022;"));
    box.appendChild(el("div", "fb-name", cName(card)));
    box.appendChild(el("div", "fb-en", en() ? card.name : card.nameEn));
    return box;
  }

  function renderReadingText(s) {
    const controls = el("div", "domain-tabs");
    DOMAIN_KEYS.forEach(k => {
      const tab = el("button", "domain-tab", t().domains[k]);
      if (k === state.focus) tab.classList.add("active");
      tab.addEventListener("click", () => {
        state.focus = k;
        $all(".domain-tab", controls).forEach(x => x.classList.remove("active"));
        tab.classList.add("active");
        fillReadings();
      });
      controls.appendChild(tab);
    });
    s.appendChild(controls);

    const readBox = el("div", "readings"); readBox.id = "readings"; s.appendChild(readBox);

    const summary = el("div", "reading-summary"); summary.innerHTML = buildSummary(); s.appendChild(summary);

    const row = el("div", "btn-row center");
    const copy = el("button", "btn-copy", "&#9993; " + t().copy);
    copy.addEventListener("click", () => copyForAI(copy));
    const again = el("button", "btn-primary glow", t().again);
    again.addEventListener("click", () => { buildQuestion(); show("question"); });
    const home = el("button", "btn-ghost", t().home);
    home.addEventListener("click", () => show("home"));
    row.appendChild(copy); row.appendChild(again); row.appendChild(home);
    s.appendChild(row);

    fillReadings();
  }

  function fillReadings() {
    const box = $("#readings"); if (!box) return;
    box.innerHTML = "";
    state.picked.forEach(p => {
      const ori = p.reversed ? "rev" : "up";
      const m = cMeaning(p.card, ori);
      const text = (m && (m[state.focus] || m.general)) || t().noText;
      const kw = cKeywords(p.card, ori).slice(0, 4).join(en() ? " · " : " · ");

      const item = el("div", "reading-item");
      const thumb = el("div", "reading-thumb " + (p.reversed ? "rev" : ""));
      const timg = el("img", null); timg.src = p.card.img; timg.alt = cName(p.card);
      timg.addEventListener("error", () => timg.replaceWith(cardFallback(p.card)));
      thumb.appendChild(timg);

      const body = el("div", "reading-body");
      const nameLine = el("div", "reading-name");
      nameLine.appendChild(el("span", "pos-tag", posTitle(p.position)));
      nameLine.appendChild(el("span", "rn-main", cName(p.card) + " · " + (p.reversed ? t().reversed : t().upright)));
      body.appendChild(nameLine);
      body.appendChild(el("div", "reading-kw", kw));
      body.appendChild(el("p", "reading-text", text));

      item.appendChild(thumb); item.appendChild(body);
      box.appendChild(item);
    });
  }

  function buildSummary() {
    const n = state.picked.length;
    const majors = state.picked.filter(p => p.card.arcana === "major").length;
    const revs = state.picked.filter(p => p.reversed).length;
    let msg = "<b>" + t().summaryTitle + "</b><br>";
    if (majors >= Math.ceil(n / 2)) msg += t().sMajorHigh;
    else if (majors === 0) msg += t().sMajorNone;
    else msg += t().sMajorMix;
    msg += "<br>";
    if (revs === 0) msg += t().sRevNone;
    else if (revs >= Math.ceil(n / 2)) msg += t().sRevMany;
    else msg += t().sRevMix;
    msg += "<br><span class='summary-note'>" + t().sNote + "</span>";
    return msg;
  }

  // ---------- 一键复制去问 AI ----------
  function buildAIPrompt() {
    const L = t();
    const lines = [];
    lines.push(L.cIntro);
    lines.push("");
    lines.push(L.cSpread + ": " + spName(state.spread));
    if (state.question) lines.push(L.cQuestion + ": " + state.question);
    lines.push("");
    state.picked.forEach((p, i) => {
      const ori = p.reversed ? "rev" : "up";
      const orient = p.reversed ? L.reversed : L.upright;
      lines.push((i + 1) + ". " + posTitle(p.position) + " — " + cName(p.card) + " (" + orient + ")");
      const kw = cKeywords(p.card, ori).slice(0, 4).join(", ");
      if (kw) lines.push("   " + L.cKeywords + ": " + kw);
    });
    lines.push("");
    lines.push(L.cClosing);
    return lines.join("\n");
  }
  function copyForAI(btn) {
    const text = buildAIPrompt();
    const done = ok => {
      toast(ok ? t().copied : t().copyFail);
      if (ok && btn) { btn.classList.add("ok"); setTimeout(() => btn.classList.remove("ok"), 1200); }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => done(true)).catch(() => fallbackCopy(text, done));
    } else fallbackCopy(text, done);
  }
  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.focus(); ta.select();
      const ok = document.execCommand("copy"); document.body.removeChild(ta); done(ok);
    } catch (e) { done(false); }
  }
  let toastTimer = null;
  function toast(msg) {
    let box = document.getElementById("toast");
    if (!box) { box = el("div", "toast"); box.id = "toast"; document.body.appendChild(box); }
    box.textContent = msg; box.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove("show"), 2000);
  }

  function burst(node) { const b = el("div", "burst"); node.appendChild(b); setTimeout(() => b.remove(), 900); }
  function revealBurst(node) {
    const b = el("div", "burst"); node.appendChild(b); setTimeout(() => b.remove(), 900);
    const r = el("div", "reveal-rays"); node.appendChild(r); setTimeout(() => r.remove(), 900);
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ============================================================
  //  星空背景 (Canvas)
  // ============================================================
  function initStarfield() {
    const canvas = document.getElementById("starfield"); if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, stars, shooting = [];
    function resize() {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px"; canvas.style.height = window.innerHeight + "px";
      const count = Math.min(260, Math.floor((window.innerWidth * window.innerHeight) / 6000));
      stars = [];
      for (let i = 0; i < count; i++) stars.push({
        x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 1.4 + 0.3) * devicePixelRatio,
        a: Math.random(), tw: Math.random() * 0.02 + 0.004,
        hue: Math.random() < 0.15 ? 45 : (Math.random() < 0.5 ? 210 : 260),
        vy: (Math.random() * 0.35 + 0.08) * devicePixelRatio,
        drift: (Math.random() * 2 - 1) * 0.14 * devicePixelRatio
      });
    }
    function spawnShoot() {
      if (Math.random() < 0.006 && shooting.length < 2)
        shooting.push({ x: Math.random() * w, y: Math.random() * h * 0.5, vx: (2 + Math.random() * 3) * devicePixelRatio, vy: (1 + Math.random() * 1.5) * devicePixelRatio, life: 1 });
    }
    function draw() {
      const gothic = (state.lang === "en");
      ctx.clearRect(0, 0, w, h);
      if (gothic) {
        // 哥特:暗红雾气 + 上升余烬
        const g1 = ctx.createRadialGradient(w * 0.5, -h * 0.08, 0, w * 0.5, -h * 0.08, w * 0.72);
        g1.addColorStop(0, "rgba(150,26,44,0.26)"); g1.addColorStop(1, "rgba(150,26,44,0)");
        ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
        const g2 = ctx.createRadialGradient(w * 0.5, h * 1.08, 0, w * 0.5, h * 1.08, w * 0.66);
        g2.addColorStop(0, "rgba(58,18,50,0.22)"); g2.addColorStop(1, "rgba(58,18,50,0)");
        ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
        stars.forEach(st => {
          st.y -= st.vy; st.x += st.drift;
          if (st.y < -4) { st.y = h + 4; st.x = Math.random() * w; }
          st.a += st.tw;
          const alpha = 0.18 + Math.abs(Math.sin(st.a)) * 0.55;
          ctx.beginPath();
          ctx.fillStyle = st.hue === 45 ? "rgba(230,150,70," + alpha + ")" : "rgba(190,70,48," + alpha + ")";
          ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
        });
      } else {
        // 星空:星云 + 闪烁星辰 + 流星
        const g1 = ctx.createRadialGradient(w * 0.2, h * 0.15, 0, w * 0.2, h * 0.15, w * 0.5);
        g1.addColorStop(0, "rgba(88,60,150,0.16)"); g1.addColorStop(1, "rgba(88,60,150,0)");
        ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
        const g2 = ctx.createRadialGradient(w * 0.85, h * 0.8, 0, w * 0.85, h * 0.8, w * 0.5);
        g2.addColorStop(0, "rgba(30,90,160,0.14)"); g2.addColorStop(1, "rgba(30,90,160,0)");
        ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
        stars.forEach(st => {
          st.a += st.tw;
          const alpha = 0.35 + Math.abs(Math.sin(st.a)) * 0.65;
          ctx.beginPath();
          ctx.fillStyle = st.hue === 45 ? "rgba(230,200,120," + alpha + ")"
            : st.hue === 210 ? "rgba(180,210,255," + alpha + ")" : "rgba(210,180,255," + alpha + ")";
          ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
        });
        spawnShoot();
        shooting.forEach(sh => {
          ctx.strokeStyle = "rgba(255,240,200," + sh.life + ")"; ctx.lineWidth = 1.5 * devicePixelRatio;
          ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x - sh.vx * 8, sh.y - sh.vy * 8); ctx.stroke();
          sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.015;
        });
        shooting = shooting.filter(s => s.life > 0 && s.x < w && s.y < h);
      }
      requestAnimationFrame(draw);
    }
    resize(); window.addEventListener("resize", resize); draw();
  }

  // ============================================================
  //  初始化
  // ============================================================
  function init() {
    ["home", "question", "shuffle", "pick", "reading"].forEach(k => scenes[k] = document.getElementById("scene-" + k));
    document.documentElement.lang = t().htmlLang;
    applyTheme();

    // 语言切换按钮
    const langBtn = el("button", "lang-btn", t().toLang);
    langBtn.id = "lang-btn";
    langBtn.setAttribute("aria-label", "切换语言 / Switch language");
    langBtn.addEventListener("click", () => setLang(state.lang === "en" ? "zh" : "en"));
    document.body.appendChild(langBtn);

    if (!CARDS.length) {
      scenes.home.innerHTML = "<div class='panel'><h2 class='panel-title'>&#9888;</h2><p class='panel-hint'>" + t().noDeck + "</p></div>";
      show("home"); return;
    }
    buildHome(); initStarfield(); show("home");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
