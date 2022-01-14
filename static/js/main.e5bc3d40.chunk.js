(this.webpackJsonpcalculators=this.webpackJsonpcalculators||[]).push([[0],{50:function(t,e,n){},51:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var c,i,a,o,r,l,s,m,x,j,d,b,u,p,h=n(0),O=n.n(h),f=n(23),g=n.n(f),I=(n(50),n(51),n(52),n(28)),y=n(9),k=n(64),v=n(60),w=n(62),S=n(63),T=n(61),C=n(10),R=n(2),W=C.a.div(c||(c=Object(y.a)(["\n\twidth: 600px;\n\tborder: 7px solid #e2e2e2;\n\tmargin: 0 auto;\n\tmargin-top: 20px;\n\ttext-align: left;\n"]))),z=C.a.div(i||(i=Object(y.a)(["\n\tpadding: 0 20px;\n\tfont-family: Helvetica, Verdana, Arial, Sans-serif;\n"]))),F=Object(C.a)(k.a)(a||(a=Object(y.a)(["\n\ttext-align: left;\n\tpadding: 5px;\n"]))),P=Object(C.a)(k.a)(o||(o=Object(y.a)(["\n\ttext-align: right;\n\tpadding: 5px;\n"]))),A=Object(C.a)(v.a)(r||(r=Object(y.a)(["\n\tmargin: 0;\n\tcolor: #cccccc;\n"]))),H=C.a.div(l||(l=Object(y.a)(["\n\tpadding: 11px;\n"]))),L=function(){return Object(R.jsxs)(H,{children:[Object(R.jsx)("h2",{style:{fontSize:"18px",fontWeight:"bold",margin:0},children:"Income Tax"}),Object(R.jsx)("p",{style:{paddingTop:"11px",margin:0,fontSize:"13px"},children:"Please read important notes about the use of this calculator"})]})},N=C.a.div(s||(s=Object(y.a)(["\n\theight: 36px;\n\twidth: 100%;\n\tbackground-color: ",";\n\tcolor: white;\n\tborder-top-left-radius: 18px;\n  border-bottom-left-radius: 18px;\n\tdisplay: flex;\n\tfont-size: 13px;\n"])),(function(t){return t.color})),B=C.a.p(m||(m=Object(y.a)(["\n\tbackground-color: #1998A6;\n\twidth: 36px;\n\theight: 36px;\n\tborder-radius: 18px;\n\ttext-align: center;\n\tline-height: 36px;\n"]))),D=C.a.div(x||(x=Object(y.a)(["\n\tmargin: 25px 0 30px 15px;\n\tdisplay: flex;\n\tfont-size: 12px;\n\tfont-weight: bold;\n"]))),Y=C.a.input(j||(j=Object(y.a)(["\n\tpadding: 3px 7px;\n\tmargin-left: 10px;\n"]))),J=Object(C.a)(w.a)(d||(d=Object(y.a)(["\n\tbackground: -webkit-gradient(linear, left top, left bottom, from(#faca3b), to(#d8a819));\n\tcolor: white;\n\tfont-weight: bold;\n\tborder-radius: 5px;\n\tmargin-left: 15px;\n"]))),U=function(t){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(N,{color:"#727272",children:Object(R.jsxs)("h3",{style:{display:"flex",color:"white"},children:[Object(R.jsx)(B,{children:"1"}),Object(R.jsx)("p",{style:{lineHeight:"36px",marginLeft:"15px",fontWeight:"bold",fontSize:"13px"},children:"Your details"})]})}),Object(R.jsxs)(D,{children:[Object(R.jsxs)("p",{children:["Your annual income",Object(R.jsx)(Y,{value:t.taxInput,onChange:function(e){return t.inputChange(e.target.value)},onBlur:t.buttonClick})]}),Object(R.jsx)(J,{onClick:t.buttonClick,children:"Calculate"})]})]})},E=[{key:"1",minimumIncome:0,maximumIncome:18200,taxRate:0},{key:"2",minimumIncome:18201,maximumIncome:45e3,taxRate:19},{key:"3",minimumIncome:45001,maximumIncome:12e4,taxRate:32.5},{key:"4",minimumIncome:120001,maximumIncome:18e4,taxRate:37},{key:"5",minimumIncome:180001,maximumIncome:null,taxRate:45}],M=function(){return Object(R.jsxs)(z,{children:[Object(R.jsx)("h4",{style:{fontSize:"15px",fontWeight:"bold",marginTop:"20px"},children:"Current Tax Thresholds 2020-2021"}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(F,{span:16,children:Object(R.jsx)("span",{style:{fontWeight:"bold"},children:"Income Range"})}),Object(R.jsx)(P,{span:8,children:Object(R.jsx)("span",{style:{fontWeight:"bold"},children:"Tax Rate"})})]}),Object(R.jsx)(A,{}),E.map((function(t){var e="".concat(Z.format(t.minimumIncome)," - ").concat(t.maximumIncome?"".concat(Z.format(t.maximumIncome)):"+"),n="".concat(t.taxRate.toFixed(1),"%");return Object(R.jsxs)("div",{children:[Object(R.jsxs)(S.a,{children:[Object(R.jsx)(F,{span:16,children:e}),Object(R.jsx)(P,{span:8,children:n})]}),Object(R.jsx)(A,{})]},t.key)}))]})},V=C.a.div(b||(b=Object(y.a)(["\n\tbackground-color: ",";\n\tmargin-bottom: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tpadding: 10px;\n"])),(function(t){return t.color})),$=C.a.h4(u||(u=Object(y.a)(["\n\tfont-size: '14px';\n\tfont-weight: bold;\n\tcolor: #666666;\n\tmargin: 0;\n"]))),q=function(t){return Object(R.jsxs)(V,{color:"#eeeeee",style:{height:"85px"},children:[Object(R.jsx)($,{children:"Tax on income"}),Object(R.jsx)("p",{style:{fontSize:"36px",fontWeight:"bold",margin:0},children:t.tax})]})},G=C.a.p(p||(p=Object(y.a)(["\n\tfont-size: 25px;\n\tcolor: #777777;\n\tmargin: 0;\n\tfont-weight: bold;\n\n"]))),K=function(t){return Object(R.jsxs)(V,{color:"#dddddd",style:{height:"190px"},children:[Object(R.jsxs)("div",{children:[Object(R.jsx)($,{children:"Net income per annum"}),Object(R.jsx)(G,{children:t.netIncome})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)($,{children:"Net income per week"}),Object(R.jsx)(G,{children:t.incomePerWeek})]})]})},Q=function(t){return Object(R.jsxs)("div",{style:{marginTop:"10px",marginRight:"10px"},children:[Object(R.jsx)(q,{tax:t.totalTax}),Object(R.jsx)(K,{netIncome:t.netIncome,incomePerWeek:t.incomePerWeek})]})},X=function(){return Object(R.jsx)(N,{color:"#444444",children:Object(R.jsx)("h3",{style:{marginLeft:"15px",lineHeight:"36px",color:"white",fontWeight:"bold",fontSize:"13px"},children:"Your Result"})})},Z=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),_=function(){var t=O.a.useState(85e3),e=Object(I.a)(t,2),n=e[0],c=e[1],i=O.a.useState(n),a=Object(I.a)(i,2),o=a[0],r=a[1],l=O.a.useState(!1),s=Object(I.a)(l,2),m=s[0],x=s[1],j=function(){var t=o,e=0;return E.map((function(n){return n.maximumIncome&&t>n.maximumIncome?e+=(n.maximumIncome-n.minimumIncome+1)*(n.taxRate/100):t>n.minimumIncome&&(e+=(t-n.minimumIncome+1)*(n.taxRate/100)),null})),e};return Object(R.jsxs)(R.Fragment,{children:[m&&Object(R.jsx)(T.a,{message:"The number is too big!",type:"warning",showIcon:!0}),Object(R.jsxs)(W,{children:[Object(R.jsx)(L,{}),Object(R.jsx)(U,{taxInput:Z.format(n),inputChange:function(t){var e=t.replace("$","");(e=e.replace(",","")).length>7&&(x(!0),setTimeout((function(){return x(!1)}),3e3)),c(parseInt(e))},buttonClick:function(){r(n)}}),Object(R.jsx)(X,{}),Object(R.jsxs)(S.a,{gutter:24,children:[Object(R.jsx)(k.a,{span:14,children:Object(R.jsx)(M,{})}),Object(R.jsx)(k.a,{span:10,children:Object(R.jsx)(Q,{totalTax:Z.format(j()),netIncome:Z.format(o-j()),incomePerWeek:Z.format((o-j())/52)})})]})]})]})};var tt=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(_,{})})},et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};g.a.render(Object(R.jsx)(O.a.StrictMode,{children:Object(R.jsx)(tt,{})}),document.getElementById("root")),et()}},[[56,1,2]]]);
//# sourceMappingURL=main.e5bc3d40.chunk.js.map