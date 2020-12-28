(this["webpackJsonpsporclone-react"]=this["webpackJsonpsporclone-react"]||[]).push([[0],{171:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(12),s=n.n(i),o=(n(171),n(20)),l=n(15),u=n(270),d=n(278),j=function(){var e=Object(l.g)();return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},b=n(23),h=n.n(b),m=n(33),O=n(14),x=n(242),p=n(63),f=n(244),v=n(245),g=n(246),w=n(248),y=n(247),q=n(249),S="/sporclone-react",C=null,T=null,k=function(){return C?Promise.resolve(C):(T||(T=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(S,"/games/index.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return C=e.sent,e.abrupt("return",C);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Failed to retrieve game index! Supplying empty index and will retry on next request for index."),T=null,e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()),T)},I=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()})),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{variant:"h2",children:"Welcome to Sporclone!"}),Object(a.jsx)(p.a,{children:"Select a game to play from the list below."}),Object(a.jsx)(f.a,{children:n.map((function(e,t){return Object(a.jsxs)(v.a,{component:o.b,button:!0,to:"/play/".concat(e.id),children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(w.a,{primary:e.name})]},t)}))}),Object(a.jsx)(p.a,{children:"Or, alternatively:"}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{component:o.b,button:!0,to:"/create",children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(w.a,{primary:"Create a new game"})]})})]})},A=n(253),F=n(254),E=n(255),N=n(256),B=n(258),G=n(257),Q=n(282),D=n(252),L=n(251),W=function(e){var t=e.open,n=e.onClose,c=Object(r.useState)([]),i=Object(O.a)(c,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()})),Object(a.jsxs)(Q.a,{open:t,onClose:n,children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{component:o.b,button:!0,to:"/",onClick:n,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(w.a,{primary:"Home"})]})}),Object(a.jsx)(D.a,{}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(v.a,{dense:!0,children:Object(a.jsx)(p.a,{variant:"overline",children:"All Games"})}),s.map((function(e,t){return Object(a.jsxs)(v.a,{component:o.b,button:!0,to:"/play/".concat(e.id),onClick:n,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(w.a,{primary:e.name})]},t)}))]})]})},J=Object(A.a)((function(e){return{navbar:{marginBottom:"1.5em"}}})),P=function(){var e=J(),t=Object(r.useState)(!1),n=Object(O.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W,{open:c,onClose:function(){return i(!1)}}),Object(a.jsx)(F.a,{position:"static",className:e.navbar,children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(N.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return i(!0)},children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(p.a,{variant:"h6",component:"h1",children:Object(a.jsx)(B.a,{to:"/",component:o.b,color:"inherit",children:"Sporclone"})})]})})]})},U=n(156),M=n(96),R=n(259),H=Object(U.a)({palette:{primary:{main:M.a[800]},secondary:{main:R.a[800]}}}),z=n(260),K=n(261),Y=function(e){var t=e.component,n=Object(l.h)().gameId,c=Object(r.useState)(null),i=Object(O.a)(c,2),s=i[0],o=i[1],u=Object(r.useState)(null),d=Object(O.a)(u,2),j=d[0],b=d[1],f=Object(r.useState)(null),v=Object(O.a)(f,2),g=v[0],w=v[1],y=Object(r.useState)(null),q=Object(O.a)(y,2),C=q[0],T=q[1];return Object(r.useEffect)((function(){b(null),w(null),T(null)}),[n]),Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var t,a,r,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,o(t),a=null,r=0;case 6:if(!(r<t.length)){e.next=13;break}if(t[r].id!==n){e.next=10;break}return a=r,e.abrupt("break",13);case 10:r++,e.next=6;break;case 13:if(null!==a){e.next=17;break}return w(!1),T('No game exists by the ID of "'.concat(n,'".')),e.abrupt("return");case 17:return b(a),e.prev=18,e.next=21,fetch("".concat(S,"/games/").concat(n,".json"));case 21:return c=e.sent,e.next=24,c.json();case 24:i=e.sent,w(i),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(18),w(!1),T("Could not retrieve game template from server.");case 32:case"end":return e.stop()}}),e,null,[[18,28]])})))()}),[n]),g?Object(a.jsx)(t,{gameId:n,gameIdx:j,allGames:s,template:g}):null===g?Object(a.jsx)(x.a,{style:{textAlign:"center",marginTop:"25vmin"},children:Object(a.jsx)(z.a,{size:"30vmin"})}):Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(p.a,{variant:"h3",children:[Object(a.jsx)(K.a,{fontSize:"large"})," Error"]}),Object(a.jsx)(p.a,{children:"Sporclone could not load the game due to a problem."}),Object(a.jsx)(p.a,{children:null!==C&&void 0!==C?C:"An unknown error has occurred."})]})},_=n(78),V=n(62),$=n(151),X=n(266),Z=n(267),ee=n(279),te=n(157),ne=n(262),ae=n(263),re=n(264),ce=n(265),ie=Object(A.a)((function(e){return{card:{textAlign:"center"},correct:{backgroundColor:e.palette.success.light,color:e.palette.success.contrastText},incorrect:{backgroundColor:e.palette.error.light,color:e.palette.error.contrastText},answerContainer:{paddingBottom:"16px !important"},answerText:{lineHeight:1}}})),se=function(e){var t=e.label,n=e.answer,r=e.showAnswer,c=void 0!==r&&r,i=e.markCorrect,s=void 0===i?null:i,o=ie(),l=o.card;return null!==s&&(l+=" "+(s?o.correct:o.incorrect)),Object(a.jsxs)(ne.a,{variant:"outlined",className:l,children:[Object(a.jsxs)(ae.a,{children:[null!==s&&(s?Object(a.jsx)(re.a,{}):Object(a.jsx)(K.a,{})),Object(a.jsx)(p.a,{element:"p",variant:"h6",children:t})]}),Object(a.jsx)(D.a,{}),Object(a.jsx)(ae.a,{className:o.answerContainer,children:Object(a.jsx)(p.a,{variant:"body1",paragraph:!1,className:o.answerText,children:c?n:Object(a.jsx)(ce.a,{})})})]})},oe=Object(A.a)((function(e){return{unblur:{filter:"blur(0px) !important"},blur:{filter:"blur(15px)",transitionProperty:"filter",transitionDuration:"2s",transitionTimingFunction:"ease"}}})),le=function(e){var t,n=e.questions,r=e.blur,c=void 0===r||r,i=e.showKey,s=void 0!==i&&i,o=oe(),l=[],u=Object(V.a)(n);try{for(u.s();!(t=u.n()).done;){var d=t.value;l.push({label:d.label,answer:d.answer,showAnswer:s||d.isCorrect,markCorrect:s?d.isCorrect:null})}}catch(j){u.e(j)}finally{u.f()}return Object(a.jsx)(x.a,{className:"".concat(o.blur," ").concat(c?"":o.unblur),children:Object(a.jsx)(X.a,{container:!0,spacing:1,children:l.map((function(e,t){return Object(a.jsx)(X.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(a.jsx)(se,Object(te.a)({},e))},t)}))})})},ue=n(269),de=Object(A.a)((function(e){return{headerImg:{maxWidth:82,maxHeight:82,border:"1px solid ".concat(e.palette.grey[500])},otherGames:{borderLeft:"1px solid ".concat(e.palette.grey[300])},timerWarning:{color:e.palette.error.main,fontWeight:"bold"},center:{textAlign:"center"}}})),je=Object($.a)(x.a)({margin:"1em 0"}),be=function(e){e<0&&(e=0);var t="".concat(Math.floor(e/60)),n="".concat(e%60).padStart(2,"0");return"".concat(t,":").concat(n)},he=function(e){var t=e.gameId,n=e.headline,r=e.image,c=e.questionStatus,i=e.otherGames,s=e.wasStarted,l=e.gameOver,u=e.timeLeft,d=e.score,j=e.onGuess,b=e.onButton,h=de();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(je,{children:Object(a.jsxs)(X.a,{container:!0,spacing:2,children:[r&&r.src&&r.alt&&Object(a.jsx)(X.a,{item:!0,xs:"auto",children:Object(a.jsx)("img",{className:h.headerImg,src:r.src,alt:r.alt})}),Object(a.jsx)(X.a,{item:!0,xs:8,children:Object(a.jsx)(p.a,{variant:"h4",component:"h2",children:n})}),Object(a.jsxs)(X.a,{item:!0,className:h.otherGames,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h3",children:"Other Games"}),Object(a.jsx)(p.a,{component:"span",children:Object(a.jsx)("ul",{children:i.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:e.id,children:e.name})},"other-".concat(e.id))}))})})]})]})}),Object(a.jsx)(D.a,{}),Object(a.jsx)(je,{children:Object(a.jsxs)(X.a,{container:!0,spacing:2,alignItems:"center",justify:"center",children:[Object(a.jsx)(X.a,{item:!0,xs:4,sm:"auto",className:h.center,children:s?Object(a.jsx)(Z.a,{variant:"contained",color:"secondary",disabled:l,onClick:b,children:"Give Up"}):Object(a.jsx)(Z.a,{variant:"contained",color:"primary",onClick:b,children:"Start Game"})}),Object(a.jsx)(X.a,{item:!0,xs:8,sm:!0,children:s&&!l&&Object(a.jsx)(ee.a,{label:"Enter Guess",id:"guessField",variant:"outlined",size:"small",color:"secondary",fullWidth:!0,onKeyUp:function(e){var t=e.target,n=t.value;j(n)&&(t.value="")},autoFocus:!0})}),Object(a.jsxs)(X.a,{item:!0,xs:6,sm:2,className:h.center,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h4",children:"Score"}),Object(a.jsxs)(p.a,{"aria-label":"".concat(d," out of ").concat(c.length),children:[d,"/",c.length]})]}),Object(a.jsxs)(X.a,{item:!0,xs:6,sm:2,className:h.center,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h4",children:"Time"}),Object(a.jsx)(p.a,{className:u<16?h.timerWarning:null,children:be(u)})]})]})}),Object(a.jsx)(D.a,{}),Object(a.jsx)(p.a,{variant:"srOnly","aria-hidden":s,children:"Once the game has started, game tiles will appear here."}),Object(a.jsx)(je,{"aria-hidden":!s,children:Object(a.jsx)(le,{questions:c,blur:!s,showKey:l})}),Object(a.jsx)(je,{children:Object(a.jsx)(Z.a,{component:o.b,to:"/edit/".concat(t),startIcon:Object(a.jsx)(ue.a,{}),children:"Edit this Game"})})]})},me=function(e){var t=e.when,n=e.message,c=function(e){return e.preventDefault(),e.returnValue=n,n};return Object(r.useEffect)((function(){return t?window.addEventListener("beforeunload",c):window.removeEventListener("beforeunload",c),function(){return window.removeEventListener("beforeunload",c)}})),Object(a.jsx)(l.a,{when:t,message:n})},Oe=function(e){var t,n=e.gameId,c=e.gameIdx,i=e.template,s=e.allGames,o=Object(r.useState)([]),l=Object(O.a)(o,2),u=l[0],d=l[1],j=Object(r.useState)(0),b=Object(O.a)(j,2),h=b[0],m=b[1],x=Object(r.useState)(!1),p=Object(O.a)(x,2),f=p[0],v=p[1],g=Object(r.useState)(!1),w=Object(O.a)(g,2),y=w[0],q=w[1],S=Object(r.useState)([]),C=Object(O.a)(S,2),T=C[0],k=C[1],I=Object(r.useState)(0),A=Object(O.a)(I,2),F=A[0],E=A[1];Object(r.useEffect)((function(){d(function(e){var t,n=[],a=Object(V.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push({label:r.label,answer:r.answers.display,accepts:r.answers.accepts,isCorrect:!1})}}catch(c){a.e(c)}finally{a.f()}return n}(i.questions)),m(i.time),v(!1),q(!1),k(function(e,t){if(!t||!Array.isArray(t))return[];if(t.length-1<=3)return[].concat(Object(_.a)(t.slice(0,e)),Object(_.a)(t.slice(e+1)));for(var n={};Object.keys(n).length<3;){var a=Math.floor(Math.random()*t.length);a in n||a===e||(n[a]=t[a])}return Object.values(n)}(c,s)),E(0)}),[c,i,s]),Object(r.useEffect)((function(){if(f&&!y){var e=setTimeout((function(){m(h-1),h<1&&q(!0)}),1e3);return function(){clearTimeout(e)}}}),[f,y,h]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(me,{when:f&&!y,message:"You have a game in progress.\nAre you sure you want to navigate away?"}),Object(a.jsx)(he,{gameId:n,headline:i.headline,image:null!==(t=null===i||void 0===i?void 0:i.image)&&void 0!==t?t:null,questionStatus:u,otherGames:T,wasStarted:f,gameOver:y,timeLeft:h,score:F,onGuess:function(e){if(!f||y)return!1;var t,n=Object(V.a)(u.entries());try{for(n.s();!(t=n.n()).done;){var a=Object(O.a)(t.value,2),r=a[0],c=a[1];if(!c.isCorrect){var i,s=Object(V.a)(c.accepts);try{for(s.s();!(i=s.n()).done;){var o=i.value;if(e.toLowerCase()===o.toLowerCase()){var l=JSON.parse(JSON.stringify(u));l[r].isCorrect=!0,d(l);var j=F+1;return E(j),j===u.length&&q(!0),!0}}}catch(b){s.e(b)}finally{s.f()}}}}catch(b){n.e(b)}finally{n.f()}return!1},onButton:function(){f?y||q(!0):v(!0)}})]})},xe=n(281),pe=n(152),fe=n(153),ve=n.n(fe),ge=function(e){var t,n=e.filename,a={filename:n,contents:e.contents,contentType:e.contentType};try{t=function(e){var t=e.filename,n=e.contentType,a=e.contents;return URL.createObjectURL(new File([a],t,{type:n}))}(a)}catch(c){try{console.warn("The files API is unavailable; fallback to blob API.\n",c),t=function(e){var t=e.contentType,n=e.contents;return URL.createObjectURL(new Blob([n],{type:t}))}(a)}catch(c){console.warn("The blob API is unavailable; fallback to data URL.\n",c),t=function(e){var t=e.contentType,n=e.contents;return"data:"+t+";charset=utf-8,"+encodeURIComponent(n)}(a)}}var r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},we=n(272),ye=n(284),qe=n(280),Se=n(271),Ce=n(154),Te=n.n(Ce),ke=n(273),Ie=n(274),Ae=n(275),Fe=n(276),Ee=n(277),Ne=Object($.a)(qe.a)({marginBottom:"1em"}),Be=Object($.a)(x.a)({margin:"2em 0"}),Ge=function(e){var t,n,r,c,i,s,o,l,u,d,j=e.game,b=e.invalid,h=e.wasSubmitted,m=e.updateField,O=e.onSubmit,f=e.addQuestion,v=e.duplicateQuestion,g=e.deleteQuestion,w=e.moveQuestion,y=function(e){return!!b[e]},S=function(e,t,n){var a=m("".concat(e,".answers.accepts"));return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=Object(_.a)(t);if("add"===n)c.push(e);else{if("delete"!==n)throw new Error("Invalid operation for accepted answer update: '".concat(n,"'."));c.splice(r,1)}a({target:{value:c}})}},C=function(){var e,t,n,a,r,c;return(null!==(e=null===j||void 0===j||null===(t=j.image)||void 0===t||null===(n=t.src)||void 0===n?void 0:n.length)&&void 0!==e?e:0)>0||(null!==(a=null===j||void 0===j||null===(r=j.image)||void 0===r||null===(c=r.alt)||void 0===c?void 0:c.length)&&void 0!==a?a:0)>0};return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{variant:"h4",component:"h2",gutterBottom:!0,children:"Game Editor"}),Object.keys(b).length>0&&Object(a.jsxs)(Ne,{severity:"error",children:[Object(a.jsx)(Se.a,{children:"Game Contains Errors"}),"The game cannot be downloaded because either required fields are blank or some field contains incorrect data.",Object(a.jsx)("br",{}),"Please review the highlighted fields and alert messages, resolve the problems, and try to download again.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"This alert will disappear automatically once the errors are resolved."]})||h&&Object(a.jsxs)(Ne,{severity:"success",children:[Object(a.jsx)(Se.a,{children:"Game Ready"}),"The game contains zero errors and is ready for download."]}),Object(a.jsx)(p.a,{variant:"subtitle1",component:"p",children:"The presence of * indicates required fields."}),Object(a.jsxs)(Be,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h3",gutterBottom:!0,children:"Header"}),Object(a.jsxs)(X.a,{container:!0,spacing:2,children:[Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"gameIDField",label:"Game ID",variant:"outlined",color:"secondary",fullWidth:!0,InputProps:{style:{fontFamily:"monospace"}},required:!0,helperText:null!==(t=b.id)&&void 0!==t?t:"This is a globally unique identifier for this game. It must consist of strictly lowercase alphanumeric characters and underscores.",value:j.id,onChange:m("id"),error:y("id")})}),Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"titleField",label:"Title",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(n=b.title)&&void 0!==n?n:"The shorter title of the game displayed in menus.",value:j.title,onChange:m("title"),error:y("title")})}),Object(a.jsx)(X.a,{item:!0,xs:12,children:Object(a.jsx)(ee.a,{id:"headlineField",label:"Headline",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(r=b.headline)&&void 0!==r?r:"The extended description of what the player is tasked with entering.",value:j.headline,onChange:m("headline"),error:y("headline")})}),Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"imageSrcField",label:"Image Source",variant:"outlined",color:"secondary",fullWidth:!0,required:C(),helperText:null!==(c=b["image.src"])&&void 0!==c?c:"",value:null!==(i=null===j||void 0===j||null===(s=j.image)||void 0===s?void 0:s.src)&&void 0!==i?i:"",onChange:m("image.src"),error:y("image.src")})}),Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"imageAltField",label:"Image Alt Text",variant:"outlined",color:"secondary",fullWidth:!0,required:C(),helperText:null!==(o=b["image.alt"])&&void 0!==o?o:"",value:null!==(l=null===j||void 0===j||null===(u=j.image)||void 0===u?void 0:u.alt)&&void 0!==l?l:"",onChange:m("image.alt"),error:y("image.alt")})})]})]}),Object(a.jsxs)(Be,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h3",gutterBottom:!0,children:"Game Settings"}),Object(a.jsx)(X.a,{container:!0,spacing:2,children:Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"timeField",label:"Time Limit",type:"number",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(d=b.time)&&void 0!==d?d:"",value:j.time,onChange:m("time"),error:y("time")})})})]}),Object(a.jsxs)(Be,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h3",gutterBottom:!0,children:"Questions"}),b.questions&&Object(a.jsx)(Ne,{severity:"error",style:{marginBottom:"1em"},children:b.questions}),!h&&j.questions.length<3&&Object(a.jsx)(Ne,{severity:"warning",children:"A minimum of three questions is required."}),j.questions.map((function(e,t){var n,r,c,i="questions[".concat(t,"]");return Object(a.jsxs)(ne.a,{variant:"outlined",style:{marginBottom:t!==j.questions.length-1?"1em":0},children:[Object(a.jsxs)(ae.a,{children:[Object(a.jsxs)(p.a,{variant:"h6",component:"h4",gutterBottom:!0,children:["Question ",t+1]}),Object(a.jsxs)(X.a,{container:!0,spacing:2,children:[Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"question".concat(t+1,"LabelField"),variant:"outlined",color:"secondary",label:"Displayed Question",fullWidth:!0,required:!0,helperText:null!==(n=b["".concat(i,".label")])&&void 0!==n?n:"",value:e.label,onChange:m("".concat(i,".label")),error:y("".concat(i,".label")),inputProps:{"aria-label":"Question ".concat(t+1," Displayed Question")}})}),Object(a.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{id:"question".concat(t+1,"DisplayedAnswerField"),variant:"outlined",color:"secondary",label:"Displayed Answer",fullWidth:!0,required:!0,helperText:null!==(r=b["".concat(i,".answers.display")])&&void 0!==r?r:"",value:e.answers.display,onChange:m("".concat(i,".answers.display")),error:y("".concat(i,".answers.display")),inputProps:{"aria-label":"Question ".concat(t+1," Displayed Answer")}})}),Object(a.jsx)(X.a,{item:!0,xs:12,children:Object(a.jsx)(Te.a,{id:"question".concat(t+1,"AcceptedAnswersField"),variant:"outlined",color:"secondary",label:"Accepted Answers",fullWidth:!0,required:!0,helperText:null!==(c=b["".concat(i,".answers.accepts")])&&void 0!==c?c:"The list of accepted answers does not include the displayed answer unless it is also included here.",value:e.answers.accepts,onAdd:S(i,e.answers.accepts,"add"),onDelete:S(i,e.answers.accepts,"delete"),error:y("".concat(i,".answers.accepts")),InputProps:{inputProps:{"aria-label":"Question ".concat(t+1," Accepted Answers")}}})})]})]}),Object(a.jsxs)(we.a,{disableSpacing:!0,children:[Object(a.jsx)(ye.a,{title:"Delete",children:Object(a.jsx)(N.a,{"aria-label":"delete",onClick:g(t),children:Object(a.jsx)(ke.a,{})})}),Object(a.jsx)(ye.a,{title:"Move Question Up",children:Object(a.jsx)(x.a,{children:Object(a.jsx)(N.a,{"aria-label":"move up",onClick:w(t,"up"),disabled:0===t,children:Object(a.jsx)(Ie.a,{})})})}),Object(a.jsx)(ye.a,{title:"Move Question Down",children:Object(a.jsx)(x.a,{children:Object(a.jsx)(N.a,{"aria-label":"move down",onClick:w(t,"down"),disabled:t===j.questions.length-1,children:Object(a.jsx)(Ae.a,{})})})}),Object(a.jsx)(ye.a,{title:"Duplicate Question",children:Object(a.jsx)(N.a,{"aria-label":"duplicate question",onClick:v(t),children:Object(a.jsx)(Fe.a,{})})}),Object(a.jsx)(ye.a,{title:"Add Question Above",children:Object(a.jsx)(N.a,{"aria-label":"add question above",onClick:f(t),children:Object(a.jsx)(q.a,{})})})]})]},e.id)})),Object(a.jsx)(ye.a,{title:"Add Question",children:Object(a.jsx)(N.a,{"aria-label":"add question",onClick:f(),children:Object(a.jsx)(q.a,{})})})]}),Object(a.jsx)(p.a,{variant:"srOnly",component:"h3",gutterBottom:!0,children:"Download"}),Object(a.jsxs)(Ne,{severity:"info",children:[Object(a.jsx)(Se.a,{children:"All Finished. What Next?"}),Object(a.jsxs)(p.a,{gutterBottom:!0,children:["All games on the site are stored as JSON files in the",Object(a.jsx)(B.a,{href:"https://github.com/BenJetson/sporclone-react/tree/main/public/games",target:"_blank",rel:"noopener",children:"\xa0games folder\xa0"}),"of the GitHub repository. In order for the game to be added, modified, or deleted you must submit a pull request to the repository to alter the relevant file."]}),Object(a.jsx)(p.a,{gutterBottom:!0,children:"You can download the game in the proper file format using the button below."}),Object(a.jsx)(Z.a,{variant:"contained",color:"primary",onClick:O,startIcon:Object(a.jsx)(Ee.a,{}),children:"Download"})]})]})},Qe=function(){return{id:Object(xe.a)().toUpperCase(),label:"",answers:{display:"",accepts:[]}}},De=function(e){var t,n=e.gameIdx,c=e.template,i=e.allGames,s=Object(r.useState)(null!==(t=function(e,t,n){var a,r;if(!t)return null;var c=null!==(a=null===n||void 0===n||null===(r=n[e])||void 0===r?void 0:r.id)&&void 0!==a?a:null;if(!c)return null;var i=JSON.parse(JSON.stringify(t));i.id=c;for(var s=0;s<i.questions.length;s++)i.questions[s].id=Object(xe.a)().toUpperCase();return i.image||(i.image={}),i.image.src||(i.image.src=""),i.image.alt||(i.image.alt=""),i}(n,c,i))&&void 0!==t?t:{id:"",time:0,title:"",headline:"",image:{src:"",alt:""},questions:[Qe()]}),o=Object(O.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),j=Object(O.a)(d,2),b=j[0],x=j[1],p=Object(r.useState)(!1),f=Object(O.a)(p,2),v=f[0],g=f[1],w=Object(r.useState)({}),y=Object(O.a)(w,2),q=y[0],S=y[1],C=function(){return JSON.parse(JSON.stringify(l))},T=function(e){var t=e.g,n=void 0===t?l:t,a=e.force;if(v||void 0!==a&&a){for(var r={},c=0,i=["id","title","headline"];c<i.length;c++){var s=i[c];n[s].length<1&&(r[s]="This field cannot be blank.")}if(n.id.length>0&&!/^[a-z0-9_]+$/g.test(n.id)&&(r.id="Game IDs may only contain lowercase alphanumeric characters and underscores."),n.image.src.length>0||n.image.alt.length>0)for(var o=0,u=["src","alt"];o<u.length;o++){var d=u[o];n.image[d].length<1&&(r["image.".concat(d)]="If one image field has a value, both must be filled.")}n.time<15&&(r.time="Time cannot be less than fifteen seconds."),n.questions.length<3&&(r.questions="Must have a minumum of three questions.");for(var j=0;j<n.questions.length;j++){var b="questions[".concat(j,"]");n.questions[j].label.length<1&&(r["".concat(b,".label")]="This field cannot be blank."),n.questions[j].answers.display.length<1&&(r["".concat(b,".answers.display")]="This field cannot be blank."),n.questions[j].answers.accepts.length<1&&(r["".concat(b,".answers.accepts")]="Must have at least one accepted answer.")}return S(r),0===Object.keys(r).length}},k=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.g,a=t.force,e.abrupt("return",T({g:n,force:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(me,{when:b,message:"You have made changes to this game in the editor.\nAre you sure you want to navigate away?"}),Object(a.jsx)(Ge,{game:l,invalid:q,wasSubmitted:v,updateField:function(e){return function(t){var n,a;x(!0);var r=null!==(n=null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.value)&&void 0!==n?n:null;if(null===r)throw new Error("Received null value for update of '".concat(e,"'."));var c=C();if(["id","title","headline","time"].includes(e))"time"===e&&(r=""!==r?parseInt(r):0),c[e]=r;else if(e.includes("image")){if(e=e.substring(e.lastIndexOf(".")+1),!["src","alt"].includes(e))throw new Error("Bad image field '".concat(e,"' for attempted update."));c.image[e]=r}else{if(!e.includes("questions"))throw new Error("Bad field name '".concat(e,"' for attempted update."));var i=parseInt(e.substring(e.lastIndexOf("[")+1,e.lastIndexOf("]")));if((e=e.substring(e.lastIndexOf("]")+2)).includes("."))if("answers.display"===e)c.questions[i].answers.display=r;else{if("answers.accepts"!==e)throw new Error("Bad question field '".concat(e,"' for attempted update."));c.questions[i].answers.accepts=r}else c.questions[i][e]=r}u(c),k({g:c})}},onSubmit:function(){if(g(!0),T({force:!0})){x(!1);var e=C();delete e.id;for(var t=0;t<e.questions.length;t++)delete e.questions[t].id;e.image.src.length<1&&delete e.image,function(e){var t=e.filename,n=e.object,a=Object(pe.format)(JSON.stringify(n),{parser:"json",plugins:[ve.a]});ge({filename:"".concat(t,".json"),contents:a,contentType:"application/json"})}({filename:l.id,object:e})}else window.scrollTo(0,0)},addQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){x(!0);var t=C();null===e?t.questions.push(Qe()):t.questions.splice(e,0,Qe()),u(t),k({g:t})}},duplicateQuestion:function(e){return function(){x(!0);var t=C(),n=JSON.parse(JSON.stringify(t.questions[e]));n.id=Object(xe.a)(),t.questions.splice(e,0,n),u(t),k({g:t})}},deleteQuestion:function(e){return function(){x(!0);var t=C();t.questions.splice(e,1),u(t),k({g:t})}},moveQuestion:function(e,t){return function(){var n;switch(x(!0),t){case"up":n=e-1;break;case"down":n=e+1;break;default:throw new Error("Invlid direction to move question: '".concat(t,"'"))}var a=C(),r=a.questions[n];a.questions[n]=a.questions[e],a.questions[e]=r,u(a),k({g:a})}}})]})},Le=function(){return Object(a.jsx)(u.a,{theme:H,children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(P,{}),Object(a.jsx)(d.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/play/:gameId",children:Object(a.jsx)(Y,{component:Oe})}),Object(a.jsx)(l.b,{path:"/create",children:Object(a.jsx)(De,{})}),Object(a.jsx)(l.b,{path:"/edit/:gameId",children:Object(a.jsx)(Y,{component:De})}),Object(a.jsx)(l.b,{path:"/",children:Object(a.jsx)(I,{})},"home")]})})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Le,{})}),document.getElementById("root")),We()}},[[215,1,2]]]);
//# sourceMappingURL=main.04ab2bbd.chunk.js.map