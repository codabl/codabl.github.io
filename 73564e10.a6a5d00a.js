(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return f}));var n=a(1),l=a(6),i=(a(0),a(242)),r=a(247),c=a(248),s=a(244),o=a(245),m=a(246),u={delivery_guarantee:"best_effort",description:"The Vector `file` sink streams `log` events to a file.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+file%22",operating_systems:["linux","macos","windows"],sidebar_label:'file|["log"]',source_url:"https://github.com/timberio/vector/blob/master/src/sinks/file/mod.rs",status:"prod-ready",title:"File Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/file",title:"File Sink",description:"The Vector `file` sink streams `log` events to a file.",source:"@site/docs/reference/sinks/file.md",permalink:"/docs/reference/sinks/file",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/file.md",sidebar_label:'file|["log"]',sidebar:"docs",previous:{title:"Elasticsearch Sink",permalink:"/docs/reference/sinks/elasticsearch"},next:{title:"GCP PubSub Sink",permalink:"/docs/reference/sinks/gcp_pubsub"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"idle_timeout_secs",id:"idle_timeout_secs",children:[]},{value:"path",id:"path",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Dynamic file and directory creation",id:"dynamic-file-and-directory-creation",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Streaming",id:"streaming",children:[]},{value:"Template Syntax",id:"template-syntax",children:[]}]}],b={rightToc:p},h="wrapper";function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"file")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to a file."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"common",mdxType:"TabItem"},Object(i.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  type = "file" # must be: "file"\n  inputs = ["my-source-id"] # example\n  path = "vector-%Y-%m-%d.log" # example\n'))),Object(i.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "file" # must be: "file"\n  inputs = ["my-source-id"] # example\n  path = "vector-%Y-%m-%d.log" # example\n\n  # OPTIONAL - General\n  healthcheck = true # default\n  idle_timeout_secs = "30" # default\n\n  # OPTIONAL - requests\n  encoding = "ndjson" # example, no default, enum\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(o.a,{filters:!0,mdxType:"Fields"},Object(i.b)(m.a,{common:!1,defaultValue:null,enumValues:{ndjson:"Each event is encoded into JSON and the payload is new line delimited.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["ndjson","text"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(i.b)(m.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start.")),Object(i.b)(m.a,{common:!1,defaultValue:"30",enumValues:null,examples:["30"],name:"idle_timeout_secs",path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"idle_timeout_secs"},"idle_timeout_secs"),Object(i.b)("p",null,"The amount of time a file can be idle  and stay open. After not receiving any events for this timeout, the file will be flushed and closed.")),Object(i.b)(m.a,{common:!0,defaultValue:null,enumValues:null,examples:["vector-%Y-%m-%d.log","application-{{ application_id }}-%Y-%m-%d.log"],name:"path",path:null,relevantWhen:null,required:!0,templateable:!0,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"path"},"path"),Object(i.b)("p",null,"File name to write events to. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#template-syntax"}),"Template Syntax")," for more info."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"dynamic-file-and-directory-creation"},"Dynamic file and directory creation"),Object(i.b)("p",null,"Vector will attempt to create the entire directory structure and the file when\nemitting events to the file sink. This requires that the Vector agent have\nthe correct permissions to create and write to files in the specified directories."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"streaming"},"Streaming"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"file")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."),Object(i.b)("h3",{id:"template-syntax"},"Template Syntax"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#path"}),Object(i.b)("inlineCode",{parentName:"a"},"path"))," options\nsupport ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"Vector's template syntax"),",\nenabling dynamic values derived from the event's data. This syntax accepts\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),"strptime specifiers")," as well as the\n",Object(i.b)("inlineCode",{parentName:"p"},"{{ field_name }}")," syntax for accessing event fields. For example:"),Object(i.b)(s.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_file_sink_id]\n  # ...\n  path = "vector-%Y-%m-%d.log"\n  path = "application-{{ application_id }}-%Y-%m-%d.log"\n  # ...\n')),Object(i.b)("p",null,"You can read more about the complete syntax in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"template syntax section"),"."))}f.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[r,c]=Object(n.useState)(!1),[s,o]=Object(n.useState)(null);let m=Array.isArray(e)?e:[e],u=m.some(e=>e.props.common),d=m.some(e=>e.props.required),p=m;return a&&(p=p.filter(e=>e.props.common)),r&&(p=p.filter(e=>e.props.required)),s&&(p=p.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),l.a.createElement("div",{className:"fields"},m.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},p.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},u&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),d&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),r=a.n(i),c=(a(242),a(244)),s=a(251);function o(e){return JSON.stringify(e)}function m(e){return e.includes(".")?'"'+e+'"':e}function u(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${m(t.name)} = ${o(t.value)}`:`${m(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function d({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function p({name:e,path:t,value:a}){return l.a.createElement("code",null,u(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=u(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(c.a,{fileName:"vector.toml"}),l.a.createElement(s.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:r,relevantWhen:c}){const[s,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(p,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(d,{values:t})):null,c?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:c})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!s)},s?"Hide examples":"View examples"),s&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:i,path:r,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:c,name:s,path:o,relevantWhen:m,templateable:u,type:d,unit:p,required:b}){const[h,v]=Object(n.useState)(!1);let y=e;return h&&(y=y.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",b?"field-required":"",h?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),u&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},d),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&l.a.createElement("span",{className:"badge badge--secondary"},p),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),y,!h&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:c,name:s,path:o,relevantWhen:m}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),r=a(252),c=a(241),s=a.n(c),o=a(253),m=a.n(o);function u({block:e,centered:t,className:a,style:n,values:l,selectedValue:r,setSelectedValue:c}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:s()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:s()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>c(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:r,defaultValue:c,select:s,style:o,values:p,urlKey:b}=e,[h,f]=Object(l.useState)(c);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=m.a.parse(window.location.search);e[b]&&f(e[b])}},[]),i.a.createElement("div",null,p.length>1&&(s?i.a.createElement(d,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):i.a.createElement(u,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);