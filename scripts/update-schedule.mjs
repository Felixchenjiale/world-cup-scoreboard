import {
  beijingTimestamp,
  ensureDay,
  loadBoard,
  normalizeMatch,
  readJsonSource,
  saveBoard
} from "./world-cup-data.mjs";

const sourceArg = process.argv.slice(2).find((arg) => !arg.startsWith("--"));
const sourceUrl = process.env.SCHEDULE_SOURCE_URL || sourceArg;
const dryRun = process.argv.includes("--dry-run");

const source = await readJsonSource(sourceUrl);
if (!source) {
  console.log("No SCHEDULE_SOURCE_URL configured. Schedule update skipped.");
  process.exit(0);
}

const board = loadBoard();
const sourceDays = normalizeScheduleSource(source);
let changed = 0;

for (const [date, incomingDay] of Object.entries(sourceDays)) {
  const day = ensureDay(board, date, incomingDay);
  day.label = incomingDay.label || day.label;
  day.tag = incomingDay.tag || day.tag || "小组赛";
  day.standings = incomingDay.standings || day.standings || {};
  day.moments = day.moments || [];

  for (const incomingMatch of incomingDay.matches || []) {
    const normalized = normalizeMatch(incomingMatch);
    const index = day.matches.findIndex((match) => match.id === normalized.id);
    if (index >= 0) {
      const current = day.matches[index];
      const preservedResult = current.status === "live" || current.status === "finished";
      day.matches[index] = {
        ...normalized,
        status: preservedResult ? current.status : normalized.status,
        minute: preservedResult ? current.minute : normalized.minute,
        home: {
          ...normalized.home,
          score: preservedResult ? current.home.score : normalized.home.score
        },
        away: {
          ...normalized.away,
          score: preservedResult ? current.away.score : normalized.away.score
        },
        note: current.note || normalized.note,
        stats: current.stats?.length ? current.stats : normalized.stats
      };
    } else {
      day.matches.push(normalized);
    }
    changed += 1;
  }
}

if (changed > 0) {
  board.meta.updatedAt = source.updatedAt || beijingTimestamp();
  board.meta.mode = "自动赛程更新";
  if (!dryRun) saveBoard(board);
}

console.log(`Schedule update complete. Processed ${changed} matches.${dryRun ? " Dry run only." : ""}`);

function normalizeScheduleSource(source) {
  if (source.days) return source.days;
  const days = {};
  const matches = source.matches || source.fixtures || [];
  for (const match of matches) {
    const date = match.date || match.matchDate || match.localDate;
    if (!date) throw new Error(`Schedule match missing date: ${JSON.stringify(match)}`);
    days[date] ||= { label: match.label, tag: match.tag || "小组赛", matches: [] };
    days[date].matches.push(match);
  }
  return days;
}
