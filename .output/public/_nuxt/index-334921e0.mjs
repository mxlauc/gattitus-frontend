import{_ as c}from"./UserToFollowItem-d189bb22.mjs";import{_ as l,u as h,a as f,o as s,c as o,b as t,F as i,i as x,d,r as $,l as v}from"./entry-50524dae.mjs";import"./ImagePreloader-634f2187.mjs";const U={components:{UserToFollowItem:c},setup(){return{mainStore:h()}},data(){return{users:null}},mounted(){f.get(`${this.mainStore.backendUrl}/api/users`).then(e=>{this.users=e.data.data})}},g=t("input",{type:"text",class:"w-100 form-control my-4",placeholder:"Buscar usuario"},null,-1),w={class:"row g-3 mx-0"},y={class:"card shadow-sm",style:{height:"100%"}},k={class:"card-body"};function B(e,_,u,m,r,p){const n=c;return s(),o("div",null,[g,t("div",w,[(s(!0),o(i,null,x(r.users,a=>(s(),o("div",{class:"col-12 col-sm-6 col-lg-4",key:a.id},[t("div",y,[t("div",k,[d(n,{user:a},null,8,["user"])])])]))),128))])])}var C=l(U,[["render",B]]);const F={components:{UsersComponent:C}},S=v(" lista de usuarios xd ");function b(e,_,u,m,r,p){const n=$("UsersComponent");return s(),o(i,null,[S,d(n)],64)}var I=l(F,[["render",b]]);export{I as default};