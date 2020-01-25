(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return f}));var n=a(1),l=a(6),i=(a(0),a(242)),r=a(247),c=a(248),s=a(244),o=a(245),u=a(246),m={delivery_guarantee:"best_effort",description:"The Vector `datadog_metrics` sink batches `metric` events to Datadog's metrics service using HTTP API.",event_types:["metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+datadog_metrics%22",operating_systems:["linux","macos","windows"],sidebar_label:'datadog_metrics|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/datadog_metrics.rs",status:"beta",title:"Datadog Metrics Sink",unsupported_operating_systems:[]},b={id:"reference/sinks/datadog_metrics",title:"Datadog Metrics Sink",description:"The Vector `datadog_metrics` sink batches `metric` events to Datadog's metrics service using HTTP API.",source:"@site/docs/reference/sinks/datadog_metrics.md",permalink:"/docs/reference/sinks/datadog_metrics",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/datadog_metrics.md",sidebar_label:'datadog_metrics|["metric"]',sidebar:"docs",previous:{title:"Console Sink",permalink:"/docs/reference/sinks/console"},next:{title:"Elasticsearch Sink",permalink:"/docs/reference/sinks/elasticsearch"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"api_key",id:"api_key",children:[]},{value:"batch",id:"batch",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"host",id:"host",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"request",id:"request",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Metric Types",id:"metric-types",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]}]}],p={rightToc:d},h="wrapper";function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"datadog_metrics")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(i.b)("inlineCode",{parentName:"a"},"metric"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog's")," metrics service using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.datadoghq.com/api/?lang=bash#metrics"}),"HTTP API"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"common",mdxType:"TabItem"},Object(i.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED\n  type = "datadog_metrics" # must be: "datadog_metrics"\n  inputs = ["my-source-id"] # example\n  api_key = "3111111111111111aaaaaaaaaaaaaaaa" # example\n  namespace = "service" # example\n\n  # OPTIONAL\n  host = "https://api.datadoghq.com" # default\n'))),Object(i.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "datadog_metrics" # must be: "datadog_metrics"\n  inputs = ["my-source-id"] # example\n  api_key = "3111111111111111aaaaaaaaaaaaaaaa" # example\n  namespace = "service" # example\n\n  # OPTIONAL - General\n  healthcheck = true # default\n  host = "https://api.datadoghq.com" # default\n\n  # OPTIONAL - Batch\n  [sinks.my_sink_id.batch]\n    max_events = 20 # default, bytes\n    timeout_secs = 1 # default, seconds\n\n  # OPTIONAL - Request\n  [sinks.my_sink_id.request]\n    in_flight_limit = 5 # default\n    rate_limit_duration_secs = 1 # default, seconds\n    rate_limit_num = 5 # default\n    retry_attempts = 5 # default\n    retry_initial_backoff_secs = 1 # default, seconds\n    retry_max_duration_secs = 10 # default, seconds\n    timeout_secs = 60 # default, seconds\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(o.a,{filters:!0,mdxType:"Fields"},Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["3111111111111111aaaaaaaaaaaaaaaa"],name:"api_key",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"api_key"},"api_key"),Object(i.b)("p",null,"Datadog ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.datadoghq.com/api/?lang=bash#authentication"}),"API key"))),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:20,enumValues:null,examples:[20],name:"max_events",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum size of a batch before it is flushed.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed.")))),Object(i.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(u.a,{common:!0,defaultValue:"https://api.datadoghq.com",enumValues:null,examples:["https://api.datadoghq.com","https://api.datadoghq.eu"],name:"host",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"Datadog endpoint to send metrics to.")),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["service"],name:"namespace",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"namespace"},"namespace"),Object(i.b)("p",null,"A prefix that will be added to all metric names.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The window used for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," window. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed request. Once, the first retry has failed the fibonacci sequence will be used to select future backoffs.")),Object(i.b)(u.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time to wait between retries.")),Object(i.b)(u.a,{common:!1,defaultValue:60,enumValues:null,examples:[60],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream."))))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"metric-types"},"Metric Types"),Object(i.b)("p",null,"Datadog accepts the following types for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.datadoghq.com/developers/metrics/#submission-types-and-datadog-in-app-types"}),"submission via API"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Count"),Object(i.b)("li",{parentName:"ul"},"Gauge"),Object(i.b)("li",{parentName:"ul"},"Rate")),Object(i.b)("p",null,"The following matrix outlines how Vector metric types are mapped into Datadog metrics types."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Vector Metrics"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Datadog Metrics"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Counter"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Count")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gauge"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gauge")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gauge Delta"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Histogram"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Count ","[1]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Aggregation of Histogram values is not supported at the moment. Histogram values will be sent as is, as raw Count values.")),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+datadog_metrics"}),"opening an issie"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."))}f.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[r,c]=Object(n.useState)(!1),[s,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),b=u.some(e=>e.props.required),d=u;return a&&(d=d.filter(e=>e.props.common)),r&&(d=d.filter(e=>e.props.required)),s&&(d=d.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),b&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),r=a.n(i),c=(a(242),a(244)),s=a(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function b({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(c.a,{fileName:"vector.toml"}),l.a.createElement(s.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:r,relevantWhen:c}){const[s,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(b,{values:t})):null,c?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:c})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!s)},s?"Hide examples":"View examples"),s&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:i,path:r,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:c,name:s,path:o,relevantWhen:u,templateable:m,type:b,unit:d,required:p}){const[h,O]=Object(n.useState)(!1);let j=e;return h&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},b),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!h&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:c,name:s,path:o,relevantWhen:u}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),r=a(252),c=a(241),s=a.n(c),o=a(253),u=a.n(o);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:r,setSelectedValue:c}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:s()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:s()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>c(e)},t))))}function b({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:r,defaultValue:c,select:s,style:o,values:d,urlKey:p}=e,[h,f]=Object(l.useState)(c);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=u.a.parse(window.location.search);e[p]&&f(e[p])}},[]),i.a.createElement("div",null,d.length>1&&(s?i.a.createElement(b,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):i.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);