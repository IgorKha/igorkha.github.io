"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8391],{3194:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(7294),a=n(179),r=n(9669),c=n.n(r);const s=()=>{const[e,t]=(0,l.useState)(""),[n,a]=(0,l.useState)(null),[r,s]=(0,l.useState)(!1);return l.createElement("div",{className:"container"},l.createElement("p",{style:{margin:"20px 10px"}}),l.createElement("h1",null,"Get Telegram ID"),l.createElement("label",null,"Enter your bot token:",l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Your bot token"})),l.createElement("button",{onClick:()=>{e&&(async()=>{s(!0);try{const t=await c().post(`https://api.telegram.org/bot${e}/getUpdates`,{offset:5});a(t.data)}catch(t){console.error(t)}finally{s(!1)}})()}},"Send Request"),r?l.createElement("p",null,"Loading Telegram data..."):n?l.createElement("pre",{className:"prism-code language-json"},JSON.stringify(n,null,2)):null)};const u=function(){return l.createElement(a.Z,null,l.createElement("main",null,l.createElement(s,null)))}}}]);