/*! For license information please see 3d8d21df.ba776aba.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(214)),o=r(217);const i={title:"About",description:"About Vector, the monitoring and observability data router",sidebar_label:"hidden",hide_pagination:!0},c={id:"about",title:"About",description:"About Vector, the monitoring and observability data router",source:"@site/docs/about.md",permalink:"/docs/about",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/about.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Quickstarts Using Client Libraries",permalink:"/docs/setup/quickstart-client-libraries"},next:{title:"What is BrainRex?",permalink:"/docs/about/what-is-brainrex"}},s=[],u={rightToc:s},l="wrapper";function p({components:e,...t}){return Object(a.b)(l,Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section will cover the basic concepts of Vector and provide a foundation\nfor the rest of the documentation."),Object(a.b)(o.a,{to:"/docs/about/concepts/",mdxType:"Jump"},"Concepts"),Object(a.b)(o.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"Data model"),Object(a.b)(o.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Guarantees"),Object(a.b)(o.a,{to:"/docs/about/what-is-vector/",mdxType:"Jump"},"What is vector"))}p.isMDXComponent=!0},213:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,c({ref:t},u,{components:r})):a.a.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},215:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,u=c.test(s),l=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(a.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&d&&d.disconnect()}),[s,p,u]),s&&u?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{d=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(n.a)({},e,{href:s}))}},217:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(215),i=r(213),c=r.n(i);r(85);t.a=function({children:e,className:t,badge:r,icon:n,size:i,target:s,to:u}){let l=c()("jump-to",`jump-to--${i}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:l},p):a.a.createElement(o.a,{to:u,className:l},p)}}}]);