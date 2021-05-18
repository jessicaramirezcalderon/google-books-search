(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=a(8),s=a(9),m=a(1),u=Object(n.createContext)({email:"",setEmail:()=>{},loggedIn:!1,setLoggedIn:()=>{}}),i=(a(31),a(6)),E=a.n(i),d=function(){return E.a.get("/api/books")},g=function(e){return E.a.get("/api/books/"+e)},b=function(e){return E.a.delete("/api/books/"+e)},p=function(e){return E.a.post("/api/books",e)},f=function(e){return E.a.post("/api/user/login",e)},h=function(){return E.a.get("/api/user/logout")},v=function(e){return E.a.post("/api/user/signup",e)};var N=function(e){var t=Object(n.useContext)(u),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(m.g)(),i=Object(n.useRef)(),E=Object(n.useRef)(),d={};e.className&&(d.className=e.className);var g=e.className?e.className+"-login-email":"login-email",b=e.className?e.className+"-login-email-help":"login-email-help",p=e.className?e.className+"-login-password":"login-password",h=e=>{e.preventDefault(),f({email:i.current.value,password:E.current.value}).then(e=>{r(e.data.email),o(!0),s.push("/")}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},d,{onSubmit:h}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:g},"Email address"),l.a.createElement("input",{ref:i,type:"email",className:"form-control",id:g,"aria-describedby":b}),l.a.createElement("small",{id:b,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:p},"Password"),l.a.createElement("input",{ref:E,type:"password",className:"form-control",id:p})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))};a(55);var j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(u),m=c.email,i=c.loggedIn;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"),i?l.a.createElement("p",{className:"logged-in-text"},"Logged in as ",m," ",l.a.createElement(s.b,{to:"/logout",onClick:()=>r(!1)},"Logout")," "):a?l.a.createElement(n.Fragment,null,l.a.createElement(N,{className:"top-menu-login"}),l.a.createElement("button",{onClick:()=>r(!1)},"X")):l.a.createElement("button",{onClick:()=>r(!0)},"Login"))},O=a(16);var y=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},k=function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=").concat("AIzaSyCQhuylZSmeja2xBfvURTgIwxNwTFPyYFA"))};function x({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function I({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function w({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(56);function S({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function C({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function L({children:e}){return l.a.createElement("p",null,e)}function F(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function B(e){return l.a.createElement("button",Object.assign({},e,{style:{marginBottom:10},className:"btn btn-success"}),e.children)}a(57);var R=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(o.a)(c,2),m=s[0],u=s[1],i=Object(n.useState)({}),E=Object(o.a)(i,2),g=E[0],f=E[1];function h(){d().then(e=>u(e.data)).catch(e=>console.log(e))}return Object(n.useEffect)(()=>{h()},[]),l.a.createElement(x,{fluid:!0},l.a.createElement(I,null,l.a.createElement(w,{size:"md-6"},l.a.createElement(y,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(F,{onChange:e=>function(e){var t=e.target,a=t.name,n=t.value;f(Object(O.a)(Object(O.a)({},g),{},{[a]:n}))}(e),name:"search",placeholder:"Search for Book"}),l.a.createElement(B,{disabled:!g.search,onClick:e=>(e.preventDefault(),void(g.search&&k(g.search).then(e=>r(e.data.items)).catch(e=>console.log(e))))},"Search Book")),a.length?l.a.createElement(S,null,a.map(e=>l.a.createElement(C,{key:e.id},l.a.createElement("strong",null,e.volumeInfo.title," by ",e.volumeInfo.authors[0]),l.a.createElement(L,null,e.volumeInfo.description),l.a.createElement("button",{onClick:()=>function(e){var t={title:e.volumeInfo.title,author:e.volumeInfo.authors[0],synopsis:e.volumeInfo.description};p(t).then(e=>u([e.data,...m])).catch(e=>console.log(e))}(e),type:"button",class:"btn btn-info"},"Add Book")))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(y,null,l.a.createElement("h1",null,"Books On My List")),m.length?l.a.createElement(S,null,m.map(e=>l.a.createElement(C,{key:e._id},l.a.createElement("strong",null,e.title," by ",e.author),l.a.createElement(L,null,e.description),l.a.createElement(R,{onClick:()=>{return t=e._id,void b(t).then(()=>h()).catch(e=>console.log(e));var t}})))):l.a.createElement("h3",null,"No Saved Books to Display"))))};var A=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(m.h)().bookid;return Object(n.useEffect)(()=>{g(u).then(e=>c(e.data)).catch(e=>console.log(e))},[u]),l.a.createElement(x,{fluid:!0},l.a.createElement(I,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(y,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(I,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(I,null,l.a.createElement(w,{size:"md-2"},l.a.createElement(s.b,{to:"/"},"\u2190 Back to Authors"))))};var D=function(){return l.a.createElement(x,{fluid:!0},l.a.createElement(I,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(y,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var P=function(e){var t=Object(n.useContext)(u).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"Login"),l.a.createElement(N,{className:"full-page-login"}))};var W=function(e){var t=Object(n.useContext)(u),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(n.useRef)(),m=Object(n.useRef)(),i={};e.className&&(i.className=e.className);var E=e.className?e.className+"-signup-email":"signup-email",d=e.className?e.className+"-signup-email-help":"signup-email-help",g=e.className?e.className+"-signup-password":"signup-password",b=e=>{e.preventDefault(),v({email:s.current.value,password:m.current.value}).then(e=>{r(e.data.email),o(!0)}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},i,{onSubmit:b}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:E},"Email address"),l.a.createElement("input",{ref:s,type:"email",className:"form-control",id:E,"aria-describedby":d}),l.a.createElement("small",{id:d,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:g},"Password"),l.a.createElement("input",{ref:m,type:"password",className:"form-control",id:g})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))};var T=function(e){var t=Object(n.useContext)(u).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"SignUp"),l.a.createElement(W,{className:"full-page-signup"}))};var U=function(e){var t=Object(n.useContext)(u),a=t.setEmail,r=t.setLoggedIn;return Object(n.useEffect)(()=>{h().then(e=>{r(!1),a("")}).catch(e=>{console.log(e)})},[a,r]),l.a.createElement("div",null,l.a.createElement("p",null,"You are now logged out."))};var J=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),E=i[0],d=i[1];return l.a.createElement(s.a,null,l.a.createElement(u.Provider,{value:{email:a,setEmail:r,loggedIn:E,setLoggedIn:d}},l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:["/","/books"]},l.a.createElement(z,null)),l.a.createElement(m.b,{exact:!0,path:"/books/:bookid"},l.a.createElement(A,null)),l.a.createElement(m.b,{exact:!0,path:"/login"},l.a.createElement(P,null)),l.a.createElement(m.b,{exact:!0,path:"/signup"},l.a.createElement(T,null)),l.a.createElement(m.b,{exact:!0,path:"/logout"},l.a.createElement(U,null)),l.a.createElement(m.b,null,l.a.createElement(D,null))))))};c.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.80989a2e.chunk.js.map