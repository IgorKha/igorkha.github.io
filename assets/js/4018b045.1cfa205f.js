"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3837],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:d,className:m}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[f,w]=(0,n.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.o5)();if(null!=d){const e=N[d];null!=e&&e!==f&&b.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),r=b[a].value;r!==f&&(y(t),w(r),null!=d&&v(d,String(r)))},Z=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>T.push(e),onKeyDown:Z,onClick:I},o,{className:(0,l.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function d(e){const t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},5752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(5488),a(5162),a(814);const l={slug:"Bandwidth-ZeroTier-on-NXP-LS1046",title:"Bandwidth ZeroTier on NXP LS1046",authors:"IgorKha",tags:["test","zerotier","nxp"]},o=void 0,i={permalink:"/blog/Bandwidth-ZeroTier-on-NXP-LS1046",editUrl:"https://github.com/IgorKha/igorkha.github.io/tree/main/blog/2022-04-27-Bandwidth-ZeroTier-on-NXP-LS1046.mdx",source:"@site/blog/2022-04-27-Bandwidth-ZeroTier-on-NXP-LS1046.mdx",title:"Bandwidth ZeroTier on NXP LS1046",description:"Devices",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[{label:"test",permalink:"/blog/tags/test"},{label:"zerotier",permalink:"/blog/tags/zerotier"},{label:"nxp",permalink:"/blog/tags/nxp"}],readingTime:2.8,hasTruncateMarker:!0,authors:[{name:"IgorKha",url:"https://github.com/IgorKha",imageURL:"https://github.com/IgorKha.png",key:"IgorKha"}],frontMatter:{slug:"Bandwidth-ZeroTier-on-NXP-LS1046",title:"Bandwidth ZeroTier on NXP LS1046",authors:"IgorKha",tags:["test","zerotier","nxp"]},prevItem:{title:"Arch Linux with U2F",permalink:"/blog/arch-linux-with-u2f"}},s={authorsImageUrls:[void 0]},u=[{value:"Devices",id:"devices",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"devices"},"Devices"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Device")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"OS")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"kernel")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"link")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"ZeroTier ver.")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://www.nxp.com/design/qoriq-developer-resources/layerscape-ls1046a-reference-design-board:LS1046A-RDB"},"NXP LS1046A-RDB")),(0,n.kt)("td",{parentName:"tr",align:"center"},"OpenWRT 21.02.02"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.4.179"),(0,n.kt)("td",{parentName:"tr",align:"center"},"10Gbps"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1.6.6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://www.forlinx.net/product/ls1046a-single-board-computer-22.html"},"NXP LS1046A Forlinx")),(0,n.kt)("td",{parentName:"tr",align:"center"},"OpenWRT 21.02.02"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.4.179"),(0,n.kt)("td",{parentName:"tr",align:"center"},"10Gbps"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1.6.6"))))))}d.isMDXComponent=!0}}]);