/*! For license information please see 672ba3d6.a053fb16.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(263),c=a(257),i=a(253),o=(a(98),a(229));const s=Object(r.a)("h2");t.default=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{metadata:{team:a}}=t.customFields;return l.a.createElement(c.a,{title:"Community",description:"Join the BrainRex community. Connect with the core BrainRex team and other BrainRex users."},l.a.createElement("header",{className:"hero"},l.a.createElement("div",{className:"container container--fluid"},l.a.createElement("h1",null,"Join our Community"),l.a.createElement(i.a,{buttonClass:"highlight",center:!0,size:"lg"}))),l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement(s,{id:"connect"},"Reach us here"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://t.me/brainrex",target:"_blank",className:"panel panel--link text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-message-circle"})),l.a.createElement("div",{className:"panel--title"},"Chat"),l.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://twitter.com/brainrexAPI",target:"_blank",className:"panel panel--link text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),l.a.createElement("div",{className:"panel--title"},"@brainrexAPI via ",l.a.createElement("code",null,"#helpmybrain")),l.a.createElement("div",{className:"panel--description"},"Follow us in real-time"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://github.com/brainrexAPI",target:"_blank",className:"panel panel--link text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-github"})),l.a.createElement("div",{className:"panel--title"},"Github brinrexAPI"),l.a.createElement("div",{className:"panel--description"},"SDKs, sample code, and development"))))))))}},227:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},229:function(e,t,a){"use strict";var n=a(0),l=a(32);t.a=function(){return Object(n.useContext)(l.a)}},238:function(e,t,a){"use strict";var n=a(0);t.a=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const a=n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t]);return[e,a]}},253:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(227),c=a.n(r);a(91);t.a=function({block:e,buttonClass:t,center:a,description:n,size:r,width:i}){return l.a.createElement("div",{className:c()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,[`mailing-list--${r}`]:r})},!1!==n&&l.a.createElement("div",{className:"mailing-list--description"}),l.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},l.a.createElement("input",{className:c()("input",`input--${r}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:i}}),l.a.createElement("button",{className:c()("button",`button--${t||"primary"}`,`button--${r}`),type:"submit"},"Subscribe")))}},255:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a(229);function l(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,l=Date.parse(a.date),r=new Date,c=Math.abs(r-l),i=Math.ceil(c/864e5);let o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),i<30&&(!o||o<l)?a:null}function r(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(229);function l(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,l=Date.parse(a.date),r=new Date,c=Math.abs(r-l),i=Math.ceil(c/864e5);let o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),i<30&&(!o||o<l)?a:null}},257:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(254),c=a(229),i=a(249),o=a(1),s=a(230),u=function(){return null},d=a(252),m=a.n(d),h=a(258),f=a.n(h),b=a(227),p=a.n(b),v=a(89),g=a.n(v);const E=()=>l.a.createElement("span",{className:p()(g.a.toggle,g.a.moon)}),k=()=>l.a.createElement("span",{className:p()(g.a.toggle,g.a.sun)});var y=function(e){const{isClient:t}=Object(c.a)();return l.a.createElement(f.a,Object(o.a)({disabled:!t,icons:{checked:l.a.createElement(E,null),unchecked:l.a.createElement(k,null)}},e))},_=a(255),w=a(256);var N=e=>{const[t,a]=Object(n.useState)(!0),[l,r]=Object(n.useState)(0),[c,i]=Object(n.useState)(0),o=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),s=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-c,n=window.innerHeight;e<c||(l&&e>l?a(!1):e+n<t&&a(!0),r(e))};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[l,c]),{navbarRef:o,isNavbarVisible:t}},O=a(238),C=a(90),j=a.n(C);function x({href:e,hideIcon:t,hideText:a,label:n,onClick:r,to:c}){let u=function(e){switch(e.toLowerCase()){case"blog":return Object(_.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(w.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const d=Object(i.a)(c);return l.a.createElement(s.a,Object(o.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:r},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!t&&u.icon&&l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:`feather icon-${u.icon}`})," "),!a&&n,u.badge&&l.a.createElement("span",{className:p()("badge",`badge--${u.badgeStyle||"secondary"}`)},u.badge))}var S=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:r={}}=t,{navbar:d={},disableDarkMode:h=!1}=r,{title:f,logo:b={},links:v=[],hideOnScroll:g=!1}=d,[E,k]=Object(n.useState)(!1),[_,w]=Object(n.useState)(!1),[C,S]=Object(O.a)(),{navbarRef:T,isNavbarVisible:M}=N(g),I=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",k(!0)},[k]),P=Object(n.useCallback)(()=>{document.body.style.overflow="visible",k(!1)},[k]),F=Object(n.useCallback)(e=>S(e.target.checked?"dark":""),[S]),B=Object(i.a)(b.src);return l.a.createElement("nav",{ref:T,className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":E,[j.a.navbarHideable]:g,[j.a.navbarHidden]:!M})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(s.a,{className:"navbar__brand",to:a},null!=b&&l.a.createElement(m.a,{className:"navbar__logo",src:B,alt:b.alt}),null!=f&&l.a.createElement("strong",{className:_?j.a.hideLogoText:""},f)),v.filter(e=>"right"!==e.position).map((e,t)=>l.a.createElement(x,Object(o.a)({},e,{key:t})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},v.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(x,Object(o.a)({},e,{hideText:!0,key:t}))),!h&&l.a.createElement(y,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===C,onChange:F}),l.a.createElement(u,{handleSearchBarToggle:w,isSearchBarExpanded:_}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(s.a,{className:"navbar__brand",onClick:P,to:a},null!=b&&l.a.createElement(m.a,{className:"navbar__logo",src:B,alt:b.alt}),null!=f&&l.a.createElement("strong",null,f)),!h&&E&&l.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===C,onChange:F})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},v.map((e,t)=>l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(x,Object(o.a)({className:"menu__link"},e,{hideIcon:!0,onClick:P})))))))))},T=a(253),M=a(92),I=a.n(M);function P({to:e,href:t,label:a,...n}){const r=Object(i.a)(e);return l.a.createElement(s.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:r},n),a)}const F=({url:e,alt:t})=>l.a.createElement(m.a,{className:"footer__logo",alt:t,src:e});var B=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:o=[],logo:s={}}=n||{},u=Object(i.a)(s.src);return n?l.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},o&&o.length>0&&l.a.createElement("div",{className:"row footer__links"},l.a.createElement("div",{className:"col col--5 footer__col"},l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(m.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(T.a,{description:!1,width:"150px"})),l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},l.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},l.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},l.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},l.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),o.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(P,e)))):null))),(s||r)&&l.a.createElement("div",{className:"text--center"},s&&s.src&&l.a.createElement("div",{className:"margin-bottom--sm"},s.href?l.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:I.a.footerLogoLink},l.a.createElement(F,{alt:s.alt,url:u})):l.a.createElement(F,{alt:s.alt,url:u})),r))):null};a(93);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:o,themeConfig:{image:s},url:u}=t,{children:d,title:m,noFooter:h,description:f,image:b,keywords:p,permalink:v,version:g}=e,E=m?`${m} | ${o}`:`${o} - ${n}`,k=b||s,y=u+Object(i.a)(k),_=Object(i.a)(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&l.a.createElement("title",null,E),E&&l.a.createElement("meta",{property:"og:title",content:E}),a&&l.a.createElement("link",{rel:"shortcut icon",href:_}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),g&&l.a.createElement("meta",{name:"docsearch:version",content:g}),p&&p.length&&l.a.createElement("meta",{name:"keywords",content:p.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:y}),k&&l.a.createElement("meta",{property:"twitter:image",content:y}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),v&&l.a.createElement("meta",{property:"og:url",content:u+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary"})),l.a.createElement(S,null),l.a.createElement("div",{className:"main-wrapper"},d),!h&&l.a.createElement(B,null))}},258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),c=m(r),i=m(a(227)),o=m(a(8)),s=m(a(259)),u=m(a(260)),d=a(261);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,l=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),r=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},l,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},260:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},261:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},263:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(94);t.a=e=>({id:t,...a})=>t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):l.a.createElement(e,a)}}]);