"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[462],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2481:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:3},s="Realtime Cursor",l={unversionedId:"getting-started/realtime_cursor",id:"getting-started/realtime_cursor",isDocsHomePage:!1,title:"Realtime Cursor",description:"demo",source:"@site/docs/02_getting-started/03_realtime_cursor.md",sourceDirName:"02_getting-started",slug:"/getting-started/realtime_cursor",permalink:"/Realtimely/docs/getting-started/realtime_cursor",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/02_getting-started/03_realtime_cursor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/Realtimely/docs/getting-started/demo"},next:{title:"Realtime User Presence",permalink:"/Realtimely/docs/getting-started/realtime_user_presence"}},u=[{value:"Example",id:"example",children:[]}],p={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"realtime-cursor"},"Realtime Cursor"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"demo",src:r(6349).Z})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"\u3042\u306a\u305f\u306eReact\u30a2\u30d7\u30ea\u3067\u5168\u753b\u9762\u3092\u30ab\u30d0\u30fc\u3057\u3066\u3044\u308b\u8981\u7d20\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeCursor"),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\n\u8fd4\u308a\u5024\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseMove"),"\u3092\u305d\u306e\u8981\u7d20\u306eonMouseMove\u30a4\u30d9\u30f3\u30c8\u306b\u6e21\u3057\u3001\u3069\u3053\u3067\u3082\u826f\u3044\u306e\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"renderCursors"),"\u30e1\u30bd\u30c3\u30c9\u3092HTML\u5185\u3067\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import React from \'react\';\nimport { useRealtimeCursor } from "realtimely"\n\nfunction App() {\n\n  const { onMouseMove, renderCursors } = useRealtimeCursor()\n\n  return (\n    <div className="App" onMouseMove={onMouseMove}>\n      {renderCursors()}\n    </div>\n  );\n}\n\nexport default App\n')))}m.isMDXComponent=!0},6349:function(e,t,r){t.Z=r.p+"assets/images/realtime-cursor-85c631473639661d2c7fbad1413a6810.gif"}}]);