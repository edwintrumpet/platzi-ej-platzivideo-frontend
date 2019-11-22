const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request
    // Solamente trabajaremos con peticiones get que son las que nos interesa cachear
    if(request.method !== 'GET') {
        return
    }

    // Buscar en caché
    event.respondWith(cachedResponse(request))

    // Actualizar el caché
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/index.css',
        // '/assets/BigBuckBunny.mp4',
        // '/assets/plugins/AutoPause.js',
        // '/assets/plugins/AutoPlay.js'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}