import{_ as u,o as a,c as l,b as e,t as r,d as x,m as $,k as p,p as v,u as k,a as U,r as h,F as g,i as b,g as f}from"./entry-8983ec98.mjs";const L={props:["user"]},S=["src"];function B(n,i,t,c,o,d){const s=v;return a(),l("tr",null,[e("td",null,r(t.user.id),1),e("td",null,[e("img",{src:t.user.image.url_xs,width:"40",height:"40",alt:""},null,8,S)]),e("td",null,r(t.user.name),1),e("td",null,r(t.user.username),1),e("td",null,[x(s,{to:t.user.url},{default:$(()=>[p(r(t.user.url),1)]),_:1},8,["to"])]),e("td",null,r(n.$t("timeAgo",{date:t.user.created_at})),1)])}var N=u(L,[["render",B]]);const I={components:{UserItem:N},setup(){return{mainStore:k()}},data(){return{usersPaginate:null}},mounted(){U.get(`${this.mainStore.backendUrl}/api/admin/users`).then(n=>{this.usersPaginate=n.data})}},P=p(" users vistos por el admin "),V={border:"1"},w=e("tr",null,[e("td",null,[e("strong",null,"id")]),e("td",null,[e("strong",null,"perfil")]),e("td",null,[e("strong",null,"nombre")]),e("td",null,[e("strong",null,"nombre de usuario")]),e("td",null,[e("strong",null,"url")]),e("td",null,[e("strong",null,"fecha de creacion")])],-1),y=e("div",{class:"loading-container"},[e("div",{class:"loading-point"}),e("div",{class:"loading-point"}),e("div",{class:"loading-point"})],-1);function C(n,i,t,c,o,d){var _;const s=h("UserItem");return a(),l(g,null,[P,e("table",V,[w,(a(!0),l(g,null,b((_=o.usersPaginate)==null?void 0:_.data,m=>(a(),f(s,{key:m.username,user:m},null,8,["user"]))),128))]),y],64)}var F=u(I,[["render",C]]);const A={components:{UsersList:F}};function D(n,i,t,c,o,d){const s=h("UsersList");return a(),f(s)}var M=u(A,[["render",D]]);export{M as default};
