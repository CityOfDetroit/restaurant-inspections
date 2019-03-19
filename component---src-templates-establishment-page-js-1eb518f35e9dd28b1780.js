(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(223);var n=a(0),r=a.n(n),o=a(638),i=a(628),l=a(633),s=a(260),c=a(7),d=a.n(c),m=a(264),u=a(622),p=a(632),h=a(637),y=a(635),f=a(300),g=a.n(f),v=a(194),E=a(630),b=a(365),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeIndex:null},t.handleClick=function(e,a){var n=a.index,r=t.state.activeIndex===n?-1:n;t.setState({activeIndex:r})},t}return d()(t,e),t.prototype.render=function(){var e=this.state.activeIndex;return r.a.createElement(u.a,{styled:!1},r.a.createElement(u.a.Title,{styled:!1,active:0===e,index:0,onClick:this.handleClick,style:{display:"flex",flexDirection:"vertical",justifyContent:"space-between",alignItems:"center",fontWeight:500,color:"#000"}},"null"===this.props.summary?this.props.fallback:this.props.summary,r.a.createElement(s.a,{name:"dropdown",size:"small"})),r.a.createElement(u.a.Content,{styled:!1,active:0===e,style:{padding:"0 1em 1em 1em",color:"rgba(0, 0, 0, 0.6)"}},r.a.createElement("span",{style:{color:"#000"}},"FULL FOOD CODE:"),r.a.createElement("br",null),this.props.vioDesc))},t}(n.Component),C=function(e){var t=e.data,a=t.itemDescription+" "+g.a.lowerCase(t.subItem)+" "+g.a.lowerCase(t.problemDescription)+" "+g.a.lowerCase(t.subProblem);return r.a.createElement(y.a,null,r.a.createElement(o.a,{as:"h5"},"Code ",t.violationCode),r.a.createElement(w,{summary:a.trim(),fallback:"Expand for full food code definition",vioDesc:t.violationDescription}),r.a.createElement(E.a.Extra,{style:{paddingTop:10}},r.a.createElement(h.a,{trigger:r.a.createElement(b.a,{color:"Priority"===t.violationType?"red":"Foundation"===t.violationType?"orange":"yellow"},"Foundation"===t.violationType?"Priority Foundation":t.violationType),content:v.a.violations[t.violationType],basic:!0}),r.a.createElement(b.a,null,r.a.createElement(s.a,{name:"Yes"===t.corrected?"check":"No"===t.corrected?"times":"ban",color:"Yes"===t.corrected?"green":"No"===t.corrected?"red":"grey"}),"Yes"===t.corrected?"Corrected on "+Object(m.format)(t.correctedDate,"M-D-YY"):"No"===t.corrected?"Not corrected":t.corrected)))},x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeIndex:null},t.handleClick=function(e,a){var n=a.index,r=t.state.activeIndex===n?-1:n;t.setState({activeIndex:r})},t}return d()(t,e),t.prototype.render=function(){var e=this,t=this.state.activeIndex;return r.a.createElement(u.a,{fluid:!0,styled:!0},this.props.data.map(function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(u.a.Title,{active:t===n,index:n,onClick:e.handleClick,style:{display:"flex",flexDirection:"vertical",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(o.a,{as:"h3"},Object(m.format)(a.inspectionDate,"M-D-YYYY"),r.a.createElement(o.a.Subheader,null,a.inspectionType+" ",r.a.createElement(s.a,{name:"Yes"===a.inCompliance?"check":"No"===a.inCompliance?"times":null,color:"Yes"===a.inCompliance?"green":"red"}))),r.a.createElement(s.a,{name:"dropdown"})),r.a.createElement(u.a.Content,{active:t===n},r.a.createElement(p.a,{basic:"very",celled:!0,compact:!0},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Row,{className:"Yes"===a.inCompliance?"positive":"No"===a.inCompliance?"negative":""},r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"Outcome")),r.a.createElement(p.a.Cell,null,"Yes"===a.inCompliance?"Compliant":"No"===a.inCompliance?"Not compliant":a.inCompliance,r.a.createElement("span",{style:{marginLeft:".5em"}},r.a.createElement(h.a,{wide:!0,size:"tiny",trigger:r.a.createElement(s.a,{circular:!0,name:"question",size:"small",color:"grey"})},v.a.outcomes[""+a.inCompliance])))))),r.a.createElement(o.a,{as:"h5"},a.violationsByInspectionidList.length," ",1===a.violationsByInspectionidList.length?"violation":"violations"," cited ",a.violationsByInspectionidList.length>0?":":null),a.violationsByInspectionidList.length>0?r.a.createElement(y.a.Group,{divided:!0,verticalAlign:"middle"},a.violationsByInspectionidList.map(function(e,t){return r.a.createElement(C,{data:e,key:t})})):""))}))},t}(n.Component),k=a(182),D=(a(81),a(157)),I=a(636),q=a(623),T=a(631),R=function(e){var t=e.e,a=e.encoded;return r.a.createElement(I.a,{columns:2,stackable:!0},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,null,r.a.createElement(o.a,{as:"h3"},r.a.createElement("a",{href:"https://www.google.com/maps/@"+t.coords.split(",").reverse().join(",")+",18z"},t.name,r.a.createElement(o.a.Subheader,null,t.address,", Detroit, MI, ",t.zipcode))),r.a.createElement(q.a,{rounded:!0,bordered:!0,floated:"right",alt:"map of establishment",src:"https://api.mapbox.com/styles/v1/jmcbroom/cjsunv74q0t5a1fmo902wmiq0/static/geojson("+a+")/"+t.coords+",16,0,0/400x250@2x?access_token=pk.eyJ1Ijoiam1jYnJvb20iLCJhIjoianRuR3B1NCJ9.cePohSx5Od4SJhMVjFuCQA"})),r.a.createElement(I.a.Column,{textAlign:"left"},r.a.createElement(o.a,{as:"h3"},"Establishments nearby"),r.a.createElement(T.a,{link:!0,divided:!0,relaxed:!0,bordered:"true",size:"large",style:{height:275,overflowY:"scroll"}},t.nearbyList.map(function(e){return r.a.createElement(T.a.Item,{key:e.establishmentid},r.a.createElement(T.a.Content,null,r.a.createElement(D.a,{to:"/establishment/"+e.establishmentid},r.a.createElement(T.a.Header,{as:"a"},e.name),r.a.createElement(T.a.Description,{style:{color:"rgba(0, 0, 0, 0.6)"}},e.address))))})))))},P=function(e){var t=e.e;return r.a.createElement(p.a,{basic:"very",celled:!0,striped:!0,compact:"very"},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Row,{className:"Open"===t.establishmentStatus?"positive":""},r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"Status")),r.a.createElement(p.a.Cell,null,t.establishmentStatus?t.establishmentStatus:"Unknown")),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"License type")),r.a.createElement(p.a.Cell,null,t.licenseType)),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"State license number")),r.a.createElement(p.a.Cell,null,t.licenseNumber)),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"Owner")),r.a.createElement(p.a.Cell,null,t.owner)),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"Complexity level")),r.a.createElement(p.a.Cell,null,t.riskCategory?t.riskCategory:"Unknown",r.a.createElement("span",{style:{marginLeft:".5em"}},r.a.createElement(h.a,{wide:!0,size:"tiny",trigger:r.a.createElement(s.a,{circular:!0,name:"question",size:"small",color:"grey"})},v.a.risks[""+t.riskCategory])))),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Cell,null,r.a.createElement("strong",null,"Review frequency")),r.a.createElement(p.a.Cell,null,0===Math.round(t.reviewFrequencyDays)?"Unknown":"Every "+Math.round(t.reviewFrequencyDays)+" days"))))},F=a(180);a.d(t,"query",function(){return M});t.default=function(e){var t=e.data.postgres.establishment[0],a={type:"Feature",geometry:t.geojson.geometry,properties:{"marker-symbol":"restaurant","marker-color":"#ace","fill-opacity":.8}},n=encodeURIComponent(JSON.stringify(a));return r.a.createElement(k.a,null,r.a.createElement(F.a,{title:t.name}),r.a.createElement(o.a,{as:"h2"},t.name,r.a.createElement(o.a.Subheader,null,t.address)),r.a.createElement(i.a,null),r.a.createElement(o.a,{as:"h3"},t.establishmentType),r.a.createElement(P,{e:t}),r.a.createElement(i.a,null),r.a.createElement(o.a,{as:"h3"},t.inspectionsByEstablishmentidList.length," Inspections",r.a.createElement(o.a.Subheader,null,"Since 8-1-2016")),r.a.createElement(x,{data:t.inspectionsByEstablishmentidList}),r.a.createElement(l.a,{visible:!0,size:"small"},r.a.createElement(l.a.Header,null,"About inspections"),"A restaurant is"," ",r.a.createElement("strong",null,"compliant")," ",r.a.createElement(s.a,{name:"check",color:"green"}),"when zero Priority or Priority Foundation violations are found during an inspection or when all P and PF violations are corrected; Core violations are not required to be corrected."),t.coords?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(R,{e:t,encoded:n})):"")};var M="691280323"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(32),s=a.n(l);a.d(t,"a",function(){return s.a});a(164);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections"}}}}},178:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,a){e.exports=a.p+"static/cod-logo-3c15a0bdecbe50211480e8b9b7a32701.jpg"},180:function(e,t,a){"use strict";var n=a(181),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(220),c=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,s=n.data.site,d=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections",description:"Search restaurant inspections open data from the Detroit Health Department.",author:"IET"}}}}},182:function(e,t,a){"use strict";var n=a(177),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(157),c=a(623),d=a(638),m=a(179),u=a.n(m);d.a.propTypes={siteTitle:l.a.string},d.a.defaultProps={siteTitle:""};var p=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{borderBottom:"4px solid #feb70d",marginBottom:"1.5rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"middle",flexWrap:"wrap"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(c.a,{src:u.a,style:{padding:0,margin:0,height:50},alt:"city logo"}),o.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none",textAlign:"right"}},o.a.createElement(d.a,{as:"h2"},t))),o.a.createElement(s.a,{to:"/about",style:{color:"black",textDecoration:"none"}},"ABOUT")))},h=(a(219),function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))},data:n})});h.propTypes={children:l.a.node.isRequired};t.a=h},194:function(e,t,a){"use strict";t.a={outcomes:{Yes:"Compliant means zero Priority or Priority Foundation violations were cited or all P and PF violations were corrected.",No:"Not compliant means Priority or Priority Foundation violations were cited and not corrected."},violations:{Priority:"Priority violations are the most serious category and directly contribute to foodborne illness or food poisoning.",Foundation:"Priority Foundation violations are the second most serious category and indirectly contribute to foodborne illness or food poisoning.",Core:"Core violations are the least serious category and do not significantly contribute to foodborne illness or food poisoning, but are violations of other legal requirements."},risks:{High:"High indicates very complex food preparation and therefore a more frequent review schedule, such as full service restaurants.",Medium:"Medium indicates moderately complex food preparation, such as hamburger fast food chains and bars that serve food.",Low:"Low indicates very limited food preparation and therefore a less frequent review schedule, such as a coffee shops or bars that only serve beverages.",null:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. This is a new field that is in the process of being updated by the Detroit Health Department."},inspections:{"Routine inspection":"",Complaint:"","Pre-opening / Plan review":""},establishments:"This data includes restaurants and other food service establishments, like school cafeterias or stadium concessions, that are inspected by the Detroit Health Department (DHD). Grocery stores, convenience stores, and other packaged and raw food establishments are inspected by the Michigan Department of Agriculture and Rural Development (MDARD) and are not included here.",disclaimer:"If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email foodsafety@detroitmi.gov or call 313-876-0135 for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.",foodCodeLink:"https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf",contact:"foodsafety@detroitmi.gov",faqs:[{question:"Are restaurants assigned grades?",answer:"No, the Detroit Health Department does not assign grades or scores to establishments based on their inspection outcomes. This practice is consistent across the state of Michigan; no municipal health departments currently utilize a grading system. Instead, an inspection is marked as compliant or not compliant based on the types of violations cited and whether or not they were corrected."},{question:"What does complexity level mean for establishments?",answer:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. Possible values are High, Medium, and Low. This is a new field that is in the process of being updated by the Detroit Health Department, so some values may still appear null or unknown until the next review cycle."},{question:"I searched for a bakery that I know is in Detroit and open for business, but I don't see it included here?",answer:"If a bakery sells wholesale items, then it would be inspected by the Michigan Department of Agriculture and Rural Developement (MDARD), and therefore not included in this dataset."},{question:"I searched for a food truck that I see around Detroit, but I don't see it included here?",answer:"Food trucks operating in Detroit can be licensed to any municipal health department based on the owner's registered address. Independent of where they are licensed to, all food trucks should have their license visibly displayed on the exterior of the vehicle."},{question:"How often are these data updated?",answer:"Restaurant inspections data is updated monthly on the last day of the month and includes data through the last full month. For example, on March 31, the data will be updated to reflect inspections through February 28. This allows food safety inspectors time to verify their reports and follow up about corrections."},{question:"How can I access the raw data?",answer:"Restaurant inspections data is made freely available on Detroit's open data portal at data.detroitmi.gov."}]}}}]);
//# sourceMappingURL=component---src-templates-establishment-page-js-1eb518f35e9dd28b1780.js.map