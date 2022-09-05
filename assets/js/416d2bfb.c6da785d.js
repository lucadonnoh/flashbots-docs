"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[6381],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8316:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],i={},s=void 0,c={unversionedId:"flashbots-mev-boost/architecture/block-builders",id:"flashbots-mev-boost/architecture/block-builders",isDocsHomePage:!1,title:"block-builders",description:"Block Builders",source:"@site/docs/flashbots-mev-boost/architecture/block-builders.md",sourceDirName:"flashbots-mev-boost/architecture",slug:"/flashbots-mev-boost/architecture/block-builders",permalink:"/flashbots-mev-boost/architecture/block-builders",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"relays",permalink:"/flashbots-mev-boost/architecture/relays"},next:{title:"block-proposers",permalink:"/flashbots-mev-boost/architecture/block-proposers"}},u=[{value:"Block Builders",id:"block-builders",children:[{value:"Builder Fundamentals",id:"builder-fundamentals",children:[]},{value:"Boost-Geth-Builder",id:"boost-geth-builder",children:[]},{value:"Builder Proposer Payment",id:"builder-proposer-payment",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"block-builders"},"Block Builders"),(0,a.kt)("h3",{id:"builder-fundamentals"},"Builder Fundamentals"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What is a Builder?")),(0,a.kt)("p",null,"Block builders are highly specialized actors who aggregate and construct blocks from transaction orderflow (bundles, private transactions, etc). "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Role of Builders")),(0,a.kt)("p",null,"Builders run algorithms and simulations (e.g. First Come First Serve, First Price Auctions, etc.) to order bundles and TXs in a block template (technically:\xa0",(0,a.kt)("em",{parentName:"p"},"execution payload"),") that maximizes profit. They then bid for and buy the validators\u2019 blockspace, with the help of one or more relays, so their execution payloads are proposed to the blockchain. "),(0,a.kt)("h3",{id:"boost-geth-builder"},"Boost-Geth-Builder"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/boost-geth-builder"},"MEV-Boost Geth Builder")," is a testnet-ready open-source builder reference implementation (not meant for production). "),(0,a.kt)("h3",{id:"builder-proposer-payment"},"Builder Proposer Payment"),(0,a.kt)("p",null,"Details about builder payments to block proposers ",(0,a.kt)("a",{parentName:"p",href:"https://flashbots.notion.site/WIP-Builder-Payments-to-Block-Proposers-530eb36c60ad417a8702dd26da810b72"},"can be found here.")))}d.isMDXComponent=!0}}]);