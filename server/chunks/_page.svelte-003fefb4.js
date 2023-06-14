import { c as create_ssr_component, e as escape } from './index3-38cd73ca.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-k8c01j_START -->${$$result.title = `<title>Administration</title>`, ""}<!-- HEAD_svelte-k8c01j_END -->`, ""}

<h1>Admin</h1>
<h4>Admin Role</h4>
<p>${escape(data.message)}</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-003fefb4.js.map
