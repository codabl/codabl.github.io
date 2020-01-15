/*! For license information please see 96b590e1.6663a7e5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(209)),c=n(213),i={title:"Concepts",description:"BrainRex is a single API for crypto data and analytics. "},s={id:"about/concepts",title:"Concepts",description:"BrainRex is a single API for crypto data and analytics. ",source:"@site/docs/about/concepts.md",permalink:"/docs/about/concepts",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/about/concepts.md"},u=[{value:"Sources",id:"sources",children:[]},{value:"Transforms",id:"transforms",children:[]},{value:"Destinations",id:"destinations",children:[]},{value:"Events",id:"events",children:[]}],l={rightToc:u},p="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"sources"},"Sources"),Object(o.b)("p",null,"Sources is the way to connect to your data source. This services is managed through the Integrations API. "),Object(o.b)("p",null,"Features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Connect your own data sources"),Object(o.b)("li",{parentName:"ul"},"Connect "),Object(o.b)("li",{parentName:"ul"},"Upload files"),Object(o.b)("li",{parentName:"ul"},"Publish your data (for data providers)")),Object(o.b)("h2",{id:"transforms"},"Transforms"),Object(o.b)("p",null,"This is where the deep learning magic happens "),Object(o.b)("h2",{id:"destinations"},"Destinations"),Object(o.b)("p",null,"Now that you have the data and have perform amazing transformations, what do you do with this data?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Send back to cloud storage"),Object(o.b)("li",{parentName:"ul"},"Download"),Object(o.b)("li",{parentName:"ul"},"Trading ")),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)(c.a,{to:"/docs/setup/installation/",mdxType:"Jump"},"Concepts"))}d.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},210:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},211:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),c=n(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,u=i.test(s),l=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(a.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&d&&d.disconnect()}),[s,p,u]),s&&u?o.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{d=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},213:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(211),c=n(210),i=n.n(c);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:c,target:s,to:u}){let l=i()("jump-to",`jump-to--${c}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:l},p):a.a.createElement(o.a,{to:u,className:l},p)}}}]);