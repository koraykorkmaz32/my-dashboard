self.addEventListener('install', (e) => { console.log('Service Worker Yüklendi'); });
self.addEventListener('fetch', (e) => { 
    // Boş kalsa da handler olduğu için Chrome 'no-op' demez.
    e.respondWith(fetch(e.request));
});
