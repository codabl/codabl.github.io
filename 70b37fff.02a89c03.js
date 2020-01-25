(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),s=(a(0),a(242)),c=a(266),l={title:"Install Vector On Ubuntu",sidebar_label:"Ubuntu",description:"Install Vector on the Ubuntu operating system"},o={id:"setup/installation/operating-systems/ubuntu",title:"Install Vector On Ubuntu",description:"Install Vector on the Ubuntu operating system",source:"@site/docs/setup/installation/operating-systems/ubuntu.md",permalink:"/docs/setup/installation/operating-systems/ubuntu",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/operating-systems/ubuntu.md",sidebar_label:"Ubuntu",sidebar:"docs",previous:{title:"Install Vector On Red Hat Enterprise Linux",permalink:"/docs/setup/installation/operating-systems/rhel"},next:{title:"Install Vector On Windows",permalink:"/docs/setup/installation/operating-systems/windows"}},i=[],u={rightToc:i},m="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Vector can be installed on the Ubuntu through the following methods:"),Object(s.b)(c.b,{docker:!0,os:"Linux",packageManager:"DPKG",mdxType:"InstallChoices"}))}d.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),r=a(0),s=a.n(r),c=a(17);const l=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,o=t||a,i=l.test(o),u=Object(r.useRef)(!1),m="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(r.useEffect)(()=>(!m&&i&&window.docusaurus.prefetch(o),()=>{m&&d&&d.disconnect()}),[o,m,i]),o&&i?s.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(o),u.current=!0)},innerRef:e=>{m&&e&&i&&((e,t)=>{d=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):s.a.createElement("a",Object(n.a)({},e,{href:o}))}},247:function(e,t,a){"use strict";var n=a(1),r=a(0),s=a.n(r),c=a(252),l=a(241),o=a.n(l),i=a(253),u=a.n(i);function m({block:e,centered:t,className:a,style:n,values:r,selectedValue:c,setSelectedValue:l}){return s.a.createElement("div",{className:t?"tabs--centered":""},s.a.createElement("ul",{className:o()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>s.a.createElement("li",{className:o()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>l(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return s.a.createElement(c.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:c,defaultValue:l,select:o,style:i,values:p,urlKey:b}=e,[f,h]=Object(r.useState)(l);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=u.a.parse(window.location.search);e[b]&&h(e[b])}},[]),s.a.createElement("div",null,p.length>1&&(o?s.a.createElement(d,Object(n.a)({selectedValue:f,setSelectedValue:h},e)):s.a.createElement(m,Object(n.a)({selectedValue:f,setSelectedValue:h},e))),s.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(c).filter(e=>e.props.value===f)[0]))}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(243),c=a(241),l=a.n(c);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:c,target:o,to:i}){let u=l()("jump-to",`jump-to--${c}`,t),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return o?r.a.createElement("a",{href:i,target:o,className:u},m):r.a.createElement(s.a,{to:i,className:u},m)}},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),s=a(250),c=a(247),l=a(248),o=a(249);function i(){const e=Object(o.a)(),{siteConfig:t={}}=e,{metadata:{installation:a}}=t.customFields;return a}function u({arch:e,docker:t,os:a,packageManager:n}){const{containers:c,downloads:l,package_managers:o}=i(),u=l.filter(t=>t.arch.toLowerCase()==e.toLowerCase()&&t.os.toLowerCase()==a.toLowerCase()&&"archive"==t.type)[0],m=c.find(e=>"docker"==e.id),d=m.archs.includes(e)&&m.oss.includes(a),p=n&&o.find(e=>e.name==n).archs.includes(e);return r.a.createElement("div",null,p&&r.a.createElement(s.a,{to:`/docs/setup/installation/package-managers/${n.toLowerCase()}/?arch=${e}`},r.a.createElement("i",{className:"feather icon-package"})," ",n," (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&d&&r.a.createElement(s.a,{to:"/docs/setup/installation/containers/docker/"},r.a.createElement("i",{className:"feather icon-terminal"})," Docker (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&!d&&r.a.createElement(s.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${u.file_name}`},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")  ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),r.a.createElement("p",null,"Alternatively, you can use your preferred method:"),p&&d&&r.a.createElement(s.a,{to:"/docs/setup/installation/containers/docker/",size:"sm"},r.a.createElement("i",{className:"feather icon-package"})," Docker (",e,")"),(p||d)&&r.a.createElement(s.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${u.file_name}`,size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")"),r.a.createElement(s.a,{to:"/docs/setup/installation/manual/from-source/",size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From Source"))}t.b=function({docker:e,os:t,packageManager:a}){const{downloads:n}=i(),s=n.filter(e=>e.os.toLowerCase()==t.toLowerCase()&&"archive"==e.type).map(e=>e.arch);return r.a.createElement("div",null,r.a.createElement(c.a,{block:!0,defaultValue:s[0],urlKey:"os",values:s.map(e=>({label:r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-cpu"})," ",e),value:e}))},s.map((n,s)=>r.a.createElement(l.a,{key:s,value:n},r.a.createElement(u,{arch:n,docker:e,os:t,packageManager:a})))))}}}]);