import { r as redirect } from './index-f2253eb7.js';

const load = ({ locals }) => {
  const { user } = locals;
  if (user) {
    throw redirect(302, "/");
  }
  return {};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-e5adc12a.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/9.66a45500.js","_app/immutable/chunks/index.0a471256.js","_app/immutable/chunks/navigation.ed6180dc.js","_app/immutable/chunks/singletons.69d2dbc3.js","_app/immutable/chunks/index.06c4e00a.js","_app/immutable/chunks/stores.68a1c5e6.js","_app/immutable/chunks/focus.a98a273e.js","_app/immutable/chunks/google.376d5880.js","_app/immutable/chunks/stores.1a11b66e.js"];
const stylesheets = ["_app/immutable/assets/4.88269171.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-cfc7c4b0.js.map
