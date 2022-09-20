import{S as Fe,i as Pe,s as qe,e as v,t as w,k as y,c as h,a as u,h as I,d as r,m as E,b as g,g as D,J as a,n as ue,x as Ae,y as Oe,z as Ye,r as W,p as he,C as Be,K as Le,q as Te,L as ve,o as Ue}from"../chunks/index-92502c41.js";import{F as Je}from"../chunks/flipCard-b5b6035a.js";import{p as De}from"../chunks/projects-c4100f22.js";import{i as k}from"../chunks/general-info-a55be06f.js";import"../chunks/paths-396f020f.js";function He(i,l,s){const o=i.slice();return o[0]=l[s],o}function Ve(i,l,s){const o=i.slice();return o[3]=l[s],o}function $e(i,l,s){const o=i.slice();return o[0]=l[s],o}function je(i){let l,s,o,x=i[0].type+"",f,p,z;return{c(){l=v("p"),s=v("a"),o=w("\u27BC "),f=w(x),z=y(),this.h()},l(H){l=h(H,"P",{});var _=u(l);s=h(_,"A",{href:!0,target:!0,class:!0});var q=u(s);o=I(q,"\u27BC "),f=I(q,x),q.forEach(r),z=E(_),_.forEach(r),this.h()},h(){g(s,"href",p=i[0].url),g(s,"target","_blank"),g(s,"class","svelte-3gfoex")},m(H,_){D(H,l,_),a(l,s),a(s,o),a(s,f),a(l,z)},p:ue,d(H){H&&r(l)}}}function ze(i){let l,s;return l=new Je({props:{title:i[3].title,description:i[3].description,image_url:i[3].image_url,follow_url:i[3].follow_url}}),{c(){Ae(l.$$.fragment)},l(o){Oe(l.$$.fragment,o)},m(o,x){Ye(l,o,x),s=!0},p:ue,i(o){s||(W(l.$$.fragment,o),s=!0)},o(o){he(l.$$.fragment,o),s=!1},d(o){Be(l,o)}}}function Se(i){let l,s=i[0].type+"",o,x;return{c(){l=v("a"),o=w(s),this.h()},l(f){l=h(f,"A",{href:!0,target:!0,class:!0});var p=u(l);o=I(p,s),p.forEach(r),this.h()},h(){g(l,"href",x=i[0].url),g(l,"target","_blank"),g(l,"class","svelte-3gfoex")},m(f,p){D(f,l,p),a(l,o)},p:ue,d(f){f&&r(l)}}}function Ke(i){let l,s,o,x,f,p,z,H,_,q=k.firstName+"",X,Z,de=k.lastName+"",ee,te,A,me=k.tagLine+"",le,oe,S,ae,O,Y,se,K,C,re,M,$,R,V,j,xe=k.firstName+"",ne,ce,_e=k.lastName+"",ie,fe,ge,F,U;document.title=l=k.firstName+" "+k.lastName+" | Portfolio";let B=k.contacts,d=[];for(let e=0;e<B.length;e+=1)d[e]=je($e(i,B,e));let P=De,c=[];for(let e=0;e<P.length;e+=1)c[e]=ze(Ve(i,P,e));const Ce=e=>he(c[e],1,1,()=>{c[e]=null});let L=k.contacts,m=[];for(let e=0;e<L.length;e+=1)m[e]=Se(He(i,L,e));return{c(){s=y(),o=v("section"),x=v("div"),f=v("div"),p=v("h3"),z=w("\u{1F44B} Hello, I'm"),H=y(),_=v("h1"),X=w(q),Z=y(),ee=w(de),te=y(),A=v("h2"),le=w(me),oe=y(),S=v("div");for(let e=0;e<d.length;e+=1)d[e].c();ae=y(),O=v("div"),Y=v("div"),se=w("Find out more \u21E3\u21E3\u21E3"),K=y(),C=v("h2"),re=w("Projects"),M=y(),$=v("div");for(let e=0;e<c.length;e+=1)c[e].c();R=y(),V=v("div"),j=v("h4"),ne=w(xe),ce=y(),ie=w(_e),fe=w(" - 2022"),ge=y(),F=v("div");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){Le('[data-svelte="svelte-11h4ilp"]',document.head).forEach(r),s=E(e),o=h(e,"SECTION",{id:!0,class:!0});var t=u(o);x=h(t,"DIV",{class:!0});var b=u(x);f=h(b,"DIV",{class:!0});var T=u(f);p=h(T,"H3",{class:!0});var pe=u(p);z=I(pe,"\u{1F44B} Hello, I'm"),pe.forEach(r),H=E(T),_=h(T,"H1",{class:!0});var G=u(_);X=I(G,q),Z=E(G),ee=I(G,de),G.forEach(r),te=E(T),A=h(T,"H2",{class:!0});var be=u(A);le=I(be,me),be.forEach(r),T.forEach(r),oe=E(b),S=h(b,"DIV",{class:!0});var ke=u(S);for(let N=0;N<d.length;N+=1)d[N].l(ke);ke.forEach(r),b.forEach(r),ae=E(t),O=h(t,"DIV",{class:!0});var ye=u(O);Y=h(ye,"DIV",{class:!0});var Ee=u(Y);se=I(Ee,"Find out more \u21E3\u21E3\u21E3"),Ee.forEach(r),ye.forEach(r),t.forEach(r),K=E(e),C=h(e,"H2",{class:!0});var we=u(C);re=I(we,"Projects"),we.forEach(r),M=E(e),$=h(e,"DIV",{class:!0});var Ie=u($);for(let N=0;N<c.length;N+=1)c[N].l(Ie);Ie.forEach(r),R=E(e),V=h(e,"DIV",{class:!0});var Q=u(V);j=h(Q,"H4",{});var J=u(j);ne=I(J,xe),ce=E(J),ie=I(J,_e),fe=I(J," - 2022"),J.forEach(r),ge=E(Q),F=h(Q,"DIV",{class:!0});var Ne=u(F);for(let N=0;N<m.length;N+=1)m[N].l(Ne);Ne.forEach(r),Q.forEach(r),this.h()},h(){g(p,"class","svelte-3gfoex"),g(_,"class","svelte-3gfoex"),g(A,"class","svelte-3gfoex"),g(f,"class","left"),g(S,"class","contacts svelte-3gfoex"),g(x,"class","header-text svelte-3gfoex"),g(Y,"class","down svelte-3gfoex"),g(O,"class","scroll svelte-3gfoex"),g(o,"id","about"),g(o,"class","svelte-3gfoex"),g(C,"class","svelte-3gfoex"),g($,"class","grid svelte-3gfoex"),g(F,"class","contact-items svelte-3gfoex"),g(V,"class","contact-section svelte-3gfoex")},m(e,n){D(e,s,n),D(e,o,n),a(o,x),a(x,f),a(f,p),a(p,z),a(f,H),a(f,_),a(_,X),a(_,Z),a(_,ee),a(f,te),a(f,A),a(A,le),a(x,oe),a(x,S);for(let t=0;t<d.length;t+=1)d[t].m(S,null);a(o,ae),a(o,O),a(O,Y),a(Y,se),D(e,K,n),D(e,C,n),a(C,re),D(e,M,n),D(e,$,n);for(let t=0;t<c.length;t+=1)c[t].m($,null);D(e,R,n),D(e,V,n),a(V,j),a(j,ne),a(j,ce),a(j,ie),a(j,fe),a(V,ge),a(V,F);for(let t=0;t<m.length;t+=1)m[t].m(F,null);U=!0},p(e,[n]){if((!U||n&0)&&l!==(l=k.firstName+" "+k.lastName+" | Portfolio")&&(document.title=l),n&0){B=k.contacts;let t;for(t=0;t<B.length;t+=1){const b=$e(e,B,t);d[t]?d[t].p(b,n):(d[t]=je(b),d[t].c(),d[t].m(S,null))}for(;t<d.length;t+=1)d[t].d(1);d.length=B.length}if(n&0){P=De;let t;for(t=0;t<P.length;t+=1){const b=Ve(e,P,t);c[t]?(c[t].p(b,n),W(c[t],1)):(c[t]=ze(b),c[t].c(),W(c[t],1),c[t].m($,null))}for(Ue(),t=P.length;t<c.length;t+=1)Ce(t);Te()}if(n&0){L=k.contacts;let t;for(t=0;t<L.length;t+=1){const b=He(e,L,t);m[t]?m[t].p(b,n):(m[t]=Se(b),m[t].c(),m[t].m(F,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=L.length}},i(e){if(!U){for(let n=0;n<P.length;n+=1)W(c[n]);U=!0}},o(e){c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)he(c[n]);U=!1},d(e){e&&r(s),e&&r(o),ve(d,e),e&&r(K),e&&r(C),e&&r(M),e&&r($),ve(c,e),e&&r(R),e&&r(V),ve(m,e)}}}const Xe=!0;class Ze extends Fe{constructor(l){super(),Pe(this,l,null,Ke,qe,{})}}export{Ze as default,Xe as prerender};
