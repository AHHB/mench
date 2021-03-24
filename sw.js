const cacheName = 'mench-v1';
const staticAssets = [
  '/',
  '/index.html',
  '/play.html', 
  '/style/css/main.css', 
  '/js/main.js', 
  '/js/vue.js', 
  '/js/app.js', 
  '/js/index.js', 
  '/js/jquery-3.5.1.js', 
  '/img/ahhb_black@80-45.png', 
  '/img/blue.png', '/img/green.png', 
  '/img/red.png', '/img/yellow.png', 
  '/img/t1.png', 
  '/img/t2.png', 
  '/img/t3.png', 
  '/img/t4.png', 
  '/img/t5.png', 
  '/img/t6.png', 
  '/img/gameBackgrund.jpg.png', 
  '/img/stepBackground.jpg.png', 
  '/song/end.mp3', 
  '/song/goToHome.mp3', 
  '/song/goToStart.mp3', 
  '/song/moveTo.mp3', 
  '/song/next.mp3', 
  '/song/roll.mp3',
  '/style/css/fontawesome/webfonts/fa-regular-400.eot',
  '/style/css/fontawesome/webfonts/fa-regular-400.ttf',
  '/style/css/fontawesome/webfonts/fa-regular-400.svg',
  '/style/css/fontawesome/webfonts/fa-regular-400.woff',
  '/style/css/fontawesome/all.min.css',
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
