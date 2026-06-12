import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

export const DATA_FILE = path.resolve("data.js");

export function loadBoard(file = DATA_FILE) {
  const source = fs.readFileSync(file, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: file });
  if (!sandbox.window.WORLD_CUP_BOARD_DATA) {
    throw new Error(`Could not parse ${file}`);
  }
  return sandbox.window.WORLD_CUP_BOARD_DATA;
}

export function saveBoard(board, file = DATA_FILE) {
  fs.writeFileSync(file, `window.WORLD_CUP_BOARD_DATA = ${JSON.stringify(board, null, 2)};\n`);
}

export function beijingTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

export async function readJsonSource(sourceUrl) {
  if (!sourceUrl) return null;
  if (sourceUrl.startsWith("file://")) {
    return JSON.parse(fs.readFileSync(new URL(sourceUrl), "utf8"));
  }
  if (!/^https?:\/\//.test(sourceUrl)) {
    return JSON.parse(fs.readFileSync(path.resolve(sourceUrl), "utf8"));
  }
  const response = await fetch(sourceUrl, {
    headers: { "accept": "application/json" }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${sourceUrl}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export function matchId(match) {
  if (match.id) return String(match.id);
  const home = match.home?.code || match.homeCode;
  const away = match.away?.code || match.awayCode;
  if (!home || !away) {
    throw new Error(`Match is missing id and team codes: ${JSON.stringify(match)}`);
  }
  return `${home}-${away}`.toLowerCase();
}

export function normalizeTeam(team, fallback = {}) {
  return {
    code: team?.code || fallback.code || "",
    name: team?.name || fallback.name || "",
    score: team?.score ?? fallback.score ?? null
  };
}

export function normalizeMatch(match, existing = {}) {
  const status = match.status || existing.status || "scheduled";
  return {
    id: matchId(match),
    group: match.group || existing.group || "",
    status,
    minute: match.minute || match.kickoffBeijing || match.kickoff || existing.minute || "待定",
    home: normalizeTeam(match.home || { code: match.homeCode, name: match.homeName, score: match.homeScore }, existing.home),
    away: normalizeTeam(match.away || { code: match.awayCode, name: match.awayName, score: match.awayScore }, existing.away),
    venue: match.venue || existing.venue || "",
    note: match.note || existing.note || "",
    stats: match.stats || existing.stats || []
  };
}

export function ensureDay(board, date, incoming = {}) {
  board.days ||= {};
  board.days[date] ||= {
    label: incoming.label || formatDayLabel(date),
    tag: incoming.tag || "小组赛",
    matches: [],
    standings: {},
    moments: []
  };
  return board.days[date];
}

export function formatDayLabel(date) {
  const [, month, day] = date.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

export function allMatches(board) {
  return Object.entries(board.days || {}).flatMap(([date, day]) => (
    (day.matches || []).map((match) => ({ date, day, match }))
  ));
}

export function hasScoreChanged(before, after) {
  return before?.home?.score !== after?.home?.score ||
    before?.away?.score !== after?.away?.score ||
    before?.status !== after?.status ||
    before?.minute !== after?.minute;
}
