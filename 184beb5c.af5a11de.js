/*! For license information please see 184beb5c.af5a11de.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),o=(n(0),n(228)),i=n(252),c=n.n(i),s=n(231),l=n(264),d={title:"Vector as a Service",sidebar_label:"Service",description:"Deploying and running Vector as a service"},u={id:"setup/deployment/roles/service",title:"Vector as a Service",description:"Deploying and running Vector as a service",source:"@site/docs/setup/deployment/roles/service.md",permalink:"/docs/setup/deployment/roles/service",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/deployment/roles/service.md",sidebar_label:"Service",sidebar:"docs",previous:{title:"Vector as an Agent",permalink:"/docs/setup/deployment/roles/agent"},next:{title:"Topologies",permalink:"/docs/setup/deployment/topologies"}},b=[{value:"Vector Configuration",id:"vector-configuration",children:[{value:"Receiving Data",id:"receiving-data",children:[]},{value:"Performance Tuning",id:"performance-tuning",children:[]},{value:"On-Disk Buffering",id:"on-disk-buffering",children:[]}]},{value:"System Configuration",id:"system-configuration",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Hardware",id:"hardware",children:[]},{value:"Load balancing",id:"load-balancing",children:[]}]},{value:"Administration",id:"administration",children:[{value:"Configuration Changes",id:"configuration-changes",children:[]},{value:"Updating Vector",id:"updating-vector",children:[]}]}],p={rightToc:b},f="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(f,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{src:"/img/roles-service.svg",mdxType:"SVG"}),Object(o.b)("p",null,"When Vector serves as a service, its purpose is to efficiently receive,\naggregate, and route data downstream. In this scenario, Vector is the primary\nservice on the host and should take full advantage of all resources."),Object(o.b)("h2",{id:"vector-configuration"},"Vector Configuration"),Object(o.b)("h3",{id:"receiving-data"},"Receiving Data"),Object(o.b)("p",null,"When Vector is deployed as a service it receives data over the network from\nupstream clients or services. Relevant sources include the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/vector/"}),Object(o.b)("inlineCode",{parentName:"a"},"vector")),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(o.b)("inlineCode",{parentName:"a"},"syslog")),", and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(o.b)("inlineCode",{parentName:"a"},"socket"))," sources."),Object(o.b)("h3",{id:"performance-tuning"},"Performance Tuning"),Object(o.b)("p",null,"Vector is designed, by default, to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/#performance"}),"take full advantage of all system resources"),",\nwhich is usually preferred in the service role. As a result, there is nothing\nspecial you need to do to improve performance."),Object(o.b)("h3",{id:"on-disk-buffering"},"On-Disk Buffering"),Object(o.b)("p",null,"To ensure Vector does not lose data between restarts you'll need to switch\nthe buffer to use the disk for all relevant sinks. This can be accomplished\nby adding a simple ",Object(o.b)("inlineCode",{parentName:"p"},"[buffer]")," table to each of your configured sinks. In\naddition, we recommend specifying an explicit ",Object(o.b)("inlineCode",{parentName:"p"},"data_dir")," for Vector's buffer.\nFor example:"),Object(o.b)(s.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector"\n\n[sinks.backups]\n    type = "s3"\n    # ...\n\n    [sinks.backups.buffer]\n        type = "disk"\n        max_size = 5000000000 # 5gb\n')),Object(o.b)(l.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Please make sure that the Vector user has write access to the specified\n",Object(o.b)("inlineCode",{parentName:"p"},"data_dir"),".")),Object(o.b)("p",null,"Please note that there is a performance hit to enabling on-disk buffers of\nabout 3X. We believe this to be a worthwhile tradeoff to ensure data is not\nlost across restarts."),Object(o.b)("h2",{id:"system-configuration"},"System Configuration"),Object(o.b)("p",null,"By default Vector is tuned for performance, there are no extra system level\nconfiguration steps necessary to improve performance."),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("h3",{id:"hardware"},"Hardware"),Object(o.b)("p",null,"The hardware needed is highly dependent on your configuration and data volume.\nTypically, Vector is CPU bound and not memory bound, especially if all buffers\nare ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#on-disk-buffering"}),"configured to use the disk"),". Our\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/#performance"}),"benchmarks")," should give you a general idea of resource usage\nin relation to specific pipelines and data volume."),Object(o.b)("h4",{id:"cpu"},"CPU"),Object(o.b)("p",null,"Vector benefits greatly from parallel processing, the more cores the better.\nFor example, if you're on AWS, the ",Object(o.b)("inlineCode",{parentName:"p"},"c5d.*")," instances will give you the most\nbang for your buck given their optimization towards CPU and the fact that\nthey include a fast NVME drive for on-disk buffers."),Object(o.b)("h4",{id:"memory"},"Memory"),Object(o.b)("p",null,"If you've configured ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#on-disk-buffering"}),"on-disk buffers"),",\nthen memory should not be your bottleneck. If you opted to keep buffers\nin-memory, then you'll want to make sure you have at least 2X your cumulative\nbuffer size. For example, if you have an ",Object(o.b)("inlineCode",{parentName:"p"},"elasticsearch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"s3")," sink\nconfigured to use 100mb and 1gb, then you should ensure you have at least\n2.2gb ","(","1.1 ","*"," 2",")"," of memory available."),Object(o.b)("h4",{id:"disk"},"Disk"),Object(o.b)("p",null,"If you've configured on-disk buffers, then we recommend using local NVMe SSD\ndrives when possible. This will ensure disk IO does not become your bottleneck.\nFor example, if you're on AWS you'll want to choose an instance that includes a\nlocal NVME SSD drive, such as the ",Object(o.b)("inlineCode",{parentName:"p"},"c5d.*")," instances. The size of the disk should\nbe at least 3 times your cumulative buffer size."),Object(o.b)("h3",{id:"load-balancing"},"Load balancing"),Object(o.b)("p",null,"If you've configured Vector to receive data over the network then you'll\nbenefit from load balancing. Select sinks offer built-in load balancing,\nsuch as the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/http/"}),Object(o.b)("inlineCode",{parentName:"a"},"http")),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/socket/"}),Object(o.b)("inlineCode",{parentName:"a"},"socket")),", and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/vector/"}),Object(o.b)("inlineCode",{parentName:"a"},"vector"))," sinks. This is a very rudimentary form of load\nbalancing that requires all clients to know about the available downstream\nhosts. A more formal load balancing strategy is outside of the scope of this\ndocument, but is typically achieved by services such as\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://aws.amazon.com/elasticloadbalancing/"}),"AWS' ELB"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.haproxy.org/"}),"Haproxy"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/"}),"Nginx"),", and more."),Object(o.b)("h2",{id:"administration"},"Administration"),Object(o.b)("h3",{id:"configuration-changes"},"Configuration Changes"),Object(o.b)("p",null,"Vector can be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/administration/process-management/#reloading"}),"reloaded")," to apply configuration changes.\nThis is the recommended strategy and should be used over restarting when\npossible."),Object(o.b)("h3",{id:"updating-vector"},"Updating Vector"),Object(o.b)("p",null,"To ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/administration/updating/"}),"update")," Vector you'll need to restart the process. Like any\nservice, restarting without disruption is achieved by higher level design\ndecisions, such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#load-balancing"}),"load balancing"),"."))}m.isMDXComponent=!0},227:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(85);t.a=function({fileName:e,links:t}){let n=[];for(var r in t)n.push(a.a.createElement("a",{href:r.href},r.text||"Learn more&hellip;"));return a.a.createElement("div",{className:"code-header"},n.length>0&&a.a.createElement("span",{className:"code-header--links"},n),e)}},264:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(227),i=n.n(o);n(95);t.a=function({children:e,fill:t,icon:n,type:r}){let o=null;switch(r){case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return a.a.createElement("div",{className:i()("alert",`alert--${r}`,{"alert--fill":t}),role:"alert"},a.a.createElement("i",{className:i()("feather",`icon-${n||o}`)}),e)}}}]);