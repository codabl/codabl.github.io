/*! For license information please see 5e913b7c.8bc47d43.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(0),n(205)),i=n(270),c=n.n(i),s=n(208),u={title:"Data Model (Event)",sidebar_label:"hidden",description:"Vector's internal data model -- event and it's subtypes."},l={id:"about/data-model",title:"Data Model (Event)",description:"Vector's internal data model -- event and it's subtypes.",source:"@site/docs/about/data-model.md",permalink:"/docs/about/data-model",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/about/data-model.md",sidebar_label:"hidden"},d=[{value:"Subtypes",id:"subtypes",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why Not <em>Just</em> Events?",id:"why-not-just-events",children:[]}]}],p={rightToc:d},m="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{src:"/img/data-model-event.svg",mdxType:"SVG"}),Object(o.b)("p",null,'The individual pieces of data flowing through Vector are known as "events".\nEvents are arbitrarily wide, and deep, structured pieces of data. They have no\nrequirements or limitations. Ideally, events contain enough rich information\nto derive any type of monitoring data from it.'),Object(o.b)("h2",{id:"subtypes"},"Subtypes"),Object(o.b)("p",null,"Vector defines subtypes for events. This is necessary to establish domain\nspecific requriements enabling interoperability with existing monitoring and\nobservability systems."),Object(o.b)(s.a,{to:"/docs/about/data-model/log/",mdxType:"Jump"},"Log"),Object(o.b)(s.a,{to:"/docs/about/data-model/metric/",mdxType:"Jump"},"Metric"),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"why-not-just-events"},"Why Not ",Object(o.b)("em",{parentName:"h3"},"Just")," Events?"),Object(o.b)("p",null,"We, ",Object(o.b)("em",{parentName:"p"},"very much"),', like the idea of an event only world, one where every service\nis perfectly instrumented with events that contain rich data and context.\nUnfortunately, that is not the case; exisiting services emit metrics, traces,\nand logs of varying quality. By designing Vector to meet services where they are\n(current state), we serve as a bridge to newer standards. This is why we place\n"events" at the top of our data model, where logs and metrics are derived.'))}b.isMDXComponent=!0},204:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?a.a.createElement(b,c({ref:t},u,{components:n})):a.a.createElement(b,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,u=c.test(s),l=Object(a.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let p;return Object(a.useEffect)(()=>(!d&&u&&window.docusaurus.prefetch(s),()=>{d&&p&&p.disconnect()}),[s,d,u]),s&&u?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{d&&e&&u&&((e,t)=>{p=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),t())})}),p.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},208:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(207),i=n(204),c=n.n(i);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:i,target:s,to:u}){let l=c()("jump-to",`jump-to--${i}`,t),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:l},d):a.a.createElement(o.a,{to:u,className:l},d)}}}]);