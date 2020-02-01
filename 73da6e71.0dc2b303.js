/*! For license information please see 73da6e71.0dc2b303.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),l=(a(0),a(228)),c=a(236),i=a(237),o=a(233),s={title:"Install Vector via DPKG",sidebar_label:"DPKG",description:"Install Vector through the DKG package manager"},b={id:"setup/installation/package-managers/dpkg",title:"Install Vector via DPKG",description:"Install Vector through the DKG package manager",source:"@site/docs/setup/installation/package-managers/dpkg.md",permalink:"/docs/setup/installation/package-managers/dpkg",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/package-managers/dpkg.md",sidebar_label:"DPKG",sidebar:"docs",previous:{title:"Install Vector Through Your Package Manager",permalink:"/docs/setup/installation/package-managers"},next:{title:"Install Vector via Homebrew",permalink:"/docs/setup/installation/package-managers/homebrew"}},p=[{value:"Install",id:"install",children:[{value:"Previous Versions",id:"previous-versions",children:[]}]},{value:"Configuring",id:"configuring",children:[]},{value:"Administering",id:"administering",children:[]},{value:"Uninstalling",id:"uninstalling",children:[]},{value:"Updating",id:"updating",children:[]}],u={rightToc:p},m="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Vector can be installed through the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.debian.org/dpkg"}),"DPKG package manager")," which is\ngenerally used on Debian and Ubuntu systems."),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(c.a,{block:!0,defaultValue:"x86_64",urlKey:"arch",values:[{label:"x86_64",value:"x86_64"},{label:"ARM64",value:"ARM64"},{label:"ARMv7",value:"ARMv7"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"x86_64",mdxType:"TabItem"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download the Vector ",Object(l.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(l.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-amd64.deb\n"))),Object(l.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-amd64.deb\n"))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install the downloaded package"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-amd64.deb\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start Vector"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n"))))),Object(l.b)(i.a,{value:"ARM64",mdxType:"TabItem"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download the Vector ",Object(l.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(l.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-arm64.deb\n"))),Object(l.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-arm64.deb\n"))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install the downloaded package"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-arm64.deb\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start Vector"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n"))))),Object(l.b)(i.a,{value:"ARMv7",mdxType:"TabItem"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download the Vector ",Object(l.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(l.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-armhf.deb\n"))),Object(l.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-armhf.deb\n"))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install the downloaded package"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-armhf.deb\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start Vector"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n")))))),Object(l.b)("p",null,"That's it! Proceed to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case."),Object(l.b)("h3",{id:"previous-versions"},"Previous Versions"),Object(l.b)("p",null,"Historical Vector versions can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://vector.dev/releases/latest"}),"releases"),".\nOnce you've found the version you'd like to install you can re-follow the\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#install"}),"install")," steps with the URL to the Vector ",Object(l.b)("inlineCode",{parentName:"p"},".deb")," file."),Object(l.b)("h2",{id:"configuring"},"Configuring"),Object(l.b)("p",null,"The Vector configuration file is placed in:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"etc/vector/vector.toml\n")),Object(l.b)("p",null,"A full spec is located at ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/vector/vector.spec.toml")," and examples are\nlocated in ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(l.b)("h2",{id:"administering"},"Administering"),Object(l.b)("p",null,"Vector can be managed through the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.freedesktop.org/wiki/Software/systemd/"}),"Systemd")," service manager:"),Object(l.b)(o.a,{to:"/docs/administration/",mdxType:"Jump"},"Administration"),Object(l.b)("h2",{id:"uninstalling"},"Uninstalling"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -r vector\n")),Object(l.b)("h2",{id:"updating"},"Updating"),Object(l.b)("p",null,"Follow the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#install"}),"install")," steps again, downloading the latest version of\nVector."))}d.isMDXComponent=!0},227:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(d,i({ref:t},s,{components:a})):r.a.createElement(d,i({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},230:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,o=t||a,s=i.test(o),b=Object(r.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(r.useEffect)(()=>(!p&&s&&window.docusaurus.prefetch(o),()=>{p&&u&&u.disconnect()}),[o,p,s]),o&&s?l.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(o),b.current=!0)},innerRef:e=>{p&&e&&s&&((e,t)=>{u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):l.a.createElement("a",Object(n.a)({},e,{href:o}))}},233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(230),c=a(227),i=a.n(c);a(87);t.a=function({children:e,className:t,badge:a,icon:n,size:c,target:o,to:s}){let b=i()("jump-to",`jump-to--${c}`,t),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return o?r.a.createElement("a",{href:s,target:o,className:b},p):r.a.createElement(l.a,{to:s,className:b},p)}},236:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(250),i=a(227),o=a.n(i),s=a(251),b=a.n(s);function p({block:e,centered:t,className:a,style:n,values:r,selectedValue:c,setSelectedValue:i}){return l.a.createElement("div",{className:t?"tabs--centered":""},l.a.createElement("ul",{className:o()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>l.a.createElement("li",{className:o()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>i(e)},t))))}function u({selectedValue:e,setSelectedValue:t,values:a}){return l.a.createElement(c.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:c,defaultValue:i,select:o,style:s,values:m,urlKey:d}=e,[O,g]=Object(r.useState)(i);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&d){let e=b.a.parse(window.location.search);e[d]&&g(e[d])}},[]),l.a.createElement("div",null,m.length>1&&(o?l.a.createElement(u,Object(n.a)({selectedValue:O,setSelectedValue:g},e)):l.a.createElement(p,Object(n.a)({selectedValue:O,setSelectedValue:g},e))),l.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(c).filter(e=>e.props.value===O)[0]))}},237:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);