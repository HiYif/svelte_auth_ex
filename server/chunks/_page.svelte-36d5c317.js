import { c as create_ssr_component, a as subscribe, d as add_attribute } from './index3-38cd73ca.js';
import { t as toast } from './stores-8bc905a2.js';
import './index2-259c1e1e.js';

const css = {
  code: ".card-body.svelte-wmjxka{width:25rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => value);
  let focusedField;
  let email;
  $$result.css.add(css);
  $$unsubscribe_toast();
  return `${$$result.head += `<!-- HEAD_svelte-1ebwcft_START -->${$$result.title = `<title>Forgot Password</title>`, ""}<!-- HEAD_svelte-1ebwcft_END -->`, ""}

<div class="d-flex justify-content-center mt-5"><div class="card"><div class="card-body svelte-wmjxka"><form id="forgot" autocomplete="on" novalidate><h4><strong>Forgot password</strong></h4>
        <p>Hey, you&#39;re human. We get it.</p>
        <div class="mb-3"><label class="form-label" for="email">Email</label>
          <input type="email" id="email" class="form-control" required placeholder="Email" autocomplete="email"${add_attribute("this", focusedField, 0)}${add_attribute("value", email, 0)}>
          <div class="invalid-feedback">Email address required</div></div>
        ${``}
        <div class="d-grid gap-2"><button class="btn btn-primary btn-lg">Send Email</button></div></form></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-36d5c317.js.map
