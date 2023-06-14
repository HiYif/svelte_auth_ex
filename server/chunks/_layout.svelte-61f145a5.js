import { c as create_ssr_component, a as subscribe, b as set_store_value, d as add_attribute, e as escape } from './index3-38cd73ca.js';
import { l as loginSession, t as toast } from './stores-8bc905a2.js';
import './index2-259c1e1e.js';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const css = {
  code: ".svelte-16lhf5b{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toast.svelte-16lhf5b{z-index:9999}.avatar.svelte-16lhf5b{position:relative;top:-1.5px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  let $loginSession, $$unsubscribe_loginSession;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  $$unsubscribe_loginSession = subscribe(loginSession, (value) => $loginSession = value);
  let { data } = $$props;
  const { user } = data;
  set_store_value(loginSession, $loginSession = user, $loginSession);
  let Toast;
  beforeNavigate(() => {
    let expirationDate = $loginSession?.expires ? new Date($loginSession.expires) : void 0;
    if (expirationDate && expirationDate < /* @__PURE__ */ new Date()) {
      console.log("Login session expired.");
      set_store_value(loginSession, $loginSession = null, $loginSession);
    }
  });
  const openToast = (open) => {
    if (open) {
      const toastDiv = document.getElementById("authToast");
      const t = new Toast(toastDiv);
      t.show();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    openToast($toast.isOpen);
  }
  $$unsubscribe_toast();
  $$unsubscribe_loginSession();
  return `<nav class="navbar navbar-expand-lg navbar-light bg-light svelte-16lhf5b"><div class="container svelte-16lhf5b"><a class="navbar-brand svelte-16lhf5b" href="/">SvelteKit-Auth-Example</a>
    <button class="navbar-toggler svelte-16lhf5b" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon svelte-16lhf5b"></span></button>
    <div class="collapse navbar-collapse svelte-16lhf5b" id="navbarMain"><ul class="navbar-nav me-5 svelte-16lhf5b"><li class="nav-item svelte-16lhf5b"><a class="nav-link active svelte-16lhf5b" aria-current="page" href="/">Home</a></li>
        <li class="nav-item svelte-16lhf5b"><a class="nav-link svelte-16lhf5b" href="/info">Info</a></li>

        ${$loginSession ? `${$loginSession.role == "admin" ? `<li class="nav-item svelte-16lhf5b"><a class="nav-link svelte-16lhf5b" href="/admin">Admin</a></li>` : ``}
          ${$loginSession.role != "student" ? `<li class="nav-item svelte-16lhf5b"><a class="nav-link svelte-16lhf5b" href="/teachers">Teachers</a></li>` : ``}` : ``}</ul>
      <ul class="navbar-nav svelte-16lhf5b">${$loginSession ? `<li class="nav-item dropdown svelte-16lhf5b"><a class="nav-link dropdown-toggle svelte-16lhf5b"${add_attribute("href", "#", 0)} role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="avatar svelte-16lhf5b" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" class="svelte-16lhf5b"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" class="svelte-16lhf5b"></path></svg>
              ${escape($loginSession.firstName)}</a>
            <ul class="dropdown-menu svelte-16lhf5b"><li class="svelte-16lhf5b"><a class="dropdown-item svelte-16lhf5b" href="/profile">Profile</a></li>
              <li class="svelte-16lhf5b"><a class="${[
    "dropdown-item svelte-16lhf5b",
    !$loginSession || $loginSession.id === 0 ? "d-none" : ""
  ].join(" ").trim()}"${add_attribute("href", "#", 0)}>Logout</a></li></ul></li>` : `<li class="nav-item svelte-16lhf5b"><a class="nav-link svelte-16lhf5b" href="/login">Login</a></li>`}</ul></div></div></nav>

<main class="container svelte-16lhf5b">${slots.default ? slots.default({}) : ``}

  <div id="authToast" class="toast position-fixed top-0 end-0 m-3 svelte-16lhf5b" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header bg-primary text-white svelte-16lhf5b"><strong class="me-auto svelte-16lhf5b">${escape($toast.title)}</strong>
      <button type="button" class="btn-close svelte-16lhf5b" data-bs-dismiss="toast" aria-label="Close"></button></div>
    <div class="toast-body svelte-16lhf5b">${escape($toast.body)}</div></div>

</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-61f145a5.js.map
