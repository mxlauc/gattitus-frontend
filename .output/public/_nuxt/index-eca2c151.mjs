import{_ as u,r as g,o as l,c as _,d as i,F as h,v as b,x as v,b as t,p as f,l as x,t as p,u as m,j as B,y as N,q as $,w as S,f as C,i as k,g as y,z as U}from"./entry-50524dae.mjs";import{I as w}from"./ImagePreloader-634f2187.mjs";import{C as F,N as q,P as T,a as I,R as P}from"./NewComment-69f2b963.mjs";import{_ as z}from"./UserToFollowItem-d189bb22.mjs";const G={components:{ComentarioComponent:F,NewComment:q},data(){return{comments:this.bestComments}},props:["postId","bestComments"],emits:["contadorActualizado"],methods:{onCommented(e){this.comments.push(e)},contadorActualizado(e){this.$emit("contadorActualizado",e)}}},R=e=>(b("data-v-54ba1254"),e=e(),v(),e),E=R(()=>t("hr",{class:"my-0"},null,-1));function V(e,r,o,s,c,a){const n=g("NewComment");return l(),_(h,null,[E,i(n,{"post-id":o.postId,onCommented:a.onCommented,onContadorActualizado:a.contadorActualizado},null,8,["post-id","onCommented","onContadorActualizado"])],64)}var A=u(G,[["render",V],["__scopeId","data-v-54ba1254"]]);const D={components:{ImagePreloader:w,PostMenu:T,PetIconList:I,ReactAndCommentButtons:P,BestComments:A},setup(){return{mainStore:m()}},data(){return{reactions_count:this.post.reactions_count,comments_count:this.post.comments_count,my_reaction:this.post.my_reaction}},props:["post"],provide(){return{postId:this.post.id,clickTimeout:null}},methods:{reactLove(){this.my_reaction||this.react()},react(e){this.my_reaction=e.own_reaction,this.reactions_count=e.reactions_count},contadorActualizado(e){this.comments_count=e},clickHandler(){this.clickTimeout?(clearTimeout(this.clickTimeout),this.clickTimeout=null,this.doubleclick()):this.clickTimeout=setTimeout(()=>{this.click(),this.clickTimeout=null},250)},click(){this.$router.push(`/posts/${this.post.id}`)},doubleclick(){this.reactLove()}}},W=Object.assign(D,{setup(e,{expose:r}){r();const o={ImagePreloader:w,PostMenu:T,PetIconList:I,ReactAndCommentButtons:P,BestComments:A,useMainStore:m,t:B,timeAgo:N};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),J=e=>(b("data-v-2de623c6"),e=e(),v(),e),K={class:"card card-post shadow-sm f-rubick mb-4"},Q={class:"card-body pb-0"},X={class:"row g-0"},Y={class:"col-auto"},Z={class:"col px-2"},tt={class:"d-block text-black-50 fs-6",role:"button"},et={class:"col-auto"},ot=J(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32.055 32.055",width:"20",height:"20",class:"text-black-50",fill:"currentColor","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("path",{d:`M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z`})],-1)),st={class:"fs-6 mt-1 mb-1 text-muted"},at={class:"my-2 position-relative"};function nt(e,r,o,s,c,a){const n=$;return l(),_("div",K,[t("div",Q,[t("div",X,[t("div",Y,[i(n,{to:"/@"+o.post.user.username},{default:f(()=>[i(s.ImagePreloader,{image:o.post.user.image,class:"img-user-post shadow"},null,8,["image"])]),_:1},8,["to"])]),t("div",Z,[i(n,{to:"/@"+o.post.user.username,class:"name-user-post fw-bold text-decoration-none text-dark"},{default:f(()=>[x(p(o.post.user.name),1)]),_:1},8,["to"]),t("span",tt,[t("small",null,p(s.timeAgo(o.post.created_at)),1),t("small",null,p(),1)])]),t("div",et,[ot,i(s.PostMenu,{"post-id":o.post.id},null,8,["post-id"])])]),t("p",st,p(o.post.simple_post.description),1),t("div",at,[i(s.ImagePreloader,{aspect:o.post.simple_post.image.aspect_ratio,option:"url_lg",image:o.post.simple_post.image,class:"rounded-5 w-100 shadow-sm"},null,8,["aspect","image"]),t("div",{class:"position-absolute top-0 start-0 end-0 bottom-0",onClick:r[0]||(r[0]=(...d)=>a.clickHandler&&a.clickHandler(...d))})]),i(s.ReactAndCommentButtons,{id:o.post.id,"my-reaction":c.my_reaction,"reactions-count":c.reactions_count,"comments-count":c.comments_count,onReact:a.react},null,8,["id","my-reaction","reactions-count","comments-count","onReact"]),i(s.BestComments,{"post-id":o.post.id,"best-comments":o.post.best_comments,onContadorActualizado:a.contadorActualizado},null,8,["post-id","best-comments","onContadorActualizado"])])])}var O=u(W,[["render",nt],["__scopeId","data-v-2de623c6"]]);const ct={components:{UserToFollowItem:z},data(){return{}},mounted(){}},it=Object.assign(ct,{async setup(e,{expose:r}){r();let o,s;const c=m();let a=null;[o,s]=S(()=>C(`${c.backendUrl}/api/users`).then(d=>{a=d.data.data}).catch(d=>{})),await o,s();const n={mainStore:c,users:a,UserToFollowItem:z,useMainStore:m};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),rt=e=>(b("data-v-fe9c3886"),e=e(),v(),e),lt=rt(()=>t("h4",null,[t("strong",null,"Usuarios que podr\xEDan interesarte")],-1)),dt={class:"card shadow-sm mb-3"},_t={class:"card-body"};function mt(e,r,o,s,c,a){return l(),_(h,null,[lt,t("div",dt,[t("div",_t,[(l(!0),_(h,null,k(s.users,n=>(l(),y(s.UserToFollowItem,{class:"user-item",key:n.id,user:n},null,8,["user"]))),128))])])],64)}var j=u(it,[["render",mt],["__scopeId","data-v-fe9c3886"]]);const ut={components:{ImagePreloader:w},props:{pet:Object}},pt=e=>(b("data-v-be617f26"),e=e(),v(),e),ht={class:"row"},ft={class:"col-auto"},bt={class:"col"},vt=pt(()=>t("br",null,null,-1)),wt={class:"text-muted"};function gt(e,r,o,s,c,a){const n=g("ImagePreloader"),d=$;return l(),_("div",ht,[t("div",ft,[i(d,{to:"/pets/"+o.pet.slug},{default:f(()=>[i(n,{image:o.pet.image,class:"pet-item-img shadow",aspect:"1"},null,8,["image"])]),_:1},8,["to"])]),t("div",bt,[i(d,{to:"/pets/"+o.pet.slug,class:"text-decoration-none"},{default:f(()=>[x(p(o.pet.name),1)]),_:1},8,["to"]),vt,t("small",wt,p(o.pet.nickname),1)])])}var L=u(ut,[["render",gt],["__scopeId","data-v-be617f26"]]);const xt={components:{PetToSeeItem:L}},St=Object.assign(xt,{async setup(e,{expose:r}){r();let o,s;const c=m();let a=null;[o,s]=S(()=>C(`${c.backendUrl}/api/pets`).then(d=>{a=d.data.data}).catch(d=>{})),await o,s();const n={mainStore:c,pets:a,PetToSeeItem:L,useMainStore:m};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),kt=e=>(b("data-v-5f99d5f1"),e=e(),v(),e),yt=kt(()=>t("h4",null,[t("strong",null,"Gatos que podr\xEDan gustarte")],-1)),$t={class:"card shadow-sm mb-3"},Ct={class:"card-body"};function Tt(e,r,o,s,c,a){return l(),_(h,null,[yt,t("div",$t,[t("div",Ct,[(l(!0),_(h,null,k(s.pets,n=>(l(),y(s.PetToSeeItem,{class:"pet-item",key:n.id,pet:n},null,8,["pet"]))),128))])])],64)}var M=u(St,[["render",Tt],["__scopeId","data-v-5f99d5f1"]]);const It={data(){var e;return{scrollPos:0,maxTop:(e=this.top)!=null?e:0,minTop:0,topScroll:0,sizeObserver:null}},props:["top"],mounted(){window.addEventListener("scroll",this.onScroll),this.sizeObserver=new ResizeObserver(this.calcMinTop),this.sizeObserver.observe(this.$refs.col)},unmounted(){window.removeEventListener("scroll",this.onScroll),this.sizeObserver.disconnect()},methods:{onScroll(){if(this.$refs.col.clientHeight+this.maxTop>window.innerHeight){const e=document.documentElement.scrollTop-this.scrollPos;e>0?(this.topScroll-=e,this.topScroll<this.minTop&&(this.topScroll=this.minTop)):(this.topScroll-=e,this.topScroll>this.maxTop&&(this.topScroll=this.maxTop))}else this.topScroll=this.maxTop;this.$refs.col.style.top=`${this.topScroll}px`,this.scrollPos=document.documentElement.scrollTop},calcMinTop(){this.minTop=window.innerHeight-this.$refs.col.clientHeight}}},Pt={ref:"col",style:{"align-self":"flex-start",position:"sticky"}};function zt(e,r,o,s,c,a){return l(),_("div",Pt,[U(e.$slots,"default")],512)}var H=u(It,[["render",zt]]);const At={components:{SimplePostComponent:O,ImagePreloader:w,UserToFollowList:j,PetToSeeList:M,StickyMiddleColumn:H},data(){return{}},mounted(){}},Ot=Object.assign(At,{async setup(e,{expose:r}){r();let o,s;const c=m();[o,s]=S(()=>c.loadPosts()),await o,s();const a={mainStore:c,SimplePostComponent:O,ImagePreloader:w,UserToFollowList:j,PetToSeeList:M,StickyMiddleColumn:H,useMainStore:m};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),jt={class:"row g-0"},Lt={class:"col-12 col-md-8"},Mt={style:{"max-width":"500px",margin:"auto"}},Ht=t("strong",null,"Ideas para publicar",-1),Bt={class:"card shadow-sm mb-3"},Nt={class:"card-body"},Ut=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Ft=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),qt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Gt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Rt=t("h4",null,[t("strong",null,"A\xFAn no sigues a estos gatos")],-1),Et={class:"card shadow-sm mb-3"},Vt={class:"card-body"},Dt=t("h5",{class:"card-title fw-bold"}," Gato dormido ",-1),Wt=t("p",{class:"card-text"}," Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) ",-1),Jt=t("a",{href:"#",class:"btn btn-primary mt-2"},"Ver publicaciones",-1),Kt=t("hr",{class:"mx-3",style:{"border-top":"2px dashed","background-color":"transparent"}},null,-1),Qt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),Xt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1),Yt=t("div",{class:"card shadow-sm mb-3"},[t("div",{class:"card-body"},[t("h5",{class:"card-title"}," Card title "),t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. "),t("a",{href:"#",class:"btn btn-primary"},"Go somewhere")])],-1);function Zt(e,r,o,s,c,a){const n=g("router-view");return l(),_("div",jt,[t("div",Lt,[t("div",Mt,[i(n),(l(!0),_(h,null,k(s.mainStore.posts,d=>(l(),y(s.SimplePostComponent,{post:d,key:d.id},null,8,["post"]))),128))])]),i(s.StickyMiddleColumn,{top:"80",class:"col-12 col-md-4",style:{"max-width":"100%"}},{default:f(()=>[i(s.UserToFollowList),i(s.PetToSeeList),t("h4",null,[Ht,x(" "+p(s.mainStore.state),1)]),t("div",Bt,[t("div",Nt,[Ut,Ft,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),qt])]),Gt,Rt,t("div",Et,[t("div",Vt,[Dt,Wt,i(s.ImagePreloader,{image:"/img/samples/s1.jpg",aspect:2,class:"rounded-5 w-100 shadow-sm"},null,8,["image"]),Jt])]),Kt,Qt,Xt,Yt]),_:1})])}var te=u(Ot,[["render",Zt]]);const ee={components:{HomeComponent:te}},oe=x(" bienvenido ");function se(e,r,o,s,c,a){const n=g("HomeComponent");return l(),_("div",null,[oe,i(n)])}var re=u(ee,[["render",se]]);export{re as default};