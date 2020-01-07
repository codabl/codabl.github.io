/*! For license information please see 01a85c17.23cba991.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),l=a(230),c=a(215);t.default=function(e){const{tags:t}=e,a={};Object.keys(t).forEach(e=>{const t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)});const n=Object.entries(a).sort(([e],[t])=>e===t?0:e>t?1:-1).map(([e,a])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),a.map(e=>r.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")),r.a.createElement("hr",null))).filter(e=>null!=e);return r.a.createElement(l.a,{title:"Blog Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}},213:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},216:function(e,t,a){"use strict";var n=a(0),r=a(32);t.a=function(){return Object(n.useContext)(r.a)}},221:function(e,t,a){"use strict";var n=a(0);t.a=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const a=n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t]);return[e,a]}},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(216);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),o<30&&(!i||i<r)?a:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(213),c=a.n(l);a(89);t.a=function({block:e,buttonClass:t,center:a,description:n,size:l,width:o}){return r.a.createElement("div",{className:c()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,[`mailing-list--${l}`]:l})},!1!==n&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:c()("input",`input--${l}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:c()("button",`button--${t||"primary"}`,`button--${l}`),type:"submit"},"Subscribe")))}},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(216);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),o=Math.ceil(c/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),o<30&&(!i||i<r)?a:null}},230:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(227),c=a(216),o=a(220),i=a(1),s=a(215),m=a(256),d=a(223),u=a.n(d),b=a(253),g=a(213),f=a.n(g),h=a(225),E=a(229),p=a(254),v=a(221),_=a(88),k=a.n(_);function w({href:e,hideIcon:t,hideText:a,label:n,onClick:l,to:c}){let m=function(e){switch(e.toLowerCase()){case"blog":return Object(h.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(E.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const d=Object(o.a)(c);return r.a.createElement(s.a,Object(i.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:l},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!t&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${m.icon}`})," "),!a&&n,m.badge&&r.a.createElement("span",{className:f()("badge",`badge--${m.badgeStyle||"secondary"}`)},m.badge))}var N=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:d={},disableDarkMode:g=!1}=l,{title:h,logo:E={},links:_=[],hideOnScroll:N=!1}=d,[y,O]=Object(n.useState)(!1),[j,C]=Object(n.useState)(!1),[x,S]=Object(v.a)(),{navbarRef:I,isNavbarVisible:D}=Object(p.a)(N),M=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",O(!0)},[O]),T=Object(n.useCallback)(()=>{document.body.style.overflow="visible",O(!1)},[O]),$=Object(n.useCallback)(e=>S(e.target.checked?"dark":""),[S]),V=Object(o.a)(E.src);return r.a.createElement("nav",{ref:I,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":y,[k.a.navbarHideable]:N,[k.a.navbarHidden]:!D})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,{className:"navbar__brand",to:a},null!=E&&r.a.createElement(u.a,{className:"navbar__logo",src:V,alt:E.alt}),null!=h&&r.a.createElement("strong",{className:j?k.a.hideLogoText:""},h)),_.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(w,Object(i.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},_.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(w,Object(i.a)({},e,{hideText:!0,key:t}))),!g&&r.a.createElement(b.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===x,onChange:$}),r.a.createElement(m.a,{handleSearchBarToggle:C,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,{className:"navbar__brand",onClick:T,to:a},null!=E&&r.a.createElement(u.a,{className:"navbar__logo",src:V,alt:E.alt}),null!=h&&r.a.createElement("strong",null,h)),!g&&y&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===x,onChange:$})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},_.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(w,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:T})))))))))},y=a(226),O=a(90),j=a.n(O);function C({to:e,href:t,label:a,...n}){const l=Object(o.a)(e);return r.a.createElement(s.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const x=({url:e,alt:t})=>r.a.createElement(u.a,{className:"footer__logo",alt:t,src:e});var S=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:i=[],logo:s={}}=n||{},m=Object(o.a)(s.src);return n?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(y.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),i.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(C,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:j.a.footerLogoLink},r.a.createElement(x,{alt:s.alt,url:m})):r.a.createElement(x,{alt:s.alt,url:m})),l))):null};a(91);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:m}=t,{children:d,title:u,noFooter:b,description:g,image:f,keywords:h,permalink:E,version:p}=e,v=u?`${u} | ${i}`:`${i} - ${n}`,_=f||s,k=m+Object(o.a)(_),w=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:k}),_&&r.a.createElement("meta",{property:"twitter:image",content:k}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),E&&r.a.createElement("meta",{property:"og:url",content:m+E}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},d),!b&&r.a.createElement(S,null))}}}]);