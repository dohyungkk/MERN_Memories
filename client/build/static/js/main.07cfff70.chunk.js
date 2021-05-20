(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a(9),i=a.n(c),s=a(49),o=a(157),l=a(158),u=a(152),d=a(161),p=a(156),j=a(17),b=a(18),f=a.n(b),m=a(35),x="CREATE",h="UPDATE",O="DELETE",g="FETCH_ALL",v=a(36),y=a.n(v),C="http://localhost:5000/posts",w=function(e,t){return y.a.patch("".concat(C,"/").concat(e),t)},k=function(e){return y.a.delete("".concat(C,"/").concat(e))},N=function(e){return y.a.patch("".concat(C,"/").concat(e,"/likePost"))},I=a(146),E=Object(I.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),S=a(149),D=a(151),_=a(160),z=a(153),T=a(154),W=a(75),A=a.n(W),B=a(76),F=a.n(B),L=a(74),M=a.n(L),R=a(73),H=a.n(R),J=function(e){var t=e.post,a=e.setCurrentId,r=E(),c=Object(j.b)();return Object(n.jsxs)(S.a,{className:r.card,children:[Object(n.jsx)(D.a,{className:r.media,image:t.selectedFile,title:t.title}),Object(n.jsxs)("div",{className:r.overlay,children:[Object(n.jsx)(u.a,{variant:"h6",children:t.creator}),Object(n.jsx)(u.a,{variant:"body2",children:H()(t.createdAt).fromNow()})]}),Object(n.jsx)("div",{className:r.overlay2,children:Object(n.jsx)(_.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(n.jsx)(M.a,{fontSize:"default"})})}),Object(n.jsx)("div",{className:r.details,children:Object(n.jsx)(u.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(n.jsx)(u.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(n.jsx)(z.a,{children:Object(n.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:t.message})}),Object(n.jsxs)(T.a,{className:r.cardActions,children:[Object(n.jsxs)(_.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(m.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(n.jsx)(A.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(n.jsxs)(_.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:a({type:O,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(n.jsx)(F.a,{fontSize:"small"}),"Delete"]})]})]})},P=Object(I.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),K=a(155),U=function(e){var t=e.setCurrentId,a=P(),r=Object(j.c)((function(e){return e.posts}));return console.log(r),r.length?Object(n.jsx)(p.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:r.map((function(e){return Object(n.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(J,{post:e,setCurrentId:t})},e._id)}))}):Object(n.jsx)(K.a,{})},V=a(19),q=a(81),G=a(159),Q=a(77),X=a.n(Q),Y=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Z=function(e){var t=e.currentId,a=e.setCurrentId,c=Y(),i=Object(j.b)(),o=Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),l=Object(s.a)(o,2),d=l[0],p=l[1],b=Object(j.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null}));Object(r.useEffect)((function(){b&&p(b)}),[b]);var O=function(){a(null),p({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(n.jsx)(q.a,{className:c.paper,children:Object(n.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(c.root," ").concat(c.form),onSubmit:function(e){e.preventDefault(),i(t?function(e,t){return function(){var a=Object(m.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w(e,t);case 3:r=a.sent,c=r.data,n({type:h,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,d):function(e){return function(){var t=Object(m.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,y.a.post(C,c);case 3:n=t.sent,r=n.data,a({type:x,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(d)),O()},children:[Object(n.jsxs)(u.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(n.jsx)(G.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:d.creator,onChange:function(e){return p(Object(V.a)(Object(V.a)({},d),{},{creator:e.target.value}))}}),Object(n.jsx)(G.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:d.title,onChange:function(e){return p(Object(V.a)(Object(V.a)({},d),{},{title:e.target.value}))}}),Object(n.jsx)(G.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:d.message,onChange:function(e){return p(Object(V.a)(Object(V.a)({},d),{},{message:e.target.value}))}}),Object(n.jsx)(G.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:d.tags,onChange:function(e){return p(Object(V.a)(Object(V.a)({},d),{},{tags:e.target.value.split(",")}))}}),Object(n.jsx)("div",{className:c.fileInput,children:Object(n.jsx)(X.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return p(Object(V.a)(Object(V.a)({},d),{},{selectedFile:t}))}})}),Object(n.jsx)(_.a,{className:c.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(n.jsx)(_.a,{variant:"contained",color:"secondary",size:"small",onClick:O,fullWidth:!0,children:"Clear"})]})})},$=a.p+"static/media/memories.9cfa8a46.png",ee=a(48),te=Object(I.a)((function(e){return Object(ee.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),ae=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=te(),b=Object(j.b)();return Object(r.useEffect)((function(){b(function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(C);case 3:a=e.sent,n=a.data,t({type:g,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,b]),Object(n.jsxs)(o.a,{maxWidth:"lg",children:[Object(n.jsxs)(l.a,{className:i.appBar,position:"static",color:"inherit",children:[Object(n.jsx)(u.a,{className:i.heading,variant:"h2",align:"center",children:"Memories"}),Object(n.jsx)("img",{className:i.image,src:$,alt:"memories",height:"60"})]}),Object(n.jsx)(d.a,{in:!0,children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(p.a,{className:i.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(n.jsx)(p.a,{item:!0,xs:12,sm:7,children:Object(n.jsx)(U,{setCurrentId:c})}),Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(Z,{currentId:a,setCurrentId:c})})]})})})]})},ne=a(22),re=a(78),ce=a(79),ie=Object(ne.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e.filter((function(e){return e._id!==t.payload}));case h:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case g:return t.payload;case x:return[].concat(Object(ce.a)(e),[t.payload]);default:return e}}}),se=(a(116),Object(ne.e)(ie,Object(ne.d)(Object(ne.a)(re.a))));i.a.render(Object(n.jsx)(j.a,{store:se,children:Object(n.jsx)(ae,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.07cfff70.chunk.js.map