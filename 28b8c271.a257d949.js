(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return _}));var n=a(1),l=a(6),r=(a(0),a(254)),i=a(259),s=a(260),c=a(256),o=a(261),u=a(262),m=a(276),b=a.n(m),d={delivery_guarantee:"at_least_once",description:"The Vector `aws_kinesis_firehose` sink batches `log` events to Amazon Web Service's Kinesis Data Firehose via the `PutRecordBatch` API endpoint.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+aws_kinesis_firehose%22",operating_systems:["linux","macos","windows"],sidebar_label:'aws_kinesis_firehose|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/aws_kinesis_firehose.rs",status:"beta",title:"AWS Kinesis Firehose Sink",unsupported_operating_systems:[]},p={id:"reference/sinks/aws_kinesis_firehose",title:"AWS Kinesis Firehose Sink",description:"The Vector `aws_kinesis_firehose` sink batches `log` events to Amazon Web Service's Kinesis Data Firehose via the `PutRecordBatch` API endpoint.",source:"@site/docs/reference/sinks/aws_kinesis_firehose.md",permalink:"/docs/reference/sinks/aws_kinesis_firehose",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sinks/aws_kinesis_firehose.md",sidebar_label:'aws_kinesis_firehose|["log"]',sidebar:"docs",previous:{title:"AWS Cloudwatch Metrics Sink",permalink:"/docs/reference/sinks/aws_cloudwatch_metrics"},next:{title:"AWS Kinesis Data Streams Sink",permalink:"/docs/reference/sinks/aws_kinesis_streams"}},h=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"batch_size",id:"batch_size",children:[]},{value:"batch_timeout",id:"batch_timeout",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"region",id:"region",children:[]},{value:"request_in_flight_limit",id:"request_in_flight_limit",children:[]},{value:"request_rate_limit_duration_secs",id:"request_rate_limit_duration_secs",children:[]},{value:"request_rate_limit_num",id:"request_rate_limit_num",children:[]},{value:"request_retry_attempts",id:"request_retry_attempts",children:[]},{value:"request_retry_backoff_secs",id:"request_retry_backoff_secs",children:[]},{value:"request_timeout_secs",id:"request_timeout_secs",children:[]},{value:"stream_name",id:"stream_name",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers & Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]}]}],f={rightToc:h},O="wrapper";function _(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/kinesis/data-firehose/"}),"Amazon Web Service's Kinesis Data Firehose")," via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html"}),Object(r.b)("inlineCode",{parentName:"a"},"PutRecordBatch")," API endpoint"),"."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(i.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"common",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "aws_kinesis_firehose" # must be: "aws_kinesis_firehose"\n  inputs = ["my-source-id"] # example\n  region = "us-east-1" # example\n  stream_name = "my-stream" # example\n\n  # REQUIRED - requests\n  encoding = "json" # example, enum\n'))),Object(r.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "aws_kinesis_firehose" # must be: "aws_kinesis_firehose"\n  inputs = ["my-source-id"] # example\n  region = "us-east-1" # example\n  stream_name = "my-stream" # example\n\n  # REQUIRED - requests\n  encoding = "json" # example, enum\n\n  # OPTIONAL - General\n  healthcheck = true # default\n\n  # OPTIONAL - Batching\n  batch_size = 1049000 # default, bytes\n  batch_timeout = 1 # default, seconds\n\n  # OPTIONAL - Requests\n  request_in_flight_limit = 5 # default\n  request_rate_limit_duration_secs = 1 # default, seconds\n  request_rate_limit_num = 5 # default\n  request_retry_attempts = 5 # default\n  request_retry_backoff_secs = 1 # default, seconds\n  request_timeout_secs = 30 # default, seconds\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    num_items = 500 # default, events, relevant when type = "memory"\n    when_full = "block" # default, enum\n')))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(o.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:1049e3,enumValues:null,examples:[1049e3],name:"batch_size",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(r.b)("h3",{id:"batch_size"},"batch_size"),Object(r.b)("p",null,"The maximum size of a batch before it is flushed. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"batch_timeout",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(r.b)("h3",{id:"batch_timeout"},"batch_timeout"),Object(r.b)("p",null,"The maximum age of a batch before it is flushed. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",nullable:!0,path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"buffer"},"buffer"),Object(r.b)("p",null,"Configures the sink specific buffer."),Object(r.b)(o.a,{filters:!1,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",nullable:!0,path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(r.b)("h4",{id:"max_size"},"max_size"),Object(r.b)("p",null,"The maximum size of the buffer on the disk.")),Object(r.b)(u.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"num_items",nullable:!0,path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(r.b)("h4",{id:"num_items"},"num_items"),Object(r.b)("p",null,"The maximum number of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer.")),Object(r.b)(u.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",nullable:!1,path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"type"},"type"),Object(r.b)("p",null,"The buffer's type / location. ",Object(r.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(r.b)(u.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",nullable:!1,path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"when_full"},"when_full"),Object(r.b)("p",null,"The behavior when the buffer becomes full.")))),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["json","text"],name:"encoding",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"encoding"},"encoding"),Object(r.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(r.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"healthcheck"},"healthcheck"),Object(r.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["us-east-1"],name:"region",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"region"},"region"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#cwl_region"}),"AWS region")," of the target Kinesis Firehose delivery stream resides.")),Object(r.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"request_in_flight_limit",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"request_in_flight_limit"},"request_in_flight_limit"),Object(r.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"request_rate_limit_duration_secs",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(r.b)("h3",{id:"request_rate_limit_duration_secs"},"request_rate_limit_duration_secs"),Object(r.b)("p",null,"The window used for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#request_rate_limit_num"}),Object(r.b)("inlineCode",{parentName:"a"},"request_rate_limit_num"))," option See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"request_rate_limit_num",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"request_rate_limit_num"},"request_rate_limit_num"),Object(r.b)("p",null,"The maximum number of requests allowed within the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#request_rate_limit_duration_secs"}),Object(r.b)("inlineCode",{parentName:"a"},"request_rate_limit_duration_secs"))," window. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"request_retry_attempts",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"request_retry_attempts"},"request_retry_attempts"),Object(r.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"request_retry_backoff_secs",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(r.b)("h3",{id:"request_retry_backoff_secs"},"request_retry_backoff_secs"),Object(r.b)("p",null,"The amount of time to wait before attempting a failed request again. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(r.b)(u.a,{common:!1,defaultValue:30,enumValues:null,examples:[30],name:"request_timeout_secs",nullable:!1,path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(r.b)("h3",{id:"request_timeout_secs"},"request_timeout_secs"),Object(r.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["my-stream"],name:"stream_name",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"stream_name"},"stream_name"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html"}),"stream name")," of the target Kinesis Firehose delivery stream."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/kinesis/data-firehose/"}),"Amazon Web Service's Kinesis Data Firehose")," via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html"}),Object(r.b)("inlineCode",{parentName:"a"},"PutRecordBatch")," API endpoint"),".\nBatches are flushed via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_size"}),Object(r.b)("inlineCode",{parentName:"a"},"batch_size"))," or\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_timeout"}),Object(r.b)("inlineCode",{parentName:"a"},"batch_timeout"))," options. You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"buffers &\nbatches")," section.\nFor example:"),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(r.b)(b.a,{src:"/img/buffers-and-batches-serial.svg",mdxType:"SVG"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#batch_timeout"}),Object(r.b)("inlineCode",{parentName:"a"},"batch_timeout"))," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"1 seconds"),")."),Object(r.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#batch_size"}),Object(r.b)("inlineCode",{parentName:"a"},"batch_size"))," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"1049000 bytes"),").")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#buffer"}),Object(r.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(r.b)("h3",{id:"health-checks"},"Health Checks"),Object(r.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(r.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(r.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(r.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(r.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(r.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(r.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(r.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#request_rate_limit_duration_secs"}),Object(r.b)("inlineCode",{parentName:"a"},"request_rate_limit_duration_secs"))," and\n",Object(r.b)("inlineCode",{parentName:"p"},"request_rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#request_in_flight_limit"}),Object(r.b)("inlineCode",{parentName:"a"},"request_in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(r.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+aws_kinesis_firehose"}),"opening an issie"),"."),Object(r.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(r.b)("p",null,"Vector will retry failed requests (status == ",Object(r.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(r.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(r.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(r.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#request_retry_attempts"}),Object(r.b)("inlineCode",{parentName:"a"},"request_retry_attempts"))," and\n",Object(r.b)("inlineCode",{parentName:"p"},"request_retry_backoff_secs")," options."))}_.isMDXComponent=!0},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},m=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,p=m["".concat(i,".").concat(b)]||m[b]||d[b]||r;return a?l.a.createElement(p,s({ref:t},o,{components:a})):l.a.createElement(p,s({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},256:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(l.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return l.a.createElement("div",{className:"code-header"},a.length>0&&l.a.createElement("span",{className:"code-header--links"},a),e)}},258:function(e,t,a){"use strict";(function(e){var n=a(1),l=a(0),r=a.n(l),i=a(275),s=a(267),c=a.n(s),o=a(265),u=a(253),m=a.n(u),b=a(274),d=a.n(b),p=a(268),h=a.n(p),f=a(255),O=a(86),_=a.n(O),j=a(263);(void 0!==e?e:window).Prism=o.a,a(269),a(270),a(271),a(272),a(273);const y=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:s={}}}}=Object(f.a)(),[o,u]=Object(l.useState)(!1),b=Object(l.useRef)(null),p=Object(l.useRef)(null),[O]=Object(j.a)();let v=[];if(a&&y.test(a)){const e=a.match(y)[1];v=h.a.parse(e).filter(e=>e>0)}Object(l.useEffect)(()=>{let e;return p.current&&(e=new c.a(p.current,{target:()=>b.current})),()=>{e&&e.destroy()}},[p.current,b.current]);let g=t&&t.replace(/language-/,"");!g&&s.defaultLanguage&&(g=s.defaultLanguage);const k=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};let w="dark"==O?s.darkTheme:s.theme;return r.a.createElement(i.a,Object(n.a)({},i.b,{theme:w||d.a,code:e.trim(),language:g}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:i})=>r.a.createElement("div",{className:_.a.codeBlockWrapper},r.a.createElement("pre",{ref:b,className:m()(e,_.a.codeBlock),style:t},a.map((e,t)=>{const a=l({line:e,key:t});return v.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>r.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))))})),r.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:_.a.copyButton,onClick:k},o?"Copied":"Copy")))}}).call(this,a(48))},259:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),i=a(266),s=a(253),c=a.n(s),o=a(277),u=a.n(o);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:i,setSelectedValue:s}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:c()("tab-item",{"tab-item--active":i===e}),key:e,onClick:()=>s(e)},t))))}function b({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(i.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:i,defaultValue:s,select:c,style:o,values:d,urlKey:p}=e,[h,f]=Object(l.useState)(s);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=u.a.parse(window.location.search);e[p]&&f(e[p])}},[]),r.a.createElement("div",null,d.length>1&&(c?r.a.createElement(b,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):r.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(i).filter(e=>e.props.value===h)[0]))}},260:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}},261:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(87);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[i,s]=Object(n.useState)(!1),[c,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),b=u.some(e=>e.props.required),d=u;return a&&(d=d.filter(e=>e.props.common)),i&&(d=d.filter(e=>e.props.required)),c&&(d=d.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),b&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:i}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},262:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(253),i=a.n(r),s=(a(254),a(256)),c=a(258);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function b({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:r,path:i,relevantWhen:s}){const[c,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:r,path:i,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(b,{values:t})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:r,path:i,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:s,name:c,path:o,relevantWhen:u,templateable:m,type:b,unit:d,required:p}){const[h,O]=Object(n.useState)(!1);let _=e;return h&&(_=_.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:i()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},b),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),_,!h&&l.a.createElement(f,{defaultValue:a,enumValues:r,examples:s,name:c,path:o,relevantWhen:u}))}}}]);