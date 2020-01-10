/*! For license information please see 3b9b192d.236cf6a4.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(1),a=r(6),i=(r(0),r(212)),o=r(215),c={title:"Data Integrations",sidebar_label:"Data integrations",description:"BrainRex provides data integrations   with capabilities to adapt to learn from incoming time series data."},s={id:"features/integrations",title:"Data Integrations",description:"BrainRex provides data integrations   with capabilities to adapt to learn from incoming time series data.",source:"@site/docs/features/integrations.md",permalink:"/docs/features/integrations",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/features/integrations.md",sidebar_label:"Data integrations",sidebar:"docs",previous:{title:"Entity Extractor",permalink:"/docs/features/entity-analysis"},next:{title:"All Features",permalink:"/docs/features"}},u=[],l={rightToc:u},p="wrapper";function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{to:"docs/tutorials/extracting-exchange-data",mdxType:"Jump"},"View Full Tutorial in Python"))}f.isMDXComponent=!0},211:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},212:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return r?a.a.createElement(m,c({ref:t},u,{components:r})):a.a.createElement(m,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},213:function(e,t,r){"use strict";var n=r(1),a=r(0),i=r.n(a),o=r(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,u=c.test(s),l=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let f;return Object(a.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&f&&f.disconnect()}),[s,p,u]),s&&u?i.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{f=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(f.unobserve(e),f.disconnect(),t())})}),f.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):i.a.createElement("a",Object(n.a)({},e,{href:s}))}},215:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(213),o=r(211),c=r.n(o);r(85);t.a=function({children:e,className:t,badge:r,icon:n,size:o,target:s,to:u}){let l=c()("jump-to",`jump-to--${o}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:l},p):a.a.createElement(i.a,{to:u,className:l},p)}}}]);