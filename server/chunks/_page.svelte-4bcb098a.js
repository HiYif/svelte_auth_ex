import { c as create_ssr_component, a as subscribe, d as add_attribute } from './index3-38cd73ca.js';
import { l as loginSession } from './stores-8bc905a2.js';
import './index2-259c1e1e.js';

const css = {
  code: ".card-body.svelte-wmjxka{width:25rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loginSession;
  $$unsubscribe_loginSession = subscribe(loginSession, (value) => value);
  let { data } = $$props;
  const { user } = data;
  let focusedField;
  let confirmPassword;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_loginSession();
  return `${$$result.head += `<!-- HEAD_svelte-h1cjtk_START -->${$$result.title = `<title>Profile</title>`, ""}<!-- HEAD_svelte-h1cjtk_END -->`, ""}

<div class="d-flex justify-content-center my-3"><div class="card login"><div class="card-body svelte-wmjxka"><h4><strong>Profile</strong></h4>
      <p>Update your information.</p>
      <form id="profile" autocomplete="on" novalidate class="mt-3">${!user?.email?.includes("gmail.com") ? `<div class="mb-3"><label class="form-label" for="email">Email</label>
            <input type="email" class="form-control" required placeholder="Email" id="email" autocomplete="email"${add_attribute("this", focusedField, 0)}${add_attribute("value", user.email, 0)}>
            <div class="invalid-feedback">Email address required</div></div>
          <div class="mb-3"><label class="form-label" for="password">Password</label>
            <input type="password" id="password" class="form-control" minlength="8" maxlength="80" placeholder="Password"${add_attribute("value", user.password, 0)}>
            <div class="invalid-feedback">Password with 8 chars or more required</div>
            <div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique character.</div></div>
          <div class="mb-3"><label class="form-label" for="password">Confirm password</label>
            <input type="password" id="password" class="form-control" ${!!user.password ? "required" : ""} minlength="8" maxlength="80" placeholder="Password (again)" autocomplete="new-password"${add_attribute("this", confirmPassword, 0)}>
            <div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique character.</div></div>` : ``}
        <div class="mb-3"><label class="form-label" for="firstName">First name</label>
          <input class="form-control" id="firstName" required placeholder="First name" autocomplete="given-name"${add_attribute("this", focusedField, 0)}${add_attribute("value", user.firstName, 0)}>
          <div class="invalid-feedback">First name required</div></div>
        <div class="mb-3"><label class="form-label" for="lastName">Last name</label>
          <input class="form-control" id="lastName" required placeholder="Last name" autocomplete="family-name"${add_attribute("value", user.lastName, 0)}>
          <div class="invalid-feedback">Last name required</div></div>
        <div class="mb-3"><label class="form-label" for="phone">Phone</label>
          <input type="tel" id="phone" class="form-control" placeholder="Phone" autocomplete="tel-local"${add_attribute("value", user.phone, 0)}></div>

        ${``} 

        <button type="button" class="btn btn-primary btn-lg">Update</button></form></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4bcb098a.js.map
