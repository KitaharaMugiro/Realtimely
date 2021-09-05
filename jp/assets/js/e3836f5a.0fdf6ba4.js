"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[97],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:5},l="Realtime User Action",u={unversionedId:"getting-started/realtime_user_action",id:"getting-started/realtime_user_action",isDocsHomePage:!1,title:"Realtime User Action",description:"\u6700\u5f8c\u306b\u3082\u3063\u3068\u3082\u67d4\u8edf\u3067\u6709\u7528\u306a\u95a2\u6570useRealtimeUserAction\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/02_getting-started/05_realtime_user_action.md",sourceDirName:"02_getting-started",slug:"/getting-started/realtime_user_action",permalink:"/Realtimely/jp/docs/getting-started/realtime_user_action",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/02_getting-started/05_realtime_user_action.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Realtime User Presence",permalink:"/Realtimely/jp/docs/getting-started/realtime_user_presence"},next:{title:"useRealtimeCursor",permalink:"/Realtimely/jp/docs/api-guide/useRealtimeCursor"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"realtime-user-action"},"Realtime User Action"),(0,i.kt)("p",null,"\u6700\u5f8c\u306b\u3082\u3063\u3068\u3082\u67d4\u8edf\u3067\u6709\u7528\u306a\u95a2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeUserAction"),"\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export default () => {\n    \n    function callback(actionId: string, value: string){\n        console.log({actionId, value})\n    }\n\n    const { pushUserAction } = useRealtimeUserAction(callback)\n\n    const onClick = (buttonNumber: number) => {\n        pushUserAction("actionId=" + buttonNumber, "value=" + buttonNumber)\n    }\n\n    return (\n        <div>\n            <button onClick={() => onClick(1)}>1</button>\n            <button onClick={() => onClick(2)}>2</button>\n            <button onClick={() => onClick(3)}>3</button>\n        </div>\n    )\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeUserAction"),"\u306e\u5f15\u6570\u306bcallback\u95a2\u6570\u3092\u6e21\u3057\u3066\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30e6\u30fc\u30b6\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u76e3\u8996\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u308b\u305f\u3073\u306b\u8fd4\u308a\u5024\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"pushUserAction"),"\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u884c\u3055\u308c\u3001callback\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u3088\u3063\u3066\u3001\u62bc\u3055\u308c\u305f\u30dc\u30bf\u30f3\u306e\u756a\u53f7\u304cconsole.log\u3067\u6a19\u6e96\u51fa\u529b\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"))}m.isMDXComponent=!0}}]);