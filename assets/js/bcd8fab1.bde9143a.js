"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[67065],{68022:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return u}});var n=a(83117),o=a(80102),s=(a(67294),a(3905)),i=a(13904),r=["components"],l={title:"AMOS manual",sidebar_position:3,tags:["Processes","Translation","Language"]},p=void 0,h={unversionedId:"development/process/translation/amos",id:"development/process/translation/amos",title:"AMOS manual",description:"AMOS stands for Automated Manipulation Of Strings. AMOS is a central repository of Moodle strings and their history. It tracks the addition of English strings into Moodle code, gathers translations, handles common translation tasks and generates language packages to be deployed on Moodle servers.",source:"@site/general/development/process/translation/amos.md",sourceDirName:"development/process/translation",slug:"/development/process/translation/amos",permalink:"/devdocs/general/development/process/translation/amos",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/translation/amos.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Translation",permalink:"/devdocs/general/tags/translation"},{label:"Language",permalink:"/devdocs/general/tags/language"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:3,frontMatter:{title:"AMOS manual",sidebar_position:3,tags:["Processes","Translation","Language"]},sidebar:"process",previous:{title:"Maintaining",permalink:"/devdocs/general/development/process/translation/maintaining"},next:{title:"Language pack",permalink:"/devdocs/general/development/process/translation/langpack/"}},d={},u=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Translation workflow",id:"translation-workflow",level:2},{value:"AMOS tools",id:"amos-tools",level:2},{value:"Using the translator tool",id:"using-the-translator-tool",level:3},{value:"Using the stage",id:"using-the-stage",level:3},{value:"Importing a file",id:"importing-a-file",level:3},{value:"Using stashes",id:"using-stashes",level:3},{value:"Using the log tool",id:"using-the-log-tool",level:3},{value:"Language packs and Moodle versions",id:"language-packs-and-moodle-versions",level:3},{value:"Keeping track of your &#39;favorite&#39; plugins strings to translate",id:"keeping-track-of-your-favorite-plugins-strings-to-translate",level:2},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],m={toc:u};function g(e){var t=e.components,p=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,n.Z)({frontMatter:l},void 0!==h?{metadata:h}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"AMOS")," stands for ",(0,s.kt)("strong",{parentName:"p"},"Automated Manipulation Of Strings"),". AMOS is a central repository of Moodle strings and their history. It tracks the addition of English strings into Moodle code, gathers translations, handles common translation tasks and generates language packages to be deployed on Moodle servers."),(0,s.kt)("p",{parentName:"div"},"The name was chosen in honour of ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/John_Amos_Comenius"},"John Amos Comenius"),", the author of ",(0,s.kt)("inlineCode",{parentName:"p"},"Janua linguarum reserata")," (Gate to Languages Unlocked). Sorry Tori ;-)"))),(0,s.kt)("p",null,"AMOS is hosted on our ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://lang.moodle.org"},"Moodle translation site")),"."),(0,s.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,s.kt)("p",null,"AMOS consists of several tools available via the main navigation block: Translator, Stage, Stashes, Contributions and Log."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Translator")," is a tool that allows you to filter strings you want to work on and translate them."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Stage")," is a temporary working area that holds the strings you have translated during the current session. Maintainers can permanently commit the stage into the strings repository. Contributors can submit the stage for maintainers."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Stashes")," are snapshots of the stage. Imagine them as ordinary files at your computer where you can save your work. You can submit your stash to the language pack maintainers."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Contributions")," is a database tracking all submitted contributions and their current status. Records in this database are like issues in the Moodle tracker with the translated strings attached."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Repository")," a database of all Moodle strings and their history running at lang.moodle.org server."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log")," displays the log of all modifications of Moodle strings.")),(0,s.kt)("h2",{id:"translation-workflow"},"Translation workflow"),(0,s.kt)("p",null,"The following data flow diagram illustrates how AMOS tools are used during the translation process:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AMOS workflow",src:a(2739).Z,width:"877",height:"293"})),(0,s.kt)("p",null,"The key AMOS component is the staging area or shortly the stage. It holds translated strings temporarily during your current login session. If you log out, the stage is cleared (though there is a backup - see below). There are several ways how translations can be staged, that is how translated strings can be put into the stage:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"by using the AMOS translator"),(0,s.kt)("li",{parentName:"ul"},"by importing strings from an uploaded file"),(0,s.kt)("li",{parentName:"ul"},"by applying a previously created stash"),(0,s.kt)("li",{parentName:"ul"},"by applying a submitted contribution")),(0,s.kt)("p",null,"Language pack maintainers have write access to the AMOS strings repository. Therefore they can commit their stage permanently. Once the stage is committed, staged strings are stored in the AMOS repository. Every hour, AMOS generates ZIP packages from the most recent snapshot of the repository. These ZIP packages are published on the language pack download pages ",(0,s.kt)("a",{parentName:"p",href:"https://download.moodle.org/langpack/"},"https://download.moodle.org/langpack/"),". In addition, Moodle sites can install and update language packages automatically via ",(0,s.kt)("strong",{parentName:"p"},"Site administration > Language > Language packs"),"."),(0,s.kt)("p",null,"Community members do not have write access to the repository so they can't commit their stage. Instead, they can submit it to the maintainers. By submitting a stage, a new contribution record is created and language pack maintainers are notified by automatic email message. Maintainers can review the submitted contribution and, if they accept it, commit it on behalf of the contributor."),(0,s.kt)("p",null,"The stage can be also saved so you can interrupt your work and continue next time you come back to the site. The stage is saved into the so called 'stashing area'. The stashing area consists of stashes. A new stash is simply a snapshot copy of your current stage. AMOS automatically keeps one stash for you as a backup copy of your most recent stage. A stash can be submitted to the maintainers too."),(0,s.kt)("h2",{id:"amos-tools"},"AMOS tools"),(0,s.kt)("h3",{id:"using-the-translator-tool"},"Using the translator tool"),(0,s.kt)("p",null,"The translator tool page has two main parts. At the top, there is a filter form ",(0,s.kt)("inlineCode",{parentName:"p"},"(1)"),". You use that filter to get the strings you want to translate. When the filter settings are saved ",(0,s.kt)("inlineCode",{parentName:"p"},"(2)"),", a table with the filtered strings is displayed below."),(0,s.kt)("p",null,"Every row in the table represents a single string. The table has four columns. The first column ",(0,s.kt)("inlineCode",{parentName:"p"},"(3)")," describes the version (or branch) where the string is used, its identifier and its component."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You can see a text like:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre"},"4.0 [completiondate,coursereport_completion]\n")),(0,s.kt)("p",{parentName:"div"},"That reads: this string is used in Moodle 4.0, its identifier is 'completiondate' and it belongs to 'courserepor_completion' component."))),(0,s.kt)("p",null,"The second column ",(0,s.kt)("inlineCode",{parentName:"p"},"(4)"),' contains the English original of the string. Below the text, you can see Google icon. Click that icon to get automatic translation of the string into the language being translated. The next column contains a code of the language that this string is being translated to (for example "cs" for Czech).'),(0,s.kt)("p",null,"Finally the last column, ",(0,s.kt)("inlineCode",{parentName:"p"},"(5)"),", contains the translation itself. If it is empty, the string is not translated yet, otherwise it displays the current translation. ",(0,s.kt)("strong",{parentName:"p"},"Click in the cell to turn it into the input editor.")," Insert the translation and click outside the cell to stage the translation. Note there is no submit button, the text is sent to the stage automatically in the background. You can see that the colour of the cell turned blue. Blue colour signalizes that the translation is currently staged."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AMOS Translator tool",src:a(14638).Z,width:"1680",height:"1050"})),(0,s.kt)("p",null,"You have many options of how to use the strings filter. You can work on a single component or all missing strings at once. You can search for strings containing a given text (either in English or the translated string) etc. You can check for strings in older versions, too but those strings are read-only. They get automatically pulled into AMOS from the Git repository of previous translations."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"permalink")," below the filter's submit button can be used to keep the current filter settings. For example, you can bookmark a setting use regularly or you can copy the link URL and send it to somebody so they can set their filter just by visiting that URL."),(0,s.kt)("p",null,"When you finish translating, do not forget to visit the stage page. You probably want either commit it (if you are a lang pack maintainer) or submit it to maintainers so they can review your work and include it into the language pack."),(0,s.kt)("p",null,"Sadly, sometimes, AMOS may consider that your request-URI is too large to handle :("),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"414 Request-URI Too Large",src:a(46088).Z,width:"1562",height:"259"})),(0,s.kt)("h3",{id:"using-the-stage"},"Using the stage"),(0,s.kt)("p",null,"The translated strings are put into a temporary area called ",(0,s.kt)("strong",{parentName:"p"},"stage")," immediately after the cursor leaves the editor field. The stage holds your work before it is either committed into the repository (if you are language pack maintainer) or submitted to the maintainers for inclusion or stashed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Strings staged by a contributor",src:a(23083).Z,width:"1680",height:"795"})),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The stage is cleared when you logout. You have to explicitly commit or stash the stage so it is saved permanently. If you forget to do it, or there is a problem with the connectivity, your browser crashes or whatever, you can find your most recent snapshot of the stage in autosave stash."))),(0,s.kt)("p",null,"If you are language pack maintainer, you can commit the stage into the repository so your work is registered and the translated strings become part of the official language package. You can also propagate the strings to other branches by selecting the branches you want the string to go to and hit the propagate button. It is a wise thing to do that, to save work and to keep consistency in the wording over the versions."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Updated language packages in ZIP format are published hourly at ",(0,s.kt)("a",{parentName:"p",href:"https://download.moodle.org/releases/latest/"},"https://download.moodle.org/releases/latest/")," - access to any language packs and look at the bottom of the page to see the last update. At the same time, they become available for Moodle sites for automatic update."))),(0,s.kt)("p",null,"The stage can also be used to import strings from files and to merge or compare versions of language packs."),(0,s.kt)("h3",{id:"importing-a-file"},"Importing a file"),(0,s.kt)("p",null,"Strings can be translated offline and uploaded back to AMOS using the stage page. The only supported format at the moment is common PHP format used by Moodle where strings are defined in associative array called $string. For obvious security reasons, AMOS can not actually execute PHP files uploaded by users. Instead, it parses the uploaded file in a similar way as PHP parser, looking for patterns that are considered as valid string definition. That means that not every valid PHP code is valid string definition. AMOS parser requires following conditions are met:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the filename is valid component name used by Moodle, for example ",(0,s.kt)("inlineCode",{parentName:"li"},"moodle.php"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"enrol_manual.php")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"workshop.php")),(0,s.kt)("li",{parentName:"ul"},"the file is valid PHP code without syntax errors - that means is passes the PHP lint check"),(0,s.kt)("li",{parentName:"ul"},"strings are defined as elements of global array $string"),(0,s.kt)("li",{parentName:"ul"},"strings are single quoted constants")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Empty stage allows you to import strings from a file",src:a(16687).Z,width:"1920",height:"1073"})),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example of a valid file to import into AMOS (filename countries.php, Czech translation)"),(0,s.kt)("div",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"}," <?php\n\n$string['AE'] = 'Spojen\xe9 Arabsk\xe9 emir\xe1ty';\n$string['AF'] = 'Afgh\xe1nist\xe1n';\n$string['CH'] = '\u0160v\xfdcarsko';\n$string['HU'] = 'Ma\u010farsko';\n\n")))),(0,s.kt)("p",null,"During the import, strings found in the file are added into your stage as if they were translated via web. You can commit them into repository if you have such privilege."),(0,s.kt)("p",null,"You can import several .php files at once if you put them into a ZIP file (Maximum size: 2MB) and import this ZIP file."),(0,s.kt)("h3",{id:"using-stashes"},"Using stashes"),(0,s.kt)("p",null,"At any moment, you can save a snapshot of the current stage. We call such snapshot a ",(0,s.kt)("em",{parentName:"p"},"stash"),". Stashed strings are kept forever until you drop them manually (please do not abuse this and keep your stashes reasonable big). To manage your stash, click on ",(0,s.kt)("strong",{parentName:"p"},"Stashes")," in the right menu of AMOS. You just see a list of the stashes. There are ",(0,s.kt)("strong",{parentName:"p"},"peekaboo")," buttons that appear when you mouse hoover over the stashes. The stash can be ",(0,s.kt)("em",{parentName:"p"},"applied")," so that the stashed strings are copied back to the stage. What the ",(0,s.kt)("em",{parentName:"p"},"pop")," does is apply and drop (delete) the stash. ",(0,s.kt)("em",{parentName:"p"},"drop")," is like delete. ",(0,s.kt)("em",{parentName:"p"},"submit to maintainer")," opens a form for doing just that."),(0,s.kt)("p",null,"There is one special stash record for every user called ",(0,s.kt)("em",{parentName:"p"},"autosave")," stash. This stash keeps the most recent state of the stage. You may find it useful if you loose the current stage for any reason - your browser crashes, your internet connectivity dies or you accidentally ",(0,s.kt)("inlineCode",{parentName:"p"},"unstage")," all strings. If that happens, just apply the autosave stash to get your work back. The autosave stash is updated every time you stage a string. So if your stage is empty and your autosave stash is full of strings and you go into the translator first without applying the stash, the autosave will be replaced with the new translated string. We recommend to experiment a bit with this feature first."),(0,s.kt)("h3",{id:"using-the-log-tool"},"Using the log tool"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Log")," page allows even anonymous users to search in the history of commits tracked by AMOS. At the top of the page there is a filter that allows you to look for a particular information or report. It is important to realize how the filter actually works. Searching and filtering happens in two steps (this was necessary for performance reasons):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Firstly, commit records are searched based on the criteria specified in the Commit filter form. If there are more commits found matching the filter settings, only 100 most recent commits are processed."),(0,s.kt)("li",{parentName:"ul"},"Then, within the commits found, either all string modification records are returned, or you can filter these records, too. Settings in String filter form section are used in that case.")),(0,s.kt)("p",null,"By default, the filter looks for all commits since the last time you logged in and than displays only strings at the currently translated branch modified by those commits."),(0,s.kt)("h3",{id:"language-packs-and-moodle-versions"},"Language packs and Moodle versions"),(0,s.kt)("p",null,"When a new Moodle version is released, it will become the default version on your ",(0,s.kt)("strong",{parentName:"p"},"AMOS - Translator")," page (see tick boxes at the top)."),(0,s.kt)("p",null,"The suggested workflow is to continue your translation work for the new Moodle version and merge your work in the older versions.\nSome time ago, people used to do that using the ",(0,s.kt)("strong",{parentName:"p"},"AMOS - Stage")," page: set the source version to the version you were working in and set the target version to the version you want the strings to be copied to. Nowadays AMOS automatically propagates (most of) the strings to all suitable branches."),(0,s.kt)("h2",{id:"keeping-track-of-your-favorite-plugins-strings-to-translate"},"Keeping track of your 'favorite' plugins strings to translate"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("em",{parentName:"p"},"permalink")," feature for frequently checking a finite set of additional plugins for missing or outdated string."),(0,s.kt)("p",null,"The permalink feature is supposed to work like this:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You use the AMOS filter settings (that is, you define which versions, components, etc, you want to see). For example, you can select version 3.1, then all core components and some additional components."),(0,s.kt)("li",{parentName:"ul"},"You press ",(0,s.kt)("strong",{parentName:"li"},"Show strings")," and let AMOS show you the strings."),(0,s.kt)("li",{parentName:"ul"},"Then you can copy or bookmark the URL that is available via the ",(0,s.kt)("strong",{parentName:"li"},"Permalink")," link."),(0,s.kt)("li",{parentName:"ul"},"Following that URL should set the filter back to the current settings."),(0,s.kt)("li",{parentName:"ul"},'The problem is that AMOS does not allow you to mix strings from one component version with strings from another component version at the moment. So you can\'t see things like "Workshop 3.1 strings together with Essential 3.0 strings". You would have to select both 3.0 and 3.1 version fields, and both ',(0,s.kt)("inlineCode",{parentName:"li"},"Workshop")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"Essential")," components. But that would lead to ",(0,s.kt)("inlineCode",{parentName:"li"},"Workshop")," strings being displayed twice.")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'It would be useful for you to have a couple of bookmarked / saved permalinks per version. So you would have one for "3.11 core and interesting additional plugins", another one for "3.10 interesting plugins", another one for "3.9 interesting plugins", and so on. That way, you can regularly check these three or four links and have your areas of interested monitored well.'))),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/projects/api/amos"},"Automated Manipulation of Strings 2.0")," for the AMOS developer spec"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JtY5zvEHnQ8"},"Accepting submissions")," Instruction video for language pack maintainers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XClUZOuFfWo"},"Contributing to a language pack")," Instruction video for language pack contributors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=xT2-ElTaH6M"},"Changing the default language")," Instruction video on how to change your default language")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://docs.moodle.org/fr/AMOS"},"fr: AMOS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://docs.moodle.org/es/AMOS"},"es: AMOS"))))}g.isMDXComponent=!0},23083:function(e,t,a){t.Z=a.p+"assets/images/amos-screenshot-stage-contrib-6d1feb4e407054ab4705148017d1d8ef.png"},16687:function(e,t,a){t.Z=a.p+"assets/images/amos-screenshot-stage-empty-2f567e4a2850db5d3ab463fb22595b83.png"},14638:function(e,t,a){t.Z=a.p+"assets/images/amos-screenshot-translator-0df51f5ab553b29b4b6e86cca81a4547.png"},2739:function(e,t,a){t.Z=a.p+"assets/images/amos-workflow-5d390e8b03387db94d20ec6e02181aa3.png"},46088:function(e,t,a){t.Z=a.p+"assets/images/amos_permalink_request_-uri_too_large-ccccc287545459eef2b99251bb62d978.png"}}]);