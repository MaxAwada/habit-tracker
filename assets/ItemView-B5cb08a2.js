import{d as X,r,c as n,o as L,s as o,a as c,b as P,e as t,f as h,w as f,t as p,u as s,M as R,g as k,n as $,h as q,i as B,j as A,B as G,k as J,p as K,l as O,_ as Q}from"./index-B490NRi2.js";const i=d=>(K("data-v-f9e42a1e"),d=d(),O(),d),U=i(()=>t("i",{class:"fa-solid fa-arrow-left"},null,-1)),W={class:"btn-settings"},Z=i(()=>t("i",{class:"fa-solid fa-gear"},null,-1)),ee={class:"statistics"},te={class:"percent"},ae=i(()=>t("h3",null,"Процент выполнения",-1)),se={class:"progress-bar"},le={class:"counter"},ne=i(()=>t("h3",null,"Дата начала",-1)),oe={class:"counter"},de=i(()=>t("h3",null,"Дата окончания",-1)),ie=X({__name:"ItemView",props:{id:{}},setup(d){const m=q();let y=d,D=r([]),u=r([]),w=r(0),g=r(0),l=n(()=>D.value.find(e=>Number(e.id)===Number(y.id)));L(async()=>{v()});let v=async()=>{D.value=await o.getHabits(),u.value=await o.getHabitDaysByHabitId(Number(y.id))},C=async e=>{e&&(await o.updateHabit(e),await v())},M=async()=>{l.value&&(await o.deleteHabit(l.value.id),await m.push({name:"menu"}))},Y=n(()=>{var e;return c((e=l.value)==null?void 0:e.dateStart).format("DD.MM.YYYY")}),N=n(()=>{var e,a;return c((e=l.value)==null?void 0:e.dateStart).add(((a=l.value)==null?void 0:a.countDay)??0,"day").format("DD.MM.YYYY")}),S=n(()=>{if(l.value)return(u.value.length/l.value.countDay*100).toFixed(2)}),x=async e=>{if(l.value){let a=u.value.find(_=>String(_.date)===String(e.date));if(a)await o.deleteHabitDay(a.id);else{if(e.date>new Date||e.date<new Date(l.value.dateStart))return;await V(e.date)}}await v()},V=async e=>{if(!l.value)return;let a={habitId:l.value.id,date:e};await o.addHabitDay(a)},z=n(()=>[{highlight:{contentClass:"active"},dates:j.value}]),E=n(()=>{var e;return[{start:c().add(1,"day"),end:null},{start:null,end:c((e=l.value)==null?void 0:e.dateStart).subtract(1,"day")}]}),j=n(()=>u.value.map(e=>new Date(e.date))),H=e=>{w.value=Number(e.changedTouches[0].clientX)},I=e=>{g.value=Number(e.changedTouches[0].clientX),g.value-w.value>50&&m.push({name:"menu"})};return(e,a)=>{var T;const _=B("router-link"),F=B("VCalendar");return A(),P("div",{onTouchstart:a[2]||(a[2]=(...b)=>s(H)&&s(H)(...b)),onTouchend:a[3]||(a[3]=(...b)=>s(I)&&s(I)(...b))},[t("header",null,[h(_,{to:{name:"menu"}},{default:f(()=>[h(G,{type:s(J).Cancel,class:"btn-back"},{default:f(()=>[U]),_:1},8,["type"])]),_:1}),t("div",null,[t("h1",null,p((T=s(l))==null?void 0:T.title),1)]),t("div",W,[h(R,{name:"update",habit:s(l),onSave:s(C),onDelete:s(M)},{default:f(()=>[Z]),_:1},8,["habit","onSave","onDelete"])])]),h(F,{expanded:"",attributes:s(z),"disabled-dates":s(E),onDayclick:s(x),transparent:"",onTouchstart:a[0]||(a[0]=k(()=>{},["stop"])),onTouchend:a[1]||(a[1]=k(()=>{},["stop"])),borderless:""},null,8,["attributes","disabled-dates","onDayclick"]),t("div",ee,[t("div",te,[ae,t("h1",null,p(s(S))+"%",1),t("div",se,[t("div",{class:"progress",style:$(`width: ${s(S)}%`)},null,4)])]),t("div",le,[ne,t("h1",null,p(s(Y)),1)]),t("div",oe,[de,t("h1",null,p(s(N)),1)])])],32)}}}),re=Q(ie,[["__scopeId","data-v-f9e42a1e"]]);export{re as default};
