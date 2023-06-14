import { c as create_ssr_component, a as subscribe, e as escape } from './index3-38cd73ca.js';
import { p as page } from './stores2-f497526f.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1>
<h4>${escape($page.error?.message)}</h4>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-ddffcd9f.js.map
