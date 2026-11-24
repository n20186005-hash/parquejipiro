import {notFound} from 'next/navigation';
import {LangProvider} from '@/components/LangProvider';
import {Nav,Footer} from '@/components/SiteChrome';
import {NearbyDirectory} from '@/components/NearbyDirectory';
import {validLocale,labels,site,locales} from '@/data/nearby';
type Props = {params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){
  const {locale}=await params;if(!validLocale(locale))notFound();
  return {title:labels[locale].directory,alternates:{canonical:`${site}/${locale}/nearby`,languages:Object.fromEntries(locales.map(l=>[l,`${site}/${l}/nearby`]))}};
}
export default async function Directory({params}:Props) {
  const {locale}=await params;if(!validLocale(locale))notFound();
  return <LangProvider initialLocale={locale}><Nav/><main className="nearby-directory"><NearbyDirectory locale={locale} full/></main><Footer/></LangProvider>;
}
