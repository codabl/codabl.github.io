(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return j}));var n=a(1),l=a(6),i=(a(0),a(242)),r=a(247),s=a(248),c=a(244),o=a(245),u=a(246),m=a(254),b=a.n(m),d={delivery_guarantee:"at_least_once",description:"The Vector `aws_s3` sink batches `log` events to Amazon Web Service's S3 service via the `PutObject` API endpoint.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+aws_s3%22",operating_systems:["linux","macos","windows"],sidebar_label:'aws_s3|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/aws_s3.rs",status:"beta",title:"AWS S3 Sink",unsupported_operating_systems:[]},p={id:"reference/sinks/aws_s3",title:"AWS S3 Sink",description:"The Vector `aws_s3` sink batches `log` events to Amazon Web Service's S3 service via the `PutObject` API endpoint.",source:"@site/docs/reference/sinks/aws_s3.md",permalink:"/docs/reference/sinks/aws_s3",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/aws_s3.md",sidebar_label:'aws_s3|["log"]',sidebar:"docs",previous:{title:"AWS Kinesis Data Streams Sink",permalink:"/docs/reference/sinks/aws_kinesis_streams"},next:{title:"Blockhole Sink",permalink:"/docs/reference/sinks/blackhole"}},h=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"batch",id:"batch",children:[]},{value:"bucket",id:"bucket",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"compression",id:"compression",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"endpoint",id:"endpoint",children:[]},{value:"filename_append_uuid",id:"filename_append_uuid",children:[]},{value:"filename_extension",id:"filename_extension",children:[]},{value:"filename_time_format",id:"filename_time_format",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"key_prefix",id:"key_prefix",children:[]},{value:"region",id:"region",children:[]},{value:"request",id:"request",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers & Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Object Naming",id:"object-naming",children:[]},{value:"Partitioning",id:"partitioning",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]},{value:"Template Syntax",id:"template-syntax",children:[]}]}],f={rightToc:h},O="wrapper";function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"aws_s3")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"Amazon Web Service's S3 service")," via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUT.html"}),Object(i.b)("inlineCode",{parentName:"a"},"PutObject")," API endpoint"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"common",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "aws_s3" # must be: "aws_s3"\n  inputs = ["my-source-id"] # example\n  bucket = "my-bucket" # example\n  compression = "gzip" # example, enum\n\n  # OPTIONAL - Object Names\n  filename_append_uuid = true # default\n  filename_extension = "log" # default\n  filename_time_format = "%s" # default\n  key_prefix = "date=%F/" # default\n\n  # OPTIONAL - General\n  region = "us-east-1" # example, no default\n'))),Object(i.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "aws_s3" # must be: "aws_s3"\n  inputs = ["my-source-id"] # example\n  bucket = "my-bucket" # example\n  compression = "gzip" # example, enum\n\n  # OPTIONAL - Object Names\n  filename_append_uuid = true # default\n  filename_extension = "log" # default\n  filename_time_format = "%s" # default\n  key_prefix = "date=%F/" # default\n\n  # OPTIONAL - General\n  endpoint = "https://s3.us-east-1.amazonaws.com" # example, no default\n  healthcheck = true # default\n  region = "us-east-1" # example, no default\n\n  # OPTIONAL - requests\n  encoding = "ndjson" # example, no default, enum\n\n  # OPTIONAL - Batch\n  [sinks.my_sink_id.batch]\n    max_size = 10490000 # default, bytes\n    timeout_secs = 300 # default, seconds\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_events = 500 # default, events, relevant when type = "memory"\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    when_full = "block" # default, enum\n\n  # OPTIONAL - Request\n  [sinks.my_sink_id.request]\n    in_flight_limit = 5 # default\n    rate_limit_duration_secs = 1 # default, seconds\n    rate_limit_num = 5 # default\n    retry_attempts = 5 # default\n    retry_initial_backoff_secs = 1 # default, seconds\n    retry_max_duration_secs = 10 # default, seconds\n    timeout_secs = 30 # default, seconds\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(o.a,{filters:!0,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:1049e4,enumValues:null,examples:[1049e4],name:"max_size",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:300,enumValues:null,examples:[300],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["my-bucket"],name:"bucket",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"bucket"},"bucket"),Object(i.b)("p",null,"The S3 bucket name. Do not include a leading ",Object(i.b)("inlineCode",{parentName:"p"},"s3://")," or a trailing ",Object(i.b)("inlineCode",{parentName:"p"},"/"),".")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink buffer behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum number of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size-1"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type / location. ",Object(i.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(i.b)(u.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:{gzip:"GZIP compression",none:"No compression"},examples:["gzip","none"],name:"compression",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"compression"},"compression"),Object(i.b)("p",null,"The compression mechanism to use.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:{ndjson:"Each event is encoded into JSON and the payload is new line delimited.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["ndjson","text"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:["https://s3.us-east-1.amazonaws.com"],name:"endpoint",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"endpoint"},"endpoint"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_endpoint"}),"endpoint"),' of the target S3 bucket. Either "endpoint" or "region" must be specified.')),Object(i.b)(u.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"filename_append_uuid",path:null,relevantWhen:null,required:!0,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"filename_append_uuid"},"filename_append_uuid"),Object(i.b)("p",null,"Whether or not to append a UUID v4 token to the end of the file. This ensures there are no name collisions high volume use cases. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#object-naming"}),"Object Naming")," for more info.")),Object(i.b)(u.a,{common:!0,defaultValue:"log",enumValues:null,examples:["log"],name:"filename_extension",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"filename_extension"},"filename_extension"),Object(i.b)("p",null,"The extension to use in the object name.")),Object(i.b)(u.a,{common:!0,defaultValue:"%s",enumValues:null,examples:["%s"],name:"filename_time_format",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"filename_time_format"},"filename_time_format"),Object(i.b)("p",null,"The format of the resulting object file name. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),Object(i.b)("inlineCode",{parentName:"a"},"strftime")," specifiers")," are supported. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#object-naming"}),"Object Naming")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(u.a,{common:!0,defaultValue:"date=%F/",enumValues:null,examples:["date=%F/","date=%F/hour=%H/","year=%Y/month=%m/day=%d/","application_id={{ application_id }}/date=%F/"],name:"key_prefix",path:null,relevantWhen:null,required:!1,templateable:!0,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"key_prefix"},"key_prefix"),Object(i.b)("p",null,"A prefix to apply to all object key names. This should be used to partition your objects, and it's important to end this value with a ",Object(i.b)("inlineCode",{parentName:"p"},"/"),' if you want this to be the root S3 "folder". See ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#object-naming"}),"Object Naming"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#partitioning"}),"Partitioning"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#template-syntax"}),"Template Syntax")," for more info.")),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["us-east-1"],name:"region",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"region"},"region"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region"}),"AWS region"),' of the target S3 bucket. Either "region" or "endpoint" must be specified.')),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The window used for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," window. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed request. Once, the first retry has failed the fibonacci sequence will be used to select future backoffs.")),Object(i.b)(u.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time to wait between retries.")),Object(i.b)(u.a,{common:!1,defaultValue:30,enumValues:null,examples:[30],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info."))))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(i.b)(b.a,{src:"/img/buffers-and-batches-partitioned.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aws_s3")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#timeout_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"timeout_secs")),"."),Object(i.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#max_size"}),Object(i.b)("inlineCode",{parentName:"a"},"max_size")),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"object-naming"},"Object Naming"),Object(i.b)("p",null,"By default, Vector will name your S3 objects in the following format:"),Object(i.b)(r.a,{block:!0,defaultValue:"without_compression",values:[{label:"Without Compression",value:"without_compression"},{label:"With Compression",value:"with_compression"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"without_compression",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"<key_prefix><timestamp>-<uuidv4>.log\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"date=2019-06-18/1560886634-fddd7a0e-fad9-4f7e-9bce-00ae5debc563.log\n"))),Object(i.b)(s.a,{value:"with_compression",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"<key_prefix><timestamp>-<uuidv4>.log.gz\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"date=2019-06-18/1560886634-fddd7a0e-fad9-4f7e-9bce-00ae5debc563.log.gz\n")))),Object(i.b)("p",null,"Vector appends a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)"}),"UUIDV4")," token to ensure there are no name\nconflicts in the unlikely event 2 Vector instances are writing data at the same\ntime."),Object(i.b)("p",null,"You can control the resulting name via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_prefix"}),Object(i.b)("inlineCode",{parentName:"a"},"key_prefix")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#filename_time_format"}),Object(i.b)("inlineCode",{parentName:"a"},"filename_time_format")),",\nand ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#filename_append_uuid"}),Object(i.b)("inlineCode",{parentName:"a"},"filename_append_uuid"))," options."),Object(i.b)("h3",{id:"partitioning"},"Partitioning"),Object(i.b)("p",null,"Partitioning is controlled via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_prefix"}),Object(i.b)("inlineCode",{parentName:"a"},"key_prefix")),"\noptions and allows you to dynamically partition data on the fly.\nYou'll notice that Vector's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#template-syntax"}),"template sytax")," is supported\nfor these options, enabling you to use field values as the partition's key."),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+aws_s3"}),"opening an issie"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."),Object(i.b)("h3",{id:"template-syntax"},"Template Syntax"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_prefix"}),Object(i.b)("inlineCode",{parentName:"a"},"key_prefix"))," options\nsupport ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"Vector's template syntax"),",\nenabling dynamic values derived from the event's data. This syntax accepts\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),"strptime specifiers")," as well as the\n",Object(i.b)("inlineCode",{parentName:"p"},"{{ field_name }}")," syntax for accessing event fields. For example:"),Object(i.b)(c.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_aws_s3_sink_id]\n  # ...\n  key_prefix = "date=%F/"\n  key_prefix = "date=%F/hour=%H/"\n  key_prefix = "year=%Y/month=%m/day=%d/"\n  key_prefix = "application_id={{ application_id }}/date=%F/"\n  # ...\n')),Object(i.b)("p",null,"You can read more about the complete syntax in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"template syntax section"),"."))}j.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[r,s]=Object(n.useState)(!1),[c,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),b=u.some(e=>e.props.required),d=u;return a&&(d=d.filter(e=>e.props.common)),r&&(d=d.filter(e=>e.props.required)),c&&(d=d.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),b&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),r=a.n(i),s=(a(242),a(244)),c=a(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function b({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:r,relevantWhen:s}){const[c,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(b,{values:t})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:i,path:r,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:s,name:c,path:o,relevantWhen:u,templateable:m,type:b,unit:d,required:p}){const[h,O]=Object(n.useState)(!1);let j=e;return h&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},b),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!h&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:s,name:c,path:o,relevantWhen:u}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),r=a(252),s=a(241),c=a.n(s),o=a(253),u=a.n(o);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:r,setSelectedValue:s}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:c()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>s(e)},t))))}function b({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:r,defaultValue:s,select:c,style:o,values:d,urlKey:p}=e,[h,f]=Object(l.useState)(s);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=u.a.parse(window.location.search);e[p]&&f(e[p])}},[]),i.a.createElement("div",null,d.length>1&&(c?i.a.createElement(b,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):i.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);