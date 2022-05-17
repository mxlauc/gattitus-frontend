import{_ as u,r as b,o as l,c as m,b as i,w as f,F as p,l as S,j as v,z as B,v as w,x as g,d as t,a as k,t as h,k as U,u as _,m as F,y as G,e as $,h as y,i as I,A as R}from"./entry-d0374ff8.mjs";import{I as x}from"./ImagePreloader-36a5f277.mjs";import{C as V,N as q,P as T,a as P,R as z}from"./NewComment-91e2d15a.mjs";import{_ as A}from"./UserToFollowItem-172a451b.mjs";const E={components:{ComentarioComponent:V,NewComment:q},data(){return{comments:this.bestComments}},props:["postId","bestComments"],emits:["contadorActualizado"],methods:{onCommented(e){this.comments.push(e)},contadorActualizado(e){this.$emit("contadorActualizado",e)}}},D=e=>(w("data-v-e56ed4cc"),e=e(),g(),e),W=D(()=>t("hr",{class:"my-0"},null,-1));function J(e,r,o,s,a,n){const c=b("comentario-component"),d=b("NewComment");return l(),m(p,null,[W,i(B,{name:"grupo-comentarios"},{default:f(()=>[(l(!0),m(p,null,S(a.comments,C=>(l(),v(c,{"hide-options":!0,"post-id":o.postId,key:C.id,comentario:C},null,8,["post-id","comentario"]))),128))]),_:1}),i(d,{"post-id":o.postId,onCommented:n.onCommented,onContadorActualizado:n.contadorActualizado},null,8,["post-id","onCommented","onContadorActualizado"])],64)}var O=u(E,[["render",J],["__scopeId","data-v-e56ed4cc"]]);const K={components:{ImagePreloader:x,PostMenu:T,PetIconList:P,ReactAndCommentButtons:z,BestComments:O},setup(){return{mainStore:_()}},data(){return{reactions_count:this.post.reactions_count,comments_count:this.post.comments_count,my_reaction:this.post.my_reaction}},props:["post"],provide(){return{postId:this.post.id,clickTimeout:null}},methods:{reactLove(){this.my_reaction||this.react()},react(e){this.my_reaction=e.own_reaction,this.reactions_count=e.reactions_count},contadorActualizado(e){this.comments_count=e},clickHandler(){this.clickTimeout?(clearTimeout(this.clickTimeout),this.clickTimeout=null,this.doubleclick()):this.clickTimeout=setTimeout(()=>{this.click(),this.clickTimeout=null},250)},click(){this.$router.push(`/posts/${this.post.id}`)},doubleclick(){this.reactLove()}}},Q=Object.assign(K,{setup(e,{expose:r}){r();const o={ImagePreloader:x,PostMenu:T,PetIconList:P,ReactAndCommentButtons:z,BestComments:O,useMainStore:_,t:F,timeAgo:G};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),X=e=>(w("data-v-05187eea"),e=e(),g(),e),Y={class:"card card-post shadow-sm f-rubick mb-4"},Z={class:"card-body pb-0"},tt={class:"row g-0"},et={class:"col-auto"},ot={class:"col px-2"},st={class:"d-block text-black-50 fs-6",role:"button"},nt={class:"col-auto"},ct=X(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32.055 32.055",width:"20",height:"20",class:"text-black-50",fill:"currentColor","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("path",{d:`M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z`})],-1)),at={class:"fs-6 mt-1 mb-1 text-muted"},it={class:"my-2 position-relative"};function rt(e,r,o,s,a,n){const c=$;return l(),m("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[i(c,{to:"/@"+o.post.user.username},{default:f(()=>[i(s.ImagePreloader,{image:o.post.user.image,class:"img-user-post shadow"},null,8,["image"])]),_:1},8,["to"])]),t("div",ot,[i(c,{to:"/@"+o.post.user.username,class:"name-user-post fw-bold text-decoration-none text-dark"},{default:f(()=>[k(h(o.post.user.name),1)]),_:1},8,["to"]),t("span",st,[t("small",null,h(s.timeAgo(o.post.created_at)),1)])]),t("div",nt,[ct,i(s.PostMenu,{"post-id":o.post.id},null,8,["post-id"])])]),t("p",at,h(o.post.simple_post.description),1),o.post.pets_count?(l(),v(s.PetIconList,{key:0,pets:o.post.pets,"pets-count":o.post.pets_count},null,8,["pets","pets-count"])):U("",!0),t("div",it,[i(s.ImagePreloader,{aspect:o.post.simple_post.image.aspect_ratio,option:"url_lg",image:o.post.simple_post.image,class:"rounded-5 w-100 shadow-sm"},null,8,["aspect","image"]),t("div",{class:"position-absolute top-0 start-0 end-0 bottom-0",onClick:r[0]||(r[0]=(...d)=>n.clickHandler&&n.clickHandler(...d))})]),i(s.ReactAndCommentButtons,{id:o.post.id,"my-reaction":a.my_reaction,"reactions-count":a.reactions_count,"comments-count":a.comments_count,onReact:n.react},null,8,["id","my-reaction","reactions-count","comments-count","onReact"]),i(s.BestComments,{"post-id":o.post.id,"best-comments":o.post.best_comments,onContadorActualizado:n.contadorActualizado},null,8,["post-id","best-comments","onContadorActualizado"])])])}var L=u(Q,[["render",rt],["__scopeId","data-v-05187eea"]]);const lt={components:{UserToFollowItem:A},data(){return{}},mounted(){}},dt=Object.assign(lt,{async setup(e,{expose:r}){r();let o,s;const a=_();let n=null;[o,s]=y(()=>I(`${a.backendUrl}/api/users`).then(d=>{n=d.data.data}).catch(d=>{})),await o,s();const c={mainStore:a,users:n,UserToFollowItem:A,useMainStore:_};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),mt=e=>(w("data-v-fe9c3886"),e=e(),g(),e),_t=mt(()=>t("h4",null,[t("strong",null,"Usuarios que podr\xEDan interesarte")],-1)),ut={class:"card shadow-sm mb-3"},pt={class:"card-body"};function ht(e,r,o,s,a,n){return l(),m(p,null,[_t,t("div",ut,[t("div",pt,[(l(!0),m(p,null,S(s.users,c=>(l(),v(s.UserToFollowItem,{class:"user-item",key:c.id,user:c},null,8,["user"]))),128))])])],64)}var j=u(dt,[["render",ht],["__scopeId","data-v-fe9c3886"]]);const ft={components:{ImagePreloader:x},props:{pet:Object}},bt=e=>(w("data-v-be617f26"),e=e(),g(),e),vt={class:"row"},wt={class:"col-auto"},gt={class:"col"},xt=bt(()=>t("br",null,null,-1)),St={class:"text-muted"};function kt(e,r,o,s,a,n){const c=b("ImagePreloader"),d=$;return l(),m("div",vt,[t("div",wt,[i(d,{to:"/pets/"+o.pet.slug},{default:f(()=>[i(c,{image:o.pet.image,class:"pet-item-img shadow",aspect:"1"},null,8,["image"])]),_:1},8,["to"])]),t("div",gt,[i(d,{to:"/pets/"+o.pet.slug,class:"text-decoration-none"},{default:f(()=>[k(h(o.pet.name),1)]),_:1},8,["to"]),xt,t("small",St,h(o.pet.nickname),1)])])}var M=u(ft,[["render",kt],["__scopeId","data-v-be617f26"]]);const yt={components:{PetToSeeItem:M}},Ct=Object.assign(yt,{async setup(e,{expose:r}){r();let o,s;const a=_();let n=null;[o,s]=y(()=>I(`${a.backendUrl}/api/pets`).then(d=>{n=d.data.data}).catch(d=>{})),await o,s();const c={mainStore:a,pets:n,PetToSeeItem:M,useMainStore:_};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),$t=e=>(w("data-v-5f99d5f1"),e=e(),g(),e),It=$t(()=>t("h4",null,[t("strong",null,"Gatos que podr\xEDan gustarte")],-1)),Tt={class:"card shadow-sm mb-3"},Pt={class:"card-body"};function zt(e,r,o,s,a,n){return l(),m(p,null,[It,t("div",Tt,[t("div",Pt,[(l(!0),m(p,null,S(s.pets,c=>(l(),v(s.PetToSeeItem,{class:"pet-item",key:c.id,pet:c},null,8,["pet"]))),128))])])],64)}var H=u(Ct,[["render",zt],["__scopeId","data-v-5f99d5f1"]]);const At={data(){var e;return{scrollPos:0,maxTop:(e=this.top)!=null?e:0,minTop:0,topScroll:0,sizeObserver:null}},props:["top"],mounted(){window.addEventListener("scroll",this.onScroll),this.sizeObserver=new ResizeObserver(this.calcMinTop),this.sizeObserver.observe(this.$refs.col)},unmounted(){window.removeEventListener("scroll",this.onScroll),this.sizeObserver.disconnect()},methods:{onScroll(){if(this.$refs.col.clientHeight+this.maxTop>window.innerHeight){const e=document.documentElement.scrollTop-this.scrollPos;e>0?(this.topScroll-=e,this.topScroll<this.minTop&&(this.topScroll=this.minTop)):(this.topScroll-=e,this.topScroll>this.maxTop&&(this.topScroll=this.maxTop))}else this.topScroll=this.maxTop;this.$refs.col.style.top=`${this.topScroll}px`,this.scrollPos=document.documentElement.scrollTop},calcMinTop(){this.minTop=window.innerHeight-this.$refs.col.clientHeight}}},Ot={ref:"col",style:{"align-self":"flex-start",position:"sticky"}};function Lt(e,r,o,s,a,n){return l(),m("div",Ot,[R(e.$slots,"default")],512)}var N=u(At,[["render",Lt]]);const jt={components:{SimplePostComponent:L,ImagePreloader:x,UserToFollowList:j,PetToSeeList:H,StickyMiddleColumn:N},data(){return{}},mounted(){}},Mt=Object.assign(jt,{async setup(e,{expose:r}){r();let o,s;const a=_();[o,s]=y(()=>a.loadPosts()),await o,s();const n={mainStore:a,SimplePostComponent:L,ImagePreloader:x,UserToFollowList:j,PetToSeeList:H,StickyMiddleColumn:N,useMainStore:_};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ht={class:"row g-0"},Nt={class:"col-12 col-md-8"},Bt={style:{"max-width":"500px",margin:"auto"}},Ut=t("strong",null,"Ideas para publicar",-1),Ft={class:"card shadow-sm mb-3"},Gt={class:"card-body"},Rt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Vt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),qt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Et=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Dt=t("h4",null,[t("strong",null,"A\xFAn no sigues a estos gatos")],-1),Wt={class:"card shadow-sm mb-3"},Jt={class:"card-body"},Kt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Qt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),Xt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Yt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Zt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),te=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),ee=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1);function oe(e,r,o,s,a,n){const c=b("router-view");return l(),m("div",Ht,[t("div",Nt,[t("div",Bt,[i(c),(l(!0),m(p,null,S(s.mainStore.posts,d=>(l(),v(s.SimplePostComponent,{post:d,key:d.id},null,8,["post"]))),128))])]),i(s.StickyMiddleColumn,{top:"80",class:"col-12 col-md-4",style:{"max-width":"100%"}},{default:f(()=>[i(s.UserToFollowList),i(s.PetToSeeList),t("h4",null,[Ut,k(" "+h(s.mainStore.state),1)]),t("div",Ft,[t("div",Gt,[Rt,Vt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),qt])]),Et,Dt,t("div",Wt,[t("div",Jt,[Kt,Qt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),Xt])]),Yt,Zt,te,ee]),_:1})])}var se=u(Mt,[["render",oe]]);const ne={components:{HomeComponent:se}},ce=k(" bienvenido ");function ae(e,r,o,s,a,n){const c=b("HomeComponent");return l(),m("div",null,[ce,i(c)])}var me=u(ne,[["render",ae]]);export{me as default};
