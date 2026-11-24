import places from './loja.json';
export { places };
export type Locale = 'en'|'es'|'zh';
export type Place = typeof places[number];
export const locales: Locale[] = ['es','en','zh'];
export const site = `https://${process.env.CURRENT_SITE_DOMAIN || "parquejipiro.com"}`;
export const validLocale = (value: string): value is Locale => locales.includes(value as Locale);
export function mapUrl(p: Place) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.name.es + ', ' + p.address + ', Ecuador');
}

export const labels = {
  en: {directory:'Explore Loja from Jipiro',all:'All nearby places',intro:'What to look for',plan:'Plan your visit',facts:'Visitor essentials',name:'Local name',address:'Location',manager:'Visitor information and management',hours:'Opening and access',fees:'Admission and separate charges',walk:'Walking route',photo:'Photographing the site',stay:'Where to stay',reviews:'Map and visitor reviews',source:'Visitor information',credit:'Photograph from the municipal visitor guide',precautions:'Before setting out',faq:'Visitor questions',q1:'Where should I start?',q2:'What should I confirm before travelling?',q3:'Where can I stop for a photograph?',day:'For a walking day in central Loja, stay near Parque Central or San Sebastián. If Jipiro is your first morning stop, compare accommodation near El Valle and confirm the return to the centre.',south:'For a stop in Vilcabamba, staying in the parish reduces the return journey. A city-centre base suits a combined Loja trip if you arrange transport back before departure.',hill:'A base in Loja lets you choose a clear morning for the hillside. Confirm the pickup point with the driver before walking away from it.',go:'Open this specific place in Maps',archive:'The municipal image documents the site when the visitor guide was produced.',next:'Continue exploring nearby'},
  es: {directory:'Descubre Loja desde Jipiro',all:'Todos los lugares cercanos',intro:'Qué observar',plan:'Consejos para la visita',facts:'Información práctica',name:'Nombre local',address:'Ubicación',manager:'Gestión e información al visitante',hours:'Horario y acceso',fees:'Entrada y gastos adicionales',walk:'Recorrido a pie',photo:'Dónde tomar fotografías',stay:'Dónde alojarse',reviews:'Mapa y opiniones de visitantes',source:'Información para visitantes',credit:'Fotografía de la guía del Municipio de Loja',precautions:'Antes de salir',faq:'Preguntas frecuentes',q1:'¿Por dónde empezar?',q2:'¿Qué conviene consultar antes de salir?',q3:'¿Dónde hacer una parada fotográfica?',day:'Para recorrer el centro a pie, busca alojamiento cerca del Parque Central o de San Sebastián. Si empiezas la mañana en Jipiro, compara también el sector El Valle y confirma el regreso al centro.',south:'Alojarse en Vilcabamba acorta el regreso desde esta parroquia. Para combinar la salida con Loja, acuerda el transporte de vuelta antes de partir del centro.',hill:'Una base en Loja permite elegir una mañana despejada para subir. Acuerda el punto de recogida con el conductor antes de alejarte a pie.',go:'Ver este lugar en el mapa',archive:'La imagen municipal documenta el lugar cuando se elaboró la guía.',next:'Más lugares para explorar'},
  zh: {directory:'从希皮罗探索洛哈周边',all:'查看完整周边目录',intro:'现场看点与背景',plan:'游览建议',facts:'基础信息',name:'当地名称',address:'具体位置',manager:'管理与参观咨询',hours:'开放时间与入场条件',fees:'门票与另付费用',walk:'步行游线',photo:'拍照机位',stay:'住宿建议',reviews:'游客评价与交通地图',source:'参观资料',credit:'照片来自洛哈市政府旅游资料',precautions:'出发前须知',faq:'常见问题',q1:'步行应从哪里开始？',q2:'出发前需要核对什么？',q3:'哪里适合停下来拍照？',day:'准备步行游老城，可住中央公园或圣塞巴斯蒂安广场附近。如果早晨第一站安排在希皮罗，也可比较埃尔瓦列片区的住宿，并确认返回市中心的交通。',south:'游览比尔卡班巴教区可住在当地，缩短返程。如果以洛哈市中心为住宿基地，宜在出发前安排好往返交通。',hill:'住在洛哈城区，便于选择能见度好的早晨上山。下车时与司机约定接回地点，再开始步行。',go:'在地图中查看这个地点',archive:'市政府资料照片记录的是该指南编制时的景观。',next:'继续探索周边景点'}
};
const groups=[
 ['san-juan-del-valle','pagoda-jipiro','replica-san-basilio','orillas-del-zamora'],
 ['san-francisco','puerta-de-la-ciudad','plaza-simon-bolivar','mercado-centro-comercial'],
 ['palacio-municipal','catedral-loja','museo-cultura-lojana','museo-conceptas'],
 ['museo-matilde-hidalgo','teatro-bolivar','museo-musica','santo-domingo'],
 ['san-sebastian','calle-lourdes','centro-alfredo-mora-reyes'],
 ['campus-utpl','las-tapillas','el-churo'],
 ['el-pedestal','central-villonaco','carigan-villonaco'],
 ['el-pucara','zamora-huayco','la-tebaida'],
 ['plaza-cultura-universitaria','daniel-alvarez-burneo','yamburara']
];
export function related(p:Place) {
  const slugs = groups.find(g=>g.includes(p.slug)) || [];
  return places.filter(x=>x.slug!==p.slug && slugs.includes(x.slug));
}
