(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),c=(a(0),a(242)),s=a(277),o={title:"Sinks",description:"Vector sinks fan-out logs and metrics data to a variety of downstream destinations. These could be exact services, like Elasticsearch, or generic protocols, like HTTP or TCP.",sidebar_label:"hidden",hide_pagination:!0},l={id:"reference/sinks",title:"Sinks",description:"Vector sinks fan-out logs and metrics data to a variety of downstream destinations. These could be exact services, like Elasticsearch, or generic protocols, like HTTP or TCP.",source:"@site/docs/reference/sinks.md",permalink:"/docs/reference/sinks",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Tokenizer Transform",permalink:"/docs/reference/transforms/tokenizer"},next:{title:"AWS Cloudwatch Logs Sink",permalink:"/docs/reference/sinks/aws_cloudwatch_logs"}},i=[],m={rightToc:i},d="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Vector sinks fan-out ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),"log")," and\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"metric")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," data to a\nvariety of downstream destinations. They are responsible for reliably sending,\nor outputting, this data."),Object(c.b)("hr",null),Object(c.b)(s.a,{titles:!1,sources:!1,transforms:!1,mdxType:"VectorComponents"}))}u.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),s=a(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,l=t||a,i=o.test(l),m=Object(r.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(r.useEffect)(()=>(!d&&i&&window.docusaurus.prefetch(l),()=>{d&&u&&u.disconnect()}),[l,d,i]),l&&i?c.a.createElement(s.b,Object(n.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:e=>{d&&e&&i&&((e,t)=>{u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(243),s=a(241),o=a.n(s);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:s,target:l,to:i}){let m=o()("jump-to",`jump-to--${s}`,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return l?r.a.createElement("a",{href:i,target:l,className:m},d):r.a.createElement(c.a,{to:i,className:m},d)}},277:function(e,t,a){"use strict";a(12);var n=a(1),r=a(0),c=a.n(r),s=a(271),o=a.n(s);a(94);var l=function({icon:e,values:t,currentState:a,setState:n}){if(0==t.size)return null;let r=Array.from(t);return c.a.createElement(c.a.Fragment,null,r.map((t,r)=>{let s="string"==typeof t?o()(t):t;return c.a.createElement("label",{key:r},c.a.createElement("input",{type:"checkbox",onChange:e=>{let r=new Set(a);e.currentTarget.checked?r.add(t):r.delete(t),n(r)},checked:a.has(t)}),e?c.a.createElement("i",{className:`feather icon-${e}`}):""," ",s)}))},i=a(250),m=a(243),d=a(283),u=a.n(d),p=a(241),f=a.n(p),h=a(284),b=a.n(h),v=a(249);a(95);function g({delivery_guarantee:e,description:t,event_types:a,name:n,status:r,type:s}){let o=null;return"source"==s&&(o=`/docs/reference/sources/${n}/`),"transform"==s&&(o=`/docs/reference/transforms/${n}/`),"sink"==s&&(o=`/docs/reference/sinks/${n}/`),c.a.createElement(m.a,{to:o,className:"vector-component"},c.a.createElement("div",{className:"vector-component--header"},t&&c.a.createElement("i",{className:"feather icon-info",title:t}),c.a.createElement("div",{className:"vector-component--name"},n," ",s)),c.a.createElement("div",{className:"vector-component--badges"},a.includes("log")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with log event types"},"L"):"",a.includes("metric")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with metric event types"},"M"):"","beta"==r?c.a.createElement("span",{className:"badge badge--warning",title:"This component is in beta and is not recommended for production environments"},c.a.createElement("i",{className:"feather icon-alert-triangle"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component has passed reliability standards that make it production ready"},c.a.createElement("i",{className:"feather icon-award"})),"best_effort"==e?c.a.createElement("span",{className:"badge badge--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data"},c.a.createElement("i",{className:"feather icon-shield-off"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component offers an at-least-once delivery guarantee"},c.a.createElement("i",{className:"feather icon-shield"}))))}function E({components:e,headingLevel:t,titles:a}){const r=e.filter(e=>"source"==e.type),s=e.filter(e=>"transform"==e.type),o=e.filter(e=>"sink"==e.type),l=`h${t||3}`;return e.length>0?c.a.createElement(c.a.Fragment,null,r.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,r.length," Sources"),c.a.createElement("div",{className:"vector-components--grid"},r.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",s.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,s.length," Transforms"),c.a.createElement("div",{className:"vector-components--grid"},s.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",o.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,o.length," Sinks"),c.a.createElement("div",{className:"vector-components--grid"},o.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",c.a.createElement("hr",null),c.a.createElement(i.a,{to:"mailto:support@brainrex.com",target:"_blank",icon:"plus-circle"},"Request a new component")):c.a.createElement("div",{className:"empty"},c.a.createElement("div",{className:"icon"},"\u2639"),c.a.createElement("div",null,"No components found"))}t.a=function(e){const{siteConfig:t}=Object(v.a)(),{metadata:{sources:a,transforms:n,sinks:s}}=t.customFields,o=e.titles||null==e.titles,i=1==e.filterColumn,d=e.location?b.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{};let p=[];(e.sources||null==e.sources)&&(p=p.concat(Object.values(a))),(e.transforms||null==e.transforms)&&(p=p.concat(Object.values(n))),(e.sinks||null==e.sinks)&&(p=p.concat(Object.values(s))),p=p.sort((e,t)=>e.name>t.name?1:-1);const[h,g]=Object(r.useState)("true"==d["at-least-once"]),[y,N]=Object(r.useState)(new Set(d.functions)),[k,w]=Object(r.useState)("true"==d.log),[j,S]=Object(r.useState)("true"==d.metric),[O,T]=Object(r.useState)(new Set(d["operating-systems"])),[_,C]=Object(r.useState)("true"==d["prod-ready"]),[x,L]=Object(r.useState)(new Set(d.providers)),[z,$]=Object(r.useState)(null);z&&(p=p.filter(e=>{return`${e.name.toLowerCase()} ${e.type.toLowerCase()}`.includes(z.toLowerCase())})),h&&(p=p.filter(e=>"at_least_once"==e.delivery_guarantee)),y.size>0&&(p=p.filter(e=>y.has(e.function_category))),k&&(p=p.filter(e=>e.event_types.includes("log"))),j&&(p=p.filter(e=>e.event_types.includes("metric"))),O.size>0&&(p=p.filter(e=>Array.from(O).every(t=>e.operating_systems.includes(t)))),_&&(p=p.filter(e=>"prod-ready"==e.status)),x.size>0&&(p=p.filter(e=>Array.from(x).every(t=>e.service_providers.includes(t))));const F=new Set(u()(p).map(e=>e.operating_systems).flatten().uniq().compact().sort().value()),P=new Set(u()(p).map(e=>e.service_providers).flatten().uniq().compact().sort().value()),V=new Set(u()(p).map(e=>e.function_category).uniq().compact().sort().value());return c.a.createElement("div",{className:f()("vector-components",{"vector-components--cols":i})},c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",onChange:e=>$(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/data-model/",title:"Learn more about Vector's event types"},"Event types ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that work with log event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>w(e.currentTarget.checked),checked:k})," Log"),c.a.createElement("label",{title:"Show only components that work with metric event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>S(e.currentTarget.checked),checked:j})," Metric"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/guarantees/",title:"Learn more about Vector's guarantees"},"Guarantees ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that offer an at-least-once delivery guarantee."},c.a.createElement("input",{type:"checkbox",onChange:e=>g(e.currentTarget.checked),checked:h}),c.a.createElement("i",{className:"feather icon-shield"})," At-least-once"),c.a.createElement("label",{title:"Show only production ready components."},c.a.createElement("input",{type:"checkbox",onChange:e=>C(e.currentTarget.checked),checked:_}),c.a.createElement("i",{className:"feather icon-award"})," Prod-ready"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Functions"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Functions",icon:"code",values:V,currentState:y,setState:N}))),P.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Providers"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Providers",icon:"cloud",values:P,currentState:x,setState:L}))),F.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/setup/installation/operating-systems/",title:"Learn more about Vector's operating systems"},"Operating Systems")),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Operating Systems",icon:"cpu",values:F,currentState:O,setState:T})))),c.a.createElement("div",{className:"vector-components--results"},c.a.createElement(E,{components:p,headingLevel:e.headingLevel,titles:o})))}}}]);