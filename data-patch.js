(function applyWorldCupDataPatch() {
  const board = window.WORLD_CUP_BOARD_DATA;
  if (!board?.days?.["2026-06-15"]) return;

  board.meta.mode = "手动核对赛果更新";

  const day = board.days["2026-06-15"];
  const updates = {
    "esp-cpv": {
      homeScore: 0,
      awayScore: 0,
      note: "西班牙全场控球占优但始终没能打穿佛得角低位防线，佩德里与亚马尔多次制造威胁均被门将化解；首次亮相世界杯的佛得角守住 0 比 0，拿到队史首个世界杯积分。"
    },
    "bel-egy": {
      homeScore: 1,
      awayScore: 1,
      note: "埃及上半场由埃马姆·阿舒尔轰入远射取得领先，比利时直到第66分钟才借卢卡库登场后制造的穆罕默德·哈尼乌龙球扳平，双方 1 比 1 收场。"
    },
    "ksa-uru": {
      homeScore: 1,
      awayScore: 1,
      note: "沙特上半场由阿卜杜勒拉·阿姆里角球二次进攻补射破门，乌拉圭下半场加强控球后由马克西·阿劳霍第80分钟补射扳平，双方 1 比 1 握手言和。"
    },
    "irn-nzl": {
      homeScore: 2,
      awayScore: 2,
      note: "新西兰由埃利·贾斯特第7分钟先拔头筹，伊朗第32分钟由拉明·雷扎伊安扳平；新西兰下半场再度领先后，伊朗依靠穆罕默德·莫赫比头球追成 2 比 2。"
    }
  };

  day.matches.forEach((match) => {
    const update = updates[match.id];
    if (!update) return;
    match.status = "finished";
    match.minute = "90'";
    match.home.score = update.homeScore;
    match.away.score = update.awayScore;
    match.note = update.note;
  });

  day.standings = {
    "G组": [
      { team: "伊朗", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "新西兰", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "比利时", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "埃及", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 }
    ],
    "H组": [
      { team: "沙特", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "乌拉圭", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "西班牙", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 },
      { team: "佛得角", played: 1, win: 0, draw: 1, loss: 0, gd: 0, pts: 1 }
    ]
  };

  day.moments = [
    {
      time: "18'",
      title: "沃齐尼亚连续化解西班牙攻势",
      body: "西班牙控球和射门占优，但佛得角门将沃齐尼亚多次完成关键扑救，成为球队守住平局的核心人物。",
      match: "西班牙 0-0 佛得角"
    },
    {
      time: "90'",
      title: "佛得角世界杯首秀抢下一分",
      body: "面对欧洲冠军西班牙，佛得角靠严密防线和极高执行力把 0 比 0 守到终场，拿到队史世界杯第一分。",
      match: "西班牙 0-0 佛得角"
    },
    {
      time: "34'",
      title: "阿舒尔远射让埃及领先",
      body: "埃马姆·阿舒尔禁区外起脚轰门，比利时上半场没有射正，埃及一度看到队史世界杯首胜希望。",
      match: "比利时 1-1 埃及"
    },
    {
      time: "66'",
      title: "卢卡库登场即制造扳平",
      body: "卢卡库替补登场后立刻参与禁区冲击，穆罕默德·哈尼自摆乌龙，比利时艰难把比分追成 1 比 1。",
      match: "比利时 1-1 埃及"
    },
    {
      time: "36'",
      title: "阿姆里补射帮助沙特领先",
      body: "沙特利用角球后的二次进攻制造混乱，阿卜杜勒拉·阿姆里抓住反弹球破门，给乌拉圭制造压力。",
      match: "沙特 1-1 乌拉圭"
    },
    {
      time: "80'",
      title: "马克西·阿劳霍救回乌拉圭",
      body: "乌拉圭下半场持续压上，阿劳霍抓住门将扑救后的机会补射破门，帮助球队避免首战失利。",
      match: "沙特 1-1 乌拉圭"
    },
    {
      time: "7'",
      title: "贾斯特为新西兰闪击破门",
      body: "克里斯·伍德送出助攻，埃利·贾斯特开场阶段便打破僵局，新西兰把比赛带入高节奏对攻。",
      match: "伊朗 2-2 新西兰"
    },
    {
      time: "32'",
      title: "雷扎伊安乱战中扳平",
      body: "伊朗在禁区混战中持续施压，拉明·雷扎伊安抓住机会破门，把比分追成 1 比 1。",
      match: "伊朗 2-2 新西兰"
    },
    {
      time: "58'",
      title: "莫赫比头球完成第二次追平",
      body: "新西兰下半场再度领先后，伊朗由戈多斯传中、穆罕默德·莫赫比头球破门，最终 2 比 2 收场。",
      match: "伊朗 2-2 新西兰"
    }
  ];

  const beijingDay = board.days["2026-06-16"] ||= {
    label: "6月16日",
    tag: "小组赛",
    matches: [],
    standings: {},
    moments: []
  };
  beijingDay.standings = day.standings;
  beijingDay.moments = day.moments;
})();
