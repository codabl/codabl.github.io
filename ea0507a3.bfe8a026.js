/*! For license information please see ea0507a3.bfe8a026.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return O}));var r=a(1),n=a(6),c=(a(0),a(228)),l=a(264),o=a(236),i=a(237),b=a(231),p={title:"Install Vector From Archives",sidebar_label:"From Archives",description:"Install Vector from pre-compiled archives"},s={id:"setup/installation/manual/from-archives",title:"Install Vector From Archives",description:"Install Vector from pre-compiled archives",source:"@site/docs/setup/installation/manual/from-archives.md",permalink:"/docs/setup/installation/manual/from-archives",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/manual/from-archives.md",sidebar_label:"From Archives",sidebar:"docs",previous:{title:"Install Vector Manually",permalink:"/docs/setup/installation/manual"},next:{title:"Install Vector From Source",permalink:"/docs/setup/installation/manual/from-source"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Next Steps",id:"next-steps",children:[{value:"Configuring",id:"configuring",children:[]},{value:"Data Directory",id:"data-directory",children:[]},{value:"Service Managers",id:"service-managers",children:[]},{value:"Updating",id:"updating",children:[]}]}],u={rightToc:m},d="wrapper";function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(d,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This page covers installing Vector from a pre-built archive. These archives\ncontain the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," binary as well as supporting configuration files."),Object(c.b)(l.a,{type:"warning",mdxType:"Alert"},Object(c.b)("p",null,"We recommend installing Vector through a supported ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/installation/containers/"}),"container\nplatform")," or ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/installation/package-managers/"}),"package manager"),", if\npossible. These handle permissions, directory creation, and other\nintricacies covered in the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#next-steps"}),"Next Steps")," section.")),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(o.a,{block:!0,defaultValue:"vector-x86_64-unknown-linux-musl.tar.gz",urlKey:"file_name",values:[{label:"Linux (x86_64)",value:"vector-x86_64-unknown-linux-musl.tar.gz"},{label:"Linux (ARM64)",value:"vector-aarch64-unknown-linux-musl.tar.gz"},{label:"Linux (ARMv7)",value:"vector-armv7-unknown-linux-musleabihf.tar.gz"},{label:"MacOS (x86_64)",value:"vector-x86_64-apple-darwin.tar.gz"},{label:"Windows (x86_64, 7+)",value:"vector-x86_64-pc-windows-msvc.zip"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"vector-x86_64-unknown-linux-musl.tar.gz",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(c.b)(o.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Change into the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Move ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(c.b)(i.a,{value:"vector-aarch64-unknown-linux-musl.tar.gz",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(c.b)(o.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Change into the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Move ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(c.b)(i.a,{value:"vector-armv7-unknown-linux-musleabihf.tar.gz",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(c.b)(o.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Change into the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Move ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(c.b)(i.a,{value:"vector-x86_64-apple-darwin.tar.gz",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(c.b)(o.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Change into the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Move ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(c.b)(i.a,{value:"vector-x86_64-pc-windows-msvc.zip",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download Vector release archive (latest):"),Object(c.b)(o.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/0.6.X/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/nightly/latest/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Extract files from the archive:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bat"}),"powershell Expand-Archive vector-x86_64-pc-windows-msvc.zip .\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Navigate to the Vector directory:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bat"}),"cd vector-x86_64-pc-windows-msvc\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bat"}),".\\bin\\vector --config config\\vector.toml\n")))))),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("h3",{id:"configuring"},"Configuring"),Object(c.b)("p",null,"The Vector configuration file is located at:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"config/vector.toml\n")),Object(c.b)("p",null,"A full spec is located at ",Object(c.b)("inlineCode",{parentName:"p"},"config/vector.spec.toml")," and examples are\nlocated in ",Object(c.b)("inlineCode",{parentName:"p"},"config/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(c.b)("h3",{id:"data-directory"},"Data Directory"),Object(c.b)("p",null,"We highly recommend creating a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/global-options/#data-directory"}),"data directory"),"\nthat Vector can use:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir /var/lib/vector\n")),Object(c.b)(l.a,{type:"warning",mdxType:"Alert"},Object(c.b)("p",null,"Make sure that this directory is writable by the ",Object(c.b)("inlineCode",{parentName:"p"},"vector")," process.")),Object(c.b)("p",null,"Vector offers a global ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),Object(c.b)("inlineCode",{parentName:"a"},"data_dir")," option")," that\nyou can use to specify the path of your directory."),Object(c.b)(b.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector" # default\n')),Object(c.b)("h3",{id:"service-managers"},"Service Managers"),Object(c.b)("p",null,"Vector archives ship with service files in case you need them:"),Object(c.b)("h4",{id:"initd"},"Init.d"),Object(c.b)("p",null,"To install Vector into Init.d run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/init.d/vector /etc/init.d\n")),Object(c.b)("h4",{id:"systemd"},"Systemd"),Object(c.b)("p",null,"To install Vector into Systemd run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/systemd/vector.service /etc/systemd/system\n")),Object(c.b)("h3",{id:"updating"},"Updating"),Object(c.b)("p",null,"Simply follow the same ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#installation"}),"installation instructions above"),"."))}O.isMDXComponent=!0},227:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===c)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||c;return a?n.a.createElement(d,o({ref:t},b,{components:a})):n.a.createElement(d,o({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var b=2;b<c;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},231:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(85);t.a=function({fileName:e,links:t}){let a=[];for(var r in t)a.push(n.a.createElement("a",{href:r.href},r.text||"Learn more&hellip;"));return n.a.createElement("div",{className:"code-header"},a.length>0&&n.a.createElement("span",{className:"code-header--links"},a),e)}},236:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),l=a(250),o=a(227),i=a.n(o),b=a(251),p=a.n(b);function s({block:e,centered:t,className:a,style:r,values:n,selectedValue:l,setSelectedValue:o}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:i()("tabs",a,{"tabs--block":e}),style:r},n.map(({value:e,label:t})=>c.a.createElement("li",{className:i()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>o(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:o,select:i,style:b,values:u,urlKey:d}=e,[O,v]=Object(n.useState)(o);return Object(n.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&d){let e=p.a.parse(window.location.search);e[d]&&v(e[d])}},[]),c.a.createElement("div",null,u.length>1&&(i?c.a.createElement(m,Object(r.a)({selectedValue:O,setSelectedValue:v},e)):c.a.createElement(s,Object(r.a)({selectedValue:O,setSelectedValue:v},e))),c.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(l).filter(e=>e.props.value===O)[0]))}},237:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}},264:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(227),l=a.n(c);a(95);t.a=function({children:e,fill:t,icon:a,type:r}){let c=null;switch(r){case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return n.a.createElement("div",{className:l()("alert",`alert--${r}`,{"alert--fill":t}),role:"alert"},n.a.createElement("i",{className:l()("feather",`icon-${a||c}`)}),e)}}}]);