(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,n){e.exports=n(57)},52:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=n(26),i=n(27),u=n(31),s=n(30),h=n(32),p=n.n(h),m=n(36),d=n(89),f=n(85),v=n(90),b=(n(52),Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}))),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={longUrl:"",shortUrl:""},e.handleChange=function(t){e.setState({longUrl:t.target.value})},e.handleSubmit=function(){var t=Object(m.a)(p.a.mark((function t(n){var a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("http://localhost:5000/api/url/shorten",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({longUrl:e.state.longUrl})});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,e.setState({shortUrl:r.shortUrl}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:b.root},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(d.a,{id:"outlined-textarea",placeholder:"Enter the URL",multilinevariant:"outlined",label:"URL",value:this.state.longUrl,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement(v.a,{variant:"contained",color:"primary",className:b.button,onClick:this.handleSubmit}," ","Submit"," ")," ")),r.a.createElement(d.a,{placeholder:"Short Url",value:this.state.shortUrl}))}}]),n}(a.Component),E=(n(56),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"url-space"},r.a.createElement("h1",null,"URL Shortener"),r.a.createElement(g,null))}}]),n}(a.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b004cb6f.chunk.js.map