(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(228),c=a(229),o=a(44),i=a(257),s=a(227),u=a.n(s),m=a(230),d=a(114),h=a.n(d);const f=24;function b({item:e,level:t,onItemClick:a,collapsible:l}){const{items:c,href:o,label:i,type:s}=e,[d,h]=Object(n.useState)(e.collapsed),[f,p]=Object(n.useState)(null);switch(e.collapsed!==f&&(p(e.collapsed),h(e.collapsed)),s){case"category":if(0==c.length)return!1;if(1==t)return r.a.createElement("li",{className:u()("menu__list-item"),key:i},r.a.createElement("div",{className:"title"},i),r.a.createElement("ul",{className:"menu__list"},c.map(e=>r.a.createElement(b,{key:e.label,item:e,level:t+1,onItemClick:a,collapsible:l}))));{let e=c[0].href;return r.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":d}),key:i},r.a.createElement(m.a,{activeClassName:"menu__link--active",className:u()("menu__link",{"menu__link--sublist":l}),to:e+"/",onClick:l&&"#!"==e?()=>h(!d):void 0},i),r.a.createElement("ul",{className:"menu__list"},c.map(e=>r.a.createElement(b,{key:e.label,item:e,level:t+1,onItemClick:a,collapsible:l}))))}case"link":default:let e=[],n=i;if(i.includes("|")){let t=i.split("|",2);n=t[0],e=JSON.parse(t[1])}let s="hidden"==n;return r.a.createElement("li",{className:u()("menu__list-item",s&&"menu__list-item-hidden"),key:i},r.a.createElement(m.a,{activeClassName:"menu__link--active",className:"menu__link",to:o+"/",onClick:a},n,e.length>0&&r.a.createElement("span",{className:"badges"},e.includes("log")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with log events."},"L"),e.includes("metric")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with metric events."},"M"))))}}var p=function(e){const[t,a]=Object(n.useState)(!1),{docsSidebars:l,location:c,sidebar:o,sidebarCollapsible:i}=e;if(!o)return null;const s=l[o];if(!s)throw new Error(`Cannot find the sidebar "${o}" in the sidebar config!`);return i&&s.forEach(e=>(function e(t,a){const{items:n,href:r,type:l}=t;switch(l){case"category":{const r=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===a.pathname.replace(/\/$/,"")}})(e,c)),r.a.createElement("div",{className:h.a.sidebar},r.a.createElement("div",{className:u()("menu","menu--responsive",{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?r.a.createElement("span",{className:u()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:f,width:f,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},s.map(e=>e.items.length>0&&r.a.createElement(b,{key:e.label,item:e,level:1,onItemClick:()=>{a(!1)},collapsible:i})))))},g=a(270),v=a(312),E=a(277),k=a(115),y=a.n(k);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,{permalinkToSidebar:s,docsSidebars:u,version:m}=a,d=s[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:h={}}={}}=Object(c.a)(),{sidebarCollapsible:f=!0}=h;return b=t.routes,k=n.pathname,b.some(e=>Object(E.b)(k,e))?r.a.createElement(i.a,{version:m},r.a.createElement("div",{className:y.a.docPage},d&&r.a.createElement("div",{className:y.a.docSidebarContainer},r.a.createElement(p,{docsSidebars:u,location:n,sidebar:d,sidebarCollapsible:f})),r.a.createElement("main",{className:y.a.docMainContainer},r.a.createElement(l.a,{components:g.a},Object(o.a)(t.routes))))):r.a.createElement(v.default,e);var b,k}},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(c,".").concat(d)]||m[d]||h[d]||l;return a?r.a.createElement(f,o({ref:t},s,{components:a})):r.a.createElement(f,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},232:function(e,t,a){"use strict";(function(e){var n=a(1),r=a(0),l=a.n(r),c=a(248),o=a(240),i=a.n(o),s=a(239),u=a(227),m=a.n(u),d=a(247),h=a.n(d),f=a(241),b=a.n(f),p=a(229),g=a(86),v=a.n(g),E=a(238);(void 0!==e?e:window).Prism=s.a,a(242),a(243),a(244),a(245),a(246);const k=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(p.a)(),[s,u]=Object(r.useState)(!1),d=Object(r.useRef)(null),f=Object(r.useRef)(null),[g]=Object(E.a)();let y=[];if(a&&k.test(a)){const e=a.match(k)[1];y=b.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return f.current&&(e=new i.a(f.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[f.current,d.current]);let w=t&&t.replace(/language-/,"");!w&&o.defaultLanguage&&(w=o.defaultLanguage);const _=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};let N="dark"==g?o.darkTheme:o.theme;return l.a.createElement(c.a,Object(n.a)({},c.b,{theme:N||h.a,code:e.trim(),language:w}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:c})=>l.a.createElement("div",{className:v.a.codeBlockWrapper},l.a.createElement("pre",{ref:d,className:m()(e,v.a.codeBlock),style:t},a.map((e,t)=>{const a=r({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>l.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))})),l.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:v.a.copyButton,onClick:_},s?"Copied":"Copy")))}}).call(this,a(48))},253:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(227),c=a.n(l);a(91);t.a=function({block:e,buttonClass:t,center:a,description:n,size:l,width:o}){return r.a.createElement("div",{className:c()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,[`mailing-list--${l}`]:l})},!1!==n&&r.a.createElement("div",{className:"mailing-list--description"}),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:c()("input",`input--${l}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:c()("button",`button--${t||"primary"}`,`button--${l}`),type:"submit"},"Subscribe")))}},255:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(229);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),o<30&&(!i||i<r)?a:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(229);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),o<30&&(!i||i<r)?a:null}},257:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(254),c=a(229),o=a(249),i=a(1),s=a(230),u=function(){return null},m=a(252),d=a.n(m),h=a(258),f=a.n(h),b=a(227),p=a.n(b),g=a(89),v=a.n(g);const E=()=>r.a.createElement("span",{className:p()(v.a.toggle,v.a.moon)}),k=()=>r.a.createElement("span",{className:p()(v.a.toggle,v.a.sun)});var y=function(e){const{isClient:t}=Object(c.a)();return r.a.createElement(f.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(k,null)}},e))},w=a(255),_=a(256);var N=e=>{const[t,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)(0),[c,o]=Object(n.useState)(0),i=Object(n.useCallback)(e=>{null!==e&&o(e.getBoundingClientRect().height)},[]),s=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-c,n=window.innerHeight;e<c||(r&&e>r?a(!1):e+n<t&&a(!0),l(e))};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[r,c]),{navbarRef:i,isNavbarVisible:t}},O=a(238),j=a(90),C=a.n(j);function S({href:e,hideIcon:t,hideText:a,label:n,onClick:l,to:c}){let u=function(e){switch(e.toLowerCase()){case"blog":return Object(w.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(_.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const m=Object(o.a)(c);return r.a.createElement(s.a,Object(i.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:l},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:m}),!t&&u.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${u.icon}`})," "),!a&&n,u.badge&&r.a.createElement("span",{className:p()("badge",`badge--${u.badgeStyle||"secondary"}`)},u.badge))}var T=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:m={},disableDarkMode:h=!1}=l,{title:f,logo:b={},links:g=[],hideOnScroll:v=!1}=m,[E,k]=Object(n.useState)(!1),[w,_]=Object(n.useState)(!1),[j,T]=Object(O.a)(),{navbarRef:x,isNavbarVisible:M}=N(v),P=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",k(!0)},[k]),I=Object(n.useCallback)(()=>{document.body.style.overflow="visible",k(!1)},[k]),D=Object(n.useCallback)(e=>T(e.target.checked?"dark":""),[T]),F=Object(o.a)(b.src);return r.a.createElement("nav",{ref:x,className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":E,[C.a.navbarHideable]:v,[C.a.navbarHidden]:!M})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,{className:"navbar__brand",to:a},null!=b&&r.a.createElement(d.a,{className:"navbar__logo",src:F,alt:b.alt}),null!=f&&r.a.createElement("strong",{className:w?C.a.hideLogoText:""},f)),g.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(S,Object(i.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},g.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(S,Object(i.a)({},e,{hideText:!0,key:t}))),!h&&r.a.createElement(y,{className:C.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===j,onChange:D}),r.a.createElement(u,{handleSearchBarToggle:_,isSearchBarExpanded:w}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,{className:"navbar__brand",onClick:I,to:a},null!=b&&r.a.createElement(d.a,{className:"navbar__logo",src:F,alt:b.alt}),null!=f&&r.a.createElement("strong",null,f)),!h&&E&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===j,onChange:D})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},g.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:I})))))))))},x=a(253),M=a(92),P=a.n(M);function I({to:e,href:t,label:a,...n}){const l=Object(o.a)(e);return r.a.createElement(s.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const D=({url:e,alt:t})=>r.a.createElement(d.a,{className:"footer__logo",alt:t,src:e});var F=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:i=[],logo:s={}}=n||{},u=Object(o.a)(s.src);return n?r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(d.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(x.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),i.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:P.a.footerLogoLink},r.a.createElement(D,{alt:s.alt,url:u})):r.a.createElement(D,{alt:s.alt,url:u})),l))):null};a(93);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:u}=t,{children:m,title:d,noFooter:h,description:f,image:b,keywords:p,permalink:g,version:v}=e,E=d?`${d} | ${i}`:`${i} - ${n}`,k=b||s,y=u+Object(o.a)(k),w=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(T,null),r.a.createElement("div",{className:"main-wrapper"},m),!h&&r.a.createElement(F,null))}},258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=d(l),o=d(a(227)),i=d(a(8)),s=d(a(259)),u=d(a(260)),m=a(261);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},260:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},261:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},263:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(94);t.a=e=>({id:t,...a})=>t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)},270:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(230),o=a(232),i=a(263),s=a(99),u=a.n(s);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?l.a.createElement(o.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e),pre:e=>l.a.createElement("pre",Object(n.a)({className:u.a.mdxCodeBlock},e)),h1:Object(i.a)("h1"),h2:Object(i.a)("h2"),h3:Object(i.a)("h3"),h4:Object(i.a)("h4"),h5:Object(i.a)("h5"),h6:Object(i.a)("h6")}},277:function(e,t,a){"use strict";var n=a(17);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(257);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);