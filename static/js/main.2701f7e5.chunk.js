(this["webpackJsonpra-hw.-04-forms.-1-hex2rgb.-2-steps.-3-photo"]=this["webpackJsonpra-hw.-04-forms.-1-hex2rgb.-2-steps.-3-photo"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(11),r=s.n(n),l=(s(17),s(2));s(18);function i(e){var t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5),16);return"rgb(".concat(t,", ").concat(s,", ").concat(a,")")}var d=s(0),o=/#[\dabcdef]{6}/;var j=function(){var e=Object(a.useState)("#34495e"),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(i(s)),r=Object(l.a)(n,2),j=r[0],u=r[1],m=Object(a.useState)(i(s)),_=Object(l.a)(m,2),h=_[0],b=_[1],O={backgroundColor:h};return Object(d.jsx)("div",{className:"hex2rgb _max-height__body",children:Object(d.jsx)("div",{className:"hex2rgb__body hex2rgb__body",style:O,children:Object(d.jsxs)("div",{className:"hex2rgb__content",children:[Object(d.jsx)("div",{className:"hex2rgb__input-wrap",children:Object(d.jsx)("input",{className:"hex2rgb__input",value:s,onChange:function(e){var t=e.target.value;if(!(t.length>7)&&(c(t),u(""),!(t.length<7)))if(o.test(t.toLowerCase())){var s=i(t);u(s),b(s)}else u("\u041e\u0448\u0438\u0431\u043a\u0430!")}})}),Object(d.jsx)("div",{className:"hex2rgb__result-wrap",children:Object(d.jsx)("div",{className:"hex2rgb__result",children:j})})]})})})},u=s(3),m=(s(20),s(7)),_=s(5),h=(s(21),s(8)),b=/^\d{2}\.\d{2}\.\d{4}$/,O=/^\d+\.?\d*$/;var p=function(e){var t=e.form,s=e.setForm,a=e.addResult,c=function(e){var t=e.target,a=t.name,c=t.value;s((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(m.a)({},a,c))}))};return Object(d.jsxs)("form",{className:"steps__form form-steps steps-columns steps-columns_bottom",onSubmit:function(e){e.preventDefault(),b.test(t.date)&&O.test(t.distance)&&(a(Object(_.a)(Object(_.a)({},t),{},{id:Object(h.a)()})),s({date:"",distance:""}))},children:[Object(d.jsxs)("div",{className:"steps-columns__column-1",children:[Object(d.jsx)("label",{className:"from-steps__label",htmlFor:"input-date",children:"\u0414\u0430\u0442\u0430"}),Object(d.jsx)("input",{className:"from-steps__input",id:"input-date",name:"date",value:t.date,onChange:c,placeholder:"\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"})]}),Object(d.jsxs)("div",{className:"steps-columns__column-2",children:[Object(d.jsx)("label",{className:"from-steps__label",htmlFor:"input-distance",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(d.jsx)("input",{className:"from-steps__input",id:"input-distance",name:"distance",value:t.distance,onChange:c,placeholder:"xx.xx"})]}),Object(d.jsx)("div",{className:"steps-columns__column-3 form-steps__column-3",children:Object(d.jsx)("button",{className:"from-steps__btn",children:"OK"})})]})};s(22);var x=function(e){var t=e.results,s=e.handleRemove,a=e.handleEdit;return Object(d.jsx)("ul",{className:"results-steps__list",children:t.map((function(e){return Object(d.jsxs)("li",{className:"steps-columns",children:[Object(d.jsx)("div",{className:"steps-columns__column-1",children:e.date}),Object(d.jsx)("div",{className:"steps-columns__column-2",children:e.distance}),Object(d.jsxs)("div",{className:"steps-columns__column-3 results-steps__actions",children:[Object(d.jsx)("button",{className:"results-steps__btn results-steps__btn-edit",onClick:function(){return a(e)},children:Object(d.jsx)("span",{className:"_visually-hidden",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(d.jsx)("button",{className:"results-steps__btn results-steps__btn-remove",onClick:function(){return s(e.date)},children:Object(d.jsx)("span",{className:"_visually-hidden",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]},e.date)}))})};function v(e){var t=e.slice(6),s=e.slice(3,5),a=e.slice(0,2);return"".concat(t,"-").concat(s,"-").concat(a)}var f=function(){var e=Object(a.useState)([{date:"12.10.2021",distance:"5"}]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)({date:"",distance:""}),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(!1),m=Object(l.a)(j,2),_=m[0],h=m[1];return Object(d.jsxs)("div",{className:"steps",children:[Object(d.jsx)(p,{form:i,setForm:o,addResult:function(e){_&&h(!1),s.some((function(t){return t.date===e.date}))?c((function(t){return t.map((function(t){return t.date===e.date?_?e:{date:t.date,distance:parseFloat(t.distance)+parseFloat(e.distance)}:t}))})):c((function(t){return[].concat(Object(u.a)(t),[e]).sort((function(e,t){return Date.parse(v(e.date))<Date.parse(v(t.date))?1:-1}))}))}}),0===s.length?null:Object(d.jsxs)("div",{className:"steps__results results-steps",children:[Object(d.jsxs)("header",{className:"results-steps__header steps-columns",children:[Object(d.jsx)("div",{className:"steps-columns__column-1",children:"\u0414\u0430\u0442\u0430"}),Object(d.jsx)("div",{className:"steps-columns__column-2",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(d.jsx)("div",{className:"steps-columns__column-3",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(d.jsx)(x,{results:s,handleRemove:function(e){c(s.filter((function(t){return t.date!==e})))},handleEdit:function(e){o(e),h(!0)}})]})]})},N=s(10),g=s.n(N),k=s(12);s(24);function y(e){return new Promise((function(t,s){var a=new FileReader;a.addEventListener("load",(function(s){t({id:Object(h.a)(),dataUrl:s.currentTarget.result,title:e.name})})),a.addEventListener("error",(function(e){s(new Error(e.currentTarget.error))})),a.readAsDataURL(e)}))}var w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useRef)(),r=function(){var e=Object(k.a)(g.a.mark((function e(t){var s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(u.a)(t.target.files),e.next=3,Promise.all(s.map((function(e){return y(e)})));case 3:a=e.sent,c((function(e){return[].concat(Object(u.a)(a),Object(u.a)(e))})),n.current.value="";case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"photo",children:[Object(d.jsx)("form",{className:"photo-form",children:Object(d.jsxs)("div",{className:"photo-drop-area",children:[Object(d.jsx)("input",{className:"photo-drop-area__item photo-drop-area__input",type:"file",onChange:r,ref:n,multiple:!0}),Object(d.jsx)("span",{className:"photo-drop-area__item photo-drop-area__text",children:"Click to select"})]})}),Object(d.jsx)("div",{className:"photo-gallery",children:s.map((function(e){return Object(d.jsxs)("div",{className:"photo-gallery__item",children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{className:"photo-gallery__img",src:e.dataUrl,alt:e.title}),Object(d.jsx)("figcaption",{className:"photo-gallery__img-title",children:e.title})]}),Object(d.jsx)("button",{className:"photo-gallery__btn-remove",onClick:function(){return t=e,void c(s.filter((function(e){return e.id!==t.id})));var t},children:Object(d.jsx)("span",{className:"_visually-hidden",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e.id)}))})]})};function C(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("div",{className:"main__item _max-height _container",id:"task1",children:[Object(d.jsx)("header",{className:"header",id:"header",children:Object(d.jsx)("div",{className:"header__body _container",children:Object(d.jsx)("div",{className:"header__title",children:"4. \u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u043a \u043b\u0435\u043a\u0446\u0438\u0438 \xab\u0424\u043e\u0440\u043c\u044b\xbb"})})}),Object(d.jsxs)("div",{className:"task _max-height__body _max-height",children:[Object(d.jsxs)("header",{className:"task__header",children:[Object(d.jsx)("div",{className:"task__title",children:"4.1. \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0446\u0432\u0435\u0442\u043e\u0432"}),Object(d.jsx)("nav",{className:"task__menu menu",children:Object(d.jsx)("div",{className:"menu__item",children:Object(d.jsx)("a",{className:"menu__link menu__link-bottom",href:"#task2",children:Object(d.jsx)("span",{className:"_visually-hidden",children:"next task"})})})})]}),Object(d.jsx)("div",{className:"task__body _max-height__body _max-height",children:Object(d.jsx)(j,{})})]})]}),Object(d.jsxs)("div",{className:"main__item task _container",id:"task2",children:[Object(d.jsxs)("header",{className:"task__header",children:[Object(d.jsx)("div",{className:"task__title",children:"4.2. \u0423\u0447\u0451\u0442 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"}),Object(d.jsxs)("nav",{className:"task__menu menu",children:[Object(d.jsx)("div",{className:"menu__item",children:Object(d.jsx)("a",{className:"menu__link menu__link-top",href:"#header",children:Object(d.jsx)("span",{className:"_visually-hidden",children:"previous task"})})}),Object(d.jsx)("div",{className:"menu__item",children:Object(d.jsx)("a",{className:"menu__link menu__link-bottom",href:"#task3",children:Object(d.jsx)("span",{className:"_visually-hidden",children:"next task"})})})]})]}),Object(d.jsx)("div",{className:"task__body",children:Object(d.jsx)(f,{})})]}),Object(d.jsxs)("div",{className:"main__item task _container",id:"task3",children:[Object(d.jsxs)("header",{className:"task__header",children:[Object(d.jsx)("div",{className:"task__title",children:"4.3. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u043e\u0442\u043e*"}),Object(d.jsx)("nav",{className:"task__menu menu",children:Object(d.jsx)("div",{className:"menu__item",children:Object(d.jsx)("a",{className:"menu__link menu__link-top",href:"#task2",children:Object(d.jsx)("span",{className:"_visually-hidden",children:"previous task"})})})})]}),Object(d.jsx)("div",{className:"task__body",children:Object(d.jsx)(w,{})})]})]})})}r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.2701f7e5.chunk.js.map