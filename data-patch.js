(function applyWorldCupPatch() {
  const board = window.WORLD_CUP_BOARD_DATA;
  if (!board?.days) return;

  board.meta.mode = "小组赛结果与淘汰赛赛程更新";
  board.meta.updatedAt = "2026-06-29 18:20";

  const match = (id, group, minute, homeCode, homeName, awayCode, awayName, venue, note, status = "scheduled", homeScore = null, awayScore = null) => ({
    id,
    group,
    status,
    minute,
    home: { code: homeCode, name: homeName, score: homeScore },
    away: { code: awayCode, name: awayName, score: awayScore },
    venue,
    note,
    stats: []
  });

  const setDay = (date, label, tag, matches, moments = []) => {
    board.days[date] = { label, tag, matches, standings: {}, moments };
  };

  setDay("2026-06-26", "6月26日", "小组赛", [
    match("cur-civ", "E组", "90'", "CUW", "库拉索", "CIV", "科特迪瓦", "费城", "科特迪瓦 2 比 0 击败库拉索，以 E 组第二身份晋级淘汰赛。", "finished", 0, 2),
    match("ecu-ger", "E组", "90'", "ECU", "厄瓜多尔", "GER", "德国", "纽约/新泽西", "厄瓜多尔 2 比 1 击败德国，锁定最佳第三名晋级资格。", "finished", 2, 1),
    match("jpn-swe", "F组", "90'", "JPN", "日本", "SWE", "瑞典", "达拉斯", "日本 1 比 1 战平瑞典，以 F 组第二晋级；瑞典以第三名晋级。", "finished", 1, 1),
    match("tun-ned", "F组", "90'", "TUN", "突尼斯", "NED", "荷兰", "堪萨斯城", "荷兰 3 比 1 击败突尼斯，以 F 组头名进入淘汰赛。", "finished", 1, 3),
    match("tur-usa", "D组", "90'", "TUR", "土耳其", "USA", "美国", "洛杉矶", "土耳其补时绝杀 3 比 2 击败美国，拿到小组第三。", "finished", 3, 2),
    match("par-aus", "D组", "90'", "PAR", "巴拉圭", "AUS", "澳大利亚", "旧金山湾区", "巴拉圭 0 比 0 战平澳大利亚，澳大利亚以 D 组第二晋级。", "finished", 0, 0)
  ]);

  setDay("2026-06-27", "6月27日", "小组赛", [
    match("nor-fra", "I组", "90'", "NOR", "挪威", "FRA", "法国", "波士顿", "法国 4 比 1 击败挪威，以 I 组头名晋级；挪威以小组第二进入 32 强。", "finished", 1, 4),
    match("sen-irq", "I组", "90'", "SEN", "塞内加尔", "IRQ", "伊拉克", "多伦多", "塞内加尔 5 比 0 大胜伊拉克，以小组第三身份晋级。", "finished", 5, 0),
    match("cpv-ksa", "H组", "90'", "CPV", "佛得角", "KSA", "沙特", "休斯敦", "佛得角 0 比 0 战平沙特，以 H 组第二晋级淘汰赛。", "finished", 0, 0),
    match("uru-esp", "H组", "90'", "URU", "乌拉圭", "ESP", "西班牙", "瓜达拉哈拉", "西班牙 1 比 0 击败乌拉圭，以 H 组头名晋级。", "finished", 0, 1),
    match("egy-irn", "G组", "90'", "EGY", "埃及", "IRN", "伊朗", "西雅图", "埃及 1 比 1 战平伊朗，以 G 组第二晋级。", "finished", 1, 1),
    match("nzl-bel", "G组", "90'", "NZL", "新西兰", "BEL", "比利时", "温哥华", "比利时 5 比 1 击败新西兰，以 G 组头名晋级。", "finished", 1, 5)
  ]);

  setDay("2026-06-28", "6月28日", "小组赛", [
    match("pan-eng", "L组", "90'", "PAN", "巴拿马", "ENG", "英格兰", "纽约/新泽西", "英格兰 2 比 0 击败巴拿马，以 L 组头名晋级。", "finished", 0, 2),
    match("cro-gha", "L组", "90'", "CRO", "克罗地亚", "GHA", "加纳", "费城", "克罗地亚 2 比 1 击败加纳，以 L 组第二晋级；加纳以第三名晋级。", "finished", 2, 1),
    match("col-por", "K组", "90'", "COL", "哥伦比亚", "POR", "葡萄牙", "迈阿密", "哥伦比亚 0 比 0 战平葡萄牙，以 K 组头名晋级；葡萄牙小组第二晋级。", "finished", 0, 0),
    match("cod-uzb", "K组", "90'", "COD", "刚果民主共和国", "UZB", "乌兹别克斯坦", "亚特兰大", "刚果民主共和国 3 比 1 击败乌兹别克斯坦，以 K 组第三晋级。", "finished", 3, 1),
    match("alg-aut", "J组", "90'", "ALG", "阿尔及利亚", "AUT", "奥地利", "堪萨斯城", "阿尔及利亚 3 比 3 战平奥地利，奥地利小组第二晋级，阿尔及利亚以第三名晋级。", "finished", 3, 3),
    match("jor-arg", "J组", "90'", "JOR", "约旦", "ARG", "阿根廷", "达拉斯", "阿根廷 3 比 1 击败约旦，以 J 组头名晋级。", "finished", 1, 3)
  ]);

  setDay("2026-06-29", "6月29日", "32强赛", [
    match("can-rsa-r32", "淘汰赛", "90'", "CAN", "加拿大", "RSA", "南非", "洛杉矶", "加拿大凭借欧斯塔基奥补时第92分钟制胜球 1 比 0 淘汰南非，率先进入 16 强。", "finished", 1, 0)
  ], [
    { time: "75'", title: "阿方索·戴维斯复出登场", body: "戴维斯伤愈后替补登场，给加拿大左路带来速度和压迫。", match: "加拿大 1-0 南非" },
    { time: "90+2'", title: "欧斯塔基奥补时绝杀", body: "欧斯塔基奥禁区边缘冷静完成终结，帮助东道主进入 16 强。", match: "加拿大 1-0 南非" }
  ]);

  setDay("2026-06-30", "6月30日", "32强赛", [
    match("bra-jpn-r32", "淘汰赛", "6/30 01:00", "BRA", "巴西", "JPN", "日本", "休斯敦", "32强赛，巴西对阵日本。"),
    match("ger-par-r32", "淘汰赛", "6/30 04:30", "GER", "德国", "PAR", "巴拉圭", "波士顿", "32强赛，德国对阵巴拉圭。"),
    match("ned-mar-r32", "淘汰赛", "6/30 09:00", "NED", "荷兰", "MAR", "摩洛哥", "蒙特雷", "32强赛，荷兰对阵摩洛哥，胜者将在 16 强面对加拿大。")
  ]);

  setDay("2026-07-01", "7月1日", "32强赛", [
    match("civ-nor-r32", "淘汰赛", "7/1 01:00", "CIV", "科特迪瓦", "NOR", "挪威", "达拉斯", "32强赛，科特迪瓦对阵挪威。"),
    match("fra-swe-r32", "淘汰赛", "7/1 05:00", "FRA", "法国", "SWE", "瑞典", "纽约/新泽西", "32强赛，法国对阵瑞典。"),
    match("mex-ecu-r32", "淘汰赛", "7/1 09:00", "MEX", "墨西哥", "ECU", "厄瓜多尔", "墨西哥城", "32强赛，墨西哥对阵厄瓜多尔。")
  ]);

  setDay("2026-07-02", "7月2日", "32强赛", [
    match("eng-cod-r32", "淘汰赛", "7/2 00:00", "ENG", "英格兰", "COD", "刚果民主共和国", "亚特兰大", "32强赛，英格兰对阵刚果民主共和国。"),
    match("bel-sen-r32", "淘汰赛", "7/2 04:00", "BEL", "比利时", "SEN", "塞内加尔", "西雅图", "32强赛，比利时对阵塞内加尔。"),
    match("usa-bih-r32", "淘汰赛", "7/2 08:00", "USA", "美国", "BIH", "波黑", "旧金山湾区", "32强赛，美国对阵波黑。")
  ]);

  setDay("2026-07-03", "7月3日", "32强赛", [
    match("esp-aut-r32", "淘汰赛", "7/3 03:00", "ESP", "西班牙", "AUT", "奥地利", "洛杉矶", "32强赛，西班牙对阵奥地利。"),
    match("por-cro-r32", "淘汰赛", "7/3 07:00", "POR", "葡萄牙", "CRO", "克罗地亚", "多伦多", "32强赛，葡萄牙对阵克罗地亚。"),
    match("sui-alg-r32", "淘汰赛", "7/3 11:00", "SUI", "瑞士", "ALG", "阿尔及利亚", "温哥华", "32强赛，瑞士对阵阿尔及利亚。")
  ]);

  setDay("2026-07-04", "7月4日", "32强赛", [
    match("aus-egy-r32", "淘汰赛", "7/4 02:00", "AUS", "澳大利亚", "EGY", "埃及", "达拉斯", "32强赛，澳大利亚对阵埃及。"),
    match("arg-cpv-r32", "淘汰赛", "7/4 06:00", "ARG", "阿根廷", "CPV", "佛得角", "迈阿密", "32强赛，阿根廷对阵佛得角。"),
    match("col-gha-r32", "淘汰赛", "7/4 09:30", "COL", "哥伦比亚", "GHA", "加纳", "堪萨斯城", "32强赛，哥伦比亚对阵加纳。")
  ]);

  board.days = Object.fromEntries(Object.entries(board.days).sort(([a], [b]) => a.localeCompare(b)));
})();
