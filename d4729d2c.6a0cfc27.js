(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(1),l=a(6),r=(a(0),a(228)),s=a(236),o=a(237),c=a(231),i=a(234),u=a(235),m={delivery_guarantee:"at_least_once",description:"The Vector `kafka` source ingests data through Kafka 0.9 or later and outputs `log` events.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+kafka%22",operating_systems:["linux","macos","windows"],sidebar_label:'kafka|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/kafka.rs",status:"beta",title:"Kafka Source",unsupported_operating_systems:[]},d={id:"reference/sources/kafka",title:"Kafka Source",description:"The Vector `kafka` source ingests data through Kafka 0.9 or later and outputs `log` events.",source:"@site/docs/reference/sources/kafka.md",permalink:"/docs/reference/sources/kafka",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources/kafka.md",sidebar_label:'kafka|["log"]',sidebar:"docs",previous:{title:"Journald Source",permalink:"/docs/reference/sources/journald"},next:{title:"Prometheus Source",permalink:"/docs/reference/sources/prometheus"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"auto_offset_reset",id:"auto_offset_reset",children:[]},{value:"bootstrap_servers",id:"bootstrap_servers",children:[]},{value:"group_id",id:"group_id",children:[]},{value:"key_field",id:"key_field",children:[]},{value:"session_timeout_ms",id:"session_timeout_ms",children:[]},{value:"topics",id:"topics",children:[]}]},{value:"Output",id:"output",children:[{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],b={rightToc:p},f="wrapper";function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(f,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source ingests data through Kafka 0.9 or later and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"common",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "kafka" # must be: "kafka"\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  group_id = "consumer-group-name" # example\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # example\n\n  # OPTIONAL\n  key_field = "user_id" # example, no default\n'))),Object(r.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "kafka" # must be: "kafka"\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  group_id = "consumer-group-name" # example\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # example\n\n  # OPTIONAL\n  auto_offset_reset = "largest" # default\n  key_field = "user_id" # example, no default\n  session_timeout_ms = 10000 # default, milliseconds\n')))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(i.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:"largest",enumValues:null,examples:["smallest","earliest","beginning","largest","latest","end","error"],name:"auto_offset_reset",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"auto_offset_reset"},"auto_offset_reset"),Object(r.b)("p",null,"If offsets for consumer group do not exist, set them using this strategy. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"}),"librdkafka documentation")," for ",Object(r.b)("inlineCode",{parentName:"p"},"auto.offset.reset")," option for explanation.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["10.14.22.123:9092,10.14.23.332:9092"],name:"bootstrap_servers",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"bootstrap_servers"},"bootstrap_servers"),Object(r.b)("p",null,'A comma-separated list of host and port pairs that are the addresses of the Kafka brokers in a "bootstrap" Kafka cluster that a Kafka client connects to initially to bootstrap itself.')),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["consumer-group-name"],name:"group_id",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"group_id"},"group_id"),Object(r.b)("p",null,"The consumer group name to be used to consume events from Kafka.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["user_id"],name:"key_field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"key_field"},"key_field"),Object(r.b)("p",null,"The log field name to use for the topic key. If unspecified, the key would not be added to the log event. If the message has null key, then this field would not be added to the log event.")),Object(r.b)(u.a,{common:!1,defaultValue:1e4,enumValues:null,examples:[5e3,1e4],name:"session_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"milliseconds",mdxType:"Field"},Object(r.b)("h3",{id:"session_timeout_ms"},"session_timeout_ms"),Object(r.b)("p",null,"The Kafka session timeout in milliseconds.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:[["^(prefix1|prefix2)-.+","topic-1","topic-2"]],name:"topics",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"topics"},"topics"),Object(r.b)("p",null,"The Kafka topics names to read events from. Regex is supported if the topic begins with ",Object(r.b)("inlineCode",{parentName:"p"},"^"),"."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source ingests data through Kafka 0.9 or later and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events.\nFor example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n}\n')),Object(r.b)("p",null,"More detail on the output schema is below."),Object(r.b)(i.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],name:"message",path:null,required:!0,type:"string",mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The raw event message, unaltered.")),Object(r.b)(u.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"timestamp",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The exact time the event was ingested."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}h.isMDXComponent=!0},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?l.a.createElement(b,o({ref:t},i,{components:a})):l.a.createElement(b,o({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<r;i++)s[i]=a[i];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},231:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(l.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return l.a.createElement("div",{className:"code-header"},a.length>0&&l.a.createElement("span",{className:"code-header--links"},a),e)}},232:function(e,t,a){"use strict";(function(e){var n=a(1),l=a(0),r=a.n(l),s=a(248),o=a(240),c=a.n(o),i=a(239),u=a(227),m=a.n(u),d=a(247),p=a.n(d),b=a(241),f=a.n(b),h=a(229),v=a(86),g=a.n(v),O=a(238);(void 0!==e?e:window).Prism=i.a,a(242),a(243),a(244),a(245),a(246);const y=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(h.a)(),[i,u]=Object(l.useState)(!1),d=Object(l.useRef)(null),b=Object(l.useRef)(null),[v]=Object(O.a)();let j=[];if(a&&y.test(a)){const e=a.match(y)[1];j=f.a.parse(e).filter(e=>e>0)}Object(l.useEffect)(()=>{let e;return b.current&&(e=new c.a(b.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[b.current,d.current]);let k=t&&t.replace(/language-/,"");!k&&o.defaultLanguage&&(k=o.defaultLanguage);const E=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};let N="dark"==v?o.darkTheme:o.theme;return r.a.createElement(s.a,Object(n.a)({},s.b,{theme:N||p.a,code:e.trim(),language:k}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:s})=>r.a.createElement("div",{className:g.a.codeBlockWrapper},r.a.createElement("pre",{ref:d,className:m()(e,g.a.codeBlock),style:t},a.map((e,t)=>{const a=l({line:e,key:t});return j.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>r.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))))})),r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:g.a.copyButton,onClick:E},i?"Copied":"Copy")))}}).call(this,a(48))},234:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(88);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[s,o]=Object(n.useState)(!1),[c,i]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),d=u.some(e=>e.props.required),p=u;return a&&(p=p.filter(e=>e.props.common)),s&&(p=p.filter(e=>e.props.required)),c&&(p=p.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},p.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>i(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),d&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},235:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(227),s=a.n(r),o=(a(228),a(231)),c=a(232);function i(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${i(t.value)}`:`${u(Object.keys(t)[0])} = ${i(Object.values(t)[0])}`:e?`${e} = ${i(t)}`:`${i(t)}`;var a}function d({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},i(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},i(n))),t.push(" ");return t}function p({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(o.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function f({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,i(a)))}function h({defaultValue:e,enumValues:t,examples:a,name:r,path:s,relevantWhen:o}){const[c,i]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(p,{name:r,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(d,{values:t})):null,o?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(f,{value:o})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>i(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:o,name:c,path:i,relevantWhen:u,templateable:m,type:d,unit:p,required:b}){const[f,v]=Object(n.useState)(!1);let g=e;return f&&(g=g.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},d),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&l.a.createElement("span",{className:"badge badge--secondary"},p),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),g,!f&&l.a.createElement(h,{defaultValue:a,enumValues:r,examples:o,name:c,path:i,relevantWhen:u}))}},236:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),s=a(250),o=a(227),c=a.n(o),i=a(251),u=a.n(i);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:o}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:c()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>o(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:o,select:c,style:i,values:p,urlKey:b}=e,[f,h]=Object(l.useState)(o);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=u.a.parse(window.location.search);e[b]&&h(e[b])}},[]),r.a.createElement("div",null,p.length>1&&(c?r.a.createElement(d,Object(n.a)({selectedValue:f,setSelectedValue:h},e)):r.a.createElement(m,Object(n.a)({selectedValue:f,setSelectedValue:h},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===f)[0]))}},237:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);