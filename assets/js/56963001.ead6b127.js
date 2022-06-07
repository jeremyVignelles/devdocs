"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[76495],{81555:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var a=i(83117),n=i(80102),o=(i(67294),i(3905)),l=i(13904),s=["components"],d={title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},r=void 0,c={unversionedId:"development/policies/security/commandline-injection",id:"development/policies/security/commandline-injection",title:"Command-line injection",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/commandline-injection.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/commandline-injection",permalink:"/devdocs/general/development/policies/security/commandline-injection",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/commandline-injection.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:6,frontMatter:{title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"SQL injection",permalink:"/devdocs/general/development/policies/security/sql-injection"},next:{title:"Data-loss",permalink:"/devdocs/general/development/policies/security/dataloss"}},m={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,(0,a.Z)({frontMatter:d},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page forms part of the ",(0,o.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,o.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,o.kt)("p",null,"This is very like SQL injection, except that it arises when we execute a command-line program rather than when we do a database query."),(0,o.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,o.kt)("p",null,"Always try to avoid using command-line tools if at all possible. Look for equivalent PHP libraries."),(0,o.kt)("p",null,"However, when there is no other option, it is the standard approach of cleaning the input, and then escaping the values that came from the user before including them in the command-line."),(0,o.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tyy to avoid using shell commands if at all possible.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Many utilities are available as PHP libraries."))),(0,o.kt)("li",{parentName:"ul"},"If you can't avoid shell commands, use ",(0,o.kt)("inlineCode",{parentName:"li"},"escapeshellcmd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"escapeshellarg"),".")),(0,o.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is not something you can do much about."),(0,o.kt)("li",{parentName:"ul"},"However, turn off Moodle features that use shell commands (for example, the LaTeX filter) unless you actually need them.")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}h.isMDXComponent=!0}}]);