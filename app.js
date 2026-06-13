const statusLabel = {
  finished: "已完赛",
  live: "进行中",
  scheduled: "未开赛"
};

const statusClass = {
  finished: "finished",
  live: "live",
  scheduled: "scheduled"
};

const confirmedKickoffTimes = {
  "can-bih": "6/13 03:00",
  "usa-par": "6/13 09:00",
  "hai-sco": "6/14 09:00",
  "aus-tur": "6/14 12:00",
  "bra-mar": "6/14 06:00",
  "qat-sui": "6/14 03:00",
  "civ-ecu": "6/15 07:00",
  "ger-cur": "6/15 01:00",
  "ned-jpn": "6/15 04:00",
  "swe-tun": "6/15 10:00",
  "ksa-uru": "6/16 06:00",
  "esp-cpv": "6/16 00:00",
  "irn-nzl": "6/16 09:00",
  "bel-egy": "6/16 03:00",
  "fra-sen": "6/17 03:00",
  "irq-nor": "6/17 06:00",
  "arg-alg": "6/17 09:00",
  "aut-jor": "6/17 12:00",
  "gha-pan": "6/18 07:00",
  "eng-cro": "6/18 04:00",
  "por-cod": "6/18 01:00",
  "uzb-col": "6/18 10:00",
  "cze-rsa": "6/19 00:00",
  "sui-bih": "6/19 03:00",
  "can-qat": "6/19 06:00",
  "mex-kor": "6/19 09:00",
  "bra-hai": "6/20 08:30",
  "sco-mar": "6/20 06:00",
  "tur-par": "6/20 11:00",
  "usa-aus": "6/20 03:00",
  "ger-civ": "6/21 04:00",
  "ecu-cur": "6/21 08:00",
  "ned-swe": "6/21 01:00",
  "tun-jpn": "6/21 12:00",
  "uru-cpv": "6/22 06:00",
  "esp-ksa": "6/22 00:00",
  "bel-irn": "6/22 03:00",
  "nzl-egy": "6/22 09:00",
  "nor-sen": "6/23 08:00",
  "fra-irq": "6/23 05:00",
  "arg-aut": "6/23 01:00",
  "jor-alg": "6/23 11:00",
  "eng-gha": "6/24 04:00",
  "pan-cro": "6/24 07:00",
  "por-uzb": "6/24 01:00",
  "col-cod": "6/24 10:00",
  "sco-bra": "6/25 06:00",
  "mar-hai": "6/25 06:00",
  "sui-can": "6/25 03:00",
  "bih-qat": "6/25 03:00",
  "cze-mex": "6/25 00:00",
  "rsa-kor": "6/25 09:00",
  "cur-civ": "6/26 04:00",
  "ecu-ger": "6/26 04:00",
  "jpn-swe": "6/26 07:00",
  "tun-ned": "6/26 07:00",
  "tur-usa": "6/26 10:00",
  "par-aus": "6/26 10:00",
  "nor-fra": "6/27 03:00",
  "sen-irq": "6/27 03:00",
  "egy-irn": "6/27 11:00",
  "nzl-bel": "6/27 11:00",
  "cpv-ksa": "6/27 08:00",
  "uru-esp": "6/27 08:00",
  "pan-eng": "6/28 05:00",
  "cro-gha": "6/28 05:00",
  "alg-aut": "6/28 10:00",
  "jor-arg": "6/28 10:00",
  "col-por": "6/28 07:30",
  "cod-uzb": "6/28 07:30"
};

const boardData = normalizeDataByBeijingDate(JSON.parse(JSON.stringify(window.WORLD_CUP_BOARD_DATA)));

const boardState = {
  date: selectDefaultDate(boardData),
  filter: "all",
  data: boardData
};

const els = {
  dateline: document.querySelector("#dateline"),
  updateTime: document.querySelector("#updateTime"),
  matchList: document.querySelector("#matchList"),
  featureStatus: document.querySelector("#featureStatus"),
  featureHomeFlag: document.querySelector("#featureHomeFlag"),
  featureAwayFlag: document.querySelector("#featureAwayFlag"),
  featureHome: document.querySelector("#featureHome"),
  featureAway: document.querySelector("#featureAway"),
  featureScore: document.querySelector("#featureScore"),
  featureMinute: document.querySelector("#featureMinute"),
  featureNote: document.querySelector("#featureNote"),
  featureStats: document.querySelector("#featureStats"),
  groupSelect: document.querySelector("#groupSelect"),
  standings: document.querySelector("#standings"),
  momentFeed: document.querySelector("#momentFeed"),
  momentCount: document.querySelector("#momentCount"),
  calendarStrip: document.querySelector("#calendarStrip")
};

