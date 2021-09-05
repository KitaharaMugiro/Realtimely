"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[34],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7237:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={sidebar_position:1},l="useRealtimeCursor",s={unversionedId:"api-guide/useRealtimeCursor",id:"api-guide/useRealtimeCursor",isDocsHomePage:!1,title:"useRealtimeCursor",description:"\u672c\u30e1\u30bd\u30c3\u30c9\u304c\u5b9f\u65bd\u3059\u308b\u3053\u3068\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/03_api-guide/01_useRealtimeCursor.md",sourceDirName:"03_api-guide",slug:"/api-guide/useRealtimeCursor",permalink:"/Realtimely/jp/docs/api-guide/useRealtimeCursor",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/03_api-guide/01_useRealtimeCursor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Realtime User Action",permalink:"/Realtimely/jp/docs/getting-started/realtime_user_action"},next:{title:"useOnlineUsers",permalink:"/Realtimely/jp/docs/api-guide/useOnlineUsers"}},c=[{value:"onMouseMove",id:"onmousemove",children:[]},{value:"renderCursors",id:"rendercursors",children:[]},{value:"delete time",id:"delete-time",children:[]}],p={toc:c};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"userealtimecursor"},"useRealtimeCursor"),(0,i.kt)("p",null,"\u672c\u30e1\u30bd\u30c3\u30c9\u304c\u5b9f\u65bd\u3059\u308b\u3053\u3068\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30de\u30a6\u30b9\u306e\u52d5\u304d\u3092\u76e3\u8996\u3057\u3001clientX, clinentY\u3092state\u306b\u4fdd\u5b58\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"500ms\u306e\u30a4\u30f3\u30bf\u30fc\u30d0\u30eb\u3067\u3001URL, clientX, clientY, \u30e6\u30fc\u30b6\u60c5\u5831(\u30e9\u30f3\u30c0\u30e0\u306b\u632f\u3089\u308c\u305f\u540d\u524d\u3001\u30a2\u30d0\u30bf\u30fc\u3001\u8272)\u3092\u30b5\u30fc\u30d0\u306b\u9001\u308a\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"WebSocket\u3067\u30b5\u30fc\u30d0\u4e0a\u3067\u540c\u4e00\u306eURL\u306b\u8a72\u5f53\u3059\u308b\u4ed6\u306e\u30e6\u30fc\u30b6\u306e\u60c5\u5831\u304c\u8ffd\u52a0\u3055\u308c\u305f\u5834\u5408\u3001\u305d\u308c\u3092\u53d6\u5f97\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u30e6\u30fc\u30b6\u306e\u307e\u3068\u3081\u3066\u30ea\u30b9\u30c8\u3067\u4fdd\u6301\u3057\u3001\u753b\u9762\u4e0a\u306b\u63cf\u753b\u3059\u308b\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059")),(0,i.kt)("p",null,"\u672c\u30e1\u30bd\u30c3\u30c9\u306f\uff12\u3064\u306e\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onMouseMove")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"renderCursors"))),(0,i.kt)("h2",{id:"onmousemove"},"onMouseMove"),(0,i.kt)("p",null,"\u3053\u306e\u95a2\u6570\u306f\u30de\u30a6\u30b9\u30a4\u30d9\u30f3\u30c8\u3092\u51e6\u7406\u3059\u308b\u95a2\u6570\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u5168\u753b\u9762\u3092\u30ab\u30d0\u30fc\u3057\u3066\u3044\u308b\u30eb\u30fc\u30c8\u306b\u8fd1\u3044\u8981\u7d20\u306bonMouseMove\u306b\u5f53\u3066\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<div onMouseMove={onMouseMove}>\n")),(0,i.kt)("h2",{id:"rendercursors"},"renderCursors"),(0,i.kt)("p",null,"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u53d6\u5f97\u3057\u305f\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u60c5\u5831\u3068\u30e6\u30fc\u30b6\u60c5\u5831(\u30e9\u30f3\u30c0\u30e0\u306b\u632f\u3089\u308c\u305f\u540d\u524d\u3001\u30a2\u30d0\u30bf\u30fc\u3001\u8272)\u3092\u63cf\u753b\u3059\u308b\u95a2\u6570\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"return (\n  <div>\n    {renderCursors()}\n  </div>\n);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"renderCursors"),"\u306e\u5f15\u6570\u306b\u30ab\u30fc\u30bd\u30eb\u306e\u30ab\u30b9\u30bf\u30e0\u30d3\u30e5\u30fc\u3092\u751f\u6210\u3059\u308b\u95a2\u6570\u3092\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const customView = (param: CustomCursorViewParameter) => {\n    return (<CursorEye userInfo={param.userInfo} />)\n}\n\nreturn (\n  <div>\n    {renderCursors(customView)}\n  </div>\n);\n")),(0,i.kt)("h2",{id:"delete-time"},"delete time"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u30aa\u30d5\u30e9\u30a4\u30f3\u306b\u306a\u308b\u3068\u3001\u30b5\u30fc\u30d0\u3078\u30c7\u30fc\u30bf\u304c\u9001\u3089\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002\n\u5404\u30c7\u30fc\u30bf\u306b\u306f\u30b5\u30fc\u30d0\u3067\u632f\u308a\u5206\u3051\u305fdelete time\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u304a\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeCursor"),"\u3067\u306fdelete time\u3092\u8d85\u3048\u305f\u30c7\u30fc\u30bf\u306f\u53d6\u308a\u9664\u304d\u307e\u3059\u3002\ndelete time\u306f\uff11\uff10\u79d2\u3067\u56fa\u5b9a\u3057\u3066\u304a\u308a\u307e\u3059\u3002\n\u3053\u306e\u8a2d\u5b9a\u5024\u3092\u5909\u3048\u305f\u3044\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/how-it-works/self-backend"},"\u81ea\u5206\u3067\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u69cb\u7bc9\u3059\u308b"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);