(this["webpackJsonpfirebase-github-app"]=this["webpackJsonpfirebase-github-app"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),n=a(35),r=a.n(n),i=(a(76),a(17)),l=(a(77),a(78),a(27)),j=a(19),o=a(32),b=(a(79),a(36)),u=(a(52),a(0)),d=a.n(u),x=a(2),h=a(47),O=a.n(h),m=a(122),p=a(123),g=a(124),f=a(125),v=a(126),w=a(140),y=a(127),N=a(118),S=a(119),C=a(6),k=function(e){var t=e.user;return Object(C.jsxs)(N.a,{className:"text-center mt-3 mb-4",children:[Object(C.jsx)("img",{src:t.avatar_url,className:"img-thumbnail",alt:"imgage"}),Object(C.jsxs)(S.a,{children:[Object(C.jsx)("div",{className:"text-primary",children:t.name}),Object(C.jsx)("div",{className:"text-primary",children:t.location}),Object(C.jsx)("div",{className:"text-primary",children:t.bio}),Object(C.jsxs)("div",{className:"text-primary",children:[" ","Available for hire: ",t.hireable?"YES":"NOPE"]}),Object(C.jsxs)("div",{className:"text-primary",children:[" Followers ",t.followers]}),Object(C.jsxs)("div",{className:"text-primary",children:[" ",t.blog]})]})]})},P=a(120),E=a(121),I=function(e){var t=e.repos_url,a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1],l=function(){var e=Object(x.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t);case 2:a=e.sent,c=a.data,r(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[t]),Object(C.jsx)(P.a,{children:n.map((function(e){return Object(C.jsxs)(E.a,{children:[Object(C.jsx)("div",{className:"text-primary",children:e.name}),Object(C.jsx)("div",{className:"text-secondary",children:e.language}),Object(C.jsx)("div",{className:"text-info",children:e.description})]},e.id)}))})},A=Object(c.createContext)(),F=function(){var e,t=Object(c.useContext)(A),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(null),b=Object(i.a)(l,2),u=b[0],h=b[1],N=function(){var e=Object(x.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.github.com/users/".concat(n));case 3:t=e.sent,a=t.data,h(a),console.log({data:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(o.b)("Not able to locate user",{type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{className:"mt-3",children:[Object(C.jsxs)(g.a,{md:"5",children:[Object(C.jsxs)(f.a,{children:[Object(C.jsx)(v.a,{value:n,onChange:function(e){return r(e.target.value)},placeholder:"Please Provide the username"}),Object(C.jsx)(w.a,{addonType:"append",children:Object(C.jsx)(y.a,{onClick:N,color:"primary",children:"Fetch User"})})]}),u?Object(C.jsx)(k,{user:u}):null]}),Object(C.jsx)(g.a,{md:"7",children:u?Object(C.jsx)(I,{repos_url:u.repos_url}):null})]})}):Object(C.jsx)(j.a,{to:"/signin"})},U=a(128),J=a(129),T=a(130),_=a(131),D=a(132),M=function(){var e,t=Object(c.useContext)(A),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),d=u[0],x=u[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(j.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(g.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),b.a.auth().signInWithEmailAndPassword(n,d).then((function(e){console.log(e.user.uid),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(o.b)(e.message,{type:"error"})}))},children:[Object(C.jsx)(J.a,{className:"",children:"Sign in here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(T.a,{row:!0,children:[Object(C.jsx)(_.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(g.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(C.jsxs)(T.a,{row:!0,children:[Object(C.jsx)(_.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(g.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(D.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign In"})})]})})})})})},z=function(){var e,t=Object(c.useContext)(A),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),d=u[0],x=u[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(j.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(g.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),b.a.auth().createUserWithEmailAndPassword(n,d).then((function(e){console.log(e.user.uid),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(o.b)(e.message,{type:"error"})}))},children:[Object(C.jsx)(J.a,{className:"",children:"Sign Up here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(T.a,{row:!0,children:[Object(C.jsx)(_.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(g.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(C.jsxs)(T.a,{row:!0,children:[Object(C.jsx)(_.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(g.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(D.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign Up"})})]})})})})})},B=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"Page not found "})})},G=a(70),K=function(){return Object(C.jsxs)(m.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-2",children:["GitHub Repose Made with \u2764\ufe0f by",Object(C.jsx)(G.SocialIcon,{className:"ml-2",url:"https://www.instagram.com/ayushk1998/",target:"_blank"})]})},L=a(133),R=a(134),Y=a(135),W=a(136),H=a(141),q=a(137),Q=a(138),V=a(139),X=function(){var e,t=Object(c.useContext)(A),a=Object(c.useState)(!1),s=Object(i.a)(a,2),n=s[0],r=s[1];return Object(C.jsxs)(L.a,{color:"info",light:!0,expand:"md",children:[Object(C.jsxs)(R.a,{children:[" ",Object(C.jsx)(l.b,{to:"/",className:"text-white",children:"GitFire App"})]}),Object(C.jsx)(Y.a,{className:"text-white",children:(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""}),Object(C.jsx)(W.a,{onClick:function(){return r(!n)}}),Object(C.jsx)(H.a,{isOpen:n,navbar:!0,children:Object(C.jsx)(q.a,{className:"ml-auto",navbar:!0,children:t.user?Object(C.jsx)(Q.a,{children:Object(C.jsx)(V.a,{onClick:function(){t.setUser(null)},tag:l.b,to:"/",className:"text-white",children:"Logout"})}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Q.a,{children:Object(C.jsx)(V.a,{tag:l.b,to:"/signup",className:"text-white",children:"Signup"})}),Object(C.jsx)(Q.a,{children:Object(C.jsx)(V.a,{tag:l.b,to:"/signin",className:"text-white",children:"Signin"})})]})})})]})};b.a.initializeApp({apiKey:"AIzaSyAPwwASEyxtsJJS3Jd2pz32PEYxn5ROMdM",authDomain:"mygitapp-433b2.firebaseapp.com",projectId:"mygitapp-433b2",storageBucket:"mygitapp-433b2.appspot.com",messagingSenderId:"876648928894",appId:"1:876648928894:web:bf3608ad7312046cfcea2f",measurementId:"G-RTK4TYNK11"});var Z=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(o.a,{}),Object(C.jsxs)(A.Provider,{value:{user:a,setUser:s},children:[Object(C.jsx)(X,{}),Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{exact:!0,path:"/",component:F}),Object(C.jsx)(j.b,{exact:!0,path:"/signin",component:M}),Object(C.jsx)(j.b,{exact:!0,path:"/signup",component:z}),Object(C.jsx)(j.b,{exact:!0,path:"*",component:B})]}),Object(C.jsx)(K,{})]})]})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(Z,{})}),document.getElementById("root")),$()},76:function(e,t,a){},78:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.35cdd220.chunk.js.map