import {
  allMatches,
  beijingTimestamp,
  hasScoreChanged,
  loadBoard,
  readJsonSource,
  saveBoard
} from "./world-cup-data.mjs";

const sourceArg = process.argv.slice(2).find((arg) => !arg.startsWith("--"));
const sourceUrl = process.env.RESULTS_SOURCE_URL || sourceArg;
const dryRun = process.argv.includes("--dry-run");

const source = await readJsonSource(sourceUrl);
if (!source) {
  console.log("No RESULTS_SOURCE_URL configured. Results update skipped.");
  process.exit(0);
}

const board = loadBoard();
const matchesById = new Map(allMatches(board).map((entry) => [entry.match.id, entry]));
const incomingResults = normalizeResultsSource(source);
let changed = 0;

for (const result of incomingResults) {
  const entry = matchesById.get(result.id);
  if (!entry) {
    console.warn(`Result ignored. Match not found: ${result.id}`);
    continue;
  }

  const before = JSON.parse(JSON.stringify(entry.match));
  applyResult(entry.match, result);

  if (result.standings) {
    entry.day.standings = result.standings;
  }
  if (Array.isArray(result.moments)) {
    entry.day.moments = mergeMoments(entry.day.moments || [], result.moments);
  }

  if (hasScoreChanged(before, entry.match)) changed += 1;
}

if (changed > 0) {
  board.meta.updatedAt = source.updatedAt || beijingTimestamp();
  board.meta.mode = "自动赛果更新";
  if (!dryRun) saveBoard(board);
}

console.log(`Results update complete. Updated ${changed} matches.${dryRun ? " Dry run only." : ""}`);

function normalizeResultsSource(source) {
  const matches = source.matches || source.results || [];
  return matches.map((match) => ({
    id: match.id || `${match.homeCode}-${match.awayCode}`.toLowerCase(),
    status: match.status,
    minute: match.minute,
    homeScore: match.homeScore ?? match.home?.score,
    awayScore: match.awayScore ?? match.away?.score,
    stats: match.stats,
    note: match.note,
    standings: match.standings,
    moments: match.moments
  }));
}

function applyResult(match, result) {
  if (result.status) match.status = result.status;
  if (result.minute) match.minute = result.minute;
  if (result.homeScore !== undefined) match.home.score = result.homeScore;
  if (result.awayScore !== undefined) match.away.score = result.awayScore;
  if (result.stats) match.stats = result.stats;
  if (result.note) match.note = result.note;
}

function mergeMoments(existing, incoming) {
  const seen = new Set(existing.map((moment) => `${moment.time}|${moment.title}|${moment.match}`));
  const merged = [...existing];
  for (const moment of incoming) {
    const key = `${moment.time}|${moment.title}|${moment.match}`;
    if (!seen.has(key)) {
      merged.push(moment);
      seen.add(key);
    }
  }
  return merged.sort((a, b) => String(a.time).localeCompare(String(b.time)));
}
