(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(E,S,h){"use strict";h.r(S),h.d(S,"pageQuery",function(){return l});h(48);var I=h(0),A=h.n(I),e=h(147),t=h.n(e),a=(h(144),h(204),h(153)),v=h(152),x=h(161),L=h(162),n=h(145),r=h.n(n),i=function(E){var S=E.title,h=E.url;return A.a.createElement(t.a,null,A.a.createElement("title",null,S),A.a.createElement("meta",{property:"og:title",content:S}),A.a.createElement("meta",{property:"og:url",content:h}))};S.default=function(E){var S=E.pageContext,h=E.data,I=E.location,e=S.tag,t=h.allMarkdownRemark,n=t.edges,l=(t.totalCount,"Tag: "+e+" - "+r.a.siteTitle);return A.a.createElement(a.a,{title:"Tagged with: "+e},A.a.createElement(i,{title:l,url:I.href}),A.a.createElement(v.a,null,A.a.createElement(L.a,null,n.map(function(E){var S=E.node,h=S.fields.slug,I=S.frontmatter,e=I.title,t=I.featuredImage,a=S.excerpt;return A.a.createElement(x.a,{key:h,url:h,title:e,body:a,featuredImage:t})}))))};var l="831976781"},144:function(E,S,h){"use strict";h.r(S),h.d(S,"graphql",function(){return l}),h.d(S,"StaticQueryContext",function(){return r}),h.d(S,"StaticQuery",function(){return i});var I=h(0),A=h.n(I),e=h(4),t=h.n(e),a=h(143),v=h.n(a);h.d(S,"Link",function(){return v.a}),h.d(S,"withPrefix",function(){return a.withPrefix}),h.d(S,"navigate",function(){return a.navigate}),h.d(S,"push",function(){return a.push}),h.d(S,"replace",function(){return a.replace}),h.d(S,"navigateTo",function(){return a.navigateTo});var x=h(146),L=h.n(x);h.d(S,"PageRenderer",function(){return L.a});var n=h(34);h.d(S,"parsePath",function(){return n.a});var r=A.a.createContext({}),i=function(E){return A.a.createElement(r.Consumer,null,function(S){return E.data||S[E.query]&&S[E.query].data?(E.render||E.children)(E.data?E.data.data:S[E.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function l(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}i.propTypes={data:t.a.object,query:t.a.string.isRequired,render:t.a.func,children:t.a.func}},145:function(E,S){E.exports={siteTitle:"Fresh & Delish",siteTitleAlt:"Fresh and Delish",publisher:"Kim",siteDescription:"Delicious and healthy gluten-free vegetarian and fish recipes",siteUrl:"https://freshanddelish.github.io",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"Fresh & Delish",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 Kim"}},146:function(E,S,h){var I;E.exports=(I=h(158))&&I.default||I},152:function(E,S,h){"use strict";var I=h(0),A=h.n(I);S.a=function(E){return A.a.createElement("main",{role:"main"},E.children)}},153:function(E,S,h){"use strict";var I=h(0),A=h.n(I),e=h(147),t=h.n(e),a=(h(167),h(154),h(156)),v=h.n(a),x=h(145),L=h.n(x),n=(h(33),h(148),h(157)),r=h(144),i=h(159),l=h(150),c=h(151),s=function(E){var S=E.logo;return A.a.createElement("nav",{className:"hide-print sans-serif  border-box pa3 ph5-l"},A.a.createElement(r.Link,{to:"/",title:"Home"},A.a.createElement("img",{src:S.childImageSharp.fixed.src,className:"w4 br2",alt:L.a.siteTitleAlt})),A.a.createElement("div",{className:"fr h2 pv2 tr"},A.a.createElement(r.Link,{to:"/tags/",className:"link f5 ml3 dim near-white"},"Tags"),A.a.createElement(r.Link,{to:"/search/",className:"link f5 ml3 dim near-white",role:"search",title:"Search"},A.a.createElement(l.a,{icon:c.b}))))},o=function(){return A.a.createElement(r.StaticQuery,{query:"1906254768",render:s,data:i})},m=function(E){var S=E.data,h=E.title,I=E.subtitle,e=E.featuredImage;return A.a.createElement("header",{className:"cover bg-top",style:{backgroundImage:"url("+(e||S.header.childImageSharp.fixed.src)+")",backgroundPosition:"center"}},A.a.createElement("div",{className:"bg-black-40 bb bt"},A.a.createElement(o,null),A.a.createElement("div",{id:"hdr",className:"tc-l pv4-ns pv5-l pv2 ph3 ph4-ns"},A.a.createElement("h1",{className:"near-white mt1-ns f2 fw3 mb0 mt0 lh-title"},h),I&&A.a.createElement("h2",{className:"near-white mt3-l mb4-l fw1 f6 f3-l measure-wide-l center lh-copy mt2 mb3"},I))))},u=function(E){return A.a.createElement(r.StaticQuery,{query:"862781744",render:function(S){return A.a.createElement(m,Object.assign({data:S},E))},data:n})};S.a=function(E){var S=E.children,h=E.title,I=E.subtitle,e=E.featuredImage;return A.a.createElement("div",{className:"siteRoot"},A.a.createElement(t.a,null,A.a.createElement("title",null,L.a.siteTitle),A.a.createElement("meta",{charSet:"utf-8"}),A.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),A.a.createElement("link",{rel:"icon",href:v.a}),A.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,400i,700,700i|Quattrocento:400,700|Spectral:400,400i,700,700i&subset=latin-ext",rel:"stylesheet"}),A.a.createElement("meta",{name:"description",content:L.a.siteDescription}),A.a.createElement("meta",{property:"og:title",content:L.a.siteTitle}),A.a.createElement("meta",{property:"og:url",content:L.a.siteUrl}),A.a.createElement("meta",{property:"og:locale",content:"en_US"}),A.a.createElement("meta",{property:"og:type",content:"website"}),A.a.createElement("meta",{property:"og:site_name",content:L.a.siteTitle})),A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"siteContent"},A.a.createElement("div",{className:"ma0 bg-white"},A.a.createElement(u,{title:h,subtitle:I,featuredImage:e}),S))))}},154:function(E,S,h){},156:function(E,S){E.exports="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAKBEAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},157:function(E){E.exports={data:{header:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/9oADAMBAAIQAxAAAAGfcJoxt//EABgQAQADAQAAAAAAAAAAAAAAAAEAAgMh/9oACAEBAAEFAseywGjpYf/EABYRAQEBAAAAAAAAAAAAAAAAAAABUf/aAAgBAwEBPwHEr//EABgRAAIDAAAAAAAAAAAAAAAAAAABEkFR/9oACAECAQE/AVZFYf/EABgQAAIDAAAAAAAAAAAAAAAAAAABETFR/9oACAEBAAY/AlOjRZ//xAAXEAEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEBAAE/IUsdGIiHNnoT/9oADAMBAAIAAwAAABAAH//EABgRAAMBAQAAAAAAAAAAAAAAAAABESFR/9oACAEDAQE/EEpPRkWn/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMVGR8P/aAAgBAgEBPxBFHcCjpo//xAAaEAACAgMAAAAAAAAAAAAAAAABEQBhITFR/9oACAEBAAE/EEtoklyLKEI3QmPCKn//2Q==",width:1433,height:293,src:"/static/market-header-eabcc9b820ba1fdf6b705487257f3111-fe918.jpg",srcSet:"/static/market-header-eabcc9b820ba1fdf6b705487257f3111-fe918.jpg 1x"}}}}}},158:function(E,S,h){"use strict";h.r(S);h(33);var I=h(0),A=h.n(I),e=h(4),t=h.n(e),a=h(49),v=h(2),x=function(E){var S=E.location,h=v.default.getResourcesForPathnameSync(S.pathname);return A.a.createElement(a.a,Object.assign({location:S,pageResources:h},h.json))};x.propTypes={location:t.a.shape({pathname:t.a.string.isRequired}).isRequired},S.default=x},159:function(E){E.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAB7CAAAewgFu0HU+AAAA/0lEQVQY011Qy44BURC9GtE6Qrx1pIOwlLDhJyzsxAfYWPgeM7e7vbqnRxBbkpmFxPzXme6jPWJRt07VPXXqIYQUEJ8CERkBcWjv8Z2nSAWKqfA/akaZK6wL0GyNWPAJyHPfPm5FtPlT5MHxfXqZRtkpo71rU1S1VOTXeai2GgrKm1Dv2IPu6CxM2km0ti3mU4sU4lacOLvKImEl0PxukhvgoMFjEHkX9IPBaYDx7xjT6xSTywSzvxl0V8foZ4SG14DxZaB/7KN76NJ39h0Mz0OUNiUK8kSvKwfdMssMal4Nda9OorbQUHWriJkxTme4Bn1xU0RulUPFqTxXDe/8DydTrtGD+XSJAAAAAElFTkSuQmCC",width:160,height:43,src:"/static/logo-10eb310c7d1484b517a56d16a6a05e5b-d139a.png",srcSet:"/static/logo-10eb310c7d1484b517a56d16a6a05e5b-d139a.png 1x,\n/static/logo-10eb310c7d1484b517a56d16a6a05e5b-30fde.png 1.5x,\n/static/logo-10eb310c7d1484b517a56d16a6a05e5b-a61b1.png 2x"}}}}}},161:function(E,S,h){"use strict";var I=h(149),A=h.n(I),e=h(0),t=h.n(e),a=h(144),v=h(150),x=h(151);S.a=function(E){var S=E.url,h=E.featuredImage,I=E.title,e=(E.publishDate,E.body);A()(E,["url","featuredImage","title","publishDate","body"]);return t.a.createElement("div",{className:"relative w-100"},t.a.createElement("article",{className:"bb b--black-10"},t.a.createElement("div",{className:"db pv4 ph3 ph0-l no-underline dark-gray"},t.a.createElement("div",{className:"flex flex-column flex-row-ns"},t.a.createElement("div",{className:"mb4 mb0-ns w-100 h4 h4-m w4-m h5-ns w5-ns br3 cover hide-child",style:h&&{backgroundImage:"url("+h.childImageSharp.fluid.src+")",backgroundPosition:"center"}},t.a.createElement(a.Link,{to:S,className:"db child w-100 h-100 f7 lh-copy white no-underline br3 ph3 pt4 pt5-l ttu tc bg-black-60"})),t.a.createElement("div",{className:"w-100 w6-ns pl3-ns"},t.a.createElement("h1",{className:"f3 fw1 mt0 lh-title"},t.a.createElement(a.Link,{to:S,className:"color-inherit dim link"},I)),t.a.createElement("div",{className:"f6 f5-l lh-copy nested-copy-line-height nested-links"},t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),t.a.createElement("p",{className:"pa0 sans-serif f7"},t.a.createElement(a.Link,{to:S,className:"ba br3 pa2 link"},"Continue Reading ",t.a.createElement(v.a,{icon:x.a})))))))))}},162:function(E,S,h){"use strict";var I=h(0),A=h.n(I);S.a=function(E){return A.a.createElement("div",{className:"pa3 pa4-ns w-100 w-70-ns center"},A.a.createElement("section",{className:"w-100 mw8"},E.children))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-292e10518047b47fd19a.js.map