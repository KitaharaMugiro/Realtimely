"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[163],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="useRealtimeUserAction",u={unversionedId:"api-guide/useRealtimeUserAction",id:"api-guide/useRealtimeUserAction",isDocsHomePage:!1,title:"useRealtimeUserAction",description:"What this method does is:",source:"@site/docs/03_api-guide/03_useRealtimeUserAction.md",sourceDirName:"03_api-guide",slug:"/api-guide/useRealtimeUserAction",permalink:"/Realtimely/docs/api-guide/useRealtimeUserAction",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/03_api-guide/03_useRealtimeUserAction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useOnlineUsers",permalink:"/Realtimely/docs/api-guide/useOnlineUsers"},next:{title:"useRealtimeSharedStatte",permalink:"/Realtimely/docs/api-guide/useRealtimeSharedState"}},c=[{value:"pushUserAction",id:"pushuseraction",children:[{value:"actionId",id:"actionid",children:[]},{value:"value",id:"value",children:[]}]},{value:"createdUserAction",id:"createduseraction",children:[]},{value:"userActionList",id:"useractionlist",children:[]},{value:"callback",id:"callback",children:[]},{value:"delete time",id:"delete-time",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"userealtimeuseraction"},"useRealtimeUserAction"),(0,a.kt)("p",null,"What this method does is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define a method ",(0,a.kt)("inlineCode",{parentName:"li"},"pushUserAction")," to send URL, actionId, value, user information (randomly assigned name, avatar, color) to the server."),(0,a.kt)("li",{parentName:"ul"},"Fetch data by Websocket If the information of another user corresponding to the same URL is added on the server."),(0,a.kt)("li",{parentName:"ul"},"If a callback function is given to this method, it will be executed when the user action is created/updated."),(0,a.kt)("li",{parentName:"ul"},"Keeps other users' user action together in a list")),(0,a.kt)("p",null,"This method returns two functions and a variable."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pushUserAction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createdUserAction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userActionList"))),(0,a.kt)("p",null,"It also accepts a callback function as an argument."),(0,a.kt)("h2",{id:"pushuseraction"},"pushUserAction"),(0,a.kt)("p",null,"This function is for sending user actions to the server.\nYou must pass the string actionId and value as arguments."),(0,a.kt)("h3",{id:"actionid"},"actionId"),(0,a.kt)("p",null,"This is the ID to distinguish the event.\nFor example, if you have three buttons on your site, you can use actionId to distinguish which button was pressed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const onClick = (buttonNumber: number) => {\n    const actionId = "actionId=" + buttonNumber\n    pushUserAction(actionId, "value")\n}\n\nreturn (\n    <div>\n        <button onClick={() => onClick(1)}>1</button>\n        <button onClick={() => onClick(2)}>2</button>\n        <button onClick={() => onClick(3)}>3</button>\n    </div>\n)\n')),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"Think of value as a box for describing user actions in more detail.\nFor example, pass the value entered in a form."),(0,a.kt)("h2",{id:"createduseraction"},"createdUserAction"),(0,a.kt)("p",null,"The latest data acquired from server in real time is stored.\nThe object is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    key: "XXXXX",\n    actionId: "form_1",\n    value: "hello!!",\n    name: "John",\n    avator: "\ud83d\ude04",\n    color: "#CCFF1A",\n    deleteTime: "2021-09-03T18:46:50.806Z"\n}\n')),(0,a.kt)("h2",{id:"useractionlist"},"userActionList"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onlineUserList")," is a list of objects like the one below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    key: "XXXXX",\n    actionId: "form_1",\n    value: "hello!!",\n    name: "John",\n    avator: "\ud83d\ude04",\n    color: "#CCFF1A",\n    deleteTime: "2021-09-03T18:46:50.806Z"\n}\n')),(0,a.kt)("h2",{id:"callback"},"callback"),(0,a.kt)("p",null,"If you pass a function of the following type to ",(0,a.kt)("inlineCode",{parentName:"p"},"useRealtimeUserAction"),", it will be executed each time a new user action is generated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(actionId: string, value: string, userInfo?: { name: string, color: string, avator: string }) => void\n")),(0,a.kt)("h2",{id:"delete-time"},"delete time"),(0,a.kt)("p",null,"When the user goes offline, no data will be sent to the server.\nThe delete time assigned by the server is set for each data, and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRealtimeUserAction")," removes the data that exceeds the delete time.\nThe delete time is fixed at 30 seconds.\nIf you want to change this setting, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works/self-backend"},"Self hosted backend"),"."))}p.isMDXComponent=!0}}]);