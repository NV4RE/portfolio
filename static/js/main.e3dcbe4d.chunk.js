(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{69:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(1),i=t.n(c),o=t(34),a=t.n(o),s=t(14),u=t(20),l=t.n(u),d=t(35),b=t(18),x=t(36),j=t.n(x),f=Object(c.createContext)(void 0),p=function(n){var e=Object(c.useState)(void 0),t=Object(b.a)(e,2),i=t[0],o=t[1];return Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.get("".concat("http://localhost:8080","/resume.json"));case 3:e=n.sent,o(e.data),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),alert("Ohhh, think my backend are down :(");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[]),Object(r.jsx)(f.Provider,{value:i,children:n.children})},h=t(3),m=(t(63),t(5)),O=t(4);function v(){var n=Object(h.a)(["\n  display: flex;\n\n  flex-flow: column nowrap;\n  align-items: center;\n\n  min-width: 210px;\n  max-width: 1024px;\n\n  background-color: #e8e8e8;\n  border-radius: 8px;\n  box-shadow: 3px 10px 27px -8px rgba(0, 0, 0, 0.9);\n  padding: 40px;\n  margin: 0 80px;\n\n  @media (max-width: 768px) {\n    box-sizing: border-box;\n    width: 100%;\n    margin: 32px 15px;\n  }\n"]);return v=function(){return n},n}var g=O.a.div(v());function w(){var n=Object(h.a)(["\n  display: flex;\n  width: 100vw;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n"]);return w=function(){return n},n}var k=O.a.div(w());function y(){var n=Object(h.a)(['\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #f6f6f6;\n  cursor: pointer;\n\n  font-family: "Nurom-Bold";\n\n  margin: 20px 0 0 0;\n  padding: 7px;\n  border-radius: 3px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n']);return y=function(){return n},n}var C,z=O.a.div(y()),M=t(13),E=t(11);!function(n){n.Mail="mail",n.Github="github.com",n.Gitlab="gitlab.com",n.Linkedin="linkedin.com",n.Medium="medium.com",n.Instagram="instagram.com",n.Home="home",n.Back="back",n.Profile="profile",n.AboutMe="aboutme",n.Summary="summary",n.Experiences="experiences",n.Contact="contact"}(C||(C={}));var L=function(n){switch(n.name){case C.Mail:return Object(r.jsx)(M.f,{});case C.Github:return Object(r.jsx)(M.a,{});case C.Gitlab:return Object(r.jsx)(M.b,{});case C.Linkedin:return Object(r.jsx)(M.e,{});case C.Medium:return Object(r.jsx)(E.e,{});case C.Instagram:return Object(r.jsx)(M.c,{});case C.Home:return Object(r.jsx)(E.d,{});case C.Profile:return Object(r.jsx)(E.h,{});case C.AboutMe:return Object(r.jsx)(E.c,{});case C.Back:return Object(r.jsx)(E.a,{});case C.Summary:return Object(r.jsx)(E.f,{});case C.Experiences:return Object(r.jsx)(E.g,{});case C.Contact:return Object(r.jsx)(E.b,{});default:return Object(r.jsx)(M.d,{})}};function B(){var n=Object(h.a)(["\n  display: flex;\n  flex: 1 0 100%;\n  width: 100%;\n  justify-content: space-between;\n"]);return B=function(){return n},n}var N=O.a.div(B()),S=function(n){var e=Object(m.g)(),t=e.location.pathname.split("/"),c=t[t.length-1],i=n.pages.indexOf(c),o=n.pages[(i-1)%n.pages.length]||"/",a=n.pages[(i+1)%n.pages.length]||"/";return Object(r.jsxs)(N,{children:[Object(r.jsx)(z,{className:"hvr-backward",onClick:function(){return e.push(o)},children:Object(r.jsx)(L,{name:o})}),Object(r.jsx)(z,{className:"hvr-forward",onClick:function(){return e.push(a)},children:Object(r.jsx)(L,{name:a})})]})};function _(){var n=Object(h.a)(["\n  font-size: 0.8em;\n  font-weight: 200;\n"]);return _=function(){return n},n}function G(){var n=Object(h.a)(["\n  font-size: 1.2em;\n  font-weight: 800;\n"]);return G=function(){return n},n}function A(){var n=Object(h.a)(["\n  padding: 18px 0 4px 0;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n  word-wrap: break-word;\n\n  /* color: #1c2b2d; */\n"]);return A=function(){return n},n}function H(){var n=Object(h.a)(['\n  font-family: "Nurom-Bold";\n  padding: 2px 0 4px 0;\n  margin: 0;\n  font-size: 2.2rem;\n  white-space: nowrap;\n  /* color: #222222; */\n']);return H=function(){return n},n}var I=O.a.p(H()),P=O.a.p(A()),J=O.a.span(G()),T=O.a.span(_());function W(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n"]);return W=function(){return n},n}var K=O.a.div(W()),R=function(){var n,e=Object(c.useContext)(f);return Object(r.jsx)(k,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(I,{children:"About me"}),Object(r.jsx)(K,{children:null===e||void 0===e?void 0:e.about_me.map((function(n,e){return Object(r.jsxs)(P,{children:[0===e?Object(r.jsx)(J,{children:"Hi, "}):"",n]},e)}))}),Object(r.jsx)(S,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})};function U(){var n=Object(h.a)(["\n  padding: 0 0 0 7px;\n  margin: 0;\n  text-decoration: none;\n  text-align: center;\n"]);return U=function(){return n},n}function $(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #f6f6f6;\n  cursor: pointer;\n\n  box-sizing: border-box;\n  width: 100%;\n\n  padding: 10px;\n  margin: 6px 0;\n  border-radius: 8px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n"]);return $=function(){return n},n}var q=O.a.div($()),D=O.a.p(U()),F=function(n){return/mailto:/gi.test(n)?"mail":new URL(n).hostname},Q=function(n){return Object(r.jsxs)(q,{className:"hvr-float",onClick:function(){return window.open(n.link,"_blank","noopener noreferrer")},children:[Object(r.jsx)(L,{name:F(n.link)})," ",Object(r.jsx)(D,{children:n.label})]})},V=function(){var n,e=Object(c.useContext)(f);return Object(r.jsx)(k,{children:Object(r.jsxs)(g,{children:[null===e||void 0===e?void 0:e.contacts.map((function(n){return Object(r.jsx)(Q,{link:n.link,label:n.label},n.link)})),Object(r.jsx)(S,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})},X=t(40),Y=t(71);function Z(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  margin: 12px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(h.a)(["\n  border-radius: 50%;\n  height: 45px;\n  margin: 0 0 15px 0;\n"]);return nn=function(){return n},n}function en(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  color: #f6f6f6;\n\n  box-sizing: border-box;\n  width: 100%;\n\n  padding: 23px;\n  margin: 6px 0;\n  border-radius: 8px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n"]);return en=function(){return n},n}var tn=O.a.div(en()),rn=O.a.img(nn()),cn=O.a.div(Z()),on=function(n){return n?Y.a(n,"MMM/yyyy"):"now"},an=function(n){return Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{src:n.logo}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(J,{children:n.job_title}),Object(r.jsxs)(P,{children:[n.company_name," ",Object(r.jsxs)(T,{children:[on(n.from)," \u2014 ",on(n.to)]})]}),n.description]})]})};function sn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n"]);return sn=function(){return n},n}var un=O.a.div(sn()),ln=function(){var n,e=Object(c.useContext)(f);return Object(r.jsx)(k,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(I,{children:"Experiences"}),Object(r.jsx)(un,{children:null===e||void 0===e?void 0:e.experiences.map((function(n,e){return Object(r.jsx)(an,Object(X.a)({},n),e)}))}),Object(r.jsx)(S,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})};function dn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #f4f4f2;\n\n  margin: 3px;\n  padding: 5px;\n  border-radius: 3px;\n  background-color: #1c2b2d;\n"]);return dn=function(){return n},n}var bn=O.a.div(dn()),xn=t.p+"static/media/profile.20f315aa.jpg";function jn(){var n=Object(h.a)(["\n  border-radius: 50%;\n  height: 8rem;\n  margin: 0 0 15px 0;\n"]);return jn=function(){return n},n}var fn=O.a.img(jn()),pn=function(){var n=Object(m.g)(),e=Object(c.useContext)(f);return Object(r.jsx)(k,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(fn,{src:xn}),Object(r.jsxs)(J,{children:[null===e||void 0===e?void 0:e.profile.f_name," ",null===e||void 0===e?void 0:e.profile.l_name]}),Object(r.jsx)(bn,{children:null===e||void 0===e?void 0:e.profile.jd}),Object(r.jsx)(z,{className:"hvr-grow",onClick:function(){return n.push("/aboutme")},children:"Know me better ?"})]})})};function hn(){var n=Object(h.a)(['\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n\n  ::after {\n    content: "";\n    flex: auto;\n  }\n']);return hn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  box-sizing: border-box;\n  height: 28px;\n  width: 220px;\n  margin: 2px 2px;\n  padding: 0 8px;\n  text-align: center;\n\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  background-color: inherit;\n  -webkit-appearance: none;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return mn=function(){return n},n}var On=O.a.input(mn()),vn=O.a.div(hn()),gn=function(){var n,e,t=Object(c.useContext)(f),i=Object(c.useState)(null!==(n=null===t||void 0===t?void 0:t.skills)&&void 0!==n?n:[]),o=Object(b.a)(i,2),a=o[0],s=o[1],u=Object(c.useState)(""),l=Object(b.a)(u,2),d=l[0],x=l[1];return Object(c.useEffect)((function(){var n;s((null!==(n=null===t||void 0===t?void 0:t.skills)&&void 0!==n?n:[]).filter((function(n){return n.name.toLowerCase().includes(d)||n.alias.filter((function(n){return n.toLowerCase().includes(d)})).length})))}),[d,t]),Object(r.jsx)(k,{children:Object(r.jsxs)(g,{children:[Object(r.jsxs)(vn,{children:[Object(r.jsx)(On,{placeholder:"Looking for something ?",onChange:function(n){return x(n.target.value.toLowerCase())}}),a.map((function(n){return Object(r.jsx)(bn,{children:n.name},n.name)}))]}),Object(r.jsx)(S,{pages:null!==(e=null===t||void 0===t?void 0:t.pages)&&void 0!==e?e:[]})]})})};function wn(){var n=Object(h.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  background: linear-gradient(35deg, #000000, #16222a, #102245);\n  background-size: 300vw;\n  animation: gradient 50s ease infinite;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n"]);return wn=function(){return n},n}var kn=O.a.div(wn()),yn=function(){var n=Object(m.h)();return Object(c.useEffect)((function(){setTimeout((function(){return window.scrollTo(0,0)}),1e3)}),[n.pathname]),Object(r.jsx)(kn,{children:Object(r.jsxs)(m.d,{location:n,children:[Object(r.jsx)(m.b,{exact:!0,path:"/profile",component:pn}),Object(r.jsx)(m.b,{exact:!0,path:"/aboutMe",component:R}),Object(r.jsx)(m.b,{exact:!0,path:"/summary",component:gn}),Object(r.jsx)(m.b,{exact:!0,path:"/experiences",component:ln}),Object(r.jsx)(m.b,{exact:!0,path:"/contact",component:V}),Object(r.jsx)(m.b,{path:"/",children:Object(r.jsx)(m.a,{to:"/profile"})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(p,{children:Object(r.jsx)(yn,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.e3dcbe4d.chunk.js.map