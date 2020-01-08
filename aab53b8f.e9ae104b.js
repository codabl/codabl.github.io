(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(205)),o={title:"Anomaly Detection Tutorial",sidebar_label:"Analyzing Anomalies",description:"In Depth tutorial of how to perform anomaly detection in time series using the BrainRex API."},c={id:"tutorials/analyzing-anomalies",title:"Anomaly Detection Tutorial",description:"In Depth tutorial of how to perform anomaly detection in time series using the BrainRex API.",source:"@site/docs/tutorials/analyzing-anomalies.md",permalink:"/docs/tutorials/analyzing-anomalies",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/tutorials/analyzing-anomalies.md",sidebar_label:"Analyzing Anomalies",sidebar:"docs",previous:{title:"Extracting Entities Tutorial",permalink:"/docs/tutorials/analyzing-entities"},next:{title:"Extracting Crypto Exchange DATA",permalink:"/docs/tutorials/extracting-exchange-data"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]}],s={rightToc:l},p="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"In order to run this tutorial you need to do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You've installed the Brainrex Language Client for Python"),Object(i.b)("li",{parentName:"ul"},"You have signed up for the Brainrex Free tier."),Object(i.b)("li",{parentName:"ul"},"You have created API keys"),Object(i.b)("li",{parentName:"ul"},"Store API keys as enviroment variables."),Object(i.b)("li",{parentName:"ul"},"Basic familiarity with Python programming."),Object(i.b)("li",{parentName:"ul"},"Set up your Python development environment. It is recommended that you have the latest version of Python 3.8.0, pip, and -virtualenv installed on your system.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport time\nfrom pprint import pprint\nimport pandas as pd\n\nimport brainrex\nfrom brainrex.rest import ApiException\n\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'INSERT_API_KEY_HERE'\n\n# create an instance of the API class\napi_instance = brainrex.AnomalyApi(brainrex.ApiClient(configuration))\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# Download the examples Time Series data we provide. This dataset was extracted from the Coinbase PRO exchange using the Integrations API. \nTIME_SERIES_DATA_PATH="https://s3-eu-west-1.amazonaws.com/brainrex.com/data/request-data.csv"\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from brainrex.models import PointTimeSeries\nseries = []\ndata_file = pd.read_csv(TIME_SERIES_DATA_PATH, header=None, encoding='utf-8', parse_dates=[0])\nfor index, row in data_file.iterrows():\n    series.append(brainrex.PointTimeSeries(timestamp=row[0], value=row[1]))\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'request = brainrex.TimeSeries() # TimeSeries | Time Series to be analyzed, with the following format. (optional)\n\ntry:\n    # Detects anomaly in historical data\n    api_response = api_instance.anomaly_batch(request=series)\n    pprint(api_response)\nexcept ApiException as e:\n    print("Exception when calling AnomalyApi->anomaly_batch: %s\\n" % e)\n\n')))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);