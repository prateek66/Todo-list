(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(8),a=c.n(o),i=(c(13),c(14),c(15),c(5)),r=c(7),l=c(4),u=c(0);var j=function(e){var t=e.todo,c=e.markComplete,n=e.removeTodo;return Object(u.jsx)("ul",{className:"list-group  m-5",children:t.map((function(e,t){return Object(u.jsx)("li",{className:" list-group-item text-start",children:Object(u.jsxs)("div",{className:" d-flex align-items-center",children:[e.completed?Object(u.jsx)(l.c,{size:"30",onClick:function(){return c(t)}}):Object(u.jsx)(l.b,{size:"30",onClick:function(){return c(t)}}),Object(u.jsx)("span",{className:"mx-3",children:e.task}),Object(u.jsxs)("button",{type:"button",className:"btn ms-auto",onClick:function(){return n(t)},children:[" ",Object(u.jsx)(l.a,{className:"",size:"30"})]})]})},t)}))})};var d=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)(""),a=Object(r.a)(o,2),l=a[0],d=a[1],b=Object(n.useRef)(null);return Object(n.useEffect)((function(){b.current.focus()})),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo"));s(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todo",JSON.stringify(c))}),[c]),Object(u.jsx)("div",{className:"container ",children:Object(u.jsxs)("div",{className:"card m-auto vh-100 shadow-lg p-3 m-5 bg-white rounded",children:[Object(u.jsx)("h1",{children:"Todo App"}),Object(u.jsx)("form",{onSubmit:function(e){var t;e.preventDefault(),(t=l)&&!/^\s*$/.test(t)&&(c.push({task:t,completed:!1}),s(Object(i.a)(c))),d("")},children:Object(u.jsxs)("div",{className:"d-flex  align-items-center",children:[Object(u.jsx)("div",{className:"input-group my-4 mr-3 ",children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"ADD YOUR TODO FOR THE DAY...",name:"todo",value:l,onChange:function(e){d(e.target.value)},ref:b})}),Object(u.jsx)("div",{className:"m-3",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-danger ml-3",children:"Add"})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("button",{type:"submit",onClick:function(){s([])},className:"btn btn-warning ml-3",children:"Reset"})})]})}),Object(u.jsx)(j,{todo:c,markComplete:function(e){c[e].completed=!c[e].completed,s(Object(i.a)(c))},removeTodo:function(e){c.splice(e,1),s(Object(i.a)(c))}})]})})};var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.5246e47b.chunk.js.map