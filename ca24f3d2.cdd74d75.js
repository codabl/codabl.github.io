(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{221:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var o=r(1),a=r(6),n=(r(0),r(254)),s=r(276),i=r.n(s),l={title:"Topologies",description:"Example topologies for Vector"},c={id:"setup/deployment/topologies",title:"Topologies",description:"Example topologies for Vector",source:"@site/docs/setup/deployment/topologies.md",permalink:"/docs/setup/deployment/topologies",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/deployment/topologies.md",sidebar:"docs",previous:{title:"Vector as a Service",permalink:"/docs/setup/deployment/roles/service"},next:{title:"Guides",permalink:"/docs/setup/guides"}},b=[{value:"Distributed",id:"distributed",children:[]},{value:"Centralized",id:"centralized",children:[]},{value:"Stream-Based",id:"stream-based",children:[]}],p={rightToc:b},d="wrapper";function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)(d,Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Vector can be deployed to form a variety of topologies. This section showcases common examples; use these as ",Object(n.b)("em",{parentName:"p"},"guidelines")," to build your own. Once you have a general understanding of your own topology you should progress to the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/"}),"roles section"),", where you'll get a closer look at each role Vector serves to form your topology."),Object(n.b)("h2",{id:"distributed"},"Distributed"),Object(n.b)(i.a,{src:"/img/topologies-distributed.svg",mdxType:"SVG"}),Object(n.b)("p",null,"The simplest topology. This topology offers direct communication with your downstream services from your client nodes."),Object(n.b)("h4",{id:"pros"},"Pros"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Simple.")," Less moving parts."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Elastic.")," Easily scales with your app. Resources grow as you scale.")),Object(n.b)("h4",{id:"cons"},"Cons"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Less efficient.")," Depending on the complexity of your pipelines, this will use more local resources, which could disrupt the performance of other applications on the same host."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Less durable.")," Because data is buffered on the host it is more likely you'll lose buffered data in the event of an unrecoverable crash. Often times this is the most important and useful data."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More downstream stress.")," Downstream services will receive more requests with smaller payloads that could potentially disrupt stability of these services."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Reduced downstream stability.")," You risk overloading downstream services if you need to scale up quickly or exceed the capacity a downstream service can handle."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Lacks multi-host context.")," Lacks awareness of other hosts and eliminates the ability to perform operations across hosts, such as reducing logs to global metrics. This is typically a concern for very large deployments where individual host metrics are less useful.")),Object(n.b)("h2",{id:"centralized"},"Centralized"),Object(n.b)(i.a,{src:"/img/topologies-centralized.svg",mdxType:"SVG"}),Object(n.b)("p",null,"A good balance of simplicity, stability, and control. For most, this topology is a good compromise between the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"#distributed"}),"distributed")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"#stream-based"}),"stream-based")," topologies. It offers many of the advantages of the stream-based topology without the management overhead and cost of running a Kafka cluster."),Object(n.b)("h4",{id:"pros-1"},"Pros"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More efficient.")," More efficient for client nodes and downstream services. Vector agents are doing less which means they're using less resources. In addition, the centralized Vector service will buffer more data, achieve better compression, and send optimized requests downstream."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More reliable.")," Vector will protect downstream services from volume spikes, buffering and flushing data at smoothed out intervals."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Has multi-host context.")," Because your data is centralized, you'll be able to perform operations across hosts, such as reducing logs to global metrics. This is advantageous for large deployments where individual host metrics are not interesting.")),Object(n.b)("h4",{id:"cons-1"},"Cons"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More complex.")," There are more moving parts."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Less durable.")," Agent nodes are designed to get data off of the machine as quickly as possible, and this offers higher potential for data loss since the central Vector service could die and lose buffered data. If this type of outage is unacceptable, then we recommend the ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#stream-based"}),"stream-based topology")," below.")),Object(n.b)("h2",{id:"stream-based"},"Stream-Based"),Object(n.b)(i.a,{src:"/img/topologies-stream-based.svg",mdxType:"SVG"}),Object(n.b)("p",null,"The most durable and elastic topology. This topology is typically adopted for very large streams with teams that are familiar with running a stream-based service such as Kafka."),Object(n.b)("h4",{id:"pros-2"},"Pros"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Most durable & reliable.")," Stream services, like Kafka, are designed for high durability and reliability, replicating data across multiple nodes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Most efficient.")," Vector agents are doing less, making them more efficient, and Vector services do not have to worry about durability, which can be tuned towards performance."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ability to restream.")," Restream your data depending on your stream's retention period."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cleaner separation of responsibilities.")," Vector is used solely as a routing layer and is not responsible for durability. Durability is delegated to a purpose-built service that you can switch and evolve over time.")),Object(n.b)("h4",{id:"cons-2"},"Cons"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Increased management overhead.")," Managing a stream service, such as Kafka, is a complex endeavor and generally requires an experienced team to setup and manage properly."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More complex.")," This topology is complex and requires a deeper understand of managing production-grade streams."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"More expensive.")," In addition the management cost, the added stream cluster will require more resources which will increase operational cost.")))}u.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||n;return r?a.a.createElement(m,i({ref:t},c,{components:r})):a.a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);