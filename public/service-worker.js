
workbox.skipWaiting();
workbox.clientsClaim();

/*************************************pre defined sw***********************************************/
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
