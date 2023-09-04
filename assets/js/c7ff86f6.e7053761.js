"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4659],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,b=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return t?n.createElement(b,i(i({ref:r},m),{},{components:t})):n.createElement(b,i({ref:r},m))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1007:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:r,minHeight:t,text:o=""}=e;return n.createElement("div",{className:a.browserWindow,style:{minHeight:t}},n.createElement("div",{className:a.browserWindowHeader},n.createElement("div",{className:"container"},o),n.createElement("div",{className:a.buttons},n.createElement("span",{className:a.dot,style:{background:"#58cb42"}}),n.createElement("span",{className:a.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:a.dot,style:{background:"#f25f58"}}))),n.createElement("div",{className:a.browserWindowBody},r))}},1783:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(7462),a=(t(7294),t(3905)),o=t(1007);const i={slug:"proxmox-qemu-aarch64",title:"Simple aarch64 emulation in Proxmox",authors:"IgorKha",tags:["qemu","proxmox","linux","debian","aarch64"]},l=void 0,s={permalink:"/blog/proxmox-qemu-aarch64",editUrl:"https://github.com/IgorKha/igorkha.github.io/tree/main/blog/2022-12-07-qemu-aarch64/index.md",source:"@site/blog/2022-12-07-qemu-aarch64/index.md",title:"Simple aarch64 emulation in Proxmox",description:"Simple aarch64 emulation in Proxmox",date:"2022-12-07T00:00:00.000Z",formattedDate:"December 7, 2022",tags:[{label:"qemu",permalink:"/blog/tags/qemu"},{label:"proxmox",permalink:"/blog/tags/proxmox"},{label:"linux",permalink:"/blog/tags/linux"},{label:"debian",permalink:"/blog/tags/debian"},{label:"aarch64",permalink:"/blog/tags/aarch-64"}],readingTime:.28,hasTruncateMarker:!0,authors:[{name:"IgorKha",url:"https://github.com/IgorKha",imageURL:"https://github.com/IgorKha.png",key:"IgorKha"}],frontMatter:{slug:"proxmox-qemu-aarch64",title:"Simple aarch64 emulation in Proxmox",authors:"IgorKha",tags:["qemu","proxmox","linux","debian","aarch64"]},prevItem:{title:"How disable IPv6 networking on Linux",permalink:"/blog/disable-ipv6-networking-on-linux"},nextItem:{title:"Arch Linux with U2F",permalink:"/blog/arch-linux-with-u2f"}},c={authorsImageUrls:[void 0]},m=[],u={toc:m},p="wrapper";function d(e){let{components:r,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple aarch64 emulation in Proxmox",src:t(7089).Z,width:"500",height:"200"})),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="nano /etc/pve/qemu-server/124.conf"',title:'"nano','/etc/pve/qemu-server/124.conf"':!0},"// highlight-yellow\n#vmgenid%3A 0e34fef6-0336-4748-86f8-314346f2d087\n// highlight-green\narch: aarch64\nbios: ovmf\nboot: order=scsi2;scsi0;net0\ncores: 4\nmemory: 2048\nmeta: creation-qemu=7.1.0,ctime=1670353758\nname: arm\nnet0: e1000=0A:57:71:2D:2C:88,bridge=vmbr0,firewall=1\nnuma: 0\nostype: l26\nscsi0: raid:124/vm-124-disk-0.qcow2,size=32G\nscsi2: raid:iso/debian-11.5.0-arm64-netinst.iso,media=cdrom,size=329004K\nscsihw: virtio-scsi-pci\nserial0: socket\nsmbios1: uuid=998276ea-30eb-4bd1-b255-e9691ee5a96e\nsockets: 1\nvga: serial0\n"))))}d.isMDXComponent=!0},7089:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/qemuarm64-728819e6bfcaa6948067105f553cc4b4.png"}}]);