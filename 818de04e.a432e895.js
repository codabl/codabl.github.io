(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(205)),c={},b={id:"reference/clients/python/docs/LanguageApi",title:"LanguageApi",description:"# brainrex.LanguageApi",source:"@site/docs/reference/clients/python/docs/LanguageApi.md",permalink:"/docs/reference/clients/python/docs/LanguageApi",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/reference/clients/python/docs/LanguageApi.md"},o=[{value:"Example",id:"example",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return type",id:"return-type",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"HTTP request headers",id:"http-request-headers",children:[]},{value:"Example",id:"example-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return type",id:"return-type-1",children:[]},{value:"Authorization",id:"authorization-1",children:[]},{value:"HTTP request headers",id:"http-request-headers-1",children:[]},{value:"Example",id:"example-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Return type",id:"return-type-2",children:[]},{value:"Authorization",id:"authorization-2",children:[]},{value:"HTTP request headers",id:"http-request-headers-2",children:[]}],p={rightToc:o},l="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"brainrexlanguageapi"},"brainrex.LanguageApi"),Object(i.b)("p",null,"All URIs are relative to ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://api.bitlongs.com"}),"https://api.bitlongs.com"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HTTP request"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/LanguageApi#language_get_crypto_entities"}),Object(i.b)("strong",{parentName:"a"},"language_get_crypto_entities"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"POST")," /entity/get_crypto_entities"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Named Entity Recognition software capable of understanding cryptocurrency and blockchain speficic language.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/LanguageApi#language_get_general_sentiment"}),Object(i.b)("strong",{parentName:"a"},"language_get_general_sentiment"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"POST")," /sentiment/get_general_sentiment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/LanguageApi#language_get_price_sentiment"}),Object(i.b)("strong",{parentName:"a"},"language_get_price_sentiment"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"POST")," /language/get_price_sentiment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sentiment analysis score using a model trained for buy signals.")))),Object(i.b)("h1",{id:"language_get_crypto_entities"},Object(i.b)("strong",{parentName:"h1"},"language_get_crypto_entities")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"language_get_crypto_entities(text)")),Object(i.b)("p",null,"Named Entity Recognition software capable of understanding cryptocurrency and blockchain speficic language."),Object(i.b)("p",null,"This endpoint ingest text and output known entities "),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport time\nimport brainrex\nfrom brainrex.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['x-api-key'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = brainrex.LanguageApi(brainrex.ApiClient(configuration))\ntext = brainrex.Text() # Text | String of text to be analyze for investor sentiment.\n\ntry:\n    # Named Entity Recognition software capable of understanding cryptocurrency and blockchain speficic language.\n    api_instance.language_get_crypto_entities(text)\nexcept ApiException as e:\n    print(\"Exception when calling LanguageApi->language_get_crypto_entities: %s\\n\" % e)\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"text")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/Text"}),Object(i.b)("strong",{parentName:"a"},"Text"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String of text to be analyze for investor sentiment."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"return-type"},"Return type"),Object(i.b)("p",null,"void (empty response body)"),Object(i.b)("h3",{id:"authorization"},"Authorization"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#APIKeyHeader"}),"APIKeyHeader")),Object(i.b)("h3",{id:"http-request-headers"},"HTTP request headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Content-Type"),": application/json"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Accept"),": application/json")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"[Back to top]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-api-endpoints"}),"[Back to API list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-models"}),"[Back to Model list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README"}),"[Back to README]")),Object(i.b)("h1",{id:"language_get_general_sentiment"},Object(i.b)("strong",{parentName:"h1"},"language_get_general_sentiment")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"str language_get_general_sentiment(text)")),Object(i.b)("p",null,"This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text."),Object(i.b)("p",null,"Returns a -1 to 1 score, depending on positive/negative sentiment"),Object(i.b)("h3",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport time\nimport brainrex\nfrom brainrex.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['x-api-key'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = brainrex.LanguageApi(brainrex.ApiClient(configuration))\ntext = brainrex.Text() # Text | String of text to be analyze for general sentiment.\n\ntry:\n    # This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text.\n    api_response = api_instance.language_get_general_sentiment(text)\n    pprint(api_response)\nexcept ApiException as e:\n    print(\"Exception when calling LanguageApi->language_get_general_sentiment: %s\\n\" % e)\n")),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"text")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/Text"}),Object(i.b)("strong",{parentName:"a"},"Text"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String of text to be analyze for general sentiment."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"return-type-1"},"Return type"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"str")),Object(i.b)("h3",{id:"authorization-1"},"Authorization"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#APIKeyHeader"}),"APIKeyHeader")),Object(i.b)("h3",{id:"http-request-headers-1"},"HTTP request headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Content-Type"),": application/json"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Accept"),": application/json")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"[Back to top]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-api-endpoints"}),"[Back to API list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-models"}),"[Back to Model list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README"}),"[Back to README]")),Object(i.b)("h1",{id:"language_get_price_sentiment"},Object(i.b)("strong",{parentName:"h1"},"language_get_price_sentiment")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"str language_get_price_sentiment(text)")),Object(i.b)("p",null,"Sentiment analysis score using a model trained for buy signals."),Object(i.b)("p",null,"Gives a 0 to 1 score, depending on buy/sell sentiment"),Object(i.b)("h3",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport time\nimport brainrex\nfrom brainrex.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['x-api-key'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = brainrex.LanguageApi(brainrex.ApiClient(configuration))\ntext = brainrex.Text() # Text | String of text to be analyze for investor sentiment.\n\ntry:\n    # Sentiment analysis score using a model trained for buy signals.\n    api_response = api_instance.language_get_price_sentiment(text)\n    pprint(api_response)\nexcept ApiException as e:\n    print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n")),Object(i.b)("h3",{id:"parameters-2"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"text")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/clients/python/docs/Text"}),Object(i.b)("strong",{parentName:"a"},"Text"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String of text to be analyze for investor sentiment."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"return-type-2"},"Return type"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"str")),Object(i.b)("h3",{id:"authorization-2"},"Authorization"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#APIKeyHeader"}),"APIKeyHeader")),Object(i.b)("h3",{id:"http-request-headers-2"},"HTTP request headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Content-Type"),": application/json"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Accept"),": application/json")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"[Back to top]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-api-endpoints"}),"[Back to API list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README#documentation-for-models"}),"[Back to Model list]")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/clients/python/README"}),"[Back to README]")))}s.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,g=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(g,b({ref:t},p,{components:n})):r.a.createElement(g,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=g;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[u]="string"==typeof e?e:a,c[1]=b;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);