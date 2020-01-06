/*! For license information please see 70b37fff.0153b963.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),c=(a(0),a(254)),o=a(315),s={title:"Install Vector On Ubuntu",sidebar_label:"Ubuntu",description:"Install Vector on the Ubuntu operating system"},l={id:"setup/installation/operating-systems/ubuntu",title:"Install Vector On Ubuntu",description:"Install Vector on the Ubuntu operating system",source:"@site/docs/setup/installation/operating-systems/ubuntu.md",permalink:"/docs/setup/installation/operating-systems/ubuntu",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/operating-systems/ubuntu.md",sidebar_label:"Ubuntu",sidebar:"docs",previous:{title:"Install Vector On Red Hat Enterprise Linux",permalink:"/docs/setup/installation/operating-systems/rhel"},next:{title:"Install Vector On Windows",permalink:"/docs/setup/installation/operating-systems/windows"}},i=[],u={rightToc:i},m="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Vector can be installed on the Ubuntu through the following methods:"),Object(c.b)(o.a,{docker:!0,os:"Linux",packageManager:"DPKG",mdxType:"InstallChoices"}))}d.isMDXComponent=!0},253:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},m=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||c;return a?r.a.createElement(f,s({ref:t},i,{components:a})):r.a.createElement(f,s({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},255:function(e,t,a){"use strict";var n=a(0),r=a(32);t.a=function(){return Object(n.useContext)(r.a)}},257:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,l=t||a,i=s.test(l),u=Object(r.useRef)(!1),m="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(r.useEffect)(()=>(!m&&i&&window.docusaurus.prefetch(l),()=>{m&&d&&d.disconnect()}),[l,m,i]),l&&i?c.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(l),u.current=!0)},innerRef:e=>{m&&e&&i&&((e,t)=>{d=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},259:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(266),s=a(253),l=a.n(s),i=a(277),u=a.n(i);function m({block:e,centered:t,className:a,style:n,values:r,selectedValue:o,setSelectedValue:s}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:l()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>c.a.createElement("li",{className:l()("tab-item",{"tab-item--active":o===e}),key:e,onClick:()=>s(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(o.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:o,defaultValue:s,select:l,style:i,values:p,urlKey:f}=e,[b,v]=Object(r.useState)(s);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&f){let e=u.a.parse(window.location.search);e[f]&&v(e[f])}},[]),c.a.createElement("div",null,p.length>1&&(l?c.a.createElement(d,Object(n.a)({selectedValue:b,setSelectedValue:v},e)):c.a.createElement(m,Object(n.a)({selectedValue:b,setSelectedValue:v},e))),c.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(o).filter(e=>e.props.value===b)[0]))}},260:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},264:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(257),o=a(253),s=a.n(o);a(88);t.a=function({children:e,className:t,badge:a,icon:n,size:o,target:l,to:i}){let u=s()("jump-to",`jump-to--${o}`,t),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return l?r.a.createElement("a",{href:i,target:l,className:u},m):r.a.createElement(c.a,{to:i,className:u},m)}},315:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(264),o=a(259),s=a(260),l=a(255);function i(){const e=Object(l.a)(),{siteConfig:t={}}=e,{metadata:{installation:a}}=t.customFields;return a}function u({arch:e,docker:t,os:a,packageManager:n}){const{containers:o,downloads:s,package_managers:l}=i(),u=s.filter(t=>t.arch.toLowerCase()==e.toLowerCase()&&t.os.toLowerCase()==a.toLowerCase()&&"archive"==t.type)[0],m=o.find(e=>"docker"==e.id),d=m.archs.includes(e)&&m.oss.includes(a),p=n&&l.find(e=>e.name==n).archs.includes(e);return r.a.createElement("div",null,p&&r.a.createElement(c.a,{to:`/docs/setup/installation/package-managers/${n.toLowerCase()}/?arch=${e}`},r.a.createElement("i",{className:"feather icon-package"})," ",n," (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&d&&r.a.createElement(c.a,{to:"/docs/setup/installation/containers/docker/"},r.a.createElement("i",{className:"feather icon-terminal"})," Docker (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&!d&&r.a.createElement(c.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${u.file_name}`},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")  ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),r.a.createElement("p",null,"Alternatively, you can use your preferred method:"),p&&d&&r.a.createElement(c.a,{to:"/docs/setup/installation/containers/docker/",size:"sm"},r.a.createElement("i",{className:"feather icon-package"})," Docker (",e,")"),(p||d)&&r.a.createElement(c.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${u.file_name}`,size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")"),r.a.createElement(c.a,{to:"/docs/setup/installation/manual/from-source/",size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From Source"))}t.a=function({docker:e,os:t,packageManager:a}){const{downloads:n}=i(),c=n.filter(e=>e.os.toLowerCase()==t.toLowerCase()&&"archive"==e.type).map(e=>e.arch);return r.a.createElement("div",null,r.a.createElement(o.a,{block:!0,defaultValue:c[0],urlKey:"os",values:c.map(e=>({label:r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-cpu"})," ",e),value:e}))},c.map((n,c)=>r.a.createElement(s.a,{key:c,value:n},r.a.createElement(u,{arch:n,docker:e,os:t,packageManager:a})))))}}}]);