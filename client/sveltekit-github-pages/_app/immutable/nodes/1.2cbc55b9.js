import{S as q,i as x,s as S,k as u,q as h,a as g,l as d,m as v,r as b,h as m,c as k,b as _,D as E,u as H,J as $,H as y}from"../chunks/index.0a471256.js";import{p as C}from"../chunks/stores.6ec8dd01.js";function D(l){var f;let a,t=l[0].status+"",r,o,n,i=((f=l[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(t),o=g(),n=u("h4"),c=h(i)},l(e){a=d(e,"H1",{});var s=v(a);r=b(s,t),s.forEach(m),o=k(e),n=d(e,"H4",{});var p=v(n);c=b(p,i),p.forEach(m)},m(e,s){_(e,a,s),E(a,r),_(e,o,s),_(e,n,s),E(n,c)},p(e,[s]){var p;s&1&&t!==(t=e[0].status+"")&&H(r,t),s&1&&i!==(i=((p=e[0].error)==null?void 0:p.message)+"")&&H(c,i)},i:$,o:$,d(e){e&&m(a),e&&m(o),e&&m(n)}}}function J(l,a,t){let r;return y(l,C,o=>t(0,r=o)),[r]}class z extends q{constructor(a){super(),x(this,a,J,D,S,{})}}export{z as component};