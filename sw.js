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
    "url": "/./9ac7bb07457a8a89a1e4.js",
    "revision": "e24529435bd95ee46492641305b6bf05"
  },
  {
    "url": "/./b21e395fb499f998958e.js",
    "revision": "67ca57959b385d8261bf7c2110e7b6b5"
  },
  {
    "url": "/./d32b55516cbb2f1c2475.js",
    "revision": "9eb4ed0df1af4190acccbc56918af744"
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
