const boardState = {
  date: "2026-06-12",
  filter: "all",
  data: JSON.parse(JSON.stringify(window.WORLD_CUP_BOARD_DATA))
};

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

function currentDay() {
  return boardState.data.days[boardState.date] || { matches: [], moments: [], standings: {} };
}

function confirmedMatches(day = currentDay()) {
  return (day.matches || []).filter((match) => (
    match.status !== "scheduled" || match.minute !== "待定"
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
      <button class="match-row" data-match-id="${match.id}">
        <span class="team-code">${match.home.code}</span>
        <span class="team-name">${match.home.name}</span>
        <strong>${scoreText(match)}</strong>
        <span class="team-name away">${match.away.name}</span>
        <span class="team-code">${match.away.code}</span>
        <span class="match-meta">
          <i class="${statusClass[match.status]}"></i>${statusLabel[match.status]} · ${match.minute}
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
  els.featureMinute.textContent = match.minute;
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
    const confirmedCount = confirmedMatches(day).length;
    return `
      <button class="date-card ${date === boardState.date ? "active" : ""}" data-date="${date}">
        <span>${day.tag || "赛程日"}</span>
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
