import { r as redirect } from './index-f2253eb7.js';

const load = async ({ locals }) => {
  const { user } = locals;
  const authorized = ["admin"];
  if (!user || !authorized.includes(user.role)) {
    throw redirect(302, "/login?referrer=/admin");
  }
  return {
    message: "Admin-only content from server."
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-003fefb4.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/3.704520b7.js","_app/immutable/chunks/index.0a471256.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-38cf6e99.js.map
