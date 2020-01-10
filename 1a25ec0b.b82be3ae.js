/*! For license information please see 1a25ec0b.b82be3ae.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),o=(n(0),n(212)),s=n(277),i=n.n(s),c=n(215),u={title:"All Features",description:"The fundamental BrainRex concepts. A great place to start learning about BrainRex."},p={id:"features",title:"All Features",description:"The fundamental BrainRex concepts. A great place to start learning about BrainRex.",source:"@site/docs/features.md",permalink:"/docs/features",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/features.md",sidebar:"docs",previous:{title:"Data Integrations",permalink:"/docs/features/integrations"},next:{title:"Build your own dashboards",permalink:"/docs/features/dashboards"}},l=[{value:"Components",id:"components",children:[{value:"Sources",id:"sources",children:[]},{value:"Transforms",id:"transforms",children:[]},{value:"Sinks",id:"sinks",children:[]}]},{value:"Events",id:"events",children:[]},{value:"Pipelines",id:"pipelines",children:[]}],d={rightToc:l},b="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{src:"/img/concepts.svg",mdxType:"SVG"}),Object(o.b)("p",null,"It's worth getting familiar with the basic concepts that comprise BrainRex as they\nare used throughout the documentation. This knowledge will be helpful as you\nproceed and is also cool to brag about amongst friends."),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,'"Component" is the generic term we use for ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You compose components to create\npipelines, allowing you to ingest, transform, and send data."),Object(o.b)(c.a,{to:"/components/",mdxType:"Jump"},"View all components"),Object(o.b)("h3",{id:"sources"},"Sources"),Object(o.b)("p",null,'Vector would be junk if it couldn\'t injest data. A "source" defines where Vector\nshould pull data from, or how it should receive data pushed to it. A pipeline\ncan have any number of sources, and as they ingest data they proceed to\nnormalize it into ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#events"}),"events")," ","(","see next section",")",". This sets the stage\nfor easy and consistent processing of your data. Examples of sources include\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(o.b)("inlineCode",{parentName:"a"},"file")),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(o.b)("inlineCode",{parentName:"a"},"syslog")),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(o.b)("inlineCode",{parentName:"a"},"socket")),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(o.b)("inlineCode",{parentName:"a"},"stdin")),"."),Object(o.b)(c.a,{to:"/docs/reference/sources/",mdxType:"Jump"},"View all sources"),Object(o.b)("h3",{id:"transforms"},"Transforms"),Object(o.b)("p",null,'A "transform" is responsible for mutating events as they are transported by\nVector. This might involve parsing, filtering, sampling, or aggregating. You can\nhave any number of transforms in your pipeline and how they are composed is up\nto you.'),Object(o.b)(c.a,{to:"/docs/reference/transforms/",mdxType:"Jump"},"View all transforms"),Object(o.b)("h3",{id:"sinks"},"Sinks"),Object(o.b)("p",null,'A "sink" is a destination for ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events"),". Each sink's\ndesign and transmission method is dictated by the downstream service it is\ninteracting with. For example, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/socket/"}),Object(o.b)("inlineCode",{parentName:"a"},"socket")," sink")," will\nstream individual events, while the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/aws_s3/"}),Object(o.b)("inlineCode",{parentName:"a"},"aws_s3")," sink")," will\nbuffer and flush data."),Object(o.b)(c.a,{to:"/docs/reference/sinks/",mdxType:"Jump"},"View all sinks"),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("p",null,'All items (both logs and metrics) passing through Vector are known as an\n"event", which is explained in detail in the ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"data model"),"\nsection."),Object(o.b)(c.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"View data model"),Object(o.b)("h2",{id:"pipelines"},"Pipelines"),Object(o.b)("p",null,'A "pipeline" is the end result of connecting ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You can see a full example of a\npipeline in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration section"),"."),Object(o.b)(c.a,{to:"/docs/setup/configuration/",mdxType:"Jump"},"View configuration"))}m.isMDXComponent=!0},211:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(m,i({ref:t},u,{components:n})):a.a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),s=n(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,c=t||n,u=i.test(c),p=Object(a.useRef)(!1),l="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(a.useEffect)(()=>(!l&&u&&window.docusaurus.prefetch(c),()=>{l&&d&&d.disconnect()}),[c,l,u]),c&&u?o.a.createElement(s.b,Object(r.a)({},e,{onMouseEnter:()=>{p.current||(window.docusaurus.preload(c),p.current=!0)},innerRef:e=>{l&&e&&u&&((e,t)=>{d=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):o.a.createElement("a",Object(r.a)({},e,{href:c}))}},215:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(213),s=n(211),i=n.n(s);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:s,target:c,to:u}){let p=i()("jump-to",`jump-to--${s}`,t),l=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return c?a.a.createElement("a",{href:u,target:c,className:p},l):a.a.createElement(o.a,{to:u,className:p},l)}}}]);