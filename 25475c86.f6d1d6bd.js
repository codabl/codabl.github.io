/*! For license information please see 25475c86.f6d1d6bd.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),i=(n(0),n(207)),o=n(211),c={title:"Entity Extractor",sidebar_label:"Crypto NER",description:"BrainRex provides named anomaly technologies with capabilities to adapt to learn from incoming time series data."},s={id:"features/entity-analysis",title:"Entity Extractor",description:"BrainRex provides named anomaly technologies with capabilities to adapt to learn from incoming time series data.",source:"@site/docs/features/entity-analysis.md",permalink:"/docs/features/entity-analysis",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/features/entity-analysis.md",sidebar_label:"Crypto NER",sidebar:"docs",previous:{title:"Sentiment Analysis",permalink:"/docs/features/sentiment-analysis"},next:{title:"Data Integrations",permalink:"/docs/features/integrations"}},l=[{value:"What is Named Entity Recognition",id:"what-is-named-entity-recognition",children:[]},{value:"What are Crypto Entities?",id:"what-are-crypto-entities",children:[]},{value:"What are some examples",id:"what-are-some-examples",children:[]},{value:"How do I get started?",id:"how-do-i-get-started",children:[]}],u={rightToc:l},p="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-named-entity-recognition"},"What is Named Entity Recognition"),Object(i.b)("p",null,"Named entity recognition is the art of extracting known entities such as people, landmarks, companies, events from written text and audio."),Object(i.b)("h2",{id:"what-are-crypto-entities"},"What are Crypto Entities?"),Object(i.b)("p",null,"Crypto Entities is our own fine tuned model based on the XLNet language transformer. It has learned to spot several labels about the cryptocurrency\nand blockchain worlds. "),Object(i.b)("h2",{id:"what-are-some-examples"},"What are some examples"),Object(i.b)("h2",{id:"how-do-i-get-started"},"How do I get started?"),Object(i.b)(o.a,{to:"docs/tutorials/analyzing-entities",mdxType:"Jump"},"Analyze entities in Python"))}d.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},208:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},209:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,l=c.test(s),u=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(a.useEffect)(()=>(!p&&l&&window.docusaurus.prefetch(s),()=>{p&&d&&d.disconnect()}),[s,p,l]),s&&l?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:e=>{p&&e&&l&&((e,t)=>{d=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):i.a.createElement("a",Object(r.a)({},e,{href:s}))}},211:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(209),o=n(208),c=n.n(o);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:o,target:s,to:l}){let u=c()("jump-to",`jump-to--${o}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:l,target:s,className:u},p):a.a.createElement(i.a,{to:l,className:u},p)}}}]);