import{b as i}from"./vue-router.44132317.js";import{G as r}from"./gitalk.e371edc7.js";import{i as o}from"./lispress.9248cfd1.js";import{h as a,n as s,k as c,l,x as m}from"./@vue.80eed748.js";const _=m("div",{id:"gitalk-container"},null,-1),u=[_],v=a({setup(d){let t=i().query.article,e=o.config();const n=new r({clientID:e.clientID+"",clientSecret:e.clientSecret+"",repo:e.username+".github.io",owner:e.username,admin:[e.username],id:t.substring(0,49),distractionFreeMode:!1});return s(()=>{n.render("gitalk-container")}),(p,f)=>(c(),l("div",null,u))}});export{v as default};
