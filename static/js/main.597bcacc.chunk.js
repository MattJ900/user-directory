(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(16),i=n.n(s),a=(n(22),n(7)),o=n(5),u=(n(23),n(17)),d=n.n(u),j=n(0);var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],b=i[1],l=Object(c.useState)(!0),O=Object(o.a)(l,2),f=O[0],h=O[1];return Object(c.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=10").then((function(e){r(e.data.results)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("input",{value:u,onChange:function(e){b(e.target.value)}}),n.filter((function(e){return e.name.first.includes(u)})).map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.dob.age}),Object(j.jsx)("td",{children:e.gender}),Object(j.jsx)("td",{children:e.email})]})})})),Object(j.jsx)("button",{onClick:function(){var e;e=f?Object(a.a)(n).sort((function(e,t){return e.dob.age-t.dob.age})):Object(a.a)(n).sort((function(e,t){return t.dob.age-e.dob.age})),h(!f),console.log(e),r(e)},children:"sortbyAge"})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),l()}},[[43,1,2]]]);
//# sourceMappingURL=main.597bcacc.chunk.js.map