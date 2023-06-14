const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/_app/immutable/entry/app.30ed13e1.js",
  e + "/_app/immutable/assets/0.d3712336.css",
  e + "/_app/immutable/nodes/0.e348ad22.js",
  e + "/_app/immutable/nodes/1.2e5394e8.js",
  e + "/_app/immutable/nodes/10.9a5126c8.js",
  e + "/_app/immutable/nodes/2.f64728ee.js",
  e + "/_app/immutable/nodes/3.704520b7.js",
  e + "/_app/immutable/assets/4.88269171.css",
  e + "/_app/immutable/nodes/4.1d1e70c0.js",
  e + "/_app/immutable/nodes/5.267cf1d2.js",
  e + "/_app/immutable/nodes/6.256323c3.js",
  e + "/_app/immutable/assets/7.5a575126.css",
  e + "/_app/immutable/nodes/7.76171429.js",
  e + "/_app/immutable/nodes/8.86a9eb97.js",
  e + "/_app/immutable/nodes/9.782532b3.js",
  e + "/_app/immutable/chunks/collapse.c0dbd9bb.js",
  e + "/_app/immutable/chunks/dropdown.e74481db.js",
  e + "/_app/immutable/chunks/focus.a98a273e.js",
  e + "/_app/immutable/chunks/google.7f4c8b68.js",
  e + "/_app/immutable/chunks/index.06c4e00a.js",
  e + "/_app/immutable/chunks/index.0a471256.js",
  e + "/_app/immutable/chunks/navigation.d6452f73.js",
  e + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  e + "/_app/immutable/chunks/selector-engine.7885f56e.js",
  e + "/_app/immutable/chunks/singletons.6fe0b79e.js",
  e + "/_app/immutable/chunks/stores.61c38851.js",
  e + "/_app/immutable/chunks/stores.68a1c5e6.js",
  e + "/_app/immutable/chunks/toast.02c1bea9.js",
  e + "/_app/immutable/entry/start.31ccd98e.js"
], h = [
  e + "/apple-touch-icon.png",
  e + "/favicon.png"
], o = "1686722822580", c = self, i = `cache${o}`, m = u.concat(h), r = new Set(m);
c.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((a) => a.addAll(m)).then(() => {
      c.skipWaiting();
    }).catch((a) => console.error(a))
  );
});
c.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== i && await caches.delete(t);
    })
  ), c.clients.claim();
});
async function d(s) {
  const a = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return a.put(s, t.clone()), t;
  } catch (t) {
    const n = await a.match(s);
    if (n)
      return n;
    throw t;
  }
}
c.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const a = new URL(s.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, p = a.host === self.location.host && r.has(a.pathname), l = s.request.cache === "only-if-cached" && !p;
  t && !n && !l && s.respondWith(
    (async () => p && await caches.match(s.request) || d(s.request))()
  );
});
