import { c as create_ssr_component, d as add_attribute } from './index3-38cd73ca.js';

const css = {
  code: ".card-body.svelte-wmjxka{width:25rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let focusedField;
  let user = {
    id: 0,
    role: "student",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: ""
  };
  let confirmPassword;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vzs0v6_START -->${$$result.title = `<title>Register</title>`, ""}<!-- HEAD_svelte-1vzs0v6_END -->`, ""}

<div class="d-flex justify-content-center my-3"><div class="card login"><div class="card-body svelte-wmjxka"><h4><strong>Register</strong></h4>
      <p>Welcome to our community.</p>
      ${user ? `<form id="register" autocomplete="on" novalidate class="mt-3"><div class="mb-3"><div id="googleButton"></div></div>
          <div class="mb-3"><label class="form-label" for="email">Email</label>
            <input type="email" class="form-control" required placeholder="Email" id="email" autocomplete="email"${add_attribute("this", focusedField, 0)}${add_attribute("value", user.email, 0)}>
            <div class="invalid-feedback">Email address required</div></div>
          <div class="mb-3"><label class="form-label" for="password">Password</label>
            <input type="password" id="password" class="form-control" required minlength="8" maxlength="80" placeholder="Password" autocomplete="new-password"${add_attribute("value", user.password, 0)}>
            <div class="invalid-feedback">Password with 8 chars or more required</div>
            <div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique character.</div></div>
          <div class="mb-3"><label class="form-label" for="password">Confirm password</label>
            <input type="password" id="password" class="form-control" required minlength="8" maxlength="80" placeholder="Password (again)" autocomplete="new-password"${add_attribute("this", confirmPassword, 0)}>
            <div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique character.</div></div>
          <div class="mb-3"><label class="form-label" for="firstName">First name</label>
            <input class="form-control" id="firstName" placeholder="First name" required autocomplete="given-name"${add_attribute("value", user.firstName, 0)}>
            <div class="invalid-feedback">First name required</div></div>
          <div class="mb-3"><label class="form-label" for="lastName">Last name</label>
            <input class="form-control" id="lastName" placeholder="Last name" required autocomplete="family-name"${add_attribute("value", user.lastName, 0)}>
            <div class="invalid-feedback">Last name required</div></div>
          <div class="mb-3"><label class="form-label" for="phone">Phone</label>
            <input type="tel" id="phone" class="form-control" placeholder="Phone" autocomplete="tel-local"${add_attribute("value", user.phone, 0)}></div>
        
          ${``}
        
          <button type="button" class="btn btn-primary btn-lg">Register</button></form>` : ``}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e5adc12a.js.map
