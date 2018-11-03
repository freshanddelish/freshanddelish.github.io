/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-79238beb200aa5c561ce.js"
  },
  {
    "url": "app-2ea1f31fca4c79105fb7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f1ad39b48f9e7d50eb28.js"
  },
  {
    "url": "index.html",
    "revision": "ed80d0270d7550eb3f4fccdb18eb96d6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e3a59f83a0bbb2e7248abdd1ffd6b3cf"
  },
  {
    "url": "1.8ad45bf5e63033bfed1d.css"
  },
  {
    "url": "0.5d91442f7594c23430c2.css"
  },
  {
    "url": "component---src-pages-index-js-4261812980557c193b5f.js"
  },
  {
    "url": "1-e6147ff32fb3934c87ec.js"
  },
  {
    "url": "2-4f4878669ebb7fb502e0.js"
  },
  {
    "url": "0-245102ec460e814a8169.js"
  },
  {
    "url": "static/d/445/path---index-6a9-BFPDVzI985MZ9yJcpmpeRjiNtRo.json",
    "revision": "2f7ffa4a71e80cb06c5b303f3ea75ebe"
  },
  {
    "url": "component---src-pages-404-js-1c62cde2512dfe35b2f7.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});