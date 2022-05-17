globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { createStorage } from 'unstorage';
import { withQuery, withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"hola":"chau"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return event.req.originalUrl || event.req.url;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/ImagePreloader-fd33fb42.mjs": {
    "type": "application/javascript",
    "etag": "\"6c9-YsycH+8b2NqSDlOoD1js+W6ssRw\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/ImagePreloader-fd33fb42.mjs"
  },
  "/_nuxt/NewComment-758f7696.mjs": {
    "type": "application/javascript",
    "etag": "\"d3de-4qUIEP7UMFaNWc1iEqvrqU7L2c8\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/NewComment-758f7696.mjs"
  },
  "/_nuxt/UserToFollowItem-f5809a12.mjs": {
    "type": "application/javascript",
    "etag": "\"714-bxWueNvLjzu8J7Ihm1NxHpITnMQ\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/UserToFollowItem-f5809a12.mjs"
  },
  "/_nuxt/_commonjsHelpers-fe705abc.mjs": {
    "type": "application/javascript",
    "etag": "\"110-92V2FpliWcVCe1fDufgaWFUc7IA\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/_commonjsHelpers-fe705abc.mjs"
  },
  "/_nuxt/_nickname_-fbed7839.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-n68jBFomwmkPXQ9lDzfiQ7Q8e5o\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/_nickname_-fbed7839.mjs"
  },
  "/_nuxt/_slug_-f7e562cf.mjs": {
    "type": "application/javascript",
    "etag": "\"895-MV79a4jcIdxGemXGQfxoM5PrEt4\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/_slug_-f7e562cf.mjs"
  },
  "/_nuxt/_username_-9d5c2a14.mjs": {
    "type": "application/javascript",
    "etag": "\"ed9-/N9+5tdJSfQWfAkVVYAf6cukiLk\"",
    "mtime": "2022-05-17T15:01:50.959Z",
    "path": "../public/_nuxt/_username_-9d5c2a14.mjs"
  },
  "/_nuxt/bootstrap.esm-e55f88cc.mjs": {
    "type": "application/javascript",
    "etag": "\"13aa2-f+WRnWe7I3+cd/XDAX1ijbUrQ1g\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/bootstrap.esm-e55f88cc.mjs"
  },
  "/_nuxt/bundle-8d23f721.mjs": {
    "type": "application/javascript",
    "etag": "\"af26-aaPgMYJcGM9H5/QPL3jchXfUC3Q\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/bundle-8d23f721.mjs"
  },
  "/_nuxt/bundle-9c610aa9.mjs": {
    "type": "application/javascript",
    "etag": "\"5145-uNCNeQp7+Gk8M+KJ6zvAdQjRLmI\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/bundle-9c610aa9.mjs"
  },
  "/_nuxt/bundle-c30f7d65.mjs": {
    "type": "application/javascript",
    "etag": "\"375d-BH1YnacseBJWAECXC+ZtjhvQOjc\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/bundle-c30f7d65.mjs"
  },
  "/_nuxt/create-5089f257.mjs": {
    "type": "application/javascript",
    "etag": "\"8d-OH6ECiOhNx74thuPANjGYQbfPaQ\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/create-5089f257.mjs"
  },
  "/_nuxt/create-50cb3905.mjs": {
    "type": "application/javascript",
    "etag": "\"bd2-OqpQGY+2YRE3WArCjHmP0IFBwDA\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/create-50cb3905.mjs"
  },
  "/_nuxt/create-521095a5.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-kkSo1x513XrUcgc4FXaGFFYYypo\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/create-521095a5.mjs"
  },
  "/_nuxt/edit-77753a94.mjs": {
    "type": "application/javascript",
    "etag": "\"cd5-TeBbAKDhfmQnmLlL5ZuMdVBFHLA\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/edit-77753a94.mjs"
  },
  "/_nuxt/edit-f2d94e24.mjs": {
    "type": "application/javascript",
    "etag": "\"92-I6IA1k7S+AWzYCqmNPC8+aTDsf0\"",
    "mtime": "2022-05-17T15:01:50.955Z",
    "path": "../public/_nuxt/edit-f2d94e24.mjs"
  },
  "/_nuxt/editor-1cdd695b.mjs": {
    "type": "application/javascript",
    "etag": "\"5db6a-D47zHDlo2H0T7MtqF7yFHdePX/E\"",
    "mtime": "2022-05-17T15:01:50.951Z",
    "path": "../public/_nuxt/editor-1cdd695b.mjs"
  },
  "/_nuxt/entry-314ecd21.mjs": {
    "type": "application/javascript",
    "etag": "\"348dc-RlwzKraphChSMAtHVfgYPk1X3bE\"",
    "mtime": "2022-05-17T15:01:50.951Z",
    "path": "../public/_nuxt/entry-314ecd21.mjs"
  },
  "/_nuxt/entry.f2968b41.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3712-8zKsUnodhe72N0FTKg8Vi14+Y4w\"",
    "mtime": "2022-05-17T15:01:50.951Z",
    "path": "../public/_nuxt/entry.f2968b41.css"
  },
  "/_nuxt/index-1df246c1.mjs": {
    "type": "application/javascript",
    "etag": "\"2c87-Ql2uofnwrFtl/jWcDDSzxGqqkWo\"",
    "mtime": "2022-05-17T15:01:50.947Z",
    "path": "../public/_nuxt/index-1df246c1.mjs"
  },
  "/_nuxt/index-203416ad.mjs": {
    "type": "application/javascript",
    "etag": "\"375-Y6YlCOKGO59rL23ugeCA0k5k7dQ\"",
    "mtime": "2022-05-17T15:01:50.947Z",
    "path": "../public/_nuxt/index-203416ad.mjs"
  },
  "/_nuxt/index-37066ba0.mjs": {
    "type": "application/javascript",
    "etag": "\"38b-rMXqUAp3yytMkx+tauT0Hxqjsdw\"",
    "mtime": "2022-05-17T15:01:50.947Z",
    "path": "../public/_nuxt/index-37066ba0.mjs"
  },
  "/_nuxt/index-3a7d57ed.mjs": {
    "type": "application/javascript",
    "etag": "\"70a-wIrURnF4Lu5TgoQJS0H/kwP9AsQ\"",
    "mtime": "2022-05-17T15:01:50.947Z",
    "path": "../public/_nuxt/index-3a7d57ed.mjs"
  },
  "/_nuxt/index-441d4287.mjs": {
    "type": "application/javascript",
    "etag": "\"e0c-naFlQi/pNb441SXUDyirZBqFjBw\"",
    "mtime": "2022-05-17T15:01:50.947Z",
    "path": "../public/_nuxt/index-441d4287.mjs"
  },
  "/_nuxt/index-6c0cc888.mjs": {
    "type": "application/javascript",
    "etag": "\"538-la1gxPnHjLZ1U/xqewY2jnuvEy8\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/index-6c0cc888.mjs"
  },
  "/_nuxt/index-93d56c32.mjs": {
    "type": "application/javascript",
    "etag": "\"40f-FU0l8UrhIrWJCpJ5Ecp163HnOh8\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/index-93d56c32.mjs"
  },
  "/_nuxt/index-d199dca6.mjs": {
    "type": "application/javascript",
    "etag": "\"1b5e-uktiKsbAbDdM/xcz0Drhk4Z9r+4\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/index-d199dca6.mjs"
  },
  "/_nuxt/main-b887250f.mjs": {
    "type": "application/javascript",
    "etag": "\"6461-/GBy0C+1+yzZTuwKkGV+vFkepcI\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/main-b887250f.mjs"
  },
  "/_nuxt/main.1fbea0fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28553-EFfYIqk5LgvXPHbMg/xon87IycI\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/main.1fbea0fe.css"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1b92-3yHQoIejWMjZKSQiG8vm2xzwe6A\"",
    "mtime": "2022-05-17T15:01:50.943Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/masonry-9a1ff6d8.mjs": {
    "type": "application/javascript",
    "etag": "\"5882-kHY2Fb0d9vL8L9fiiSzccfIQ3+I\"",
    "mtime": "2022-05-17T15:01:50.939Z",
    "path": "../public/_nuxt/masonry-9a1ff6d8.mjs"
  },
  "/img/land-lg.png": {
    "type": "image/png",
    "etag": "\"1ec85-uRKjinhabJodpYrVeFCKJzkOAHk\"",
    "mtime": "2022-05-17T15:01:50.971Z",
    "path": "../public/img/land-lg.png"
  },
  "/img/land-md.png": {
    "type": "image/png",
    "etag": "\"1ac60-r1+Hr1SroWWRnQcQ8eHUybrr0lA\"",
    "mtime": "2022-05-17T15:01:50.971Z",
    "path": "../public/img/land-md.png"
  },
  "/img/land-sm.png": {
    "type": "image/png",
    "etag": "\"f91e-lEDkibDz8/CMjZisHidziwdHm/4\"",
    "mtime": "2022-05-17T15:01:50.971Z",
    "path": "../public/img/land-sm.png"
  },
  "/img/land.png": {
    "type": "image/png",
    "etag": "\"43317-77eF/65DsdkUDuWVv3RoRgMNoGo\"",
    "mtime": "2022-05-17T15:01:50.967Z",
    "path": "../public/img/land.png"
  },
  "/img/icons/icon-128x128.png": {
    "type": "image/png",
    "etag": "\"36e3-VcZ0IATqg08hNMeZaffc/3GSNlc\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-128x128.png"
  },
  "/img/icons/icon-144x144.png": {
    "type": "image/png",
    "etag": "\"3f77-JaeKrqogbge+Wk6hBy2znOo4LGA\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-144x144.png"
  },
  "/img/icons/icon-152x152.png": {
    "type": "image/png",
    "etag": "\"43e1-jpSv6KYI7srvbh6YgPC8MV+4xGU\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-152x152.png"
  },
  "/img/icons/icon-192x192.png": {
    "type": "image/png",
    "etag": "\"59da-G9CUsbgbUaeq5q+qPIGKw/ShxmI\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-192x192.png"
  },
  "/img/icons/icon-384x384.png": {
    "type": "image/png",
    "etag": "\"c6f9-O90i7Hupuuc5c5/0V917c+KTCB0\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-384x384.png"
  },
  "/img/icons/icon-512x512.png": {
    "type": "image/png",
    "etag": "\"10f6e-RNK2aC2dWatf+VAIXdgi0bsaSuI\"",
    "mtime": "2022-05-17T15:01:50.975Z",
    "path": "../public/img/icons/icon-512x512.png"
  },
  "/img/icons/icon-72x72.png": {
    "type": "image/png",
    "etag": "\"ac9-2eKGiwWggauh73Opo6hE/oU75wU\"",
    "mtime": "2022-05-17T15:01:50.971Z",
    "path": "../public/img/icons/icon-72x72.png"
  },
  "/img/icons/icon-96x96.png": {
    "type": "image/png",
    "etag": "\"25ef-hUHelMVWpb3LyWDpb5iQJ/+wV5s\"",
    "mtime": "2022-05-17T15:01:50.971Z",
    "path": "../public/img/icons/icon-96x96.png"
  },
  "/img/samples/s1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b630-VTX7xHd7+5rUYyN3n3zIurf+6sI\"",
    "mtime": "2022-05-17T15:01:50.967Z",
    "path": "../public/img/samples/s1.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _152570 = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _274628 = (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
};

const _lazy_144174 = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _274628, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_144174, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_144174, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
