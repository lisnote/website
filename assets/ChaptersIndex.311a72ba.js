import{a as d,P as l}from"./main.b8c4e274.js";import{h as c,f as p,n as _,k as r,l as a,F as u,J as m,u as f,K as h,x,I as v}from"./@vue.80eed748.js";import"./vue-router.44132317.js";import"./lispress.9248cfd1.js";import"./pinia.01eff0ed.js";import"./vue-demi.b3a9cad9.js";const y={id:"chapters-index"},S=["data-id"],g=c({setup(k){let n=l(),i=p(function(){let t=n.article.querySelectorAll("h1,h2,h3,h4,h5,h6");return Array.from(t)});return _(()=>{let t=document.querySelector("#chapters-index");t==null||t.addEventListener("click",s=>{var o;let e=s.target.dataset.id;(e==null?void 0:e.indexOf("#"))==0&&window.scrollTo({top:(o=document.querySelector(e))==null?void 0:o.offsetTop,behavior:"smooth"})})}),(t,s)=>(r(),a("div",y,[(r(!0),a(u,null,m(f(i),e=>(r(),a("div",{key:e.id,style:h({"--level":Number(e.tagName.substring(1))*10})},[x("span",{"data-id":`#${e.id}`},v(e.innerText),9,S)],4))),128))]))}});var N=d(g,[["__scopeId","data-v-4a1ac8a9"]]);export{N as default};
