(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return l}));var n=a(1),o=a(6),i=(a(0),a(242)),r=a(250),s={title:"Updating",description:"How to update Vector to a newer version."},c={id:"administration/updating",title:"Updating",description:"How to update Vector to a newer version.",source:"@site/docs/administration/updating.md",permalink:"/docs/administration/updating",editUrl:"https://github.com/brainrexapi/edit/master/docs/administration/updating.md",sidebar:"docs",previous:{title:"Tuning",permalink:"/docs/administration/tuning"},next:{title:"Validating",permalink:"/docs/administration/validating"}},u=[{value:"Working Upstream",id:"working-upstream",children:[]},{value:"Capacity Planning",id:"capacity-planning",children:[]}],d={rightToc:u},p="wrapper";function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Updating Vector depends largely on your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"installation"),'\nmethod. Each installation guide provides it\'s own "Updating" section:'),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Containers")),Object(i.b)(r.a,{to:"/docs/setup/installation/containers/docker/#updating",mdxType:"Jump"},"Docker"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Package managers")),Object(i.b)(r.a,{to:"/docs/setup/installation/package-managers/dpkg/#updating",mdxType:"Jump"},"DPKG"),Object(i.b)(r.a,{to:"/docs/setup/installation/package-managers/homebrew/#updating",mdxType:"Jump"},"Homebrew"),Object(i.b)(r.a,{to:"/docs/setup/installation/package-managers/rpm/#updating",mdxType:"Jump"},"RPM"),Object(i.b)(r.a,{to:"/docs/setup/installation/package-managers/msi/#updating",mdxType:"Jump"},"MSI"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Manual")),Object(i.b)(r.a,{to:"/docs/setup/installation/manual/from-archives/#updating",mdxType:"Jump"},"Updating from archives"),Object(i.b)(r.a,{to:"/docs/setup/installation/manual/from-source/#updating",mdxType:"Jump"},"Updating from source"),Object(i.b)("h2",{id:"working-upstream"},"Working Upstream"),Object(i.b)("p",null,"Depending on your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/topologies/"}),"topology"),", you'll want update your Vector\ninstances in a specific order. You should ",Object(i.b)("em",{parentName:"p"},"always")," start downstream and work\nyour way upstream. This allows for incremental updating across your topology,\nensuring downstream Vector instances do not receive data in formats that are\nunrecognized. Vector always makes a best effort to successfully process data,\nbut there is no guarantee of this if a Vector instance is handling a data\nformat defined by a future unknown Vector version."),Object(i.b)("h2",{id:"capacity-planning"},"Capacity Planning"),Object(i.b)("p",null,"Because you'll be taking Vector instances offline for a short period of time,\nupstream data will accumulate and buffer. To avoid overloading your instances,\nyou'll want to make sure you have enough capacity to handle the surplus of\ndata. We recommend provisioning at least 20% of head room, on all resources,\nto account for spikes and updating."))}l.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),o=a(0),i=a.n(o),r=a(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,c=t||a,u=s.test(c),d=Object(o.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let l;return Object(o.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(c),()=>{p&&l&&l.disconnect()}),[c,p,u]),c&&u?i.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(c),d.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{l=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(l.unobserve(e),l.disconnect(),t())})}),l.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):i.a.createElement("a",Object(n.a)({},e,{href:c}))}},250:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(243),r=a(241),s=a.n(r);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:r,target:c,to:u}){let d=s()("jump-to",`jump-to--${r}`,t),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},a?o.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return c?o.a.createElement("a",{href:u,target:c,className:d},p):o.a.createElement(i.a,{to:u,className:d},p)}}}]);