var cacheName = 'mench';

var filesToCache = ['/', '/index.html', '/play.html', '/style/css/main.css', '/js/main.js', '/js/vue.js', '/js/app.js', '/js/index.js', '/js/jquery-3.5.1.js', '/img/ahhb_black@80-45.png', '/img/blue.png', '/img/green.png', '/img/red.png', '/img/yellow.png', '/img/t1.png', '/img/t2.png', '/img/t3.png', '/img/t4.png', '/img/t5.png', '/img/t6.png', '/img/gameBackgrund.jpg.png', '/img/stepBackground.jpg.png', '/song/end.mp3', '/song/goToHome.mp3', '/song/goToStart.mp3', '/song/moveTo.mp3', '/song/next.mp3', '/song/roll.mp3']; /* Start the service worker and cache all of the app's content */

self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
    }));
}); /* Serve cached content when offline */

self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
    }));
});