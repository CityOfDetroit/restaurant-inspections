(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(157),o=a(182),c=a(180);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"404"}),r.a.createElement("h1",null,"404 Not Found"),r.a.createElement("p",null,"Sorry, this page doesn't exist. ",r.a.createElement(i.a,{to:"/"},"Go back home.")))}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),s=a.n(c);a.d(t,"a",function(){return s.a});a(164);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections"}}}}},178:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},179:function(e,t,a){e.exports=a.p+"static/cod-logo-3c15a0bdecbe50211480e8b9b7a32701.jpg"},180:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(220),l=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,d=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections",description:"Search restaurant inspections open data from the Detroit Health Department.",author:"IET"}}}}},182:function(e,t,a){"use strict";var n=a(177),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(157),l=a(622),d=a(636),u=a(365),p=a(179),m=a.n(p);d.a.propTypes={siteTitle:c.a.string},d.a.defaultProps={siteTitle:""};var g=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{borderBottom:"4px solid #feb70d",marginBottom:"1.5rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"middle",flexWrap:"wrap"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(l.a,{src:m.a,style:{padding:0,margin:0,height:50},alt:"city of detroit logo"}),i.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none",textAlign:"right"}},i.a.createElement(d.a,{as:"h2"},t))),i.a.createElement(s.a,{to:"/about",style:{color:"black",textDecoration:"none"}},"ABOUT"),i.a.createElement(u.a,{color:"teal",tag:!0},"BETA")))},f=(a(219),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-dec893dd28daff36ce9a.js.map