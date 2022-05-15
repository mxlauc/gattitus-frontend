import{_ as k,u as v,a as A,r as w,o as i,c as p,b as e,h,t as C,d as _,m as y,F as I,i as L,g as x,x as R,e as E,w as T,f as j,s as F,v as O,p as U,k as S}from"./entry-7cdb7662.mjs";import{C as G,N as H,a as D,P as M,R as N}from"./NewComment-31f6fca6.mjs";import{I as B}from"./ImagePreloader-bf7b70f0.mjs";const W={components:{ComentarioComponent:G,NewComment:H},setup(){return{mainStore:v()}},data(){return{comentarios:null,comentariosPaginador:null}},props:["postId"],emits:["contadorActualizado"],mounted(){A.get(`${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`).then(o=>{this.$emit("contadorActualizado",o.data.meta.total),this.comentariosPaginador=o.data.links,this.comentarios=o.data.data}).catch(o=>{console.log(o)})},methods:{cargarMasComentarios(){A.get(this.comentariosPaginador.next).then(o=>{this.comentariosPaginador=o.data.links,this.comentarios=this.comentarios.concat(o.data.data)}).then(()=>{this.$refs.commentsDiv.scrollTop=0}).catch(o=>{console.log(o)})},onCommented(o){this.comentarios.unshift(o),window.setTimeout(()=>{this.$refs.commentsDiv.scrollTop=this.$refs.commentsDiv.scrollHeight},200)},contadorActualizado(o){this.$emit("contadorActualizado",o)},commentDeleted(o){const r=this.comentarios.findIndex(s=>s.id===o);this.comentarios.splice(r,1)},commentEdited(o){const r=this.comentarios.find(s=>s.id===o.id);r.description=o.description}},computed:{userLogged(){var o;return(o=this.mainStore)==null?void 0:o.userLogged}}},q={style:{height:"100%",display:"flex","flex-direction":"column"}},J={key:0,class:"my-0"},K={key:2,class:"my-0"},Q={style:{overflow:"hidden auto","scroll-behavior":"smooth","flex-grow":"1"},class:"ps-3 pe-0 custom-scroll",ref:"commentsDiv"};function X(o,r,s,t,c,n){var m;const a=w("comentario-component"),u=w("NewComment");return i(),p("div",null,[e("div",q,[(m=c.comentarios)!=null&&m.length?(i(),p("hr",J)):h("",!0),c.comentariosPaginador&&c.comentariosPaginador.next?(i(),p("a",{key:1,class:"d-block text-muted text-center py-2 fw-bold",style:{"font-size":"12px","text-decoration":"none"},role:"button",onClick:r[0]||(r[0]=(...d)=>n.cargarMasComentarios&&n.cargarMasComentarios(...d))},C(o.$t("previousComments")),1)):h("",!0),c.comentariosPaginador&&c.comentariosPaginador.next?(i(),p("hr",K)):h("",!0),e("div",Q,[_(R,{name:"grupo-comentarios"},{default:y(()=>{var d;return[(i(!0),p(I,null,L((d=c.comentarios)==null?void 0:d.slice().reverse(),l=>(i(),x(a,{"post-id":s.postId,key:l.id,comentario:l,onCommentDeleted:n.commentDeleted,onContadorActualizado:n.contadorActualizado,onCommentEdited:n.commentEdited},null,8,["post-id","comentario","onCommentDeleted","onContadorActualizado","onCommentEdited"]))),128))]}),_:1})],512),_(u,{class:"mx-3","post-id":s.postId,onCommented:n.onCommented,onContadorActualizado:n.contadorActualizado},null,8,["post-id","onCommented","onContadorActualizado"])])])}var V=k(W,[["render",X],["__scopeId","data-v-62359c64"]]);const Y={components:{SeccionComentariosComponent:V,ImagePreloader:B,PetIconList:D,PostMenu:M,ReactAndCommentButtons:N},data(){return{}},methods:{contadorActualizado(o){this.comments_count=o},back(){this.$router.replace("/")},react(o){this.my_reaction=o.own_reaction,this.reactions_count=o.reactions_count}}},Z=Object.assign(Y,{async setup(o,{expose:r}){r();let s,t;const c=v(),n=E();let a=null,u=null,m=null,d=null;const l=([s,t]=T(()=>j(`${c.backendUrl}/api/posts/${n.params.id}`)),s=await s,t(),s);a=l.data,u=a.my_reaction,m=a.reactions_count,d=a.comments_count;const g={mainStore:c,route:n,post:a,my_reaction:u,reactions_count:m,comments_count:d,result:l,SeccionComentariosComponent:V,ImagePreloader:B,PetIconList:D,PostMenu:M,ReactAndCommentButtons:N,useMainStore:v};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),$=o=>(F("data-v-5c070739"),o=o(),O(),o),oo={class:"row"},to={class:"col-7"},eo={class:"col-5"},no={class:"card shadow-sm",style:{height:"calc(100vh - 120px)"}},so={class:"card-body p-0 container-x"},ao={class:"row g-0 p-3 pb-0"},co={class:"col-auto"},io={class:"col px-2"},ro={class:"d-block text-black-50 fs-6",role:"button"},mo={class:"col-auto"},lo=$(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32.055 32.055",width:"20",height:"20",class:"text-black-50",fill:"currentColor","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("path",{d:`M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z`})],-1)),_o={class:"fs-6 mt-1 mb-1 mx-3 text-muted"};function uo(o,r,s,t,c,n){var u,m,d,l,g,b,P,z;const a=U;return i(),p("div",oo,[e("div",to,[_(t.ImagePreloader,{aspect:(u=t.post)==null?void 0:u.simple_post.aspect_ratio,image:(m=t.post)==null?void 0:m.simple_post.image,option:"url_xl","object-fit":"contain",style:{width:"100%",height:"600px",display:"block"},class:"rounded-5 w-100 shadow-sm"},null,8,["aspect","image"])]),e("div",eo,[e("div",no,[e("div",so,[e("div",ao,[e("div",co,[_(a,{to:"/@"+((d=t.post)==null?void 0:d.user.username)},{default:y(()=>{var f;return[_(t.ImagePreloader,{image:(f=t.post)==null?void 0:f.user.image,class:"img-user-post shadow"},null,8,["image"])]}),_:1},8,["to"])]),e("div",io,[_(a,{to:"/@"+((l=t.post)==null?void 0:l.user.username),class:"name-user-post fw-bold text-decoration-none text-dark"},{default:y(()=>{var f;return[S(C((f=t.post)==null?void 0:f.user.name),1)]}),_:1},8,["to"]),e("span",ro,[e("small",null,C(o.$t("timeAgo",{date:(g=t.post)==null?void 0:g.created_at})),1)])]),e("div",mo,[lo,_(t.PostMenu,{"post-id":(b=t.post)==null?void 0:b.id},null,8,["post-id"])])]),e("p",_o,C((P=t.post)==null?void 0:P.simple_post.description),1),(z=t.post)!=null&&z.pets_count?(i(),x(t.PetIconList,{key:0,pets:t.post.pets,"pets-count":t.post.pets_count,class:"px-3"},null,8,["pets","pets-count"])):h("",!0),t.post?(i(),x(t.ReactAndCommentButtons,{key:1,id:t.post.id,"my-reaction":t.my_reaction,"reactions-count":t.reactions_count,"comments-count":t.comments_count,onReact:n.react},null,8,["id","my-reaction","reactions-count","comments-count","onReact"])):h("",!0),t.post?(i(),x(t.SeccionComentariosComponent,{key:2,"post-id":t.post.id,onContadorActualizado:n.contadorActualizado,style:{"flex-grow":"1",overflow:"hidden"}},null,8,["post-id","onContadorActualizado"])):h("",!0)])])])])}var po=k(Z,[["render",uo],["__scopeId","data-v-5c070739"]]);const ho={components:{ViewPost:po}};function go(o,r,s,t,c,n){const a=w("ViewPost");return i(),p(I,null,[S(" ver post "+C(o.$route.params.id)+" ",1),_(a)],64)}var vo=k(ho,[["render",go]]);export{vo as default};
