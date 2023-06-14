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
  let { data } = $$props;
  let focusedField;
  let password;
  let confirmPassword;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_toast();
  return `${$$result.head += `<!-- HEAD_svelte-1j9rmbc_START -->${$$result.title = `<title>New Password</title>`, ""}<!-- HEAD_svelte-1j9rmbc_END -->`, ""}

<div class="d-flex justify-content-center mt-5"><div class="card login"><div class="card-body svelte-wmjxka"><form id="reset" autocomplete="on" novalidate><h4><strong>New Password</strong></h4>
        <p>Please provide a new password.</p>
        <div class="mb-3"><label class="form-label" for="password">Password</label>
          <input class="form-control" id="password" type="password" minlength="8" maxlength="80" placeholder="Password" autocomplete="new-password"${add_attribute("value", password, 0)}${add_attribute("this", focusedField, 0)}>
          <div class="invalid-feedback">Password with 8 chars or more required</div>
          <div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique character.</div></div>
        <div class="mb-3"><label class="form-label" for="passwordConfirm">Password (retype)</label>
          <input class="form-control" id="passwordConfirm" type="password" ${""} minlength="8" maxlength="80" placeholder="Password (again)" autocomplete="new-password"${add_attribute("this", confirmPassword, 0)}>
          <div class="invalid-feedback">Passwords must match</div></div>

        ${``}
        <div class="d-grid gap-2"><button class="btn btn-primary btn-lg">Send Email</button></div></form></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a1394f9c.js.map
