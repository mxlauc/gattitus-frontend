import{_ as u,r as _,o as r,c as m,d as i,m as f,F as p,i as S,g as v,x as F,s as g,v as w,b as t,u as h,k as y,t as b,h as H,p as C,w as $,f as T,y as R}from"./entry-8983ec98.mjs";import{I as k}from"./ImagePreloader-82228701.mjs";import{C as U,N as G,P as E,a as V,R as q}from"./NewComment-fc9ab81a.mjs";import{_ as I}from"./UserToFollowItem-3ea09b86.mjs";const D={components:{ComentarioComponent:U,NewComment:G},data(){return{comments:this.bestComments}},props:["postId","bestComments"],emits:["contadorActualizado"],methods:{onCommented(e){this.comments.push(e)},contadorActualizado(e){this.$emit("contadorActualizado",e)}}},K=e=>(g("data-v-2c7d774c"),e=e(),w(),e),W=K(()=>t("hr",{class:"my-0"},null,-1));function X(e,l,o,s,c,n){const a=_("comentario-component"),d=_("NewComment");return r(),m(p,null,[W,i(F,{name:"grupo-comentarios"},{default:f(()=>[(r(!0),m(p,null,S(c.comments,x=>(r(),v(a,{"hide-options":!0,"post-id":o.postId,key:x.id,comentario:x},null,8,["post-id","comentario"]))),128))]),_:1}),i(d,{"post-id":o.postId,onCommented:n.onCommented,onContadorActualizado:n.contadorActualizado},null,8,["post-id","onCommented","onContadorActualizado"])],64)}var J=u(D,[["render",X],["__scopeId","data-v-2c7d774c"]]);const Q={components:{ImagePreloader:k,PostMenu:E,PetIconList:V,ReactAndCommentButtons:q,BestComments:J},setup(){return{mainStore:h()}},data(){return{reactions_count:this.post.reactions_count,comments_count:this.post.comments_count,my_reaction:this.post.my_reaction}},props:["post"],provide(){return{postId:this.post.id,clickTimeout:null}},methods:{reactLove(){this.my_reaction||this.react()},react(e){this.my_reaction=e.own_reaction,this.reactions_count=e.reactions_count},contadorActualizado(e){this.comments_count=e},clickHandler(){this.clickTimeout?(clearTimeout(this.clickTimeout),this.clickTimeout=null,this.doubleclick()):this.clickTimeout=setTimeout(()=>{this.click(),this.clickTimeout=null},250)},click(){this.$router.push(`/posts/${this.post.id}`)},doubleclick(){this.reactLove()}},computed:{userLogged(){var e;return(e=this.mainStore)==null?void 0:e.userLogged}}},Y=e=>(g("data-v-6b20f476"),e=e(),w(),e),Z={class:"card card-post shadow-sm f-rubick mb-4"},tt={class:"card-body pb-0"},et={class:"row g-0"},ot={class:"col-auto"},st={class:"col px-2"},nt={class:"d-block text-black-50 fs-6",role:"button"},ct={class:"col-auto"},at=Y(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32.055 32.055",width:"20",height:"20",class:"text-black-50",fill:"currentColor","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("path",{d:`M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z`})],-1)),it={class:"fs-6 mt-1 mb-1 text-muted"},rt={class:"my-2 position-relative"};function dt(e,l,o,s,c,n){const a=_("image-preloader"),d=C,x=_("post-menu"),B=_("PetIconList"),M=_("ReactAndCommentButtons"),N=_("BestComments");return r(),m("div",Z,[t("div",tt,[t("div",et,[t("div",ot,[i(d,{to:"/@"+o.post.user.username},{default:f(()=>[i(a,{image:o.post.user.image,class:"img-user-post shadow"},null,8,["image"])]),_:1},8,["to"])]),t("div",st,[i(d,{to:"/@"+o.post.user.username,class:"name-user-post fw-bold text-decoration-none text-dark"},{default:f(()=>[y(b(o.post.user.name),1)]),_:1},8,["to"]),t("span",nt,[t("small",null,b(e.$t("timeAgo",{date:o.post.created_at})),1)])]),t("div",ct,[at,i(x,{"post-id":o.post.id},null,8,["post-id"])])]),t("p",it,b(o.post.simple_post.description),1),o.post.pets_count?(r(),v(B,{key:0,pets:o.post.pets,"pets-count":o.post.pets_count},null,8,["pets","pets-count"])):H("",!0),t("div",rt,[i(a,{aspect:o.post.simple_post.image.aspect_ratio,option:"url_lg",image:o.post.simple_post.image,class:"rounded-5 w-100 shadow-sm"},null,8,["aspect","image"]),t("div",{class:"position-absolute top-0 start-0 end-0 bottom-0",onClick:l[0]||(l[0]=(...j)=>n.clickHandler&&n.clickHandler(...j))})]),i(M,{id:o.post.id,"my-reaction":c.my_reaction,"reactions-count":c.reactions_count,"comments-count":c.comments_count,onReact:n.react},null,8,["id","my-reaction","reactions-count","comments-count","onReact"]),i(N,{"post-id":o.post.id,"best-comments":o.post.best_comments,onContadorActualizado:n.contadorActualizado},null,8,["post-id","best-comments","onContadorActualizado"])])])}var P=u(Q,[["render",dt],["__scopeId","data-v-6b20f476"]]);const lt={components:{UserToFollowItem:I},data(){return{}},mounted(){}},mt=Object.assign(lt,{async setup(e,{expose:l}){l();let o,s;const c=h(),n=([o,s]=$(()=>T(`${c.backendUrl}/api/users`,"XSRF-TOKEN")),o=await o,s(),o),a=n.data,d={mainStore:c,result:n,users:a,UserToFollowItem:I,useMainStore:h};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),_t=e=>(g("data-v-2708c0e8"),e=e(),w(),e),ut=_t(()=>t("h4",null,[t("strong",null,"Usuarios que podr\xEDan interesarte")],-1)),pt={class:"card shadow-sm mb-3"},ht={class:"card-body"};function bt(e,l,o,s,c,n){return r(),m(p,null,[ut,t("div",pt,[t("div",ht,[(r(!0),m(p,null,S(s.users,a=>(r(),v(s.UserToFollowItem,{class:"user-item",key:a.id,user:a},null,8,["user"]))),128))])])],64)}var z=u(mt,[["render",bt],["__scopeId","data-v-2708c0e8"]]);const ft={components:{ImagePreloader:k},props:{pet:Object}},vt=e=>(g("data-v-be617f26"),e=e(),w(),e),gt={class:"row"},wt={class:"col-auto"},xt={class:"col"},St=vt(()=>t("br",null,null,-1)),kt={class:"text-muted"};function yt(e,l,o,s,c,n){const a=_("ImagePreloader"),d=C;return r(),m("div",gt,[t("div",wt,[i(d,{to:"/pets/"+o.pet.slug},{default:f(()=>[i(a,{image:o.pet.image,class:"pet-item-img shadow",aspect:"1"},null,8,["image"])]),_:1},8,["to"])]),t("div",xt,[i(d,{to:"/pets/"+o.pet.slug,class:"text-decoration-none"},{default:f(()=>[y(b(o.pet.name),1)]),_:1},8,["to"]),St,t("small",kt,b(o.pet.nickname),1)])])}var A=u(ft,[["render",yt],["__scopeId","data-v-be617f26"]]);const $t={components:{PetToSeeItem:A}},Ct=Object.assign($t,{async setup(e,{expose:l}){l();let o,s;const c=h(),n=([o,s]=$(()=>T(`${c.backendUrl}/api/pets`)),o=await o,s(),o),a=n.data,d={mainStore:c,result:n,pets:a,PetToSeeItem:A,useMainStore:h};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Tt=e=>(g("data-v-d0cc83e2"),e=e(),w(),e),It=Tt(()=>t("h4",null,[t("strong",null,"Gatos que podr\xEDan gustarte")],-1)),Pt={class:"card shadow-sm mb-3"},zt={class:"card-body"};function At(e,l,o,s,c,n){return r(),m(p,null,[It,t("div",Pt,[t("div",zt,[(r(!0),m(p,null,S(s.pets,a=>(r(),v(s.PetToSeeItem,{class:"pet-item",key:a.id,pet:a},null,8,["pet"]))),128))])])],64)}var L=u(Ct,[["render",At],["__scopeId","data-v-d0cc83e2"]]);const Lt={data(){var e;return{scrollPos:0,maxTop:(e=this.top)!=null?e:0,minTop:0,topScroll:0,sizeObserver:null}},props:["top"],mounted(){window.addEventListener("scroll",this.onScroll),this.sizeObserver=new ResizeObserver(this.calcMinTop),this.sizeObserver.observe(this.$refs.col)},unmounted(){window.removeEventListener("scroll",this.onScroll),this.sizeObserver.disconnect()},methods:{onScroll(){if(this.$refs.col.clientHeight+this.maxTop>window.innerHeight){const e=document.documentElement.scrollTop-this.scrollPos;e>0?(this.topScroll-=e,this.topScroll<this.minTop&&(this.topScroll=this.minTop)):(this.topScroll-=e,this.topScroll>this.maxTop&&(this.topScroll=this.maxTop))}else this.topScroll=this.maxTop;this.$refs.col.style.top=`${this.topScroll}px`,this.scrollPos=document.documentElement.scrollTop},calcMinTop(){this.minTop=window.innerHeight-this.$refs.col.clientHeight}}},Ot={ref:"col",style:{"align-self":"flex-start",position:"sticky"}};function Bt(e,l,o,s,c,n){return r(),m("div",Ot,[R(e.$slots,"default")],512)}var O=u(Lt,[["render",Bt]]);const Mt={components:{SimplePostComponent:P,ImagePreloader:k,UserToFollowList:z,PetToSeeList:L,StickyMiddleColumn:O},data(){return{}},mounted(){},computed:{posts(){var e;return(e=this.mainStore)==null?void 0:e.posts}}},Nt=Object.assign(Mt,{async setup(e,{expose:l}){l();let o,s;const c=h();[o,s]=$(()=>c.loadPosts()),await o,s();const n={mainStore:c,SimplePostComponent:P,ImagePreloader:k,UserToFollowList:z,PetToSeeList:L,StickyMiddleColumn:O,useMainStore:h};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),jt={class:"row g-0"},Ft={class:"col-12 col-md-8"},Ht={style:{"max-width":"500px",margin:"auto"}},Rt=t("strong",null,"Ideas para publicar",-1),Ut={class:"card shadow-sm mb-3"},Gt={class:"card-body"},Et=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Vt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),qt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Dt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Kt=t("h4",null,[t("strong",null,"A\xFAn no sigues a estos gatos")],-1),Wt={class:"card shadow-sm mb-3"},Xt={class:"card-body"},Jt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Qt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),Yt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Zt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),te=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),ee=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),oe=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1);function se(e,l,o,s,c,n){const a=_("router-view");return r(),m("div",jt,[t("div",Ft,[t("div",Ht,[i(a),(r(!0),m(p,null,S(n.posts,d=>(r(),v(s.SimplePostComponent,{post:d,key:d.id},null,8,["post"]))),128))])]),i(s.StickyMiddleColumn,{top:"80",class:"col-12 col-md-4",style:{"max-width":"100%"}},{default:f(()=>[i(s.UserToFollowList),i(s.PetToSeeList),t("h4",null,[Rt,y(" "+b(s.mainStore.state),1)]),t("div",Ut,[t("div",Gt,[Et,Vt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),qt])]),Dt,Kt,t("div",Wt,[t("div",Xt,[Jt,Qt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),Yt])]),Zt,te,ee,oe]),_:1})])}var ne=u(Nt,[["render",se]]);const ce={components:{HomeComponent:ne}};function ae(e,l,o,s,c,n){return r(),m("div",null," bienvenido ")}var me=u(ce,[["render",ae]]);export{me as default};
