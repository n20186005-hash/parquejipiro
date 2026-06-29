#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 Plaza Rodolfo Baquerizo Moreno 的翻译文件
"""

translations_content = '''export type Locale = "zh" | "en" | "es";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[]; buildings: { title: string; items: string[]; conclusion: string } };
  ecology: { title: string; sections: EcologySection[] };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; animals: { title: string; content: string }; bring: { title: string; items: string[] } };
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
    nav: { about: "景点概览", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "瓜亚基尔市中心·绿意盎然的城市绿洲", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "厄瓜多尔瓜亚基尔 · Av. 9 de Octubre", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "Plaza Rodolfo Baquerizo Moreno 位于厄瓜多尔瓜亚基尔市中心，坐落在重要的 9 de Octubre 大道上。这是一个美丽的城市公园，为市民和游客提供了宝贵的绿色空间。公园全天开放（06:00-23:00），是散步、慢跑、休闲娱乐的理想场所。\\n\\n公园以 Rodolfo Baquerizo Moreno 命名，他是厄瓜多尔重要的政治人物。公园内绿树成荫，环境优美，设有步行道和休息区域，是逃离城市喧嚣、享受户外时光的绝佳去处。",
      p2: "作为一个城市公园，这里不需要门票，完全免费向公众开放。无论是清晨散步、午后休憩，还是傍晚慢跑，这里都能满足您的需求。公园位置便利，交通便利，是体验瓜亚基尔市民生活的好去处。",
      highlights: { title: "景点速览", items: ["地理位置: 厄瓜多尔瓜亚基尔市中心，Av. 9 de Octubre", "公园类型: 城市公园，免费对外开放", "开放时间: 每日 06:00 – 23:00", "主要设施: 步行道、绿化区、休息区", "适合活动: 散步、慢跑、休闲、家庭出游"] },
      timeline: { title: "发展历程", events: [
        { period: "建成初期", description: "Plaza Rodolfo Baquerizo Moreno 作为瓜亚基尔的城市公共空间建成，以厄瓜多尔重要政治人物 Rodolfo Baquerizo Moreno 命名。" },
        { period: "发展完善", description: "随着城市的发展，公园逐渐增加绿化面积和步行设施，成为市民日常休闲的重要场所。" },
        { period: "现今", description: "如今，公园已成为瓜亚基尔市中心重要的绿色空间，每天吸引大量市民和游客前来休闲娱乐。" }
      ]},
      management: { title: "公园管理", content: "Plaza Rodolfo Baquerizo Moreno 作为公共城市公园，由瓜亚基尔市政府管理维护。公园免费向公众开放，开放时间为每日 06:00 至 23:00。请爱护公园环境，保持整洁。" }
    },
    // 其他部分需要在实际文件中继续完善
    history: {
      title: "公园简介与城市绿意",
      intro: "Plaza Rodolfo Baquerizo Moreno 是瓜亚基尔市中心一处重要的公共绿色空间。\\n\\n公园以 Rodolfo Baquerizo Moreno（1889-1977）命名，他是厄瓜多尔的政治家，曾于 1944 年至 1946 年担任临时总统。",
      sections: [
        { subtitle: "1. 城市绿洲：繁忙中的宁静", content: "Plaza Rodolfo Baquerizo Moreno 虽然位于繁忙的市中心，但却是一个宁静的绿色空间。高大的树木为游客提供阴凉，步行道宽敞整洁。" },
        { subtitle: "2. 地理位置与交通便利性", content: "公园坐落在瓜亚基尔最重要的主干道之一——9 de Octubre 大道上，交通十分便利。" }
      ],
      buildings: {
        title: "周边景点与延伸探索",
        items: [
          "9 de Octubre 大道: 瓜亚基尔最重要的主干道之一",
          "Malecon 2000（滨海大道）: 距离不远，是瓜亚基尔最著名的滨河景观带",
          "瓜亚基尔市中心: 公园位于市中心，可以顺道探索周边的商业区"
        ],
        conclusion: "Plaza Rodolfo Baquerizo Moreno 作为城市公园，为市民和游客提供了一个放松身心的绿色空间。"
      }
    },
    ecology: {
      title: "城市生态与绿化环境",
      sections: [
        { subtitle: "城市绿化的典范", content: "Plaza Rodolfo Baquerizo Moreno 虽然面积不大，但在城市绿化方面发挥着重要作用。" },
        { subtitle: "城市公园的生态意义", content: "作为城市中的绿色空间，Plaza Rodolfo Baquerizo Moreno 在改善城市微气候、提供休闲空间方面发挥着重要作用。" }
      ]
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "每日 06:00 – 23:00\\n全年无休，节假日正常开放", note: "⚠️ 提醒：公园开放时间较长，但建议白天前往，夜间请注意安全。" },
      price: { title: "费用", content: "免费开放，无需购票", note: "公园完全免费向公众开放，适合各类游客。" },
      duration: { title: "建议游览时长", content: "建议预留 30 分钟 - 1.5 小时", note: "这里适合短暂休息、散步或慢跑。可根据个人需求灵活安排时间。" },
      animals: { title: "公园环境与设施", content: "作为一个城市公园，这里主要是绿化空间和步行道。没有专门的野生动物栖息地，但树木和植被为城市鸟类提供了栖息环境。" },
      bring: { title: "游览建议物品", items: ["舒适的步行鞋", "饮用水（保持水分补充）", "防晒用品（赤道阳光较强）", "相机或手机（记录城市公园美景）", "轻便衣物（热带气候，注意透气）"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场(GYE)约 8 公里，车程约 20-30 分钟。", options: [
        { name: "出租车/网约车(最便捷)", price: "$5 - $10 美元", time: "约 20-30 分钟", steps: ["在机场出口处乘坐出租车或使用网约车应用", "告诉司机前往 Av. 9 de Octubre 的 Plaza Rodolfo Baquerizo Moreno", "公园位于市中心，交通便利"] },
        { name: "公共交通(经济实惠)", price: "$0.35 - $0.50 美元", time: "约 40-50 分钟", steps: ["在机场乘坐前往市中心的公交或班车", "在 9 de Octubre 大道附近下车", "步行即可到达公园"] }
      ]},
      city: { title: "从瓜亚基尔市中心前往", content: "公园位于市中心 Av. 9 de Octubre 上，从任何地点前往都十分方便。", steps: ["导航: 在 Google Maps 中输入 Plaza Rodolfo Baquerizo Moreno Guayaquil", "公交: 乘坐前往 9 de Octubre 大道的公交车，在附近下车", "步行: 如果在市中心，步行即可轻松到达"] },
      selfDrive: { title: "自驾前往", content: "如果从其他城市驾车前来，可沿主要公路前往瓜亚基尔市中心。", steps: ["从基多或昆卡: 乘坐国内航班或长途巴士前往瓜亚基尔", "在瓜亚基尔市内: 导航至 Av. 9 de Octubre", "停车: 周边有付费停车场，建议提前了解"] }
    },
    tips: { title: "游览建议与安全提醒", items: [
      "公园免费开放，无需任何门票或预约",
      "建议白天前往，夜间请注意人身安全",
      "热带气候炎热，请做好防晒和补水措施",
      "公园适合散步、慢跑和休闲，但请注意礼貌，不影响他人",
      "请保持公园整洁，不要乱扔垃圾",
      "可以带小孩前来，但请注意看护",
      "周边有餐厅和商店，可以顺道用餐或购物"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "Plaza Rodolfo Baquerizo Moreno 的开放时间是？", answer: "每日 06:00 - 23:00，全年无休，节假日正常开放。开放时间较长，方便市民在不同时间段前来休闲。" },
      { question: "进入公园需要门票吗？", answer: "不需要。Plaza Rodolfo Baquerizo Moreno 是完全免费向公众开放的的城市公园，无需购票或预约。" },
      { question: "公园以谁命名？", answer: "公园以 Rodolfo Baquerizo Moreno（1889-1977）命名，他是厄瓜多尔的政治家，曾于 1944 年至 1946 年担任临时总统。" },
      { question: "公园适合什么活动？", answer: "公园适合散步、慢跑、休闲放松、家庭出游等活动。作为一个城市公园，这里环境优美，绿树成荫。" },
      { question: "如何前往 Plaza Rodolfo Baquerizo Moreno？", answer: "公园位于瓜亚基尔市中心 Av. 9 de Octubre 上，交通便利。从机场打车约 20-30 分钟。" },
      { question: "公园附近还有哪些值得一游的景点？", answer: "可以顺道参观：Malecon 2000（滨海大道）、9 de Octubre 大道（购物和餐饮）、瓜亚基尔市中心商业区。" }
    ]},
    location: { title: "地图位置", address: "Av. 9 de Octubre, 090313 Guayaquil, 厄瓜多尔\\n(市中心繁华地段，交通便利)", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为城市绿色空间，请与我们一起爱护环境、保护绿地。保持公园整洁，共同维护美好环境。", text: "© 2026 Plaza Rodolfo Baquerizo Moreno 旅行指南 · 保留所有权利。\\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "瓜亚基尔市政府", url: "https://www.guayaquil.gob.ec/" },
      { name: "2000年滨海大道基金会", url: "https://malecon2000.com/" },
      { name: "瓜亚斯省政府", url: "https://guayas.gob.ec/" },
      { name: "瓜亚基尔官方旅游局", url: "http://visitguayaquil.com/" }
    ]}
  },
  // 英文和西班牙文部分需要在实际文件中继续完善
  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Downtown Guayaquil · Green Urban Oasis", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explore the Park" },
    // 英文部分简化，实际需要完整翻译
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview: Urban Park in Downtown Guayaquil",
      p1: "Plaza Rodolfo Baquerizo Moreno is located in downtown Guayaquil, Ecuador, on the important Av. 9 de Octubre avenue. This is a beautiful urban park that provides valuable green space for citizens and visitors.",
      p2: "The park is named after Rodolfo Baquerizo Moreno, an important Ecuadorian political figure. The park features shady trees, beautiful environment, walking paths and rest areas.",
      highlights: { title: "Quick Facts", items: ["Location: Downtown Guayaquil, Ecuador, Av. 9 de Octubre", "Park Type: Urban park, free and open to public", "Opening Hours: Daily 06:00 – 23:00", "Main Facilities: Walking paths, green areas, rest areas", "Suitable Activities: Walking, jogging, leisure, family outings"] },
      timeline: { title: "Development Timeline", events: [
        { period: "Early Establishment", description: "Plaza Rodolfo Baquerizo Moreno was established as a public urban space in Guayaquil." },
        { period: "Development & Improvement", description: "With urban development, the park gradually increased green areas and walking facilities." },
        { period: "Present Day", description: "Today, the park has become an important green space in downtown Guayaquil." }
      ]},
      management: { title: "Park Management", content: "Plaza Rodolfo Baquerizo Moreno is managed and maintained by the Guayaquil Municipal Government. The park is free and open to the public daily." }
    },
    // 其他部分简化
    history: { title: "Park Introduction", intro: "Plaza Rodolfo Baquerizo Moreno is an important public green space in downtown Guayaquil.", sections: [{ subtitle: "Urban Oasis", content: "The park provides a tranquil green space in the busy city center." }, { subtitle: "Location", content: "Located on Av. 9 de Octubre with convenient transportation." }], buildings: { title: "Nearby Attractions", items: ["Malecon 2000", "Av. 9 de Octubre", "Downtown Guayaquil"], conclusion: "A beautiful urban park for relaxation." } },
    ecology: { title: "Urban Ecology", sections: [{ subtitle: "Green Space", content: "The park plays an important role in urban greening." }, { subtitle: "Ecological Significance", content: "Urban parks are important for improving city environment." }] },
    visiting: { title: "Visitor Guide", hours: { title: "Opening Hours", content: "Daily 06:00 – 23:00", note: "Open year-round" }, price: { title: "Cost", content: "Free entry", note: "No tickets required" }, duration: { title: "Duration", content: "30 minutes - 1.5 hours", note: "Flexible timing" }, animals: { title: "Environment", content: "Green space with trees and walking paths." }, bring: { title: "What to Bring", items: ["Comfortable shoes", "Water", "Sun protection", "Camera", "Light clothing"] } },
    transportation: { title: "Getting There", airport: { title: "From Airport", content: "About 8 km from airport", options: [{ name: "Taxi", price: "$5-10", time: "20-30 min", steps: ["Take taxi", "Tell driver destination", "Arrive at park"] }] }, city: { title: "From Downtown", content: "Convenient location", steps: ["Navigate", "Take bus", "Walk"] }, selfDrive: { title: "Driving", content: "Drive to downtown", steps: ["From other cities", "Navigate to Av. 9 de Octubre", "Find parking"] } },
    tips: { title: "Travel Tips", items: ["Free entry", "Daytime visit recommended", "Sun protection needed", "Keep clean", "Family friendly", "Shops nearby", "Stay safe at night"] },
    gallery: { title: "Photo Gallery", viewMore: "View More on Google Maps" },
    reviews: { title: "Reviews", subtitle: "Google Maps reviews", viewMore: "More Reviews" },
    faq: { title: "FAQ", subtitle: "Learn more", items: [{ question: "Opening hours?", answer: "Daily 06:00-23:00" }, { question: "Entrance fee?", answer: "Free" }, { question: "Who is it named after?", answer: "Rodolfo Baquerizo Moreno" }, { question: "What activities?", answer: "Walking, jogging, leisure" }, { question: "How to get there?", answer: "Taxi, bus, or walk from downtown" }, { question: "Nearby attractions?", answer: "Malecon 2000, Av. 9 de Octubre" }] },
    location: { title: "Location", address: "Av. 9 de Octubre, Guayaquil, Ecuador", openMaps: "View on Google Maps" },
    footer: { callToAction: "Care for the environment and protect green areas.", text: "© 2026 Plaza Rodolfo Baquerizo Moreno Travel Guide. Independent travel information project.", made: "Made for explorers.", linksTitle: "Related Links", links: [
      { name: "Ecuador Tourism", url: "https://ecuador.travel/" },
      { name: "Guayaquil Government", url: "https://www.guayaquil.gob.ec/" },
      { name: "Malecon 2000", url: "https://malecon2000.com/" },
      { name: "Guayas Government", url: "https://guayas.gob.ec/" },
      { name: "Visit Guayaquil", url: "http://visitguayaquil.com/" }
    ]}
  },
  es: {
    nav: { about: "Descripción General", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería", reviews: "Reseñas", faq: "Preguntas", location: "Ubicación" },
    hero: { tagline: "Centro de Guayaquil · Oasis Urbano", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explora el Parque" },
    // 西班牙文部分简化
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "Plaza Rodolfo Baquerizo Moreno se encuentra en el centro de Guayaquil, Ecuador. Es un hermoso parque urbano que proporciona un valioso espacio verde.",
      p2: "El parque recibe su nombre de Rodolfo Baquerizo Moreno, una importante figura política ecuatoriana.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Centro de Guayaquil, Av. 9 de Octubre", "Tipo: Parque urbano gratuito", "Horario: Diario 06:00 – 23:00", "Instalaciones: Senderos, áreas verdes", "Actividades: Caminata, trote, ocio"] },
      timeline: { title: "Línea de Tiempo", events: [
        { period: "Establecimiento", description: "El parque se estableció como un espacio público urbano." },
        { period: "Desarrollo", description: "Con el desarrollo urbano, el parque aumentó áreas verdes." },
        { period: "Actualidad", description: "Hoy en día, el parque es un importante espacio verde." }
      ]},
      management: { title: "Gestión", content: "El parque es gestionado por el Municipio de Guayaquil." }
    },
    // 其他部分简化
    history: { title: "Introducción", intro: "Plaza Rodolfo Baquerizo Moreno es un importante espacio verde público.", sections: [{ subtitle: "Oasis Urbano", content: "El parque proporciona un espacio verde tranquilo." }, { subtitle: "Ubicación", content: "Ubicado en Av. 9 de Octubre con transporte conveniente." }], buildings: { title: "Atracciones Cercanas", items: ["Malecon 2000", "Av. 9 de Octubre", "Centro de Guayaquil"], conclusion: "Un hermoso parque urbano para relajarse." } },
    ecology: { title: "Ecología Urbana", sections: [{ subtitle: "Espacio Verde", content: "El parque juega un papel importante en la forestación urbana." }, { subtitle: "Significado Ecológico", content: "Los parques urbanos son importantes para mejorar el entorno." }] },
    visiting: { title: "Guía de Visita", hours: { title: "Horario", content: "Diario 06:00 – 23:00", note: "Abierto todo el año" }, price: { title: "Costo", content: "Entrada gratuita", note: "No se requieren entradas" }, duration: { title: "Duración", content: "30 minutos - 1.5 horas", note: "Tiempo flexible" }, animals: { title: "Ambiente", content: "Espacio verde con árboles y senderos." }, bring: { title: "Qué Traer", items: ["Zapatos cómodos", "Agua", "Protección solar", "Cámara", "Ropa ligera"] } },
    transportation: { title: "Cómo Llegar", airport: { title: "Desde el Aeropuerto", content: "A unos 8 km del aeropuerto", options: [{ name: "Taxi", price: "$5-10", time: "20-30 min", steps: ["Tomar taxi", "Decir destino", "Llegar al parque"] }] }, city: { title: "Desde el Centro", content: "Ubicación conveniente", steps: ["Navegar", "Tomar autobús", "Caminar"] }, selfDrive: { title: "Conduciendo", content: "Conducir al centro", steps: ["Desde otras ciudades", "Navegar a Av. 9 de Octubre", "Encontrar estacionamiento"] } },
    tips: { title: "Consejos", items: ["Entrada gratuita", "Visita diurna recomendada", "Protección solar necesaria", "Mantener limpio", "Adecuado para familias", "Tiendas cercanas", "Cuidado por la noche"] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprende más", items: [{ question: "¿Horario de apertura?", answer: "Diario 06:00-23:00" }, { question: "¿Entrada gratuita?", answer: "Sí, es gratuito" }, { question: "¿Quién le da nombre?", answer: "Rodolfo Baquerizo Moreno" }, { question: "¿Qué actividades?", answer: "Caminata, trote, ocio" }, { question: "¿Cómo llegar?", answer: "Taxi, autobús o caminando desde el centro" }, { question: "¿Atracciones cercanas?", answer: "Malecon 2000, Av. 9 de Octubre" }] },
    location: { title: "Ubicación", address: "Av. 9 de Octubre, Guayaquil, Ecuador", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Cuidar el entorno y proteger las áreas verdes.", text: "© 2026 Guía de Viaje de Plaza Rodolfo Baquerizo Moreno. Proyecto independiente de información turística.", made: "Hecho para exploradores.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Turismo Ecuador", url: "https://ecuador.travel/" },
      { name: "Municipio de Guayaquil", url: "https://www.guayaquil.gob.ec/" },
      { name: "Fundación Malecón 2000", url: "https://malecon2000.com/" },
      { name: "Gobierno de Guayas", url: "https://guayas.gob.ec/" },
      { name: "Turismo Oficial de Guayaquil", url: "http://visitguayaquil.com/" }
    ]}
  }
};
'''

# 写入文件
with open('src/i18n/translations_new.ts', 'w', encoding='utf-8') as f:
    f.write(translations_content)

print("新的翻译文件已生成: src/i18n/translations_new.ts")
print("请检查文件内容，然后替换为原文件。")
