(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(223);var n=a(0),o=a.n(n),i=a(636),r=a(628),s=a(633),l=a(260),c=a(7),d=a.n(c),u=a(264),m=a(623),p=a(632),h=a(637),f=a(635),y=a(300),g=a.n(y),v=a(630),b=a(365),w=a(194),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={activeIndex:null},t.handleClick=function(e,a){var n=a.index,o=t.state.activeIndex===n?-1:n;t.setState({activeIndex:o})},t}return d()(t,e),t.prototype.render=function(){var e=this.state.activeIndex;return o.a.createElement(m.a,null,o.a.createElement(m.a.Title,{active:0===e,index:0,onClick:this.handleClick,style:{display:"flex",flexDirection:"vertical",justifyContent:"space-between",alignItems:"center",fontWeight:500,color:"#000"}},"null"===this.props.summary?this.props.fallback:this.props.summary,o.a.createElement(l.a,{name:"dropdown",size:"small"})),o.a.createElement(m.a.Content,{active:0===e,style:{padding:"0 1em 1em 1em",color:"rgba(0, 0, 0, 0.6)"}},o.a.createElement("span",{style:{color:"#000"}},"FULL FOOD CODE:"),o.a.createElement("br",null),this.props.vioDesc))},t}(n.Component),C=function(e){var t=e.data,a=t.itemDescription+" "+g.a.lowerCase(t.subItem)+" "+g.a.lowerCase(t.problemDescription)+" "+g.a.lowerCase(t.subProblem);return o.a.createElement(f.a,null,o.a.createElement(i.a,{as:"h5"},"Code ",t.violationCode),o.a.createElement(E,{summary:a.trim(),fallback:"Expand for full food code definition",vioDesc:t.violationDescription}),o.a.createElement(v.a.Extra,{style:{paddingTop:10}},o.a.createElement(h.a,{trigger:o.a.createElement(b.a,{color:"Priority"===t.violationType?"red":"Foundation"===t.violationType?"orange":"yellow"},"Foundation"===t.violationType?"Priority Foundation":t.violationType),content:w.a.violations[t.violationType],basic:!0}),o.a.createElement(b.a,null,o.a.createElement(l.a,{name:"Yes"===t.corrected?"check":"No"===t.corrected?"times":"ban",color:"Yes"===t.corrected?"green":"No"===t.corrected?"red":"grey"}),"Yes"===t.corrected?"Corrected on "+Object(u.format)(t.correctedDate,"M-D-YY"):"No"===t.corrected?"Not corrected":t.corrected)))},D=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={activeIndex:null},t.handleClick=function(e,a){var n=a.index,o=t.state.activeIndex===n?-1:n;t.setState({activeIndex:o})},t}return d()(t,e),t.prototype.render=function(){var e=this,t=this.state.activeIndex;return o.a.createElement(m.a,{fluid:!0,styled:!0},this.props.data.map(function(a,n){return o.a.createElement("div",{key:n},o.a.createElement(m.a.Title,{active:t===n,index:n,onClick:e.handleClick,style:{display:"flex",flexDirection:"vertical",justifyContent:"space-between",alignItems:"center"}},o.a.createElement(i.a,{as:"h3"},Object(u.format)(a.inspectionDate,"M-D-YYYY"),o.a.createElement(i.a.Subheader,null,a.inspectionType+" ",o.a.createElement(l.a,{name:"Yes"===a.inCompliance?"check":"No"===a.inCompliance?"times":null,color:"Yes"===a.inCompliance?"green":"red"}))),o.a.createElement(l.a,{name:"dropdown"})),o.a.createElement(m.a.Content,{active:t===n},o.a.createElement(p.a,{basic:"very",celled:!0,compact:!0},o.a.createElement(p.a.Body,null,o.a.createElement(p.a.Row,{className:"Yes"===a.inCompliance?"positive":"No"===a.inCompliance?"negative":""},o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"Outcome")),o.a.createElement(p.a.Cell,null,"Yes"===a.inCompliance?"Compliant":"No"===a.inCompliance?"Not compliant":a.inCompliance,o.a.createElement("span",{style:{marginLeft:".5em"}},o.a.createElement(h.a,{wide:!0,size:"tiny",trigger:o.a.createElement(l.a,{circular:!0,name:"question",size:"small",color:"grey"})},w.a.outcomes[""+a.inCompliance])))))),"16"===Object(u.format)(a.inspectionDate,"YY")||"17"===Object(u.format)(a.inspectionDate,"YY")?o.a.createElement(s.a,{visible:!0,size:"small"},"***Please note that inspections pre-2018 were still occasionally completed on paper and follow-up visits to document corrections were not always digitized. This means that inspections in this time period are slightly more likely to show a not compliant outcome."):"",o.a.createElement(i.a,{as:"h5"},a.violationsByInspectionidList.length," ",1===a.violationsByInspectionidList.length?"violation":"violations"," cited ",a.violationsByInspectionidList.length>0?":":null),a.violationsByInspectionidList.length>0?o.a.createElement(f.a.Group,{divided:"true",verticalAlign:"middle"},a.violationsByInspectionidList.map(function(e,t){return o.a.createElement(C,{data:e,key:t})})):""))}))},t}(n.Component),k=a(182),x=(a(81),a(157)),q=a(638),T=a(622),I=a(631),F=function(e){var t=e.e,a=e.encoded;return o.a.createElement(q.a,{columns:2,stackable:!0},o.a.createElement(q.a.Row,null,o.a.createElement(q.a.Column,null,o.a.createElement(i.a,{as:"h3"},o.a.createElement("a",{href:"https://www.google.com/maps/@"+t.coords.split(",").reverse().join(",")+",18z"},t.name,o.a.createElement(i.a.Subheader,null,t.address,", Detroit, MI, ",t.zipcode))),o.a.createElement(T.a,{rounded:!0,bordered:!0,floated:"right",alt:"map of establishment",src:"https://api.mapbox.com/styles/v1/jmcbroom/cjsunv74q0t5a1fmo902wmiq0/static/geojson("+a+")/"+t.coords+",16,0,0/400x250@2x?access_token=pk.eyJ1Ijoiam1jYnJvb20iLCJhIjoianRuR3B1NCJ9.cePohSx5Od4SJhMVjFuCQA"})),o.a.createElement(q.a.Column,{textAlign:"left"},o.a.createElement(i.a,{as:"h3"},"Establishments nearby"),o.a.createElement(I.a,{link:!0,divided:!0,relaxed:!0,bordered:"true",size:"large",style:{height:275,overflowY:"scroll"}},t.nearbyList.map(function(e){return o.a.createElement(I.a.Item,{key:e.establishmentid},o.a.createElement(I.a.Content,null,o.a.createElement(x.a,{to:"/establishment/"+e.establishmentid},o.a.createElement(I.a.Header,{as:"a"},e.name),o.a.createElement(I.a.Description,{style:{color:"rgba(0, 0, 0, 0.6)"}},e.address))))})))))},P=function(e){var t=e.e;return o.a.createElement(p.a,{basic:"very",celled:!0,striped:!0,compact:"very"},o.a.createElement(p.a.Body,null,o.a.createElement(p.a.Row,{className:"Open"===t.establishmentStatus?"positive":""},o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"Status")),o.a.createElement(p.a.Cell,null,t.establishmentStatus?t.establishmentStatus:"Unknown")),o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"License type")),o.a.createElement(p.a.Cell,null,t.licenseType)),o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"State license number")),o.a.createElement(p.a.Cell,null,t.licenseNumber)),o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"Owner")),o.a.createElement(p.a.Cell,null,t.owner)),o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"Complexity level")),o.a.createElement(p.a.Cell,null,t.riskCategory?t.riskCategory:"Unknown",o.a.createElement("span",{style:{marginLeft:".5em"}},o.a.createElement(h.a,{wide:!0,size:"tiny",trigger:o.a.createElement(l.a,{circular:!0,name:"question",size:"small",color:"grey"})},w.a.risks[""+t.riskCategory])))),o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Cell,null,o.a.createElement("strong",null,"Review frequency")),o.a.createElement(p.a.Cell,null,0===Math.round(t.reviewFrequencyDays)?"Unknown":"Every "+Math.round(t.reviewFrequencyDays)+" days"))))},R=a(180);a.d(t,"query",function(){return S});t.default=function(e){var t=e.data.postgres.establishment[0],a={type:"Feature",geometry:t.geojson.geometry,properties:{"marker-symbol":"restaurant","marker-color":"#ace","fill-opacity":.8}},n=encodeURIComponent(JSON.stringify(a));return o.a.createElement(k.a,null,o.a.createElement(R.a,{title:t.name}),o.a.createElement(i.a,{as:"h2"},t.name,o.a.createElement(i.a.Subheader,null,t.address)),o.a.createElement(r.a,null),o.a.createElement(i.a,{as:"h3"},t.establishmentType),o.a.createElement(P,{e:t}),o.a.createElement(r.a,null),o.a.createElement(i.a,{as:"h3"},t.inspectionsByEstablishmentidList.length," Inspections",o.a.createElement(i.a.Subheader,null,"Since 8-1-2016")),o.a.createElement(D,{data:t.inspectionsByEstablishmentidList}),o.a.createElement(s.a,{visible:!0,size:"small"},o.a.createElement(s.a.Header,null,"About inspections"),"A restaurant is"," ",o.a.createElement("strong",null,"compliant")," ",o.a.createElement(l.a,{name:"check",color:"green"}),"when zero Priority or Priority Foundation violations are found during an inspection or when all P and PF violations are corrected; Core violations are not required to be corrected to be in compliance."),t.coords?o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(F,{e:t,encoded:n})):"")};var S="691280323"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(164);var c=o.a.createContext({}),d=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},164:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections"}}}}},178:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,a){e.exports=a.p+"static/cod-logo-3c15a0bdecbe50211480e8b9b7a32701.jpg"},180:function(e,t,a){"use strict";var n=a(181),o=a(0),i=a.n(o),r=a(4),s=a.n(r),l=a(220),c=a.n(l);function d(e){var t=e.description,a=e.lang,o=e.meta,r=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Detroit Restaurant Inspections",description:"Search restaurant inspections open data from the Detroit Health Department.",author:"IET"}}}}},182:function(e,t,a){"use strict";var n=a(177),o=a(0),i=a.n(o),r=a(4),s=a.n(r),l=a(157),c=a(622),d=a(636),u=a(179),m=a.n(u);d.a.propTypes={siteTitle:s.a.string},d.a.defaultProps={siteTitle:""};var p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{borderBottom:"4px solid #feb70d",marginBottom:"1.5rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"middle",flexWrap:"wrap"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(c.a,{src:m.a,style:{padding:0,margin:0,height:50},alt:"city of detroit logo"}),i.a.createElement(l.a,{to:"/",style:{color:"black",textDecoration:"none",textAlign:"right"}},i.a.createElement(d.a,{as:"h2"},t))),i.a.createElement(l.a,{to:"/about",style:{color:"black",textDecoration:"none"}},"ABOUT")))},h=(a(219),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});h.propTypes={children:s.a.node.isRequired};t.a=h},194:function(e,t,a){"use strict";t.a={outcomes:{Yes:"Compliant means zero Priority or Priority Foundation violations were cited or all P and PF violations were corrected.",No:"Not compliant means Priority or Priority Foundation violations were cited and not corrected."},violations:{Priority:"Priority violations are the most serious category and directly contribute to foodborne illness or food poisoning.",Foundation:"Priority Foundation violations are the second most serious category and indirectly contribute to foodborne illness or food poisoning.",Core:"Core violations are the least serious category and do not significantly contribute to foodborne illness or food poisoning, but are violations of other legal requirements."},risks:{High:"High indicates very complex food preparation and therefore a more frequent review schedule, such as full service restaurants.",Medium:"Medium indicates moderately complex food preparation, such as hamburger fast food chains and bars that serve food.",Low:"Low indicates very limited food preparation and therefore a less frequent review schedule, such as a coffee shops or bars that only serve beverages.",null:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. This is a new field that is in the process of being updated by the Detroit Health Department."},inspections:{"Routine inspection":"",Complaint:"","Pre-opening / Plan review":""},establishments:"This data includes restaurants and other food service establishments, like school cafeterias or stadium concessions, that are inspected by the Detroit Health Department (DHD). Grocery stores, convenience stores, and other packaged and raw food establishments are inspected by the Michigan Department of Agriculture and Rural Development (MDARD) and are not included here.",disclaimer:"If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email foodsafety@detroitmi.gov or call 313-876-0135 for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.",foodCodeLink:"https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf",contact:"foodsafety@detroitmi.gov",faqs_data:[{question:"How many restaurants are in Detroit?",answer:"There are approximately 1,900 restaurants operating in Detroit. This includes full service restaurants, faith based establishments, schools, coffee shops, bars, fast food chains, mobile food units, stadiums and casinos. You'll find about 2,100 records total in this data because closed establishments are still included if they were inspected by the Detroit Health Department since August 1, 2016."},{question:"How many inspections are done?",answer:"The Detroit Health Department's Food Safety team conducts 200-400 inspections per month. Approximately 3,500 inspections were conducted in 2018. Establishments are scheduled for routine inspections every xx-xxx days based on the complexity of their food preparation. See the 'Review frequency' field."},{question:"Are restaurants assigned grades?",answer:"No, the Detroit Health Department does not assign grades or scores to establishments based on their inspection outcomes. This practice is consistent across the entire state of Michigan; no municipal health departments currently utilize a grading system. Instead, an inspection is marked as compliant or not compliant based on the types of violations cited and whether or not they were corrected."},{question:"What are the most serious violations?",answer:"Priority violations are the most serious category of food code violations and directly contribute to foodborne illness outbreaks or food poisoning occurances. The second most serious violations are Priority Foundation, and the least serious are Core. An inspection only results in compliance when zero Priority or Priority Foundation violations are cited or when all Priority and Priority Foundation violations are corrected."},{question:"How long do restaurants have to correct their violations? How does the Food Safety team follow-up?",answer:"Priority violations should be corrected on site during the inspection, while Priority Foundation violations should be corrected within 10 days and Core violations should be corrected within 90 days of the inspection. The Food Safety team follows-up after 10 days to check the status of uncorrected violations and mark any as corrected, but does not follow up again to check the status of any outstanding Core violations because Core violations do not significantly contribute to foodborne illness or food poisoning, but are violations of other legal requirements. The number of cited versus corrected Priority and Priority Foundation violations determine overall compliance for that inspection."},{question:"What is a restaurant's complexity level?",answer:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. Possible values are High, Medium, and Low. This is a new field that is in the process of being updated by the Detroit Health Department, so some values may still appear null or unknown until the next review cycle."},{question:"I searched for a bakery that I know is in Detroit and open for business, but I don't see it included here?",answer:"If a bakery sells wholesale items, then it would be inspected by the Michigan Department of Agriculture and Rural Developement (MDARD), and therefore not included in this dataset."},{question:"I searched for a food truck that I see around Detroit, but I don't see it included here?",answer:"Food trucks operating in Detroit can be licensed to any municipal health department based on the owner's registered address. Independent of where they are licensed to, all food trucks should have their license visibly displayed on the exterior of the vehicle."},{question:"How often are these data updated?",answer:"Restaurant inspections data is updated monthly on the last day of the month and includes data through the last full month. For example, on March 31, the data will be updated to reflect inspections through February 28. This allows food safety inspectors time to verify their reports and follow up about corrections."},{question:"How can I access the raw data?",answer:"Restaurant inspections data is made freely available on Detroit's open data portal at data.detroitmi.gov."}],faqs_process:[{question:"What happens during a food safety inspection?",answer:"The Detroit Health Department Food Safety team observes the visual and physical food and operational processes of the staff during an inspection. Any observed violations that occur during an inspection are discussed with the management and staff. Any violations that are able to be corrected on-site during the inspection are documented."},{question:"How does a routine inspection differ from a complaint inspection?",answer:"If the Detroit Health Department Food Safety team receives a complaint about an establishment, they will initiate an inspection outside of the normal review cycle. During a complaint inspection, the Food Safety team will only observe and document violations related to the physical areas or processes that were noted in the complaint. Routine inspections on the other hand always observe the entire physical areas and processes of an establishment."},{question:"What is the goal of food safety inspections?",answer:"Food Safety inspections are conducted with the goal to reduce the possibility of foodborne illness occurances and foodborne illness outbreaks. DHD works towards this goal by conducting inspections and facilitating educational trainings at facilities."},{question:"What are the Food Safety Code standards?",answer:"The Food Safety Code standards are based on the five federal Food and Drug Administration (FDA) risk factors and interventions that are key to protecting consumer health. The five risk factors are: improper holding temperatures; inadequate cooking temperatures; contaminated equipment; food from unsafe sources; and, poor personal hygiene. The five associated interventions are: demonstration of knowledge; employee health control; controlling hands as a vehicle of contamination; time and temperature parameters for controlling pathogens; and, the consumer advisory."},{question:"At what point does DHD shut a restaurant down?",answer:"With the cooperation of the person-in-charge, a food establishment may be asked to close during interruptions of utility services, contaminated water supply, fire, flood, sewage back-up, or any situation where safe operations cannot be assured."},{question:"What should the public pay attention to when dining out?",answer:"The public should pay attention to restaurant cleanliness and maintenance, the appearance of employees (such as clean clothes, hair coverings when required, etc), food handling practices, and the presense of managment."}]}}}]);
//# sourceMappingURL=component---src-templates-establishment-page-js-658ebfa8996f0b5efdd1.js.map