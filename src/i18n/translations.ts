export type Locale = "zh" | "en" | "es";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; history: string; ecology: string; culture: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[] };
  ecology: { title: string; sections: EcologySection[] };
  culture: { title: string; intro: string; sections: CultureSection[]; events: { title: string; items: string[] } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; birds: { title: string; content: string }; bring: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", history: "历史沿革", ecology: "生态环境", culture: "文化与活动", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "洛哈市 · 世界文化微缩主题公园", title: "Parque Recreacional Jipiro", subtitle: "厄瓜多尔洛哈 · Velasco Ibarra 1982", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "Parque Recreacional Jipiro 位于厄瓜多尔洛哈市，是一座非常独特且深受家庭欢迎的大型文化主题休闲公园。公园占地面积超过10公顷，在当地原住民语言中，\"Jipiro\"意为\"休息之地\"。\n\n这座公园最大的特色是完美融合了自然风光与世界各地的代表性文化，整体氛围轻松惬意。无论是当地居民还是外来游客，都非常喜欢在周末来这里散步、野餐、亲近自然，或者拍摄富有异国情调的照片。",
      p2: "公园内建有代表世界各大文明的特色建筑复制品，包括代表斯拉夫文化的莫斯科圣瓦西里主教座堂、代表东方文化的中国水上宝塔、欧式拉丁城堡、阿拉伯清真寺，以及厄瓜多尔亚马逊原住民的传统茅草屋。公园中心还有一座宽阔的人工湖，游客可以租用小船游湖，水面上常年有天鹅、鸭子和火烈鸟等水禽栖息。",
      highlights: { title: "景点亮点", items: ["地理位置: 厄瓜多尔洛哈市 Velasco Ibarra 1982", "公园性质: 大型文化主题休闲公园", "占地面积: 超过10公顷", "特色: 世界地标微缩复刻、人工湖、迷你动物园", "评分: Google 4.6分（9,471条评价）"] },
      timeline: { title: "公园发展沿革", events: [
        { period: "规划与建设", description: "Parque Recreacional Jipiro 作为洛哈市重要的文化主题公园项目规划建设，旨在为市民提供一个融合世界文化和自然风光的休闲娱乐场所。" },
        { period: "特色设施建设", description: "公园陆续建成了世界各大文明的特色建筑复制品，包括圣瓦西里主教座堂、中国水上宝塔、欧式拉丁城堡等，成为公园的独特标志。" },
        { period: "持续发展", description: "公园不断完善各类设施，新增迷你动物园、人工湖游船、运动场地等，成为洛哈市最受欢迎的家庭休闲目的地之一，在Google上获得了4.6分的高评分。" }
      ]},
      management: { title: "管理与维护", content: "公园由洛哈市政府相关部门管理维护，是市民重要的公共休闲文化空间。公园免费向公众开放，请爱护公园环境，保持整洁。" }
    },
    history: {
      title: "历史沿革",
      intro: "Parque Recreacional Jipiro 作为洛哈市独特的大型文化主题公园，承载着市民的美好回忆和城市的文化发展愿景。\n\n公园的建设体现了洛哈市政府对市民文化生活质量的重视，为城市增添了独特的文化魅力和绿色空间。",
      sections: [
        { subtitle: "公园建设背景", content: "随着洛哈市城市化进程的推进和市民生活水平的提高，对高质量公共休闲文化空间的需求日益增长。Parque Recreacional Jipiro 应运而生，成为满足市民文化活动需求和展示世界文化的重要场所。" },
        { subtitle: "文化特色形成", content: "公园以\"世界文化微缩\"为特色，建设了代表世界各大文明的特色建筑复制品。这种独特的设计理念不仅为市民提供了休闲娱乐场所，也成为了解世界文化的窗口，体现了洛哈市的开放和包容。\n\n公园的持续发展和完善，也体现了洛哈市政府在城市公共服务和文化建设方面的努力和成就。" }
      ]
    },
    ecology: {
      title: "生态环境",
      sections: [
        { subtitle: "人工湖与水禽生态", content: "公园中心有一座宽阔的人工湖，游客可以租用小船游湖，享受水上乐趣。水面上常年有天鹅、鸭子和火烈鸟等水禽栖息，形成了独特的湖泊生态环境。\n\n人工湖不仅是游客休闲娱乐的好去处，也为水禽提供了良好的栖息地，实现了人与自然的和谐共处。" },
        { subtitle: "绿化与植物", content: "公园内种植了丰富的本土植物和世界各地特色植物，不仅美化了环境，也展示了丰富的植物多样性。绿树成荫的步行道、精心修剪的草坪和四季绽放的花卉，为游客提供了宜人的休闲环境。\n\n公园的绿化设计充分考虑了生态效益、观赏价值和文化展示的结合，既为市民提供了舒适的休闲空间，也成为了城市中的一片绿色肺叶和文化展示窗口。" },
        { subtitle: "迷你动物园", content: "公园内附设了一个迷你动物园，可以观赏到猴子、鸵鸟以及当地特有的眼镜熊等动物。这为游客，特别是儿童，提供了近距离观察和了解动物的机会，是公园的一大特色。\n\n动物园的管理注重动物福利和生态保护教育，让游客在观赏的同时，也能增强保护野生动物的意识。" }
      ]
    },
    culture: {
      title: "文化与社区活动",
      intro: "Parque Recreacional Jipiro 不仅是休闲娱乐场所，更是洛哈市社区文化交流的重要平台和世界文化展示窗口。公园以其独特的文化主题和完善的设施，承载了丰富的社区文化活动。",
      sections: [
        { subtitle: "世界文化微缩展示", content: "公园内建有代表世界各大文明的特色建筑复制品，包括：\n1. 代表斯拉夫文化的莫斯科圣瓦西里主教座堂（其外观甚至巧妙融合了滑梯）\n2. 代表东方文化的中国水上宝塔\n3. 欧式拉丁城堡\n4. 阿拉伯清真寺\n5. 厄瓜多尔亚马逊原住民的传统茅草屋（Choza Shuar）\n\n这些建筑复制品不仅美观独特，也成为游客拍照打卡的热门地点，让游客在公园内就能感受世界文化的多样性。" },
        { subtitle: "社区聚会与家庭活动", content: "公园设有多个适合集会的开放空间，经常有家庭聚会、朋友聚餐和社区活动在此举行。这里宽松的氛围、优美的环境和独特的文化氛围，使其成为亲朋好友欢聚的理想场所。\n\n许多市民选择在周末带上家人来到公园，享受户外用餐、运动游戏的家庭时光，形成了独特的公园文化。" },
        { subtitle: "体育运动文化", content: "公园内配备了完善的体育运动设施，包括篮球场、足球场、滑板场地（BMX赛道），以及一个带有桑拿和土耳其浴的室内恒温游泳池。无论是专业运动还是休闲锻炼，这里都能满足您的需求。\n\n定期举办的业余体育比赛和活动，进一步丰富了公园的文化内涵，使其成为了洛哈市体育文化的重要载体。" }
      ],
      events: { title: "公园文化活动", items: [
        "文化主题游览：欣赏世界各大文明的特色建筑复制品",
        "家庭日活动：周末常有家庭在此举办聚会和庆祝活动",
        "体育比赛：业余足球、篮球、滑板等比赛定期在公园举行",
        "生态观察：在人工湖观察天鹅、鸭子和火烈鸟等水禽",
        "动物园参观：观赏猴子、鸵鸟和当地特有的眼镜熊",
        "户外休闲：市民日常散步、跑步、骑行的热门地点",
        "网吧列车体验：参观独特的\"Cybertren\"火车车厢网红打卡点"
      ]}
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "每日开放\n具体时间请查询当地信息", note: "⚠️ 提醒：建议白天前往，注意安全。部分设施（如室内游泳池）可能有单独的开放时间。" },
      price: { title: "费用", content: "公园免费向公众开放\n部分设施（如游船、迷你动物园）可能单独收费", note: "公园公共区域完全免费开放，无需购票。部分特色设施和活动可能需要单独付费。" },
      duration: { title: "建议游览时长", content: "建议预留 3 – 5 小时", note: "若计划在公园内进行多种活动（如游览文化建筑、游湖、参观动物园、运动等），建议预留半天或更长时间。" },
      birds: { title: "生态观察", content: "公园内的人工湖是水禽的栖息地，常年有天鹅、鸭子和火烈鸟等水禽栖息。在这里，您可以观察到这些美丽的水禽，感受自然与文化的和谐共存。\n\n迷你动物园内有猴子、鸵鸟以及当地特有的眼镜熊等动物，是观察和学习野生动物知识的绝佳场所。\n\n建议您在清晨或傍晚时分前往人工湖，此时水禽活动较为频繁，是观察和拍摄的最佳时机。" },
      bring: { title: "游览建议物品", items: ["舒适的步行鞋（公园面积较大，需要步行）", "饮用水（保持水分补充）", "防晒用品与帽子（洛哈阳光充足）", "野餐垫或毯子（在草坪上休息使用）", "相机或手机（记录世界文化建筑和美好时光）", "轻便衣物（适合运动和户外活动）", "泳衣（如需使用室内恒温游泳池）"] },
      route: { title: "推荐活动路线", content: "我们特别推荐以下公园游览路线：\n\n1. 约09:00 从公园主入口进入，首先参观世界文化建筑微缩区，欣赏圣瓦西里主教座堂、中国水上宝塔等特色建筑\n2. 约10:30 前往人工湖，可以租用小船游湖，观赏天鹅、鸭子和火烈鸟等水禽\n3. 约12:00 在草坪区域享用自带午餐或休息\n4. 约13:30 参观迷你动物园，观赏猴子、鸵鸟和眼镜熊等动物\n5. 约15:00 使用运动场地进行锻炼，或前往室内恒温游泳池游泳\n6. 约17:00 参观独特的\"网吧列车\"（Cybertren）火车车厢\n7. 约18:00 在公园内散步，欣赏日落时分的公园美景\n\n这条路线全长约3-5公里，步行轻松，且能让您充分体验公园的文化、生态和娱乐设施。" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从洛哈机场出发", content: "距离洛哈机场(LOH)约 10 公里，车程约 20-30 分钟。", options: [
        { name: "出租车/网约车(最便捷)", price: "$5 - $10 美元", time: "约 20-30 分钟", steps: ["在机场出口处乘坐出租车或使用网约车应用", "告诉司机前往 Velasco Ibarra 1982 的 Parque Recreacional Jipiro", "公园位于洛哈市区，交通便利"] },
        { name: "公共交通(经济实惠)", price: "$0.25 - $0.50 美元", time: "约 30-40 分钟", steps: ["在机场乘坐前往市中心的公交", "在靠近公园的站点下车", "步行即可到达公园"] }
      ]},
      city: { title: "从洛哈市内前往", content: "公园位于洛哈市区 Velasco Ibarra 1982，从任何地点前往都十分方便。", steps: ["导航: 在 Google Maps 中输入 Parque Recreacional Jipiro Loja", "公交: 乘坐前往市区方向的公交车，在公园附近下车", "步行: 从洛哈市中心步行约15-20分钟即可到达"] },
      selfDrive: { title: "自驾前往", content: "公园周边有停车区域，对自驾游客非常友好。", steps: ["导航至 Velasco Ibarra 1982, Parque Recreacional Jipiro, Loja", "公园周边有停车区域，请遵守当地停车规定", "建议提前了解停车规定和费用"] }
    },
    tips: { title: "游览建议", items: [
      "公园免费开放，部分设施可能需要单独付费",
      "推荐早晨或傍晚时分游览，避开正午烈日",
      "适合家庭出游，建议预留充足时间游玩",
      "请做好防晒和补水措施，建议携带帽子",
      "可以自带野餐食物，在草坪区域享用",
      "请注意保持公园整洁，不要乱扔垃圾",
      "世界文化建筑微缩区是热门拍照打卡地，建议携带相机",
      "如果想参观迷你动物园或使用游船，建议提前了解开放时间和费用",
      "室内恒温游泳池设施完善，如需使用请携带泳衣",
      "建议穿着舒适的运动鞋，方便在公园内活动",
      "别忘了参观独特的\"网吧列车\"（Cybertren），是热门拍照打卡点"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Parque Recreacional Jipiro", items: [
      { question: "Parque Recreacional Jipiro 的开放时间是？", answer: "公园每日开放，具体开放时间建议查询当地信息或致电咨询。一般公共公园都会在白天时段开放，方便市民进行休闲活动。部分设施（如室内游泳池、迷你动物园等）可能有单独的开放时间。" },
      { question: "进入公园需要门票吗？", answer: "公园的公共区域完全免费向公众开放，无需购票或预约。所有市民和游客都可以自由进入，享受公园的各项设施。部分特色设施（如游船、迷你动物园、室内游泳池等）可能需要单独付费。" },
      { question: "公园有哪些特色景点？", answer: "公园的特色景点包括：\n1. 世界文化建筑微缩区——圣瓦西里主教座堂、中国水上宝塔、欧式拉丁城堡、阿拉伯清真寺、亚马逊原住民茅草屋等；\n2. 人工湖——可以租船游湖，观赏天鹅、鸭子和火烈鸟；\n3. 迷你动物园——观赏猴子、鸵鸟、眼镜熊等动物；\n4. 运动设施——篮球场、足球场、滑板场地、室内恒温游泳池等；\n5. 奇特景点——'网吧列车'（Cybertren），一列被改造成上网服务区域的火车车厢；\n6. 巨型国际象棋棋盘——适合家庭互动游戏。" },
      { question: "如何前往 Parque Recreacional Jipiro？", answer: "公园位于洛哈市区 Velasco Ibarra 1982，交通便利。从洛哈机场打车约20-30分钟，市区内可乘坐公交或步行前往。具体导航可在 Google Maps 中搜索公园名称。" },
      { question: "公园附近还有哪些值得一游的景点？", answer: "洛哈市有许多值得游览的景点，包括：\n1. 洛哈市中心——感受当地城市文化；\n2. 洛哈私立技术大学（UTPL）——参观大学校园；\n3. 洛哈周边自然景区——体验厄瓜多尔南部自然风光；\n4. 当地市场和餐厅——品尝正宗厄瓜多尔美食；\n5. 维基百科：洛哈市（西班牙语）——了解城市历史文化；\n6. 洛哈文化之家（Casa de la Cultura）———体验当地艺术文化。" }
    ]},
    location: { title: "地图位置", address: "Velasco Ibarra 1982, Loja, 厄瓜多尔\n(洛哈市区，2QHW+5J)", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为公共休闲文化空间，请与我们一起爱护环境、保护绿地。保持公园整洁，共同维护这一美好的城市休闲文化场所。", text: "© 2026 Parque Recreacional Jipiro 指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播洛哈市公园信息。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "洛哈市政府", url: "https://www.loja.gob.ec/" },
      { name: "厄瓜多尔环境、水资源与生态转型部", url: "https://www.atencionintegral.gob.ec/" },
      { name: "维基百科：洛哈市（西班牙语）", url: "https://es.wikipedia.org/wiki/Loja_(Ecuador)" },
      { name: "洛哈私立技术大学", url: "https://www.utpl.edu.ec/" },
      { name: "厄瓜多尔 iNaturalist 自然观察网络", url: "https://ecuador.inaturalist.org/" }
    ]}
  },

  en: {
    nav: { about: "Overview", history: "History", ecology: "Ecology", culture: "Culture & Activities", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Loja, Ecuador · World Culture Miniature Theme Park", title: "Parque Recreacional Jipiro", subtitle: "Loja, Ecuador · Velasco Ibarra 1982", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Parque Recreacional Jipiro is located in Loja, Ecuador, and is a very unique and popular large-scale cultural theme recreational park for families. The park covers an area of over 10 hectares, and in the local indigenous language, 'Jipiro' means 'place of rest'.\n\nThe biggest feature of this park is the perfect integration of natural scenery and representative cultures from around the world, with a relaxed and pleasant atmosphere. Both local residents and foreign tourists love to come here on weekends to walk, have picnics, get close to nature, or take photos with exotic flavors.",
      p2: "The park features replica buildings representing major world civilizations, including St. Basil's Cathedral representing Slavic culture, the Chinese water pagoda representing Eastern culture, European Latin castles, Arab mosques, and traditional thatched huts (Choza Shuar) of the Ecuadorian Amazon indigenous people. In the center of the park, there is a wide artificial lake where visitors can rent small boats to cruise on the lake, and waterfowl such as swans, ducks, and flamingos inhabit the water surface all year round.",
      highlights: { title: "Highlights", items: ["Location: Velasco Ibarra 1982, Loja, Ecuador", "Character: Large-scale cultural theme recreational park", "Area: Over 10 hectares", "Features: World landmark miniatures, artificial lake, mini zoo", "Rating: Google 4.6/5 (9,471 reviews)"] },
      timeline: { title: "Park Development Timeline", events: [
        { period: "Planning and Construction", description: "Parque Recreacional Jipiro was planned and constructed as an important cultural theme park project in Loja, aimed at providing citizens with a recreational and entertainment venue that integrates world culture and natural scenery." },
        { period: "Feature Facilities Construction", description: "The park gradually built replica buildings representing major world civilizations, including St. Basil's Cathedral, Chinese water pagoda, European Latin castle, etc., which became unique symbols of the park." },
        { period: "Continuous Development", description: "The park continuously improves various facilities, adding mini zoo, artificial lake boating, sports fields, etc., becoming one of the most popular family recreation destinations in Loja, with a high Google rating of 4.6 points." }
      ]},
      management: { title: "Management & Maintenance", content: "The park is managed and maintained by relevant departments of the Loja Municipal Government as an important public recreational and cultural space for citizens. The park is free and open to the public. Please help keep the park clean and tidy." }
    },
    history: {
      title: "History & Development",
      intro: "As a unique large-scale cultural theme park in Loja, Parque Recreacional Jipiro carries citizens' beautiful memories and the city's cultural development vision.\n\nThe construction of the park reflects the Loja Municipal Government's emphasis on citizens' cultural life quality, adding unique cultural charm and green space to the city.",
      sections: [
        { subtitle: "Background of Park Construction", content: "With the advancement of urbanization in Loja and the improvement of citizens' living standards, the demand for high-quality public recreational and cultural spaces has been growing. Parque Recreacional Jipiro emerged as an important venue to meet citizens' cultural activity needs and showcase world culture." },
        { subtitle: "Formation of Cultural Features", content: "The park features 'world culture miniatures' as its theme, constructing replica buildings representing major world civilizations. This unique design concept not only provides citizens with recreational and entertainment venues but also becomes a window to understand world culture, reflecting Loja's openness and inclusiveness.\n\nThe continuous development and improvement of the park also reflects the efforts and achievements of the Loja Municipal Government in urban public services and cultural construction." }
      ]
    },
    ecology: {
      title: "Ecology & Environment",
      sections: [
        { subtitle: "Artificial Lake & Waterfowl Ecology", content: "In the center of the park, there is a wide artificial lake where visitors can rent small boats to cruise on the lake and enjoy water fun. Waterfowl such as swans, ducks, and flamingos inhabit the water surface all year round, forming a unique lake ecological environment.\n\nThe artificial lake is not only a good place for tourists to relax and have fun, but also provides a good habitat for waterfowl, realizing the harmonious coexistence of humans and nature." },
        { subtitle: "Greening & Plants", content: "The park is planted with rich native plants and characteristic plants from around the world, which not only beautifies the environment but also showcases rich plant diversity. Tree-lined walking paths, carefully trimmed lawns, and flowers blooming in all seasons provide visitors with pleasant recreational environments.\n\nThe greening design of the park fully considers the combination of ecological benefits, ornamental value, and cultural display, providing citizens with comfortable recreational spaces while becoming a green lung and cultural display window in the city." },
        { subtitle: "Mini Zoo", content: "The park has a mini zoo where visitors can observe animals such as monkeys, ostriches, and the local endemic spectacled bear. This provides visitors, especially children, with the opportunity to observe and understand animals up close, which is a major feature of the park.\n\nThe management of the zoo focuses on animal welfare and ecological protection education, allowing visitors to enhance their awareness of protecting wildlife while viewing animals." }
      ]
    },
    culture: {
      title: "Culture & Community Activities",
      intro: "Parque Recreacional Jipiro is not only a recreational destination but also an important platform for community cultural exchange and a window for displaying world culture in Loja. With its unique cultural theme and excellent facilities, the park hosts rich community cultural activities.",
      sections: [
        { subtitle: "World Culture Miniature Display", content: "The park features replica buildings representing major world civilizations, including:\n1. St. Basil's Cathedral representing Slavic culture (its appearance even cleverly integrates a slide)\n2. Chinese water pagoda representing Eastern culture\n3. European Latin castle\n4. Arab mosque\n5. Traditional thatched hut (Choza Shuar) of the Ecuadorian Amazon indigenous people\n\nThese replica buildings are not only beautiful and unique, but also become popular photo spots for tourists, allowing visitors to experience the diversity of world culture within the park." },
        { subtitle: "Community Gatherings & Family Activities", content: "The park has multiple open spaces suitable for gatherings, where family reunions, friends' dinners, and community activities are often held. The relaxed atmosphere, beautiful environment, and unique cultural atmosphere make it an ideal place for relatives and friends to gather.\n\nMany citizens choose to bring their families to the park on weekends to enjoy outdoor dining, sports, and games, forming a unique park culture." },
        { subtitle: "Sports Culture", content: "The park is equipped with complete sports facilities, including basketball courts, football fields, skate parks (BMX tracks), and an indoor heated swimming pool with sauna and Turkish bath. Whether it's professional sports or leisure exercise, this can meet your needs.\n\nRegular amateur sports competitions and activities further enrich the cultural connotation of the park, making it an important carrier of Loja's sports culture." }
      ],
      events: { title: "Park Cultural Activities", items: [
        "Cultural theme tour: Appreciate replica buildings of major world civilizations",
        "Family Day Activities: Families often hold gatherings and celebrations in the park on weekends",
        "Sports Competitions: Amateur football, basketball, skateboarding and other competitions are regularly held in the park",
        "Ecological Observation: Observe waterfowl such as swans, ducks, and flamingos at the artificial lake",
        "Zoo Visit: Observe animals such as monkeys, ostriches, and local spectacled bears",
        "Outdoor Recreation: A popular spot for citizens' daily walking, running, and cycling",
        "Cyber Train Experience: Visit the unique 'Cybertren' train carriage photo spot"
      ]}
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Open daily\nPlease check local information for specific hours", note: "⚠️ Note: Daytime visits are recommended. Please be careful. Some facilities (such as indoor swimming pools) may have separate opening hours." },
      price: { title: "Admission", content: "Free and open to all\nSome facilities (such as boat rides, mini zoo) may charge separately", note: "The public areas of the park are completely free. No tickets or reservation required. Some characteristic facilities and activities may require separate payment." },
      duration: { title: "Recommended Duration", content: "Recommended: 3 – 5 hours", note: "If you plan to engage in various activities in the park (such as visiting cultural buildings, boating, visiting the zoo, sports, etc.), consider reserving half a day or longer." },
      birds: { title: "Ecological Observation", content: "The artificial lake in the park is a habitat for waterfowl, with swans, ducks, and flamingos inhabiting the water surface all year round. Here, you can observe these beautiful waterfowl and feel the harmonious coexistence of nature and culture.\n\nThe mini zoo has animals such as monkeys, ostriches, and the local endemic spectacled bear, which is an excellent place to observe and learn about wildlife knowledge.\n\nIt is recommended to visit the artificial lake in the early morning or at dusk when waterfowl activities are more frequent, which are the best times for observation and photography." },
      bring: { title: "Recommended Items", items: ["Comfortable walking shoes (the park is large and requires walking)", "Drinking water (stay hydrated)", "Sun protection & hat (Loja has abundant sunshine)", "Picnic mat or blanket (for resting on the lawn)", "Camera or phone (to record world cultural buildings and wonderful moments)", "Light, breathable clothing (suitable for sports and outdoor activities)", "Swimwear (if using the indoor heated swimming pool)"] },
      route: { title: "Recommended Activity Route", content: "We especially recommend the following park visit route:\n\n1. ~09:00: Enter from the main entrance of the park, first visit the world culture building miniature area, appreciate characteristic buildings such as St. Basil's Cathedral, Chinese water pagoda, etc.\n2. ~10:30: Head to the artificial lake, you can rent a small boat to cruise on the lake, watch waterfowl such as swans, ducks, and flamingos\n3. ~12:00: Enjoy brought lunch or rest in the lawn area\n4. ~13:30: Visit the mini zoo, watch animals such as monkeys, ostriches, and spectacled bears\n5. ~15:00: Use sports fields for exercise, or go to the indoor heated swimming pool for swimming\n6. ~17:00: Visit the unique 'Cyber Train' (Cybertren) train carriage\n7. ~18:00: Walk in the park, enjoy the park's beautiful scenery at sunset\n\nThis route is about 3-5 kilometers total, an easy walk, and allows you to fully experience the park's cultural, ecological, and entertainment facilities." }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Loja Airport", content: "About 10 km from Loja Airport (LOH), approx. 20-30 minutes by car.", options: [
        { name: "Taxi/Ride-sharing (Most Convenient)", price: "$5 - $10 USD", time: "About 20-30 minutes", steps: ["Take a taxi at the airport exit or use ride-sharing app", "Tell the driver to go to Parque Recreacional Jipiro at Velasco Ibarra 1982", "The park is located in downtown Loja with convenient transportation"] },
        { name: "Public Transportation (Economical)", price: "$0.25 - $0.50 USD", time: "About 30-40 minutes", steps: ["Take a bus from the airport to downtown", "Get off at a stop near the park", "Walk to reach the park"] }
      ]},
      city: { title: "From Within Loja", content: "The park is located at Velasco Ibarra 1982 in downtown Loja, very convenient to access from any location.", steps: ["Navigation: Enter Parque Recreacional Jipiro Loja in Google Maps", "Bus: Take a bus heading to downtown, get off near the park", "Walking: About 15-20 minutes walk from downtown Loja"] },
      selfDrive: { title: "Driving", content: "There are parking areas around the park, very friendly for self-driving visitors.", steps: ["Navigate to Velasco Ibarra 1982, Parque Recreacional Jipiro, Loja", "There are parking areas around the park, please follow local parking regulations", "It is recommended to understand parking regulations and fees in advance"] }
    },
    tips: { title: "Travel Tips", items: [
      "Public areas are free, some facilities may require separate payment",
      "Morning or evening visits are recommended to avoid midday sun",
      "Suitable for family outings, recommend reserving sufficient time for fun",
      "Please take sun protection and hydration measures, bring a hat",
      "You can bring your own picnic food and enjoy it in the lawn area",
      "Please keep the park clean and tidy—let's preserve this environment together",
      "World culture building miniature area is a popular photo spot, recommend bringing a camera",
      "If you want to visit the mini zoo or use boat rides, recommend understanding opening hours and fees in advance",
      "Indoor heated swimming pool facilities are complete, please bring swimwear if you need to use it",
      "Comfortable sports shoes are recommended for easy movement in the park",
      "Don't forget to visit the unique 'Cyber Train' (Cybertren), a popular photo spot"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Parque Recreacional Jipiro", items: [
      { question: "What are the opening hours of Parque Recreacional Jipiro?", answer: "The park is open daily. For specific opening hours, it is recommended to check local information or call for inquiry. Generally, public parks open during daytime hours for citizens to engage in recreational activities. Some facilities (such as indoor swimming pools, mini zoos, etc.) may have separate opening hours." },
      { question: "Is there an entrance fee for the park?", answer: "No. The public areas of the park are completely free and open to the public. No tickets or reservation are required. All citizens and tourists can enter freely and enjoy the park's facilities. Some characteristic facilities (such as boat rides, mini zoos, indoor swimming pools, etc.) may require separate payment." },
      { question: "What special attractions does the park have?", answer: "The park's special attractions include:\n1. World Culture Building Miniature Area——St. Basil's Cathedral, Chinese water pagoda, European Latin castle, Arab mosque, Amazon indigenous thatched hut, etc.;\n2. Artificial Lake——can rent boats to cruise on the lake, watch swans, ducks, and flamingos;\n3. Mini Zoo——observe animals such as monkeys, ostriches, spectacled bears, etc.;\n4. Sports Facilities——basketball courts, football fields, skate parks, indoor heated swimming pools, etc.;\n5. Unique Attractions——'Cybertren' (Cyber Train), a train carriage transformed into an internet service area;\n6. Giant Chess Board——suitable for family interactive games." },
      { question: "How to get to Parque Recreacional Jipiro?", answer: "The park is located at Velasco Ibarra 1982 in downtown Loja, with convenient transportation. It's about 20-30 minutes by taxi from Loja Airport. In the city, you can take a bus or walk to get there. For specific navigation, search for the park name in Google Maps." },
      { question: "What other attractions are worth visiting near the park?", answer: "Loja has many attractions worth visiting, including:\n1. Downtown Loja——experience local urban culture;\n2. Universidad Técnica Particular de Loja (UTPL)——visit the university campus;\n3. Natural scenic areas around Loja——experience southern Ecuador's natural beauty;\n4. Local markets and restaurants——taste authentic Ecuadorian cuisine;\n5. Wikipedia: Loja (Spanish)——understand city history and culture;\n6. Casa de la Cultura Lojana——experience local art and culture." }
    ]},
    location: { title: "Map Location", address: "Velasco Ibarra 1982, Loja, Ecuador\n(Downtown Loja, 2QHW+5J)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As a public recreational and cultural space, please join us in caring for the environment and protecting green areas. Keep the park clean and maintain this beautiful urban recreational and cultural space together.", text: "© 2026 Parque Recreacional Jipiro Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Loja's parks. We are not affiliated with the local government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Ecuador National Tourism Board", url: "https://ecuador.travel/" },
      { name: "Loja Municipal Government", url: "https://www.loja.gob.ec/" },
      { name: "Ministry of Environment, Water and Ecological Transition", url: "https://www.atencionintegral.gob.ec/" },
      { name: "Wikipedia: Loja (Spanish)", url: "https://es.wikipedia.org/wiki/Loja_(Ecuador)" },
      { name: "Universidad Técnica Particular de Loja", url: "https://www.utpl.edu.ec/" },
      { name: "iNaturalist Ecuador", url: "https://ecuador.inaturalist.org/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Cultura y Actividades", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Loja, Ecuador · Parque Temático Cultural en Miniatura", title: "Parque Recreacional Jipiro", subtitle: "Loja, Ecuador · Velasco Ibarra 1982", cta: "Explora el Parque" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Parque Recreacional Jipiro se encuentra en Loja, Ecuador, y es un parque recreacional temático cultural muy único y popular para familias. El parque cubre un área de más de 10 hectáreas, y en el idioma indígena local, 'Jipiro' significa 'lugar de descanso'.\n\nLa característica más grande de este parque es la integración perfecta de paisajes naturales y culturas representativas de todo el mundo, con una atmósfera relajada y agradable. Tanto los residentes locales como los turistas extranjeros aman venir aquí los fines de semana para caminar, tener picnics, acercarse a la naturaleza, o tomar fotos con sabores exóticos.",
      p2: "El parque cuenta con edificios réplica que representan las principales civilizaciones mundiales, incluyendo la Catedral de San Basilio que representa la cultura eslava, la pagoda de agua china que representa la cultura oriental, castillos latinos europeos, mezquitas árabes, y chozas de paja tradicionales (Choza Shuar) de los pueblos indígenas amazónicos del Ecuador. En el centro del parque, hay un lago artificial amplio donde los visitantes pueden alquilar botes pequeños para navegar por el lago, y aves acuáticas como cisnes, patos y flamencos habitan la superficie del agua durante todo el año.",
      highlights: { title: "Datos Destacados", items: ["Ubicación: Velasco Ibarra 1982, Loja, Ecuador", "Carácter: Parque recreacional temático cultural de gran escala", "Área: Más de 10 hectáreas", "Características: Miniaturas de hitos mundiales, lago artificial, mini zoológico", "Calificación: Google 4.6/5 (9,471 reseñas)"] },
      timeline: { title: "Línea de Tiempo del Desarrollo del Parque", events: [
        { period: "Planificación y Construcción", description: "El Parque Recreacional Jipiro fue planificado y construido como un importante proyecto de parque temático cultural en Loja, con el objetivo de proporcionar a los ciudadanos un lugar de recreación y entretenimiento que integre la cultura mundial y el paisaje natural." },
        { period: "Construcción de Instalaciones Características", description: "El parque construyó gradualmente edificios réplica que representan las principales civilizaciones mundiales, incluyendo la Catedral de San Basilio, la pagoda de agua china, el castillo latino europeo, etc., que se convirtieron en símbolos únicos del parque." },
        { period: "Desarrollo Continuo", description: "El parque continúa mejorando diversas instalaciones, agregando mini zoológico, navegación en el lago artificial, campos deportivos, etc., convirtiéndose en uno de los destinos de recreación familiar más populares de Loja, con una alta calificación de Google de 4.6 puntos." }
      ]},
      management: { title: "Gestión y Mantenimiento", content: "El parque es gestionado y mantenido por los departamentos relevantes del Municipio de Loja como un importante espacio recreativo y cultural público para los ciudadanos. El parque es gratuito y está abierto al público. Por favor, ayude a mantener el parque limpio y ordenado." }
    },
    history: {
      title: "Historia y Desarrollo",
      intro: "Como un parque temático cultural único y de gran escala en Loja, el Parque Recreacional Jipiro lleva los hermosos recuerdos de los ciudadanos y la visión de desarrollo cultural de la ciudad.\n\nLa construcción del parque refleja la importancia que el Municipio de Loja otorga a la calidad de vida cultural de los ciudadanos, añadiendo un encanto cultural único y espacios verdes a la ciudad.",
      sections: [
        { subtitle: "Antecedentes de la Construcción del Parque", content: "Con el avance de la urbanización en Loja y la mejora de los niveles de vida de los ciudadanos, la demanda de espacios recreativos y culturales públicos de alta calidad ha ido en aumento. El Parque Recreacional Jipiro surgió como un lugar importante para satisfacer las necesidades de actividades culturales de los ciudadanos y mostrar la cultura mundial." },
        { subtitle: "Formación de Características Culturales", content: "El parque cuenta con 'miniaturas de cultura mundial' como su tema, construyendo edificios réplica que representan las principales civilizaciones mundiales. Este concepto de diseño único no solo proporciona a los ciudadanos lugares de recreación y entretenimiento, sino que también se convierte en una ventana para comprender la cultura mundial, reflejando la apertura e inclusión de Loja.\n\nEl desarrollo continuo y la mejora del parque también reflejan los esfuerzos y logros del Municipio de Loja en servicios públicos urbanos y construcción cultural." }
      ]
    },
    ecology: {
      title: "Ecología y Medio Ambiente",
      sections: [
        { subtitle: "Lago Artificial y Ecología de Aves Acuáticas", content: "En el centro del parque, hay un lago artificial amplio donde los visitantes pueden alquilar botes pequeños para navegar por el lago y disfrutar de la diversión acuática. Aves acuáticas como cisnes, patos y flamencos habitan la superficie del agua durante todo el año, formando un entorno ecológico lacustre único.\n\nEl lago artificial no es solo un buen lugar para que los turistas se relajen y diviertan, sino que también proporciona un buen hábitat para las aves acuáticas, realizando la coexistencia armoniosa de humanos y naturaleza." },
        { subtitle: "Áreas Verdes y Plantas", content: "El parque está plantado con ricas plantas nativas y plantas características de todo el mundo, que no solo embellecen el entorno sino que también muestran la rica diversidad vegetal. Senderos peatonales con árboles, césped cuidadosamente recortado y flores que florecen en todas las estaciones proporcionan a los visitantes entornos recreativos agradables.\n\nEl diseño de áreas verdes del parque considera completamente la combinación de beneficios ecológicos, valor ornamental y exhibición cultural, proporcionando a los ciudadanos espacios recreativos cómodos mientras se convierte en un pulmón verde y ventana de exhibición cultural en la ciudad." },
        { subtitle: "Mini Zoológico", content: "El parque tiene un mini zoológico donde los visitantes pueden observar animales como monos, avestruces y el oso de anteojos endémico local. Esto proporciona a los visitantes, especialmente a los niños, la oportunidad de observar y comprender animales de cerca, que es una característica principal del parque.\n\nLa gestión del zoológico se enfoca en el bienestar animal y la educación sobre protección ecológica, permitiendo a los visitantes mejorar su conciencia sobre la protección de la vida silvestre mientras observan animales." }
      ]
    },
    culture: {
      title: "Cultura y Actividades Comunitarias",
      intro: "El Parque Recreacional Jipiro no es solo un destino recreativo, sino también una plataforma importante para el intercambio cultural comunitario y una ventana para mostrar la cultura mundial en Loja. Con su tema cultural único y excelentes instalaciones, el parque alberga ricas actividades culturales comunitarias.",
      sections: [
        { subtitle: "Exhibición de Miniaturas de Cultura Mundial", content: "El parque cuenta con edificios réplica que representan las principales civilizaciones mundiales, incluyendo:\n1. Catedral de San Basilio que representa la cultura eslava (su apariencia incluso integra ingeniosamente un tobogán)\n2. Pagoda de agua china que representa la cultura oriental\n3. Castillo latino europeo\n4. Mezquita árabe\n5. Choza de paja tradicional (Choza Shuar) de los pueblos indígenas amazónicos del Ecuador\n\nEstos edificios réplica no solo son hermosos y únicos, sino que también se convierten en lugares populares para tomar fotos para los turistas, permitiendo a los visitantes experimentar la diversidad de la cultura mundial dentro del parque." },
        { subtitle: "Reuniones Comunitarias y Actividades Familiares", content: "El parque cuenta con múltiples espacios abiertos adecuados para reuniones, donde se realizan con frecuencia reuniones familiares, cenas de amigos y actividades comunitarias. El ambiente relajado, el hermoso entorno y la atmósfera cultural única lo convierten en un lugar ideal para que familiares y amigos se reúnan.\n\nMuchos ciudadanos eligen traer a sus familias al parque los fines de semana para disfrutar de comidas al aire libre, deportes y juegos, formando una cultura de parque única." },
        { subtitle: "Cultura Deportiva", content: "El parque está equipado con instalaciones deportivas completas, incluyendo canchas de baloncesto, campos de fútbol, parques de patinaje (pistas BMX), y una piscina cubierta climatizada con sauna y baño turco. Ya sea deportes profesionales o ejercicio de ocio, esto puede satisfacer sus necesidades.\n\nCompetencias deportivas amateur y actividades regulares enriquecen aún más la connotación cultural del parque, convirtiéndolo en un vehículo importante de la cultura deportiva de Loja." }
      ],
      events: { title: "Actividades Culturales del Parque", items: [
        "Tours temáticos culturales: Apreciar edificios réplica de las principales civilizaciones mundiales",
        "Actividades del Día de la Familia: Las familias a menudo realizan reuniones y celebraciones en el parque los fines de semana",
        "Competencias Deportivas: Competiciones amateur de fútbol, baloncesto, patinaje y otros deportes se realizan regularmente en el parque",
        "Observación Ecológica: Observar aves acuáticas como cisnes, patos y flamencos en el lago artificial",
        "Visita al Zoológico: Observar animales como monos, avestruces y el oso de anteojos local",
        "Recreación al Aire Libre: Un lugar popular para caminatas diarias, trote y ciclismo de los ciudadanos",
        "Experiencia del Tren Cibernético: Visite el único vagón de tren 'Cybertren' para tomar fotos"
      ]}
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Abierto diariamente\nConsulte la información local para horarios específicos", note: "⚠️ Nota: Se recomiendan las visitas diurnas. Por favor, tenga cuidado. Algunas instalaciones (como piscinas cubiertas) pueden tener horarios de apertura separados." },
      price: { title: "Entrada", content: "Gratuito y abierto a todos\nAlgunas instalaciones (como paseos en bote, mini zoológico) pueden cobrar separadamente", note: "Las áreas públicas del parque son completamente gratuitas. No se requieren entradas o reservas. Algunas instalaciones características y actividades pueden requerir pago separado." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 3 – 5 horas", note: "Si planea participar en varias actividades en el parque (como visitar edificios culturales, navegar, visitar el zoológico, deportes, etc.), considere reservar medio día o más." },
      birds: { title: "Observación Ecológica", content: "El lago artificial en el parque es un hábitat para aves acuáticas, con cisnes, patos y flamencos habitando la superficie del agua durante todo el año. Aquí, puede observar estas hermosas aves acuáticas y sentir la coexistencia armoniosa de la naturaleza y la cultura.\n\nEl mini zoológico tiene animales como monos, avestruces y el oso de anteojos endémico local, que es un excelente lugar para observar y aprender sobre el conocimiento de la vida silvestre.\n\nSe recomienda visitar el lago artificial en la madrugada o al anochecer cuando las actividades de las aves acuáticas son más frecuentes, que son los mejores momentos para la observación y fotografía." },
      bring: { title: "Artículos Recomendados", items: ["Zapatos cómodos para caminar (el parque es grande y requiere caminar)", "Agua potable (mantenerse hidratado)", "Protección solar y sombrero (Loja tiene abundante sol)", "Estera o manta de picnic (para descansar en el césped)", "Cámara o teléfono (para registrar edificios culturales mundiales y momentos maravillosos)", "Ropa ligera y transpirable (adecuada para deportes y actividades al aire libre)", "Traje de baño (si usa la piscina cubierta climatizada)"] },
      route: { title: "Ruta de Actividades Recomendada", content: "Recomendamos especialmente la siguiente ruta de visita al parque:\n\n1. ~09:00: Ingrese desde la entrada principal del parque, primero visite el área de miniaturas de edificios de cultura mundial, aprecie edificios característicos como la Catedral de San Basilio, la pagoda de agua china, etc.\n2. ~10:30: Diríjase al lago artificial, puede alquilar un bote pequeño para navegar por el lago, mirar aves acuáticas como cisnes, patos y flamencos\n3. ~12:00: Disfrute del almuerzo traído o descanse en el área de césped\n4. ~13:30: Visite el mini zoológico, mire animales como monos, avestruces y osos de anteojos\n5. ~15:00: Use campos deportivos para hacer ejercicio, o diríjase a la piscina cubierta climatizada para nadar\n6. ~17:00: Visite el único 'Tren Cibernético' (Cybertren) vagón de tren\n7. ~18:00: Camine en el parque, disfrute del hermoso paisaje del parque al atardecer\n\nEsta ruta tiene un total de aproximadamente 3-5 kilómetros, una caminata fácil, y le permite experimentar completamente las instalaciones culturales, ecológicas y de entretenimiento del parque." }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Loja", content: "A unos 10 km del Aeropuerto de Loja (LOH), aproximadamente 20-30 minutos en automóvil.", options: [
        { name: "Taxi/Movilidad (Más Conveniente)", price: "$5 - $10 USD", time: "Aproximadamente 20-30 minutos", steps: ["Tomar un taxi en la salida del aeropuerto o usar aplicación de movilidad", "Decirle al conductor que vaya al Parque Recreacional Jipiro en Velasco Ibarra 1982", "El parque está ubicado en el centro de Loja con transporte conveniente"] },
        { name: "Transporte Público (Económico)", price: "$0.25 - $0.50 USD", time: "Aproximadamente 30-40 minutos", steps: ["Tomar un autobús desde el aeropuerto al centro", "Bajar en una parada cerca del parque", "Caminar para llegar al parque"] }
      ]},
      city: { title: "Desde el Interior de Loja", content: "El parque está ubicado en Velasco Ibarra 1982 en el centro de Loja, muy conveniente para acceder desde cualquier ubicación.", steps: ["Navegación: Ingresar Parque Recreacional Jipiro Loja en Google Maps", "Autobús: Tomar un autobús que va al centro, bajar cerca del parque", "Caminando: Aproximadamente 15-20 minutos a pie desde el centro de Loja"] },
      selfDrive: { title: "Conduciendo", content: "Hay áreas de estacionamiento alrededor del parque, muy amigable para visitantes que conducen.", steps: ["Navegar a Velasco Ibarra 1982, Parque Recreacional Jipiro, Loja", "Hay áreas de estacionamiento alrededor del parque, por favor siga las regulaciones locales de estacionamiento", "Se recomienda entender las regulaciones y tarifas de estacionamiento con anticipación"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Las áreas públicas son gratuitas, algunas instalaciones pueden requerir pago separado",
      "Se recomiendan las visitas matutinas o vespertinas para evitar el sol del mediodía",
      "Adecuado para salidas familiares, recomiendo reservar tiempo suficiente para diversión",
      "Por favor tome medidas de protección solar e hidratación, traiga un sombrero",
      "Puede traer su propia comida de picnic y disfrutarla en el área de césped",
      "Por favor mantenga el parque limpio y ordenado—preservemos juntos este entorno",
      "El área de miniaturas de edificios culturales mundiales es un lugar popular para tomar fotos, recomiendo traer una cámara",
      "Si desea visitar el mini zoológico o usar paseos en bote, recomiendo entender los horarios de apertura y tarifas con anticipación",
      "Las instalaciones de la piscina cubierta climatizada están completas, por favor traiga traje de baño si necesita usarla",
      "Se recomiendan zapatos deportivos cómodos para un fácil movimiento en el parque",
      "No olvide visitar el único 'Tren Cibernético' (Cybertren), un lugar popular para tomar fotos"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Parque Recreacional Jipiro", items: [
      { question: "¿Cuál es el horario de apertura del Parque Recreacional Jipiro?", answer: "El parque está abierto diariamente. Para horarios específicos de apertura, se recomienda consultar información local o llamar para consulta. Generalmente, los parques públicos abren durante el horario diurno para que los ciudadanos realicen actividades recreativas. Algunas instalaciones (como piscinas cubiertas, mini zoológicos, etc.) pueden tener horarios de apertura separados." },
      { question: "¿Hay tarifa de entrada al parque?", answer: "No. Las áreas públicas del parque son completamente gratuitas y están abiertas al público. No se requieren entradas o reservas. Todos los ciudadanos y turistas pueden entrar libremente y disfrutar de las instalaciones del parque. Algunas instalaciones características (como paseos en bote, mini zoológicos, piscinas cubiertas, etc.) pueden requerir pago separado." },
      { question: "¿Qué atracciones especiales tiene el parque?", answer: "Las atracciones especiales del parque incluyen:\n1. Área de Miniaturas de Edificios Culturales Mundiales——Catedral de San Basilio, pagoda de agua china, castillo latino europeo, mezquita árabe, choza de paja amazónica, etc.;\n2. Lago Artificial——puede alquilar botes para navegar por el lago, mirar cisnes, patos y flamencos;\n3. Mini Zoológico——observar animales como monos, avestruces, osos de anteojos, etc.;\n4. Instalaciones Deportivas——canchas de baloncesto, campos de fútbol, parques de patinaje, piscinas cubiertas climatizadas, etc.;\n5. Atracciones Únicas——'Cybertren' (Tren Cibernético), un vagón de tren transformado en un área de servicios de internet;\n6. Tablero de Ajedrez Gigante——adecuado para juegos interactivos familiares." },
      { question: "¿Cómo llegar al Parque Recreacional Jipiro?", answer: "El parque está ubicado en Velasco Ibarra 1982 en el centro de Loja, con transporte conveniente. Unos 20-30 minutos en taxi desde el Aeropuerto de Loja. En la ciudad, puede tomar un autobús o caminar para llegar. Para navegación específica, busque el nombre del parque en Google Maps." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del parque?", answer: "Loja tiene muchas atracciones que vale la pena visitar, incluyendo:\n1. Centro de Loja——experimente la cultura urbana local;\n2. Universidad Técnica Particular de Loja (UTPL)——visite el campus universitario;\n3. Áreas escénicas naturales alrededor de Loja——experimente la belleza natural del sur de Ecuador;\n4. Mercados locales y restaurantes——pruebe auténtica cocina ecuatoriana;\n5. Wikipedia: Loja (Español)——comprenda la historia y cultura de la ciudad;\n6. Casa de la Cultura Lojana——experimente el arte y la cultura locales." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Velasco Ibarra 1982, Loja, Ecuador\n(Centro de Loja, 2QHW+5J)", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como un espacio recreativo y cultural público, por favor únanse a nosotros para cuidar el entorno y proteger las áreas verdes. Mantenga el parque limpio y mantenga este hermoso espacio recreativo y cultural urbano juntos.", text: "© 2026 Guía del Parque Recreacional Jipiro · Todos los derechos reservados.\nEste sitio web es un proyecto de guía independiente de terceros dedicado a compartir información precisa sobre los parques de Loja. No estamos afiliados con el gobierno local ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto de guía independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Dirección Nacional de Turismo", url: "https://ecuador.travel/" },
      { name: "Municipio de Loja", url: "https://www.loja.gob.ec/" },
      { name: "Ministerio del Ambiente, Agua y Transición Ecológica", url: "https://www.atencionintegral.gob.ec/" },
      { name: "Wikipedia: Loja (Español)", url: "https://es.wikipedia.org/wiki/Loja_(Ecuador)" },
      { name: "Universidad Técnica Particular de Loja", url: "https://www.utpl.edu.ec/" },
      { name: "iNaturalist Ecuador", url: "https://ecuador.inaturalist.org/" }
    ]}
  }
};
