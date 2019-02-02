importScripts('/./workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/./1d492396db74eae72eb8.js",
    "revision": "6631f9ef3cf06dae5f6362be75791232"
  },
  {
    "url": "/./2eb83e1c73227c26e760.js",
    "revision": "19bdeb4c816c7b83fb9ea169cccbe3e3"
  },
  {
    "url": "/./5590a6830e528ac27964.js",
    "revision": "bdeb56c7020b744cfe81118854906675"
  },
  {
    "url": "/./68634194c1929a052a78.js",
    "revision": "e034be7d11152565468d53d891b66732"
  },
  {
    "url": "/./ce567d442013a56ac5de.js",
    "revision": "0c19ced95d55aa4d005ee8149af2de3b"
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
