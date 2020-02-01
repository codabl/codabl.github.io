/*! For license information please see 4c931331.e0c0e541.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),c=(r(0),r(228)),i=r(233),o={title:"Install Vector via Homebrew",sidebar_label:"Homebrew",description:"Install Vector through the Homebrew package manager"},l={id:"setup/installation/package-managers/homebrew",title:"Install Vector via Homebrew",description:"Install Vector through the Homebrew package manager",source:"@site/docs/setup/installation/package-managers/homebrew.md",permalink:"/docs/setup/installation/package-managers/homebrew",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/package-managers/homebrew.md",sidebar_label:"Homebrew",sidebar:"docs",previous:{title:"Install Vector via DPKG",permalink:"/docs/setup/installation/package-managers/dpkg"},next:{title:"Install Vector via RPM",permalink:"/docs/setup/installation/package-managers/rpm"}},s=[{value:"Install",id:"install",children:[]},{value:"Previous Versions",id:"previous-versions",children:[]},{value:"Configuring",id:"configuring",children:[]},{value:"Administering",id:"administering",children:[]},{value:"Uninstalling",id:"uninstalling",children:[]},{value:"Updating",id:"updating",children:[]}],b={rightToc:s},p="wrapper";function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)(p,Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Vector can be installed through ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")," which is generally\nused on MacOS systems."),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Add the Timber tap and install ",Object(c.b)("inlineCode",{parentName:"p"},"vector"),":"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap timberio/brew && brew install vector\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew services start vector\n")),Object(c.b)("p",{parentName:"li"},"That's it! Proceed to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case."))),Object(c.b)("h2",{id:"previous-versions"},"Previous Versions"),Object(c.b)("p",null,"Historical Vector versions can be found in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://vector.dev/releases/latest"}),"releases"),".\nOnce you've found the version you'd like to install you can specify it with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install vector@X.X.X\n")),Object(c.b)("h2",{id:"configuring"},"Configuring"),Object(c.b)("p",null,"The Vector configuration file is placed in:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"/usr/local/etc/vector/vector.toml\n")),Object(c.b)("p",null,"A full spec is located at ",Object(c.b)("inlineCode",{parentName:"p"},"/usr/local/etc/vector/vector.spec.toml")," and examples\nare located in ",Object(c.b)("inlineCode",{parentName:"p"},"/usr/local/etc/vector/examples/*"),". You can learn more about\nconfiguring Vector in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(c.b)("h2",{id:"administering"},"Administering"),Object(c.b)("p",null,"Vector can be managed through the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Homebrew/homebrew-services"}),"Homebrew services"),"\nmanager:"),Object(c.b)(i.a,{to:"/docs/administration",mdxType:"Jump"},"Administration"),Object(c.b)("h2",{id:"uninstalling"},"Uninstalling"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew remove vector\n")),Object(c.b)("h2",{id:"updating"},"Updating"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew update && brew upgrade vector\n")))}u.isMDXComponent=!0},227:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===c)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||c;return r?a.a.createElement(d,o({ref:t},s,{components:r})):a.a.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},230:function(e,t,r){"use strict";var n=r(1),a=r(0),c=r.n(a),i=r(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,l=t||r,s=o.test(l),b=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(a.useEffect)(()=>(!p&&s&&window.docusaurus.prefetch(l),()=>{p&&u&&u.disconnect()}),[l,p,s]),l&&s?c.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(l),b.current=!0)},innerRef:e=>{p&&e&&s&&((e,t)=>{u=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},233:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(230),i=r(227),o=r.n(i);r(87);t.a=function({children:e,className:t,badge:r,icon:n,size:i,target:l,to:s}){let b=o()("jump-to",`jump-to--${i}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return l?a.a.createElement("a",{href:s,target:l,className:b},p):a.a.createElement(c.a,{to:s,className:b},p)}}}]);