const manifest = {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set(["apple-touch-icon.png","favicon.png","service-worker.js"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cef12c20.js","app":"_app/immutable/entry/app.6e42728b.js","imports":["_app/immutable/entry/start.cef12c20.js","_app/immutable/chunks/index.0a471256.js","_app/immutable/chunks/singletons.886dbbc4.js","_app/immutable/chunks/index.06c4e00a.js","_app/immutable/entry/app.6e42728b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.0a471256.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ba0b4147.js'),
			() => import('./chunks/1-bb7405e9.js'),
			() => import('./chunks/2-3e99f22b.js'),
			() => import('./chunks/3-38cf6e99.js'),
			() => import('./chunks/4-0ab7d40b.js'),
			() => import('./chunks/5-e40731a6.js'),
			() => import('./chunks/6-67afbf1c.js'),
			() => import('./chunks/7-a4fa4cda.js'),
			() => import('./chunks/8-84a28790.js'),
			() => import('./chunks/9-5bff87d3.js'),
			() => import('./chunks/10-b2ff1915.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/v1/user",
				pattern: /^\/api\/v1\/user\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4e09c1ac.js')
			},
			{
				id: "/auth/forgot",
				pattern: /^\/auth\/forgot\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-46241513.js')
			},
			{
				id: "/auth/google",
				pattern: /^\/auth\/google\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-83f65c06.js')
			},
			{
				id: "/auth/reset",
				pattern: /^\/auth\/reset\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-23073a73.js')
			},
			{
				id: "/auth/reset/[token]",
				pattern: /^\/auth\/reset\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auth/[slug]",
				pattern: /^\/auth\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-fc0c9a2f.js')
			},
			{
				id: "/forgot",
				pattern: /^\/forgot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/teachers",
				pattern: /^\/teachers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