function normalizeDataByBeijingDate(data) {
  const normalizedDays = {};

  Object.entries(data.days || {}).forEach(([sourceDate, day]) => {
    ensureNormalizedDay(normalizedDays, sourceDate, day);

    (day.matches || []).forEach((match) => {
      const beijingDate = beijingDateForMatch(sourceDate, match);
      const targetDay = ensureNormalizedDay(normalizedDays, beijingDate, {
        label: formatDateLabel(beijingDate),
        tag: day.tag
      });
      targetDay.matches.push(match);
    });

    if (Object.keys(day.standings || {}).length || (day.moments || []).length) {
      const targetDay = ensureNormalizedDay(normalizedDays, sourceDate, day);
      targetDay.standings = day.standings || targetDay.standings;
      targetDay.moments = day.moments || targetDay.moments;
    }
  });

  data.days = Object.fromEntries(
    Object.entries(normalizedDays)
      .map(([date, day]) => [date, {
        ...day,
        matches: (day.matches || []).sort(compareMatchesByBeijingTime)
      }])
      .filter(([, day]) => (day.matches || []).length || (day.moments || []).length || Object.keys(day.standings || {}).length)
      .sort(([a], [b]) => a.localeCompare(b))
  );
  return data;
}

function ensureNormalizedDay(days, date, source = {}) {
  days[date] ||= {
    label: source.label || formatDateLabel(date),
    tag: source.tag || "小组赛",
    matches: [],
    standings: {},
    moments: []
  };
  return days[date];
}

function beijingDateForMatch(sourceDate, match) {
  const minute = matchMinute(match);
  const parsed = /^(\d{1,2})\/(\d{1,2})\s+\d{1,2}:\d{2}$/.exec(minute);
  if (!parsed) return sourceDate;
  const sourceYear = sourceDate.split("-")[0];
  return `${sourceYear}-${parsed[1].padStart(2, "0")}-${parsed[2].padStart(2, "0")}`;
}

function compareMatchesByBeijingTime(a, b) {
  return timeSortValue(matchMinute(a)) - timeSortValue(matchMinute(b));
}

function timeSortValue(value) {
  const parsed = /^\d{1,2}\/\d{1,2}\s+(\d{1,2}):(\d{2})$/.exec(value);
  if (!parsed) return value === "待定" ? 9999 : 0;
  return Number(parsed[1]) * 60 + Number(parsed[2]);
}

