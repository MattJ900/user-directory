(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),o=n(16),i=n.n(o),s=(n(22),n(7)),u=n(5),a=(n(23),n(17)),d=n.n(a),b=n(1);var j=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),a=i[0],j=i[1],l=Object(c.useState)(!0),f=Object(u.a)(l,2),O=f[0],g=f[1];return Object(c.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=10").then((function(t){r(t.data.results)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("input",{value:a,onChange:function(t){j(t.target.value)}}),n.filter((function(t){return t.name.first.includes(a)})).map((function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[null===t||void 0===t?void 0:t.name.first," ",t.dob.age]}),Object(b.jsx)("td",{children:"Hello World"})]})})})),Object(b.jsx)("button",{onClick:function(){var t;t=O?Object(s.a)(n).sort((function(t,e){return t.dob.age-e.dob.age})):Object(s.a)(n).sort((function(t,e){return e.dob.age-t.dob.age})),g(!O),console.log(t),r(t)},children:"sortbyAge"})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),l()}},[[43,1,2]]]);
//# sourceMappingURL=main.08d58116.chunk.js.map