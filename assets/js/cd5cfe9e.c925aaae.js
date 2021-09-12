"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[462],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2481:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},s="Realtime Cursor",c={unversionedId:"getting-started/realtime_cursor",id:"getting-started/realtime_cursor",isDocsHomePage:!1,title:"Realtime Cursor",description:"demo",source:"@site/docs/02_getting-started/03_realtime_cursor.md",sourceDirName:"02_getting-started",slug:"/getting-started/realtime_cursor",permalink:"/Realtimely/docs/getting-started/realtime_cursor",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/02_getting-started/03_realtime_cursor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/Realtimely/docs/getting-started/demo"},next:{title:"Realtime User Presence",permalink:"/Realtimely/docs/getting-started/realtime_user_presence"}},u=[{value:"Example",id:"example",children:[]}],p={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"realtime-cursor"},"Realtime Cursor"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"demo",src:r(6349).Z})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"useRealtimeCursor")," on the element that covers the full screen in your React app.\nPass the return value ",(0,a.kt)("inlineCode",{parentName:"p"},"onMouseMove")," to the element's onMouseMove event and call the",(0,a.kt)("inlineCode",{parentName:"p"}," renderCursors")," method in the HTML anywhere."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import React from \'react\';\nimport { useRealtimeCursor } from "realtimely"\n\nfunction App() {\n\n  const { onMouseMove, renderCursors } = useRealtimeCursor()\n\n  return (\n    <div className="App" onMouseMove={onMouseMove}>\n      {renderCursors()}\n    </div>\n  );\n}\n\nexport default App\n')))}m.isMDXComponent=!0},6349:function(e,t,r){t.Z=r.p+"assets/images/realtime-cursor-85c631473639661d2c7fbad1413a6810.gif"}}]);