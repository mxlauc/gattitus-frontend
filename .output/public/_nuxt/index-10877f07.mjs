import{_ as u,r as b,o as l,c as _,d as i,p as f,F as h,i as x,g as $,z as U,v,x as g,b as t,l as S,t as p,u as m,j as B,y as F,q as C,w as k,f as T,A as G}from"./entry-81d1b5ec.mjs";import{I as w}from"./ImagePreloader-46b20083.mjs";import{C as q,N as E,P as I,a as P,R as z}from"./NewComment-19f82a1f.mjs";import{_ as O}from"./UserToFollowItem-f316851a.mjs";const V={components:{ComentarioComponent:q,NewComment:E},data(){return{comments:this.bestComments}},props:["postId","bestComments"],emits:["contadorActualizado"],methods:{onCommented(e){this.comments.push(e)},contadorActualizado(e){this.$emit("contadorActualizado",e)}}},R=e=>(v("data-v-2c7d774c"),e=e(),g(),e),D=R(()=>t("hr",{class:"my-0"},null,-1));function W(e,c,o,s,r,n){const a=b("comentario-component"),d=b("NewComment");return l(),_(h,null,[D,i(U,{name:"grupo-comentarios"},{default:f(()=>[(l(!0),_(h,null,x(r.comments,y=>(l(),$(a,{"hide-options":!0,"post-id":o.postId,key:y.id,comentario:y},null,8,["post-id","comentario"]))),128))]),_:1}),i(d,{"post-id":o.postId,onCommented:n.onCommented,onContadorActualizado:n.contadorActualizado},null,8,["post-id","onCommented","onContadorActualizado"])],64)}var A=u(V,[["render",W],["__scopeId","data-v-2c7d774c"]]);const J={components:{ImagePreloader:w,PostMenu:I,PetIconList:P,ReactAndCommentButtons:z,BestComments:A},setup(){return{mainStore:m()}},data(){return{reactions_count:this.post.reactions_count,comments_count:this.post.comments_count,my_reaction:this.post.my_reaction}},props:["post"],provide(){return{postId:this.post.id,clickTimeout:null}},methods:{reactLove(){this.my_reaction||this.react()},react(e){this.my_reaction=e.own_reaction,this.reactions_count=e.reactions_count},contadorActualizado(e){this.comments_count=e},clickHandler(){this.clickTimeout?(clearTimeout(this.clickTimeout),this.clickTimeout=null,this.doubleclick()):this.clickTimeout=setTimeout(()=>{this.click(),this.clickTimeout=null},250)},click(){this.$router.push(`/posts/${this.post.id}`)},doubleclick(){this.reactLove()}}},K=Object.assign(J,{setup(e,{expose:c}){c();const o={ImagePreloader:w,PostMenu:I,PetIconList:P,ReactAndCommentButtons:z,BestComments:A,useMainStore:m,t:B,timeAgo:F};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),Q=e=>(v("data-v-57d30bce"),e=e(),g(),e),X={class:"card card-post shadow-sm f-rubick mb-4"},Y={class:"card-body pb-0"},Z={class:"row g-0"},tt={class:"col-auto"},et={class:"col px-2"},ot={class:"d-block text-black-50 fs-6",role:"button"},st={class:"col-auto"},at=Q(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32.055 32.055",width:"20",height:"20",class:"text-black-50",fill:"currentColor","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("path",{d:`M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z`})],-1)),nt={class:"fs-6 mt-1 mb-1 text-muted"},ct={class:"my-2 position-relative"};function rt(e,c,o,s,r,n){const a=C;return l(),_("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[i(a,{to:"/@"+o.post.user.username},{default:f(()=>[i(s.ImagePreloader,{image:o.post.user.image,class:"img-user-post shadow"},null,8,["image"])]),_:1},8,["to"])]),t("div",et,[i(a,{to:"/@"+o.post.user.username,class:"name-user-post fw-bold text-decoration-none text-dark"},{default:f(()=>[S(p(o.post.user.name),1)]),_:1},8,["to"]),t("span",ot,[t("small",null,p(s.timeAgo(o.post.created_at)),1),t("small",null,p(),1)])]),t("div",st,[at,i(s.PostMenu,{"post-id":o.post.id},null,8,["post-id"])])]),t("p",nt,p(o.post.simple_post.description),1),t("div",ct,[i(s.ImagePreloader,{aspect:o.post.simple_post.image.aspect_ratio,option:"url_lg",image:o.post.simple_post.image,class:"rounded-5 w-100 shadow-sm"},null,8,["aspect","image"]),t("div",{class:"position-absolute top-0 start-0 end-0 bottom-0",onClick:c[0]||(c[0]=(...d)=>n.clickHandler&&n.clickHandler(...d))})])])])}var j=u(K,[["render",rt],["__scopeId","data-v-57d30bce"]]);const it={components:{UserToFollowItem:O},data(){return{}},mounted(){}},lt=Object.assign(it,{async setup(e,{expose:c}){c();let o,s;const r=m();let n=null;[o,s]=k(()=>T(`${r.backendUrl}/api/users`).then(d=>{n=d.data.data}).catch(d=>{})),await o,s();const a={mainStore:r,users:n,UserToFollowItem:O,useMainStore:m};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),dt=e=>(v("data-v-fe9c3886"),e=e(),g(),e),_t=dt(()=>t("h4",null,[t("strong",null,"Usuarios que podr\xEDan interesarte")],-1)),mt={class:"card shadow-sm mb-3"},ut={class:"card-body"};function pt(e,c,o,s,r,n){return l(),_(h,null,[_t,t("div",mt,[t("div",ut,[(l(!0),_(h,null,x(s.users,a=>(l(),$(s.UserToFollowItem,{class:"user-item",key:a.id,user:a},null,8,["user"]))),128))])])],64)}var L=u(lt,[["render",pt],["__scopeId","data-v-fe9c3886"]]);const ht={components:{ImagePreloader:w},props:{pet:Object}},ft=e=>(v("data-v-be617f26"),e=e(),g(),e),bt={class:"row"},vt={class:"col-auto"},gt={class:"col"},wt=ft(()=>t("br",null,null,-1)),xt={class:"text-muted"};function $t(e,c,o,s,r,n){const a=b("ImagePreloader"),d=C;return l(),_("div",bt,[t("div",vt,[i(d,{to:"/pets/"+o.pet.slug},{default:f(()=>[i(a,{image:o.pet.image,class:"pet-item-img shadow",aspect:"1"},null,8,["image"])]),_:1},8,["to"])]),t("div",gt,[i(d,{to:"/pets/"+o.pet.slug,class:"text-decoration-none"},{default:f(()=>[S(p(o.pet.name),1)]),_:1},8,["to"]),wt,t("small",xt,p(o.pet.nickname),1)])])}var M=u(ht,[["render",$t],["__scopeId","data-v-be617f26"]]);const St={components:{PetToSeeItem:M}},kt=Object.assign(St,{async setup(e,{expose:c}){c();let o,s;const r=m();let n=null;[o,s]=k(()=>T(`${r.backendUrl}/api/pets`).then(d=>{n=d.data.data}).catch(d=>{})),await o,s();const a={mainStore:r,pets:n,PetToSeeItem:M,useMainStore:m};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),yt=e=>(v("data-v-5f99d5f1"),e=e(),g(),e),Ct=yt(()=>t("h4",null,[t("strong",null,"Gatos que podr\xEDan gustarte")],-1)),Tt={class:"card shadow-sm mb-3"},It={class:"card-body"};function Pt(e,c,o,s,r,n){return l(),_(h,null,[Ct,t("div",Tt,[t("div",It,[(l(!0),_(h,null,x(s.pets,a=>(l(),$(s.PetToSeeItem,{class:"pet-item",key:a.id,pet:a},null,8,["pet"]))),128))])])],64)}var H=u(kt,[["render",Pt],["__scopeId","data-v-5f99d5f1"]]);const zt={data(){var e;return{scrollPos:0,maxTop:(e=this.top)!=null?e:0,minTop:0,topScroll:0,sizeObserver:null}},props:["top"],mounted(){window.addEventListener("scroll",this.onScroll),this.sizeObserver=new ResizeObserver(this.calcMinTop),this.sizeObserver.observe(this.$refs.col)},unmounted(){window.removeEventListener("scroll",this.onScroll),this.sizeObserver.disconnect()},methods:{onScroll(){if(this.$refs.col.clientHeight+this.maxTop>window.innerHeight){const e=document.documentElement.scrollTop-this.scrollPos;e>0?(this.topScroll-=e,this.topScroll<this.minTop&&(this.topScroll=this.minTop)):(this.topScroll-=e,this.topScroll>this.maxTop&&(this.topScroll=this.maxTop))}else this.topScroll=this.maxTop;this.$refs.col.style.top=`${this.topScroll}px`,this.scrollPos=document.documentElement.scrollTop},calcMinTop(){this.minTop=window.innerHeight-this.$refs.col.clientHeight}}},Ot={ref:"col",style:{"align-self":"flex-start",position:"sticky"}};function At(e,c,o,s,r,n){return l(),_("div",Ot,[G(e.$slots,"default")],512)}var N=u(zt,[["render",At]]);const jt={components:{SimplePostComponent:j,ImagePreloader:w,UserToFollowList:L,PetToSeeList:H,StickyMiddleColumn:N},data(){return{}},mounted(){}},Lt=Object.assign(jt,{async setup(e,{expose:c}){c();let o,s;const r=m();[o,s]=k(()=>r.loadPosts()),await o,s();const n={mainStore:r,SimplePostComponent:j,ImagePreloader:w,UserToFollowList:L,PetToSeeList:H,StickyMiddleColumn:N,useMainStore:m};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Mt={class:"row g-0"},Ht={class:"col-12 col-md-8"},Nt={style:{"max-width":"500px",margin:"auto"}},Ut=t("strong",null,"Ideas para publicar",-1),Bt={class:"card shadow-sm mb-3"},Ft={class:"card-body"},Gt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),qt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),Et=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Vt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Rt=t("h4",null,[t("strong",null,"A\xFAn no sigues a estos gatos")],-1),Dt={class:"card shadow-sm mb-3"},Wt={class:"card-body"},Jt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Kt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),Qt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Xt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Yt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),Zt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),te=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1);function ee(e,c,o,s,r,n){const a=b("router-view");return l(),_("div",Mt,[t("div",Ht,[t("div",Nt,[i(a),(l(!0),_(h,null,x(s.mainStore.posts,d=>(l(),$(s.SimplePostComponent,{post:d,key:d.id},null,8,["post"]))),128))])]),i(s.StickyMiddleColumn,{top:"80",class:"col-12 col-md-4",style:{"max-width":"100%"}},{default:f(()=>[i(s.UserToFollowList),i(s.PetToSeeList),t("h4",null,[Ut,S(" "+p(s.mainStore.state),1)]),t("div",Bt,[t("div",Ft,[Gt,qt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),Et])]),Vt,Rt,t("div",Dt,[t("div",Wt,[Jt,Kt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),Qt])]),Xt,Yt,Zt,te]),_:1})])}var oe=u(Lt,[["render",ee]]);const se={components:{HomeComponent:oe}},ae=S(" bienvenido ");function ne(e,c,o,s,r,n){const a=b("HomeComponent");return l(),_("div",null,[ae,i(a)])}var de=u(se,[["render",ne]]);export{de as default};
