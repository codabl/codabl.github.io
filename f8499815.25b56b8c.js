/*! For license information please see f8499815.25b56b8c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(173)),i=n(190),c={title:"Anomaly Detection",description:"BrainRex provides anomaly detection technologies for unstructured time series data. Allowing you to detect problems in as they happen accross of all you organizations business metrics."},s={id:"reference/transforms/entity-extractor",title:"Anomaly Detection",description:"BrainRex provides anomaly detection technologies for unstructured time series data. Allowing you to detect problems in as they happen accross of all you organizations business metrics.",source:"@site/docs/reference/transforms/entity-extractor.md",permalink:"/docs/reference/transforms/entity-extractor",editUrl:"https://github.com/codabl.github.io/edit/master/docs/reference/transforms/entity-extractor.md",sidebar:"docs",previous:{title:"Price Sentiment",permalink:"/docs/reference/transforms/price-sentiment"},next:{title:"Anomaly Detection",permalink:"/docs/reference/transforms/anomaly-detector"}},l=[{value:"What is an entity extraction?",id:"what-is-an-entity-extraction",children:[]},{value:"Why companies need anomaly detection?",id:"why-companies-need-anomaly-detection",children:[{value:"Univariate",id:"univariate",children:[]},{value:"Multivarite",id:"multivarite",children:[]},{value:"Contextual Anomalies",id:"contextual-anomalies",children:[]}]},{value:"Real-Time Anomaly",id:"real-time-anomaly",children:[]},{value:"Out of the box",id:"out-of-the-box",children:[]},{value:"Ou tof the box",id:"ou-tof-the-box",children:[]}],u={rightToc:l},p="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Anomaly detection has become imperative in business"),Object(o.b)("h2",{id:"what-is-an-entity-extraction"},"What is an entity extraction?"),Object(o.b)("p",null,"Determining what's an anomaly is not an easy task neither for humans or machines. "),Object(o.b)("h2",{id:"why-companies-need-anomaly-detection"},"Why companies need anomaly detection?"),Object(o.b)(i.a,{to:"/components/",mdxType:"Jump"},"Types of anomaly detectors"),Object(o.b)("div",{class:"section-list"},Object(o.b)("div",{class:"section"},Object(o.b)("h3",{id:"univariate"},"Univariate"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"can have any number of sources, and as they ingest data they proceed to\nnormalize it into [events](#events) \\(see next section\\). This sets the stage\n")),Object(o.b)("p",null,"for easy and consistent processing of your data. Examples of sources include\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(o.b)("inlineCode",{parentName:"a"},"file")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(o.b)("inlineCode",{parentName:"a"},"syslog")),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(o.b)("inlineCode",{parentName:"a"},"socket")),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(o.b)("inlineCode",{parentName:"a"},"stdin")),"."),Object(o.b)(i.a,{to:"/docs/reference/sources/",mdxType:"Jump"},"View all sources"),Object(o.b)("h3",{id:"multivarite"},"Multivarite"),Object(o.b)("p",null,'A "transform" are machine learning models that can learn how to tranforms raw unstructured data from '),Object(o.b)(i.a,{to:"/docs/reference/transforms/",mdxType:"Jump"},"View all transforms"),Object(o.b)("h3",{id:"contextual-anomalies"},"Contextual Anomalies"),Object(o.b)("p",null,'A "destination" is a destination for ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events"),". Each sink's\ninteracting with. For example, the ","[",Object(o.b)("inlineCode",{parentName:"p"},"socket")," sink][docs.sinks.\xf7]"," will\ndesign and transmission method is dictated by the downstream service it is\nstream individual events, while the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/aws_s3/"}),Object(o.b)("inlineCode",{parentName:"a"},"aws_s3")," sink")," will\nbuffer and flush data."),Object(o.b)(i.a,{to:"/docs/reference/sinks/",mdxType:"Jump"},"View all sinks"))),Object(o.b)("h2",{id:"real-time-anomaly"},"Real-Time Anomaly"),Object(o.b)("p",null,'All items (both logs and metrics) passing through Vector are known as an\n"event", which is explained in detail in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"data model"),"\nsection."),Object(o.b)(i.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"View data model"),Object(o.b)("h2",{id:"out-of-the-box"},"Out of the box"),Object(o.b)("p",null,'A "pipeline" is the end result of connecting ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You can see a full example of a\npipeline in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration section"),"."),Object(o.b)(i.a,{to:"/docs/setup/configuration/",mdxType:"Jump"},"View configuration"),Object(o.b)("h2",{id:"ou-tof-the-box"},"Ou tof the box"),Object(o.b)("p",null,'A "pipeline" is the end result of connecting ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You can see a full example of a\npipeline in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration section"),"."),Object(o.b)(i.a,{to:"/docs/setup/configuration/",mdxType:"Jump"},"View configuration"))}b.isMDXComponent=!0},171:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,l=c.test(s),u=Object(r.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let b;return Object(r.useEffect)(()=>(!p&&l&&window.docusaurus.prefetch(s),()=>{p&&b&&b.disconnect()}),[s,p,l]),s&&l?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:e=>{p&&e&&l&&((e,t)=>{b=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),t())})}),b.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(a.a)({},e,{href:s}))}},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(174),i=n(171),c=n.n(i);n(90);t.a=function({children:e,className:t,badge:n,icon:a,size:i,target:s,to:l}){let u=c()("jump-to",`jump-to--${i}`,t),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${a||"chevron-right"} arrow`}))));return s?r.a.createElement("a",{href:l,target:s,className:u},p):r.a.createElement(o.a,{to:l,className:u},p)}}}]);