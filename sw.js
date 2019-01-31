importScripts('/./workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/./1b135404bf2ec2211e26.js",
    "revision": "2e74b039adef0a8cc9da8431781a767f"
  },
  {
    "url": "/./66e8d2ae0141e79cb718.js",
    "revision": "363fec5f17171b70d034d9dfe9be71eb"
  },
  {
    "url": "/./ad651ca057cb4e6fd562.js",
    "revision": "37c5a5867c478d97f8a0aa32ce90a445"
  },
  {
    "url": "/./f372619f7513b5a40394.js",
    "revision": "6bf3f235d81da3d626fb965d69ab95f1"
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
