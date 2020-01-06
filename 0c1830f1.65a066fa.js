(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),l=n(6),r=(n(0),n(254)),c=n(256),o=n(261),s=n(262),u={delivery_guarantee:"at_least_once",description:"The Vector `splunk_hec` source ingests data through the Splunk HTTP Event Collector protocol and outputs `log` events.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+splunk_hec%22",operating_systems:["linux","macos","windows"],sidebar_label:'splunk_hec|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/splunk_hec.rs",status:"beta",title:"Splunk HEC Source",unsupported_operating_systems:[]},i={id:"reference/sources/splunk_hec",title:"Splunk HEC Source",description:"The Vector `splunk_hec` source ingests data through the Splunk HTTP Event Collector protocol and outputs `log` events.",source:"@site/docs/reference/sources/splunk_hec.md",permalink:"/docs/reference/sources/splunk_hec",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sources/splunk_hec.md",sidebar_label:'splunk_hec|["log"]',sidebar:"docs",previous:{title:"Socket Source",permalink:"/docs/reference/sources/socket"},next:{title:"Statsd Source",permalink:"/docs/reference/sources/statsd"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"address",id:"address",children:[]},{value:"token",id:"token",children:[]}]},{value:"Output",id:"output",children:[{value:"message",id:"message",children:[]},{value:"splunk_channel",id:"splunk_channel",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],m={rightToc:p},d="wrapper";function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"splunk_hec")," source ingests data through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints"}),"Splunk HTTP Event Collector protocol")," and outputs ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "splunk_hec" # must be: "splunk_hec"\n\n  # OPTIONAL\n  address = "0.0.0.0:8088" # default\n  token = "A94A8FE5CCB19BA61C4C08" # example, no default\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(o.a,{filters:!0,mdxType:"Fields"},Object(r.b)(s.a,{common:!0,defaultValue:"0.0.0.0:8088",enumValues:null,examples:["0.0.0.0:8088"],name:"address",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"address"},"address"),Object(r.b)("p",null,"The address to accept connections on.")),Object(r.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["A94A8FE5CCB19BA61C4C08"],name:"token",nullable:!0,path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"token"},"token"),Object(r.b)("p",null,"If supplied, incoming requests must supply this token in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header, just as a client would if it was communicating with the Splunk HEC endpoint directly. If ",Object(r.b)("em",{parentName:"p"},"not")," supplied, the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header will be ignored and requests will not be authenticated."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"splunk_hec")," source ingests data through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints"}),"Splunk HTTP Event Collector protocol")," and outputs ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events.\nFor example:"),Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Hello world\n")),Object(r.b)("p",null,"A log event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": <2019-07-26T20:30:27.000443Z>, // time event was received,\n  "host": "my.host.com", // value of the `Host` header\n  "splunk_channel": "FE0ECFAD-13D5-401B-847D-77833BD77131" // value of the `X-Splunk-Request-Channel` header\n\n}\n')),Object(r.b)("p",null,"More detail on the output schema is below."),Object(r.b)(o.a,{filters:!0,mdxType:"Fields"},Object(r.b)(s.a,{defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],name:"message",path:null,required:!0,type:"string",mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The raw log message, unaltered.")),Object(r.b)(s.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"splunk_channel",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(r.b)("h3",{id:"splunk_channel"},"splunk_channel"),Object(r.b)("p",null,"The Splunk channel, value of the ",Object(r.b)("inlineCode",{parentName:"p"},"X-Splunk-Request-Channel")," header.")),Object(r.b)(s.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"timestamp",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"If the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fevent"}),"Splunk HEC event endpoint")," is used then the value of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#time"}),Object(r.b)("inlineCode",{parentName:"a"},"time"))," field will be used. If the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fraw"}),"Splunk HEC raw endpoint")," is used, then the current time the event was received will be used."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),i=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=i(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?l.a.createElement(b,o({ref:t},u,{components:n})):l.a.createElement(b,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<r;u++)c[u]=n[u];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(85);t.a=function({fileName:e,links:t}){let n=[];for(var a in t)n.push(l.a.createElement("a",{href:a.href},a.text||"Learn more&hellip;"));return l.a.createElement("div",{className:"code-header"},n.length>0&&l.a.createElement("span",{className:"code-header--links"},n),e)}},258:function(e,t,n){"use strict";(function(e){var a=n(1),l=n(0),r=n.n(l),c=n(275),o=n(267),s=n.n(o),u=n(265),i=n(253),p=n.n(i),m=n(274),d=n.n(m),b=n(268),h=n.n(b),f=n(255),v=n(86),g=n.n(v),O=n(263);(void 0!==e?e:window).Prism=u.a,n(269),n(270),n(271),n(272),n(273);const j=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(f.a)(),[u,i]=Object(l.useState)(!1),m=Object(l.useRef)(null),b=Object(l.useRef)(null),[v]=Object(O.a)();let y=[];if(n&&j.test(n)){const e=n.match(j)[1];y=h.a.parse(e).filter(e=>e>0)}Object(l.useEffect)(()=>{let e;return b.current&&(e=new s.a(b.current,{target:()=>m.current})),()=>{e&&e.destroy()}},[b.current,m.current]);let E=t&&t.replace(/language-/,"");!E&&o.defaultLanguage&&(E=o.defaultLanguage);const k=()=>{window.getSelection().empty(),i(!0),setTimeout(()=>i(!1),2e3)};let N="dark"==v?o.darkTheme:o.theme;return r.a.createElement(c.a,Object(a.a)({},c.b,{theme:N||d.a,code:e.trim(),language:E}),({className:e,style:t,tokens:n,getLineProps:l,getTokenProps:c})=>r.a.createElement("div",{className:g.a.codeBlockWrapper},r.a.createElement("pre",{ref:m,className:p()(e,g.a.codeBlock),style:t},n.map((e,t)=>{const n=l({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map((e,t)=>r.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))))})),r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:g.a.copyButton,onClick:k},u?"Copied":"Copy")))}}).call(this,n(48))},261:function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(87);t.a=function({children:e,filters:t}){const[n,r]=Object(a.useState)(!1),[c,o]=Object(a.useState)(!1),[s,u]=Object(a.useState)(null);let i=Array.isArray(e)?e:[e],p=i.some(e=>e.props.common),m=i.some(e=>e.props.required),d=i;return n&&(d=d.filter(e=>e.props.common)),c&&(d=d.filter(e=>e.props.required)),s&&(d=d.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),l.a.createElement("div",{className:"fields"},i.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},p&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:n}),"common only"),m&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:c}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},262:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),r=n(253),c=n.n(r),o=(n(254),n(256)),s=n(258);function u(e){return JSON.stringify(e)}function i(e){return e.includes(".")?'"'+e+'"':e}function p(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?`${i(t.name)} = ${u(t.value)}`:`${i(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${e} = ${u(t)}`:`${u(t)}`;var n}function m({values:e}){let t=[];if(Array.isArray(e))for(var n in e){let a=e[n];t.push(l.a.createElement("code",{key:a},u(a))),t.push(" ")}else for(var a in e)t.push(l.a.createElement("code",{key:a,title:e[a]},u(a))),t.push(" ");return t}function d({name:e,path:t,value:n}){return l.a.createElement("code",null,p(null,n))}function b({name:e,path:t,values:n}){let a="";return n.forEach((function(t){a+=p(e,t)+"\n"})),t&&(a=`[${t}]\n${a}`),l.a.createElement("div",null,l.a.createElement(o.a,{fileName:"vector.toml"}),l.a.createElement(s.a,{className:"language-toml"},a))}function h({value:e}){let t=Object.keys(e)[0],n=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,u(n)))}function f({defaultValue:e,enumValues:t,examples:n,name:r,path:c,relevantWhen:o}){const[s,u]=Object(a.useState)(!1);return e||t||n&&n.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:r,path:c,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})):null,o?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:o})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!s)},s?"Hide examples":"View examples"),s&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:c,values:n})))):null}t.a=function({children:e,common:t,defaultValue:n,enumValues:r,examples:o,name:s,path:u,relevantWhen:i,templateable:p,type:m,unit:d,required:b}){const[h,v]=Object(a.useState)(!1);let g=e;return h&&(g=g.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:c()("field","section",b?"field-required":"",h?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),p&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},m),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),g,!h&&l.a.createElement(f,{defaultValue:n,enumValues:r,examples:o,name:s,path:u,relevantWhen:i}))}}}]);