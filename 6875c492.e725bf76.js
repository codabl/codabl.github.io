/*! For license information please see 6875c492.e725bf76.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(256),l=a(466),D=a(226);t.default=function(e){const{metadata:t,items:a}=e,{allTagsPath:n,name:c,count:i}=t;return r.a.createElement(u.a,{title:`Blog | Tagged "${c}"`,description:`Blog | Tagged "${c}"`},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i,' post(s) tagged with "',c,'"'),r.a.createElement(D.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map(({content:e})=>r.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},224:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===u)for(var D in n)a.call(n,D)&&n[D]&&e.push(D)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},242:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(225);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,r=Date.parse(a.date),u=new Date,l=Math.abs(u-r),D=Math.ceil(l/864e5);let c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),D<30&&(!c||c<r)?a:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("releaseViewedAt",(new Date).getTime())}},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(224),l=a.n(u);a(87);t.a=function({block:e,buttonClass:t,center:a,description:n,size:u,width:D}){return r.a.createElement("div",{className:l()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,[`mailing-list--${u}`]:u})},!1!==n&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:l()("input",`input--${u}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:D}}),r.a.createElement("button",{className:l()("button",`button--${t||"primary"}`,`button--${u}`),type:"submit"},"Subscribe")))}},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(225);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,r=Date.parse(a.date),u=new Date,l=Math.abs(u-r),D=Math.ceil(l/864e5);let c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),D<30&&(!c||c<r)?a:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},256:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(255),l=a(225),D=a(232),c=a(1),i=a(226),o=a(314),s=a(250),m=a.n(s),d=a(312),E=a(224),f=a.n(E),g=a(254),b=a(242),F=a(313),p=a(257),h=a(86),y=a.n(h);function v({href:e,hideIcon:t,hideText:a,label:n,onClick:u,to:l}){let o=function(e){switch(e.toLowerCase()){case"blog":return Object(g.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(b.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const s=Object(D.a)(l);return r.a.createElement(i.a,Object(c.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:u},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:s}),!t&&o.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${o.icon}`})," "),!a&&n,o.badge&&r.a.createElement("span",{className:f()("badge",`badge--${o.badgeStyle||"secondary"}`)},o.badge))}var C=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:u={}}=t,{navbar:s={},disableDarkMode:E=!1}=u,{title:g,logo:b={},links:h=[],hideOnScroll:C=!1}=s,[N,w]=Object(n.useState)(!1),[k,O]=Object(n.useState)(!1),[_,A]=Object(p.a)(),{navbarRef:j,isNavbarVisible:M}=Object(F.a)(C),T=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",w(!0)},[w]),B=Object(n.useCallback)(()=>{document.body.style.overflow="visible",w(!1)},[w]),S=Object(n.useCallback)(e=>A(e.target.checked?"dark":""),[A]),x=Object(D.a)(b.src);return r.a.createElement("nav",{ref:j,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":N,[y.a.navbarHideable]:C,[y.a.navbarHidden]:!M})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:T,onKeyDown:T},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:a},null!=b&&r.a.createElement(m.a,{className:"navbar__logo",src:x,alt:b.alt}),null!=g&&r.a.createElement("strong",{className:k?y.a.hideLogoText:""},g)),h.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(v,Object(c.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},h.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(v,Object(c.a)({},e,{hideText:!0,key:t}))),!E&&r.a.createElement(d.a,{className:y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===_,onChange:S}),r.a.createElement(o.a,{handleSearchBarToggle:O,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:B,to:a},null!=b&&r.a.createElement(m.a,{className:"navbar__logo",src:x,alt:b.alt}),null!=g&&r.a.createElement("strong",null,g)),!E&&N&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===_,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},h.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(v,Object(c.a)({className:"menu__link"},e,{hideIcon:!0,onClick:B})))))))))},N=a(251),w=a(88),k=a.n(w);function O({to:e,href:t,label:a,...n}){const u=Object(D.a)(e);return r.a.createElement(i.a,Object(c.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:u},n),a)}const _=({url:e,alt:t})=>r.a.createElement(m.a,{className:"footer__logo",alt:t,src:e});var A=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:u,links:c=[],logo:i={}}=n||{},o=Object(D.a)(i.src);return n?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(m.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(N.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),c.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(O,e)))):null))),(i||u)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:k.a.footerLogoLink},r.a.createElement(_,{alt:i.alt,url:o})):r.a.createElement(_,{alt:i.alt,url:o})),u))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,tagline:n,title:c,themeConfig:{image:i},url:o}=t,{children:s,title:m,noFooter:d,description:E,image:f,keywords:g,permalink:b,version:F}=e,p=m?`${m} | ${c}`:`${c} - ${n}`,h=f||i,y=o+Object(D.a)(h),v=Object(D.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),a&&r.a.createElement("link",{rel:"shortcut icon",href:v}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),F&&r.a.createElement("meta",{name:"docsearch:version",content:F}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),h&&r.a.createElement("meta",{property:"og:image",content:y}),h&&r.a.createElement("meta",{property:"twitter:image",content:y}),h&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${p}`}),b&&r.a.createElement("meta",{property:"og:url",content:o+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(C,null),r.a.createElement("div",{className:"main-wrapper"},s),!d&&r.a.createElement(A,null))}},268:function(e,t,a){"use strict";(function(e){var n=a(1),r=a(0),u=a.n(r),l=a(324),D=a(315),c=a.n(D),i=a(280),o=a(224),s=a.n(o),m=a(322),d=a.n(m),E=a(316),f=a.n(E),g=a(225),b=a(90),F=a.n(b),p=a(257);(void 0!==e?e:window).Prism=i.a,a(317),a(318),a(319),a(320),a(321);const h=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:D={}}}}=Object(g.a)(),[i,o]=Object(r.useState)(!1),m=Object(r.useRef)(null),E=Object(r.useRef)(null),[b]=Object(p.a)();let y=[];if(a&&h.test(a)){const e=a.match(h)[1];y=f.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return E.current&&(e=new c.a(E.current,{target:()=>m.current})),()=>{e&&e.destroy()}},[E.current,m.current]);let v=t&&t.replace(/language-/,"");!v&&D.defaultLanguage&&(v=D.defaultLanguage);const C=()=>{window.getSelection().empty(),o(!0),setTimeout(()=>o(!1),2e3)};let N="dark"==b?D.darkTheme:D.theme;return u.a.createElement(l.a,Object(n.a)({},l.b,{theme:N||d.a,code:e.trim(),language:v}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:l})=>u.a.createElement("div",{className:F.a.codeBlockWrapper},u.a.createElement("pre",{ref:m,className:s()(e,F.a.codeBlock),style:t},a.map((e,t)=>{const a=r({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),u.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>u.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))))})),u.a.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:F.a.copyButton,onClick:C},i?"Copied":"Copy")))}}).call(this,a(48))},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(93);t.a=e=>({id:t,...a})=>t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)},326:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(355),r=a.n(n);function u(e){const t=new r.a;return e.map(e=>{let a=e;return"string"==typeof e&&(a={label:e,permalink:`/blog/tags/${t.slug(e)}`}),function(e){const t=e.label.split(": ",2),a=t[0],n=t[1];let r="primary";switch(a){case"domain":r="blue";break;case"type":r="pink"}return{category:a,label:e.label,permalink:e.permalink,style:r,value:n}}(a)})}},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):D({},t,{},e)),a},s=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=o(a),d=n,E=s["".concat(l,".").concat(d)]||s[d]||m[d]||u;return a?r.a.createElement(E,D({ref:t},i,{components:a})):r.a.createElement(E,D({ref:t},i))}));d.displayName="MDXCreateElement"},346:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),l=a(226),D=a(268),c=a(273),i=a(96),o=a.n(i);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?u.a.createElement(D.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?u.a.createElement("a",e):u.a.createElement(l.a,e),pre:e=>u.a.createElement("pre",Object(n.a)({className:o.a.mdxCodeBlock},e)),h1:Object(c.a)("h1"),h2:Object(c.a)("h2"),h3:Object(c.a)("h3"),h4:Object(c.a)("h4"),h5:Object(c.a)("h5"),h6:Object(c.a)("h6")}},350:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(224),l=a.n(u),D=a(225);a(97);t.a=function({className:e,id:t,inline:a,nameSuffix:n,rel:u,size:c,subTitle:i,vertical:o}){const s=Object(D.a)(),{siteConfig:m={}}=s,{metadata:{team:d}}=m.customFields,E=d.find(e=>e.id==t)||d.find(e=>"ben"==e.id);return a?r.a.createElement("span",{className:"avatar avatar--inline"},r.a.createElement("img",{className:l()("avatar__photo",`avatar__photo--${c}`),src:E.avatar}),E.name):r.a.createElement("div",{className:l()("avatar",e,{[`avatar--${c}`]:c,"avatar--inline":a,"avatar--vertical":o})},r.a.createElement("img",{className:l()("avatar__photo",`avatar__photo--${c}`),src:E.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:E.github,target:"_blank",rel:u},E.name),n),!1!==i&&r.a.createElement("small",{className:"avatar__subtitle"},i||"Vector core team")))}},351:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(226),l=a(224),D=a.n(l),c=a(326),i=a(98),o=a.n(i);t.a=function({tags:e,valuesOnly:t}){const a=Object(c.a)(e);return r.a.createElement("div",{className:o.a.tags},a.map((e,a)=>r.a.createElement(u.a,{key:a,to:e.permalink+"/",className:D()("badge","badge--rounded",`badge--${e.style}`)},t?e.value:e.label)))}},352:function(e,t,a){var n;!function(r){"use strict";var u,l,D,c=(u=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,D=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var d=a?"getUTC":"get",E=e[d+"Date"](),f=e[d+"Day"](),g=e[d+"Month"](),b=e[d+"FullYear"](),F=e[d+"Hours"](),p=e[d+"Minutes"](),h=e[d+"Seconds"](),y=e[d+"Milliseconds"](),v=a?0:e.getTimezoneOffset(),C=o(e),N=s(e),w={d:E,dd:i(E),ddd:c.i18n.dayNames[f],dddd:c.i18n.dayNames[f+7],m:g+1,mm:i(g+1),mmm:c.i18n.monthNames[g],mmmm:c.i18n.monthNames[g+12],yy:String(b).slice(2),yyyy:b,h:F%12||12,hh:i(F%12||12),H:F,HH:i(F),M:p,MM:i(p),s:h,ss:i(h),l:i(y,3),L:i(Math.round(y/10)),t:F<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:F<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:F<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:F<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(l)||[""]).pop().replace(D,""),o:(v>0?"-":"+")+i(100*Math.floor(Math.abs(v)/60)+Math.abs(v)%60,4),S:["th","st","nd","rd"][E%10>3?0:(E%100-E%10!=10)*E%10],W:C,N:N};return t.replace(u,(function(e){return e in w?w[e]:e.slice(1,e.length-1)}))});function i(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function o(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function s(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(t,a,t,e))||(e.exports=n)}()},355:function(e,t,a){var n=a(356);e.exports=D;var r=Object.hasOwnProperty,u=/\s/g,l=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function D(){if(!(this instanceof D))return new D;this.reset()}D.prototype.slug=function(e,t){for(var a=function(e,t){if("string"!=typeof e)return"";t||(e=e.toLowerCase());return e.trim().replace(l,"").replace(n(),"").replace(u,"-")}(e,!0===t),D=a;r.call(this.occurrences,a);)this.occurrences[D]++,a=D+"-"+this.occurrences[D];return this.occurrences[a]=0,a},D.prototype.reset=function(){this.occurrences=Object.create(null)}},356:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},465:function(e,t,a){e.exports=a(467)},466:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(350),l=a(351),D=a(226),c=(a(346),a(329),a(224)),i=a.n(c),o=a(352),s=a.n(o),m=a(326),d=a(465),E=a.n(d);a(102);t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:c,isBlogPostPage:o=!1}=e,{date:d,description:f,permalink:g,tags:b}=n,{author_id:F,title:p}=a,h=E()(t.toString()),y=new Date(Date.parse(d)),v=Object(m.a)(b).find(e=>"domain"==e.category),C=v?v.value:null;return r.a.createElement(D.a,{to:g+"/",className:i()("blog-post-item","domain-bg","domain-bg--hover",`domain-bg--${C}`)},r.a.createElement("article",null,r.a.createElement("h2",null,p),r.a.createElement("div",{className:"blog-post-item--subtitle"},f),r.a.createElement(u.a,{id:F,size:"sm",subTitle:r.a.createElement(r.a.Fragment,null,r.a.createElement("time",{pubdate:"pubdate",dateTime:y.toISOString()},s()(y,"mmm dS"))," / ",h.text),rel:"author"}),r.a.createElement(l.a,{tags:b})))}},467:function(e,t,a){"use strict";function n(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,r,u=0,l=0,D=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||n;a(e[l]);)l++;for(;a(e[D]);)D--;for(r=l;r<=D;){for(;r<=D&&!a(e[r]);r++);for(u++;r<=D&&a(e[r]);r++);}var c=u/t.wordsPerMinute,i=60*c*1e3;return{text:Math.ceil(c.toFixed(2))+" min read",minutes:c,time:i,words:u}}}}]);