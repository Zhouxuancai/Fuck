import{S as I,i as Y,s as k,C as F,D as M,E as N,F as O,g,d as $,G as K,H as V,e as C,b as q,v as R,I as w,f as U,h,w as W,J as Z,k as S,y as A,l as E,m as y,z as P,n as _,A as D,K as L,L as j,M as X,N as x,O as ee,B,P as Q,Q as T,R as b,a as te,q as se,c as re,r as ne,T as H,U as le,V as oe}from"../chunks/index.80db7be3.js";import{a as ae}from"../chunks/navigation.b686b6b3.js";import{n as J,p as ie}from"../chunks/stores.7e2f5cd2.js";const ue=90,ce=Math.floor(1e3/ue);function fe(l){const s=new Set;let r=l,t=null,e=0;const n=i=>{if(i-e>ce){t=null,l=r;for(const p of s)p(l);e=i}else t=requestAnimationFrame(n)},a=i=>(s.add(i),i(l),()=>s.delete(i)),d=i=>{i!==r&&(r=i,t&&cancelAnimationFrame(t),t=requestAnimationFrame(n))};return{subscribe:a,set:d,update:i=>{d(i(r))}}}function de(l){let s;const r=l[2].default,t=F(r,l,l[1],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,n){t&&t.m(e,n),s=!0},p(e,[n]){t&&t.p&&(!s||n&2)&&M(t,r,e,e[1],s?O(r,e[1],n,null):N(e[1]),null)},i(e){s||(g(t,e),s=!0)},o(e){$(t,e),s=!1},d(e){t&&t.d(e)}}}function pe(l,s,r){let{$$slots:t={},$$scope:e}=s;const n=fe(window.scrollY);let a=!1;K("scrollY",n);function d(){a=!0}function c(){a||n.set(window.scrollY)}return window.addEventListener("scroll",c),V(()=>{window.removeEventListener("scroll",c)}),l.$$set=i=>{"$$scope"in i&&r(1,e=i.$$scope)},[d,e,t]}class me extends I{constructor(s){super(),Y(this,s,pe,de,k,{stopScrollStore:0})}get stopScrollStore(){return this.$$.ctx[0]}}function z(l){return Math.pow(l-1,3)*(1-l)+1}function _e(l){let s;const r=l[4].default,t=F(r,l,l[6],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,n){t&&t.m(e,n),s=!0},p(e,n){t&&t.p&&(!s||n&64)&&M(t,r,e,e[6],s?O(r,e[6],n,null):N(e[6]),null)},i(e){s||(g(t,e),s=!0)},o(e){$(t,e),s=!1},d(e){t&&t.d(e)}}}function G(l){let s,r,t,e,n,a,d,c;function i(o){l[5](o)}let p={$$slots:{default:[_e]},$$scope:{ctx:l}};return l[1]!==void 0&&(p.stopScrollStore=l[1]),r=new me({props:p}),W.push(()=>Z(r,"stopScrollStore",i)),{c(){s=S("div"),A(r.$$.fragment),this.h()},l(o){s=E(o,"DIV",{"data-key":!0});var f=y(s);P(r.$$.fragment,f),f.forEach(h),this.h()},h(){_(s,"data-key",l[0])},m(o,f){q(o,s,f),D(r,s,null),a=!0,d||(c=L(s,"introend",ge),d=!0)},p(o,f){const u={};f&64&&(u.$$scope={dirty:f,ctx:o}),!t&&f&2&&(t=!0,u.stopScrollStore=o[1],j(()=>t=!1)),r.$set(u),(!a||f&1)&&_(s,"data-key",o[0])},i(o){a||(g(r.$$.fragment,o),X(()=>{a&&(n&&n.end(1),e=x(s,l[3],{}),e.start())}),a=!0)},o(o){$(r.$$.fragment,o),e&&e.invalidate(),n=ee(s,l[2],{}),a=!1},d(o){o&&h(s),B(r),o&&n&&n.end(),d=!1,c()}}}function he(l){let s=l[0],r,t,e=G(l);return{c(){e.c(),r=C()},l(n){e.l(n),r=C()},m(n,a){e.m(n,a),q(n,r,a),t=!0},p(n,[a]){a&1&&k(s,s=n[0])?(R(),$(e,1,1,w),U(),e=G(n),e.c(),g(e,1),e.m(r.parentNode,r)):e.p(n,a)},i(n){t||(g(e),t=!0)},o(n){$(e),t=!1},d(n){n&&h(r),e.d(n)}}}function ge(){}function $e(l,s,r){let{$$slots:t={},$$scope:e}=s,{key:n}=s;function a(u){const m=(c[i]??0)-window.scrollY;return u.style.setProperty("transform",`translateY(${m}px)`),u.getAttribute("data-key")==="/"?{delay:0,duration:100,css:v=>`opacity: ${v}`}:{delay:0,duration:200,easing:z,css:v=>`opacity: ${v}; transform: translateY(${m+16-v*16}px)`}}function d(u){return u.getAttribute("data-key")==="/"?{delay:200,duration:100,css:m=>`opacity: ${m}`}:{delay:100,duration:200,easing:z,css:m=>`opacity: ${m}; transform: translateY(${16-m*16}px)`}}const c=[];let i=0,p;const o=J.subscribe(u=>{u==null||u.type=="leave"||(u.type=="link"?(c.splice(i,1/0,window.scrollY),i+=1):u.type=="popstate"&&(c.splice(i,1,window.scrollY),i+=u.delta),p==null||p(),r(1,p=void 0),document.documentElement.style.setProperty("scroll-behavior","auto"))});ae(()=>{document.documentElement.style.setProperty("scroll-behavior","smooth")}),V(()=>{c.length=0,o()});function f(u){p=u,r(1,p)}return l.$$set=u=>{"key"in u&&r(0,n=u.key),"$$scope"in u&&r(6,e=u.$$scope)},[n,p,a,d,t,f,e]}class ye extends I{constructor(s){super(),Y(this,s,$e,he,k,{key:0})}}function be(l){let s,r;return{c(){s=Q("svg"),r=Q("path"),this.h()},l(t){s=T(t,"svg",{xmlns:!0,height:!0,width:!0});var e=y(s);r=T(e,"path",{d:!0}),y(r).forEach(h),e.forEach(h),this.h()},h(){_(r,"d","m10.875 19.3-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713L7.4 11h11.175q.425 0 .713.287.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7.012.425-.288.7-.275.3-.7.3-.425 0-.725-.3Z"),_(s,"xmlns","http://www.w3.org/2000/svg"),_(s,"height","24"),_(s,"width","24")},m(t,e){q(t,s,e),b(s,r)},p:w,i:w,o:w,d(t){t&&h(s)}}}class ke extends I{constructor(s){super(),Y(this,s,null,be,k,{})}}function ve(l){let s;const r=l[5].default,t=F(r,l,l[6],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,n){t&&t.m(e,n),s=!0},p(e,n){t&&t.p&&(!s||n&64)&&M(t,r,e,e[6],s?O(r,e[6],n,null):N(e[6]),null)},i(e){s||(g(t,e),s=!0)},o(e){$(t,e),s=!1},d(e){t&&t.d(e)}}}function we(l){let s,r,t,e,n,a,d,c,i,p;return t=new ye({props:{key:l[0].pathname,$$slots:{default:[ve]},$$scope:{ctx:l}}}),a=new ke({}),{c(){s=S("div"),r=S("main"),A(t.$$.fragment),e=te(),n=S("a"),A(a.$$.fragment),d=se(`
		Back`),this.h()},l(o){s=E(o,"DIV",{class:!0});var f=y(s);r=E(f,"MAIN",{class:!0});var u=y(r);P(t.$$.fragment,u),u.forEach(h),e=re(f),n=E(f,"A",{class:!0,href:!0});var m=y(n);P(a.$$.fragment,m),d=ne(m,`
		Back`),m.forEach(h),f.forEach(h),this.h()},h(){_(r,"class","svelte-1iinew6"),_(n,"class","back-button filled-button svelte-1iinew6"),_(n,"href",l[3]),H(n,"visible",l[1][l[2]]!=="/"),_(s,"class","app")},m(o,f){q(o,s,f),b(s,r),D(t,r,null),b(s,e),b(s,n),D(a,n,null),b(n,d),c=!0,i||(p=[L(n,"click",l[4]),L(n,"keypress",l[4])],i=!0)},p(o,[f]){const u={};f&1&&(u.key=o[0].pathname),f&64&&(u.$$scope={dirty:f,ctx:o}),t.$set(u),(!c||f&8)&&_(n,"href",o[3]),(!c||f&6)&&H(n,"visible",o[1][o[2]]!=="/")},i(o){c||(g(t.$$.fragment,o),g(a.$$.fragment,o),c=!0)},o(o){$(t.$$.fragment,o),$(a.$$.fragment,o),c=!1},d(o){o&&h(s),B(t),B(a),i=!1,le(p)}}}function Se(l,s,r){let t,{$$slots:e={},$$scope:n}=s,{data:a}=s;const d=[oe(ie).url.pathname];let c=0;const i=J.subscribe(o=>{o!=null&&(o.type=="link"?(r(2,c+=1),d.splice(c,1/0,o.to.url.pathname)):o.type=="popstate"&&r(2,c+=o.delta))});function p(o){c>0&&d[c-1]==="/"&&(o.preventDefault(),history.back())}return V(()=>{r(1,d.length=0,d),i()}),l.$$set=o=>{"data"in o&&r(0,a=o.data),"$$scope"in o&&r(6,n=o.$$scope)},l.$$.update=()=>{l.$$.dirty&6&&r(3,t=d[c-1]??"/")},[a,d,c,t,p,e,n]}class qe extends I{constructor(s){super(),Y(this,s,Se,we,k,{data:0})}}export{qe as default};
