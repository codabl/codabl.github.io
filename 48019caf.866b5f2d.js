(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var r=a(1),n=(a(0),a(227)),c=a(237),l=a(238),i=a(229);const o={title:"Install Vector via RPM",sidebar_label:"RPM",description:"Install Vector through the RPM package manager"},s={id:"setup/installation/package-managers/rpm",title:"Install Vector via RPM",description:"Install Vector through the RPM package manager",source:"@site/docs/setup/installation/package-managers/rpm.md",permalink:"/docs/setup/installation/package-managers/rpm",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/package-managers/rpm.md",sidebar_label:"RPM"},b=[{value:"Install",id:"install",children:[{value:"Previous Versions",id:"previous-versions",children:[]}]},{value:"Configuring",id:"configuring",children:[]},{value:"Administering",id:"administering",children:[]},{value:"Uninstalling",id:"uninstalling",children:[]},{value:"Updating",id:"updating",children:[]}],p={rightToc:b},u="wrapper";function m({components:e,...t}){return Object(n.b)(u,Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Vector can be installed through the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://rpm.org/"}),"RPM package manager")," which is\ngenerally used on CentOS."),Object(n.b)("h2",{id:"install"},"Install"),Object(n.b)(c.a,{block:!0,defaultValue:"x86_64",urlKey:"arch",values:[{label:"x86_64",value:"x86_64"},{label:"ARM64",value:"ARM64"},{label:"ARMv7",value:"ARMv7"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"x86_64",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," file:"),Object(n.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/0.6.X/vector-x86_64.rpm\n"))),Object(n.b)(l.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/nightly/latest/vector-x86_64.rpm\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Install the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," package directly:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo rpm -i vector-x86_64.rpm\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n")),Object(n.b)("p",{parentName:"li"},"That's it! Proceed to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case.")))),Object(n.b)(l.a,{value:"ARM64",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," file:"),Object(n.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/0.6.X/vector-aarch64.rpm\n"))),Object(n.b)(l.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/nightly/latest/vector-aarch64.rpm\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Install the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," package directly:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo rpm -i vector-aarch64.rpm\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n")),Object(n.b)("p",{parentName:"li"},"That's it! Proceed to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case.")))),Object(n.b)(l.a,{value:"ARMv7",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," file:"),Object(n.b)(c.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/0.6.X/vector-armv7hl.rpm\n"))),Object(n.b)(l.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://packages.timber.io/vector/nightly/latest/vector-armv7hl.rpm\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Install the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," package directly:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo rpm -i vector-armv7hl.rpm\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n")),Object(n.b)("p",{parentName:"li"},"That's it! Proceed to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case."))))),Object(n.b)("h3",{id:"previous-versions"},"Previous Versions"),Object(n.b)("p",null,"Historical Vector versions can be found in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://vector.dev/releases/latest"}),"releases"),".\nOnce you've found the version you'd like to install you can re-follow the\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#install"}),"install")," steps with the URL to the Vector ",Object(n.b)("inlineCode",{parentName:"p"},".rpm")," file."),Object(n.b)("h2",{id:"configuring"},"Configuring"),Object(n.b)("p",null,"The Vector configuration file is placed in:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"etc/vector/vector.toml\n")),Object(n.b)("p",null,"A full spec is located at ",Object(n.b)("inlineCode",{parentName:"p"},"/etc/vector/vector.spec.toml")," and examples are\nlocated in ",Object(n.b)("inlineCode",{parentName:"p"},"/etc/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(n.b)("h2",{id:"administering"},"Administering"),Object(n.b)("p",null,"Vector can be managed through the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.freedesktop.org/wiki/Software/systemd/"}),"Systemd")," service manager:"),Object(n.b)(i.a,{to:"/docs/administration/",mdxType:"Jump"},"Administration"),Object(n.b)("h2",{id:"uninstalling"},"Uninstalling"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo rpm -e vector\n")),Object(n.b)("h2",{id:"updating"},"Updating"),Object(n.b)("p",null,"Follow the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#install"}),"install")," steps again, downloading the latest version of\nVector."))}m.isMDXComponent=!0},226:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),l=a(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,o=t||a,s=i.test(o),b=Object(n.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(n.useEffect)(()=>(!p&&s&&window.docusaurus.prefetch(o),()=>{p&&u&&u.disconnect()}),[o,p,s]),o&&s?c.a.createElement(l.b,Object(r.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(o),b.current=!0)},innerRef:e=>{p&&e&&s&&((e,t)=>{u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):c.a.createElement("a",Object(r.a)({},e,{href:o}))}},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||c;return a?n.a.createElement(d,i({ref:t},s,{components:a})):n.a.createElement(d,i({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},229:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(226),l=a(224),i=a.n(l);a(85);t.a=function({children:e,className:t,badge:a,icon:r,size:l,target:o,to:s}){let b=i()("jump-to",`jump-to--${l}`,t),p=n.a.createElement("div",{className:"jump-to--inner"},n.a.createElement("div",{className:"jump-to--inner-2"},n.a.createElement("div",{className:"jump-to--main"},a?n.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),n.a.createElement("div",{className:"jump-to--right"},n.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return o?n.a.createElement("a",{href:s,target:o,className:b},p):n.a.createElement(c.a,{to:s,className:b},p)}},237:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),l=a(271),i=a(224),o=a.n(i),s=a(274),b=a.n(s);function p({block:e,centered:t,className:a,style:r,values:n,selectedValue:l,setSelectedValue:i}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:o()("tabs",a,{"tabs--block":e}),style:r},n.map(({value:e,label:t})=>c.a.createElement("li",{className:o()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>i(e)},t))))}function u({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:i,select:o,style:s,values:m,urlKey:d}=e,[O,j]=Object(n.useState)(i);return Object(n.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&d){let e=b.a.parse(window.location.search);e[d]&&j(e[d])}},[]),c.a.createElement("div",null,m.length>1&&(o?c.a.createElement(u,Object(r.a)({selectedValue:O,setSelectedValue:j},e)):c.a.createElement(p,Object(r.a)({selectedValue:O,setSelectedValue:j},e))),c.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(l).filter(e=>e.props.value===O)[0]))}},238:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}}}]);