(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(E,S,h){"use strict";h.r(S),h.d(S,"graphql",function(){return o}),h.d(S,"StaticQueryContext",function(){return r}),h.d(S,"StaticQuery",function(){return i});var I=h(0),A=h.n(I),e=h(4),t=h.n(e),x=h(143),v=h.n(x);h.d(S,"Link",function(){return v.a}),h.d(S,"withPrefix",function(){return x.withPrefix}),h.d(S,"navigate",function(){return x.navigate}),h.d(S,"push",function(){return x.push}),h.d(S,"replace",function(){return x.replace}),h.d(S,"navigateTo",function(){return x.navigateTo});var L=h(146),a=h.n(L);h.d(S,"PageRenderer",function(){return a.a});var n=h(34);h.d(S,"parsePath",function(){return n.a});var r=A.a.createContext({}),i=function(E){return A.a.createElement(r.Consumer,null,function(S){return E.data||S[E.query]&&S[E.query].data?(E.render||E.children)(E.data?E.data.data:S[E.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function o(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}i.propTypes={data:t.a.object,query:t.a.string.isRequired,render:t.a.func,children:t.a.func}},145:function(E,S){E.exports={siteTitle:"Fresh & Delish",siteTitleAlt:"Fresh and Delish",publisher:"Kim",siteDescription:"Delicious and healthy gluten-free vegetarian and fish recipes",siteUrl:"https://freshanddelish.github.io",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"Fresh & Delish",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 Kim"}},146:function(E,S,h){var I;E.exports=(I=h(158))&&I.default||I},152:function(E,S,h){"use strict";var I=h(0),A=h.n(I);S.a=function(E){return A.a.createElement("main",{role:"main"},E.children)}},153:function(E,S,h){"use strict";var I=h(0),A=h.n(I),e=h(147),t=h.n(e),x=(h(167),h(154),h(156)),v=h.n(x),L=h(145),a=h.n(L),n=(h(33),h(148),h(157)),r=h(144),i=h(159),o=h(150),c=h(151),u=function(E){var S=E.logo;return A.a.createElement("nav",{className:"hide-print sans-serif  border-box pa3 ph5-l"},A.a.createElement(r.Link,{to:"/",title:"Home"},A.a.createElement("img",{src:S.childImageSharp.fixed.src,className:"w4 br2",alt:a.a.siteTitleAlt})),A.a.createElement("div",{className:"fr h2 pv2 tr"},A.a.createElement(r.Link,{to:"/tags/",className:"link f5 ml3 dim near-white"},"Tags"),A.a.createElement(r.Link,{to:"/search/",className:"link f5 ml3 dim near-white",role:"search",title:"Search"},A.a.createElement(o.a,{icon:c.b}))))},l=function(){return A.a.createElement(r.StaticQuery,{query:"1906254768",render:u,data:i})},s=function(E){var S=E.data,h=E.title,I=E.subtitle,e=E.featuredImage;return A.a.createElement("header",{className:"cover bg-top",style:{backgroundImage:"url("+(e||S.header.childImageSharp.fixed.src)+")",backgroundPosition:"center"}},A.a.createElement("div",{className:"bg-black-40 bb bt"},A.a.createElement(l,null),A.a.createElement("div",{id:"hdr",className:"tc-l pv4-ns pv5-l pv2 ph3 ph4-ns"},A.a.createElement("h1",{className:"near-white mt1-ns f2 fw3 mb0 mt0 lh-title"},h),I&&A.a.createElement("h2",{className:"near-white mt3-l mb4-l fw1 f6 f3-l measure-wide-l center lh-copy mt2 mb3"},I))))},f=function(E){return A.a.createElement(r.StaticQuery,{query:"862781744",render:function(S){return A.a.createElement(s,Object.assign({data:S},E))},data:n})};S.a=function(E){var S=E.children,h=E.title,I=E.subtitle,e=E.featuredImage;return A.a.createElement("div",{className:"siteRoot"},A.a.createElement(t.a,null,A.a.createElement("title",null,a.a.siteTitle),A.a.createElement("meta",{charSet:"utf-8"}),A.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),A.a.createElement("link",{rel:"icon",href:v.a}),A.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,400i,700,700i|Quattrocento:400,700|Spectral:400,400i,700,700i&subset=latin-ext",rel:"stylesheet"}),A.a.createElement("meta",{name:"description",content:a.a.siteDescription}),A.a.createElement("meta",{property:"og:title",content:a.a.siteTitle}),A.a.createElement("meta",{property:"og:url",content:a.a.siteUrl}),A.a.createElement("meta",{property:"og:locale",content:"en_US"}),A.a.createElement("meta",{property:"og:type",content:"website"}),A.a.createElement("meta",{property:"og:site_name",content:a.a.siteTitle})),A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"siteContent"},A.a.createElement("div",{className:"ma0 bg-white"},A.a.createElement(f,{title:h,subtitle:I,featuredImage:e}),S))))}},154:function(E,S,h){},156:function(E,S){E.exports="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAKBEAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},157:function(E){E.exports={data:{header:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/9oADAMBAAIQAxAAAAGfcJoxt//EABgQAQADAQAAAAAAAAAAAAAAAAEAAgMh/9oACAEBAAEFAseywGjpYf/EABYRAQEBAAAAAAAAAAAAAAAAAAABUf/aAAgBAwEBPwHEr//EABgRAAIDAAAAAAAAAAAAAAAAAAABEkFR/9oACAECAQE/AVZFYf/EABgQAAIDAAAAAAAAAAAAAAAAAAABETFR/9oACAEBAAY/AlOjRZ//xAAXEAEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEBAAE/IUsdGIiHNnoT/9oADAMBAAIAAwAAABAAH//EABgRAAMBAQAAAAAAAAAAAAAAAAABESFR/9oACAEDAQE/EEpPRkWn/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMVGR8P/aAAgBAgEBPxBFHcCjpo//xAAaEAACAgMAAAAAAAAAAAAAAAABEQBhITFR/9oACAEBAAE/EEtoklyLKEI3QmPCKn//2Q==",width:1433,height:293,src:"/static/market-header-eabcc9b820ba1fdf6b705487257f3111-fe918.jpg",srcSet:"/static/market-header-eabcc9b820ba1fdf6b705487257f3111-fe918.jpg 1x"}}}}}},158:function(E,S,h){"use strict";h.r(S);h(33);var I=h(0),A=h.n(I),e=h(4),t=h.n(e),x=h(49),v=h(2),L=function(E){var S=E.location,h=v.default.getResourcesForPathnameSync(S.pathname);return A.a.createElement(x.a,Object.assign({location:S,pageResources:h},h.json))};L.propTypes={location:t.a.shape({pathname:t.a.string.isRequired}).isRequired},S.default=L},159:function(E){E.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAB7CAAAewgFu0HU+AAAA/0lEQVQY011Qy44BURC9GtE6Qrx1pIOwlLDhJyzsxAfYWPgeM7e7vbqnRxBbkpmFxPzXme6jPWJRt07VPXXqIYQUEJ8CERkBcWjv8Z2nSAWKqfA/akaZK6wL0GyNWPAJyHPfPm5FtPlT5MHxfXqZRtkpo71rU1S1VOTXeai2GgrKm1Dv2IPu6CxM2km0ti3mU4sU4lacOLvKImEl0PxukhvgoMFjEHkX9IPBaYDx7xjT6xSTywSzvxl0V8foZ4SG14DxZaB/7KN76NJ39h0Mz0OUNiUK8kSvKwfdMssMal4Nda9OorbQUHWriJkxTme4Bn1xU0RulUPFqTxXDe/8DydTrtGD+XSJAAAAAElFTkSuQmCC",width:160,height:43,src:"/static/logo-10eb310c7d1484b517a56d16a6a05e5b-d139a.png",srcSet:"/static/logo-10eb310c7d1484b517a56d16a6a05e5b-d139a.png 1x,\n/static/logo-10eb310c7d1484b517a56d16a6a05e5b-30fde.png 1.5x,\n/static/logo-10eb310c7d1484b517a56d16a6a05e5b-a61b1.png 2x"}}}}}},160:function(E,S,h){var I=h(163).Symbol;E.exports=I},163:function(E,S,h){var I=h(175),A="object"==typeof self&&self&&self.Object===Object&&self,e=I||A||Function("return this")();E.exports=e},164:function(E,S){var h=Array.isArray;E.exports=h},165:function(E,S,h){var I=h(170),A=h(179),e="[object Symbol]";E.exports=function(E){return"symbol"==typeof E||A(E)&&I(E)==e}},168:function(E,S,h){"use strict";var I=h(149),A=h.n(I),e=h(0),t=h.n(e);S.a=function(E){var S=E.body,h=A()(E,["body"]);return t.a.createElement("article",{className:"center bg-white br-3 pv1 ph4 nested-copy-line-height lh-copy f4 nested-links mw-100 measure-wide",dangerouslySetInnerHTML:S?{__html:S}:null},h.children)}},169:function(E,S,h){var I=h(174);E.exports=function(E){return null==E?"":I(E)}},170:function(E,S,h){var I=h(160),A=h(177),e=h(178),t="[object Null]",x="[object Undefined]",v=I?I.toStringTag:void 0;E.exports=function(E){return null==E?void 0===E?x:t:v&&v in Object(E)?A(E):e(E)}},174:function(E,S,h){var I=h(160),A=h(176),e=h(164),t=h(165),x=1/0,v=I?I.prototype:void 0,L=v?v.toString:void 0;E.exports=function E(S){if("string"==typeof S)return S;if(e(S))return A(S,E)+"";if(t(S))return L?L.call(S):"";var h=S+"";return"0"==h&&1/S==-x?"-0":h}},175:function(E,S,h){(function(S){var h="object"==typeof S&&S&&S.Object===Object&&S;E.exports=h}).call(this,h(166))},176:function(E,S){E.exports=function(E,S){for(var h=-1,I=null==E?0:E.length,A=Array(I);++h<I;)A[h]=S(E[h],h,E);return A}},177:function(E,S,h){var I=h(160),A=Object.prototype,e=A.hasOwnProperty,t=A.toString,x=I?I.toStringTag:void 0;E.exports=function(E){var S=e.call(E,x),h=E[x];try{E[x]=void 0;var I=!0}catch(E){}var A=t.call(E);return I&&(S?E[x]=h:delete E[x]),A}},178:function(E,S){var h=Object.prototype.toString;E.exports=function(E){return h.call(E)}},179:function(E,S){E.exports=function(E){return null!=E&&"object"==typeof E}},182:function(E,S,h){var I=h(195)(function(E,S,h){return E+(h?"-":"")+S.toLowerCase()});E.exports=I},195:function(E,S,h){var I=h(196),A=h(197),e=h(200),t=RegExp("['’]","g");E.exports=function(E){return function(S){return I(e(A(S).replace(t,"")),E,"")}}},196:function(E,S){E.exports=function(E,S,h,I){var A=-1,e=null==E?0:E.length;for(I&&e&&(h=E[++A]);++A<e;)h=S(h,E[A],A,E);return h}},197:function(E,S,h){var I=h(198),A=h(169),e=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,t=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");E.exports=function(E){return(E=A(E))&&E.replace(e,I).replace(t,"")}},198:function(E,S,h){var I=h(199)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});E.exports=I},199:function(E,S){E.exports=function(E){return function(S){return null==E?void 0:E[S]}}},200:function(E,S,h){var I=h(201),A=h(202),e=h(169),t=h(203);E.exports=function(E,S,h){return E=e(E),void 0===(S=h?void 0:S)?A(E)?t(E):I(E):E.match(S)||[]}},201:function(E,S){var h=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;E.exports=function(E){return E.match(h)||[]}},202:function(E,S){var h=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;E.exports=function(E){return h.test(E)}},203:function(E,S){var h="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",I="["+h+"]",A="\\d+",e="[\\u2700-\\u27bf]",t="[a-z\\xdf-\\xf6\\xf8-\\xff]",x="[^\\ud800-\\udfff"+h+A+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",a="[A-Z\\xc0-\\xd6\\xd8-\\xde]",n="(?:"+t+"|"+x+")",r="(?:"+a+"|"+x+")",i="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",o="[\\ufe0e\\ufe0f]?"+i+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",v,L].join("|")+")[\\ufe0e\\ufe0f]?"+i+")*"),c="(?:"+[e,v,L].join("|")+")"+o,u=RegExp([a+"?"+t+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[I,a,"$"].join("|")+")",r+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[I,a+n,"$"].join("|")+")",a+"?"+n+"+(?:['’](?:d|ll|m|re|s|t|ve))?",a+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",A,c].join("|"),"g");E.exports=function(E){return E.match(u)||[]}}}]);
//# sourceMappingURL=1-f4106fba1d8c7d698282.js.map