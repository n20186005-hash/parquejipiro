from pathlib import Path
from playwright.sync_api import sync_playwright
import json
from urllib.parse import urlsplit

base='https://www.parquejipiro.com'
directory='/zh/nearby'
detail=directory+'/san-juan-del-valle'
out=Path('browser-evidence')
out.mkdir(exist_ok=True)
rows=[]

def state(page):
    return page.evaluate("""() => ({
      viewport:document.documentElement.clientWidth, width:document.documentElement.scrollWidth,
      footerText:document.querySelector('footer').innerText,
      footerLinks:[...document.querySelectorAll('footer a')].map(a=>[a.innerText,a.getAttribute('href')])
    })""")

with sync_playwright() as pw:
    browser=pw.chromium.launch(channel='chrome',headless=True)
    for mode,w,h in [('desktop',1440,900),('mobile',390,844)]:
        ctx=browser.new_context(viewport={'width':w,'height':h},is_mobile=mode=='mobile',has_touch=mode=='mobile',device_scale_factor=1,reduced_motion='reduce')
        page=ctx.new_page()
        try:
            page.goto(base+'/zh',wait_until='domcontentloaded',timeout=40000)
            page.evaluate('document.fonts.ready')
            home=state(page)
            for label,path,selector in [('home','/zh',None),('directory',directory,'a.google-maps-btn[href="/zh/nearby"]'),('detail',detail,'main a[href="'+detail+'"]')]:
                if selector:
                    page.locator(selector).first.click()
                    page.wait_for_url('**'+path,wait_until='domcontentloaded')
                    page.evaluate('document.fonts.ready')
                data=state(page)
                row={'mode':mode,'page':label,'url':page.url,'h1':page.locator('h1').inner_text(),'width':data['width'],'viewport':data['viewport'],'noOverflow':data['width']<=data['viewport']+1,'footerMatches':data['footerText']==home['footerText'] and data['footerLinks']==home['footerLinks'],'footerLinks':len(data['footerLinks'])}
                if label=='directory':
                    row['directoryLinks']=len(set(page.locator('main a[href^="/zh/nearby/"]').evaluate_all("(links)=>links.map(a=>a.pathname)")))
                if label=='detail':
                    row['hero']=page.locator('.hero-bg').first.evaluate("""async el => {const url=getComputedStyle(el).backgroundImage.slice(4,-1).replace(/^["']|["']$/g,''); const i=new Image();i.src=url;await i.decode();const b=el.getBoundingClientRect();return {url:i.currentSrc,w:i.naturalWidth,h:i.naturalHeight,boxWidth:b.width,boxHeight:b.height};}""")
                page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
                page.screenshot(path=out/(mode+'-'+label+'.jpg'),type='jpeg',quality=75,animations='disabled')
                if label=='detail':
                    page.locator('footer').scroll_into_view_if_needed()
                    row['footerReachable']=page.locator('footer').evaluate('(f)=>{const b=f.getBoundingClientRect();return b.top<innerHeight&&b.bottom>0&&b.height>0}')
                    page.locator('footer').screenshot(path=out/(mode+'-detail-footer.jpg'),quality=75,animations='disabled')
                rows.append(row)
        finally:
            ctx.close()
            (out/'results.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
    browser.close()
assert len(rows)==6 and all(r['noOverflow'] and r['footerMatches'] and r['footerLinks'] and urlsplit(r['url']).hostname=='www.parquejipiro.com' for r in rows)
for r in rows:
    if r['page']=='directory':assert r['directoryLinks']==31,r
    if r['page']=='detail':assert r['hero']['url'].endswith('/nearby/san-juan-del-valle.webp') and min(r['hero']['w'],r['hero']['h'],r['hero']['boxWidth'],r['hero']['boxHeight'])>0 and r['footerReachable'],r
