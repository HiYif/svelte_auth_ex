import { r as redirect } from './index-f2253eb7.js';

const load = async ({ locals }) => {
  const { user } = locals;
  const authorized = ["admin", "teacher"];
  if (!user || !authorized.includes(user.role)) {
    throw redirect(302, "/login?referrer=/teachers");
  }
  return {
    message: "Teachers or Admin-only content from server."
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-91c3c82a.js')).default;
const server_id = "src/routes/teachers/+page.server.ts";
const imports = ["_app/immutable/nodes/10.9a5126c8.js","_app/immutable/chunks/index.0a471256.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-b2ff1915.js.map
