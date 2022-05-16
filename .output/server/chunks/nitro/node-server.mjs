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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
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
  "/_nuxt/ImagePreloader-11d0d1a8.mjs": {
    "type": "application/javascript",
    "etag": "\"6c9-ZddnmnrJP8KBS+WSQYOVOAkAAxU\"",
    "mtime": "2022-05-16T04:04:19.934Z",
    "path": "../public/_nuxt/ImagePreloader-11d0d1a8.mjs"
  },
  "/_nuxt/NewComment-7c152b7a.mjs": {
    "type": "application/javascript",
    "etag": "\"d228-TOA0D8i3KKX+qILeu1UgQXEJlEM\"",
    "mtime": "2022-05-16T04:04:19.934Z",
    "path": "../public/_nuxt/NewComment-7c152b7a.mjs"
  },
  "/_nuxt/UserToFollowItem-4b58f4df.mjs": {
    "type": "application/javascript",
    "etag": "\"714-QVd88RSOGG1svjHhRVgtrItfCzY\"",
    "mtime": "2022-05-16T04:04:19.934Z",
    "path": "../public/_nuxt/UserToFollowItem-4b58f4df.mjs"
  },
  "/_nuxt/_commonjsHelpers-fe705abc.mjs": {
    "type": "application/javascript",
    "etag": "\"110-92V2FpliWcVCe1fDufgaWFUc7IA\"",
    "mtime": "2022-05-16T04:04:19.934Z",
    "path": "../public/_nuxt/_commonjsHelpers-fe705abc.mjs"
  },
  "/_nuxt/_nickname_-7e747630.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-sHb2sU17P4KSTdM5YPEDkX/i6HI\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/_nickname_-7e747630.mjs"
  },
  "/_nuxt/_slug_-73713e7e.mjs": {
    "type": "application/javascript",
    "etag": "\"895-0LV0UBLa4ig065exthr0lzH4rRY\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/_slug_-73713e7e.mjs"
  },
  "/_nuxt/_username_-980d9b0f.mjs": {
    "type": "application/javascript",
    "etag": "\"ecb-mmqKYD+A812j/wPj4fpQ0QzvsWM\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/_username_-980d9b0f.mjs"
  },
  "/_nuxt/bootstrap.esm-e55f88cc.mjs": {
    "type": "application/javascript",
    "etag": "\"13aa2-f+WRnWe7I3+cd/XDAX1ijbUrQ1g\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/bootstrap.esm-e55f88cc.mjs"
  },
  "/_nuxt/bundle-8d23f721.mjs": {
    "type": "application/javascript",
    "etag": "\"af26-aaPgMYJcGM9H5/QPL3jchXfUC3Q\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/bundle-8d23f721.mjs"
  },
  "/_nuxt/bundle-9c610aa9.mjs": {
    "type": "application/javascript",
    "etag": "\"5145-uNCNeQp7+Gk8M+KJ6zvAdQjRLmI\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/bundle-9c610aa9.mjs"
  },
  "/_nuxt/bundle-c30f7d65.mjs": {
    "type": "application/javascript",
    "etag": "\"375d-BH1YnacseBJWAECXC+ZtjhvQOjc\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/bundle-c30f7d65.mjs"
  },
  "/_nuxt/create-2003251c.mjs": {
    "type": "application/javascript",
    "etag": "\"8d-qTGw43S26UkaHlZuceuD9RQQFT0\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/create-2003251c.mjs"
  },
  "/_nuxt/create-3d6bf090.mjs": {
    "type": "application/javascript",
    "etag": "\"bd2-tJS69cW36nzuaBCCEPeEr+09BT0\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/create-3d6bf090.mjs"
  },
  "/_nuxt/create-fcd35710.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-NidJtGor3Smb/nHJqRWJ5Nnvnn8\"",
    "mtime": "2022-05-16T04:04:19.930Z",
    "path": "../public/_nuxt/create-fcd35710.mjs"
  },
  "/_nuxt/edit-b5831465.mjs": {
    "type": "application/javascript",
    "etag": "\"92-MHNr97F55baqbov8ll1SbMgYYZU\"",
    "mtime": "2022-05-16T04:04:19.926Z",
    "path": "../public/_nuxt/edit-b5831465.mjs"
  },
  "/_nuxt/edit-f27e08e9.mjs": {
    "type": "application/javascript",
    "etag": "\"cd5-MTuIfObnYHWSrnIVVYRQWXS68hU\"",
    "mtime": "2022-05-16T04:04:19.926Z",
    "path": "../public/_nuxt/edit-f27e08e9.mjs"
  },
  "/_nuxt/editor-1cdd695b.mjs": {
    "type": "application/javascript",
    "etag": "\"5db6a-D47zHDlo2H0T7MtqF7yFHdePX/E\"",
    "mtime": "2022-05-16T04:04:19.926Z",
    "path": "../public/_nuxt/editor-1cdd695b.mjs"
  },
  "/_nuxt/entry-d682134e.mjs": {
    "type": "application/javascript",
    "etag": "\"34a2b-ymPjDOGIgD4SDMfVHw1NLLdqUl8\"",
    "mtime": "2022-05-16T04:04:19.926Z",
    "path": "../public/_nuxt/entry-d682134e.mjs"
  },
  "/_nuxt/entry.431d8e21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3712-uWyCxUjlgi5B+ujuTQM8Y3fQScI\"",
    "mtime": "2022-05-16T04:04:19.926Z",
    "path": "../public/_nuxt/entry.431d8e21.css"
  },
  "/_nuxt/index-50db618e.mjs": {
    "type": "application/javascript",
    "etag": "\"38b-BAgv1lQLF1ZJDIUDXnYY4DAcT/Q\"",
    "mtime": "2022-05-16T04:04:19.922Z",
    "path": "../public/_nuxt/index-50db618e.mjs"
  },
  "/_nuxt/index-73ae660a.mjs": {
    "type": "application/javascript",
    "etag": "\"2c5a-SubOCAY11v90kdF9xU2FkPJGFRs\"",
    "mtime": "2022-05-16T04:04:19.922Z",
    "path": "../public/_nuxt/index-73ae660a.mjs"
  },
  "/_nuxt/index-7e945a18.mjs": {
    "type": "application/javascript",
    "etag": "\"375-P5wzbgoYfy4wq9LcjX8PJrdYx0c\"",
    "mtime": "2022-05-16T04:04:19.922Z",
    "path": "../public/_nuxt/index-7e945a18.mjs"
  },
  "/_nuxt/index-c8816a12.mjs": {
    "type": "application/javascript",
    "etag": "\"1af4-sB4LiGfkyC62XTzwQedYFL/KCJ8\"",
    "mtime": "2022-05-16T04:04:19.922Z",
    "path": "../public/_nuxt/index-c8816a12.mjs"
  },
  "/_nuxt/index-cd40a73c.mjs": {
    "type": "application/javascript",
    "etag": "\"538-wiQh2yUOXKVihAXTSiw0ybH1aqA\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/index-cd40a73c.mjs"
  },
  "/_nuxt/index-deb15158.mjs": {
    "type": "application/javascript",
    "etag": "\"d7a-JqAnyF5S612CozDDF8hrmuSWBZ0\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/index-deb15158.mjs"
  },
  "/_nuxt/index-e0d1f874.mjs": {
    "type": "application/javascript",
    "etag": "\"675-hKKdkhajcAmDpc4JPNXassMleq0\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/index-e0d1f874.mjs"
  },
  "/_nuxt/index-e2b0b4b1.mjs": {
    "type": "application/javascript",
    "etag": "\"40f-sI+ABVGAM/RAMYJ1WzMxLmXC4Gs\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/index-e2b0b4b1.mjs"
  },
  "/_nuxt/main-2a250226.mjs": {
    "type": "application/javascript",
    "etag": "\"6424-XuOmE6fLEN1+0si9sfjf4BglL2w\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/main-2a250226.mjs"
  },
  "/_nuxt/main.35d2d2c4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28553-Sl9jLBYWEawdB6jyhlnbQLTv5F4\"",
    "mtime": "2022-05-16T04:04:19.918Z",
    "path": "../public/_nuxt/main.35d2d2c4.css"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1b92-x4HwzrrKq3lMS+FFq/varwa8ksM\"",
    "mtime": "2022-05-16T04:04:19.914Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/masonry-9a1ff6d8.mjs": {
    "type": "application/javascript",
    "etag": "\"5882-kHY2Fb0d9vL8L9fiiSzccfIQ3+I\"",
    "mtime": "2022-05-16T04:04:19.914Z",
    "path": "../public/_nuxt/masonry-9a1ff6d8.mjs"
  },
  "/img/land-lg.png": {
    "type": "image/png",
    "etag": "\"1ec85-uRKjinhabJodpYrVeFCKJzkOAHk\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/land-lg.png"
  },
  "/img/land-md.png": {
    "type": "image/png",
    "etag": "\"1ac60-r1+Hr1SroWWRnQcQ8eHUybrr0lA\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/land-md.png"
  },
  "/img/land-sm.png": {
    "type": "image/png",
    "etag": "\"f91e-lEDkibDz8/CMjZisHidziwdHm/4\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/land-sm.png"
  },
  "/img/land.png": {
    "type": "image/png",
    "etag": "\"43317-77eF/65DsdkUDuWVv3RoRgMNoGo\"",
    "mtime": "2022-05-16T04:04:19.934Z",
    "path": "../public/img/land.png"
  },
  "/img/icons/icon-128x128.png": {
    "type": "image/png",
    "etag": "\"36e3-VcZ0IATqg08hNMeZaffc/3GSNlc\"",
    "mtime": "2022-05-16T04:04:19.942Z",
    "path": "../public/img/icons/icon-128x128.png"
  },
  "/img/icons/icon-144x144.png": {
    "type": "image/png",
    "etag": "\"3f77-JaeKrqogbge+Wk6hBy2znOo4LGA\"",
    "mtime": "2022-05-16T04:04:19.942Z",
    "path": "../public/img/icons/icon-144x144.png"
  },
  "/img/icons/icon-152x152.png": {
    "type": "image/png",
    "etag": "\"43e1-jpSv6KYI7srvbh6YgPC8MV+4xGU\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-152x152.png"
  },
  "/img/icons/icon-192x192.png": {
    "type": "image/png",
    "etag": "\"59da-G9CUsbgbUaeq5q+qPIGKw/ShxmI\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-192x192.png"
  },
  "/img/icons/icon-384x384.png": {
    "type": "image/png",
    "etag": "\"c6f9-O90i7Hupuuc5c5/0V917c+KTCB0\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-384x384.png"
  },
  "/img/icons/icon-512x512.png": {
    "type": "image/png",
    "etag": "\"10f6e-RNK2aC2dWatf+VAIXdgi0bsaSuI\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-512x512.png"
  },
  "/img/icons/icon-72x72.png": {
    "type": "image/png",
    "etag": "\"ac9-2eKGiwWggauh73Opo6hE/oU75wU\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-72x72.png"
  },
  "/img/icons/icon-96x96.png": {
    "type": "image/png",
    "etag": "\"25ef-hUHelMVWpb3LyWDpb5iQJ/+wV5s\"",
    "mtime": "2022-05-16T04:04:19.938Z",
    "path": "../public/img/icons/icon-96x96.png"
  },
  "/img/samples/s1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b630-VTX7xHd7+5rUYyN3n3zIurf+6sI\"",
    "mtime": "2022-05-16T04:04:19.934Z",
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

const _lazy_144174 = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
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
