(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return j}));var n=a(1),l=a(6),i=(a(0),a(242)),r=a(247),s=a(248),c=a(244),u=a(245),o=a(246),b=a(254),m=a.n(b),d={delivery_guarantee:"at_least_once",description:"The Vector `http` sink batches `log` events to a generic HTTP endpoint.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+http%22",operating_systems:["linux","macos","windows"],sidebar_label:'http|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/http.rs",status:"prod-ready",title:"HTTP Sink",unsupported_operating_systems:[]},h={id:"reference/sinks/http",title:"HTTP Sink",description:"The Vector `http` sink batches `log` events to a generic HTTP endpoint.",source:"@site/docs/reference/sinks/http.md",permalink:"/docs/reference/sinks/http",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/http.md",sidebar_label:'http|["log"]',sidebar:"docs",previous:{title:"GCP PubSub Sink",permalink:"/docs/reference/sinks/gcp_pubsub"},next:{title:"Kafka Sink",permalink:"/docs/reference/sinks/kafka"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"auth",id:"auth",children:[]},{value:"batch",id:"batch",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"headers",id:"headers",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"healthcheck_uri",id:"healthcheck_uri",children:[]},{value:"request",id:"request",children:[]},{value:"tls",id:"tls",children:[]},{value:"uri",id:"uri",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Buffers & Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]}]}],f={rightToc:p},O="wrapper";function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"http")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to a generic HTTP endpoint."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"common",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  type = "http" # must be: "http"\n  inputs = ["my-source-id"] # example\n  uri = "https://10.22.212.22:9000/endpoint" # example\n'))),Object(i.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "http" # must be: "http"\n  inputs = ["my-source-id"] # example\n  uri = "https://10.22.212.22:9000/endpoint" # example\n\n  # OPTIONAL - General\n  healthcheck = true # default\n  healthcheck_uri = "https://10.22.212.22:9000/_health" # example, no default\n\n  # OPTIONAL - requests\n  encoding = "ndjson" # example, no default, enum\n\n  # OPTIONAL - Auth\n  [sinks.my_sink_id.auth]\n    strategy = "basic" # must be: "basic"\n    password = "${PASSWORD_ENV_VAR}" # example, relevant when strategy = "basic"\n    user = "${USERNAME_ENV_VAR}" # example, relevant when strategy = "basic"\n\n  # OPTIONAL - Batch\n  [sinks.my_sink_id.batch]\n    max_size = 1049000 # default, bytes\n    timeout_secs = 1 # default, seconds\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_events = 500 # default, events, relevant when type = "memory"\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    when_full = "block" # default, enum\n\n  # OPTIONAL - Headers\n  [sinks.my_sink_id.headers]\n    Authorization = "${TOKEN_ENV_VAR}" # example\n    X-Powered-By = "Vector" # example\n\n  # OPTIONAL - Request\n  [sinks.my_sink_id.request]\n    in_flight_limit = 10 # default\n    rate_limit_duration_secs = 1 # default, seconds\n    rate_limit_num = 10 # default\n    retry_attempts = 10 # default\n    retry_initial_backoff_secs = 1 # default, seconds\n    retry_max_duration_secs = 10 # default, seconds\n    timeout_secs = 30 # default, seconds\n\n  # OPTIONAL - Tls\n  [sinks.my_sink_id.tls]\n    ca_path = "/path/to/certificate_authority.crt" # example, no default\n    crt_path = "/path/to/host_certificate.crt" # example, no default\n    key_pass = "PassWord1" # example, no default\n    key_path = "/path/to/host_certificate.key" # example, no default\n    verify_certificate = true # default\n    verify_hostname = true # default\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(u.a,{filters:!0,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"auth",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"auth"},"auth"),Object(i.b)("p",null,"Options for the authentication strategy."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["${PASSWORD_ENV_VAR}","password"],name:"password",path:"auth",relevantWhen:{strategy:"basic"},required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"password"},"password"),Object(i.b)("p",null,"The basic authentication password.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{basic:"The [basic authentication strategy][urls.basic_auth]."},examples:["basic"],name:"strategy",path:"auth",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"strategy"},"strategy"),Object(i.b)("p",null,"The authentication strategy to use.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["${USERNAME_ENV_VAR}","username"],name:"user",path:"auth",relevantWhen:{strategy:"basic"},required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"user"},"user"),Object(i.b)("p",null,"The basic authentication user name.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:1049e3,enumValues:null,examples:[1049e3],name:"max_size",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink buffer behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum number of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size-1"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type / location. ",Object(i.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(i.b)(o.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:{ndjson:"Each event is encoded into JSON and the payload is new line delimited.",json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["ndjson","json","text"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"headers",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"headers"},"headers"),Object(i.b)("p",null,"Options for custom headers. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication"}),"Authentication")," for more info."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{Authorization:"${TOKEN_ENV_VAR}"},{"X-Powered-By":"Vector"}],name:"`[header-key]`",path:"headers",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"header-key"},Object(i.b)("inlineCode",{parentName:"h4"},"[header-key]")),Object(i.b)("p",null,"A custom header to be added to each outgoing HTTP request.")))),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["https://10.22.212.22:9000/_health"],name:"healthcheck_uri",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck_uri"},"healthcheck_uri"),Object(i.b)("p",null,"A URI that Vector can request in order to determine the service health. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The window used for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," window. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed request. Once, the first retry has failed the fibonacci sequence will be used to select future backoffs.")),Object(i.b)(o.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time to wait between retries.")),Object(i.b)(o.a,{common:!1,defaultValue:30,enumValues:null,examples:[30],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"tls"},"tls"),Object(i.b)("p",null,"Configures the TLS options for connections from this sink."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],name:"ca_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"ca_path"},"ca_path"),Object(i.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format (X.509).")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],name:"crt_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"crt_path"},"crt_path"),Object(i.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or PEM format (X.509) or PKCS#12. If this is set and is not a PKCS#12 archive, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_path"}),Object(i.b)("inlineCode",{parentName:"a"},"key_path"))," must also be set.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["PassWord1"],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"key_pass"},"key_pass"),Object(i.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_pass"}),Object(i.b)("inlineCode",{parentName:"a"},"key_pass"))," above is set.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],name:"key_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"key_path"},"key_path"),Object(i.b)("p",null,"Absolute path to a certificate key file used to identify this connection, in DER or PEM format (PKCS#8). If this is set, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#crt_path"}),Object(i.b)("inlineCode",{parentName:"a"},"crt_path"))," must also be set.")),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"verify_certificate",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"verify_certificate"},"verify_certificate"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the TLS certificate of the remote host. Do NOT set this to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," unless you understand the risks of not verifying the remote certificate.")),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"verify_hostname",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"verify_hostname"},"verify_hostname"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the configured remote host name against the remote host's TLS certificate. Do NOT set this to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," unless you understand the risks of not verifying the remote hostname.")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["https://10.22.212.22:9000/endpoint"],name:"uri",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"uri"},"uri"),Object(i.b)("p",null,"The full URI to make HTTP requests to. This should include the protocol and host, but can also include the port, path, and any other valid part of a URI."))),Object(i.b)("h2",{id:"output"},"Output"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"http")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to a generic HTTP endpoint.\nBatches are flushed via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_size"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_size"))," or\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_timeout"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_timeout"))," options. You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"buffers &\nbatches")," section.\nFor example:"),Object(i.b)(r.a,{block:!0,defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"NDJSON",value:"ndjson"},{label:"Text",value:"text"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"POST <uri> HTTP/1.1\nHost: <uri.host>\nContent-Type: application/x-ndjson\nContent-Length: <byte_size>\n\n[\n  <json_encoded_log>,\n  <json_encoded_log>,\n  <json_encoded_log>,\n]\n"))),Object(i.b)(s.a,{value:"ndjson",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"POST <uri> HTTP/1.1\nHost: <uri.host>\nContent-Type: application/x-ndjson\nContent-Length: <byte_size>\n\n<json_encoded_log>\n<json_encoded_log>\n<json_encoded_log>\n"))),Object(i.b)(s.a,{value:"text",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"POST <uri> HTTP/1.1\nHost: <uri.host>\nContent-Type: text/plain\nContent-Length: <byte_size>\n\n<log.message>\n<log.message>\n<log.message>\n")))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"HTTP authentication is controlled via the ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," header which you can\nset with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#headers"}),Object(i.b)("inlineCode",{parentName:"a"},"headers"))," option. For convenience, Vector also supports the\n",Object(i.b)("inlineCode",{parentName:"p"},"basic_auth.username")," and ",Object(i.b)("inlineCode",{parentName:"p"},"basic_auth.password")," options which handle setting the\n",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," header for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Basic_access_authentication"}),"base access authentication\nscheme"),"."),Object(i.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(i.b)(m.a,{src:"/img/buffers-and-batches-serial.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"http")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#timeout_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"timeout_secs")),"."),Object(i.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#max_size"}),Object(i.b)("inlineCode",{parentName:"a"},"max_size")),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIn order to run this check you must provide a value for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#healthcheck_uri"}),Object(i.b)("inlineCode",{parentName:"a"},"healthcheck_uri")),"\noption.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+http"}),"opening an issie"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."))}j.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[r,s]=Object(n.useState)(!1),[c,u]=Object(n.useState)(null);let o=Array.isArray(e)?e:[e],b=o.some(e=>e.props.common),m=o.some(e=>e.props.required),d=o;return a&&(d=d.filter(e=>e.props.common)),r&&(d=d.filter(e=>e.props.required)),c&&(d=d.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},o.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},b&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),m&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),r=a.n(i),s=(a(242),a(244)),c=a(251);function u(e){return JSON.stringify(e)}function o(e){return e.includes(".")?'"'+e+'"':e}function b(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${o(t.name)} = ${u(t.value)}`:`${o(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${e} = ${u(t)}`:`${u(t)}`;var a}function m({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},u(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},u(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,b(null,a))}function h({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=b(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function p({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,u(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:r,relevantWhen:s}){const[c,u]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(p,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(h,{name:i,path:r,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:s,name:c,path:u,relevantWhen:o,templateable:b,type:m,unit:d,required:h}){const[p,O]=Object(n.useState)(!1);let j=e;return p&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",h?"field-required":"",p?"field-collapsed":""),required:h},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),b&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},m),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),h?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!p&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:s,name:c,path:u,relevantWhen:o}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),r=a(252),s=a(241),c=a.n(s),u=a(253),o=a.n(u);function b({block:e,centered:t,className:a,style:n,values:l,selectedValue:r,setSelectedValue:s}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:c()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>s(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:r,defaultValue:s,select:c,style:u,values:d,urlKey:h}=e,[p,f]=Object(l.useState)(s);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&h){let e=o.a.parse(window.location.search);e[h]&&f(e[h])}},[]),i.a.createElement("div",null,d.length>1&&(c?i.a.createElement(m,Object(n.a)({selectedValue:p,setSelectedValue:f},e)):i.a.createElement(b,Object(n.a)({selectedValue:p,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===p)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);