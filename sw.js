const CACHE_NAME = "slp-tracker-v16";
const URLS_TO_CACHE = [
  "./",
  "./index.html",
  "./history.html",
  "./goalbank.js",
  "./manifest.json",
  "./react.production.min.js",
  "./react-dom.production.min.js",
  "./babel.min.js",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
];

// On install, cache the app shell and dependencies
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache each URL individually so one missing file doesn't block the rest
      return Promise.all(URLS_TO_CACHE.map((u) => cache.add(u).catch(() => {})));
    })
  );
  self.skipWaiting();
});

// Clean up old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Serve from cache first, fall back to network, and update cache in background
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((networkResponse) => {
          // Update cache with fresh copy when online
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse); // offline: fall back to cache

      // Return cached version immediately if we have it, otherwise wait on network
      return cachedResponse || networkFetch;
    })
  );
});
