(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),i=t.n(r),s=(t(10),t(2)),d=t(3),u=(t(11),t(12),t(0));var o=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{onClick:function(){a||t(e)},className:"back",src:"./img/cover.png",alt:"card back"})]})})},j=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var l=function(){var c=Object(n.useState)([]),e=Object(d.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),i=Object(d.a)(r,2),l=i[0],m=i[1],b=Object(n.useState)(null),h=Object(d.a)(b,2),O=h[0],f=h[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(j,j).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));f(null),x(null),a(c),m(0)},C=function(c){O?x(c):f(c)};Object(n.useEffect)((function(){O&&v&&(M(!0),O.src===v.src?(a((function(c){return c.map((function(c){return c.src===O.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):Object(s.a)(Object(s.a)({},c),{},{matched:!1})}))})),y()):setTimeout((function(){return y()}),1e3))}),[O,v]);var y=function(){f(null),x(null),m((function(c){return c+1})),M(!1)};return Object(n.useEffect)((function(){w()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Match"}),Object(u.jsx)("button",{onClick:w,children:" New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(o,{card:c,handleChoice:C,disabled:S,flipped:c===O||c===v||c.matched},c.id)}))}),Object(u.jsxs)("p",{children:["Turns:",l]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2c976460.chunk.js.map