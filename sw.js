const C='gate-hub-v2',F=['./','index.html','s3plan.js','manifest.webmanifest','icon-192.png','icon-512.png'];
const TAG='<script src="s3plan.js"></script>';
const isPage=q=>q.mode=='navigate'||/(\/|index\.html)$/.test(new URL(q.url).pathname);
const withTab=r=>r.text().then(t=>new Response(t.includes('s3plan.js')?t:t.replace('</body>',TAG+'</body>'),{status:r.status,headers:{'Content-Type':'text/html; charset=utf-8'}}));
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!='GET'||new URL(e.request.url).origin!=location.origin)return;
e.respondWith(fetch(e.request).then(r=>isPage(e.request)&&r.ok?withTab(r):r).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
