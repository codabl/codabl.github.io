(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return f}));var n=a(1),r=a(6),l=(a(0),a(254)),c=a(256),o=a(261),s=a(262),i={description:"The Vector `remove_tags` transform accepts `metric` events and allows you to remove one or more metric tags.",event_types:["metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+remove_tags%22",sidebar_label:'remove_tags|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/remove_tags.rs",status:"prod-ready",title:"Remove Tags Transform"},m={id:"reference/transforms/remove_tags",title:"Remove Tags Transform",description:"The Vector `remove_tags` transform accepts `metric` events and allows you to remove one or more metric tags.",source:"@site/docs/reference/transforms/remove_tags.md",permalink:"/docs/reference/transforms/remove_tags",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/transforms/remove_tags.md",sidebar_label:'remove_tags|["metric"]',sidebar:"docs",previous:{title:"Remove Fields Transform",permalink:"/docs/reference/transforms/remove_fields"},next:{title:"Sampler Transform",permalink:"/docs/reference/transforms/sampler"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"tags",id:"tags",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],p={rightToc:u},d="wrapper";function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"remove_tags")," transform accepts ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(l.b)("inlineCode",{parentName:"a"},"metric"))," events and allows you to remove one or more metric tags."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  type = "remove_tags" # must be: "remove_tags"\n  inputs = ["my-source-id"] # example\n  tags = ["tag1", "tag2"] # example\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)(o.a,{filters:!0,mdxType:"Fields"},Object(l.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:[["tag1","tag2"]],name:"tags",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"tags"},"tags"),Object(l.b)("p",null,"The tag names to drop."))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}f.isMDXComponent=!0},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return a?r.a.createElement(f,o({ref:t},i,{components:a})):r.a.createElement(f,o({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var i=2;i<l;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},256:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(85);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(r.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return r.a.createElement("div",{className:"code-header"},a.length>0&&r.a.createElement("span",{className:"code-header--links"},a),e)}},258:function(e,t,a){"use strict";(function(e){var n=a(1),r=a(0),l=a.n(r),c=a(275),o=a(267),s=a.n(o),i=a(265),m=a(253),u=a.n(m),p=a(274),d=a.n(p),f=a(268),b=a.n(f),v=a(255),g=a(86),h=a.n(g),y=a(263);(void 0!==e?e:window).Prism=i.a,a(269),a(270),a(271),a(272),a(273);const O=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(v.a)(),[i,m]=Object(r.useState)(!1),p=Object(r.useRef)(null),f=Object(r.useRef)(null),[g]=Object(y.a)();let E=[];if(a&&O.test(a)){const e=a.match(O)[1];E=b.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return f.current&&(e=new s.a(f.current,{target:()=>p.current})),()=>{e&&e.destroy()}},[f.current,p.current]);let j=t&&t.replace(/language-/,"");!j&&o.defaultLanguage&&(j=o.defaultLanguage);const N=()=>{window.getSelection().empty(),m(!0),setTimeout(()=>m(!1),2e3)};let w="dark"==g?o.darkTheme:o.theme;return l.a.createElement(c.a,Object(n.a)({},c.b,{theme:w||d.a,code:e.trim(),language:j}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:c})=>l.a.createElement("div",{className:h.a.codeBlockWrapper},l.a.createElement("pre",{ref:p,className:u()(e,h.a.codeBlock),style:t},a.map((e,t)=>{const a=r({line:e,key:t});return E.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>l.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))})),l.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:h.a.copyButton,onClick:N},i?"Copied":"Copy")))}}).call(this,a(48))},261:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(87);t.a=function({children:e,filters:t}){const[a,l]=Object(n.useState)(!1),[c,o]=Object(n.useState)(!1),[s,i]=Object(n.useState)(null);let m=Array.isArray(e)?e:[e],u=m.some(e=>e.props.common),p=m.some(e=>e.props.required),d=m;return a&&(d=d.filter(e=>e.props.common)),c&&(d=d.filter(e=>e.props.required)),s&&(d=d.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),r.a.createElement("div",{className:"fields"},m.length>1&&!1!==t?r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"result-count"},d.length," items"),r.a.createElement("div",{className:" search"},r.a.createElement("input",{type:"text",onChange:e=>i(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"checkboxes"},u&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:e=>l(e.currentTarget.checked),checked:a}),"common only"),p&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:c}),"required only"))):null,r.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"icon"},"\u2639"),r.a.createElement("div",null,"No fields found"))))}},262:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),l=a(253),c=a.n(l),o=(a(254),a(256)),s=a(258);function i(e){return JSON.stringify(e)}function m(e){return e.includes(".")?'"'+e+'"':e}function u(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${m(t.name)} = ${i(t.value)}`:`${m(Object.keys(t)[0])} = ${i(Object.values(t)[0])}`:e?`${e} = ${i(t)}`:`${i(t)}`;var a}function p({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(r.a.createElement("code",{key:n},i(n))),t.push(" ")}else for(var n in e)t.push(r.a.createElement("code",{key:n,title:e[n]},i(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return r.a.createElement("code",null,u(null,a))}function f({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=u(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),r.a.createElement("div",null,r.a.createElement(o.a,{fileName:"vector.toml"}),r.a.createElement(s.a,{className:"language-toml"},n))}function b({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:`#${t}`},t))," = ",r.a.createElement("code",null,i(a)))}function v({defaultValue:e,enumValues:t,examples:a,name:l,path:c,relevantWhen:o}){const[s,i]=Object(n.useState)(!1);return e||t||a&&a.length>0?r.a.createElement("div",{className:"info"},void 0!==e?e?r.a.createElement("div",null,"Default: ",r.a.createElement(d,{name:l,path:c,value:e})):r.a.createElement("div",null,"No default"):null,t?r.a.createElement("div",null,"Enum, must be one of: ",r.a.createElement(p,{values:t})):null,o?r.a.createElement("div",null,"Only relevant when: ",r.a.createElement(b,{value:o})):null,r.a.createElement("div",null,r.a.createElement("div",{className:"show-more",onClick:()=>i(!s)},s?"Hide examples":"View examples"),s&&r.a.createElement("div",{className:"examples"},r.a.createElement(f,{name:l,path:c,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:l,examples:o,name:s,path:i,relevantWhen:m,templateable:u,type:p,unit:d,required:f}){const[b,g]=Object(n.useState)(!1);let h=e;return b&&(h=h.filter(e=>"p"!=e.props.originalType)),r.a.createElement("div",{className:c()("field","section",f?"field-required":"",b?"field-collapsed":""),required:f},r.a.createElement("div",{className:"badges"},t&&r.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),u&&r.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),r.a.createElement("span",{className:"badge badge--secondary"},p),l&&Object.keys(l).length>0&&r.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&r.a.createElement("span",{className:"badge badge--secondary"},d),f?r.a.createElement("span",{className:"badge badge--danger"},"required"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),h,!b&&r.a.createElement(v,{defaultValue:a,enumValues:l,examples:o,name:s,path:i,relevantWhen:m}))}}}]);