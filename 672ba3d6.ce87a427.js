/*! For license information please see 672ba3d6.ce87a427.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(232),c=t(222),i=t(218),s=(t(97),t(212));const o=Object(l.a)("h2");a.default=function(){const e=Object(s.a)(),{siteConfig:a={}}=e,{metadata:{team:t}}=a.customFields;return r.a.createElement(c.a,{title:"Community",description:"Join the BrainRex community. Stay up with our meetups and events. Tutorials and blogs and more."},r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"BrainRex Community"),r.a.createElement(i.a,{buttonClass:"highlight",center:!0,size:"lg"}))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(o,{id:"connect"},"Connect"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://t.me/brainrex",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Chat"),r.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://twitter.com/brainrexAI",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),r.a.createElement("div",{className:"panel--title"},"@brainrexAI via ",r.a.createElement("code",null,"#brainrexhelp")),r.a.createElement("div",{className:"panel--description"},"Follow us in real-time"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/brainrexAPI",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github brainrexAPI"),r.a.createElement("div",{className:"panel--description"},"Libraries, examples, and boilerplate code."))))))))}},210:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},215:function(e,a,t){"use strict";var n=t(0);a.a=()=>{const[e,a]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(e){console.error(e)}},[a]);const t=n.useCallback(e=>{try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}},[a]);return[e,t]}},217:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l}));var n=t(212);function r(){const e=Object(n.a)(),{siteConfig:a={}}=e,{metadata:{latest_post:t}}=a.customFields,r=Date.parse(t.date),l=new Date,c=Math.abs(l-r),i=Math.ceil(c/864e5);let s=null;return"undefined"!=typeof window&&(s=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),i<30&&(!s||s<r)?t:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},218:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(210),c=t.n(l);t(87);a.a=function({block:e,buttonClass:a,center:t,description:n,size:l,width:i}){return r.a.createElement("div",{className:c()("mailing-list",{"mailing-list--block":e,"mailing-list--center":t,[`mailing-list--${l}`]:l})},!1!==n&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:c()("input",`input--${l}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:i}}),r.a.createElement("button",{className:c()("button",`button--${a||"primary"}`,`button--${l}`),type:"submit"},"Subscribe")))}},221:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(212);function r(){const e=Object(n.a)(),{siteConfig:a={}}=e,{metadata:{latest_release:t}}=a.customFields,r=Date.parse(t.date),l=new Date,c=Math.abs(l-r),i=Math.ceil(c/864e5);let s=null;return"undefined"!=typeof window&&(s=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),i<30&&(!s||s<r)?t:null}},222:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(219),c=t(212),i=t(214),s=t(1),o=t(211),m=t(257),d=t(216),u=t.n(d),b=t(234),h=t(210),g=t.n(h),E=t(217),p=t(221),f=t(235),v=t(215),N=t(86),_=t.n(N);function k({href:e,hideIcon:a,hideText:t,label:n,onClick:l,to:c}){let m=function(e){switch(e.toLowerCase()){case"blog":return Object(E.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(p.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const d=Object(i.a)(c);return r.a.createElement(o.a,Object(s.a)({className:"navbar__item navbar__link",title:t?n:null,onClick:l},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!a&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${m.icon}`})," "),!t&&n,m.badge&&r.a.createElement("span",{className:g()("badge",`badge--${m.badgeStyle||"secondary"}`)},m.badge))}var w=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{baseUrl:t,themeConfig:l={}}=a,{navbar:d={},disableDarkMode:h=!1}=l,{title:E,logo:p={},links:N=[],hideOnScroll:w=!1}=d,[y,x]=Object(n.useState)(!1),[C,O]=Object(n.useState)(!1),[j,I]=Object(v.a)(),{navbarRef:S,isNavbarVisible:A}=Object(f.a)(w),D=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",x(!0)},[x]),M=Object(n.useCallback)(()=>{document.body.style.overflow="visible",x(!1)},[x]),$=Object(n.useCallback)(e=>I(e.target.checked?"dark":""),[I]),T=Object(i.a)(p.src);return r.a.createElement("nav",{ref:S,className:g()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":y,[_.a.navbarHideable]:w,[_.a.navbarHidden]:!A})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,{className:"navbar__brand",to:t},null!=p&&r.a.createElement(u.a,{className:"navbar__logo",src:T,alt:p.alt}),null!=E&&r.a.createElement("strong",{className:C?_.a.hideLogoText:""},E)),N.filter(e=>"right"!==e.position).map((e,a)=>r.a.createElement(k,Object(s.a)({},e,{key:a})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},N.filter(e=>"right"===e.position).map((e,a)=>r.a.createElement(k,Object(s.a)({},e,{hideText:!0,key:a}))),!h&&r.a.createElement(b.a,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===j,onChange:$}),r.a.createElement(m.a,{handleSearchBarToggle:O,isSearchBarExpanded:C}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,{className:"navbar__brand",onClick:M,to:t},null!=p&&r.a.createElement(u.a,{className:"navbar__logo",src:T,alt:p.alt}),null!=E&&r.a.createElement("strong",null,E)),!h&&y&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===j,onChange:$})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},N.map((e,a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(k,Object(s.a)({className:"menu__link"},e,{hideIcon:!0,onClick:M})))))))))},y=t(218),x=t(88),C=t.n(x);function O({to:e,href:a,label:t,...n}){const l=Object(i.a)(e);return r.a.createElement(o.a,Object(s.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},n),t)}const j=({url:e,alt:a})=>r.a.createElement(u.a,{className:"footer__logo",alt:a,src:e});var I=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:l,links:s=[],logo:o={}}=n||{},m=Object(i.a)(o.src);return n?r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"BrainRex",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(y.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/brainrexAPI",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"BrainRex's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://t.me/brainrex",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Telegram Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/brainrexAPI",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Brainrex's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://medium.com/brainrex",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"BrainRex's Medium feed"})))),s.map((e,a)=>r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(O,e)))):null))),(o||l)&&r.a.createElement("div",{className:"text--center"},o&&o.src&&r.a.createElement("div",{className:"margin-bottom--sm"},o.href?r.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(j,{alt:o.alt,url:m})):r.a.createElement(j,{alt:o.alt,url:m})),l))):null};t(89);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,tagline:n,title:s,themeConfig:{image:o},url:m}=a,{children:d,title:u,noFooter:b,description:h,image:g,keywords:E,permalink:p,version:f}=e,v=u?`${u} | ${s}`:`${s} - ${n}`,N=g||o,_=m+Object(i.a)(N),k=Object(i.a)(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),t&&r.a.createElement("link",{rel:"shortcut icon",href:k}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),f&&r.a.createElement("meta",{name:"docsearch:version",content:f}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:_}),N&&r.a.createElement("meta",{property:"twitter:image",content:_}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),p&&r.a.createElement("meta",{property:"og:url",content:m+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(w,null),r.a.createElement("div",{className:"main-wrapper"},d),!b&&r.a.createElement(I,null))}},232:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(92);a.a=e=>({id:a,...t})=>a?r.a.createElement(e,t,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:a}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${a}`,title:"Direct link to heading"},"#"),t.children):r.a.createElement(e,t)}}]);