(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n,i=a(8),r=a.n(i),c=a(6),s=a(2),o=a(7),l=a(1),u=(a(14),a(9)),d=a.n(u),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e})}))})},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];!function(e){e.UserAbsence="Please choose a user",e.TitleAbsence="Please enter a title"}(n||(n={}));var O=function(e){return f.find((function(t){return t.id===e}))||null},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:O(e.userId)})})),x=function(){var e=Object(l.useState)(p),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(l.useState)(""),o=Object(s.a)(r,2),u=o[0],d=o[1],j=Object(l.useState)(0),b=Object(s.a)(j,2),x=b[0],v=b[1],y=Object(l.useState)(!1),S=Object(s.a)(y,2),N=S[0],g=S[1],I=Object(l.useState)(!1),A=Object(s.a)(I,2),C=A[0],_=A[1],T=Math.max.apply(Math,Object(c.a)(a.map((function(e){return e.id}))));return Object(l.useEffect)((function(){d(""),v(0)}),[a.length]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),g(!u),_(!x),u&&x&&function(e,t,n){var r={id:n+1,title:e,completed:!1,userId:t,user:O(t)};i([].concat(Object(c.a)(a),[r]))}(u,x,T)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){var t=e.target.value.replace(/[^a-zA-Za-\u044fA-\u042f ]/g,"");d(t)}}),N&&!u&&Object(m.jsx)("span",{className:"error",children:n.TitleAbsence})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",value:x,onChange:function(e){return v(Number(e.target.value))},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),f.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&!x&&Object(m.jsx)("span",{className:"error",children:n.UserAbsence})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};r.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f443e558.chunk.js.map