import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Nav, Footer} from '@/components/SiteChrome';
import {LangProvider} from '@/components/LangProvider';
import {labels, locales, mapUrl, places, related, site, validLocale} from '@/data/nearby';

type Props={params:Promise<{locale:string;slug:string}>};
export function generateStaticParams(){return places.map(p=>({slug:p.slug}));}
async function getPage({params}:Props) {
  const {locale,slug}=await params;
  const p=places.find(place=>place.slug===slug);
  if(!p || !validLocale(locale))notFound();
  return {p,locale,t:labels[locale]};
}
export async function generateMetadata(props:Props) {
  const {p,locale}=await getPage(props);
  return {title:p.name[locale],description:p.intro[locale],alternates:{
    canonical:`${site}/${locale}/nearby/${p.slug}`,
    languages:Object.fromEntries(locales.map(l=>[l,`${site}/${l}/nearby/${p.slug}`]))
  },openGraph:{title:p.name[locale],description:p.intro[locale],images:[{url:encodeURI(site+p.image),alt:p.name[locale]}]}};
}
export default async function PlacePage(props:Props){
  const {p,locale,t}=await getPage(props);const map=mapUrl(p),walk=p.walk[locale];
  const stay=p.slug==='yamburara'?t.south:['view','energy'].includes(p.kind)?t.hill:t.day;
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}>
    <section className="hero nearby-hero"><div className="hero-bg" style={{backgroundImage:`url("${p.image}")`}}/><div className="hero-overlay"/>
      <div className="hero-content"><Link href={`/${locale}/nearby`} className="hero-tagline">{t.directory}</Link><h1 className="hero-title">{p.name[locale]}</h1>
        <p className="hero-subtitle">{p.intro[locale].split(locale==='zh'?'。':'. ')[0]}</p><p>{p.hours[locale]}</p><a className="hero-cta" href={map}>{t.reviews}</a></div>
    </section>
    <article className="section nearby-guide">
      <h2>{t.intro}</h2><p>{p.intro[locale]}</p>
      <h2>{t.facts}</h2><table><tbody>{[[t.name,p.name.es],[t.address,p.address],[t.manager,p.manager]].map(([key,value])=><tr key={key}><th scope="row">{key}</th><td>{value}</td></tr>)}</tbody></table>
      <h2>{t.hours}</h2><p>{p.hours[locale]}</p><h2>{t.fees}</h2><p>{p.fee[locale]}</p>
      <h2>{t.walk}</h2><ol>{walk.map(step=><li key={step}>{step}</li>)}</ol>
      <h2>{t.photo}</h2><p>{p.photoTip[locale]}</p>
      <figure><img src={p.image} alt={p.name[locale]} loading="lazy"/><figcaption>{p.photoSource ? <><a href={p.photoSource}>{t.credit}</a> · {t.archive}</> : p.name[locale]}</figcaption></figure>
      <h2>{t.stay}</h2><p>{stay}</p><h2>{t.faq}</h2>
      {[p.faq[locale],[t.q1,walk[0]],[t.q2,p.hours[locale]+' '+p.fee[locale]],[t.q3,p.photoTip[locale]]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <h2>{t.reviews}</h2><p>{p.address}</p><a href={map}>{t.go}</a> · <a href={p.source}>{t.source}</a>
      <section><h2>{t.next}</h2><ul>{related(p).map(other=><li key={other.slug}><Link href={`/${locale}/nearby/${other.slug}`}>{other.name[locale]}</Link></li>)}</ul><Link href={`/${locale}/nearby`}>{t.all}</Link></section>
    </article></main><Footer/></LangProvider>;
}
