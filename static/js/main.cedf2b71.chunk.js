(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(18),l=c.n(r),o=(c(26),c(20)),i=c(6),j=c(8),d=c(2);c(27);function b(e){var t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)({}),o=Object(i.a)(l,2),j=o[0],d=o[1],b=Object(a.useState)(0),u=Object(i.a)(b,2),m=u[0],h=u[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),p=x[0],f=x[1],v=function(e){return Object(n.jsx)("option",{children:e.name})},y=function(t){for(var c=0;c<e.curency.length;c++)if(e.curency[c].name===t)return e.curency[c].valu};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"row form-inline",children:[Object(n.jsx)("div",{className:"col-md-6 ",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("span",{className:"form-text",children:"From: "}),Object(n.jsx)("span",{children:"To: "})]}),Object(n.jsxs)("div",{className:"col-md-8",children:[Object(n.jsxs)("select",{id:"fromSelect",className:"form-control",style:{width:"60%"},onChange:function(e){d({name:e.target.value,val:y(e.target.value)}),document.getElementById("fromSelect").className="form-control is-valid"},children:[Object(n.jsx)("option",{disabled:!0,selected:!0,children:"type"}),e.curency.map(v)]}),Object(n.jsxs)("select",{id:"toSelect",className:"form-control",style:{width:"60%"},onChange:function(e){r({name:e.target.value,val:y(e.target.value)}),document.getElementById("toSelect").className="form-control is-valid"},children:[Object(n.jsx)("option",{disabled:!0,selected:!0,children:"type"}),e.curency.map(v)]})]})]})}),Object(n.jsx)("div",{classname:"form-group col-md-6",children:Object(n.jsx)("input",{type:"number",id:"sumToEx",className:"form-control",placeholder:"Please enter number to exchange",onChange:function(e){e.target.value.length>0?f(!0):f(!1),h(e.target.value)}})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6"}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("button",{className:p?"btn btn-primary":"btn btn-primary disabled",onClick:function(){"type"===s.value?(alert("Please select type"),document.getElementById("toSelect").className="form-control is-invalid"):"type"===j.value?(alert("Please select type"),document.getElementById("fromSelect").className="form-control is-invalid"):e.doExchange(j,s,m)},children:"Start"})})]})]})}function u(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Exchange"})})}c(28);function m(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j.b,{to:"/update",children:Object(n.jsx)("button",{className:"btn btn-primary btn-lg",children:"Update"})}),Object(n.jsx)("a",{href:"http://facebook.com",target:"blank",children:Object(n.jsx)("button",{className:"btn btn-primary btn-lg",children:"share on facebook"})}),Object(n.jsx)("button",{className:"btn btn-primary btn-lg",onClick:function(){e.showHistory?e.setShowHistory({onlod:!0,afterUpdate:!1}):e.setShowHistory({onlod:!1,afterUpdate:!1})},children:"Toggle your exchange list"})]})}function h(e){var t=Object(a.useState)(),c=Object(i.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)(),o=Object(i.a)(l,2),d=o[0],b=o[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{class:"table table-sm table-hover",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Type"}),Object(n.jsx)("th",{scope:"col",children:"Value"})]})}),Object(n.jsx)("tbody",{children:e.curency.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.valu})]})}))})]})}),Object(n.jsxs)("div",{className:"row form-inline",children:[Object(n.jsx)("span",{children:"Type: "}),Object(n.jsx)("input",{type:"text",className:"form-control",onChange:function(e){r(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"New Value: "}),Object(n.jsx)("input",{type:"text",className:"form-control",onChange:function(e){b(e.target.value)}}),Object(n.jsx)("br",{})]}),Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Back"})}),Object(n.jsx)(j.b,{to:"/update",children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){e.addCur(s,d)},children:"Submit"})})]})}c(34);function O(e){return Object(n.jsx)("div",{children:e.exHistory.map((function(t,c){return Object(n.jsx)("div",{className:"container hisCon",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md 8",children:[Object(n.jsxs)("p",{children:["#",t.id]}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:t.desc}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:t.result})]}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(t){e.deleteHis(t,c)},children:"X"})})]})})}))})}c(35);var x=function(){var e=Object(a.useState)([{name:"dollar",valu:4},{name:"euro",valu:5},{name:"shekel",valu:1}]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([{id:1,desc:"from dollar to shekel",result:"1=4"}]),l=Object(i.a)(r,2),x=l[0],p=l[1],f=Object(a.useState)({onlod:!1,afterUpdate:!1}),v=Object(i.a)(f,2),y=v[0],g=v[1],N=function(e,t,c){var n=e.val/t.val;n*=c;var a="from "+e.name+" to "+t.name+".",s=e.val.toString()+"="+t.val.toString(),r={id:x.length+1,desc:a,result:s};p([].concat(Object(o.a)(x),[r])),alert("the exchange rate is: "+n)},S=function(e,t){for(var n={name:e,valu:t},a=c,r=!1,l=0;l<c.length;l++)if(n.name===c[l].name){a.splice(l,1,n),s(a),r=!0,alert("currency updated");break}r||(a.push(n),s(a),alert("currency added"))};return Object(n.jsx)("div",{className:"App container",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(b,{curency:c,exHistory:x,doExchange:N})}}),Object(n.jsx)(d.a,{exact:!0,path:"/update",component:function(){return Object(n.jsx)(h,{curency:c,addCur:S})}})]}),Object(n.jsx)(m,{setShowHistory:g,showHistory:y}),y.afterUpdate&&g({onlod:!0,afterUpdate:!1}),y.onlod?Object(n.jsx)(O,{exHistory:x,deleteHis:function(e,t){var c=x;c.splice(t,1),p(c),alert("delete completed succesfuly"),g({onlod:!1,afterUpdate:!0})}}):null]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.cedf2b71.chunk.js.map