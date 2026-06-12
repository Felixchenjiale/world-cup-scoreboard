# 世界杯比分看板

直接打开 `index.html` 即可使用。

## 每天更新

主要改 `data.js`：

- `meta.updatedAt`：更新日期和时间。
- `days["2026-06-12"].matches`：当天比赛、比分、状态、分钟、焦点说明和统计。
- `days["2026-06-12"].standings`：当天小组积分。
- `days["2026-06-12"].moments`：精彩瞬间文字记录。

状态字段可用：

- `finished`：已完赛
- `live`：进行中
- `scheduled`：未开赛

## 文件说明

- `index.html`：页面结构。
- `styles.css`：视觉样式。
- `app.js`：日期切换、筛选和看板渲染交互。
- `data.js`：每天维护的数据。
- `concept.png`：初始视觉概念稿。
