function $(){}const X=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function Q(){return Object.create(null)}function E(t){t.forEach(Y)}function S(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Bt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function yt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t){let e;return Z(t,n=>e=n)(),e}function Ft(t,e,n){t.$$.on_destroy.push(Z(e,n))}function It(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,o){if(r){const s=tt(e,n,i,o);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){return t&&S(t.destroy)?t.destroy:$}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),F=et?t=>requestAnimationFrame(t):$;const w=new Set;function it(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(it)}function rt(t){let e;return w.size===0&&F(it),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let R=!1;function gt(){R=!0}function $t(){R=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:xt(1,r,d=>e[n[d]].claim_order,c))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const o=[],s=[];let l=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);l>=u;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<s.length;u++){for(;c<o.length&&s[u].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[u],f)}}function st(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=G("style");return vt(ot(t),e),e.sheet}function vt(t,e){return st(t.head||t,e),e.sheet}function Et(t,e){if(R){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){R&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function G(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Vt(){return J(" ")}function Xt(){return J("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){kt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const u=n(l);return u===void 0?t.splice(s,1):t[s]=u,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const u=n(l);return u===void 0?t.splice(s,1):t[s]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ut(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return ut(t,e,n,G)}function te(t,e,n){return ut(t,e,n,Nt)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ee(t){return Ct(t," ")}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let z;function St(){if(z===void 0){z=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{z=!0}}return z}function re(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=St();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=U(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=U(i.contentWindow,"resize",e),e()}),st(t,i),()=>{(r||o&&i.contentWindow)&&o(),I(i)}}function se(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ce(t,e){return new t(e)}const T=new Map;let O=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:wt(e),rules:{}};return T.set(t,n),n}function lt(t,e,n,i,r,o,s,l=0){const u=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=u){const p=e+(n-e)*o(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Dt(f)}_${l}`,d=ot(t),{stylesheet:_,rules:h}=T.get(d)||zt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Mt())}function Mt(){F(()=>{O||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&I(e)}),T.clear())})}let k;function A(t){k=t}function j(){if(!k)throw new Error("Function called outside component initialization");return k}function ue(t){j().$$.on_mount.push(t)}function le(t){j().$$.after_update.push(t)}function ae(t){j().$$.on_destroy.push(t)}function fe(t,e){return j().$$.context.set(t,e),e}function de(t){return j().$$.context.get(t)}const b=[],V=[];let v=[];const B=[],at=Promise.resolve();let H=!1;function ft(){H||(H=!0,at.then(dt))}function _e(){return ft(),at}function C(t){v.push(t)}function he(t){B.push(t)}const L=new Set;let x=0;function dt(){if(x!==0)return;const t=k;do{try{for(;x<b.length;){const e=b[x];x++,A(e),Tt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(A(null),b.length=0,x=0;V.length;)V.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];L.has(n)||(L.add(n),n())}v.length=0}while(b.length);for(;B.length;)B.pop()();H=!1,L.clear(),A(t)}function Tt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function Ot(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let N;function _t(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function P(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function me(){g={r:0,c:[],p:g}}function pe(){g.r||E(g.c),g=g.p}function Pt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,l,u=0;function c(){s&&W(t,s)}function f(){const{delay:d=0,duration:_=300,easing:h=X,tick:y=$,css:m}=r||ht;m&&(s=lt(t,0,1,_,d,h,m,u++)),y(0,1);const p=nt()+d,mt=p+_;l&&l.abort(),o=!0,C(()=>P(t,!0,"start")),l=rt(q=>{if(o){if(q>=mt)return y(1,0),P(t,!0,"end"),c(),o=!1;if(q>=p){const K=h((q-p)/_);y(K,1-K)}}return o})}let a=!1;return{start(){a||(a=!0,W(t),S(r)?(r=r(i),_t().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function $e(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const l=g;l.r+=1;function u(){const{delay:c=0,duration:f=300,easing:a=X,tick:d=$,css:_}=r||ht;_&&(s=lt(t,1,0,f,c,a,_));const h=nt()+c,y=h+f;C(()=>P(t,!1,"start")),rt(m=>{if(o){if(m>=y)return d(0,1),P(t,!1,"end"),--l.r||E(l.c),!1;if(m>=h){const p=a((m-h)/f);d(1-p,p)}}return o})}return S(r)?_t().then(()=>{r=r(i),u()}):u(),{end(c){c&&r.tick&&r.tick(1,0),o&&(s&&W(t,s),o=!1)}}}function xe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function be(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(Y).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),o.forEach(C)}function qt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,r,o,s,l=[-1]){const u=k;A(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Q(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Lt(t,a)),d}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){gt();const a=At(e.target);c.fragment&&c.fragment.l(a),a.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),$t(),dt()}A(u)}class Ee{$destroy(){qt(this,1),this.$destroy=$}$on(e,n){if(!S(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as $,Rt as A,qt as B,It as C,Jt as D,Kt as E,Gt as F,fe as G,ae as H,$ as I,xe as J,U as K,he as L,C as M,ge as N,$e as O,Nt as P,te as Q,Et as R,Ee as S,se as T,E as U,Ht as V,Ft as W,re as X,Qt as Y,de as Z,oe as _,Vt as a,Ut as b,ee as c,ye as d,Xt as e,pe as f,Pt as g,I as h,ve as i,le as j,G as k,Zt as l,At as m,Yt as n,ue as o,ie as p,J as q,Ct as r,Wt as s,_e as t,ne as u,me as v,V as w,ce as x,be as y,we as z};
