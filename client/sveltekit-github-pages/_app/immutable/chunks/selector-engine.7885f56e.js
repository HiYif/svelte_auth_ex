var A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}function st(g){if(g.__esModule)return g;var D=g.default;if(typeof D=="function"){var r=function c(){if(this instanceof c){var p=[null];p.push.apply(p,arguments);var n=Function.bind.apply(D,p);return new n}return D.apply(this,arguments)};r.prototype=D.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(g).forEach(function(c){var p=Object.getOwnPropertyDescriptor(g,c);Object.defineProperty(r,c,p.get?p:{enumerable:!0,get:function(){return g[c]}})}),r}var F={exports:{}},K={exports:{}};/*!
  * Bootstrap data.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Y;function tt(){return Y||(Y=1,function(g,D){(function(r,c){g.exports=c()})(A,function(){const r=new Map;return{set(p,n,e){r.has(p)||r.set(p,new Map);const o=r.get(p);if(!o.has(n)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(n,e)},get(p,n){return r.has(p)&&r.get(p).get(n)||null},remove(p,n){if(!r.has(p))return;const e=r.get(p);e.delete(n),e.size===0&&r.delete(p)}}})}(K)),K.exports}var U={exports:{}},q={exports:{}};/*!
  * Bootstrap index.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var z;function $(){return z||(z=1,function(g,D){(function(r,c){c(D)})(A,function(r){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(u,s)=>`#${CSS.escape(s)}`)),t),o=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),m=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},l=t=>{if(!t)return 0;let{transitionDuration:u,transitionDelay:s}=window.getComputedStyle(t);const h=Number.parseFloat(u),b=Number.parseFloat(s);return!h&&!b?0:(u=u.split(",")[0],s=s.split(",")[0],(Number.parseFloat(u)+Number.parseFloat(s))*1e3)},E=t=>{t.dispatchEvent(new Event(n))},S=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),P=t=>S(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,j=t=>{if(!S(t)||t.getClientRects().length===0)return!1;const u=getComputedStyle(t).getPropertyValue("visibility")==="visible",s=t.closest("details:not([open])");if(!s)return u;if(s!==t){const h=t.closest("summary");if(h&&h.parentNode!==s||h===null)return!1}return u},R=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",T=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const u=t.getRootNode();return u instanceof ShadowRoot?u:null}return t instanceof ShadowRoot?t:t.parentNode?T(t.parentNode):null},L=()=>{},_=t=>{t.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,C=[],N=t=>{document.readyState==="loading"?(C.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of C)u()}),C.push(t)):t()},x=()=>document.documentElement.dir==="rtl",a=t=>{N(()=>{const u=I();if(u){const s=t.NAME,h=u.fn[s];u.fn[s]=t.jQueryInterface,u.fn[s].Constructor=t,u.fn[s].noConflict=()=>(u.fn[s]=h,t.jQueryInterface)}})},i=(t,u=[],s=t)=>typeof t=="function"?t(...u):s,f=(t,u,s=!0)=>{if(!s){i(t);return}const h=5,b=l(u)+h;let y=!1;const v=({target:O})=>{O===u&&(y=!0,u.removeEventListener(n,v),i(t))};u.addEventListener(n,v),setTimeout(()=>{y||E(u)},b)},d=(t,u,s,h)=>{const b=t.length;let y=t.indexOf(u);return y===-1?!s&&h?t[b-1]:t[0]:(y+=s?1:-1,h&&(y=(y+b)%b),t[Math.max(0,Math.min(y,b-1))])};r.defineJQueryPlugin=a,r.execute=i,r.executeAfterTransition=f,r.findShadowRoot=T,r.getElement=P,r.getNextActiveElement=d,r.getTransitionDurationFromElement=l,r.getUID=m,r.getjQuery=I,r.isDisabled=R,r.isElement=S,r.isRTL=x,r.isVisible=j,r.noop=L,r.onDOMContentLoaded=N,r.parseSelector=e,r.reflow=_,r.toType=o,r.triggerTransitionEnd=E,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})}(q,q.exports)),q.exports}/*!
  * Bootstrap event-handler.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var B;function et(){return B||(B=1,function(g,D){(function(r,c){g.exports=c($())})(A,function(r){const c=/[^.]*(?=\..*)\.|.*/,p=/\..*/,n=/::\d+$/,e={};let o=1;const m={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E(a,i){return i&&`${i}::${o++}`||a.uidEvent||o++}function S(a){const i=E(a);return a.uidEvent=i,e[i]=e[i]||{},e[i]}function P(a,i){return function f(d){return x(d,{delegateTarget:a}),f.oneOff&&N.off(a,d.type,i),i.apply(a,[d])}}function j(a,i,f){return function d(t){const u=a.querySelectorAll(i);for(let{target:s}=t;s&&s!==this;s=s.parentNode)for(const h of u)if(h===s)return x(t,{delegateTarget:s}),d.oneOff&&N.off(a,t.type,i,f),f.apply(s,[t])}}function R(a,i,f=null){return Object.values(a).find(d=>d.callable===i&&d.delegationSelector===f)}function T(a,i,f){const d=typeof i=="string",t=d?f:i||f;let u=C(a);return l.has(u)||(u=a),[d,t,u]}function L(a,i,f,d,t){if(typeof i!="string"||!a)return;let[u,s,h]=T(i,f,d);i in m&&(s=(G=>function(M){if(!M.relatedTarget||M.relatedTarget!==M.delegateTarget&&!M.delegateTarget.contains(M.relatedTarget))return G.call(this,M)})(s));const b=S(a),y=b[h]||(b[h]={}),v=R(y,s,u?f:null);if(v){v.oneOff=v.oneOff&&t;return}const O=E(s,i.replace(c,"")),w=u?j(a,f,s):P(a,s);w.delegationSelector=u?f:null,w.callable=s,w.oneOff=t,w.uidEvent=O,y[O]=w,a.addEventListener(h,w,u)}function _(a,i,f,d,t){const u=R(i[f],d,t);u&&(a.removeEventListener(f,u,!!t),delete i[f][u.uidEvent])}function I(a,i,f,d){const t=i[f]||{};for(const[u,s]of Object.entries(t))u.includes(d)&&_(a,i,f,s.callable,s.delegationSelector)}function C(a){return a=a.replace(p,""),m[a]||a}const N={on(a,i,f,d){L(a,i,f,d,!1)},one(a,i,f,d){L(a,i,f,d,!0)},off(a,i,f,d){if(typeof i!="string"||!a)return;const[t,u,s]=T(i,f,d),h=s!==i,b=S(a),y=b[s]||{},v=i.startsWith(".");if(typeof u<"u"){if(!Object.keys(y).length)return;_(a,b,s,u,t?f:null);return}if(v)for(const O of Object.keys(b))I(a,b,O,i.slice(1));for(const[O,w]of Object.entries(y)){const V=O.replace(n,"");(!h||i.includes(V))&&_(a,b,s,w.callable,w.delegationSelector)}},trigger(a,i,f){if(typeof i!="string"||!a)return null;const d=r.getjQuery(),t=C(i),u=i!==t;let s=null,h=!0,b=!0,y=!1;u&&d&&(s=d.Event(i,f),d(a).trigger(s),h=!s.isPropagationStopped(),b=!s.isImmediatePropagationStopped(),y=s.isDefaultPrevented());const v=x(new Event(i,{bubbles:h,cancelable:!0}),f);return y&&v.preventDefault(),b&&a.dispatchEvent(v),v.defaultPrevented&&s&&s.preventDefault(),v}};function x(a,i={}){for(const[f,d]of Object.entries(i))try{a[f]=d}catch{Object.defineProperty(a,f,{configurable:!0,get(){return d}})}return a}return N})}(U)),U.exports}var k={exports:{}},H={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function nt(){return W||(W=1,function(g,D){(function(r,c){g.exports=c()})(A,function(){function r(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function c(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,o){n.setAttribute(`data-bs-${c(e)}`,o)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${c(e)}`)},getDataAttributes(n){if(!n)return{};const e={},o=Object.keys(n.dataset).filter(m=>m.startsWith("bs")&&!m.startsWith("bsConfig"));for(const m of o){let l=m.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),e[l]=r(n.dataset[m])}return e},getDataAttribute(n,e){return r(n.getAttribute(`data-bs-${c(e)}`))}}})}(H)),H.exports}/*!
  * Bootstrap config.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function rt(){return J||(J=1,function(g,D){(function(r,c){g.exports=c(nt(),$())})(A,function(r,c){class p{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,o){const m=c.isElement(o)?r.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof m=="object"?m:{},...c.isElement(o)?r.getDataAttributes(o):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,o=this.constructor.DefaultType){for(const[m,l]of Object.entries(o)){const E=e[m],S=c.isElement(E)?"element":c.toType(E);if(!new RegExp(l).test(S))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${S}" but expected type "${l}".`)}}}return p})}(k)),k.exports}/*!
  * Bootstrap base-component.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function it(){return X||(X=1,function(g,D){(function(r,c){g.exports=c(tt(),et(),rt(),$())})(A,function(r,c,p,n){const e="5.3.0";class o extends p{constructor(l,E){super(),l=n.getElement(l),l&&(this._element=l,this._config=this._getConfig(E),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,E,S=!0){n.executeAfterTransition(l,E,S)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return r.get(n.getElement(l),this.DATA_KEY)}static getOrCreateInstance(l,E={}){return this.getInstance(l)||new this(l,typeof E=="object"?E:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}return o})}(F)),F.exports}var Q={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function ut(){return Z||(Z=1,function(g,D){(function(r,c){g.exports=c($())})(A,function(r){const c=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let o=n.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),e=o&&o!=="#"?o.trim():null}return r.parseSelector(e)},p={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(o=>o.matches(e))},parents(n,e){const o=[];let m=n.parentNode.closest(e);for(;m;)o.push(m),m=m.parentNode.closest(e);return o},prev(n,e){let o=n.previousElementSibling;for(;o;){if(o.matches(e))return[o];o=o.previousElementSibling}return[]},next(n,e){let o=n.nextElementSibling;for(;o;){if(o.matches(e))return[o];o=o.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(o=>!r.isDisabled(o)&&r.isVisible(o))},getSelectorFromElement(n){const e=c(n);return e&&p.findOne(e)?e:null},getElementFromSelector(n){const e=c(n);return e?p.findOne(e):null},getMultipleElementsFromSelector(n){const e=c(n);return e?p.find(e):[]}};return p})}(Q)),Q.exports}export{et as a,ut as b,$ as c,A as d,st as e,nt as f,ot as g,it as r};