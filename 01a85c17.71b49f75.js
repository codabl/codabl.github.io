(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),l=a.n(n),r=a(183),c=a(175);t.default=function(e){const{tags:t}=e,a={};Object.keys(t).forEach(e=>{const t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)});const n=Object.entries(a).sort(([e],[t])=>e===t?0:e>t?1:-1).map(([e,a])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),a.map(e=>l.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")),l.a.createElement("hr",null))).filter(e=>null!=e);return l.a.createElement(r.a,{title:"Blog Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},n)))))}},178:function(e,t,a){"use strict";var n=a(0);t.a=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const a=n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t]);return[e,a]}},179:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(172),c=a.n(r);a(87);t.a=function(e){var t,a=e.block,n=e.buttonClass,r=e.center,o=e.description,i=e.size,s=e.width;return l.a.createElement("div",{className:c()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":r},t["mailing-list--"+i]=i,t))},!1!==o&&l.a.createElement("div",{className:"mailing-list--description"}),l.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},l.a.createElement("input",{className:c()("input","input--"+i),name:"email",placeholder:"your@email.com",type:"email",style:{width:s}}),l.a.createElement("button",{className:c()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))}},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a(173);function l(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,l=Date.parse(a.date),r=new Date,c=Math.abs(r-l),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),o<30&&(!i||i<l)?a:null}function r(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(173);function l(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,l=Date.parse(a.date),r=new Date,c=Math.abs(r-l),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),o<30&&(!i||i<l)?a:null}},183:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(181),c=a(173),o=a(176),i=a(1),s=a(175),u=a(190),d=a(177),m=a.n(d),h=a(184),f=a(172),b=a.n(f),g=a(180),v=a(182),p=a(189),E=a(178),k=a(86),y=a.n(k);function _({href:e,hideIcon:t,hideText:a,label:n,onClick:r,to:c}){let u=function(e){switch(e.toLowerCase()){case"blog":return Object(g.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(v.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const d=Object(o.a)(c);return l.a.createElement(s.a,Object(i.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:r},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!t&&u.icon&&l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:`feather icon-${u.icon}`})," "),!a&&n,u.badge&&l.a.createElement("span",{className:b()("badge",`badge--${u.badgeStyle||"secondary"}`)},u.badge))}var w=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:r={}}=t,{navbar:d={},disableDarkMode:f=!1}=r,{title:g,logo:v={},links:k=[],hideOnScroll:w=!1}=d,[N,O]=Object(n.useState)(!1),[C,j]=Object(n.useState)(!1),[S,T]=Object(E.a)(),{navbarRef:x,isNavbarVisible:M}=Object(p.a)(w),F=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",O(!0)},[O]),I=Object(n.useCallback)(()=>{document.body.style.overflow="visible",O(!1)},[O]),B=Object(n.useCallback)(e=>T(e.target.checked?"dark":""),[T]),D=Object(o.a)(v.src);return l.a.createElement("nav",{ref:x,className:b()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":N,[y.a.navbarHideable]:w,[y.a.navbarHidden]:!M})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(s.a,{className:"navbar__brand",to:a},null!=v&&l.a.createElement(m.a,{className:"navbar__logo",src:D,alt:v.alt}),null!=g&&l.a.createElement("strong",{className:C?y.a.hideLogoText:""},g)),k.filter(e=>"right"!==e.position).map((e,t)=>l.a.createElement(_,Object(i.a)({},e,{key:t})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},k.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(_,Object(i.a)({},e,{hideText:!0,key:t}))),!f&&l.a.createElement(h.a,{className:y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===S,onChange:B}),l.a.createElement(u.a,{handleSearchBarToggle:j,isSearchBarExpanded:C}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(s.a,{className:"navbar__brand",onClick:I,to:a},null!=v&&l.a.createElement(m.a,{className:"navbar__logo",src:D,alt:v.alt}),null!=g&&l.a.createElement("strong",null,g)),!f&&N&&l.a.createElement(h.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===S,onChange:B})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},k.map((e,t)=>l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(_,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:I})))))))))},N=a(179),O=a(88),C=a.n(O);function j({to:e,href:t,label:a,...n}){const r=Object(o.a)(e);return l.a.createElement(s.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:r},n),a)}const S=({url:e,alt:t})=>l.a.createElement(m.a,{className:"footer__logo",alt:t,src:e});var T=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:i=[],logo:s={}}=n||{},u=Object(o.a)(s.src);return n?l.a.createElement("footer",{className:b()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},i&&i.length>0&&l.a.createElement("div",{className:"row footer__links"},l.a.createElement("div",{className:"col col--5 footer__col"},l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(m.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(N.a,{description:!1,width:"150px"})),l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},l.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},l.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},l.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},l.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),i.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(j,e)))):null))),(s||r)&&l.a.createElement("div",{className:"text--center"},s&&s.src&&l.a.createElement("div",{className:"margin-bottom--sm"},s.href?l.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},l.a.createElement(S,{alt:s.alt,url:u})):l.a.createElement(S,{alt:s.alt,url:u})),r))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:u}=t,{children:d,title:m,noFooter:h,description:f,image:b,keywords:g,permalink:v,version:p}=e,E=m?`${m} | ${i}`:`${i} - ${n}`,k=b||s,y=u+Object(o.a)(k),_=Object(o.a)(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&l.a.createElement("title",null,E),E&&l.a.createElement("meta",{property:"og:title",content:E}),a&&l.a.createElement("link",{rel:"shortcut icon",href:_}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),p&&l.a.createElement("meta",{name:"docsearch:version",content:p}),g&&g.length&&l.a.createElement("meta",{name:"keywords",content:g.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:y}),k&&l.a.createElement("meta",{property:"twitter:image",content:y}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),v&&l.a.createElement("meta",{property:"og:url",content:u+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary"})),l.a.createElement(w,null),l.a.createElement("div",{className:"main-wrapper"},d),!h&&l.a.createElement(T,null))}},184:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(185),o=a.n(c),i=a(173),s=a(172),u=a.n(s),d=a(85),m=a.n(d);const h=()=>r.a.createElement("span",{className:u()(m.a.toggle,m.a.moon)}),f=()=>r.a.createElement("span",{className:u()(m.a.toggle,m.a.sun)});t.a=function(e){const{isClient:t}=Object(i.a)();return r.a.createElement(o.a,Object(n.a)({disabled:!t,icons:{checked:r.a.createElement(h,null),unchecked:r.a.createElement(f,null)}},e))}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),c=m(r),o=m(a(172)),i=m(a(8)),s=m(a(186)),u=m(a(187)),d=a(188);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,l=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),r=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},l,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},189:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!0),[l,r]=Object(n.useState)(0),[c,o]=Object(n.useState)(0),i=Object(n.useCallback)(e=>{null!==e&&o(e.getBoundingClientRect().height)},[]),s=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-c,n=window.innerHeight;e<c||(l&&e>l?a(!1):e+n<t&&a(!0),r(e))};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[l,c]),{navbarRef:i,isNavbarVisible:t}}},190:function(e,t,a){"use strict";var n=()=>null;a.d(t,"a",(function(){return n}))}}]);