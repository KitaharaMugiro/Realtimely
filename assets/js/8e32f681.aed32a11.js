"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[887],{3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,r,i=function(A,e){if(null==A)return{};var t,r,i={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var s=r.createContext({}),l=function(A){var e=r.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},c=function(A){var e=l(A.components);return r.createElement(s.Provider,{value:e},A.children)},g={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},Q=r.forwardRef((function(A,e){var t=A.components,i=A.mdxType,n=A.originalType,s=A.parentName,c=o(A,["components","mdxType","originalType","parentName"]),Q=l(t),h=i,p=Q["".concat(s,".").concat(h)]||Q[h]||g[h]||n;return t?r.createElement(p,a(a({ref:e},c),{},{components:t})):r.createElement(p,a({ref:e},c))}));function h(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var n=t.length,a=new Array(n);a[0]=Q;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:i,a[1]=o;for(var l=2;l<n;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},8341:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return Q}});var r=t(7462),i=t(3366),n=(t(7294),t(3905)),a=["components"],o={sidebar_position:4},s="Realtime User Presence",l={unversionedId:"getting-started/realtime_user_presence",id:"getting-started/realtime_user_presence",isDocsHomePage:!1,title:"Realtime User Presence",description:"demo",source:"@site/docs/02_getting-started/04_realtime_user_presence.md",sourceDirName:"02_getting-started",slug:"/getting-started/realtime_user_presence",permalink:"/Realtimely/docs/getting-started/realtime_user_presence",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/02_getting-started/04_realtime_user_presence.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Realtime Cursor",permalink:"/Realtimely/docs/getting-started/realtime_cursor"},next:{title:"Realtime Shared State",permalink:"/Realtimely/docs/getting-started/realtime_shared_state"}},c=[{value:"Example",id:"example",children:[]}],g={toc:c};function Q(A){var e=A.components,o=(0,i.Z)(A,a);return(0,n.kt)("wrapper",(0,r.Z)({},g,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"realtime-user-presence"},"Realtime User Presence"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"demo",src:t(6341).Z})),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Just call the ",(0,n.kt)("inlineCode",{parentName:"p"},"useOnlineUsers")," function to start monitoring the list of users who are viewing the URL (including the path), and when it is updated, it will be reflected in the onlineUserList automatically."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="header.tsx"',title:'"header.tsx"'},'import UserList from "./UserList";\nimport { useOnlineUsers } from \'realtimely\';\n\nexport default () => {\n    const { onlineUserList } = useOnlineUsers()\n    return (\n        <header className="header">\n            <h1 className="header_text">\n                <a href="/" className="link_text">Realtimely</a>\n            </h1>\n\n            <nav className="nav">\n                <ul className="ul">\n                    <div>\n                        <UserList realtimeUser={onlineUserList} />\n                    </div>\n                </ul>\n            </nav>\n        </header>\n    )\n}\n')),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.dev/KitaharaMugiro/realtime-cursor/blob/main/components/RealtimeHeader.tsx"},"Github")," for the detailed implementation."))}Q.isMDXComponent=!0},6341:function(A,e){e.Z="data:image/gif;base64,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"}}]);