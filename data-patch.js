(function applyWorldCupKnockoutPatch() {
  const board = window.WORLD_CUP_BOARD_DATA;
  if (!board?.days) return;

  board.meta.mode = "淘汰赛赛程更新";
  board.meta.updatedAt = "2026-06-29 10:30";

  const match = (id, minute, homeCode, homeName, awayCode, awayName, venue, note, status = "scheduled", homeScore = null, awayScore = null) => ({
    id,
    group: "淘汰赛",
    status,
    minute,
    home: { code: homeCode, name: homeName, score: homeScore },
    away: { code: awayCode, name: awayName, score: awayScore },
    venue,
    note,
    stats: []
  });

  const setDay = (date, label, matches, moments = []) => {
    board.days[date] = {
      label,
      tag: "32强赛",
      matches,
      standings: {},
      moments
    };
  };

  setDay("2026-06-29", "6月29日", [
    match("can-rsa-r32", "90'", "CAN", "加拿大", "RSA", "南非", "洛杉矶", "加拿大凭借欧斯塔基奥补时第92分钟制胜球 1 比 0 淘汰南非，率先进入 16 强。", "finished", 1, 0)
  ], [
    {
      time: "75'",
      title: "阿方索·戴维斯复出登场",
      body: "戴维斯伤愈后替补登场，给加拿大左路带来速度和压迫，也改变了比赛后段的进攻重心。",
      match: "加拿大 1-0 南非"
    },
    {
      time: "90+2'",
      title: "欧斯塔基奥补时绝杀",
      body: "加拿大在比赛最后阶段持续施压，欧斯塔基奥禁区边缘冷静完成终结，帮助东道主首次闯入世界杯 16 强。",
      match: "加拿大 1-0 南非"
    }
  ]);

  setDay("2026-06-30", "6月30日", [
    match("bra-jpn-r32", "6/30 01:00", "BRA", "巴西", "JPN", "日本", "休斯敦", "32强赛，巴西对阵日本。"),
    match("ger-par-r32", "6/30 04:30", "GER", "德国", "PAR", "巴拉圭", "波士顿", "32强赛，德国对阵巴拉圭。"),
    match("ned-mar-r32", "6/30 09:00", "NED", "荷兰", "MAR", "摩洛哥", "蒙特雷", "32强赛，荷兰对阵摩洛哥，胜者将在 16 强面对加拿大。")
  ]);

  setDay("2026-07-01", "7月1日", [
    match("civ-nor-r32", "7/1 01:00", "CIV", "科特迪瓦", "NOR", "挪威", "达拉斯", "32强赛，科特迪瓦对阵挪威。"),
    match("fra-swe-r32", "7/1 05:00", "FRA", "法国", "SWE", "瑞典", "纽约/新泽西", "32强赛，法国对阵瑞典。"),
    match("mex-ecu-r32", "7/1 09:00", "MEX", "墨西哥", "ECU", "厄瓜多尔", "墨西哥城", "32强赛，墨西哥对阵厄瓜多尔。")
  ]);

  setDay("2026-07-02", "7月2日", [
    match("eng-cod-r32", "7/2 00:00", "ENG", "英格兰", "COD", "刚果民主共和国", "亚特兰大", "32强赛，英格兰对阵刚果民主共和国。"),
    match("bel-sen-r32", "7/2 04:00", "BEL", "比利时", "SEN", "塞内加尔", "西雅图", "32强赛，比利时对阵塞内加尔。"),
    match("usa-bih-r32", "7/2 08:00", "USA", "美国", "BIH", "波黑", "旧金山湾区", "32强赛，美国对阵波黑。")
  ]);

  setDay("2026-07-03", "7月3日", [
    match("esp-aut-r32", "7/3 03:00", "ESP", "西班牙", "AUT", "奥地利", "洛杉矶", "32强赛，西班牙对阵奥地利。"),
    match("por-cro-r32", "7/3 07:00", "POR", "葡萄牙", "CRO", "克罗地亚", "多伦多", "32强赛，葡萄牙对阵克罗地亚。"),
    match("sui-alg-r32", "7/3 11:00", "SUI", "瑞士", "ALG", "阿尔及利亚", "温哥华", "32强赛，瑞士对阵阿尔及利亚。")
  ]);

  setDay("2026-07-04", "7月4日", [
    match("aus-egy-r32", "7/4 02:00", "AUS", "澳大利亚", "EGY", "埃及", "达拉斯", "32强赛，澳大利亚对阵埃及。"),
    match("arg-cpv-r32", "7/4 06:00", "ARG", "阿根廷", "CPV", "佛得角", "迈阿密", "32强赛，阿根廷对阵佛得角。"),
    match("col-gha-r32", "7/4 09:30", "COL", "哥伦比亚", "GHA", "加纳", "堪萨斯城", "32强赛，哥伦比亚对阵加纳。")
  ]);

  board.days = Object.fromEntries(Object.entries(board.days).sort(([a], [b]) => a.localeCompare(b)));
})();
