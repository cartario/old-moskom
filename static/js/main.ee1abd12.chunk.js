(this.webpackJsonpmoskom=this.webpackJsonpmoskom||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(9),o=t.n(r),c=(t(24),t(25),t(8)),s=t(41),m=t(44),i=t(42),u=t(43),d=t(10),h=t(12),E=t(37),g=t(38),b=t(39),f=t(40),p=function(e,a){switch(!0){case e&&a:return"green";case!e&&a:return"red";default:return""}},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c"),l.a.createElement("ul",{style:{listStyle:"none",padding:0}},l.a.createElement("li",null,"\u041e\u0442 6 \u0434\u043e 32 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("li",null,"\u0426\u0438\u0444\u0440\u0443"),l.a.createElement("li",null,"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0438 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443")))},y=function(e){var a=e.setSubmitting,t=e.setModal,r=Object(n.useState)({email:"",name:"",password:"",checkPassword:""}),o=Object(c.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)(!1),y=Object(c.a)(u,2),k=y[0],v=y[1],O=Object(n.useState)(!1),j=Object(c.a)(O,2),C=j[0],S=j[1],B=Boolean(m.email.length)&&m.name.length&&m.password.length&&m.checkPassword.length,P=!!m.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),W=B&&P&&k,N=function(e){var a=e.target.name,t=e.target.value;i(Object(h.a)(Object(h.a)({},m),{},Object(d.a)({},a,t)))};return l.a.createElement(E.a,{onSubmit:function(e){e.preventDefault(),a(!0),t(!1),console.log(JSON.stringify(m))}},l.a.createElement(g.a,null,l.a.createElement(b.a,{style:{fontWeight:"bold"},for:"email"},"Email"),l.a.createElement(f.a,{style:{borderColor:p(P,C)},value:m.email,onFocus:function(){},onBlur:function(e){S(!0)},onChange:N,type:"email",name:"email",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail"}),C&&!P&&l.a.createElement("p",{style:{color:"red"}},"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 email")),l.a.createElement(g.a,null,l.a.createElement(b.a,{style:{fontWeight:"bold"},for:"name"},"\u041d\u0438\u043a\u043d\u0435\u0439\u043c"),l.a.createElement(f.a,{value:m.name,onChange:N,type:"text",name:"name",id:"name"})),l.a.createElement(g.a,null,l.a.createElement(b.a,{style:{fontWeight:"bold"},for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(f.a,{value:m.pass,onChange:N,type:"password",name:"password",id:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})),l.a.createElement(w,null),l.a.createElement(g.a,null,l.a.createElement(b.a,{style:{fontWeight:"bold"},for:"checkPassword"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),l.a.createElement(f.a,{value:m.checkPassword,onChange:N,type:"checkPassword",name:"checkPassword",id:"checkPassword",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043f\u0430\u0440\u043e\u043b\u044c"})),l.a.createElement(g.a,{check:!0},l.a.createElement(b.a,{check:!0},l.a.createElement(f.a,{value:k,onChange:function(){v(!k)},type:"checkbox",name:"conditions"})," ","\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f ",l.a.createElement("a",{href:"#"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(s.a,{disabled:!W,style:{backgroundColor:"#558CB7"}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},k=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],o=t[1],d=r?"green":"#558CB7",h=e.buttonLabel,E=e.className,g=Object(n.useState)(!0),b=Object(c.a)(g,2),f=b[0],p=b[1],w=function(){return p(!f)};return l.a.createElement("div",null,l.a.createElement(s.a,{style:{backgroundColor:d,borderColor:"#558CB7"},color:"danger",onClick:w,disabled:r},h),l.a.createElement(m.a,{isOpen:f,toggle:w,className:E},l.a.createElement(i.a,{style:{border:"none"},toggle:w},"\u0420\u0435\u0433\u0438\u0441\u0442\u0430\u0440\u0446\u0438\u044f"),l.a.createElement(u.a,null,l.a.createElement(y,{setSubmitting:o,setModal:p}))))};t(35);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,{buttonLabel:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",className:"registration"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee1abd12.chunk.js.map