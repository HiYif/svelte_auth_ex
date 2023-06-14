import { c as create_ssr_component, a as subscribe, d as add_attribute } from './index3-38cd73ca.js';
import { p as page } from './stores2-f497526f.js';

const css = {
  code: '.card-body.svelte-w3qnyp.svelte-w3qnyp{width:25rem}.strike.svelte-w3qnyp.svelte-w3qnyp{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike.svelte-w3qnyp>span.svelte-w3qnyp{position:relative;display:inline-block}.strike.svelte-w3qnyp>span.svelte-w3qnyp:before,.strike.svelte-w3qnyp>span.svelte-w3qnyp:after{content:"";position:absolute;top:50%;width:9999px;height:1px;background:darkgray}.strike.svelte-w3qnyp>span.svelte-w3qnyp:before{right:100%;margin-right:10px}.strike.svelte-w3qnyp>span.svelte-w3qnyp:after{left:100%;margin-left:10px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let focusedField;
  const credentials = { email: "", password: "" };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-18hoje6_START -->${$$result.title = `<title>Login Form</title>`, ""}<meta name="robots" content="noindex, nofollow"><!-- HEAD_svelte-18hoje6_END -->`, ""}

<div class="d-flex justify-content-center mt-5"><div class="card"><div class="card-body svelte-w3qnyp"><form id="signIn" autocomplete="on" novalidate><h4><strong>Sign In</strong></h4>
				<p>Welcome back.</p>
				<div><div class="mb-1"><div id="googleButton"></div></div>
          <div class="text-centered"><div class="strike svelte-w3qnyp"><span class="svelte-w3qnyp">or</span></div></div>
					<div class="mb-3"><label class="form-label" for="email">Email</label>
						<input type="email" class="form-control" required placeholder="Email" autocomplete="email"${add_attribute("this", focusedField, 0)}${add_attribute("value", credentials.email, 0)}>
						<div class="invalid-feedback">Email address required</div></div>
					<div class="mb-3"><label class="form-label" for="password">Password</label>
						<input class="form-control" type="password" required minlength="8" maxlength="80" placeholder="Password" autocomplete="current-password"${add_attribute("value", credentials.password, 0)}>
						<div class="invalid-feedback">Password with 8 chars or more required</div>
						<div class="form-text">Password minimum length 8, must have one capital letter, 1 number, and one unique
							character.
						</div></div></div>
				<div><a href="/forgot" class="text-black-50">Forgot Password?</a><br>
					<br></div>
				${``}

				

				<div class="d-grid gap-2"><button class="btn btn-primary btn-lg">Sign In</button></div></form></div>
		<div class="card-footer text-center bg-white"><a href="/register" class="text-black-50">Don&#39;t have an account?</a></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-62229678.js.map
