let t="static-v1";self.addEventListener("install",()=>{event.waitUntil(caches.open(t).then(function(e){return e.addAll([{"revision":null,"url":"assets/index-D86BzRV_.js"},{"revision":null,"url":"assets/index-k8EcErSG.css"},{"revision":null,"url":"assets/ItemView-Vm4I3x9v.css"},{"revision":null,"url":"assets/ItemView-zmwi52Y8.js"},{"revision":"4d039a527e8976dc1a3f3f2fde049e73","url":"css/all.css"},{"revision":"c325be79a5ecca85d68eb9e5b65a547a","url":"css/all.min.css"},{"revision":"12d2224c6f52c19378d835b851669854","url":"css/brands.css"},{"revision":"77637029fca024667114fcdf5bbfbbf7","url":"css/brands.min.css"},{"revision":"fa57a4c6d35a4c84ef393d5427cee339","url":"css/fontawesome.css"},{"revision":"15e623f974855bfda674d1d6f12d2911","url":"css/fontawesome.min.css"},{"revision":"1722dc3a75db9fa31b371b13b0adee1e","url":"css/regular.css"},{"revision":"42d09661822972ebc5c2feb5bd9cc8ef","url":"css/regular.min.css"},{"revision":"56930668cd8081f16592ff937b59adab","url":"css/solid.css"},{"revision":"80488c4b5a3c971b1f6fcb015fdf54e3","url":"css/solid.min.css"},{"revision":"89b153196c7209f963b9c1db601bfb0a","url":"css/svg-with-js.css"},{"revision":"a481aa60d8a2a776b01eaebf8b73ab0a","url":"css/svg-with-js.min.css"},{"revision":"1f0fc2ce0e52cb927473d48ce178694d","url":"css/v4-font-face.css"},{"revision":"18ff4381fee854799b17c2d1fd1f5f98","url":"css/v4-font-face.min.css"},{"revision":"3c287201d94b1d847e02aa01d3770820","url":"css/v4-shims.css"},{"revision":"b179b3372e22ec97992038b52be36c15","url":"css/v4-shims.min.css"},{"revision":"5beeb24a335757790070ba6db79d7127","url":"css/v5-font-face.css"},{"revision":"325e2eaece3f635dca19d7a103066e17","url":"css/v5-font-face.min.css"},{"revision":"db4798e99e816f893726d222b707ece6","url":"index.html"},{"revision":"402b66900e731ca748771b6fc5e7a068","url":"registerSW.js"},{"revision":"5d9383342b387e2a8e31a86c7b7646c0","url":"pwa-192x192.png"},{"revision":"9a9a87318b5ec1682d177e054172ddba","url":"pwa-512x512.png"},{"revision":"894eccd78594f3f3f5fb36276b34ed1b","url":"manifest.webmanifest"}])}))});self.addEventListener("activate",()=>{});self.addEventListener("fetch",()=>{event.respondWith(fetch(event.request).catch(function(){return caches.match(event.request)}))});
