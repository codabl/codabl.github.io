(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),o=(n(0),n(207)),l={id:"zappa-lambda-docker",title:"Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker",description:"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console. ",author_id:"gonwi",tags:["type: tutorial","domain: platforms","platform: aws"]},i={permalink:"/blog/zappa-lambda-docker",source:"@site/blog/2019-11-23-zappa-lambda-docker.md",description:"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console. ",date:"2019-11-23T00:00:00.000Z",tags:[{label:"type: tutorial",permalink:"/blog/tags/type-tutorial"},{label:"domain: platforms",permalink:"/blog/tags/domain-platforms"},{label:"platform: aws",permalink:"/blog/tags/platform-aws"}],title:"Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker",nextItem:{title:"Brainrex joins Libracamp, a boot camp to build on Facebook\u2019s backed cryptocurrency project",permalink:"/blog/libracamp-selected"}},c=[{value:"Meet Micropython. A lightweight API microservice designed for easy deployment we open-sourced.",id:"meet-micropython-a-lightweight-api-microservice-designed-for-easy-deployment-we-open-sourced",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={rightToc:c},b="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/3840/1*TA00Ctroh-9eyrzej49Mag.png",alt:null}))),Object(o.b)("p",null,"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Our proposed architecture.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Python 3. A popular programming language for data scientists.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Flask. A micro web framework, that works with little dependencies and libraries.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://swagger.io/docs/specification/2-0/basic-structure/"}),"OpenAPI "),"2.0, formerly known as Swagger 2.0.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Zalando\u2019s ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zalando/connexion"}),"Connexion"),". handles routes, requests and response validation automatically from OpenAPI definition.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Docker. Helps us"),Object(o.b)("p",{parentName:"li"},"  cd micro-python\nStart by downloading our boilerplate code application from github"))),Object(o.b)("h2",{id:"meet-micropython-a-lightweight-api-microservice-designed-for-easy-deployment-we-open-sourced"},"Meet Micropython. A lightweight API microservice designed for easy deployment we open-sourced."),Object(o.b)("p",null,"Find source code ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/BrainrexAPI/micropython"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone [https://github.com/BrainrexAPI/micropython.git](https://github.com/BrainrexAPI/micropython)\n")),Object(o.b)("p",null,"Create a virtual environment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"cd micro-python\n\nvirtualenv -m venv myenv\n\nsource venv/bin/activate\n")),Object(o.b)("p",null,"Run the application ",Object(o.b)("strong",{parentName:"p"},"locally")," to check everything is working."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install -r requirements.txt\n\npython app.py\n")),Object(o.b)("p",null,"Open ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://0.0.0.0:5000/ui"}),"http://0.0.0.0:5000/ui")," in a web browser and you should see this:"),Object(o.b)("p",null,"Now let\u2019s deploy to Lambda if you haven\u2019t set up your credentials locally. This is a fast way to do it. First, get authenticated. For the sake of simplicity of this tutorial we are gonna use very permissive permission ( DO NOT use these settings in production)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Console > IAM > Users > Security Credentials > Access Keys"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download Access Keys CSV"),Object(o.b)("p",{parentName:"li"},"  aws configure"),Object(o.b)("p",{parentName:"li"},"  export AWS_DEFAULT_REGION=us-west-2\nexport AWS_PROFILE=default"))),Object(o.b)("p",null,"Build your Docker image from Dockerfile."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ docker build -t myimage .\n")),Object(o.b)("p",null,"Now we create an alias for better reusability. This command runs the Docker image using your AWS_PROFILE as an argument. Then it uses the docker image you just pull"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"alias micropyshell='docker run -ti -e AWS_PROFILE=zappa -v $(pwd):/var/task -v ~/.aws/:/root/.aws  --rm myimage'\n")),Object(o.b)("p",null,"Add alias to your bash_profile to be able to run command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"alias micropyshell >> ~/.bash_profile\n")),Object(o.b)("p",null,"Run the command you just created. This will run the docker image with your AWS configuration on it. Inside this image, we will still our dependencies and deploy to Lambda with Zappa."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"micropyshell\n")),Object(o.b)("p",null,"Now you should be inside the docker container shell."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"micropyshell>\n")),Object(o.b)("p",null,"Let\u2019s create a virtual enviroment inside container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"virtualenv venv\nsource venv/bin/activate\n")),Object(o.b)("p",null,"Install any python package inside your docker containers."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install -r requirements.txt\n")),Object(o.b)("p",null,"Deploy your services to Lambda. After you press this here is what happens after the scenes."),Object(o.b)("p",null,"From Zappa docs. Credit: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Miserlou/Zappa"}),"https://github.com/Miserlou/Zappa")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"zappa deploy dev\n")),Object(o.b)("p",null,"After you should be given an API gateway URL like this"),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not finding config file")),Object(o.b)("p",null,"botocore.exceptions.ProfileNotFound: The config profile (default) could not be found"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2096/1*FIiGHxisqMGNswKg0gE7rg.png",alt:"Error 1. Profile not found."}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"502. This could be an error when running your python program"))),Object(o.b)("p",null,"Zappa tail to see your logs."),Object(o.b)("p",null,"You can also see your logs in Cloudwatch by going to the API gateway."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"500")),Object(o.b)("p",{parentName:"li"},'  "slim_handler": true,\n"memory_size": 3008,')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Problems with NLTK Library.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution: ["),Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"}),"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"),"](",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"}),"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"),")"),Object(o.b)("p",null,"Create a Enviroment Variable in the Lambda Console."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"You are using python 2.7 It won\u2019t work Check"))),Object(o.b)("p",null,"python"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Here\u2019s a weird one. Your package requires GPU")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"from thinc.neural.util import prefer_gpu, require_gpu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Answer: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/49186886/spacy-throws-oserror-when-deployed-to-aws-lambda-using-zappa"}),"https://stackoverflow.com/questions/49186886/spacy-throws-oserror-when-deployed-to-aws-lambda-using-zappa")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"References")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/blogs/machine-learning/how-to-deploy-deep-learning-models-with-aws-lambda-and-tensorflow/"}),"https://aws.amazon.com/blogs/machine-learning/how-to-deploy-deep-learning-models-with-aws-lambda-and-tensorflow/")))}s.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,i({ref:t},p,{components:n})):r.a.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);