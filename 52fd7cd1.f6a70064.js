/*! For license information please see 52fd7cd1.f6a70064.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(0),n(214)),o=n(217);const s={title:"Install Vector On Your Operating System",sidebar_label:"hidden",hide_pagination:!0},i={id:"setup/installation/operating-systems",title:"Install Vector On Your Operating System",description:"import Jump from '@site/src/components/Jump';",source:"@site/docs/setup/installation/operating-systems.md",permalink:"/docs/setup/installation/operating-systems",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/operating-systems.md",sidebar_label:"hidden"},c=[],u={rightToc:c},p="wrapper";function l({components:e,...t}){return Object(a.b)(p,Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/amazon-linux/",mdxType:"Jump"},"Amazon Linux"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/centos/",mdxType:"Jump"},"CentOS"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/debian/",mdxType:"Jump"},"Debian"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/macos/",mdxType:"Jump"},"MacOS"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/raspbian/",mdxType:"Jump"},"Raspbian"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/rhel/",mdxType:"Jump"},"RHEL"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/ubuntu/",mdxType:"Jump"},"Ubuntu"),Object(a.b)(o.a,{to:"/docs/setup/installation/operating-systems/windows/",mdxType:"Jump"},"Windows"))}l.isMDXComponent=!0},213:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),s=n(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,c=t||n,u=i.test(c),p=Object(a.useRef)(!1),l="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(a.useEffect)(()=>(!l&&u&&window.docusaurus.prefetch(c),()=>{l&&m&&m.disconnect()}),[c,l,u]),c&&u?o.a.createElement(s.b,Object(r.a)({},e,{onMouseEnter:()=>{p.current||(window.docusaurus.preload(c),p.current=!0)},innerRef:e=>{l&&e&&u&&((e,t)=>{m=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):o.a.createElement("a",Object(r.a)({},e,{href:c}))}},217:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(215),s=n(213),i=n.n(s);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:s,target:c,to:u}){let p=i()("jump-to",`jump-to--${s}`,t),l=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return c?a.a.createElement("a",{href:u,target:c,className:p},l):a.a.createElement(o.a,{to:u,className:p},l)}}}]);