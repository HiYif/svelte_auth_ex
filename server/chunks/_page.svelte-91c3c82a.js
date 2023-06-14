import { c as create_ssr_component, e as escape } from './index3-38cd73ca.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ds6v28_START -->${$$result.title = `<title>Teachers</title>`, ""}<!-- HEAD_svelte-ds6v28_END -->`, ""}

<h1>Teachers</h1>
<h4>Teacher Or Admin Role</h4>
<p>${escape(data.message)}</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-91c3c82a.js.map
