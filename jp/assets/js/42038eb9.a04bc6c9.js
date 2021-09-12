"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[683],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3684:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],u={sidebar_position:4},l="useRealtimeSharedState",c={unversionedId:"api-guide/useRealtimeSharedState",id:"api-guide/useRealtimeSharedState",isDocsHomePage:!1,title:"useRealtimeSharedState",description:"\u672c\u30e1\u30bd\u30c3\u30c9\u306f\u3001React\u306euseState\u306e\u3088\u3046\u306b\u4f7f\u3048\u3066t\u3001\u72b6\u614b\u306e\u5909\u5316\u3092\u30b5\u30fc\u30d0\u306b\u9001\u308a\u540c\u3058URL\u3092\u898b\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u306b\u305d\u306e\u72b6\u614b\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/03_api-guide/04_useRealtimeSharedState.md",sourceDirName:"03_api-guide",slug:"/api-guide/useRealtimeSharedState",permalink:"/Realtimely/jp/docs/api-guide/useRealtimeSharedState",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/03_api-guide/04_useRealtimeSharedState.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useRealtimeUserAction",permalink:"/Realtimely/jp/docs/api-guide/useRealtimeUserAction"},next:{title:"Architecture",permalink:"/Realtimely/jp/docs/how-it-works/architecture"}},p=[{value:"\u521d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642",id:"\u521d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642",children:[]},{value:"\u5024\u306e\u66f4\u65b0\u6642",id:"\u5024\u306e\u66f4\u65b0\u6642",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"userealtimesharedstate"},"useRealtimeSharedState"),(0,i.kt)("p",null,"\u672c\u30e1\u30bd\u30c3\u30c9\u306f\u3001React\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),"\u306e\u3088\u3046\u306b\u4f7f\u3048\u3066t\u3001\u72b6\u614b\u306e\u5909\u5316\u3092\u30b5\u30fc\u30d0\u306b\u9001\u308a\u540c\u3058URL\u3092\u898b\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u306b\u305d\u306e\u72b6\u614b\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const [state, setState] = useRealtimeSharedState({color:"red", number:3}, "slideState") \n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeSharedState"),"\u306f\u7b2c\u4e00\u5f15\u6570\u306bdefault\u5024\u3001\u7b2c\u4e8c\u5f15\u6570\u306bactionId\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\nactionId\u306f\u540c\u4e00URL\u5185\u3067\u4e00\u610f\u306b\u306a\u3063\u3066\u3044\u308c\u3070\u4efb\u610f\u306e\u6587\u5b57\u5217\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u672c\u30e1\u30bd\u30c3\u30c9\u306f1\u3064\u306e\u5909\u6570\u30681\u3064\u306e\u95a2\u6570\u3092\u30da\u30a2\u3068\u3057\u305f\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),"\u3068\u540c\u3058\u3088\u3046\u306b\u3001\uff11\u3064\u76ee\u306e\u8fd4\u308a\u5024\u304c\u72b6\u614b\u3092\u683c\u7d0d\u3057\u3001\uff12\u3064\u76ee\u306e\u8fd4\u308a\u5024\u3092\u4f7f\u3063\u3066\u72b6\u614b\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"URL\u3068actionId\u3092\u30da\u30a2\u306b\u3057\u3066\u3001\u5024\u3092\u30b5\u30fc\u30d0\u306b\u9001\u4fe1\u3057\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u521d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642"},"\u521d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642"),(0,i.kt)("p",null,"\u521d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u306b\u30b5\u30fc\u30d0\u304b\u3089\u6700\u65b0\u306e\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u53d6\u5f97\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u306fdefault\u5024\u3092\u63a1\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u5024\u306e\u66f4\u65b0\u6642"},"\u5024\u306e\u66f4\u65b0\u6642"),(0,i.kt)("p",null,"\u66f4\u65b0\u304c\u3042\u308b\u3068\u540c\u3058URL\u3092\u898b\u3066\u3044\u308b\u5168\u30e6\u30fc\u30b6\u306b\u6700\u65b0\u306e\u5024\u3092\u914d\u4fe1\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);