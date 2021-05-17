(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=a(8),s=a(7),m=a(1),i=Object(n.createContext)({email:"",setEmail:()=>{},loggedIn:!1,setLoggedIn:()=>{}}),u=(a(31),a(9)),E=a.n(u),d=function(){return E.a.get("/api/books")},g=function(e){return E.a.get("/api/books/"+e)},p=function(e){return E.a.delete("/api/books/"+e)},b=function(e){return E.a.post("/api/books",e)},f=function(e){return E.a.post("/api/user/login",e)},h=function(){return E.a.get("/api/user/logout")},v=function(e){return E.a.post("/api/user/signup",e)};var N=function(e){var t=Object(n.useContext)(i),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(m.g)(),u=Object(n.useRef)(),E=Object(n.useRef)(),d={};e.className&&(d.className=e.className);var g=e.className?e.className+"-login-email":"login-email",p=e.className?e.className+"-login-email-help":"login-email-help",b=e.className?e.className+"-login-password":"login-password",h=e=>{e.preventDefault(),f({email:u.current.value,password:E.current.value}).then(e=>{r(e.data.email),o(!0),s.push("/")}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},d,{onSubmit:h}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:g},"Email address"),l.a.createElement("input",{ref:u,type:"email",className:"form-control",id:g,"aria-describedby":p}),l.a.createElement("small",{id:p,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:b},"Password"),l.a.createElement("input",{ref:E,type:"password",className:"form-control",id:b})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))};a(55);var j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(i),m=c.email,u=c.loggedIn;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"),u?l.a.createElement("p",{className:"logged-in-text"},"Logged in as ",m," ",l.a.createElement(s.b,{to:"/logout",onClick:()=>r(!1)},"Logout")," "):a?l.a.createElement(n.Fragment,null,l.a.createElement(N,{className:"top-menu-login"}),l.a.createElement("button",{onClick:()=>r(!1)},"X")):l.a.createElement("button",{onClick:()=>r(!0)},"Login"))},O=a(16);a(56);var y=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var x=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)};function k({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function w({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function C({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(57);function I({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function S({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function L(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function F(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function R(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),m=Object(o.a)(c,2),i=m[0],u=m[1];function E(){d().then(e=>r(e.data)).catch(e=>console.log(e))}function g(e){var t=e.target,a=t.name,n=t.value;u(Object(O.a)(Object(O.a)({},i),{},{[a]:n}))}return Object(n.useEffect)(()=>{E()},[]),l.a.createElement(k,{fluid:!0},l.a.createElement(w,null,l.a.createElement(C,{size:"md-6"},l.a.createElement(x,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(L,{onChange:g,name:"title",placeholder:"Title (required)"}),l.a.createElement(L,{onChange:g,name:"author",placeholder:"Author (required)"}),l.a.createElement(F,{onChange:g,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(R,{disabled:!(i.author&&i.title),onClick:function(e){e.preventDefault(),i.title&&i.author&&b({title:i.title,author:i.author,synopsis:i.synopsis}).then(e=>E()).catch(e=>console.log(e))}},"Submit Book"))),l.a.createElement(C,{size:"md-6 sm-12"},l.a.createElement(x,null,l.a.createElement("h1",null,"Books On My List")),a.length?l.a.createElement(I,null,a.map(e=>l.a.createElement(S,{key:e._id},l.a.createElement(s.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(y,{onClick:()=>{return t=e._id,void p(t).then(e=>E()).catch(e=>console.log(e));var t}})))):l.a.createElement("h3",null,"No Results to Display"))))};var B=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(m.h)().bookid;return Object(n.useEffect)(()=>{g(i).then(e=>c(e.data)).catch(e=>console.log(e))},[i]),l.a.createElement(k,{fluid:!0},l.a.createElement(w,null,l.a.createElement(C,{size:"md-12"},l.a.createElement(x,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(w,null,l.a.createElement(C,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(w,null,l.a.createElement(C,{size:"md-2"},l.a.createElement(s.b,{to:"/"},"\u2190 Back to Authors"))))};var D=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(w,null,l.a.createElement(C,{size:"md-12"},l.a.createElement(x,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var P=function(e){var t=Object(n.useContext)(i).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"Login"),l.a.createElement(N,{className:"full-page-login"}))};var W=function(e){var t=Object(n.useContext)(i),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(n.useRef)(),m=Object(n.useRef)(),u={};e.className&&(u.className=e.className);var E=e.className?e.className+"-signup-email":"signup-email",d=e.className?e.className+"-signup-email-help":"signup-email-help",g=e.className?e.className+"-signup-password":"signup-password",p=e=>{e.preventDefault(),v({email:s.current.value,password:m.current.value}).then(e=>{r(e.data.email),o(!0)}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},u,{onSubmit:p}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:E},"Email address"),l.a.createElement("input",{ref:s,type:"email",className:"form-control",id:E,"aria-describedby":d}),l.a.createElement("small",{id:d,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:g},"Password"),l.a.createElement("input",{ref:m,type:"password",className:"form-control",id:g})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))};var A=function(e){var t=Object(n.useContext)(i).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"SignUp"),l.a.createElement(W,{className:"full-page-signup"}))};var _=function(e){var t=Object(n.useContext)(i),a=t.setEmail,r=t.setLoggedIn;return Object(n.useEffect)(()=>{h().then(e=>{r(!1),a("")}).catch(e=>{console.log(e)})},[a,r]),l.a.createElement("div",null,l.a.createElement("p",null,"You are now logged out."))};var q=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),E=u[0],d=u[1];return l.a.createElement(s.a,null,l.a.createElement(i.Provider,{value:{email:a,setEmail:r,loggedIn:E,setLoggedIn:d}},l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:["/","/books"]},l.a.createElement(z,null)),l.a.createElement(m.b,{exact:!0,path:"/books/:bookid"},l.a.createElement(B,null)),l.a.createElement(m.b,{exact:!0,path:"/login"},l.a.createElement(P,null)),l.a.createElement(m.b,{exact:!0,path:"/signup"},l.a.createElement(A,null)),l.a.createElement(m.b,{exact:!0,path:"/logout"},l.a.createElement(_,null)),l.a.createElement(m.b,null,l.a.createElement(D,null))))))};c.a.render(l.a.createElement(q,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3e223030.chunk.js.map