(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{78:function(n,e,t){"use strict";t.r(e);var r=t(2),o=t(1),i=t.n(o),a=t(13),c=t.n(a),s=t(16),u=t(20),l=(t(49),t(25)),d=t.n(l),x=t(39),b=t(19),j=t(40),f=t.n(j),p=Object(o.createContext)(void 0),h=function(n){var e=Object(o.useState)(void 0),t=Object(b.a)(e,2),i=t[0],a=t[1];return Object(o.useEffect)((function(){Object(x.a)(d.a.mark((function n(){var e,t,r,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=new URLSearchParams(window.location.search),n.next=4,f.a.get("".concat("https://nv4re-resume.df.r.appspot.com","/resume.json?k=").concat(e.get("k")||""));case 4:t=n.sent,a(t.data),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response),(null===(r=n.t0.response)||void 0===r?void 0:r.data)?Object(u.b)("Cannot fetch data: ".concat(null===(o=n.t0.response)||void 0===o?void 0:o.data)):Object(u.b)("Ohhh, think my backend are down :(");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[]),Object(r.jsx)(p.Provider,{value:i,children:n.children})},m=t(3),g=(t(69),t(5)),O=t(4),v=t(41),w=t.n(v);function k(){var n=Object(m.a)(["\n  display: flex;\n\n  flex-flow: column nowrap;\n  align-items: center;\n\n  min-width: 210px;\n  max-width: 1024px;\n\n  background-color: #e8e8e8;\n  border-radius: 8px;\n  box-shadow: 3px 10px 27px -8px rgba(0, 0, 0, 0.9);\n  padding: 40px;\n  margin: 0 80px;\n\n  @media (max-width: 768px) {\n    box-sizing: border-box;\n    width: 100%;\n    margin: 32px 15px;\n  }\n"]);return k=function(){return n},n}var y=O.a.div(k()),C=function(n){return Object(r.jsx)(y,{children:n.loading?Object(r.jsx)(w.a,{size:120,color:"#456268"}):Object(r.jsx)(r.Fragment,{children:n.children})})};function z(){var n=Object(m.a)(["\n  display: flex;\n  width: 100vw;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n"]);return z=function(){return n},n}var M=O.a.div(z());function B(){var n=Object(m.a)(['\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #f6f6f6;\n  cursor: pointer;\n\n  font-family: "Nurom-Bold";\n\n  margin: 20px 0 0 0;\n  padding: 7px;\n  border-radius: 3px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n']);return B=function(){return n},n}var E,L=O.a.div(B()),N=t(15),S=t(12);!function(n){n.Mail="mail",n.Github="github.com",n.Gitlab="gitlab.com",n.Linkedin="linkedin.com",n.Medium="medium.com",n.Instagram="instagram.com",n.Home="home",n.Back="back",n.Profile="profile",n.AboutMe="aboutme",n.Summary="summary",n.Experiences="experiences",n.Contact="contact"}(E||(E={}));var _=function(n){switch(n.name){case E.Mail:return Object(r.jsx)(N.f,{});case E.Github:return Object(r.jsx)(N.a,{});case E.Gitlab:return Object(r.jsx)(N.b,{});case E.Linkedin:return Object(r.jsx)(N.e,{});case E.Medium:return Object(r.jsx)(S.e,{});case E.Instagram:return Object(r.jsx)(N.c,{});case E.Home:return Object(r.jsx)(S.d,{});case E.Profile:return Object(r.jsx)(S.h,{});case E.AboutMe:return Object(r.jsx)(S.c,{});case E.Back:return Object(r.jsx)(S.a,{});case E.Summary:return Object(r.jsx)(S.f,{});case E.Experiences:return Object(r.jsx)(S.g,{});case E.Contact:return Object(r.jsx)(S.b,{});default:return Object(r.jsx)(N.d,{})}};function P(){var n=Object(m.a)(["\n  display: flex;\n  flex: 1 0 100%;\n  width: 100%;\n  justify-content: space-between;\n"]);return P=function(){return n},n}var G=O.a.div(P()),H=function(n){var e=Object(g.g)(),t=e.location.pathname.split("/"),o=t[t.length-1],i=n.pages.indexOf(o),a=n.pages[(i-1)%n.pages.length]||"/",c=n.pages[(i+1)%n.pages.length]||"/";return Object(r.jsxs)(G,{children:[Object(r.jsx)(L,{className:"hvr-backward",onClick:function(){return e.push({pathname:a,search:window.location.search})},children:Object(r.jsx)(_,{name:a})}),Object(r.jsx)(L,{className:"hvr-forward",onClick:function(){return e.push({pathname:c,search:window.location.search})},children:Object(r.jsx)(_,{name:c})})]})};function A(){var n=Object(m.a)(["\n  font-size: 0.8em;\n  font-weight: 200;\n"]);return A=function(){return n},n}function I(){var n=Object(m.a)(['\n  font-family: "Nurom-Bold";\n  font-size: 1.2em;\n']);return I=function(){return n},n}function J(){var n=Object(m.a)(["\n  padding: 18px 0 4px 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  word-wrap: break-word;\n"]);return J=function(){return n},n}function R(){var n=Object(m.a)(['\n  font-family: "Nurom-Bold";\n  padding: 2px 0 4px 0;\n  margin: 0;\n  font-size: 2.2rem;\n  white-space: nowrap;\n']);return R=function(){return n},n}var T=O.a.p(R()),U=O.a.p(J()),W=O.a.span(I()),F=O.a.span(A());function K(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n"]);return K=function(){return n},n}var $=O.a.div(K()),q=function(){var n,e=Object(o.useContext)(p);return Object(r.jsx)(M,{children:Object(r.jsxs)(C,{loading:!e,children:[Object(r.jsx)(T,{children:"About me"}),Object(r.jsx)($,{children:null===e||void 0===e?void 0:e.about_me.map((function(n,e){return Object(r.jsxs)(U,{children:[0===e?Object(r.jsx)(W,{children:"Hi, "}):"",n]},e)}))}),Object(r.jsx)(H,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})};function D(){var n=Object(m.a)(["\n  padding: 0 0 0 7px;\n  margin: 0;\n  text-decoration: none;\n  text-align: center;\n  font-weight: 800;\n"]);return D=function(){return n},n}function Q(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #f6f6f6;\n  cursor: pointer;\n\n  box-sizing: border-box;\n  width: 100%;\n\n  padding: 10px;\n  margin: 6px 0;\n  border-radius: 8px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n"]);return Q=function(){return n},n}var V=O.a.div(Q()),X=O.a.p(D()),Y=function(n){return/mailto:/gi.test(n)?"mail":new URL(n).hostname},Z=function(n){return Object(r.jsxs)(V,{className:"hvr-float",onClick:function(){return window.open(n.link,"_blank","noopener noreferrer")},children:[Object(r.jsx)(_,{name:Y(n.link)})," ",Object(r.jsx)(X,{children:n.label})]})},nn=function(){var n,e=Object(o.useContext)(p);return Object(r.jsx)(M,{children:Object(r.jsxs)(C,{loading:!e,children:[null===e||void 0===e?void 0:e.contacts.map((function(n){return Object(r.jsx)(Z,{link:n.link,label:n.label},n.link)})),Object(r.jsx)(H,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})},en=t(43),tn=t(83);function rn(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  margin: 12px;\n"]);return rn=function(){return n},n}function on(){var n=Object(m.a)(["\n  border-radius: 5px;\n  height: 45px;\n  margin: 0 0 15px 0;\n  background-color: #fff;\n  border: solid #fff 10px;\n\n  @media (max-width: 768px) {\n    height: 80px;\n    border-width: 20px;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  color: #f6f6f6;\n\n  box-sizing: border-box;\n  width: 100%;\n\n  padding: 23px;\n  margin: 6px 0;\n  border-radius: 8px;\n  background-color: #1b262c;\n  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return an=function(){return n},n}var cn=O.a.div(an()),sn=O.a.img(on()),un=O.a.div(rn()),ln=function(n){return n?tn.a(n,"MMM/yyyy"):"now"},dn=function(n){return Object(r.jsxs)(cn,{children:[Object(r.jsx)(sn,{src:n.logo}),Object(r.jsxs)(un,{children:[Object(r.jsx)(W,{children:n.job_title}),Object(r.jsxs)(U,{children:[n.company_name," ",Object(r.jsxs)(F,{children:[ln(n.from)," \u2014 ",ln(n.to)]})]}),n.description]})]})};function xn(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n"]);return xn=function(){return n},n}var bn=O.a.div(xn()),jn=function(){var n,e=Object(o.useContext)(p);return Object(r.jsx)(M,{children:Object(r.jsxs)(C,{loading:!e,children:[Object(r.jsx)(T,{children:"Experiences"}),Object(r.jsx)(bn,{children:null===e||void 0===e?void 0:e.experiences.map((function(n,e){return Object(r.jsx)(dn,Object(en.a)({},n),e)}))}),Object(r.jsx)(H,{pages:null!==(n=null===e||void 0===e?void 0:e.pages)&&void 0!==n?n:[]})]})})};function fn(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0;\n\n  font-weight: 800;\n  color: #f4f4f2;\n  white-space: nowrap;\n\n  margin: 3px;\n  padding: 5px;\n  border-radius: 3px;\n  background-color: #1c2b2d;\n"]);return fn=function(){return n},n}var pn=O.a.div(fn());function hn(){var n=Object(m.a)(["\n  border-radius: 50%;\n  height: 8rem;\n  margin: 0 0 15px 0;\n"]);return hn=function(){return n},n}var mn=O.a.img(hn()),gn=function(){var n=Object(g.g)(),e=Object(o.useContext)(p);return Object(r.jsx)(M,{children:Object(r.jsxs)(C,{loading:!e,children:[Object(r.jsx)(mn,{src:null===e||void 0===e?void 0:e.profile.profile_img}),Object(r.jsxs)(W,{children:[null===e||void 0===e?void 0:e.profile.f_name," ",null===e||void 0===e?void 0:e.profile.l_name]}),Object(r.jsx)(pn,{children:null===e||void 0===e?void 0:e.profile.jd}),Object(r.jsx)(L,{className:"hvr-grow",onClick:function(){return n.push({pathname:"/aboutme",search:window.location.search})},children:"Know me better ?"})]})})};function On(){var n=Object(m.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n"]);return On=function(){return n},n}function vn(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  height: 28px;\n  width: 220px;\n  margin: 2px 2px;\n  padding: 0 8px;\n  text-align: center;\n  font-weight: 800;\n\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  background-color: inherit;\n  -webkit-appearance: none;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return vn=function(){return n},n}var wn=O.a.input(vn()),kn=O.a.div(On()),yn=function(){var n,e,t=Object(o.useContext)(p),i=Object(o.useState)(null!==(n=null===t||void 0===t?void 0:t.skills)&&void 0!==n?n:[]),a=Object(b.a)(i,2),c=a[0],s=a[1],u=Object(o.useState)(""),l=Object(b.a)(u,2),d=l[0],x=l[1];return Object(o.useEffect)((function(){var n;s((null!==(n=null===t||void 0===t?void 0:t.skills)&&void 0!==n?n:[]).filter((function(n){return n.name.toLowerCase().includes(d)||n.alias.filter((function(n){return n.toLowerCase().includes(d)})).length})))}),[d,t]),Object(r.jsx)(M,{children:Object(r.jsxs)(C,{loading:!t,children:[Object(r.jsxs)(kn,{children:[Object(r.jsx)(wn,{placeholder:"Enter some keyword",onChange:function(n){return x(n.target.value.toLowerCase())}}),c.map((function(n){return Object(r.jsx)(pn,{children:n.name},n.name)}))]}),Object(r.jsx)(H,{pages:null!==(e=null===t||void 0===t?void 0:t.pages)&&void 0!==e?e:[]})]})})};function Cn(){var n=Object(m.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  background: linear-gradient(35deg, #000000, #16222a, #102245);\n  background-size: 300vw;\n  animation: gradient 50s ease infinite;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n"]);return Cn=function(){return n},n}var zn=O.a.div(Cn()),Mn=function(){var n=Object(g.h)();return Object(o.useEffect)((function(){setTimeout((function(){return window.scrollTo(0,0)}),1e3)}),[n.pathname]),Object(r.jsx)(zn,{children:Object(r.jsxs)(g.d,{location:n,children:[Object(r.jsx)(g.b,{exact:!0,path:"/profile",component:gn}),Object(r.jsx)(g.b,{exact:!0,path:"/aboutMe",component:q}),Object(r.jsx)(g.b,{exact:!0,path:"/summary",component:yn}),Object(r.jsx)(g.b,{exact:!0,path:"/experiences",component:jn}),Object(r.jsx)(g.b,{exact:!0,path:"/contact",component:nn}),Object(r.jsx)(g.b,{path:"/",children:Object(r.jsx)(g.a,{to:"/profile".concat(window.location.search)})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(u.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0,pauseOnHover:!0,style:{color:"#1b262c"}}),Object(r.jsx)(Mn,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.edd4fee7.chunk.js.map