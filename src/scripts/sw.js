/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x256.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './hero-image_2.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',

];
