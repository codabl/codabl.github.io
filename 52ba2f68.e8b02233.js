/*! For license information please see 52ba2f68.e8b02233.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(254)),i=n(256),s=n(291),c={title:"Getting Started Guide",sidebar_label:"Getting Started",description:"Getting started with Vector"},l={id:"setup/guides/getting-started",title:"Getting Started Guide",description:"Getting started with Vector",source:"@site/docs/setup/guides/getting-started.md",permalink:"/docs/setup/guides/getting-started",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/guides/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Guides",permalink:"/docs/setup/guides"},next:{title:"Unit Testing Guide",permalink:"/docs/setup/guides/unit-testing"}},p=[{value:"1. Install Vector",id:"1-install-vector",children:[]},{value:"2. Configure it",id:"2-configure-it",children:[]},{value:"3. Transform an event",id:"3-transform-an-event",children:[]}],u={rightToc:p},b="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Vector is a simple beast to tame, in this guide we'll send an\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"event")," through it and touch on some basic concepts."),Object(o.b)("h2",{id:"1-install-vector"},"1. Install Vector"),Object(o.b)("p",null,"If you haven't already, install Vector. Here's a script for the lazy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -sSf https://sh.vector.dev | sh\n")),Object(o.b)("p",null,"Or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"choose your preferred installation method"),"."),Object(o.b)("h2",{id:"2-configure-it"},"2. Configure it"),Object(o.b)("p",null,"Vector runs with a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration file")," that tells it which\ncomponents to run and how they should interact. Let's create one that simply\npipes a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(o.b)("inlineCode",{parentName:"a"},"stdin")," source")," to a\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/console/"}),Object(o.b)("inlineCode",{parentName:"a"},"stdout")," sink"),":"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'[sources.foo]\n    type = "stdin"\n\n[sinks.bar]\n    inputs = ["foo"]\n    type = "console"\n    encoding = "text"\n')),Object(o.b)("p",null,"Every component within a Vector config has an identifier chosen by you. This\nallows you to specify where a sink should gather its data from (using the\n",Object(o.b)("inlineCode",{parentName:"p"},"inputs")," field)."),Object(o.b)("p",null,"That's it for our first config, now pipe an event through it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"echo '172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \"PUT /mesh\" 406 10272' | vector --config ./vector.toml\n")),Object(o.b)("p",null,"Your input event will get echoed back (along with some service logs) unchanged:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'... some logs ...\n172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] "PUT /mesh" 406 10272\n')),Object(o.b)("p",null,"That's because the raw input text of our source was captured internally within\nthe field ",Object(o.b)("inlineCode",{parentName:"p"},"message"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," encoding option of our sink prints the raw\ncontents of ",Object(o.b)("inlineCode",{parentName:"p"},"message")," only."),Object(o.b)("p",null,"If you expected something interesting to happen then that's on you. The text\ncame out unchanged because we didn't ask Vector to change it, let's remedy that.\nExit Vector by pressing ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl+c"),"."),Object(o.b)(s.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Hey, kid, if you want to see something cool try setting ",Object(o.b)("inlineCode",{parentName:"p"},'encoding = "json"')," in\nthe sink config.")),Object(o.b)("h2",{id:"3-transform-an-event"},"3. Transform an event"),Object(o.b)("p",null,"Nothing in this world is ever good enough for you, why should events be any\ndifferent?"),Object(o.b)("p",null,"Vector makes it easy to mutate events into a more (or less) structured format\nwith ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),". Let's parse our log into a structured format\nby capturing named regular expression groups with a\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/regex_parser/"}),Object(o.b)("inlineCode",{parentName:"a"},"regex_parser")," transform"),"."),Object(o.b)("p",null,"A config can have any number of transforms and it's entirely up to you how they\nare chained together. Similar to sinks, a transform requires you to specify\nwhere its data comes from. When a sink is configured to accept data from a\ntransform the pipeline is complete."),Object(o.b)("p",null,"Let's place our new transform in between our existing source and sink. We are\nalso going to change the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/console/#encoding"}),"encoding")," of our sink in\norder to print the full event structure:"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'[sources.foo]\n    type = "stdin"\n\n# Structure the data\n[transforms.apache_parser]\n    inputs = ["foo"]\n    type = "regex_parser"\n    field = "message"\n    regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<method>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n\n[sinks.bar]\n    inputs = ["apache_parser"]\n    type = "console"\n    encoding = "json"\n')),Object(o.b)("p",null,"And pipe the same event again through it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"echo '172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \"PUT /mesh\" 406 10272' | vector --config ./vector.toml\n")),Object(o.b)("p",null,"Oh snap! This time we get something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'... some logs ...\n{"status":"406", "bytes_out":"10272", "path":"/mesh", "method":"PUT", "host":"172.128.80.109", "user":"Bins5273", "bytes_in":"656", "timestamp":"2019-05-03T13:11:48-04:00"}\n')),Object(o.b)("p",null,"Firstly, our ",Object(o.b)("inlineCode",{parentName:"p"},"message")," field has been parsed out into structured fields.\nSecondly, we now see every field of the event printed to ",Object(o.b)("inlineCode",{parentName:"p"},"stdout")," by our sink in\nJSON format because we set ",Object(o.b)("inlineCode",{parentName:"p"},'encoding = "json"'),"."),Object(o.b)("p",null,"Exit Vector again by pressing ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl+c"),". Next, try experimenting by adding more\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms")," to your pipeline before moving onto the next\nguide."),Object(o.b)("p",null,"Good luck, now that you're a Vector pro you'll have endless ragtag groups of\nmisfits trying to recruit you as their hacker."))}d.isMDXComponent=!0},253:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,s({ref:t},l,{components:n})):a.a.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(85);t.a=function({fileName:e,links:t}){let n=[];for(var r in t)n.push(a.a.createElement("a",{href:r.href},r.text||"Learn more&hellip;"));return a.a.createElement("div",{className:"code-header"},n.length>0&&a.a.createElement("span",{className:"code-header--links"},n),e)}},291:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(253),i=n.n(o);n(94);t.a=function({children:e,fill:t,icon:n,type:r}){let o=null;switch(r){case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return a.a.createElement("div",{className:i()("alert",`alert--${r}`,{"alert--fill":t}),role:"alert"},a.a.createElement("i",{className:i()("feather",`icon-${n||o}`)}),e)}}}]);