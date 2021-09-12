"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[231],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Architecture",p={unversionedId:"how-it-works/architecture",id:"how-it-works/architecture",isDocsHomePage:!1,title:"Architecture",description:"Overview",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/04_how-it-works/architecture.md",sourceDirName:"04_how-it-works",slug:"/how-it-works/architecture",permalink:"/Realtimely/jp/docs/how-it-works/architecture",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/04_how-it-works/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useRealtimeSharedState",permalink:"/Realtimely/jp/docs/api-guide/useRealtimeSharedState"},next:{title:"Self hosted Backend",permalink:"/Realtimely/jp/docs/how-it-works/self-backend"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Backend",id:"backend",children:[{value:"DynamoDB",id:"dynamodb",children:[]},{value:"AppSync",id:"appsync",children:[]}]},{value:"Frontend",id:"frontend",children:[{value:"Apollo Client",id:"apollo-client",children:[]},{value:"React",id:"react",children:[]}]}],d={toc:u};function s(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"demo",src:n(5571).Z})),(0,i.kt)("p",null,"Realtimely\u306fAWS AppSync\u306e\u6a5f\u80fd\u3092\u6700\u5927\u9650\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002\nAppSync\u3067\u751f\u6210\u3057\u305fGraphQL\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092Apollo Client\u3067\u63a5\u7d9a\u3057\u3001React\u3067\u30b9\u30c6\u30fc\u30c8\u7ba1\u7406\u3059\u308b\u69cb\u6210\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("h3",{id:"dynamodb"},"DynamoDB"),(0,i.kt)("p",null,"DynamoDB\u306f\u30ad\u30fc\u30d0\u30ea\u30e5\u30fc\u30b9\u30c8\u30a2\u306e\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u306aNoSQL\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3059\u3002\nDynamoDB\u306e\u30ad\u30fc\u306fHashKey\u3068SortKey\u304c\u3042\u308a\u3001\u3053\u306e\u7d44\u307f\u5408\u308f\u305b\u304c\u4e00\u610f\u3067\u3042\u308b\u3088\u3046\u306bDB\u8a2d\u8a08\u3092\u884c\u3044\u307e\u3059\u3002\nRealtimeCursor\u3068OnlineUser\u306f\u6b21\u306e\u3088\u3046\u306a\u30b9\u30ad\u30fc\u30de\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"HashKey"),(0,i.kt)("th",{parentName:"tr",align:null},"SortKey"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL#{URL}"),(0,i.kt)("td",{parentName:"tr",align:null},"UserId#{UserId}")))),(0,i.kt)("p",null,"{URL}\u3068{UserId}\u306b\u306f\u5b9f\u969b\u306e\u5024\u304c\u5165\u308a\u307e\u3059\u3002\n\u3053\u306e\u30ad\u30fc\u306b\u5bfe\u3057\u3066\u3001\u30de\u30a6\u30b9\u306e\u30ab\u30fc\u30bd\u30eb\u4f4d\u7f6e(X,Y)\u3084\u30e6\u30fc\u30b6\u60c5\u5831\u3092Attribute\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002\n\u3064\u307e\u308a\u5e38\u306b\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u304c\u3053\u306e\u30ad\u30fc\u306b\u7d10\u4ed8\u3044\u3066\u66f4\u65b0\u3059\u308b\u305f\u3081\u3001\u6642\u7cfb\u5217\u7684\u30c7\u30fc\u30bf\u306f\u4fdd\u6301\u3057\u3066\u3044\u307e\u305b\u3093\u3002\nRealtimely\u306e\u95a2\u5fc3\u306f\u5e38\u306b\u300c\u4eca\u300d\u3067\u3042\u308b\u305f\u3081\u3053\u306eDB\u8a2d\u8a08\u304c\u52b9\u7387\u7684\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u9ad8\u3044\u306e\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"appsync"},"AppSync"),(0,i.kt)("p",null,"AppSync\u306fGraphQL\u30b5\u30fc\u30d0\u306e\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\nDynamoDB\u306e\u30c6\u30fc\u30d6\u30eb\u3068\u63a5\u7d9a\u3059\u308b\u3053\u3068\u3067\u3001\u81ea\u52d5\u3067GraphQL\u30b9\u30ad\u30fc\u30de\u3068\u30ea\u30be\u30eb\u30d0\u3092\u751f\u6210\u3059\u308b\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002\nRealtimely\u306f\u81ea\u52d5\u3067\u4f5c\u6210\u3055\u308c\u305f\u30b9\u30ad\u30fc\u30de\u3068\u30ea\u30be\u30eb\u30d0\u3092\u5c11\u3057\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4e3b\u306b\u4f7f\u3063\u3066\u3044\u308b\u30ea\u30be\u30eb\u30d0\u306f\u6b21\u306e\u4e8c\u3064\u3067\u3059\u3002(XXX\u306b\u306f\u30c6\u30fc\u30d6\u30eb\u540d\u304c\u5165\u308a\u307e\u3059)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"createXXX "),(0,i.kt)("li",{parentName:"ul"},"onCreateXXX ")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),"\u306f\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210\u3092\u884c\u3044\u3001DynamoDB\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u5024\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ea\u30be\u30eb\u30d0\u3067\u306f\u540c\u4e00\u30ad\u30fc\u304c\u5b58\u5728\u3057\u305f\u5834\u5408\u30a8\u30e9\u30fc\u306b\u306a\u308b\u3088\u3046\u306a\u5b9f\u88c5\u304c\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u540c\u4e00\u30ad\u30fc\u306e\u5834\u5408\u306f\u66f4\u65b0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u73fe\u5728\u6642\u523b\u304b\u3089deleteTime\u306e\u8a08\u7b97\u3092\u3057\u3066\u5024\u3092\u683c\u7d0d\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onCreateXXX"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),"\u306emutation\u3092\u76e3\u8996\u3057\u3066\u304a\u308a\u3001\u3053\u306emutation\u304c\u5b9f\u884c\u3055\u308c\u305f\u6642\u306b\u305d\u3053\u3067\u751f\u6210\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092Subscrition(Websocket)\u3067\u901a\u77e5\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u4f5c\u6210\u30fb\u66f4\u65b0\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30d5\u30ed\u30f3\u30c8\u306b\u5c4a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"frontend"},"Frontend"),(0,i.kt)("h3",{id:"apollo-client"},"Apollo Client"),(0,i.kt)("p",null,"AppSync\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306bApollo Client\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,"Realtimely\u306fReact\u3067\u30b9\u30c6\u30fc\u30c8\u7ba1\u7406\u3092\u884c\u3044\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),"\u3067\u6700\u65b0\u306e\u30ea\u30bd\u30fc\u30b9(\u4f8b\u3048\u3070\u30ab\u30fc\u30bd\u30eb\u4f4d\u7f6e)\u3092\u9001\u4fe1\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onCreateXXX"),"\u3067\u4f5c\u6210\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002\n\u53d7\u4fe1\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u306f\u30ea\u30b9\u30c8\u3067\u7ba1\u7406\u3057\u3001deleteTime\u3092\u8d85\u3048\u305f\u3082\u306e\u306f\u5ec3\u68c4\u3059\u308b\u3053\u3068\u3067\u3001\u6700\u65b0\u306e\u72b6\u614b\u3092\u4fdd\u3061\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),"\u306fdeleteTime\u4ee5\u5185\u306e\u6642\u9593\u3067\u518d\u5ea6\u547c\u3073\u51fa\u3057\u3059\u308b\u3053\u3068\u3067\u3001\u7ba1\u7406\u3057\u3066\u3044\u308b\u30ea\u30b9\u30c8\u304b\u3089\u3044\u306a\u304f\u306a\u3089\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n\u9006\u306b\u3001deleteTime\u4ee5\u5185\u306e\u6642\u9593\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),"\u304c\u547c\u3073\u51fa\u3055\u308c\u306a\u304b\u3063\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u3064\u3044\u3066\u306f\u3001\u3059\u3067\u306b\u305d\u306e\u30e6\u30fc\u30b6\u306f\u753b\u9762\u304b\u3089\u96e2\u8131\u3057\u3066\u3044\u308b\u3068\u5224\u65ad\u3057\u3066\u4ed6\u306e\u30e6\u30fc\u30b6\u304b\u3089\u306f\u898b\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u3002"))}s.isMDXComponent=!0},5571:function(e,t,n){t.Z=n.p+"assets/images/architecture.drawio-82ce0c7d47e483fe0b137a5038f64564.png"}}]);