function formatDateLabel(date) {
  const [, month, day] = date.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

function beijingToday() {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date()).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function selectDefaultDate(data) {
  const dates = Object.keys(data.days || {}).sort();
  const today = beijingToday();
  if (dates.includes(today) && confirmedMatches(data.days[today]).length) return today;

  const previous = dates
    .filter((date) => date < today && confirmedMatches(data.days[date]).length)
    .at(-1);
  if (previous) return previous;

  return dates.find((date) => confirmedMatches(data.days[date]).length) || dates[0] || today;
}

function currentDay() {
  return boardState.data.days[boardState.date] || { matches: [], moments: [], standings: {} };
}

function matchMinute(match) {
  return confirmedKickoffTimes[match.id] || match.minute;
}

function isFocusTeamMatch(match) {
  return [match.home.code, match.away.code].some((code) => code === "FRA" || code === "ESP");
}

function focusTeamLabel(matches) {
  const codes = new Set(matches.flatMap((match) => [match.home.code, match.away.code]));
  const labels = [];
  if (codes.has("FRA")) labels.push("法国");
  if (codes.has("ESP")) labels.push("西班牙");
  return labels.join("/");
}

function confirmedMatches(day = currentDay()) {
  return (day.matches || []).filter((match) => (
    match.status !== "scheduled" || matchMinute(match) !== "待定"
  ));
}

function scoreText(match) {
  const home = match.home.score ?? "-";
  const away = match.away.score ?? "-";
  return `${home} : ${away}`;
}

function matchEmptyText() {
  if (boardState.filter === "live") return "当前没有进行中的比赛。切回“全部”可以查看已确认赛程。";
  if (boardState.filter === "finished") return "当前没有已完赛比赛。切回“全部”可以查看已确认赛程。";
  return "这一天暂时没有已确认时间的比赛。";
}

function renderMatches() {
  const matches = confirmedMatches().filter((match) => {
    if (boardState.filter === "all") return true;
    return match.status === boardState.filter;
  });

  els.matchList.innerHTML = matches.length
    ? matches.map((match) => `
      <button class="match-row ${isFocusTeamMatch(match) ? "focus-team-match" : ""}" data-match-id="${match.id}">
        <span class="team-code">${match.home.code}</span>
        <span class="team-name">${match.home.name}</span>
        <strong>${scoreText(match)}</strong>
        <span class="team-name away">${match.away.name}</span>
        <span class="team-code">${match.away.code}</span>
        <span class="match-meta">
          <i class="${statusClass[match.status]}"></i>${statusLabel[match.status]} · ${matchMinute(match)}
        </span>
      </button>
    `).join("")
    : `<div class="empty-state">${matchEmptyText()}</div>`;

  document.querySelectorAll(".match-row").forEach((row) => {
    row.addEventListener("click", () => {
      const match = currentDay().matches.find((item) => item.id === row.dataset.matchId);
      renderFeature(match);
    });
  });
}

function renderFeature(match = currentDay().matches[0]) {
  if (!match) {
    els.featureHome.textContent = "待录入";
    els.featureAway.textContent = "待录入";
    els.featureHomeFlag.textContent = "--";
    els.featureAwayFlag.textContent = "--";
    els.featureScore.textContent = "- : -";
    els.featureMinute.textContent = "--";
    els.featureStatus.textContent = "无比赛";
    els.featureNote.textContent = "选择日期或录入比赛后，这里会展示焦点赛况。";
    els.featureStats.innerHTML = "";
    return;
  }

  els.featureHome.textContent = match.home.name;
  els.featureAway.textContent = match.away.name;
  els.featureHomeFlag.textContent = match.home.code;
  els.featureAwayFlag.textContent = match.away.code;
  els.featureScore.textContent = scoreText(match);
  els.featureMinute.textContent = matchMinute(match);
  els.featureStatus.textContent = statusLabel[match.status];
  els.featureNote.textContent = match.note;
  els.featureStats.innerHTML = (match.stats || []).map((stat) => `
    <div class="stat-card">
      <span>${stat.label}</span>
      <strong>${stat.home}<em>${stat.away}</em></strong>
    </div>
  `).join("");
}

function renderGroups() {
  const groups = Object.keys(currentDay().standings || {});
  els.groupSelect.innerHTML = groups.map((group) => `<option value="${group}">${group}</option>`).join("");
  const selected = els.groupSelect.value || groups[0];
  renderStandings(selected);
}

function renderStandings(group) {
  const rows = (currentDay().standings || {})[group] || [];
  els.standings.innerHTML = rows.length
    ? `<div class="standing-row header"><span>球队</span><span>赛</span><span>净胜</span><span>分</span></div>` +
      rows.map((team, index) => `
        <div class="standing-row ${index < 2 ? "advance" : ""}">
          <span>${index + 1}. ${team.team}</span>
          <span>${team.played}</span>
          <span>${team.gd > 0 ? "+" : ""}${team.gd}</span>
          <strong>${team.pts}</strong>
        </div>
      `).join("")
    : `<div class="empty-state">暂无小组积分。比赛结束后补充胜平负和积分即可。</div>`;
}

function renderMoments() {
  const moments = currentDay().moments || [];
  els.momentCount.textContent = `${moments.length} 条`;
  els.momentFeed.innerHTML = moments.length
    ? moments.map((moment) => `
      <article class="moment">
        <time>${moment.time}</time>
        <div>
          <h3>${moment.title}</h3>
          <p>${moment.body}</p>
          <span>${moment.match || "赛事记录"}</span>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state">今天还没有精彩瞬间，等待下一次数据更新。</div>`;
}

function renderDateCards() {
  const dates = Object.keys(boardState.data.days || {}).sort();
  els.calendarStrip.innerHTML = dates.map((date) => {
    const day = boardState.data.days[date];
    const confirmed = confirmedMatches(day);
    const confirmedCount = confirmed.length;
    const focusLabel = focusTeamLabel(confirmed);
    return `
      <button class="date-card ${date === boardState.date ? "active" : ""} ${focusLabel ? "focus-team-date" : ""}" data-date="${date}">
        <span>${focusLabel || day.tag || "赛程日"}</span>
        <strong>${day.label || date}</strong>
        <small>${confirmedCount} 场确认比赛</small>
      </button>
    `;
  }).join("");

  els.calendarStrip.querySelectorAll(".date-card").forEach((button) => {
    button.addEventListener("click", () => {
      boardState.date = button.dataset.date;
      renderAll();
    });
  });
}

function renderAll() {
  const day = currentDay();
  els.dateline.textContent = `${boardState.data.meta.tournament} · ${day.label || boardState.date}`;
  els.updateTime.textContent = `更新于 ${boardState.data.meta.updatedAt}`;
  renderDateCards();
  renderMatches();
  renderFeature(confirmedMatches(day)[0]);
  renderGroups();
  renderMoments();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    boardState.filter = button.dataset.filter;
    renderMatches();
  });
});

els.groupSelect.addEventListener("change", (event) => renderStandings(event.target.value));

renderAll();
