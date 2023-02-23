(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P(){}function Ue(e,t){for(const n in t)e[n]=t[n];return e}function qe(e){return e()}function be(){return Object.create(null)}function B(e){e.forEach(qe)}function ae(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let te;function Pe(e,t){return te||(te=document.createElement("a")),te.href=t,e===te.href}function pt(e){return Object.keys(e).length===0}function _e(e,...t){if(e==null)return P;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Q(e){let t;return _e(e,n=>t=n)(),t}function q(e,t,n){e.$$.on_destroy.push(_e(t,n))}function ht(e,t,n,o){if(e){const r=Be(e,t,n,o);return e[0](r)}}function Be(e,t,n,o){return e[1]&&o?Ue(n.ctx.slice(),e[1](o(t))):n.ctx}function mt(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],i=Math.max(t.dirty.length,r.length);for(let c=0;c<i;c+=1)s[c]=t.dirty[c]|r[c];return s}return t.dirty|r}return t.dirty}function _t(e,t,n,o,r,s){if(r){const i=Be(t,n,o,s);e.p(i,r)}}function gt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function yt(e,t,n){return e.set(n),t}function wt(e){return e&&ae(e.destroy)?e.destroy:P}function E(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e){return document.createElement(e)}function De(e){return document.createTextNode(e)}function ye(){return De(" ")}function V(){return De("")}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function bt(e){return Array.from(e.childNodes)}function He(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function ie(e,t){return new e(t)}let G;function J(e){G=e}function we(){if(!G)throw new Error("Function called outside component initialization");return G}function Pt(e){we().$$.on_destroy.push(e)}function Ke(e,t){return we().$$.context.set(e,t),t}function We(e){return we().$$.context.get(e)}const U=[],$e=[],ne=[],ke=[],ze=Promise.resolve();let fe=!1;function Je(){fe||(fe=!0,ze.then(Qe))}function $t(){return Je(),ze}function de(e){ne.push(e)}const ue=new Set;let M=0;function Qe(){if(M!==0)return;const e=G;do{try{for(;M<U.length;){const t=U[M];M++,J(t),kt(t.$$)}}catch(t){throw U.length=0,M=0,t}for(J(null),U.length=0,M=0;$e.length;)$e.pop()();for(let t=0;t<ne.length;t+=1){const n=ne[t];ue.has(n)||(ue.add(n),n())}ne.length=0}while(U.length);for(;ke.length;)ke.pop()();fe=!1,ue.clear(),J(e)}function kt(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}const oe=new Set;let I;function H(){I={r:0,c:[],p:I}}function K(){I.r||B(I.c),I=I.p}function m(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function w(e,t,n,o){if(e&&e.o){if(oe.has(e))return;oe.add(e),I.c.push(()=>{oe.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function xt(e,t){e.d(1),t.delete(e.key)}function Rt(e,t){w(e,1,1,()=>{t.delete(e.key)})}function Ve(e,t,n,o,r,s,i,c,a,l,u,f){let h=e.length,p=s.length,_=h;const R={};for(;_--;)R[e[_].key]=_;const v=[],T=new Map,W=new Map;for(_=p;_--;){const g=f(r,s,_),$=n(g);let d=i.get($);d?o&&d.p(g,t):(d=l($,g),d.c()),T.set($,v[_]=d),$ in R&&W.set($,Math.abs(_-R[$]))}const j=new Set,ee=new Set;function A(g){m(g,1),g.m(c,u),i.set(g.key,g),u=g.first,p--}for(;h&&p;){const g=v[p-1],$=e[h-1],d=g.key,b=$.key;g===$?(u=g.first,h--,p--):T.has(b)?!i.has(d)||j.has(d)?A(g):ee.has(b)?h--:W.get(d)>W.get(b)?(ee.add(d),A(g)):(j.add(b),h--):(a($,i),h--)}for(;h--;){const g=e[h];T.has(g.key)||a(g,i)}for(;p;)A(v[p-1]);return v}function Et(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const a in i)a in c||(o[a]=1);for(const a in c)r[a]||(n[a]=c[a],r[a]=1);e[s]=c}else for(const a in i)r[a]=1}for(const i in o)i in n||(n[i]=void 0);return n}function vt(e){return typeof e=="object"&&e!==null?e:{}}function C(e){e&&e.c()}function L(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||de(()=>{const i=e.$$.on_mount.map(qe).filter(ae);e.$$.on_destroy?e.$$.on_destroy.push(...i):B(i),e.$$.on_mount=[]}),s.forEach(de)}function S(e,t){const n=e.$$;n.fragment!==null&&(B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(e,t){e.$$.dirty[0]===-1&&(U.push(e),Je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,o,r,s,i,c=[-1]){const a=G;J(e);const l=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:r,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:be(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};i&&i(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,h,...p)=>{const _=p.length?p[0]:h;return l.ctx&&r(l.ctx[f],l.ctx[f]=_)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](_),u&&Ot(e,f)),h}):[],l.update(),u=!0,B(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const f=bt(t.target);l.fragment&&l.fragment.l(f),f.forEach(k)}else l.fragment&&l.fragment.c();t.intro&&m(e.$$.fragment),L(e,t.target,t.anchor,t.customElement),Qe()}J(a)}class Y{$destroy(){S(this,1),this.$destroy=P}$on(t,n){if(!ae(n))return P;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!pt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O={queryHandler:{parse:e=>Lt(new URLSearchParams(e)),stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};function Lt(e){return[...e].reduce((t,[n,o])=>(t[n]=o,t),{})}const Ge=RegExp(/\:([^/()]+)/g);function St(e,t){if(navigator.userAgent.includes("jsdom"))return!1;t&&Xe(e),Ct()}function Ct(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){const t=document.getElementById(e.substring(1));t&&t.scrollIntoView()}}function Xe(e){e&&e.scrollTo&&e.dataset.routify!=="scroll-lock"&&e.dataset["routify-scroll"]!=="lock"&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",Xe(e.parentElement))}const Nt=(e,t)=>{const n=t?"":"/?$";return e=e.replace(/\/_fallback?$/,"(/|$)"),e=e.replace(/\/index$/,"(/index)?"),e=e.replace(Ge,"([^/]+)")+n,e=`^${e}`,e},Ye=e=>{const t=[];let n;for(;n=Ge.exec(e);)t.push(n[1]);return t},Tt=({path:e})=>e.split("/").filter(Boolean).map(t=>t==="_fallback"?"A":t.startsWith(":")?"B":"C").join("");function re(e,t){re._console=re._console||{log:console.log,warn:console.warn};const{_console:n}=re,o=e.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,e.component.shortPath.split("/").pop()).replace(/^./,s=>s.toUpperCase()).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const s of["log","warn"])console[s]=(...i)=>{r.includes(i[0])||n[s](...i)},t().then(()=>{console[s]=n[s]})}function ce(){let e=window.location.pathname+window.location.search+window.location.hash;const{url:t,options:n}=It(e);return{...pe(t),options:n}}function It(e){const[t,n]=e.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:t,options:o}}function pe(e){O.useHash&&(e=e.replace(/.*#(.+)/,"$1"));const t=e.startsWith("/")?window.location.origin:void 0,n=new URL(e,t),o=n.pathname+n.search+n.hash;return{url:n,fullpath:o}}function xe(e,t,n){const o=O.useHash?"#":"";let r;return r=jt(e,t,n),r=O.urlTransform.apply(r),r=o+r,r}function jt(e,t,n){const o=Object.assign({},n,t),r=At(e,t);for(const[s,i]of Object.entries(o))e=e.replace(new RegExp(`:${s}(/|$)`),i+"$1");return`${e}${r}`}function At(e,t){if(!O.queryHandler)return"";const n=Ye(e),o={};return t&&Object.entries(t).forEach(([r,s])=>{n.includes(r)||(o[r]=s)}),O.queryHandler.stringify(o).replace(/\?$/,"")}function Mt(e){let t;const n=e[2].default,o=ht(n,e,e[1],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&2)&&_t(o,n,r,r[1],t?mt(n,r[1],s,null):gt(r[1]),null)},i(r){t||(m(o,r),t=!0)},o(r){w(o,r),t=!1},d(r){o&&o.d(r)}}}function Ft(e,t,n){let{$$slots:o={},$$scope:r}=t,{scoped:s={}}=t;return e.$$set=i=>{"scoped"in i&&n(0,s=i.scoped),"$$scope"in i&&n(1,r=i.$$scope)},[s,r,o]}class Ut extends Y{constructor(t){super(),X(this,t,Ft,Mt,D,{scoped:0})}}const F=[];function qt(e,t){return{subscribe:N(e,t).subscribe}}function N(e,t=P){let n;const o=new Set;function r(c){if(D(e,c)&&(e=c,n)){const a=!F.length;for(const l of o)l[1](),F.push(l,e);if(a){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function s(c){r(c(e))}function i(c,a=P){const l=[c,a];return o.add(l),o.size===1&&(n=t(r)||P),c(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}function Bt(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return qt(n,i=>{let c=!1;const a=[];let l=0,u=P;const f=()=>{if(l)return;u();const p=t(o?a[0]:a,i);s?i(p):u=ae(p)?p:P},h=r.map((p,_)=>_e(p,R=>{a[_]=R,l&=~(1<<_),c&&f()},()=>{l|=1<<_}));return c=!0,f(),function(){B(h),u()}})}window.routify=window.routify||{};const Z=N(null),le=N([]);le.subscribe(e=>window.routify.routes=e);let Ze=N({component:{params:{}}});const Dt=N(null),et=N(!0);async function Ht({page:e,metatags:t,afterPageLoad:n,parentNode:o}){const r=e.last!==e;setTimeout(()=>St(o,r));const{path:s}=e,{options:i}=ce(),c=i.prefetch;for(const a of n._hooks)a&&await a(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:c},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}function he(e,t=!1){e=O.urlTransform.remove(e);let{pathname:n,search:o}=pe(e).url;const r=Q(le),s=r.find(u=>n===u.meta.name)||r.find(u=>n.match(u.regex));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=t?Object.create(s):s,{route:c,redirectPath:a,rewritePath:l}=tt(i,r);return l&&({pathname:n,search:o}=pe(xe(l,c.params)).url,a&&(c.redirectTo=xe(a,c.params||{}))),O.queryHandler&&(c.params=Object.assign({},O.queryHandler.parse(o))),Kt(c,n),c.leftover=e.replace(new RegExp(c.regex),""),c}function Kt(e,t){if(e.paramKeys){const n=Wt(e.layouts),o=t.split("/").filter(Boolean);zt(e.path).forEach((s,i)=>{s&&(e.params[s]=o[i],n[i]?n[i].param={[s]:o[i]}:e.param={[s]:o[i]})})}}function tt(e,t,n,o){const{redirect:r,rewrite:s}=e.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const i=r&&r.params,c=s&&s.params,a=t.find(l=>l.path.replace(/\/index$/,"")===o);return a===e&&console.error(`${o} is redirecting to itself`),a||console.error(`${e.path} is redirecting to non-existent path: ${o}`),(i||c)&&(a.params=Object.assign({},a.params,i,c)),tt(a,t,n,o)}return{route:e,redirectPath:n,rewritePath:o}}function Wt(e){const t=[];return e.forEach(n=>{t[n.path.split("/").filter(Boolean).length-1]=n}),t}function zt(e){return e.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])}function Re(e,t,n){const o=e.slice();return o[1]=t[n],o}function Ee(e,t){let n,o;return{key:e,first:null,c(){n=ge("iframe"),Pe(n.src,o=t[1].url)||z(n,"src",o),z(n,"frameborder","0"),z(n,"title","routify prefetcher"),this.first=n},m(r,s){E(r,n,s)},p(r,s){t=r,s&1&&!Pe(n.src,o=t[1].url)&&z(n,"src",o)},d(r){r&&k(n)}}}function Jt(e){let t,n=[],o=new Map,r=e[0];const s=i=>i[1].options.prefetch;for(let i=0;i<r.length;i+=1){let c=Re(e,r,i),a=s(c);o.set(a,n[i]=Ee(a,c))}return{c(){t=ge("div");for(let i=0;i<n.length;i+=1)n[i].c();z(t,"id","__routify_iframes"),He(t,"display","none")},m(i,c){E(i,t,c);for(let a=0;a<n.length;a+=1)n[a].m(t,null)},p(i,[c]){c&1&&(r=i[0],n=Ve(n,c,s,1,i,r,o,t,xt,Ee,null,Re))},i:P,o:P,d(i){i&&k(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}const Qt=2,me=N([]),nt=Bt(me,e=>e.slice(0,Qt));nt.subscribe(e=>e.forEach(({options:t})=>{setTimeout(()=>ot(t.prefetch),t.timeout)}));function ot(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=Q(me).find(o=>o&&o.options.prefetch==t);if(n){const{gracePeriod:o}=n.options,r=new Promise(i=>setTimeout(i,o)),s=new Promise(i=>{window.requestIdleCallback?window.requestIdleCallback(i):setTimeout(i,o+1e3)});Promise.all([r,s]).then(()=>{me.update(i=>i.filter(c=>c.options.prefetch!=t))})}}addEventListener("message",ot,!1);function Vt(e,t,n){let o;return q(e,nt,r=>n(0,o=r)),[o]}class Gt extends Y{constructor(t){super(),X(this,t,Vt,Jt,D,{})}}function Xt(){return We("routify")||Ze}const Yt={_hooks:[e=>et.set(!1)],subscribe:rt},Zt={_hooks:[],subscribe:rt};function rt(e){const t=this._hooks,n=t.length;return e(o=>{t[n]=o}),(...o)=>{delete t[n],e(...o)}}const y={subscribe(e){return this._origin=this.getOrigin(),e(se)},props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>{const n=y.getLongest(y.templates,e)||(o=>o);return[e,n(t)]}},{name:"createMeta",condition:()=>!0,action(e,t){y.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){y.writeMeta(`og:${e}`,t)}},{name:"createTitle",condition:e=>e==="title",action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const o=Q(Z).path,i=Object.keys(e[t]).filter(c=>o.includes(c)).sort((c,a)=>a.length-c.length)[0];return n[i]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],o=e.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:i}=se.services[r]||se.services.plain,c=document.querySelector(`meta[${s}='${e}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(s,e),a.setAttribute(i,t),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(e,t){typeof e=="string"&&y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=y.getOrigin;y.templates[e]=y.templates[e]||{},y.templates[e][n]=t},update(){Object.keys(y.props).forEach(e=>{let t=y.getLongest(y.props,e);y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})})},batchedUpdate(){y._pendingUpdate||(y._pendingUpdate=!0,setTimeout(()=>{y._pendingUpdate=!1,this.update()}))},_updateQueued:!1,_origin:!1,getOrigin(){if(this._origin)return this._origin;const e=Xt();return e&&Q(e).path||"/"},_pendingUpdate:!1},se=new Proxy(y,{set(e,t,n,o){const{props:r}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,o):(r[t]=r[t]||{},r[t][e.getOrigin()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});function ve(e,t,n){const o=e.slice();return o[21]=t[n].component,o[22]=t[n].componentFile,o[2]=t[n].decorator,o[1]=t[n].nodes,o}function Oe(e){let t=[],n=new Map,o,r,s=[e[4]];const i=c=>c[7];for(let c=0;c<1;c+=1){let a=ve(e,s,c),l=i(a);n.set(l,t[c]=Se(l,a))}return{c(){for(let c=0;c<1;c+=1)t[c].c();o=V()},m(c,a){for(let l=0;l<1;l+=1)t[l].m(c,a);E(c,o,a),r=!0},p(c,a){a&33554621&&(s=[c[4]],H(),t=Ve(t,a,i,1,c,s,n,o.parentNode,Rt,Se,o,ve),K())},i(c){if(!r){for(let a=0;a<1;a+=1)m(t[a]);r=!0}},o(c){for(let a=0;a<1;a+=1)w(t[a]);r=!1},d(c){for(let a=0;a<1;a+=1)t[a].d(c);c&&k(o)}}}function Le(e){let t,n;return t=new st({props:{decorator:e[2],nodes:e[1],scoped:{...e[0],...e[25]}}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p(o,r){const s={};r&4&&(s.decorator=o[2]),r&16&&(s.nodes=o[1]),r&33554433&&(s.scoped={...o[0],...o[25]}),t.$set(s)},i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}function en(e){let t,n,o=e[21]&&e[1].length&&Le(e);return{c(){o&&o.c(),t=V()},m(r,s){o&&o.m(r,s),E(r,t,s),n=!0},p(r,s){r[21]&&r[1].length?o?(o.p(r,s),s&16&&m(o,1)):(o=Le(r),o.c(),m(o,1),o.m(t.parentNode,t)):o&&(H(),w(o,1,1,()=>{o=null}),K())},i(r){n||(m(o),n=!0)},o(r){w(o),n=!1},d(r){o&&o.d(r),r&&k(t)}}}function tn(e){let t,n,o;const r=[{scoped:e[0]},{scopedSync:e[5]},e[3].param||{}];var s=e[22];function i(c){let a={$$slots:{default:[en,({scoped:l,decorator:u})=>({25:l,2:u}),({scoped:l,decorator:u})=>(l?33554432:0)|(u?4:0)]},$$scope:{ctx:c}};for(let l=0;l<r.length;l+=1)a=Ue(a,r[l]);return{props:a}}return s&&(t=ie(s,i(e))),{c(){t&&C(t.$$.fragment),n=ye()},m(c,a){t&&L(t,c,a),E(c,n,a),o=!0},p(c,a){const l=a&41?Et(r,[a&1&&{scoped:c[0]},a&32&&{scopedSync:c[5]},a&8&&vt(c[3].param||{})]):{};if(a&100663317&&(l.$$scope={dirty:a,ctx:c}),s!==(s=c[22])){if(t){H();const u=t;w(u.$$.fragment,1,0,()=>{S(u,1)}),K()}s?(t=ie(s,i(c)),C(t.$$.fragment),m(t.$$.fragment,1),L(t,n.parentNode,n)):t=null}else s&&t.$set(l)},i(c){o||(t&&m(t.$$.fragment,c),o=!0)},o(c){t&&w(t.$$.fragment,c),o=!1},d(c){t&&S(t,c),c&&k(n)}}}function Se(e,t){let n,o,r,s;var i=t[2];function c(a){return{props:{scoped:a[0],$$slots:{default:[tn]},$$scope:{ctx:a}}}}return i&&(o=ie(i,c(t))),{key:e,first:null,c(){n=V(),o&&C(o.$$.fragment),r=V(),this.first=n},m(a,l){E(a,n,l),o&&L(o,a,l),E(a,r,l),s=!0},p(a,l){t=a;const u={};if(l&1&&(u.scoped=t[0]),l&67108925&&(u.$$scope={dirty:l,ctx:t}),i!==(i=t[2])){if(o){H();const f=o;w(f.$$.fragment,1,0,()=>{S(f,1)}),K()}i?(o=ie(i,c(t)),C(o.$$.fragment),m(o.$$.fragment,1),L(o,r.parentNode,r)):o=null}else i&&o.$set(u)},i(a){s||(o&&m(o.$$.fragment,a),s=!0)},o(a){o&&w(o.$$.fragment,a),s=!1},d(a){a&&k(n),a&&k(r),o&&S(o,a)}}}function Ce(e){let t,n,o;return{c(){t=ge("div"),He(t,"display","contents")},m(r,s){E(r,t,s),n||(o=wt(e[10].call(null,t)),n=!0)},d(r){r&&k(t),n=!1,o()}}}function nn(e){let t,n,o,r=e[4]&&Oe(e),s=!e[6]&&Ce(e);return{c(){r&&r.c(),t=ye(),s&&s.c(),n=V()},m(i,c){r&&r.m(i,c),E(i,t,c),s&&s.m(i,c),E(i,n,c),o=!0},p(i,[c]){i[4]?r?(r.p(i,c),c&16&&m(r,1)):(r=Oe(i),r.c(),m(r,1),r.m(t.parentNode,t)):r&&(H(),w(r,1,1,()=>{r=null}),K()),i[6]?s&&(s.d(1),s=null):s||(s=Ce(i),s.c(),s.m(n.parentNode,n))},i(i){o||(m(r),o=!0)},o(i){w(r),o=!1},d(i){r&&r.d(i),i&&k(t),s&&s.d(i),i&&k(n)}}}function on(e,t,n){let o,r,s,i,c;q(e,Z,d=>n(14,s=d)),q(e,le,d=>n(16,c=d));let{nodes:a=[]}=t,{scoped:l={}}=t,{decorator:u=void 0}=t,f=null,h=null,p={},_,R=1;const v=N(null);q(e,v,d=>n(4,r=d));const T=We("routify")||Ze;q(e,T,d=>n(15,i=d));const W=d=>n(6,_=d.parentNode);Ke("routify",v);let j=[];function ee(d){let b=d.component();b instanceof Promise?b.then(A):A(b)}function A(d){n(5,p={...l});const b={...r,nodes:h,decorator:u||Ut,layout:f.isLayout?f:i.layout,component:f,route:s,routes:c,componentFile:d,parentNode:_||i.parentNode};v.set(b),yt(T,i.child=f,i),h.length===0&&g()}async function g(){await new Promise(b=>setTimeout(b));const d=r.component.path===s.path;!window.routify.stopAutoReady&&d&&Ht({page:r.component,metatags:se,afterPageLoad:Yt,parentNode:_})}function $({meta:d,path:b,param:ft,params:dt}){return JSON.stringify({path:b,invalidate:R,param:(d["param-is-page"]||d["slug-is-page"])&&ft,queryParams:d["query-params-is-page"]&&dt})}return e.$$set=d=>{"nodes"in d&&n(1,a=d.nodes),"scoped"in d&&n(0,l=d.scoped),"decorator"in d&&n(2,u=d.decorator)},e.$$.update=()=>{e.$$.dirty&6146&&j!==a&&(n(12,j=a),n(3,[f,...h]=[...a],f),n(3,f.api.reset=()=>n(11,R++,R),f)),e.$$.dirty&8&&ee(f),e.$$.dirty&2064&&n(7,o=r&&R&&$(r.component)),e.$$.dirty&16&&r&&re(r,$t)},[l,a,u,f,r,p,_,o,v,T,W,R,j]}class st extends Y{constructor(t){super(),X(this,t,on,nn,D,{nodes:1,scoped:0,decorator:2})}}function rn(e,t){let n=!1;function o(s,i){const c=s||ce().fullpath,a=he(c);a.redirectTo&&(history.replaceStateNative({},null,a.redirectTo),delete a.redirectTo);const f=[...(i&&he(ce().fullpath,e)||a).layouts,a];n&&delete n.last,a.last=n,n=a,s||Dt.set(a),Z.set(a),a.api.preload().then(()=>{et.set(!0),t(f)})}const r=sn(o);return{updatePage:o,destroy:r}}function sn(e){["pushState","replaceState"].forEach(r=>{history[r+"Native"]||(history[r+"Native"]=history[r]),history[r]=async function(s={},i,c){const a=location.pathname+location.search+location.hash;if(c===a)return!1;const{id:l,path:u,params:f}=Q(Z);s={id:l,path:u,params:f,...s};const h=new Event(r.toLowerCase());if(Object.assign(h,{state:s,title:i,url:c}),await Ne(h,c))return history[r+"Native"].apply(this,[s,i,c]),dispatchEvent(h)}});let t=!1;const n={click:cn,pushstate:()=>e(),replacestate:()=>e(),popstate:async r=>{t?t=!1:await Ne(r,ce().fullpath)?e():(t=!0,r.preventDefault(),history.go(1))}};return Object.entries(n).forEach(r=>addEventListener(...r)),()=>{Object.entries(n).forEach(r=>removeEventListener(...r))}}function cn(e){const t=e.target.closest("a")||e.composedPath().find(s=>s.tagName==="A"),n=t&&t.href;if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||!n||t.target||t.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;e.preventDefault(),history.pushState({},"",r)}async function Ne(e,t){const n=he(t).api;for(const o of Zt._hooks.filter(Boolean))if(!await o(e,n,{url:t}))return!1;return!0}function Te(e){let t,n;return t=new st({props:{nodes:e[0]}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p(o,r){const s={};r&1&&(s.nodes=o[0]),t.$set(s)},i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}function an(e){let t,n,o,r=e[0]&&e[1]!==null&&Te(e);return n=new Gt({}),{c(){r&&r.c(),t=ye(),C(n.$$.fragment)},m(s,i){r&&r.m(s,i),E(s,t,i),L(n,s,i),o=!0},p(s,[i]){s[0]&&s[1]!==null?r?(r.p(s,i),i&3&&m(r,1)):(r=Te(s),r.c(),m(r,1),r.m(t.parentNode,t)):r&&(H(),w(r,1,1,()=>{r=null}),K())},i(s){o||(m(r),m(n.$$.fragment,s),o=!0)},o(s){w(r),w(n.$$.fragment,s),o=!1},d(s){r&&r.d(s),s&&k(t),S(n,s)}}}function ln(e,t,n){let o;q(e,Z,p=>n(1,o=p));let{routes:r}=t,{config:s={}}=t,i,c;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(O,s),Ke("routifyupdatepage",(...p)=>c&&c.updatePage(...p));const l=p=>n(0,i=p),u=()=>{c&&(c.destroy(),c=null)};let f=null;const h=()=>{clearTimeout(f),f=setTimeout(()=>{u(),c=rn(r,l),le.set(r),c.updatePage()})};return Pt(u),e.$$set=p=>{"routes"in p&&n(2,r=p.routes),"config"in p&&n(3,s=p.config)},e.$$.update=()=>{e.$$.dirty&4&&r&&h()},[i,o,r,s]}class un extends Y{constructor(t){super(),X(this,t,ln,an,D,{routes:2,config:3})}}function x(e){const t=async function(o){return await it(e,{file:o.tree,state:{treePayload:o},scope:{}})};return t.sync=function(o){return ct(e,{file:o.tree,state:{treePayload:o},scope:{}})},t}async function it(e,t){const n=await e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=await Promise.all(o.children.map(async s=>it(e,{state:t.state,scope:at(t.scope||{}),parent:t.file,file:await s})));o.children=r.filter(Boolean)}return o}function ct(e,t){const n=e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=o.children.map(s=>ct(e,{state:t.state,scope:at(t.scope||{}),parent:t.file,file:s}));o.children=r.filter(Boolean)}return o}function at(e){return JSON.parse(JSON.stringify(e))}const fn=x(({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=Nt(e.path,e.isFallback))}),dn=x(({file:e})=>{e.paramKeys=Ye(e.path)}),pn=x(({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path}),hn=x(({file:e})=>{e.ranking=Tt(e)}),mn=x(({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map(o=>({isMeta:!0,...o,meta:o}))))}),_n=x(e=>{const{file:t}=e,{isFallback:n,meta:o}=t,r=t.path.split("/").pop().startsWith(":"),s=t.path.endsWith("/index"),i=o.index||o.index===0,c=o.index===!1;t.isIndexable=i||!n&&!r&&!s&&!c,t.isNonIndexable=!t.isIndexable}),gn=x(({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>Ie(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>Ie(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>lt(t)})});function lt(e,t=[]){return e&&(t.unshift(e),lt(e.parent,t)),t}function Ie(e,t){if(!e.root){const n=e.parent.children.filter(r=>r.isIndexable),o=n.indexOf(e);return n[o+t]}}const yn=x(({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})}),wn=x(({file:e,scope:t})=>{Object.defineProperty(e,"layouts",{get:()=>n(e)});function n(o){if(!o.isLayout&&o.meta.reset)return[];const{parent:r}=o,s=r&&r.component&&r,i=s&&(s.isReset||s.meta.reset),c=r&&!i&&n(r)||[];return s&&c.push(s),c}}),bn=e=>{x(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(e),e.routes.sort((t,n)=>t.ranking>=n.ranking?-1:1)},Pn=x(({file:e})=>{const t=e.root?a:e.children?e.isPage?i:o:e.isReset?c:e.isLayout?n:e.isFallback?r:s;Object.setPrototypeOf(e,t.prototype);function n(){}function o(){}function r(){}function s(){}function i(){}function c(){}function a(){}}),$n=Object.freeze(Object.defineProperty({__proto__:null,addMetaChildren:mn,assignIndex:yn,assignLayout:wn,assignRelations:gn,createFlatList:bn,setIsIndexable:_n,setParamKeys:dn,setPrototype:Pn,setRank:hn,setRegex:fn,setShortPath:pn},Symbol.toStringTag,{value:"Module"})),kn={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function ut(e){return Object.entries(kn).forEach(([t,n])=>{typeof e[t]>"u"&&(e[t]=n)}),e.children&&(e.children=e.children.map(ut)),e}const xn=x(({file:e})=>{e.api=new Rn(e)});class Rn{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=En(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,n)=>t.isMeta&&n.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),n=(n.meta.index||n.meta.title||n.path).toString(),t.localeCompare(n,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return je(this,1)}get prev(){return je(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map(n=>n.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():this.__file.index?this.__file.index.component():!1}get componentWithIndex(){return new Promise(t=>Promise.all([this.component,this.index&&this.index.component]).then(n=>t(n)))}get index(){const t=this.__file.children&&this.__file.children.find(n=>n.isIndex);return t&&t.api}}function je(e,t){if(!e.__file.root){const o=e.parent.children.indexOf(e);return e.parent.children[o+t]}}function En(e){return typeof e.meta.title<"u"?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}const Ae={...$n,restoreDefaults:({tree:e})=>ut(e),assignAPI:xn};function vn(e){const t=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let o of t)(Ae[o].sync||Ae[o])(n);return n}const On="modulepreload",Ln=function(e){return"/test/"+e},Me={},Fe=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Ln(s),s in Me)return;Me[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":On,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Sn={root:!0,children:[{isPage:!0,path:"/about",id:"_about",component:()=>Fe(()=>import("./about-44f2b630.js"),[]).then(e=>e.default)},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>Fe(()=>import("./index-47e7c5ce.js"),[]).then(e=>e.default)}],path:"/"},{tree:In,routes:Cn}=vn(Sn);function Nn(e){let t,n;return t=new un({props:{routes:Cn}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p:P,i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}class Tn extends Y{constructor(t){super(),X(this,t,null,Nn,D,{})}}new Tn({target:document.getElementById("app")});export{Y as S,ye as a,z as b,E as c,k as d,ge as e,X as i,P as n,D as s};