import { r as redirect } from './index-f2253eb7.js';

const load = async ({ locals }) => {
  const { user } = locals;
  const authorized = ["admin", "teacher", "student"];
  if (!user || !authorized.includes(user.role)) {
    throw redirect(302, "/login?referrer=/profile");
  }
  return {
    user
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-4bcb098a.js')).default;
const server_id = "src/routes/profile/+page.server.ts";
const imports = ["_app/immutable/nodes/8.86a9eb97.js","_app/immutable/chunks/index.0a471256.js","_app/immutable/chunks/focus.a98a273e.js","_app/immutable/chunks/stores.68a1c5e6.js","_app/immutable/chunks/index.06c4e00a.js"];
const stylesheets = ["_app/immutable/assets/4.88269171.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-84a28790.js.map
