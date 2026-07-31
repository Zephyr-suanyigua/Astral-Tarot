# 星界塔罗 · Astral Tarot

宇宙星空 / 华丽西幻风格的**韦特塔罗牌在线占卜**。纯前端(HTML + CSS + 原生 JS),
无需后端、无 AI 接口 —— 洗牌、抽牌、正逆位与牌义解读全部在本地完成。

## 特色
- 🌌 Canvas 星空 + 流星 + 金色微粒的沉浸式氛围
- 🃏 扇形铺牌、两侧漂浮、抽卡飞离、3D 翻牌揭示等动态效果
- 🔮 5 种牌阵:单张牌 / 时间之流 / 圣三角 / 关系牌阵 / 凯尔特十字
- 📖 78 张标准韦特塔罗,正逆位 × 综合/爱情/事业/财运/健康 多领域详细解读
- 📱 PWA,可安装到桌面,支持离线使用

## 本地运行
```bash
python -m http.server 8787
# 浏览器打开 http://127.0.0.1:8787
```

## 目录结构
```
├─ index.html              入口
├─ css/style.css           主题与动效
├─ js/
│  ├─ cards-data.js        78 张牌与解读数据
│  ├─ spreads.js           牌阵定义
│  └─ app.js               洗牌/抽牌/渲染核心逻辑
├─ assets/cards/           78 张牌面图
├─ manifest.webmanifest    PWA 配置
└─ sw.js                   Service Worker 离线缓存
```

## 图片版权
牌面图取自 1909 年 Rider–Waite–Smith 塔罗,已进入公有领域(Public Domain),
经由 Wikimedia Commons 获取。

## 声明
塔罗占卜仅供娱乐与自我省思之用,不构成任何专业建议。
