"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[139],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6887:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:5},s="Realtime Shared State",c={unversionedId:"getting-started/realtime_shared_state",id:"getting-started/realtime_shared_state",isDocsHomePage:!1,title:"Realtime Shared State",description:"Realtimely\u306fReact\u306euseState\u3092\u9032\u5316\u3055\u305b\u305fuseRealtimeSharedState\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/02_getting-started/05_realtime_shared_state.md",sourceDirName:"02_getting-started",slug:"/getting-started/realtime_shared_state",permalink:"/Realtimely/jp/docs/getting-started/realtime_shared_state",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/02_getting-started/05_realtime_shared_state.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Realtime User Presence",permalink:"/Realtimely/jp/docs/getting-started/realtime_user_presence"},next:{title:"Realtime User Action",permalink:"/Realtimely/jp/docs/getting-started/realtime_user_action"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"realtime-shared-state"},"Realtime Shared State"),(0,i.kt)("p",null,"Realtimely\u306fReact\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),"\u3092\u9032\u5316\u3055\u305b\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"useRealtimeSharedState"),"\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f\u3001\u540c\u4e00\u306eURL\u3092\u898b\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u306estate\u3092\u540c\u671f\u3055\u305b\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export default () => {\n    \n    const [slideState, setSlideState] = useRealtimeSharedState({\n        pageNumber: 1,\n        enableCursor: false,\n        enableChat: false\n    }, "slideState")\n\n    const onClick = () => {\n        slideState.pageNumber += 1\n        setSlideState(slideState)\n    }\n\n    return (\n        <div>\n            <button onClick={onClick}>Next</button>\n            <Slide pageNumber={slideState.pageNumber}>\n        </div>\n    )\n}\n')))}d.isMDXComponent=!0}}]);