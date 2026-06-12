window.WORLD_CUP_BOARD_DATA = {
  meta: {
    tournament: "2026 世界杯",
    mode: "公开来源更新",
    updatedAt: "2026-06-12 22:16"
  },
  days: {
    "2026-06-12": {
      label: "6月12日",
      tag: "已赛",
      matches: [
        {
          id: "mex-rsa",
          group: "A组",
          status: "finished",
          minute: "90'",
          home: { code: "MEX", name: "墨西哥", score: 2 },
          away: { code: "RSA", name: "南非", score: 0 },
          venue: "墨西哥城",
          note: "墨西哥在阿兹特克打出强势开局，凭借朱利安-基尼奥内斯和劳尔-希门尼斯的进球拿下揭幕战。",
          stats: [
            { label: "射门", home: 13, away: 7 },
            { label: "控球", home: 58, away: 42 },
            { label: "角球", home: 6, away: 3 }
          ]
        },
        {
          id: "kor-cze",
          group: "A组",
          status: "finished",
          minute: "90'",
          home: { code: "KOR", name: "韩国", score: 2 },
          away: { code: "CZE", name: "捷克", score: 1 },
          venue: "瓜达拉哈拉",
          note: "韩国在先丢球后完成逆转，黄仁范扳平，替补吴贤揆第80分钟打入制胜球。",
          stats: [
            { label: "射门", home: 8, away: 9 },
            { label: "控球", home: 47, away: 53 },
            { label: "犯规", home: 10, away: 8 }
          ]
        }
      ],
      standings: {
        "A组": [
          { team: "墨西哥", played: 1, win: 1, draw: 0, loss: 0, gd: 2, pts: 3 },
          { team: "韩国", played: 1, win: 1, draw: 0, loss: 0, gd: 1, pts: 3 },
          { team: "捷克", played: 1, win: 0, draw: 0, loss: 1, gd: -1, pts: 0 },
          { team: "南非", played: 1, win: 0, draw: 0, loss: 1, gd: -2, pts: 0 }
        ]
      },
      moments: [
        { time: "03:16", title: "墨西哥打开本届世界杯进球账户", body: "朱利安-基尼奥内斯早早破门，让东道主在揭幕战迅速接管气势。", match: "墨西哥 2-0 南非" },
        { time: "04:20", title: "揭幕战火药味升级", body: "南非下半场连续吃到红牌，比赛节奏被身体对抗和判罚彻底改变。", match: "墨西哥 2-0 南非" },
        { time: "04:52", title: "希门尼斯锁定胜局", body: "劳尔-希门尼斯为墨西哥扩大比分，阿兹特克球场的声浪随之推到最高点。", match: "墨西哥 2-0 南非" },
        { time: "10:18", title: "捷克长传手榴弹先声夺人", body: "拉迪斯拉夫-克雷伊奇利用长界外球后的头球机会，为捷克打破僵局。", match: "韩国 2-1 捷克" },
        { time: "10:35", title: "黄仁范冷静扳平", body: "韩国中场持续控球后终于撕开空当，黄仁范把优势转化成比分。", match: "韩国 2-1 捷克" },
        { time: "10:55", title: "吴贤揆替补制胜", body: "第80分钟，吴贤揆接低平传中完成逆转一击，韩国拿到关键三分。", match: "韩国 2-1 捷克" }
      ]
    },
    "2026-06-13": {
      label: "6月13日",
      tag: "小组赛",
      matches: [
        { id: "can-bih", group: "B组", status: "scheduled", minute: "03:00", home: { code: "CAN", name: "加拿大", score: null }, away: { code: "BIH", name: "波黑", score: null }, venue: "多伦多", note: "加拿大迎来队史首个男足世界杯主场比赛，乔纳森-戴维将是进攻焦点。", stats: [] },
        { id: "usa-par", group: "D组", status: "scheduled", minute: "09:00", home: { code: "USA", name: "美国", score: null }, away: { code: "PAR", name: "巴拉圭", score: null }, venue: "洛杉矶", note: "美国队在本土开启世界杯征程，普利西奇、麦肯尼领衔的核心阵容迎来大考。", stats: [] },
        { id: "hai-sco", group: "C组", status: "scheduled", minute: "待定", home: { code: "HAI", name: "海地", score: null }, away: { code: "SCO", name: "苏格兰", score: null }, venue: "波士顿", note: "C组首轮，苏格兰重返世界杯舞台，对阵海地。", stats: [] },
        { id: "aus-tur", group: "D组", status: "scheduled", minute: "待定", home: { code: "AUS", name: "澳大利亚", score: null }, away: { code: "TUR", name: "土耳其", score: null }, venue: "温哥华", note: "D组首轮，澳大利亚与土耳其争夺开局主动权。", stats: [] },
        { id: "bra-mar", group: "C组", status: "scheduled", minute: "待定", home: { code: "BRA", name: "巴西", score: null }, away: { code: "MAR", name: "摩洛哥", score: null }, venue: "纽约/新泽西", note: "巴西首秀对阵摩洛哥，是本轮最受关注的强强对话之一。", stats: [] },
        { id: "qat-sui", group: "B组", status: "scheduled", minute: "待定", home: { code: "QAT", name: "卡塔尔", score: null }, away: { code: "SUI", name: "瑞士", score: null }, venue: "旧金山湾区", note: "B组首轮，瑞士面对卡塔尔。", stats: [] }
      ],
      standings: {
        "B组": [
          { team: "加拿大", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "波黑", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "瑞士", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "卡塔尔", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 }
        ],
        "C组": [
          { team: "巴西", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "摩洛哥", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "海地", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "苏格兰", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 }
        ],
        "D组": [
          { team: "美国", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "巴拉圭", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "澳大利亚", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 },
          { team: "土耳其", played: 0, win: 0, draw: 0, loss: 0, gd: 0, pts: 0 }
        ]
      },
      moments: []
    },
    "2026-06-14": {
      label: "6月14日",
      tag: "小组赛",
      matches: [
        { id: "civ-ecu", group: "E组", status: "scheduled", minute: "待定", home: { code: "CIV", name: "科特迪瓦", score: null }, away: { code: "ECU", name: "厄瓜多尔", score: null }, venue: "费城", note: "E组首轮，科特迪瓦对阵厄瓜多尔。", stats: [] },
        { id: "ger-cur", group: "E组", status: "scheduled", minute: "待定", home: { code: "GER", name: "德国", score: null }, away: { code: "CUW", name: "库拉索", score: null }, venue: "休斯敦", note: "德国首战面对库拉索。", stats: [] },
        { id: "ned-jpn", group: "F组", status: "scheduled", minute: "待定", home: { code: "NED", name: "荷兰", score: null }, away: { code: "JPN", name: "日本", score: null }, venue: "达拉斯", note: "F组首轮，荷兰与日本交锋。", stats: [] },
        { id: "swe-tun", group: "F组", status: "scheduled", minute: "待定", home: { code: "SWE", name: "瑞典", score: null }, away: { code: "TUN", name: "突尼斯", score: null }, venue: "蒙特雷", note: "瑞典对阵突尼斯，争取小组开门红。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-15": {
      label: "6月15日",
      tag: "小组赛",
      matches: [
        { id: "ksa-uru", group: "H组", status: "scheduled", minute: "待定", home: { code: "KSA", name: "沙特", score: null }, away: { code: "URU", name: "乌拉圭", score: null }, venue: "迈阿密", note: "H组首轮，沙特对阵乌拉圭。", stats: [] },
        { id: "esp-cpv", group: "H组", status: "scheduled", minute: "待定", home: { code: "ESP", name: "西班牙", score: null }, away: { code: "CPV", name: "佛得角", score: null }, venue: "亚特兰大", note: "欧洲冠军西班牙迎战首次参赛的佛得角。", stats: [] },
        { id: "irn-nzl", group: "G组", status: "scheduled", minute: "待定", home: { code: "IRN", name: "伊朗", score: null }, away: { code: "NZL", name: "新西兰", score: null }, venue: "洛杉矶", note: "G组首轮，伊朗对阵新西兰。", stats: [] },
        { id: "bel-egy", group: "G组", status: "scheduled", minute: "待定", home: { code: "BEL", name: "比利时", score: null }, away: { code: "EGY", name: "埃及", score: null }, venue: "西雅图", note: "比利时首战面对埃及。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-16": {
      label: "6月16日",
      tag: "小组赛",
      matches: [
        { id: "fra-sen", group: "I组", status: "scheduled", minute: "待定", home: { code: "FRA", name: "法国", score: null }, away: { code: "SEN", name: "塞内加尔", score: null }, venue: "纽约/新泽西", note: "法国首战对阵塞内加尔。", stats: [] },
        { id: "irq-nor", group: "I组", status: "scheduled", minute: "待定", home: { code: "IRQ", name: "伊拉克", score: null }, away: { code: "NOR", name: "挪威", score: null }, venue: "波士顿", note: "I组首轮，伊拉克对阵挪威。", stats: [] },
        { id: "arg-alg", group: "J组", status: "scheduled", minute: "待定", home: { code: "ARG", name: "阿根廷", score: null }, away: { code: "ALG", name: "阿尔及利亚", score: null }, venue: "堪萨斯城", note: "卫冕冠军阿根廷迎来小组赛首秀。", stats: [] },
        { id: "aut-jor", group: "J组", status: "scheduled", minute: "待定", home: { code: "AUT", name: "奥地利", score: null }, away: { code: "JOR", name: "约旦", score: null }, venue: "旧金山湾区", note: "奥地利对阵约旦，J组首轮继续展开。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-17": {
      label: "6月17日",
      tag: "小组赛",
      matches: [
        { id: "gha-pan", group: "L组", status: "scheduled", minute: "待定", home: { code: "GHA", name: "加纳", score: null }, away: { code: "PAN", name: "巴拿马", score: null }, venue: "多伦多", note: "L组首轮，加纳对阵巴拿马。", stats: [] },
        { id: "eng-cro", group: "L组", status: "scheduled", minute: "待定", home: { code: "ENG", name: "英格兰", score: null }, away: { code: "CRO", name: "克罗地亚", score: null }, venue: "达拉斯", note: "英格兰小组赛首战迎来克罗地亚。", stats: [] },
        { id: "por-cod", group: "K组", status: "scheduled", minute: "待定", home: { code: "POR", name: "葡萄牙", score: null }, away: { code: "COD", name: "刚果民主共和国", score: null }, venue: "休斯敦", note: "K组首轮，葡萄牙对阵刚果民主共和国。", stats: [] },
        { id: "uzb-col", group: "K组", status: "scheduled", minute: "待定", home: { code: "UZB", name: "乌兹别克斯坦", score: null }, away: { code: "COL", name: "哥伦比亚", score: null }, venue: "墨西哥城", note: "乌兹别克斯坦首战面对哥伦比亚。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-18": {
      label: "6月18日",
      tag: "小组赛",
      matches: [
        { id: "cze-rsa", group: "A组", status: "scheduled", minute: "待定", home: { code: "CZE", name: "捷克", score: null }, away: { code: "RSA", name: "南非", score: null }, venue: "亚特兰大", note: "A组第二轮，捷克对阵南非。", stats: [] },
        { id: "sui-bih", group: "B组", status: "scheduled", minute: "待定", home: { code: "SUI", name: "瑞士", score: null }, away: { code: "BIH", name: "波黑", score: null }, venue: "洛杉矶", note: "B组第二轮，瑞士对阵波黑。", stats: [] },
        { id: "can-qat", group: "B组", status: "scheduled", minute: "待定", home: { code: "CAN", name: "加拿大", score: null }, away: { code: "QAT", name: "卡塔尔", score: null }, venue: "温哥华", note: "加拿大第二场小组赛面对卡塔尔。", stats: [] },
        { id: "mex-kor", group: "A组", status: "scheduled", minute: "待定", home: { code: "MEX", name: "墨西哥", score: null }, away: { code: "KOR", name: "韩国", score: null }, venue: "瓜达拉哈拉", note: "A组焦点战，墨西哥对阵韩国。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-19": {
      label: "6月19日",
      tag: "小组赛",
      matches: [
        { id: "bra-hai", group: "C组", status: "scheduled", minute: "待定", home: { code: "BRA", name: "巴西", score: null }, away: { code: "HAI", name: "海地", score: null }, venue: "费城", note: "C组第二轮，巴西对阵海地。", stats: [] },
        { id: "sco-mar", group: "C组", status: "scheduled", minute: "待定", home: { code: "SCO", name: "苏格兰", score: null }, away: { code: "MAR", name: "摩洛哥", score: null }, venue: "波士顿", note: "苏格兰与摩洛哥再度在世界杯舞台相遇。", stats: [] },
        { id: "tur-par", group: "D组", status: "scheduled", minute: "待定", home: { code: "TUR", name: "土耳其", score: null }, away: { code: "PAR", name: "巴拉圭", score: null }, venue: "旧金山湾区", note: "D组第二轮，土耳其对阵巴拉圭。", stats: [] },
        { id: "usa-aus", group: "D组", status: "scheduled", minute: "待定", home: { code: "USA", name: "美国", score: null }, away: { code: "AUS", name: "澳大利亚", score: null }, venue: "西雅图", note: "美国第二场小组赛面对澳大利亚。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-20": {
      label: "6月20日",
      tag: "小组赛",
      matches: [
        { id: "ger-civ", group: "E组", status: "scheduled", minute: "待定", home: { code: "GER", name: "德国", score: null }, away: { code: "CIV", name: "科特迪瓦", score: null }, venue: "多伦多", note: "E组第二轮，德国对阵科特迪瓦。", stats: [] },
        { id: "ecu-cur", group: "E组", status: "scheduled", minute: "待定", home: { code: "ECU", name: "厄瓜多尔", score: null }, away: { code: "CUW", name: "库拉索", score: null }, venue: "堪萨斯城", note: "E组第二轮，厄瓜多尔对阵库拉索。", stats: [] },
        { id: "ned-swe", group: "F组", status: "scheduled", minute: "待定", home: { code: "NED", name: "荷兰", score: null }, away: { code: "SWE", name: "瑞典", score: null }, venue: "休斯敦", note: "F组第二轮，荷兰对阵瑞典。", stats: [] },
        { id: "tun-jpn", group: "F组", status: "scheduled", minute: "待定", home: { code: "TUN", name: "突尼斯", score: null }, away: { code: "JPN", name: "日本", score: null }, venue: "蒙特雷", note: "F组第二轮，突尼斯对阵日本。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-21": {
      label: "6月21日",
      tag: "小组赛",
      matches: [
        { id: "uru-cpv", group: "H组", status: "scheduled", minute: "待定", home: { code: "URU", name: "乌拉圭", score: null }, away: { code: "CPV", name: "佛得角", score: null }, venue: "迈阿密", note: "H组第二轮，乌拉圭对阵佛得角。", stats: [] },
        { id: "esp-ksa", group: "H组", status: "scheduled", minute: "待定", home: { code: "ESP", name: "西班牙", score: null }, away: { code: "KSA", name: "沙特", score: null }, venue: "亚特兰大", note: "西班牙第二场小组赛面对沙特。", stats: [] },
        { id: "bel-irn", group: "G组", status: "scheduled", minute: "待定", home: { code: "BEL", name: "比利时", score: null }, away: { code: "IRN", name: "伊朗", score: null }, venue: "洛杉矶", note: "G组第二轮，比利时对阵伊朗。", stats: [] },
        { id: "nzl-egy", group: "G组", status: "scheduled", minute: "待定", home: { code: "NZL", name: "新西兰", score: null }, away: { code: "EGY", name: "埃及", score: null }, venue: "温哥华", note: "G组第二轮，新西兰对阵埃及。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-22": {
      label: "6月22日",
      tag: "小组赛",
      matches: [
        { id: "nor-sen", group: "I组", status: "scheduled", minute: "待定", home: { code: "NOR", name: "挪威", score: null }, away: { code: "SEN", name: "塞内加尔", score: null }, venue: "纽约/新泽西", note: "I组第二轮，挪威对阵塞内加尔。", stats: [] },
        { id: "fra-irq", group: "I组", status: "scheduled", minute: "待定", home: { code: "FRA", name: "法国", score: null }, away: { code: "IRQ", name: "伊拉克", score: null }, venue: "费城", note: "法国第二场小组赛面对伊拉克。", stats: [] },
        { id: "arg-aut", group: "J组", status: "scheduled", minute: "待定", home: { code: "ARG", name: "阿根廷", score: null }, away: { code: "AUT", name: "奥地利", score: null }, venue: "达拉斯", note: "J组第二轮，阿根廷对阵奥地利。", stats: [] },
        { id: "jor-alg", group: "J组", status: "scheduled", minute: "待定", home: { code: "JOR", name: "约旦", score: null }, away: { code: "ALG", name: "阿尔及利亚", score: null }, venue: "旧金山湾区", note: "J组第二轮，约旦对阵阿尔及利亚。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-23": {
      label: "6月23日",
      tag: "小组赛",
      matches: [
        { id: "eng-gha", group: "L组", status: "scheduled", minute: "待定", home: { code: "ENG", name: "英格兰", score: null }, away: { code: "GHA", name: "加纳", score: null }, venue: "波士顿", note: "L组第二轮，英格兰对阵加纳。", stats: [] },
        { id: "pan-cro", group: "L组", status: "scheduled", minute: "待定", home: { code: "PAN", name: "巴拿马", score: null }, away: { code: "CRO", name: "克罗地亚", score: null }, venue: "多伦多", note: "L组第二轮，巴拿马对阵克罗地亚。", stats: [] },
        { id: "por-uzb", group: "K组", status: "scheduled", minute: "待定", home: { code: "POR", name: "葡萄牙", score: null }, away: { code: "UZB", name: "乌兹别克斯坦", score: null }, venue: "休斯敦", note: "K组第二轮，葡萄牙对阵乌兹别克斯坦。", stats: [] },
        { id: "col-cod", group: "K组", status: "scheduled", minute: "待定", home: { code: "COL", name: "哥伦比亚", score: null }, away: { code: "COD", name: "刚果民主共和国", score: null }, venue: "瓜达拉哈拉", note: "K组第二轮，哥伦比亚对阵刚果民主共和国。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-24": {
      label: "6月24日",
      tag: "小组赛",
      matches: [
        { id: "sco-bra", group: "C组", status: "scheduled", minute: "待定", home: { code: "SCO", name: "苏格兰", score: null }, away: { code: "BRA", name: "巴西", score: null }, venue: "迈阿密", note: "C组末轮，苏格兰对阵巴西。", stats: [] },
        { id: "mar-hai", group: "C组", status: "scheduled", minute: "待定", home: { code: "MAR", name: "摩洛哥", score: null }, away: { code: "HAI", name: "海地", score: null }, venue: "亚特兰大", note: "C组末轮，摩洛哥对阵海地。", stats: [] },
        { id: "sui-can", group: "B组", status: "scheduled", minute: "待定", home: { code: "SUI", name: "瑞士", score: null }, away: { code: "CAN", name: "加拿大", score: null }, venue: "温哥华", note: "B组末轮，瑞士对阵加拿大。", stats: [] },
        { id: "bih-qat", group: "B组", status: "scheduled", minute: "待定", home: { code: "BIH", name: "波黑", score: null }, away: { code: "QAT", name: "卡塔尔", score: null }, venue: "西雅图", note: "B组末轮，波黑对阵卡塔尔。", stats: [] },
        { id: "cze-mex", group: "A组", status: "scheduled", minute: "待定", home: { code: "CZE", name: "捷克", score: null }, away: { code: "MEX", name: "墨西哥", score: null }, venue: "墨西哥城", note: "A组末轮，捷克对阵墨西哥。", stats: [] },
        { id: "rsa-kor", group: "A组", status: "scheduled", minute: "待定", home: { code: "RSA", name: "南非", score: null }, away: { code: "KOR", name: "韩国", score: null }, venue: "蒙特雷", note: "A组末轮，南非对阵韩国。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-25": {
      label: "6月25日",
      tag: "小组赛",
      matches: [
        { id: "cur-civ", group: "E组", status: "scheduled", minute: "待定", home: { code: "CUW", name: "库拉索", score: null }, away: { code: "CIV", name: "科特迪瓦", score: null }, venue: "费城", note: "E组末轮，库拉索对阵科特迪瓦。", stats: [] },
        { id: "ecu-ger", group: "E组", status: "scheduled", minute: "待定", home: { code: "ECU", name: "厄瓜多尔", score: null }, away: { code: "GER", name: "德国", score: null }, venue: "纽约/新泽西", note: "E组末轮，厄瓜多尔对阵德国。", stats: [] },
        { id: "jpn-swe", group: "F组", status: "scheduled", minute: "待定", home: { code: "JPN", name: "日本", score: null }, away: { code: "SWE", name: "瑞典", score: null }, venue: "达拉斯", note: "F组末轮，日本对阵瑞典。", stats: [] },
        { id: "tun-ned", group: "F组", status: "scheduled", minute: "待定", home: { code: "TUN", name: "突尼斯", score: null }, away: { code: "NED", name: "荷兰", score: null }, venue: "堪萨斯城", note: "F组末轮，突尼斯对阵荷兰。", stats: [] },
        { id: "tur-usa", group: "D组", status: "scheduled", minute: "待定", home: { code: "TUR", name: "土耳其", score: null }, away: { code: "USA", name: "美国", score: null }, venue: "洛杉矶", note: "D组末轮，土耳其对阵美国。", stats: [] },
        { id: "par-aus", group: "D组", status: "scheduled", minute: "待定", home: { code: "PAR", name: "巴拉圭", score: null }, away: { code: "AUS", name: "澳大利亚", score: null }, venue: "旧金山湾区", note: "D组末轮，巴拉圭对阵澳大利亚。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-26": {
      label: "6月26日",
      tag: "小组赛",
      matches: [
        { id: "nor-fra", group: "I组", status: "scheduled", minute: "待定", home: { code: "NOR", name: "挪威", score: null }, away: { code: "FRA", name: "法国", score: null }, venue: "波士顿", note: "I组末轮，挪威对阵法国。", stats: [] },
        { id: "sen-irq", group: "I组", status: "scheduled", minute: "待定", home: { code: "SEN", name: "塞内加尔", score: null }, away: { code: "IRQ", name: "伊拉克", score: null }, venue: "多伦多", note: "I组末轮，塞内加尔对阵伊拉克。", stats: [] },
        { id: "egy-irn", group: "G组", status: "scheduled", minute: "待定", home: { code: "EGY", name: "埃及", score: null }, away: { code: "IRN", name: "伊朗", score: null }, venue: "西雅图", note: "G组末轮，埃及对阵伊朗。", stats: [] },
        { id: "nzl-bel", group: "G组", status: "scheduled", minute: "待定", home: { code: "NZL", name: "新西兰", score: null }, away: { code: "BEL", name: "比利时", score: null }, venue: "温哥华", note: "G组末轮，新西兰对阵比利时。", stats: [] },
        { id: "cpv-ksa", group: "H组", status: "scheduled", minute: "待定", home: { code: "CPV", name: "佛得角", score: null }, away: { code: "KSA", name: "沙特", score: null }, venue: "休斯敦", note: "H组末轮，佛得角对阵沙特。", stats: [] },
        { id: "uru-esp", group: "H组", status: "scheduled", minute: "待定", home: { code: "URU", name: "乌拉圭", score: null }, away: { code: "ESP", name: "西班牙", score: null }, venue: "瓜达拉哈拉", note: "H组末轮，乌拉圭对阵西班牙。", stats: [] }
      ],
      standings: {},
      moments: []
    },
    "2026-06-27": {
      label: "6月27日",
      tag: "小组赛",
      matches: [
        { id: "pan-eng", group: "L组", status: "scheduled", minute: "待定", home: { code: "PAN", name: "巴拿马", score: null }, away: { code: "ENG", name: "英格兰", score: null }, venue: "纽约/新泽西", note: "L组末轮，巴拿马对阵英格兰。", stats: [] },
        { id: "cro-gha", group: "L组", status: "scheduled", minute: "待定", home: { code: "CRO", name: "克罗地亚", score: null }, away: { code: "GHA", name: "加纳", score: null }, venue: "费城", note: "L组末轮，克罗地亚对阵加纳。", stats: [] },
        { id: "alg-aut", group: "J组", status: "scheduled", minute: "待定", home: { code: "ALG", name: "阿尔及利亚", score: null }, away: { code: "AUT", name: "奥地利", score: null }, venue: "堪萨斯城", note: "J组末轮，阿尔及利亚对阵奥地利。", stats: [] },
        { id: "jor-arg", group: "J组", status: "scheduled", minute: "待定", home: { code: "JOR", name: "约旦", score: null }, away: { code: "ARG", name: "阿根廷", score: null }, venue: "达拉斯", note: "J组末轮，约旦对阵阿根廷。", stats: [] },
        { id: "col-por", group: "K组", status: "scheduled", minute: "待定", home: { code: "COL", name: "哥伦比亚", score: null }, away: { code: "POR", name: "葡萄牙", score: null }, venue: "迈阿密", note: "K组末轮，哥伦比亚对阵葡萄牙。", stats: [] },
        { id: "cod-uzb", group: "K组", status: "scheduled", minute: "待定", home: { code: "COD", name: "刚果民主共和国", score: null }, away: { code: "UZB", name: "乌兹别克斯坦", score: null }, venue: "亚特兰大", note: "K组末轮，刚果民主共和国对阵乌兹别克斯坦。", stats: [] }
      ],
      standings: {},
      moments: []
    }
  }
};
