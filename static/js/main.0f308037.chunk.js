(this["webpackJsonpsporclone-react"]=this["webpackJsonpsporclone-react"]||[]).push([[0],{171:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(12),i=n.n(s),l=(n(171),n(21)),o=n(15),d=n(270),u=n(277),j=function(){var e=Object(o.f)();return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},b=n(28),h=n.n(b),m=n(43),O=n(14),x=n(242),p=n(63),f=n(244),v=n(245),g=n(246),w=n(248),y=n(247),q=n(249),S="/sporclone-react",C=null,k=null,T=function(){return C?Promise.resolve(C):(k||(k=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(S,"/games/index.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return C=e.sent,e.abrupt("return",C);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Failed to retrieve game index! Supplying empty index and will retry on next request for index."),k=null,e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()),k)},I=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()})),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{variant:"h2",children:"Welcome to Sporclone!"}),Object(a.jsx)(p.a,{children:"Select a game to play from the list below."}),Object(a.jsx)(f.a,{children:n.map((function(e,t){return Object(a.jsxs)(v.a,{component:l.b,button:!0,to:"/play/".concat(e.id),children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(w.a,{primary:e.name})]},t)}))}),Object(a.jsx)(p.a,{children:"Or, alternatively:"}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{component:l.b,button:!0,to:"/create",children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(w.a,{primary:"Create a new game"})]})})]})},N=n(253),A=n(254),B=n(255),G=n(256),E=n(258),Q=n(257),W=n(281),F=n(252),D=n(251),J=function(e){var t=e.open,n=e.onClose,c=Object(r.useState)([]),s=Object(O.a)(c,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()})),Object(a.jsxs)(W.a,{open:t,onClose:n,children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{component:l.b,button:!0,to:"/",onClick:n,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(w.a,{primary:"Home"})]})}),Object(a.jsx)(F.a,{}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(v.a,{dense:!0,children:Object(a.jsx)(p.a,{variant:"overline",children:"All Games"})}),i.map((function(e,t){return Object(a.jsxs)(v.a,{component:l.b,button:!0,to:"/play/".concat(e.id),onClick:n,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(w.a,{primary:e.name})]},t)}))]})]})},L=Object(N.a)((function(e){return{navbar:{marginBottom:"1.5em"}}})),M=function(){var e=L(),t=Object(r.useState)(!1),n=Object(O.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{open:c,onClose:function(){return s(!1)}}),Object(a.jsx)(A.a,{position:"static",className:e.navbar,children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(G.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return s(!0)},children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(p.a,{variant:"h6",component:"h1",children:Object(a.jsx)(E.a,{to:"/",component:l.b,color:"inherit",children:"Sporclone"})})]})})]})},P=n(156),U=n(96),H=n(259),z=Object(P.a)({palette:{primary:{main:U.a[800]},secondary:{main:H.a[800]}}}),K=n(260),R=n(261),V=function(e){var t=e.component,n=Object(o.g)().gameId,c=Object(r.useState)(null),s=Object(O.a)(c,2),i=s[0],l=s[1],d=Object(r.useState)(null),u=Object(O.a)(d,2),j=u[0],b=u[1],f=Object(r.useState)(null),v=Object(O.a)(f,2),g=v[0],w=v[1],y=Object(r.useState)(null),q=Object(O.a)(y,2),C=q[0],k=q[1];return Object(r.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var t,a,r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,l(t),a=null,r=0;case 6:if(!(r<t.length)){e.next=13;break}if(t[r].id!==n){e.next=10;break}return a=r,e.abrupt("break",13);case 10:r++,e.next=6;break;case 13:if(null!==a){e.next=17;break}return w(!1),k('No game exists by the ID of "'.concat(n,'".')),e.abrupt("return");case 17:return b(a),e.prev=18,e.next=21,fetch("".concat(S,"/games/").concat(n,".json"));case 21:return c=e.sent,e.next=24,c.json();case 24:s=e.sent,w(s),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(18),w(!1),k("Could not retrieve game template from server.");case 32:case"end":return e.stop()}}),e,null,[[18,28]])})))()}),[n]),g?Object(a.jsx)(t,{gameId:n,gameIdx:j,allGames:i,template:g}):null===g?Object(a.jsx)(x.a,{style:{textAlign:"center",marginTop:"25vmin"},children:Object(a.jsx)(K.a,{size:"30vmin"})}):Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(p.a,{variant:"h3",children:[Object(a.jsx)(R.a,{fontSize:"large"})," Error"]}),Object(a.jsx)(p.a,{children:"Sporclone could not load the game due to a problem."}),Object(a.jsx)(p.a,{children:null!==C&&void 0!==C?C:"An unknown error has occurred."})]})},X=n(78),Y=n(62),Z=n(151),$=n(266),_=n(267),ee=n(278),te=n(157),ne=n(262),ae=n(263),re=n(264),ce=n(265),se=Object(N.a)((function(e){return{card:{textAlign:"center"},correct:{backgroundColor:e.palette.success.light,color:e.palette.success.contrastText},incorrect:{backgroundColor:e.palette.error.light,color:e.palette.error.contrastText},answerContainer:{paddingBottom:"16px !important"},answerText:{lineHeight:1}}})),ie=function(e){var t=e.label,n=e.answer,r=e.showAnswer,c=void 0!==r&&r,s=e.markCorrect,i=void 0===s?null:s,l=se(),o=l.card;return null!==i&&(o+=" "+(i?l.correct:l.incorrect)),Object(a.jsxs)(ne.a,{variant:"outlined",className:o,children:[Object(a.jsxs)(ae.a,{children:[null!==i&&(i?Object(a.jsx)(re.a,{}):Object(a.jsx)(R.a,{})),Object(a.jsx)(p.a,{element:"p",variant:"h6",children:t})]}),Object(a.jsx)(F.a,{}),Object(a.jsx)(ae.a,{className:l.answerContainer,children:Object(a.jsx)(p.a,{variant:"body1",paragraph:!1,className:l.answerText,children:c?n:Object(a.jsx)(ce.a,{})})})]})},le=Object(N.a)((function(e){return{unblur:{filter:"blur(0px) !important"},blur:{filter:"blur(15px)",transitionProperty:"filter",transitionDuration:"2s",transitionTimingFunction:"ease"}}})),oe=function(e){var t,n=e.questions,r=e.blur,c=void 0===r||r,s=e.showKey,i=void 0!==s&&s,l=le(),o=[],d=Object(Y.a)(n);try{for(d.s();!(t=d.n()).done;){var u=t.value;o.push({label:u.label,answer:u.answer,showAnswer:i||u.isCorrect,markCorrect:i?u.isCorrect:null})}}catch(j){d.e(j)}finally{d.f()}return Object(a.jsx)(x.a,{className:"".concat(l.blur," ").concat(c?"":l.unblur),children:Object(a.jsx)($.a,{container:!0,spacing:1,children:o.map((function(e,t){return Object(a.jsx)($.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(a.jsx)(ie,Object(te.a)({},e))},t)}))})})},de=n(269),ue=Object(N.a)((function(e){return{headerImg:{maxWidth:82,maxHeight:82,border:"1px solid ".concat(e.palette.grey[500])},otherGames:{borderLeft:"1px solid ".concat(e.palette.grey[300])},timerWarning:{color:e.palette.error.main,fontWeight:"bold"},center:{textAlign:"center"}}})),je=Object(Z.a)(x.a)({margin:"1em 0"}),be=function(e){e<0&&(e=0);var t="".concat(Math.floor(e/60)),n="".concat(e%60).padStart(2,"0");return"".concat(t,":").concat(n)},he=function(e){var t=e.gameId,n=e.headline,r=e.image,c=e.questionStatus,s=e.otherGames,i=e.wasStarted,o=e.gameOver,d=e.timeLeft,u=e.score,j=e.onGuess,b=e.onButton,h=ue();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(je,{children:Object(a.jsxs)($.a,{container:!0,spacing:2,children:[r&&r.src&&r.alt&&Object(a.jsx)($.a,{item:!0,xs:"auto",children:Object(a.jsx)("img",{className:h.headerImg,src:r.src,alt:r.alt})}),Object(a.jsx)($.a,{item:!0,xs:8,children:Object(a.jsx)(p.a,{variant:"h4",component:"h1",children:n})}),Object(a.jsxs)($.a,{item:!0,className:h.otherGames,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h3",children:"Other Games"}),Object(a.jsx)(p.a,{component:"span",children:Object(a.jsx)("ul",{children:s.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:e.id,children:e.name})},"other-".concat(e.id))}))})})]})]})}),Object(a.jsx)(F.a,{}),Object(a.jsx)(je,{children:Object(a.jsxs)($.a,{container:!0,spacing:2,alignItems:"center",justify:"center",children:[Object(a.jsx)($.a,{item:!0,xs:4,sm:"auto",className:h.center,children:i?Object(a.jsx)(_.a,{variant:"contained",color:"secondary",disabled:o,onClick:b,children:"Give Up"}):Object(a.jsx)(_.a,{variant:"contained",color:"primary",onClick:b,children:"Start Game"})}),Object(a.jsx)($.a,{item:!0,xs:8,sm:!0,children:i&&!o&&Object(a.jsx)(ee.a,{label:"Enter Guess",variant:"outlined",size:"small",color:"secondary",fullWidth:!0,onKeyUp:function(e){var t=e.target,n=t.value;j(n)&&(t.value="")},autoFocus:!0})}),Object(a.jsxs)($.a,{item:!0,xs:6,sm:2,className:h.center,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h4",children:"Score"}),Object(a.jsxs)(p.a,{children:[u,"/",c.length]})]}),Object(a.jsxs)($.a,{item:!0,xs:6,sm:2,className:h.center,children:[Object(a.jsx)(p.a,{variant:"h6",component:"h4",children:"Time"}),Object(a.jsx)(p.a,{className:d<16?h.timerWarning:null,children:be(d)})]})]})}),Object(a.jsx)(F.a,{}),Object(a.jsx)(je,{children:Object(a.jsx)(oe,{questions:c,blur:!i,showKey:o})}),Object(a.jsx)(je,{children:Object(a.jsx)(_.a,{component:l.b,to:"/edit/".concat(t),startIcon:Object(a.jsx)(de.a,{}),children:"Edit this Game"})})]})},me=function(e){var t,n=e.gameId,c=e.gameIdx,s=e.template,i=e.allGames,l=Object(r.useState)([]),o=Object(O.a)(l,2),d=o[0],u=o[1],j=Object(r.useState)(0),b=Object(O.a)(j,2),h=b[0],m=b[1],x=Object(r.useState)(!1),p=Object(O.a)(x,2),f=p[0],v=p[1],g=Object(r.useState)(!1),w=Object(O.a)(g,2),y=w[0],q=w[1],S=Object(r.useState)([]),C=Object(O.a)(S,2),k=C[0],T=C[1],I=Object(r.useState)(0),N=Object(O.a)(I,2),A=N[0],B=N[1];Object(r.useEffect)((function(){u(function(e){var t,n=[],a=Object(Y.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push({label:r.label,answer:r.answers.display,accepts:r.answers.accepts,isCorrect:!1})}}catch(c){a.e(c)}finally{a.f()}return n}(s.questions)),m(s.time),v(!1),q(!1),T(function(e,t){if(!t||!Array.isArray(t))return[];if(t.length-1<=3)return[].concat(Object(X.a)(t.slice(0,e)),Object(X.a)(t.slice(e+1)));for(var n={};Object.keys(n).length<3;){var a=Math.floor(Math.random()*t.length);a in n||a===e||(n[a]=t[a])}return Object.values(n)}(c,i)),B(0)}),[c,s,i]),Object(r.useEffect)((function(){if(f&&!y){var e=setTimeout((function(){m(h-1),h<1&&q(!0)}),1e3);return function(){clearTimeout(e)}}}),[f,y,h]);return Object(a.jsx)(he,{gameId:n,headline:s.headline,image:null!==(t=null===s||void 0===s?void 0:s.image)&&void 0!==t?t:null,questionStatus:d,otherGames:k,wasStarted:f,gameOver:y,timeLeft:h,score:A,onGuess:function(e){if(!f||y)return!1;var t,n=Object(Y.a)(d.entries());try{for(n.s();!(t=n.n()).done;){var a=Object(O.a)(t.value,2),r=a[0],c=a[1];if(!c.isCorrect){var s,i=Object(Y.a)(c.accepts);try{for(i.s();!(s=i.n()).done;){var l=s.value;if(e.toLowerCase()===l.toLowerCase()){var o=JSON.parse(JSON.stringify(d));o[r].isCorrect=!0,u(o);var j=A+1;return B(j),j===d.length&&q(!0),!0}}}catch(b){i.e(b)}finally{i.f()}}}}catch(b){n.e(b)}finally{n.f()}return!1},onButton:function(){f?y||q(!0):v(!0)}})},Oe=n(280),xe=n(152),pe=n(153),fe=n.n(pe),ve=n(272),ge=n(283),we=n(279),ye=n(271),qe=n(154),Se=n.n(qe),Ce=n(273),ke=n(274),Te=n(275),Ie=n(276),Ne=Object(Z.a)(ne.a)({marginBottom:"2em"}),Ae=Object(Z.a)(we.a)({marginBottom:"1em"}),Be=function(e){var t,n,r,c,s,i,l=e.game,o=e.invalid,d=e.wasSubmitted,u=e.updateField,j=e.onSubmit,b=e.addQuestion,h=e.duplicateQuestion,m=e.deleteQuestion,O=e.moveQuestion,f=function(e){return!!o[e]},v=function(e,t,n){var a=u("".concat(e,".answers.accepts"));return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=Object(X.a)(t);if("add"===n)c.push(e);else{if("delete"!==n)throw new Error("Invalid operation for accepted answer update: '".concat(n,"'."));c.splice(r,1)}a({target:{value:c}})}},g=function(){return l.image.src.length>0||l.image.alt.length>0};return Object(a.jsxs)(x.a,{children:[Object.keys(o).length>0&&Object(a.jsxs)(Ae,{severity:"error",children:[Object(a.jsx)(ye.a,{children:"Game Contains Errors"}),"The game cannot be downloaded because either required fields are blank or some field contains incorrect data.",Object(a.jsx)("br",{}),"Please review the highlighted fields and alert messages, resolve the problems, and try to download again.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"This alert will disappear automatically once the errors are resolved."]})||d&&Object(a.jsxs)(Ae,{severity:"success",children:[Object(a.jsx)(ye.a,{children:"Game Ready"}),"The game contains zero errors and is ready for download."]}),Object(a.jsx)(p.a,{variant:"subtitle1",gutterBottom:!0,children:"The presence of * indicates required fields."}),Object(a.jsx)(Ne,{variant:"outlined",children:Object(a.jsxs)(ae.a,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Header"}),Object(a.jsxs)($.a,{container:!0,spacing:2,children:[Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{label:"Game ID",variant:"outlined",color:"secondary",fullWidth:!0,InputProps:{style:{fontFamily:"monospace"}},required:!0,helperText:null!==(t=o.id)&&void 0!==t?t:"This is a globally unique identifier for this game. It must consist of strictly lowercase alphanumeric characters and underscores.",value:l.id,onChange:u("id"),error:f("id")})}),Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{label:"Title",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(n=o.title)&&void 0!==n?n:"The shorter title of the game displayed in menus.",value:l.title,onChange:u("title"),error:f("title")})}),Object(a.jsx)($.a,{item:!0,xs:12,children:Object(a.jsx)(ee.a,{label:"Headline",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(r=o.headline)&&void 0!==r?r:"The extended description of what the player is tasked with entering.",value:l.headline,onChange:u("headline"),error:f("headline")})}),Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{label:"Image Source",variant:"outlined",color:"secondary",fullWidth:!0,required:g(),helperText:null!==(c=o["image.src"])&&void 0!==c?c:"",value:l.image.src,onChange:u("image.src"),error:f("image.src")})}),Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{label:"Image Alt Text",variant:"outlined",color:"secondary",fullWidth:!0,required:g(),helperText:null!==(s=o["image.alt"])&&void 0!==s?s:"",value:l.image.alt,onChange:u("image.alt"),error:f("image.alt")})})]})]})}),Object(a.jsx)(Ne,{variant:"outlined",children:Object(a.jsxs)(ae.a,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Game Settings"}),Object(a.jsx)($.a,{container:!0,spacing:2,children:Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{label:"Time Limit",type:"number",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,helperText:null!==(i=o.time)&&void 0!==i?i:"",value:l.time,onChange:u("time"),error:f("time")})})})]})}),Object(a.jsxs)(Ne,{variant:"outlined",children:[Object(a.jsxs)(ae.a,{children:[Object(a.jsx)(p.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Questions"}),o.questions&&Object(a.jsx)(Ae,{severity:"error",style:{marginBottom:"1em"},children:o.questions}),l.questions.map((function(e,t){var n,r,c,s="questions[".concat(t,"]");return Object(a.jsxs)(ne.a,{variant:"outlined",style:{marginBottom:t!==l.questions.length-1?"1em":0},children:[Object(a.jsxs)(ae.a,{children:[Object(a.jsxs)(p.a,{variant:"h6",component:"h3",gutterBottom:!0,children:["Question ",t+1]}),Object(a.jsxs)($.a,{container:!0,spacing:2,children:[Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{variant:"outlined",color:"secondary",label:"Displayed Question",fullWidth:!0,required:!0,helperText:null!==(n=o["".concat(s,".label")])&&void 0!==n?n:"",value:e.label,onChange:u("".concat(s,".label")),error:f("".concat(s,".label"))})}),Object(a.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(ee.a,{variant:"outlined",color:"secondary",label:"Displayed Answer",fullWidth:!0,required:!0,helperText:null!==(r=o["".concat(s,".answers.display")])&&void 0!==r?r:"",value:e.answers.display,onChange:u("".concat(s,".answers.display")),error:f("".concat(s,".answers.display"))})}),Object(a.jsx)($.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",color:"secondary",label:"Accepted Answers",fullWidth:!0,required:!0,helperText:null!==(c=o["".concat(s,".answers.accepts")])&&void 0!==c?c:"The list of accepted answers does not include the displayed answer unless it is also included here.",value:e.answers.accepts,onAdd:v(s,e.answers.accepts,"add"),onDelete:v(s,e.answers.accepts,"delete"),error:f("".concat(s,".answers.accepts"))})})]})]}),Object(a.jsxs)(ve.a,{disableSpacing:!0,children:[Object(a.jsx)(ge.a,{title:"Delete",children:Object(a.jsx)(G.a,{"aria-label":"delete",onClick:m(t),children:Object(a.jsx)(Ce.a,{})})}),Object(a.jsx)(ge.a,{title:"Move Question Up",children:Object(a.jsx)(x.a,{children:Object(a.jsx)(G.a,{"aria-label":"move up",onClick:O(t,"up"),disabled:0===t,children:Object(a.jsx)(ke.a,{})})})}),Object(a.jsx)(ge.a,{title:"Move Question Down",children:Object(a.jsx)(x.a,{children:Object(a.jsx)(G.a,{"aria-label":"move down",onClick:O(t,"down"),disabled:t===l.questions.length-1,children:Object(a.jsx)(Te.a,{})})})}),Object(a.jsx)(ge.a,{title:"Duplicate Question",children:Object(a.jsx)(G.a,{"aria-label":"duplicate question",onClick:h(t),children:Object(a.jsx)(Ie.a,{})})}),Object(a.jsx)(ge.a,{title:"Add Question Above",children:Object(a.jsx)(G.a,{"aria-label":"add question above",onClick:b(t),children:Object(a.jsx)(q.a,{})})})]})]},e.id)}))]}),Object(a.jsx)(ve.a,{disableSpacing:!0,children:Object(a.jsx)(ge.a,{title:"Add Question",children:Object(a.jsx)(G.a,{"aria-label":"add question",onClick:b(),children:Object(a.jsx)(q.a,{})})})})]}),Object(a.jsx)(_.a,{variant:"contained",color:"primary",onClick:j,style:{marginBottom:"2em"},children:"Download"})]})},Ge=function(){return{id:Object(Oe.a)().toUpperCase(),label:"",answers:{display:"",accept:[]}}},Ee=function(e){var t,n=e.gameIdx,c=e.template,s=e.allGames,i=Object(r.useState)(null!==(t=function(e,t,n){var a,r;if(!t)return null;var c=null!==(a=null===n||void 0===n||null===(r=n[e])||void 0===r?void 0:r.id)&&void 0!==a?a:null;if(!c)return null;var s=JSON.parse(JSON.stringify(t));s.id=c;for(var i=0;i<s.questions.length;i++)s.questions[i].id=Object(Oe.a)().toUpperCase();return s}(n,c,s))&&void 0!==t?t:{id:"",time:0,title:"",headline:"",image:{src:"",alt:""},questions:[Ge()]}),l=Object(O.a)(i,2),o=l[0],d=l[1],u=Object(r.useState)(!1),j=Object(O.a)(u,2),b=j[0],h=j[1],m=Object(r.useState)({}),x=Object(O.a)(m,2),p=x[0],f=x[1],v=function(){return JSON.parse(JSON.stringify(o))},g=function(e){var t=e.g,n=void 0===t?o:t,a=e.force;if(b||void 0!==a&&a){for(var r={},c=0,s=["id","title","headline"];c<s.length;c++){var i=s[c];n[i].length<1&&(r[i]="This field cannot be blank.")}if(n.image.src.length>0||n.image.alt.length>0)for(var l=0,d=["src","alt"];l<d.length;l++){var u=d[l];n.image[u].length<1&&(r["image.".concat(u)]="If one image field has a value, both must be filled.")}n.time<15&&(r.time="Time cannot be less than fifteen seconds."),n.questions.length<3&&(r.questions="Must have a minumum of three questions.");for(var j=0;j<n.questions.length;j++){var h="questions[".concat(j,"]");n.questions[j].label.length<1&&(r["".concat(h,".label")]="This field cannot be blank."),n.questions[j].answers.display.length<1&&(r["".concat(h,".answers.display")]="This field cannot be blank."),n.questions[j].answers.accepts.length<1&&(r["".concat(h,".answers.accepts")]="Must have at least one accepted answer.")}return f(r),0===Object.keys(r).length}};return Object(a.jsx)(Be,{game:o,invalid:p,wasSubmitted:b,updateField:function(e){return function(t){var n,a,r=null!==(n=null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.value)&&void 0!==n?n:null;if(null===r)throw new Error("Received null value for update of '".concat(e,"'."));var c=v();if(["id","title","headline","time"].includes(e))"time"===e&&(r=""!==r?parseInt(r):0),c[e]=r;else if(e.includes("image")){if(e=e.substring(e.lastIndexOf(".")+1),!["src","alt"].includes(e))throw new Error("Bad image field '".concat(e,"' for attempted update."));c.image[e]=r}else{if(!e.includes("questions"))throw new Error("Bad field name '".concat(e,"' for attempted update."));var s=parseInt(e.substring(e.lastIndexOf("[")+1,e.lastIndexOf("]")));if((e=e.substring(e.lastIndexOf("]")+2)).includes("."))if("answers.display"===e)c.questions[s].answers.display=r;else{if("answers.accepts"!==e)throw new Error("Bad question field '".concat(e,"' for attempted update."));c.questions[s].answers.accepts=r}else c.questions[s][e]=r}d(c),g({g:c})}},onSubmit:function(){if(h(!0),g({force:!0})){var e=v();delete e.id;for(var t=0;t<e.questions.length;t++)delete e.questions[t].id;e.image.src.length<1&&delete e.image;var n=Object(xe.format)(JSON.stringify(e),{parser:"json",plugins:[fe.a]}),a=document.createElement("a");a.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(n)),a.setAttribute("download","".concat(o.id,".json")),document.body.appendChild(a),a.click(),document.body.removeChild(a)}else window.scrollTo(0,0)},addQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=v();null===e?t.questions.push(Ge()):t.questions.splice(e,0,Ge()),d(t),g({g:t})}},duplicateQuestion:function(e){return function(){var t=v(),n=JSON.parse(JSON.stringify(t.questions[e]));n.id=Object(Oe.a)(),t.questions.splice(e,0,n),d(t),g({g:t})}},deleteQuestion:function(e){return function(){var t=v();t.questions.splice(e,1),d(t),g({g:t})}},moveQuestion:function(e,t){return function(){var n;switch(t){case"up":n=e-1;break;case"down":n=e+1;break;default:throw new Error("Invlid direction to move question: '".concat(t,"'"))}var a=v(),r=a.questions[n];a.questions[n]=a.questions[e],a.questions[e]=r,d(a),g({g:a})}}})},Qe=function(){return Object(a.jsx)(d.a,{theme:z,children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(M,{}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/play/:gameId",children:Object(a.jsx)(V,{component:me})}),Object(a.jsx)(o.a,{path:"/create",children:Object(a.jsx)(Ee,{})}),Object(a.jsx)(o.a,{path:"/edit/:gameId",children:Object(a.jsx)(V,{component:Ee})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(I,{})},"home")]})})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Qe,{})}),document.getElementById("root")),We()}},[[215,1,2]]]);
//# sourceMappingURL=main.0f308037.chunk.js.map