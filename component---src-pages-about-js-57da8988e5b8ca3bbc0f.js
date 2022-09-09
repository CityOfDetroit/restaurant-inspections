"use strict";(self.webpackChunkrestaurant_inspections=self.webpackChunkrestaurant_inspections||[]).push([[682],{5653:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(6490),a=n(4917),r=n(4175),i=n(3824);var s=function(e,t){var n=-1,o=(0,i.Z)(e)?Array(e.length):[];return(0,r.Z)(e,(function(e,a,r){o[++n]=t(e,a,r)})),o},l=n(1844);var d=function(e,t){return((0,l.Z)(e)?o.Z:s)(e,(0,a.Z)(t,3))}},4777:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(7462),a=n(5505),r=n(7294),i=n(9347),s=n(2219),l=n(1721),d=n(5653),c=n(3865),u=n(4228),h=n(1349),p=n(7781),f=n(6490),m=n(8253),y=n(6919);var v=function(e,t,n,o){var a=-1,r=h.Z,i=!0,s=e.length,l=[],d=t.length;if(!s)return l;n&&(t=(0,f.Z)(t,(0,m.Z)(n))),o?(r=p.Z,i=!1):t.length>=200&&(r=y.Z,i=!1,t=new u.Z(t));e:for(;++a<s;){var c=e[a],v=null==n?c:n(c);if(c=o||0!==c?c:0,i&&v==v){for(var b=d;b--;)if(t[b]===v)continue e;l.push(c)}else r(t,v,o)||l.push(c)}return l},b=n(9605),g=n(3824),w=n(7419);var k=function(e){return(0,w.Z)(e)&&(0,g.Z)(e)},Z=(0,b.Z)((function(e,t){return k(e)?v(e,t):[]})),D=n(681),C=n(1924),x=n(3483),E=n(8840),P=n(4148),q=n(5287),I=n(8595),A=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).handleClick=function(e){return(0,c.Z)(t.props,"onClick",e,t.props)},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,l=e.children,d=e.className,c=e.content,u=e.icon,h=(0,a.Z)((0,i.lG)(n,"active"),"title",d),p=(0,s.Z)(t,this.props),f=(0,C.Z)(t,this.props),m=(0,q.Z)(u)?"dropdown":u;return x.kK(l)?r.createElement(f,(0,o.Z)({},p,{className:h,onClick:this.handleClick}),I.Z.create(m,{autoGenerateKey:!1}),c):r.createElement(f,(0,o.Z)({},p,{className:h,onClick:this.handleClick}),l)},t}(r.Component);function F(e){var t=e.active,n=e.children,l=e.className,d=e.content,c=(0,a.Z)("content",(0,i.lG)(t,"active"),l),u=(0,s.Z)(F,e),h=(0,C.Z)(F,e);return r.createElement(h,(0,o.Z)({},u,{className:c}),x.kK(n)?d:n)}A.handledProps=["active","as","children","className","content","icon","index","onClick"],A.create=(0,P.u5)(A,(function(e){return{content:e}})),F.handledProps=["active","as","children","className","content"],F.create=(0,P.u5)(F,(function(e){return{content:e}}));var H=F,T=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).handleTitleOverrides=function(e){return{onClick:function(n,o){(0,c.Z)(e,"onClick",n,o),(0,c.Z)(t.props,"onTitleClick",n,o)}}},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.active,n=e.content,o=e.index,a=e.title;return r.createElement(r.Fragment,null,A.create(a,{autoGenerateKey:!1,defaultProps:{active:t,index:o},overrideProps:this.handleTitleOverrides}),H.create(n,{autoGenerateKey:!1,defaultProps:{active:t}}))},t}(r.Component);T.handledProps=["active","content","index","onTitleClick","title"],T.create=(0,P.u5)(T,null);var _=T,N=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).computeNewIndex=function(e){var n=t.props.exclusive,o=t.state.activeIndex;return n?e===o?-1:e:(0,D.Z)(o,e)?Z(o,e):[].concat(o,[e])},t.handleTitleClick=function(e,n){var o=n.index;t.setState({activeIndex:t.computeNewIndex(o)}),(0,c.Z)(t.props,"onTitleClick",e,n)},t.isIndexActive=function(e){var n=t.props.exclusive,o=t.state.activeIndex;return n?o===e:(0,D.Z)(o,e)},t}(0,l.Z)(t,e);var n=t.prototype;return n.getInitialAutoControlledState=function(e){return{activeIndex:e.exclusive?-1:[]}},n.componentDidMount=function(){0},n.componentDidUpdate=function(){0},n.render=function(){var e=this,n=this.props,i=n.className,l=n.children,c=n.panels,u=(0,a.Z)("accordion",i),h=(0,s.Z)(t,this.props),p=(0,C.Z)(t,this.props);return r.createElement(p,(0,o.Z)({},h,{className:u}),x.kK(l)?(0,d.Z)(c,(function(t,n){return _.create(t,{defaultProps:{active:e.isIndexActive(n),index:n,onTitleClick:e.handleTitleClick}})})):l)},t}(E.Z);function M(e){var t=e.className,n=e.fluid,l=e.inverted,d=e.styled,c=(0,a.Z)("ui",(0,i.lG)(n,"fluid"),(0,i.lG)(l,"inverted"),(0,i.lG)(d,"styled"),t),u=(0,s.Z)(M,e);return r.createElement(N,(0,o.Z)({},u,{className:c}))}N.handledProps=["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"],N.defaultProps={exclusive:!0},N.autoControlledProps=["activeIndex"],N.create=(0,P.u5)(N,(function(e){return{content:e}})),M.handledProps=["className","fluid","inverted","styled"],M.Accordion=N,M.Content=H,M.Panel=_,M.Title=A;var S=M},4505:function(e,t){t.Z={outcomes:{Yes:"Compliant means zero Priority or Priority Foundation violations were cited, or all were corrected.",No:"Not compliant means Priority or Priority Foundation violations were cited and not corrected."},violations:{Priority:"Priority violations are the most serious category and directly contribute to foodborne illness or food poisoning.",Foundation:"Priority Foundation violations are the second most serious category and indirectly contribute to foodborne illness or food poisoning.",Core:"Core violations are the least serious category and primarily relate to general cleanliness and facility maintenance."},risks:{High:"High indicates complex food preparation; these facilities are inspected two or more times per year.",Medium:"Medium indicates moderately complex food preparation; these facilities are inspected at least once a year.",Low:"Low indicates simple food preparation; these facilities are inspected once a year.",null:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. This is a new field that is in the process of being updated by the Detroit Health Department."},links:{dhd:{display:"Detroit Health Department (DHD)",url:"https://detroitmi.gov/departments/detroit-health-department"},dhdFoodSafety:{display:"DHD Food Safety",url:"https://detroitmi.gov/departments/detroit-health-department/programs-and-services/food-safety"},dhdEmail:{display:"FoodSafetyDHD@detroitmi.gov",url:"mailto:foodsafetydhd@detroitmi.gov"},dhdPhone:{display:"313-876-0135",url:"tel:+13138760135"},mdard:{display:"Michigan Department of Agriculture & Rural Development (MDARD)",url:"https://www.michigan.gov/mdard/"},foodCode:{display:"Michigan Food Code",url:"https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf"},feedbackForm:{display:"this form",url:"https://app.smartsheet.com/b/form/078ffe2b874a4d55bb642cfbf5657056"},iet:{display:"Innovation & Emerging Technology",url:"https://cityofdetroit.github.io/iet/"},git:{display:"GitHub",url:"https://github.com/cityofdetroit/restaurant-inspections"},openData:{display:"open data",url:"https://data.detroitmi.gov/browse?q=restaurants"}},faqs_data:[{question:"How many restaurants are in Detroit?",answer:"There are approximately 1,900 restaurants operating in Detroit. This includes full service restaurants, faith based establishments, schools, coffee shops, bars, fast food chains, mobile food units, stadiums and casinos. You'll find about 2,300 open and closed establishments inspected by the Detroit Health Department since August 1, 2016."},{question:"How many inspections are done?",answer:"The Detroit Health Department conducts 200-400 inspections per month. Approximately 3,500 inspections were conducted in 2018. Establishments are scheduled for routine inspections based on the complexity of their food preparation. See the 'Review frequency' field."},{question:"Are restaurants assigned grades?",answer:"No, the Detroit Health Department does not assign grades or scores to establishments based on their inspection outcomes. Currently, no health department in Michigan utilizes a grading system. Instead, an inspection is marked as compliant or not compliant based on the type of violation(s) cited and whether or not they were corrected."},{question:"What are the most serious violations?",answer:"Priority violations are the most serious category of food code violations and directly contribute to foodborne illness outbreaks or food poisoning occurances. The second most serious violations are Priority Foundation, and the least serious are Core. An inspection only results in compliance when zero Priority or Priority Foundation violations are cited, or when all are corrected."},{question:"How long do restaurants have to correct their violations?",answer:"Priority violations are typically corrected during the inspection, while Priority Foundation violations should be corrected within 30 days and Core violations should be corrected within 90 days."},{question:"How does the Detroit Health Department follow-up after a violation is cited?",answer:"The Detroit Health Department follows-up within 30 days to check the status of uncorrected Priority and Priority Foundation violations. Uncorrected Core violations are reviewed at the next routine inspection."},{question:"What is a restaurant's complexity level?",answer:"Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. Possible values are High, Medium, and Low. This is a new field that is in the process of being updated by the Detroit Health Department, so some values may still appear null or unknown until the next review cycle."},{question:"I searched for a bakery that I know is in Detroit and open for business, but I don't see it included here?",answer:"If a bakery primarily wholesales to other businesses, then it is inspected by the Michigan Department of Agriculture and Rural Developement (MDARD), and therefore not included in this dataset."},{question:"I searched for a food truck that I see around Detroit, but I don't see it included here?",answer:"Food trucks operating in Detroit may be licensed by another health department in the state and may operate in other areas. All food trucks should have their license decal visibly displayed on the exterior of the vehicle."},{question:"How often is this data updated?",answer:"Restaurant inspections data is updated monthly on the last day of the month and includes data through the last full month. For example, on March 31, the data will be updated to reflect inspections through February 28. This allows food safety inspectors time to verify their reports and follow-up on corrections."},{question:"How can I access the raw data?",answer:"Restaurant inspections data is made freely available on Detroit's open data portal at data.detroitmi.gov."}],faqs_process:[{question:"What happens during a food safety inspection?",answer:"The Detroit Health Department Food Safety team observes food handling and facility operations during an inspection. Observed violations that occur during an inspection are documented and discussed with management and staff. Any violations that are able to be corrected on-site during the inspection are documented as corrected."},{question:"How is a complaint inspection different than a routine inspection?",answer:"During a complaint inspection, the Detroit Health Department inspector will only observe and document violations related to the complaint. During a routine inspection, the entire facility and processes of an establishment are observed."},{question:"What is the goal of food safety inspections?",answer:"Food Safety inspections are conducted to reduce the potential for foodborne illness and food poisoning."},{question:"What is the responsibility of the restaurant's Person-In-Charge (Manager/Supervisor)?",answer:"The role of the Person-In-Charge is to ensure that employees are trained and following food safety standards."},{question:"What are the Food Safety standards based on?",answer:"Food Safety standards are based on the Food and Drug Administration (FDA) foodborne illness risk factors. The control measures to protect consumer health are: demonstration of knowledge; employee health; preventing contamination from hands; time and temperature requirements for cooking and holding food; approved food sources; and, consumer advisories."},{question:"At what point does the Detroit Health Department shut a restaurant down?",answer:"An establishment may be asked to close during interruptions of utility services, contaminated water supply, fire, flood, sewage back-up, or any situation where safe operations cannot be assured. The Detroit Health Department will issue a Closure Order if necessary."},{question:"What should the public pay attention to when dining out?",answer:"The public should pay attention to restaurant cleanliness, maintenance, food handling practices, the presence of management and the appearance of employees (such as clean clothes and hands, hair coverings when required, etc)."}]}},9208:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(7294),a=n(6613),r=n(5685),i=n(262),s=n(1721),l=n(4777),d=n(8595),c=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={activeIndex:null},t.handleClick=function(e,n){var o=n.index,a=t.state.activeIndex===o?-1:o;t.setState({activeIndex:a})},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this,t=this.state.activeIndex;return o.createElement(l.Z,{fluid:!0},this.props.data.map((function(n,a){return o.createElement("div",{key:a,style:{borderBottom:"1px solid rgba(34, 36, 38, 0.15)",padding:".5em 0"}},o.createElement(l.Z.Title,{active:t===a,index:a,onClick:e.handleClick,style:{display:"flex",flexDirection:"vertical",justifyContent:"space-between",alignItems:"center"}},n.question,o.createElement(d.Z,{name:"dropdown"})),o.createElement(l.Z.Content,{active:t===a},o.createElement("span",{style:{color:"rgba(0, 0, 0, 0.6)"}},n.answer)))})))},t}(o.Component),u=c,h=n(4505),p=function(){return o.createElement(r.Z,null,o.createElement(i.Z,{title:"About"}),o.createElement(a.Z,{as:"h1"},"About"),o.createElement("p",null,"This site provides information about food safety inspections in the City of Detroit."),o.createElement("p",null,"The data includes restaurants and other food service establishments, like school cafeterias and stadium concessions, that are inspected by the ",o.createElement("a",{href:h.Z.links.dhd.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.dhd.display),"."),o.createElement("p",null,"Grocery stores, liquor stores, and other packaged food establishments are inspected by the ",o.createElement("a",{href:h.Z.links.mdard.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.mdard.display)," and are not included here."),o.createElement("p",null,"If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email ",o.createElement("a",{href:h.Z.links.dhdEmail.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.dhdEmail.display)," or call ",o.createElement("a",{href:h.Z.links.dhdPhone.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.dhdPhone.display)," for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message."),o.createElement(a.Z,{as:"h2"},"Frequently Asked Questions"),o.createElement(a.Z,{as:"h4"},"About the data"),o.createElement(u,{data:h.Z.faqs_data}),o.createElement(a.Z,{as:"h4"},"About the inspection process"),o.createElement(u,{data:h.Z.faqs_process}),o.createElement(a.Z,{as:"h2"},"Share Feedback"),o.createElement("p",null,"This site is built by the ",o.createElement("a",{href:h.Z.links.iet.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.iet.display)," team at the City of Detroit in partnership with the Detroit Health Department using ",o.createElement("a",{href:h.Z.links.openData.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.openData.display),". Our code is on ",o.createElement("a",{href:h.Z.links.git.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.git.display),"."),o.createElement("p",null,"Have an idea or question? Use ",o.createElement("a",{href:h.Z.links.feedbackForm.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.feedbackForm.display)," to get in touch with our project team or email ",o.createElement("a",{href:h.Z.links.dhdEmail.url,target:"_blank",rel:"noopener noreferrer"},h.Z.links.dhdEmail.display),"."),o.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-57da8988e5b8ca3bbc0f.js.map