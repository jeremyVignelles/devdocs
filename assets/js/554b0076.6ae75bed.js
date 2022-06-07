"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[19368],{90414:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=o(83117),n=o(80102),a=(o(67294),o(3905)),r=o(13904),l=["components"],s={title:"Insecure configuration management",sidebar_label:"Insecure configuration",sidebar_position:13,tags:["Coding guidelines","Policies","Security"]},d=void 0,u={unversionedId:"development/policies/security/insecure-config",id:"development/policies/security/insecure-config",title:"Insecure configuration management",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/insecure-config.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/insecure-config",permalink:"/devdocs/general/development/policies/security/insecure-config",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/insecure-config.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:13,frontMatter:{title:"Insecure configuration management",sidebar_label:"Insecure configuration",sidebar_position:13,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Brute-forcing login",permalink:"/devdocs/general/development/policies/security/bruteforcing-login"},next:{title:"Buffer overruns",permalink:"/devdocs/general/development/policies/security/bufferoverruns"}},c={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,(0,i.Z)({frontMatter:s},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page forms part of the ",(0,a.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,a.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,a.kt)("p",null,"Evil Hacker somehow gets access to your server some time and installs some nasty code. For example, they could add some code to the login page that records every username and password entered, and sends it back to ",(0,a.kt)("inlineCode",{parentName:"p"},"evel-hacker.com"),"."),(0,a.kt)("p",null,"Unfortunately, you have no procedures in place for detecting that this is happening."),(0,a.kt)("p",null,"Another problem is not updating to the latest Moodle release, which means that you will be running a version of Moodle with know security holes."),(0,a.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,a.kt)("p",null,"This is not really a problem that can be solved from within Moodle code. However, any Moodle code that does install other PHP code (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/langimport.php"),") must be written with extreme care."),(0,a.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are writing code like ",(0,a.kt)("inlineCode",{parentName:"li"},"admin/langimport.php"),", make sure you know what you are doing.")),(0,a.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keep up-to-date with the latest Moodle release from whichever branch you are using.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Register your Moodle site, so you get notified of security problems before the general public."))),(0,a.kt)("li",{parentName:"ul"},"Think about how you deploy the Moodle code to your server. For example, if you ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org//en/Git_for_Administrators"},"use git"),", then ",(0,a.kt)("inlineCode",{parentName:"li"},"git status")," will tell you which files have been edited.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Alternatively, if you upload the Moodle code manually, delete all the old code except ",(0,a.kt)("inlineCode",{parentName:"li"},"config.php")," before you upload a new version."))),(0,a.kt)("li",{parentName:"ul"},"Be very careful who can access your servers.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}h.isMDXComponent=!0}}]);