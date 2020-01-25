(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(242)),o=n(254),s=n.n(o),c=n(250),d={title:"Data Model (Event)",sidebar_label:"hidden",description:"Vector's internal data model -- event and it's subtypes."},u={id:"about/data-model",title:"Data Model (Event)",description:"Vector's internal data model -- event and it's subtypes.",source:"@site/docs/about/data-model.md",permalink:"/docs/about/data-model",editUrl:"https://github.com/brainrexapi/edit/master/docs/about/data-model.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/about/concepts"},next:{title:"Log Event",permalink:"/docs/about/data-model/log"}},l=[{value:"Subtypes",id:"subtypes",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why Not <em>Just</em> Events?",id:"why-not-just-events",children:[]}]}],m={rightToc:l},b="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{src:"/img/data-model-event.svg",mdxType:"SVG"}),Object(i.b)("p",null,'The individual pieces of data flowing through Vector are known as "events".\nEvents are arbitrarily wide, and deep, structured pieces of data. They have no\nrequirements or limitations. Ideally, events contain enough rich information\nto derive any type of monitoring data from it.'),Object(i.b)("h2",{id:"subtypes"},"Subtypes"),Object(i.b)("p",null,"Vector defines subtypes for events. This is necessary to establish domain\nspecific requriements enabling interoperability with existing monitoring and\nobservability systems."),Object(i.b)(c.a,{to:"/docs/about/data-model/log/",mdxType:"Jump"},"Log"),Object(i.b)(c.a,{to:"/docs/about/data-model/metric/",mdxType:"Jump"},"Metric"),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"why-not-just-events"},"Why Not ",Object(i.b)("em",{parentName:"h3"},"Just")," Events?"),Object(i.b)("p",null,"We, ",Object(i.b)("em",{parentName:"p"},"very much"),', like the idea of an event only world, one where every service\nis perfectly instrumented with events that contain rich data and context.\nUnfortunately, that is not the case; exisiting services emit metrics, traces,\nand logs of varying quality. By designing Vector to meet services where they are\n(current state), we serve as a bridge to newer standards. This is why we place\n"events" at the top of our data model, where logs and metrics are derived.'))}p.isMDXComponent=!0},243:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,c=t||n,d=s.test(c),u=Object(r.useRef)(!1),l="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(r.useEffect)(()=>(!l&&d&&window.docusaurus.prefetch(c),()=>{l&&m&&m.disconnect()}),[c,l,d]),c&&d?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(c),u.current=!0)},innerRef:e=>{l&&e&&d&&((e,t)=>{m=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):i.a.createElement("a",Object(a.a)({},e,{href:c}))}},250:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(243),o=n(241),s=n.n(o);n(86);t.a=function({children:e,className:t,badge:n,icon:a,size:o,target:c,to:d}){let u=s()("jump-to",`jump-to--${o}`,t),l=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${a||"chevron-right"} arrow`}))));return c?r.a.createElement("a",{href:d,target:c,className:u},l):r.a.createElement(i.a,{to:d,className:u},l)}}}]);