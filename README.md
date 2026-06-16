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

## 自动更新

仓库里有两个自动化脚本：

- `scripts/update-schedule.mjs`：更新世界杯赛程、北京时间、球队、场馆和小组。
- `scripts/update-results.mjs`：更新比分、比赛状态、比赛时间、统计和精彩瞬间。

GitHub Actions 会在北京时间每天 00:00 自动运行一次：

- `.github/workflows/update-world-cup-data.yml`

需要在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 里配置：

- `SCHEDULE_SOURCE_URL`：赛程 JSON 数据源。
- `RESULTS_SOURCE_URL`：赛果 JSON 数据源。

如果暂时没有配置数据源，脚本会跳过，不会改动页面。

本地 `npm run update-and-push` 默认只更新并提交 `data.js`，不会主动推送 GitHub；定时推送交给 GitHub Actions 处理。

赛程数据源支持这种结构：

```json
{
  "matches": [
    {
      "date": "2026-06-16",
      "id": "fra-sen",
      "group": "I组",
      "kickoffBeijing": "6/17 03:00",
      "home": { "code": "FRA", "name": "法国" },
      "away": { "code": "SEN", "name": "塞内加尔" },
      "venue": "纽约/新泽西"
    }
  ]
}
```

赛果数据源支持这种结构：

```json
{
  "matches": [
    {
      "id": "fra-sen",
      "status": "live",
      "minute": "63'",
      "homeScore": 1,
      "awayScore": 0
    }
  ]
}
```

法国队和西班牙队的高亮由 `app.js` 根据球队代码自动处理：

- `FRA`：法国
- `ESP`：西班牙

## 文件说明

- `index.html`：页面结构。
- `styles.css`：视觉样式。
- `app.js`：日期切换、筛选和看板渲染交互。
- `data.js`：每天维护的数据。
- `scripts/`：自动更新脚本。
- `concept.png`：初始视觉概念稿。
