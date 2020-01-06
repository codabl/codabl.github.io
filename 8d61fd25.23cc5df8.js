(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a(1),r=(a(0),a(227)),c=a(281),l=a(237),i=a(260);const b={title:"Install Vector From Source",sidebar_label:"From Source",description:"Install Vector from the Vector source code"},o={id:"setup/installation/manual/from-source",title:"Install Vector From Source",description:"Install Vector from the Vector source code",source:"@site/docs/setup/installation/manual/from-source.md",permalink:"/docs/setup/installation/manual/from-source",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/manual/from-source.md",sidebar_label:"From Source"},s=[{value:"Installation",id:"installation",children:[]},{value:"Next Steps",id:"next-steps",children:[{value:"Configuring",id:"configuring",children:[]},{value:"Data Directory",id:"data-directory",children:[]},{value:"Service Managers",id:"service-managers",children:[]},{value:"Updating",id:"updating",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Feature Flags",id:"feature-flags",children:[]}]},{value:"Compiling using Docker",id:"compiling-using-docker",children:[]}],p=(d="TabItem",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)});var d;const m={rightToc:s},u="wrapper";function O({components:e,...t}){return Object(r.b)(u,Object(n.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page covers installing Vector from source using the native toolchain for the host."),Object(r.b)("p",null,"Vector can also be compiled to a static binary for Linux for ",Object(r.b)("inlineCode",{parentName:"p"},"x86_64"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ARM64"),",\nand ",Object(r.b)("inlineCode",{parentName:"p"},"ARMv7")," architectures. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#compiling-using-docker"}),"compiling using Docker"),"\nfor details."),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"We recommend installing Vector through a supported ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/installation/containers/"}),"container\nplatform"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/installation/package-managers/"}),"package manager"),", or\npre-built ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/installation/manual/from-archives/"}),"archive"),", if possible. These handle permissions,\ndirectory creation, and other intricacies covered in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#next-steps"}),"Next\nSteps")," section.")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Rust"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install C and C++ compilers (GCC or Clang) and GNU ",Object(r.b)("inlineCode",{parentName:"p"},"make")," if they are not pre-installed\non your system.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create the ",Object(r.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download Vector's Source"),Object(r.b)(l.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Master",value:"master"}],mdxType:"Tabs"},Object(r.b)("p",{parentName:"li"},"import TabItem from '@theme/TabItem';"),Object(r.b)(p,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://api.github.com/repos/timberio/vector/tarball/v0.6.X | \\\n  tar xzf - -C vector --strip-components=1\n"))),Object(r.b)(p,{value:"master",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://github.com/timberio/vector/archive/master.tar.gz | \\\n  tar xzf - -C vector --strip-components=1\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change into the ",Object(r.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Compile Vector"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'[FEATURES="<flag1>,<flag2>,..."] make build\n')),Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"FEATURES")," environment variable is optional. You can override the\ndefault features with this variable. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#feature-flags"}),"feature flags"),"\nfor more info."),Object(r.b)("p",{parentName:"li"},"When finished, the vector binary will be placed in ",Object(r.b)("inlineCode",{parentName:"p"},"target/<target>/release/vector"),".\nFor example, if you are building Vector on your Mac, your target triple\nis ",Object(r.b)("inlineCode",{parentName:"p"},"x86_64-apple-darwin"),", and the Vector binary will be located at\n",Object(r.b)("inlineCode",{parentName:"p"},"target/x86_64-apple-darwin/release/vector"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Start Vector"),Object(r.b)("p",{parentName:"li"},"Finally, start vector:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"target/<target>/release/vector --config config/vector.toml\n")))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("h3",{id:"configuring"},"Configuring"),Object(r.b)("p",null,"The Vector configuration file is located at:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"config/vector.toml\n")),Object(r.b)("p",null,"A full spec is located at ",Object(r.b)("inlineCode",{parentName:"p"},"config/vector.spec.toml")," and examples are\nlocated in ",Object(r.b)("inlineCode",{parentName:"p"},"config/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(r.b)("h3",{id:"data-directory"},"Data Directory"),Object(r.b)("p",null,"We highly recommend creating a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/global-options/#data-directory"}),"data directory"),"\nthat Vector can use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"mkdir /var/lib/vector\n")),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Make sure that this directory is writable by the ",Object(r.b)("inlineCode",{parentName:"p"},"vector")," process.")),Object(r.b)("p",null,"Vector offers a global ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),Object(r.b)("inlineCode",{parentName:"a"},"data_dir")," option")," that\nyou can use to specify the path of your directory."),Object(r.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector" # default\n')),Object(r.b)("h3",{id:"service-managers"},"Service Managers"),Object(r.b)("p",null,"Vector archives ship with service files in case you need them:"),Object(r.b)("h4",{id:"initd"},"Init.d"),Object(r.b)("p",null,"To install Vector into Init.d run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cp -av distribution/init.d/vector /etc/init.d\n")),Object(r.b)("h4",{id:"systemd"},"Systemd"),Object(r.b)("p",null,"To install Vector into Systemd run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cp -av distribution/systemd/vector.service /etc/systemd/system\n")),Object(r.b)("h3",{id:"updating"},"Updating"),Object(r.b)("p",null,"Simply follow the same ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#installation"}),"installation instructions above"),"."),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"feature-flags"},"Feature Flags"),Object(r.b)("p",null,"The following feature flags are supported via the ",Object(r.b)("inlineCode",{parentName:"p"},"FEATURES")," env var when\nexecuting ",Object(r.b)("inlineCode",{parentName:"p"},"make build"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'[FEATURES="<flag1>,<flag2>,..."] make build\n')),Object(r.b)("p",null,"There are three meta-features which can be used when compiling for the corresponding targets. If no features\nare specified, then the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," one is used."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Feature"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Enabled by default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"default")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default set of features for ",Object(r.b)("inlineCode",{parentName:"td"},"*-unknown-linux-gnu")," and ",Object(r.b)("inlineCode",{parentName:"td"},"*-apple-darwin")," targets."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("i",{className:"feather icon-check"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"default-musl")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default set of features for ",Object(r.b)("inlineCode",{parentName:"td"},"*-unknown-linux-musl")," targets. Requires ",Object(r.b)("inlineCode",{parentName:"td"},"cmake")," and ",Object(r.b)("inlineCode",{parentName:"td"},"perl")," as build dependencies."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"default-msvc")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default set of features for ",Object(r.b)("inlineCode",{parentName:"td"},"*-pc-windows-msvc")," targets. Requires ",Object(r.b)("inlineCode",{parentName:"td"},"cmake")," and ",Object(r.b)("inlineCode",{parentName:"td"},"perl")," as build dependencies."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("p",null,"Alternatively, for finer control, it is possible to use specific features from the list below:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Feature"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Included in ",Object(r.b)("inlineCode",{parentName:"th"},"default")," feature"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"unix")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables features that require ",Object(r.b)("inlineCode",{parentName:"td"},"cfg(unix)")," to be present on the platform, namely support for Unix domain sockets in ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/sources/docker/"}),"docker")," source and ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/jemalloc/jemalloc"}),"jemalloc")," instead of the default memory allocator."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("i",{className:"feather icon-check"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"vendored")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Forces vendoring of ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.openssl.org/"}),"OpenSSL")," and ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.zlib.net"}),"ZLib")," dependencies instead of using their versions installed in the system. Requires ",Object(r.b)("inlineCode",{parentName:"td"},"perl")," as a build dependency."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("i",{className:"feather icon-check"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"leveldb-plain")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables support for ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/meta/glossary/#buffer"}),"disk buffers")," using vendored ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/google/leveldb"}),"LevelDB"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("i",{className:"feather icon-check"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"leveldb-cmake")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The same as ",Object(r.b)("inlineCode",{parentName:"td"},"leveldb-plain"),", but is more portable. Requires ",Object(r.b)("inlineCode",{parentName:"td"},"cmake")," as a build dependency. Use it in case of compilation issues with ",Object(r.b)("inlineCode",{parentName:"td"},"leveldb-plain"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"rdkafka-plain")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables vendored ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/edenhill/librdkafka"}),"librdkafka")," dependency, which is required for ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/sources/kafka/"}),Object(r.b)("inlineCode",{parentName:"a"},"kafka")," source")," and ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/sources/kafka/"}),Object(r.b)("inlineCode",{parentName:"a"},"kafka")," sink"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("i",{className:"feather icon-check"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"rdkafka-cmake")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The same as ",Object(r.b)("inlineCode",{parentName:"td"},"rdkafka-plain"),", but is more portable. Requires ",Object(r.b)("inlineCode",{parentName:"td"},"cmake")," as a build dependency. Use it in case of compilation issues with ",Object(r.b)("inlineCode",{parentName:"td"},"rdkafka-plain"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h2",{id:"compiling-using-docker"},"Compiling using Docker"),Object(r.b)("p",null,"It is possible to build statically linked binaries of Vector for Linux using Docker."),Object(r.b)("p",null,"In this case the dependencies listed in the previous section are not\nneeded, as all of them would be automatically pulled by Docker."),Object(r.b)("p",null,"Building steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download Vector's Source"),Object(r.b)(l.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Master",value:"master"}],mdxType:"Tabs"},Object(r.b)(p,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://api.github.com/repos/timberio/vector/tarball/v0.6.X | \\\n  tar xzf - -C vector --strip-components=1\n"))),Object(r.b)(p,{value:"master",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://github.com/timberio/vector/archive/master.tar.gz | \\\n  tar xzf - -C vector --strip-components=1\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build Vector using Docker"),Object(r.b)(l.a,{defaultValue:"x86_64-unknown-linux-musl",urlKey:"file_name",values:[{label:"Linux (x86_64)",value:"x86_64-unknown-linux-musl"},{label:"Linux (ARM64)",value:"aarch64-unknown-linux-musl"},{label:"Linux (ARMv7)",value:"armv7-unknown-linux-musleabihf"}],mdxType:"Tabs"},Object(r.b)(p,{value:"x86_64-unknown-linux-musl",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"PASS_FEATURES=default-musl ./scripts/docker-run.sh builder-x86_64-unknown-linux-musl make build\n"))),Object(r.b)(p,{value:"aarch64-unknown-linux-musl",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"PASS_FEATURES=default-musl ./scripts/docker-run.sh builder-aarch64-unknown-linux-musl make build\n"))),Object(r.b)(p,{value:"armv7-unknown-linux-musleabihf",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"PASS_FEATURES=default-musl ./scripts/docker-run.sh builder-armv7-unknown-linux-musleabihf make build\n")))),Object(r.b)("p",{parentName:"li"},"The command above builds a Docker image with Rust toolchain for a Linux target for the\ncorresponding architecture using ",Object(r.b)("inlineCode",{parentName:"p"},"musl")," as the C library, then starts a container from\nthis image, and then builds inside the Container. The target binary is located in\n",Object(r.b)("inlineCode",{parentName:"p"},"target/<target triple>/release/vector")," like in the previous case."))))}O.isMDXComponent=!0},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return a?r.a.createElement(u,i({ref:t},o,{components:a})):r.a.createElement(u,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},237:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(271),i=a(224),b=a.n(i),o=a(274),s=a.n(o);function p({block:e,centered:t,className:a,style:n,values:r,selectedValue:l,setSelectedValue:i}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:b()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>c.a.createElement("li",{className:b()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>i(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:i,select:b,style:o,values:m,urlKey:u}=e,[O,j]=Object(r.useState)(i);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&u){let e=s.a.parse(window.location.search);e[u]&&j(e[u])}},[]),c.a.createElement("div",null,m.length>1&&(b?c.a.createElement(d,Object(n.a)({selectedValue:O,setSelectedValue:j},e)):c.a.createElement(p,Object(n.a)({selectedValue:O,setSelectedValue:j},e))),c.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(l).filter(e=>e.props.value===O)[0]))}},260:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(91);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(r.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return r.a.createElement("div",{className:"code-header"},a.length>0&&r.a.createElement("span",{className:"code-header--links"},a),e)}},281:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(224),l=a.n(c);a(92);t.a=function({children:e,fill:t,icon:a,type:n}){let c=null;switch(n){case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:l()("alert",`alert--${n}`,{"alert--fill":t}),role:"alert"},r.a.createElement("i",{className:l()("feather",`icon-${a||c}`)}),e)}}}]);