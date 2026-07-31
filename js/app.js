/* ============================================================
   塔罗牌占卜 · 核心逻辑
   纯前端,无 AI 接口。洗牌 / 抽牌 / 正逆位 / 查表解读 / 渲染
   依赖:cards-data.js (window.TAROT_CARDS)、spreads.js (window.TAROT_SPREADS)
   ============================================================ */
(function () {
  "use strict";

  const CARDS = window.TAROT_CARDS || [];
  const SPREADS = window.TAROT_SPREADS || [];

  // ---------- 状态 ----------
  const state = {
    spread: null,        // 当前牌阵对象
    question: "",        // 用户问题
    focus: "general",    // 当前解读领域
    deck: [],            // 洗好、扇形展开的 78 张(每张含 reversed 标记)
    picked: [],          // 已选中的牌(带 position)
    step: "home"         // home / question / shuffle / pick / reading
  };

  const DOMAINS = [
    { key: "general", label: "综合" },
    { key: "love", label: "爱情" },
    { key: "career", label: "事业" },
    { key: "wealth", label: "财运" },
    { key: "health", label: "健康" }
  ];

  // ---------- 随机 ----------
  // 尽量使用密码学级随机源,增添仪式感与真实感;不支持则退回 Math.random
  function rand() {
    if (window.crypto && window.crypto.getRandomValues) {
      const u = new Uint32Array(1);
      window.crypto.getRandomValues(u);
      return u[0] / 4294967296;
    }
    return Math.random();
  }

  // Fisher–Yates 洗牌
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- DOM 工具 ----------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $all = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  const scenes = {}; // 缓存各场景容器

  function show(step) {
    state.step = step;
    Object.keys(scenes).forEach(k => scenes[k].classList.toggle("active", k === step));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ============================================================
  //  场景一:首页
  // ============================================================
  function buildHome() {
    const s = scenes.home;
    s.innerHTML = "";
    const wrap = el("div", "home-inner");
    wrap.appendChild(el("div", "sigil", "&#10022;"));
    wrap.appendChild(el("h1", "title", "星 界 塔 罗"));
    wrap.appendChild(el("p", "subtitle", "ASTRAL&nbsp;&nbsp;TAROT"));
    wrap.appendChild(el("p", "tagline", "静心凝神,让星辰为你揭开命运的帷幕"));

    const btn = el("button", "btn-primary glow", "开始占卜");
    btn.addEventListener("click", () => { buildQuestion(); show("question"); });
    wrap.appendChild(btn);

    s.appendChild(wrap);
  }

  // ============================================================
  //  场景二:输入问题 + 选牌阵
  // ============================================================
  function buildQuestion() {
    const s = scenes.question;
    s.innerHTML = "";
    const wrap = el("div", "panel");

    wrap.appendChild(el("h2", "panel-title", "凝聚你的意念"));
    wrap.appendChild(el("p", "panel-hint", "在心中默想你想探问之事,然后写下你的问题(可留空)。"));

    const ta = el("textarea", "q-input");
    ta.placeholder = "例如:这段关系将走向何方?我近期的事业运势如何?";
    ta.value = state.question;
    wrap.appendChild(ta);

    wrap.appendChild(el("h3", "panel-sub", "选择牌阵"));
    const list = el("div", "spread-list");
    SPREADS.forEach((sp, i) => {
      const card = el("div", "spread-card");
      if (i === 0) card.classList.add("selected");
      card.dataset.id = sp.id;
      card.appendChild(el("div", "spread-name", sp.name));
      card.appendChild(el("div", "spread-count", "抽 " + sp.count + " 张"));
      card.appendChild(el("div", "spread-desc", sp.desc));
      card.addEventListener("click", () => {
        $all(".spread-card", list).forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
      });
      list.appendChild(card);
    });
    wrap.appendChild(list);

    const row = el("div", "btn-row");
    const back = el("button", "btn-ghost", "返回");
    back.addEventListener("click", () => show("home"));
    const go = el("button", "btn-primary glow", "洗 牌");
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
    const s = scenes.shuffle;
    s.innerHTML = "";
    const stageWrap = el("div", "shuffle-wrap");
    const stage = el("div", "shuffle-stage");
    // 一叠牌背,做聚拢-旋转-散开动画
    for (let i = 0; i < 14; i++) {
      const c = el("div", "shuffle-card back");
      c.style.setProperty("--i", i);
      c.style.setProperty("--r", (rand() * 2 - 1).toFixed(3));
      stage.appendChild(c);
    }
    stageWrap.appendChild(stage);
    stageWrap.appendChild(el("p", "shuffle-text", "正在洗牌&hellip;&hellip;凝神于你的问题"));
    s.appendChild(stageWrap);

    // 触发洗牌类
    requestAnimationFrame(() => stage.classList.add("shuffling"));

    // 洗牌结束后进入选牌
    setTimeout(() => {
      buildDeck();
      startPick();
    }, 2600);
  }

  // 构建整副牌(洗牌 + 决定每张正逆位)
  function buildDeck() {
    const shuffled = shuffle(CARDS);
    state.deck = shuffled.map(card => ({
      card: card,
      reversed: rand() < 0.5
    }));
    state.picked = [];
  }

  // ============================================================
  //  场景四:扇形铺牌 + 选牌
  // ============================================================
  function startPick() {
    show("pick");
    const s = scenes.pick;
    s.innerHTML = "";

    const need = state.spread.count;
    const head = el("div", "pick-head");
    head.appendChild(el("h2", "panel-title", "凭直觉选牌"));
    const hint = el("p", "pick-hint", "");
    head.appendChild(hint);
    s.appendChild(head);

    const fan = el("div", "fan");
    s.appendChild(fan);

    // 用一部分牌铺开供选择(全部 78 张扇形铺开)
    const total = state.deck.length;
    const spreadAngle = 150;               // 扇形总张角
    const start = -spreadAngle / 2;
    const stepA = spreadAngle / (total - 1);

    updateHint(hint, 0, need);

    state.deck.forEach((entry, idx) => {
      const c = el("div", "fan-card back");
      const ang = start + stepA * idx;
      c.style.setProperty("--ang", ang.toFixed(2) + "deg");
      c.style.setProperty("--idx", idx);
      c.style.setProperty("--delay", (idx * 12) + "ms");
      c.style.setProperty("--float", (rand() * 2 - 1).toFixed(3));
      c.dataset.idx = idx;
      c.addEventListener("click", () => onPick(c, entry, need, hint));
      fan.appendChild(c);
    });

    // 入场:扇形展开
    requestAnimationFrame(() => fan.classList.add("dealt"));
  }

  function updateHint(hintEl, chosen, need) {
    if (chosen < need) {
      hintEl.innerHTML = "请选择第 <b>" + (chosen + 1) + "</b> 张牌 &nbsp;·&nbsp; 已选 " + chosen + " / " + need;
    } else {
      hintEl.innerHTML = "已选满 " + need + " 张,正在为你揭示&hellip;&hellip;";
    }
  }

  function onPick(cardEl, entry, need, hintEl) {
    if (cardEl.classList.contains("picked")) return;
    if (state.picked.length >= need) return;

    cardEl.classList.add("picked");
    const posIndex = state.picked.length;
    const position = state.spread.positions[posIndex];
    state.picked.push({ card: entry.card, reversed: entry.reversed, position: position });

    // 选中的牌飞离扇形(视觉上"抽出")
    cardEl.classList.add("lifted");

    updateHint(hintEl, state.picked.length, need);

    if (state.picked.length >= need) {
      // 稍作停顿,进入揭示
      setTimeout(startReveal, 900);
    }
  }

  // ============================================================
  //  场景五:牌阵摆放 + 翻牌揭示
  // ============================================================
  function startReveal() {
    show("reading");
    const s = scenes.reading;
    s.innerHTML = "";

    const header = el("div", "read-head");
    header.appendChild(el("h2", "panel-title", state.spread.name));
    if (state.question) {
      header.appendChild(el("p", "read-question", "&ldquo;" + escapeHtml(state.question) + "&rdquo;"));
    }
    s.appendChild(header);

    // 牌桌:按牌阵坐标摆放
    const table = el("div", "table " + "table-" + state.spread.id);
    s.appendChild(table);

    const cardEls = [];
    state.picked.forEach((p, i) => {
      const slot = el("div", "slot");
      slot.style.left = p.position.x + "%";
      slot.style.top = p.position.y + "%";
      if (p.position.cross) slot.classList.add("cross");

      const flip = el("div", "flip-card");
      const inner = el("div", "flip-inner");
      const back = el("div", "flip-face flip-back");
      const front = el("div", "flip-face flip-front");
      if (p.reversed) front.classList.add("reversed");

      const img = el("img", "card-img");
      img.alt = p.card.name;
      img.loading = "lazy";
      img.src = p.card.img;
      img.addEventListener("error", () => { img.replaceWith(cardFallback(p.card)); });
      front.appendChild(img);
      front.appendChild(el("div", "card-cap", p.card.name + (p.reversed ? " (逆)" : "")));

      inner.appendChild(back); inner.appendChild(front);
      flip.appendChild(inner);
      slot.appendChild(flip);
      slot.appendChild(el("div", "slot-label", p.position.title));
      table.appendChild(slot);

      cardEls.push({ flip, entry: p, i });
    });

    // 依次翻牌
    cardEls.forEach((c, i) => {
      setTimeout(() => {
        c.flip.classList.add("revealed");
        burst(c.flip); // 翻牌光晕
      }, 400 + i * 520);
    });

    // 全部翻完后展示文字解读
    const totalReveal = 400 + cardEls.length * 520 + 400;
    setTimeout(() => renderReading(s), totalReveal);
  }

  // 图片加载失败时的纯 CSS 占位牌面
  function cardFallback(card) {
    const box = el("div", "card-fallback");
    box.appendChild(el("div", "fb-orn", "&#10022;"));
    box.appendChild(el("div", "fb-name", card.name));
    box.appendChild(el("div", "fb-en", card.nameEn));
    return box;
  }

  // ---------- 文字解读 ----------
  function renderReading(s) {
    // 领域切换(仅当牌阵不是强指定单一领域时提供全部选项)
    const controls = el("div", "domain-tabs");
    DOMAINS.forEach(d => {
      const t = el("button", "domain-tab", d.label);
      if (d.key === state.focus) t.classList.add("active");
      t.addEventListener("click", () => {
        state.focus = d.key;
        $all(".domain-tab", controls).forEach(x => x.classList.remove("active"));
        t.classList.add("active");
        fillReadings();
      });
      controls.appendChild(t);
    });
    s.appendChild(controls);

    const readBox = el("div", "readings");
    readBox.id = "readings";
    s.appendChild(readBox);

    // 综合提示
    const summary = el("div", "reading-summary");
    summary.innerHTML = buildSummary();
    s.appendChild(summary);

    const row = el("div", "btn-row center");
    const again = el("button", "btn-primary glow", "再次占卜");
    again.addEventListener("click", () => { buildQuestion(); show("question"); });
    const home = el("button", "btn-ghost", "回到星界");
    home.addEventListener("click", () => show("home"));
    row.appendChild(again); row.appendChild(home);
    s.appendChild(row);

    fillReadings();
    readBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function fillReadings() {
    const box = $("#readings");
    if (!box) return;
    box.innerHTML = "";
    state.picked.forEach(p => {
      const item = el("div", "reading-item");
      const ori = p.reversed ? "rev" : "up";
      const m = p.card.meaning[ori];
      const text = (m && (m[state.focus] || m.general)) || "(暂无该领域解读)";
      const kw = (p.card.keywords[ori] || []).slice(0, 4).join(" · ");

      const thumb = el("div", "reading-thumb " + (p.reversed ? "rev" : ""));
      const timg = el("img", null);
      timg.src = p.card.img; timg.alt = p.card.name;
      timg.addEventListener("error", () => timg.replaceWith(cardFallback(p.card)));
      thumb.appendChild(timg);

      const body = el("div", "reading-body");
      const posTag = el("span", "pos-tag", p.position.title);
      const nameLine = el("div", "reading-name");
      nameLine.appendChild(posTag);
      nameLine.appendChild(el("span", "rn-main",
        p.card.name + " " + (p.reversed ? "逆位" : "正位")));
      body.appendChild(nameLine);
      body.appendChild(el("div", "reading-kw", kw));
      body.appendChild(el("p", "reading-text", text));

      item.appendChild(thumb);
      item.appendChild(body);
      box.appendChild(item);
    });
  }

  // 依据抽到的牌给一段固定模板的综合提示(非 AI)
  function buildSummary() {
    const majors = state.picked.filter(p => p.card.arcana === "major").length;
    const revs = state.picked.filter(p => p.reversed).length;
    const n = state.picked.length;
    let msg = "<b>星语综述</b><br>";
    if (majors >= Math.ceil(n / 2)) {
      msg += "本次占卜中大阿卡纳占据主导 —— 你所探问之事关乎人生的重要转折,命运的大势正在其中运作,值得郑重对待。";
    } else if (majors === 0) {
      msg += "本次全为小阿卡纳 —— 事态多由日常的选择与细节推动,主动权大多握在你自己手中。";
    } else {
      msg += "大小阿卡纳交织 —— 既有命运的引导,也有可由你把握的现实因素,顺势而为方能事半功倍。";
    }
    msg += "<br>";
    if (revs === 0) {
      msg += "全部为正位,能量流动顺畅,是较为明朗的征兆。";
    } else if (revs >= Math.ceil(n / 2)) {
      msg += "逆位偏多,提示当前存在阻滞或内在的功课,宜沉静内省、调整心态后再行动。";
    } else {
      msg += "正逆交错,顺遂与考验并存,留意逆位牌所指出的提醒。";
    }
    msg += "<br><span class='summary-note'>塔罗揭示的是能量与可能性,而非命定。最终的路,始终由你亲手书写。</span>";
    return msg;
  }

  function burst(node) {
    const b = el("div", "burst");
    node.appendChild(b);
    setTimeout(() => b.remove(), 900);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // ============================================================
  //  星空背景 (Canvas)
  // ============================================================
  function initStarfield() {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, stars, shooting = [];

    function resize() {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(260, Math.floor((window.innerWidth * window.innerHeight) / 6000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          r: (Math.random() * 1.4 + 0.3) * devicePixelRatio,
          a: Math.random(), tw: Math.random() * 0.02 + 0.004,
          hue: Math.random() < 0.15 ? 45 : (Math.random() < 0.5 ? 210 : 260)
        });
      }
    }

    function spawnShoot() {
      if (Math.random() < 0.006 && shooting.length < 2) {
        const startX = Math.random() * w;
        shooting.push({ x: startX, y: Math.random() * h * 0.5, vx: (2 + Math.random() * 3) * devicePixelRatio, vy: (1 + Math.random() * 1.5) * devicePixelRatio, life: 1 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // 星云光晕
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
        ctx.fillStyle = st.hue === 45
          ? "rgba(230,200,120," + alpha + ")"
          : st.hue === 210
            ? "rgba(180,210,255," + alpha + ")"
            : "rgba(210,180,255," + alpha + ")";
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      });

      spawnShoot();
      shooting.forEach(sh => {
        ctx.strokeStyle = "rgba(255,240,200," + sh.life + ")";
        ctx.lineWidth = 1.5 * devicePixelRatio;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 8, sh.y - sh.vy * 8);
        ctx.stroke();
        sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.015;
      });
      shooting = shooting.filter(s => s.life > 0 && s.x < w && s.y < h);

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  // ============================================================
  //  初始化
  // ============================================================
  function init() {
    ["home", "question", "shuffle", "pick", "reading"].forEach(k => {
      scenes[k] = document.getElementById("scene-" + k);
    });
    if (!CARDS.length) {
      scenes.home.innerHTML = "<div class='panel'><h2 class='panel-title'>牌库尚未载入</h2>" +
        "<p class='panel-hint'>cards-data.js 未成功加载,请检查文件。</p></div>";
      show("home");
      return;
    }
    buildHome();
    initStarfield();
    show("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
