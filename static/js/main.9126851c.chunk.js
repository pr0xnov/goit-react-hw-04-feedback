(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={value:"Statistics_value__2sxVT"}},,,function(e,t,a){e.exports={buttonsList:"FeedbackOptions_buttonsList__MDG4a",button:"FeedbackOptions_button__3xthP"}},,,,,function(e,t,a){e.exports={title:"Section_title__I8Tlj"}},function(e,t,a){e.exports={message:"Notification_message__3Q0FI"}},function(e,t,a){e.exports={header:"App_header__2ruad",feedbackForm:"App_feedbackForm__2M2FR"}},,,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(6),r=a.n(i),o=(a(20),a(7)),d=a(8),l=a(9),b=a(14),j=a(13),u=a(10),h=a.n(u),x=function(e){var t=e.title,a=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:h.a.title,children:t}),a]})},O=a(4),v=a.n(O),f=a(5),p=a.n(f),k=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(c.jsx)("ul",{className:p.a.buttonsList,children:Object(c.jsx)("li",{children:t.map((function(e){return Object(c.jsx)("button",{type:"button",className:p.a.button,name:e,onClick:a,children:e},e)}))})})};k.protoTypes={options:v.a.object.isRequired,onLeaveFeedback:v.a.object.isRequired};var m=k,g=a(2),_=a.n(g),F=function(e){var t=e.good,a=e.neutral,n=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsx)("table",{className:_.a.resultsList,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Good:"}),Object(c.jsx)("td",{className:_.a.value,children:t})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Neutral:"}),Object(c.jsx)("td",{className:_.a.value,children:a})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Bad:"}),Object(c.jsx)("td",{className:_.a.value,children:n})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Total:"}),Object(c.jsx)("td",{className:_.a.value,children:s})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"PositiveFeedback:"}),Object(c.jsx)("td",{className:_.a.value,children:i})]})]})})},N=a(11),y=a.n(N),P=function(e){var t=e.message;return Object(c.jsx)("div",{className:y.a.message,children:t})},T=a(12),L=a.n(T),w=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback();if(e)return"".concat((this.state.good/e*100).toFixed(1),"%")}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:L.a.feedbackForm,children:[Object(c.jsx)(x,{title:"Please leave feedback:",children:Object(c.jsx)(m,{options:["good","neutral","bad"],onLeaveFeedback:this.handleClick})}),Object(c.jsx)(x,{title:"Statistics:",children:this.countTotalFeedback()?Object(c.jsx)(F,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(c.jsx)(P,{message:"No feedback given"})})]})})}}]),a}(n.Component);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9126851c.chunk.js.map