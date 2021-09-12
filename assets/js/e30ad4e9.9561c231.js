"use strict";(self.webpackChunkrealtimely_doc=self.webpackChunkrealtimely_doc||[]).push([[89],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Architecture",s={unversionedId:"how-it-works/architecture",id:"how-it-works/architecture",isDocsHomePage:!1,title:"Architecture",description:"Overview",source:"@site/docs/04_how-it-works/architecture.md",sourceDirName:"04_how-it-works",slug:"/how-it-works/architecture",permalink:"/Realtimely/docs/how-it-works/architecture",editUrl:"https://github.com/KitaharaMugiro/Realtimely-Docs/docs/04_how-it-works/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useRealtimeSharedState",permalink:"/Realtimely/docs/api-guide/useRealtimeSharedState"},next:{title:"Self hosted Backend",permalink:"/Realtimely/docs/how-it-works/self-backend"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Backend",id:"backend",children:[{value:"DynamoDB",id:"dynamodb",children:[]},{value:"AppSync",id:"appsync",children:[]}]},{value:"Frontend",id:"frontend",children:[{value:"Apollo Client",id:"apollo-client",children:[]},{value:"React",id:"react",children:[]}]}],u={toc:d};function p(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"demo",src:n(5571).Z})),(0,i.kt)("p",null,"Realtimely takes full advantage of the capabilities of AWS AppSync.\nThe GraphQL endpoint generated by AppSync is connected by Apollo Client and the state is managed by React."),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("h3",{id:"dynamodb"},"DynamoDB"),(0,i.kt)("p",null,"DynamoDB is a key-value store scalable NoSQL database.\nThere are HashKey and SortKey as keys of DynamoDB, and DB design is done so that this combination is unique.\n",(0,i.kt)("inlineCode",{parentName:"p"},"RealtimeCursor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OnlineUser")," have the following schema."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"HashKey"),(0,i.kt)("th",{parentName:"tr",align:null},"SortKey"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL#{URL}"),(0,i.kt)("td",{parentName:"tr",align:null},"UserId#{UserId}")))),(0,i.kt)("p",null,'The actual values are entered in {URL} and {UserId}.\nFor this key, the mouse cursor position (X, Y) and user information are saved as attributes.\nIn other words, the latest data is always associated with this key and updated, so time-series data is not retained.\nThis DB design is efficient and high performance because Realtimely\'s interest is always "now".'),(0,i.kt)("h3",{id:"appsync"},"AppSync"),(0,i.kt)("p",null,"AppSync is a managed service for GraphQL servers.\nThey have a feature to automatically generate GraphQL schema and resolver by connecting with DynamoDB table.\nRealtimely uses the automatically created schema and resolver with a little customization."),(0,i.kt)("p",null,"The following two resolvers are mainly used. (XXX is the table name)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"createXXX"),(0,i.kt)("li",{parentName:"ul"},"onCreateXXX")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createXXX")," creates the resource and adds it to the DynamoDB table. The default resolver is implemented so that an error will occur if the same key exists, but it is customized and updated if the same key exists. Also, deleteTime is calculated from the current time."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onCreateXXX")," monitors the mutation of ",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX"),", and when this mutation is executed, the resource generated there is notified by Subscrition (Websocket). This allows you to deliver the created/updated data to the frontend."),(0,i.kt)("h2",{id:"frontend"},"Frontend"),(0,i.kt)("h3",{id:"apollo-client"},"Apollo Client"),(0,i.kt)("p",null,"It employs the Apollo Client to communicate with the AppSync endpoint."),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,"Realtimely manages state with React.\nSend the latest resource (for example, cursor position) with ",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX")," and receive the resource created with",(0,i.kt)("inlineCode",{parentName:"p"}," onCreateXXX"),".\nReceived resources are managed in a list, and those that exceed the deleteTime are discarded to keep them up to date.\nBy calling ",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX")," again within deleteTime, it will not disappear from the managed list.\nConversely, for resources for which ",(0,i.kt)("inlineCode",{parentName:"p"},"createXXX")," was not called within the deleteTime, it is determined that the user has already left the screen and will be invisible to other users."))}p.isMDXComponent=!0},5571:function(e,t,n){t.Z=n.p+"assets/images/architecture.drawio-82ce0c7d47e483fe0b137a5038f64564.png"}}]);