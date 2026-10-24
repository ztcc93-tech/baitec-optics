import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../dist/server/index.js';
const env = { ASSETS: { fetch: async () => new Response('', {status:404}) } };
const ctx = {waitUntil(){},passThroughOnException(){}};
const get = path => worker.fetch(new Request(path.startsWith('http') ? path : 'https://baitecoptics.com'+path, {headers:{accept:'text/html'}}),env,ctx);
const duplicates = ['cemented-prism-assemblies-variant-1','cemented-prism-assemblies-variant-2','cemented-prism-assemblies-unnumbered','custom-shaped-prisms-variant-26'];
test('duplicate product URLs permanently redirect and preserve query strings',async()=>{
 for(const slug of duplicates){const r=await get('/products/optical-prisms/'+slug+'?source=test');assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://baitecoptics.com/products/optical-prisms/'+(slug.startsWith('cemented')?'cemented-prism-assemblies':'custom-shaped-prisms-variant-25')+'?source=test');}
});
test('production HTTP redirects to HTTPS without redirecting local development',async()=>{
 const r=await get('http://baitecoptics.com/products?test=1');assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://baitecoptics.com/products?test=1');
 const local=await get('http://localhost/products');assert.equal(local.status,200);
});
test('sitemap URLs render one canonical, title, description and H1 and exclude merged products',async()=>{
 const response=await get('/sitemap.xml');assert.equal(response.status,200);const xml=await response.text();
 const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,63);assert.equal(new Set(urls).size,63);
 for(const slug of duplicates)assert.ok(!xml.includes(slug));
 for(const url of urls){const response=await get(url);assert.equal(response.status,200,url);const html=await response.text();
  const canonical=[...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g)].map(m=>m[1]);assert.deepEqual(canonical,[url],url);
  assert.equal([...html.matchAll(/<h1\b/g)].length,1,url);assert.equal([...html.matchAll(/<title>/g)].length,1,url);assert.match(html,/<meta name="description" content="[^"]+"/);
  assert.ok(!html.includes('Products are being prepared.'));assert.ok(!html.includes('Product details coming soon'));
 }
});
test('GPT-hosted copy identifies the formal domain as canonical',async()=>{
 const response=await get('https://baitec-optics.xxcoco.chatgpt.site/products');const html=await response.text();assert.match(html,/<link rel="canonical" href="https:\/\/baitecoptics.com\/products"/);
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));assert.ok(schemas.some(s=>s['@graph']?.some(n=>n['@type']==='Organization')));
});
test('robots advertises the formal sitemap and permits crawling',async()=>{
 const response=await get('/robots.txt');assert.equal(response.status,200);const text=await response.text();assert.match(text,/Allow: \//);assert.match(text,/Sitemap: https:\/\/baitecoptics.com\/sitemap.xml/);
});
