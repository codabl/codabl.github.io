/*! For license information please see 77587487.502f319b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),a=(r(0),r(254)),c=r(264),i={title:"Reference",description:"Vector technical reference, covering available options and settings.",sidebar_label:"hidden",hide_pagination:!0},s={id:"reference",title:"Reference",description:"Vector technical reference, covering available options and settings.",source:"@site/docs/reference.md",permalink:"/docs/reference",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Troubleshooting Guide",permalink:"/docs/setup/guides/troubleshooting"},next:{title:"Sources",permalink:"/docs/reference/sources"}},u=[],l={rightToc:u},p="wrapper";function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Vector reference will outline and define all available options within\nVector. Serving as a complete guide to option types, values, requirements,\nand more."),Object(a.b)(c.a,{to:"/docs/reference/sources",mdxType:"Jump"},"Sources"),Object(a.b)(c.a,{to:"/docs/reference/transforms",mdxType:"Jump"},"Transforms"),Object(a.b)(c.a,{to:"/docs/reference/sinks",mdxType:"Jump"},"Sinks"))}f.isMDXComponent=!0},253:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,i({ref:t},u,{components:r})):o.a.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},257:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),c=r(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,u=i.test(s),l=Object(o.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let f;return Object(o.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&f&&f.disconnect()}),[s,p,u]),s&&u?a.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{f=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(f.unobserve(e),f.disconnect(),t())})}),f.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):a.a.createElement("a",Object(n.a)({},e,{href:s}))}},264:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(257),c=r(253),i=r.n(c);r(88);t.a=function({children:e,className:t,badge:r,icon:n,size:c,target:s,to:u}){let l=i()("jump-to",`jump-to--${c}`,t),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?o.a.createElement("a",{href:u,target:s,className:l},p):o.a.createElement(a.a,{to:u,className:l},p)}}}]);