(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(4),o=t.n(i),c=(t(22),t(5)),l=t(14),u=t(7),d=t(15),s=t(16);var f=t(2),p=t(3);function m(){var e=Object(f.a)(["\n  width: 10px;\n"]);return m=function(){return e},e}function v(){var e=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 0;\n  cursor: pointer;\n"]);return v=function(){return e},e}function b(){var e=Object(f.a)(["\n  display: flex;\n  padding: 20px 0 0;\n"]);return b=function(){return e},e}function g(){var e=Object(f.a)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n\n  input {\n    margin-left: 8px;\n    padding: 5px 10px;\n    font-size: 16px;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(f.a)(["\n  cursor: pointer;\n  background: #333;\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n"]);return x=function(){return e},e}function h(){var e=Object(f.a)(["\n  background: ",";\n  color: white;\n  padding: 10px 20px;\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]);return h=function(){return e},e}function E(){var e=Object(f.a)(["\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n"]);return E=function(){return e},e}function w(){var e=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0,0,0,0.3);\n  z-index: 99999;\n  overflow: hidden;\n"]);return w=function(){return e},e}var O=p.a.div(w()),y=p.a.div(E()),j=p.a.div(h(),"#2c3e50"),k=p.a.div(x()),S=p.a.div(g()),D=p.a.div(b()),C=p.a.button(v(),(function(e){return e.isOk?"#2c3e50":"#dedede"}),(function(e){return e.isOk?"white":"#333"})),G=p.a.div(m());var I=function(e){var n=e.dialogEventData,t=e.setDialogEventData,i=e.portal,l=void 0===i?"#dialog":i,u=Object(r.useState)(""),d=Object(c.a)(u,2),s=d[0],f=d[1];function p(){t({selection:null,show:!1})}function m(){var e=n.selection,t=e.view.calendar;t.unselect(),s&&(t.addEvent({id:Math.random(),title:s,start:e.startStr,end:e.endStr,allDay:e.allDay}),p())}return Object(r.useEffect)((function(){document.querySelector("input").focus()}),[]),o.a.createPortal(a.a.createElement(O,null,a.a.createElement(y,null,a.a.createElement(j,null,"Ajouter un nouveau temps pass\xe9",a.a.createElement(k,{onClick:p},"\u2718")),a.a.createElement(S,null,a.a.createElement("label",null,"Titre :",a.a.createElement("input",{type:"text",value:s,onKeyPress:function(e){"Enter"===e.key&&m()},onChange:function(e){return f(e.target.value)}})),a.a.createElement(D,null,a.a.createElement(C,{onClick:p},"Annuler"),a.a.createElement(G,null),a.a.createElement(C,{isOk:!0,onClick:m},"Ok"))))),document.querySelector(l))};var J=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"(min-width: 600px)",n=Object(r.useState)((function(){return window.matchMedia(e).matches})),t=Object(c.a)(n,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){var n=!0,t=window.matchMedia(e),r=function(){n&&i(!!t.matches)};return t.addListener(r),i(t.matches),function(){n=!1,t.removeListener(r)}}),[e]),a}(),n=Object(r.useState)({selection:null,show:!1}),t=Object(c.a)(n,2),i=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,i.show&&a.a.createElement(I,{dialogEventData:i,setDialogEventData:o}),a.a.createElement(l.a,{plugins:[u.b,s.a,d.a],locale:"fr",initialView:e?"timeGridWeek":"timeGridDay",initialEvents:JSON.parse(localStorage.getItem("events"))||[],headerToolbar:{left:"prev,next",center:"title",right:"timeGridWeek,timeGridDay"},selectable:!0,editable:!0,select:function(e){o({selection:e,show:!0})},eventClick:function(e){window.confirm('Voulez-vous supprimer le temps "'.concat(e.event.title,'" ?'))&&e.event.remove()},eventContent:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("i",null,e.timeText),a.a.createElement("b",{style:{marginLeft:5}},e.event.title))},eventsSet:function(e){localStorage.setItem("events",JSON.stringify(e))},longPressDelay:250,slotDuration:{minutes:15},slotLabelInterval:{hours:1},scrollTime:{hours:8}}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d577fbf1.chunk.js.map