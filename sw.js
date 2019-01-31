importScripts('/./workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/./66e8d2ae0141e79cb718.js",
    "revision": "363fec5f17171b70d034d9dfe9be71eb"
  },
  {
    "url": "/./6b1f14d940ea6f3861a8.js",
    "revision": "e373e354691c5b4b505dabc083c79303"
  },
  {
    "url": "/./90311efd0c03389e26ef.js",
    "revision": "69eb79b0714373a370c8725a115d9c4d"
  },
  {
    "url": "/./eff578baff8f0058c7e6.js",
    "revision": "e93f87d25668142a3916c9540e2e330d"
  },
  {
    "url": "/./fb1cf274c85a792e607a.js",
    "revision": "e0dd64a7789e8798edc9028959b73049"
  }
], {
  "cacheId": "frizadiga-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/./.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
