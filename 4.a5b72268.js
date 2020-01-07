/*! For license information please see 4.a5b72268.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{223:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},s=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},l=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n(335),d=n(337);t.STATUS={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};var h=Object.create(null),p=function(e){function n(n){var r=e.call(this,n)||this;return r._isMounted=!1,r.handleLoad=function(e){r._isMounted&&r.setState({content:e,status:t.STATUS.LOADED},r.getElement)},r.handleError=function(e){var n=r.props.onError,o="Browser does not support SVG"===e.message?t.STATUS.UNSUPPORTED:t.STATUS.FAILED;r._isMounted&&r.setState({status:o},(function(){"function"==typeof n&&n(e)}))},r.request=function(){var e=r.props,n=e.cacheRequests,o=e.src;try{return n&&(h[o]={content:"",status:t.STATUS.LOADING,queue:[]}),fetch(o).then((function(e){var t=e.headers.get("content-type"),n=s((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new d.InlineSVGError("Not Found");if(!["image/svg+xml","text/plain"].some((function(e){return n.indexOf(e)>=0})))throw new d.InlineSVGError("Content type isn't valid: "+n);return e.text()})).then((function(e){if(r.handleLoad(e),n){var i=h[o];i&&(i.content=e,i.status=t.STATUS.LOADED,i.queue=i.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){n&&delete h[o],r.handleError(e)}))}catch(i){r.handleError(new d.InlineSVGError(i.message))}},r.state={content:"",element:null,hasCache:!!n.cacheRequests&&!!h[n.src],status:t.STATUS.PENDING},r.hash=n.uniqueHash||d.randomString(8),r}return o(n,e),n.prototype.componentDidMount=function(){if(this._isMounted=!0,d.canUseDOM()){var e=this.state.status,n=this.props.src;try{if(e===t.STATUS.PENDING){if(!d.isSupportedEnvironment())throw new d.InlineSVGError("Browser does not support SVG");if(!n)throw new d.InlineSVGError("Missing src");this.load()}}catch(r){this.handleError(r)}}else this.handleError(new d.InlineSVGError("No DOM"))},n.prototype.componentDidUpdate=function(e,n){if(d.canUseDOM()){var r=this.state,o=r.hasCache,i=r.status,a=this.props,s=a.onLoad,l=a.src;if(n.status!==t.STATUS.READY&&i===t.STATUS.READY&&s&&s(l,o),e.src!==l){if(!l)return void this.handleError(new d.InlineSVGError("Missing src"));this.load()}}},n.prototype.componentWillUnmount=function(){this._isMounted=!1},n.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},n.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,o=void 0===r?"":r,i=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return i?(l(e.children).map((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes);n.forEach((function(e){var n=e.value.match(/url\((.*?)\)/);n&&n[1]&&(e.value=e.value.replace(n[0],"url("+o+n[1]+"__"+t.hash+")"))})),a.forEach((function(e){var r,o,i=n.find((function(t){return t.name===e}));!i||(r=e,o=i.value,s.indexOf(r)>=0&&o&&o.indexOf("#")<0)||(i.value=i.value+"__"+t.hash)}))}return e.children.length&&(e=t.updateSVGAttributes(e)),e})),e):e},n.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=this.processSVG(),o=u.default(r,{nodeOnly:!0});if(!(o&&o instanceof SVGSVGElement))throw new d.InlineSVGError("Could not convert the src to a DOM Node");var i=this.updateSVGAttributes(o);if(t){var a=i.querySelector("desc");a&&a.parentNode&&a.parentNode.removeChild(a);var s=document.createElement("desc");s.innerHTML=t,i.prepend(s)}if(n){var l=i.querySelector("title");l&&l.parentNode&&l.parentNode.removeChild(l);var c=document.createElement("title");c.innerHTML=n,i.prepend(c)}return i}catch(h){this.handleError(h)}},n.prototype.getElement=function(){try{var e=this.getNode(),n=u.default(e);if(!n||!c.isValidElement(n))throw new d.InlineSVGError("Could not convert the src to a React element");this.setState({element:n,status:t.STATUS.READY})}catch(r){this.handleError(new d.InlineSVGError(r.message))}},n.prototype.load=function(){var e=this;this._isMounted&&this.setState({content:"",element:null,status:t.STATUS.LOADING},(function(){var n=e.props,r=n.cacheRequests,o=n.src,i=r&&h[o];if(i)i.status===t.STATUS.LOADING?i.queue.push(e.handleLoad):i.status===t.STATUS.LOADED&&e.handleLoad(i.content);else{var a,s=o.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);s?a=s[1]?atob(s[2]):decodeURIComponent(s[2]):o.indexOf("<svg")>=0&&(a=o),a?e.handleLoad(a):e.request()}}))},n.prototype.render=function(){if(!d.canUseDOM())return null;var e=this.state,n=e.element,r=e.status,o=this.props,s=(o.baseURL,o.cacheRequests,o.children),l=void 0===s?null:s,u=(o.description,o.innerRef),h=o.loader,p=void 0===h?null:h,f=(o.onError,o.onLoad,o.preProcessor,o.src,o.title,o.uniqueHash,o.uniquifyIDs,a(o,["baseURL","cacheRequests","children","description","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs"]));return n?c.cloneElement(n,i({ref:u},f)):[t.STATUS.UNSUPPORTED,t.STATUS.FAILED].indexOf(r)>-1?l:p},n.defaultProps={cacheRequests:!0,uniquifyIDs:!1},n}(c.PureComponent);t.default=p},253:function(e,t,n){"use strict";var r=n(1),o=n(0),i=n.n(o),a=n(339),s=n.n(a),l=n(216),c=n(213),u=n.n(c),d=n(102),h=n.n(d);const p=()=>i.a.createElement("span",{className:u()(h.a.toggle,h.a.moon)}),f=()=>i.a.createElement("span",{className:u()(h.a.toggle,h.a.sun)});t.a=function(e){const{isClient:t}=Object(l.a)();return i.a.createElement(s.a,Object(r.a)({disabled:!t,icons:{checked:i.a.createElement(p,null),unchecked:i.a.createElement(f,null)}},e))}},254:function(e,t,n){"use strict";var r=n(0);t.a=e=>{const[t,n]=Object(r.useState)(!0),[o,i]=Object(r.useState)(0),[a,s]=Object(r.useState)(0),l=Object(r.useCallback)(e=>{null!==e&&s(e.getBoundingClientRect().height)},[]),c=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-a,r=window.innerHeight;e<a||(o&&e>o?n(!1):e+r<t&&n(!0),i(e))};return Object(r.useEffect)(()=>{if(e)return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[o,a]),{navbarRef:l,isNavbarVisible:t}}},256:function(e,t,n){"use strict";var r=()=>null;n.d(t,"a",(function(){return r}))},335:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=n(336);function l(e,t){if(void 0===t&&(t={}),!(e&&e instanceof Node))return null;var n,o=t.actions,c=void 0===o?[]:o,u=t.index,d=void 0===u?0:u,h=t.level,p=void 0===h?0:h,f=e,g=p+"-"+d,m=[];if(Array.isArray(c)&&c.forEach((function(t){t.condition(f,g,p)&&("function"==typeof t.pre&&((f=t.pre(f,g,p))instanceof Node||(f=e)),"function"==typeof t.post&&m.push(t.post(f,g,p)))})),m.length)return m;switch(f.nodeType){case 1:return a.createElement((n=f.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(n)?n:n.toLowerCase()),function(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),i(e.attributes).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=s.styleToObject(e.value);break;case"checked":case"disabled":case"selected":case"autoplay":case"controls":n[e.name]=e.name;break;default:n[s.possibleStandardNames[e.name]||e.name]=e.value}}))}return n}(f,g),function(e,t,n){var o=i(e).map((function(e,o){return l(e,r(r({},n),{index:o,level:t+1}))})).filter(Boolean);return o.length?o:null}(f.childNodes,p,t));case 3:var v=f.nodeValue.toString();if(/^\s+$/.test(v))return null;if(!f.parentNode)return v;var y=f.parentNode.nodeName.toLowerCase();return-1!==s.noTextChildNodes.indexOf(y)?(/\S/.test(v)&&console.warn("A textNode is not allowed inside '"+y+"'. Your text \""+v+'" will be ignored'),null):v;case 8:default:return null}}function c(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,o=t.selector,i=void 0===o?"body > *":o,a=t.type,s=void 0===a?"text/html":a;try{var c=(new DOMParser).parseFromString(e,s).querySelector(i);if(!(c instanceof Node))throw new Error("Error parsing input");return r?c:l(c,t)}catch(u){0}return null}t.convertFromNode=l,t.convertFromString=c,t.default=function(e,t){return void 0===t&&(t={}),"string"==typeof e?c(e,t):e instanceof Node?l(e,t):null}},336:function(e,t,n){"use strict";var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.styleToObject=function(e){return e.split(/ ?; ?/).reduce((function(e,t){var n=r(t.split(/ ?: ?/),2),o=n[0],i=n[1];return o&&i&&(e[o.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(i))?i:Number(i)),e}),{})},t.noTextChildNodes=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],t.possibleStandardNames={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"}},337:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(338);t.canUseDOM=function(){return i.canUseDOM},t.supportsInlineSVG=function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI};var a=function(e){function t(t,n){var r=e.call(this)||this;return r.name="InlineSVGError",r.message=t,r.data=n,r}return o(t,e),t}(Error);t.InlineSVGError=a,t.isSupportedEnvironment=function(){return t.supportsInlineSVG()&&"undefined"!=typeof window&&null!==window},t.randomString=function(e){for(var t,n="abcdefghijklmnopqrstuvwxyz",r=""+n+n.toUpperCase()+"1234567890",o="",i=0;i<e;i++)o+=(t=r)[Math.floor(Math.random()*t.length)];return o}},338:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=h(i),s=h(n(213)),l=h(n(8)),c=h(n(340)),u=h(n(341)),d=n(342);function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),i=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return a.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},a.default.createElement("div",{className:"react-toggle-track"},a.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),a.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),a.default.createElement("div",{className:"react-toggle-thumb"}),a.default.createElement("input",r({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(i.PureComponent);t.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:a.default.createElement(c.default,null),unchecked:a.default.createElement(u.default,null)}},p.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}}}]);