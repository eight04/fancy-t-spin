import{S as t,i as e,s,e as a,t as n,c as o,a as c,j as r,d as i,b as h,k as l,g as d,l as u,m as f,p as m,n as p,q as v,r as x}from"../index-1cb8a252.js";const b=function(){const t=new Set;let e=w();return window.addEventListener("hashchange",(()=>{const t=w();t!==e&&(e=t,s())})),{subscribe:e=>(t.add(e),s(),()=>t.delete(e)),set(t){history.pushState({},"",`#${t}`);try{document.getElementById(t).scrollIntoView({behavior:"smooth"})}catch(t){console.warn(t)}e=t,s()}};function s(){for(const s of t)s(e)}}();function w(){return location.hash.replace(/^#/,"")}function g(t){let e,s,v,x,b;return{c(){e=a("a"),s=n(t[1]),this.h()},l(a){e=o(a,"A",{href:!0});var n=c(e);s=r(n,t[1]),n.forEach(i),this.h()},h(){h(e,"href",v="#"+t[0]),l(e,"active",t[0]===t[2])},m(a,n){d(a,e,n),u(e,s),x||(b=f(e,"click",t[3]),x=!0)},p(t,[a]){2&a&&m(s,t[1]),1&a&&v!==(v="#"+t[0])&&h(e,"href",v),5&a&&l(e,"active",t[0]===t[2])},i:p,o:p,d(t){t&&i(e),x=!1,b()}}}function y(t,e,s){let a;v(t,b,(t=>s(2,a=t)));let{id:n,text:o}=e;return t.$$set=t=>{"id"in t&&s(0,n=t.id),"text"in t&&s(1,o=t.text)},[n,o,a,function(t){t.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth"}),x(b,a=n,a)}]}class E extends t{constructor(t){super(),e(this,t,y,g,s,{id:0,text:1})}}export{E as default};