(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(6),r=(n(0),n(205)),o={title:"Extracting Entities Tutorial",sidebar_label:"Extracting Entities",description:"In Depth tutorial of how to perform sentiment analysis in text data using the BrainRex api."},l={id:"tutorials/analyzing-entities",title:"Extracting Entities Tutorial",description:"In Depth tutorial of how to perform sentiment analysis in text data using the BrainRex api.",source:"@site/docs/tutorials/analyzing-entities.md",permalink:"/docs/tutorials/analyzing-entities",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/tutorials/analyzing-entities.md",sidebar_label:"Extracting Entities",sidebar:"docs",previous:{title:"Analyzing Sentiment",permalink:"/docs/tutorials/analyzing-sentiment"},next:{title:"Anomaly Detection Tutorial",permalink:"/docs/tutorials/analyzing-anomalies"}},s=[{value:"We will learn how to install and use the sentiment API library. For python",id:"we-will-learn-how-to-install-and-use-the-sentiment-api-library-for-python",children:[]},{value:"Audience",id:"audience",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Lets download a sample dataset we provide",id:"lets-download-a-sample-dataset-we-provide",children:[]}],p={rightToc:s},c="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"we-will-learn-how-to-install-and-use-the-sentiment-api-library-for-python"},"We will learn how to install and use the sentiment API library. For python"),Object(r.b)("h2",{id:"audience"},"Audience"),Object(r.b)("p",null,"This tutorial is designed to let you quickly start exploring and developing applications with the BrainrexNatural Language API."),Object(r.b)("p",null,"This tutorial steps through a Natural Language API application using Python code. The purpose here is not to explain the Python client libraries, but to explain how to make calls to the Natural Language API. Applications in Java and Node.js are essentially similar. Consult the Natural Language API Samples for samples in other languages (including this sample within the tutorial)."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"In order to run this tutorial you need to do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You've installed the Brainrex Language Client for Python"),Object(r.b)("li",{parentName:"ul"},"You have signed up for the Brainrex Free tier."),Object(r.b)("li",{parentName:"ul"},"You have created API keys"),Object(r.b)("li",{parentName:"ul"},"Store API keys as enviroment variables."),Object(r.b)("li",{parentName:"ul"},"Basic familiarity with Python programming."),Object(r.b)("li",{parentName:"ul"},"Set up your Python development environment. It is recommended that you have the latest version of Python 3.8.0, pip, and -virtualenv installed on your system.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"!pip install brainrex\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Requirement already satisfied: brainrex in /home/ga/.local/lib/python3.6/site-packages (1.0.1)\nRequirement already satisfied: python-dateutil>=2.1 in /usr/local/lib/python3.6/dist-packages (from brainrex) (2.8.0)\nRequirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.6/dist-packages (from brainrex) (2019.9.11)\nRequirement already satisfied: six>=1.10 in /usr/local/lib/python3.6/dist-packages (from brainrex) (1.12.0)\nRequirement already satisfied: urllib3>=1.23 in /usr/local/lib/python3.6/dist-packages (from brainrex) (1.25.6)\n\x1b[33mYou are using pip version 19.0.3, however version 19.3.1 is available.\nYou should consider upgrading via the 'pip install --upgrade pip' command.\x1b[0m\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"### Making your first call quickstart\nfrom __future__ import print_function\nimport time\nimport brainrex\nfrom brainrex.rest import ApiException\nfrom pprint import pprint\n\n# Go to console.brainrex.com/signup > APIs > Subcribe to an API > Dashboard > API Key > Copy\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'INSERT_YOUR_API_KEY_HERE' # Paste key here\n\n# create an instance of the API class\napi_instance = brainrex.LanguageApi(brainrex.ApiClient(configuration))\ntext = brainrex.Text(\"bitcoin is the best\") # Text | String of text to be analyze for investor sentiment.\n\ntry:\n    # Sentiment analysis score using a model trained for buy signals.\n    api_response = api_instance.language_get_price_sentiment(text)\n    pprint(api_response)\nexcept ApiException as e:\n    print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n\n")),Object(r.b)("h2",{id:"lets-download-a-sample-dataset-we-provide"},"Lets download a sample dataset we provide"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import pandas as pd\n\ntweets_dataframe = pd.read_csv('https://s3-eu-west-1.amazonaws.com/brainrex.com/data/sample_text_data.csv')\ntweetList= tweets_dataframe.Tweet.to_list()\ntweetList[:5]\n\nfor index, tweet in enumerate(tweetList[344:366]): # Change the number of posts you want to analyze by changing this values. [start:end]\n    try:\n        text = brainrex.Text(tweet)\n        entities = api_instance.language_get_crypto_entities(text)\n        # TODO add response\n        print('Sentence {} investor score of {}, general sentiment score {}'.format(index, investor_score, sentiment_score))\n\n    except ApiException as e:\n        print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n\n")))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l({ref:t},p,{components:n})):i.a.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);