"use strict";var precacheConfig=[["/index.html","2f64cebef0a6c6e4fa5bd83509b48128"],["/static/css/main.d42ac084.css","d9a1ab7bce61bbb1145c7788e36a900a"],["/static/js/main.0e815732.js","c6312568c5c0ca2b49d6ab5d977bd5e1"],["/static/media/allPackages.2c27495d.png","2c27495df910305e8101c2545170e599"],["/static/media/contactusimg.e8e701a3.jpg","e8e701a353b35f33a3f95094928ff1f7"],["/static/media/her01.e14854a2.png","e14854a235ce344c1ddac59d4bc3ab54"],["/static/media/her02.404b4122.png","404b4122803f695410306896e5f97dce"],["/static/media/herSubImg.13d7dc0b.png","13d7dc0b3659153b4811d7a6c9fb04f1"],["/static/media/him01.05fff45c.png","05fff45c58d1db52beb80e25fbc9cde8"],["/static/media/him02.30558e11.png","30558e118b3b87b9ea863febdb4644c2"],["/static/media/himSubImg.aaf288f1.png","aaf288f14cb7d4b0ebb1b0ee49224d1f"],["/static/media/main01.91709f23.png","91709f23408a43fc9b59d5b82da75a8c"],["/static/media/slider-left-arrow.34a4f31c.svg","34a4f31c87f0e3f9e7c682ebf7eb3664"],["/static/media/slider-right-arrow.5e5b72cc.svg","5e5b72cc72ffd2c9ea04f8a4742dd6b1"],["/static/media/stripe.eff2554d.png","eff2554d576a5ac649113e53df61ef65"],["/static/media/susanna.589ba021.jpg","589ba021047bd791438831d09c0782f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});