import Link from 'next/link';
import {labels, places, type Locale} from '@/data/nearby';

export function NearbyDirectory({locale,full=false}:{locale:Locale;full?:boolean}) {
  const t=labels[locale], items=full ? places : places.filter(p=>['san-juan-del-valle','puerta-de-la-ciudad','replica-san-basilio','san-sebastian'].includes(p.slug));
  return <section className="section" aria-label={t.directory}>
    {full ? <h1 className="section-title">{t.directory}</h1> : <h2 className="section-title">{t.directory}</h2>}
    <ul className="nearby-grid">{items.map(p=><li key={p.slug}><Link href={`/${locale}/nearby/${p.slug}`}>
      <img src={p.image} alt="" loading="lazy"/><strong>{p.name[locale]}</strong><span>{p.address}</span>
    </Link></li>)}</ul>
    {!full && <Link className="google-maps-btn" href={`/${locale}/nearby`}>{t.all}</Link>}
  </section>;
}
