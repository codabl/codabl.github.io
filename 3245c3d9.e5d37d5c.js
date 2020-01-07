/*! For license information please see 3245c3d9.e5d37d5c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24,7],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return v}));var r=n(1),a=n(6),o=(n(0),n(205)),i=n(270),s=n.n(i),l=n(224),c=n(257),u=n(225),d=n(226),p=n(208),m={title:"Log Event",description:"A detailed guide on Vector's internal log data model."},h={id:"about/features/log",title:"Log Event",description:"A detailed guide on Vector's internal log data model.",source:"@site/docs/about/features/log.md",permalink:"/docs/about/features/log",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/about/features/log.md"},f=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Schema",id:"schema",children:[{value:"<code>[key]</code>",id:"key",children:[]},{value:"host",id:"host",children:[]},{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"Components",id:"components",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Time Zones",id:"time-zones",children:[]},{value:"Timestamp Coercion",id:"timestamp-coercion",children:[]},{value:"Types",id:"types",children:[]}]}],g={rightToc:f},b="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{src:"/img/data-model-log.svg",mdxType:"SVG"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"log")," event is a structured represention of a point-in-time event. It contains\nan arbitrary set of fields (key/value pairs) that describe the event."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(l.a,{block:!0,defaultValue:"default",values:[{label:"Default Schema",value:"default"},{label:"Custom Fields",value:"custom"},{label:"Nested Fields",value:"nested"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"default",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "host": "my.host.com",\n  "message": "<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n}\n'))),Object(o.b)(c.a,{value:"custom",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "host": "my.host.com",\n  "message": "<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "custom_field": "custom_value" // custom keys are allowed\n}\n'))),Object(o.b)(c.a,{value:"nested",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "host": "my.host.com",\n  "message": "<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "parent.child": "child_value" // nested fields are delimited with a `.` char\n}\n')))),Object(o.b)("h2",{id:"schema"},"Schema"),Object(o.b)(u.a,{filters:!0,mdxType:"Fields"},Object(o.b)(d.a,{defaultValue:null,enumValues:null,examples:[{"my-key":"my-value"}],name:"`[key]`",path:null,required:!1,type:"*",mdxType:"Field"},Object(o.b)("h3",{id:"key"},Object(o.b)("inlineCode",{parentName:"h3"},"[key]")),Object(o.b)("p",null,"In addition to the defined fields, you are welcome to add your own fields.")),Object(o.b)(d.a,{defaultValue:null,enumValues:null,examples:["my.host.com"],name:"host",path:null,required:!1,type:"string",mdxType:"Field"},Object(o.b)("h3",{id:"host"},"host"),Object(o.b)("p",null,"Represents the originating host of the log. This is commonly used in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources")," but can be overridden via the ",Object(o.b)("inlineCode",{parentName:"p"},"host_field")," option for relevant sources.")),Object(o.b)(d.a,{defaultValue:null,enumValues:null,examples:["<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar"],name:"message",path:null,required:!0,type:"string",mdxType:"Field"},Object(o.b)("h3",{id:"message"},"message"),Object(o.b)("p",null,"Represents the log message. This is the key used when ingesting raw string data.")),Object(o.b)(d.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"timestamp",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(o.b)("h3",{id:"timestamp"},"timestamp"),Object(o.b)("p",null,"A normalized ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.4.0/chrono/struct.DateTime.html"}),"Rust DateTime struct")," in UTC. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#timestamp-coercion"}),"Timestamp Coercion")," for more info."))),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)(p.a,{to:"/components/?log=true",mdxType:"Jump"},"View all log compatible components"),Object(o.b)("h2",{id:"how-it-works"},"How It Works"),Object(o.b)("h3",{id:"time-zones"},"Time Zones"),Object(o.b)("p",null,"If Vector receives a timestamp that does not contain timezone information\nVector assumes the timestamp is in local time, and will convert the timestamp\nto UTC from the local time. It is important that the host system contain\ntime zone data files to properly determine the local time zone. This is\ntypically installed through the ",Object(o.b)("inlineCode",{parentName:"p"},"tzdata")," package. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/551"}),"issue 551"),"\nfor more info."),Object(o.b)("h3",{id:"timestamp-coercion"},"Timestamp Coercion"),Object(o.b)("p",null,"There are cases where Vector interacts with formats that do not have a formal\ntimestamp defintion, such as JSON. In these cases, Vector will ingest the\ntimestamp in it's primitive form (string or integer). You can then coerce the\nfield into a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#timestamp"}),Object(o.b)("inlineCode",{parentName:"a"},"timestamp"))," using the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/coercer/"}),Object(o.b)("inlineCode",{parentName:"a"},"coercer")," transform"),". If you are parsing this data\nout of a string, all Vector parser transforms include a ",Object(o.b)("inlineCode",{parentName:"p"},"types")," option,\nallowing you to extract and coerce in one step."),Object(o.b)("h3",{id:"types"},"Types"),Object(o.b)("h4",{id:"strings"},"Strings"),Object(o.b)("p",null,"Strings are UTF8 compatible and are only bounded by the available system\nmemory."),Object(o.b)("h4",{id:"ints"},"Ints"),Object(o.b)("p",null,"Integers are signed integers up to 64 bits."),Object(o.b)("h4",{id:"floats"},"Floats"),Object(o.b)("p",null,"Floats are signed floats up to 64 bits."),Object(o.b)("h4",{id:"booleans"},"Booleans"),Object(o.b)("p",null,"Booleans represent binary true/false values."),Object(o.b)("h4",{id:"timestamps"},"Timestamps"),Object(o.b)("p",null,"Timestamps are represented as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.4.0/chrono/struct.DateTime.html"}),Object(o.b)("inlineCode",{parentName:"a"},"DateTime")," Rust structs"),"\nstored as UTC."))}v.isMDXComponent=!0},207:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,l=t||n,c=s.test(l),u=Object(a.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let p;return Object(a.useEffect)(()=>(!d&&c&&window.docusaurus.prefetch(l),()=>{d&&p&&p.disconnect()}),[l,d,c]),l&&c?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(l),u.current=!0)},innerRef:e=>{d&&e&&c&&((e,t)=>{p=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),t())})}),p.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):o.a.createElement("a",Object(r.a)({},e,{href:l}))}},208:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(207),i=n(204),s=n.n(i);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:i,target:l,to:c}){let u=s()("jump-to",`jump-to--${i}`,t),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return l?a.a.createElement("a",{href:c,target:l,className:u},d):a.a.createElement(o.a,{to:c,className:u},d)}},211:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(91);t.a=function({fileName:e,links:t}){let n=[];for(var r in t)n.push(a.a.createElement("a",{href:r.href},r.text||"Learn more&hellip;"));return a.a.createElement("div",{className:"code-header"},n.length>0&&a.a.createElement("span",{className:"code-header--links"},n),e)}},212:function(e,t,n){"use strict";(function(e){var r=n(1),a=n(0),o=n.n(a),i=n(239),s=n(230),l=n.n(s),c=n(223),u=n(204),d=n.n(u),p=n(237),m=n.n(p),h=n(231),f=n.n(h),g=n(206),b=n(86),v=n.n(b),y=n(210);(void 0!==e?e:window).Prism=c.a,n(232),n(233),n(234),n(235),n(236);const k=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:s={}}}}=Object(g.a)(),[c,u]=Object(a.useState)(!1),p=Object(a.useRef)(null),h=Object(a.useRef)(null),[b]=Object(y.a)();let O=[];if(n&&k.test(n)){const e=n.match(k)[1];O=f.a.parse(e).filter(e=>e>0)}Object(a.useEffect)(()=>{let e;return h.current&&(e=new l.a(h.current,{target:()=>p.current})),()=>{e&&e.destroy()}},[h.current,p.current]);let E=t&&t.replace(/language-/,"");!E&&s.defaultLanguage&&(E=s.defaultLanguage);const x=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};let w="dark"==b?s.darkTheme:s.theme;return o.a.createElement(i.a,Object(r.a)({},i.b,{theme:w||m.a,code:e.trim(),language:E}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:i})=>o.a.createElement("div",{className:v.a.codeBlockWrapper},o.a.createElement("pre",{ref:p,className:d()(e,v.a.codeBlock),style:t},n.map((e,t)=>{const n=a({line:e,key:t});return O.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))))})),o.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:v.a.copyButton,onClick:x},c?"Copied":"Copy")))}}).call(this,n(48))},224:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(255),s=n(204),l=n.n(s),c=n(256),u=n.n(c);function d({block:e,centered:t,className:n,style:r,values:a,selectedValue:i,setSelectedValue:s}){return o.a.createElement("div",{className:t?"tabs--centered":""},o.a.createElement("ul",{className:l()("tabs",n,{"tabs--block":e}),style:r},a.map(({value:e,label:t})=>o.a.createElement("li",{className:l()("tab-item",{"tab-item--active":i===e}),key:e,onClick:()=>s(e)},t))))}function p({selectedValue:e,setSelectedValue:t,values:n}){return o.a.createElement(i.a,{className:"react-select-container",classNamePrefix:"react-select",options:n,isClearable:!1,placeholder:"Select a version...",value:n.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:n,children:i,defaultValue:s,select:l,style:c,values:m,urlKey:h}=e,[f,g]=Object(a.useState)(s);return Object(a.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&h){let e=u.a.parse(window.location.search);e[h]&&g(e[h])}},[]),o.a.createElement("div",null,m.length>1&&(l?o.a.createElement(p,Object(r.a)({selectedValue:f,setSelectedValue:g},e)):o.a.createElement(d,Object(r.a)({selectedValue:f,setSelectedValue:g},e))),o.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(i).filter(e=>e.props.value===f)[0]))}},225:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(92);t.a=function({children:e,filters:t}){const[n,o]=Object(r.useState)(!1),[i,s]=Object(r.useState)(!1),[l,c]=Object(r.useState)(null);let u=Array.isArray(e)?e:[e],d=u.some(e=>e.props.common),p=u.some(e=>e.props.required),m=u;return n&&(m=m.filter(e=>e.props.common)),i&&(m=m.filter(e=>e.props.required)),l&&(m=m.filter(e=>e.props.name.toLowerCase().includes(l.toLowerCase()))),a.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?a.a.createElement("div",{className:"filters"},a.a.createElement("span",{className:"result-count"},m.length," items"),a.a.createElement("div",{className:" search"},a.a.createElement("input",{type:"text",onChange:e=>c(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),a.a.createElement("div",{className:"checkboxes"},d&&a.a.createElement("label",{title:"Only show popular/common results"},a.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:n}),"common only"),p&&a.a.createElement("label",{title:"Only show required results"},a.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:i}),"required only"))):null,a.a.createElement("div",{className:"section-list"},!Array.isArray(m)||m.length>0?m:a.a.createElement("div",{className:"empty"},a.a.createElement("div",{className:"icon"},"\u2639"),a.a.createElement("div",null,"No fields found"))))}},226:function(e,t,n){"use strict";n(221);var r=n(0),a=n.n(r),o=n(204),i=n.n(o),s=(n(227),n(211)),l=n(212);function c(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function d(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${c(t.value)}`:`${u(Object.keys(t)[0])} = ${c(Object.values(t)[0])}`:e?`${e} = ${c(t)}`:`${c(t)}`;var n}function p({values:e}){let t=[];if(Array.isArray(e))for(var n in e){let r=e[n];t.push(a.a.createElement("code",{key:r},c(r))),t.push(" ")}else for(var r in e)t.push(a.a.createElement("code",{key:r,title:e[r]},c(r))),t.push(" ");return t}function m({name:e,path:t,value:n}){return a.a.createElement("code",null,d(null,n))}function h({name:e,path:t,values:n}){let r="";return n.forEach((function(t){r+=d(e,t)+"\n"})),t&&(r=`[${t}]\n${r}`),a.a.createElement("div",null,a.a.createElement(s.a,{fileName:"vector.toml"}),a.a.createElement(l.a,{className:"language-toml"},r))}function f({value:e}){let t=Object.keys(e)[0],n=Object.values(e)[0];return a.a.createElement("span",null,a.a.createElement("code",null,a.a.createElement("a",{href:`#${t}`},t))," = ",a.a.createElement("code",null,c(n)))}function g({defaultValue:e,enumValues:t,examples:n,name:o,path:i,relevantWhen:s}){const[l,c]=Object(r.useState)(!1);return e||t||n&&n.length>0?a.a.createElement("div",{className:"info"},void 0!==e?e?a.a.createElement("div",null,"Default: ",a.a.createElement(m,{name:o,path:i,value:e})):a.a.createElement("div",null,"No default"):null,t?a.a.createElement("div",null,"Enum, must be one of: ",a.a.createElement(p,{values:t})):null,s?a.a.createElement("div",null,"Only relevant when: ",a.a.createElement(f,{value:s})):null,a.a.createElement("div",null,a.a.createElement("div",{className:"show-more",onClick:()=>c(!l)},l?"Hide examples":"View examples"),l&&a.a.createElement("div",{className:"examples"},a.a.createElement(h,{name:o,path:i,values:n})))):null}t.a=function({children:e,common:t,defaultValue:n,enumValues:o,examples:s,name:l,path:c,relevantWhen:u,templateable:d,type:p,unit:m,required:h}){const[f,b]=Object(r.useState)(!1);let v=e;return f&&(v=v.filter(e=>"p"!=e.props.originalType)),a.a.createElement("div",{className:i()("field","section",h?"field-required":"",f?"field-collapsed":""),required:h},a.a.createElement("div",{className:"badges"},t&&a.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&a.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),a.a.createElement("span",{className:"badge badge--secondary"},p),o&&Object.keys(o).length>0&&a.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),m&&a.a.createElement("span",{className:"badge badge--secondary"},m),h?a.a.createElement("span",{className:"badge badge--danger"},"required"):a.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!f&&a.a.createElement(g,{defaultValue:n,enumValues:o,examples:s,name:l,path:c,relevantWhen:u}))}},270:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},l=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n(274),d=n(276);t.STATUS={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};var p=Object.create(null),m=function(e){function n(n){var r=e.call(this,n)||this;return r._isMounted=!1,r.handleLoad=function(e){r._isMounted&&r.setState({content:e,status:t.STATUS.LOADED},r.getElement)},r.handleError=function(e){var n=r.props.onError,a="Browser does not support SVG"===e.message?t.STATUS.UNSUPPORTED:t.STATUS.FAILED;r._isMounted&&r.setState({status:a},(function(){"function"==typeof n&&n(e)}))},r.request=function(){var e=r.props,n=e.cacheRequests,a=e.src;try{return n&&(p[a]={content:"",status:t.STATUS.LOADING,queue:[]}),fetch(a).then((function(e){var t=e.headers.get("content-type"),n=s((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new d.InlineSVGError("Not Found");if(!["image/svg+xml","text/plain"].some((function(e){return n.indexOf(e)>=0})))throw new d.InlineSVGError("Content type isn't valid: "+n);return e.text()})).then((function(e){if(r.handleLoad(e),n){var o=p[a];o&&(o.content=e,o.status=t.STATUS.LOADED,o.queue=o.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){n&&delete p[a],r.handleError(e)}))}catch(o){r.handleError(new d.InlineSVGError(o.message))}},r.state={content:"",element:null,hasCache:!!n.cacheRequests&&!!p[n.src],status:t.STATUS.PENDING},r.hash=n.uniqueHash||d.randomString(8),r}return a(n,e),n.prototype.componentDidMount=function(){if(this._isMounted=!0,d.canUseDOM()){var e=this.state.status,n=this.props.src;try{if(e===t.STATUS.PENDING){if(!d.isSupportedEnvironment())throw new d.InlineSVGError("Browser does not support SVG");if(!n)throw new d.InlineSVGError("Missing src");this.load()}}catch(r){this.handleError(r)}}else this.handleError(new d.InlineSVGError("No DOM"))},n.prototype.componentDidUpdate=function(e,n){if(d.canUseDOM()){var r=this.state,a=r.hasCache,o=r.status,i=this.props,s=i.onLoad,l=i.src;if(n.status!==t.STATUS.READY&&o===t.STATUS.READY&&s&&s(l,a),e.src!==l){if(!l)return void this.handleError(new d.InlineSVGError("Missing src"));this.load()}}},n.prototype.componentWillUnmount=function(){this._isMounted=!1},n.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},n.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,a=void 0===r?"":r,o=n.uniquifyIDs,i=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return o?(l(e.children).map((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes);n.forEach((function(e){var n=e.value.match(/url\((.*?)\)/);n&&n[1]&&(e.value=e.value.replace(n[0],"url("+a+n[1]+"__"+t.hash+")"))})),i.forEach((function(e){var r,a,o=n.find((function(t){return t.name===e}));!o||(r=e,a=o.value,s.indexOf(r)>=0&&a&&a.indexOf("#")<0)||(o.value=o.value+"__"+t.hash)}))}return e.children.length&&(e=t.updateSVGAttributes(e)),e})),e):e},n.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=this.processSVG(),a=u.default(r,{nodeOnly:!0});if(!(a&&a instanceof SVGSVGElement))throw new d.InlineSVGError("Could not convert the src to a DOM Node");var o=this.updateSVGAttributes(a);if(t){var i=o.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var s=document.createElement("desc");s.innerHTML=t,o.prepend(s)}if(n){var l=o.querySelector("title");l&&l.parentNode&&l.parentNode.removeChild(l);var c=document.createElement("title");c.innerHTML=n,o.prepend(c)}return o}catch(p){this.handleError(p)}},n.prototype.getElement=function(){try{var e=this.getNode(),n=u.default(e);if(!n||!c.isValidElement(n))throw new d.InlineSVGError("Could not convert the src to a React element");this.setState({element:n,status:t.STATUS.READY})}catch(r){this.handleError(new d.InlineSVGError(r.message))}},n.prototype.load=function(){var e=this;this._isMounted&&this.setState({content:"",element:null,status:t.STATUS.LOADING},(function(){var n=e.props,r=n.cacheRequests,a=n.src,o=r&&p[a];if(o)o.status===t.STATUS.LOADING?o.queue.push(e.handleLoad):o.status===t.STATUS.LOADED&&e.handleLoad(o.content);else{var i,s=a.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);s?i=s[1]?atob(s[2]):decodeURIComponent(s[2]):a.indexOf("<svg")>=0&&(i=a),i?e.handleLoad(i):e.request()}}))},n.prototype.render=function(){if(!d.canUseDOM())return null;var e=this.state,n=e.element,r=e.status,a=this.props,s=(a.baseURL,a.cacheRequests,a.children),l=void 0===s?null:s,u=(a.description,a.innerRef),p=a.loader,m=void 0===p?null:p,h=(a.onError,a.onLoad,a.preProcessor,a.src,a.title,a.uniqueHash,a.uniquifyIDs,i(a,["baseURL","cacheRequests","children","description","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs"]));return n?c.cloneElement(n,o({ref:u},h)):[t.STATUS.UNSUPPORTED,t.STATUS.FAILED].indexOf(r)>-1?l:m},n.defaultProps={cacheRequests:!0,uniquifyIDs:!1},n}(c.PureComponent);t.default=m},274:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(275);function l(e,t){if(void 0===t&&(t={}),!(e&&e instanceof Node))return null;var n,a=t.actions,c=void 0===a?[]:a,u=t.index,d=void 0===u?0:u,p=t.level,m=void 0===p?0:p,h=e,f=m+"-"+d,g=[];if(Array.isArray(c)&&c.forEach((function(t){t.condition(h,f,m)&&("function"==typeof t.pre&&((h=t.pre(h,f,m))instanceof Node||(h=e)),"function"==typeof t.post&&g.push(t.post(h,f,m)))})),g.length)return g;switch(h.nodeType){case 1:return i.createElement((n=h.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(n)?n:n.toLowerCase()),function(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),o(e.attributes).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=s.styleToObject(e.value);break;case"checked":case"disabled":case"selected":case"autoplay":case"controls":n[e.name]=e.name;break;default:n[s.possibleStandardNames[e.name]||e.name]=e.value}}))}return n}(h,f),function(e,t,n){var a=o(e).map((function(e,a){return l(e,r(r({},n),{index:a,level:t+1}))})).filter(Boolean);return a.length?a:null}(h.childNodes,m,t));case 3:var b=h.nodeValue.toString();if(/^\s+$/.test(b))return null;if(!h.parentNode)return b;var v=h.parentNode.nodeName.toLowerCase();return-1!==s.noTextChildNodes.indexOf(v)?(/\S/.test(b)&&console.warn("A textNode is not allowed inside '"+v+"'. Your text \""+b+'" will be ignored'),null):b;case 8:default:return null}}function c(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,a=t.selector,o=void 0===a?"body > *":a,i=t.type,s=void 0===i?"text/html":i;try{var c=(new DOMParser).parseFromString(e,s).querySelector(o);if(!(c instanceof Node))throw new Error("Error parsing input");return r?c:l(c,t)}catch(u){0}return null}t.convertFromNode=l,t.convertFromString=c,t.default=function(e,t){return void 0===t&&(t={}),"string"==typeof e?c(e,t):e instanceof Node?l(e,t):null}},275:function(e,t,n){"use strict";var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.styleToObject=function(e){return e.split(/ ?; ?/).reduce((function(e,t){var n=r(t.split(/ ?: ?/),2),a=n[0],o=n[1];return a&&o&&(e[a.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(o))?o:Number(o)),e}),{})},t.noTextChildNodes=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],t.possibleStandardNames={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"}},276:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(277);t.canUseDOM=function(){return o.canUseDOM},t.supportsInlineSVG=function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI};var i=function(e){function t(t,n){var r=e.call(this)||this;return r.name="InlineSVGError",r.message=t,r.data=n,r}return a(t,e),t}(Error);t.InlineSVGError=i,t.isSupportedEnvironment=function(){return t.supportsInlineSVG()&&"undefined"!=typeof window&&null!==window},t.randomString=function(e){for(var t,n="abcdefghijklmnopqrstuvwxyz",r=""+n+n.toUpperCase()+"1234567890",a="",o=0;o<e;o++)a+=(t=r)[Math.floor(Math.random()*t.length)];return a}},277:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()}}]);