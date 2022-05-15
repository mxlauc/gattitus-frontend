import{_ as v,u as g,o as d,c,b as e,d as h,m as p,F as P,t as u,h as S,a as _,s as z,v as $,k as f,j as I,p as L,q as B,w as x,y as H,f as M,l as j}from"./entry-4a9083cb.mjs";import{I as y}from"./ImagePreloader-b8a0bdfb.mjs";const V={components:{ImagePreloader:y},mounted(){},computed:{saludo(){var o;const s=new Date().getHours(),t=s<12?"Buenos d\xEDas":s<18?"Buenas tardes":"Buenas noches";return`Hola ${(o=this.userLogged)==null?void 0:o.name}, ${t} \u{1F431}`},userLogged(){var s;return(s=this.mainStore)==null?void 0:s.userLogged}},methods:{logout(){_.post(`${this.mainStore.backendUrl}/api/auth/logout`).then(s=>{window.location="/"})},toggleMenu(){document.querySelector("#sidebar").classList.add("show-sidebar"),document.querySelector("#dark").classList.add("show-dark"),document.body.style.overflow="hidden"}}},F=Object.assign(V,{setup(s,{expose:t}){t();const n={mainStore:g(),axios:_,ImagePreloader:y,useMainStore:g};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),l=s=>(z("data-v-688a475f"),s=s(),$(),s),D={class:"py-2 px-0 pe-1 pe-sm-4 container-xxl"},N={class:"row g-0"},O={class:"col-auto d-xl-none"},A=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-list",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})],-1)),E=[A],q={class:"col-auto d-none d-xl-block text-center",style:{width:"260px"}},T=l(()=>e("img",{src:"/img/icons/icon-72x72.png",style:{height:"40px","margin-top":"-10px"}},null,-1)),U=l(()=>e("span",{class:"title"},"Gattitus",-1)),G={class:"col d-none d-lg-block ms-3"},J={class:"fq-bold mb-0 f-fredoka"},K={class:"col-auto ms-auto"},R={key:0},W=l(()=>e("button",{class:"btn btn-primary","data-bs-toggle":"dropdown"}," Crear ",-1)),Q={class:"dropdown-menu shadow"},X=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-file-post",viewBox:"0 0 16 16"},[e("path",{d:"M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z"}),e("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"})],-1)),Y=f(" Publicaci\xF3n "),Z=I('<li data-v-688a475f><hr class="dropdown-divider" data-v-688a475f></li><li data-v-688a475f><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#createPet" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-26 0 512 512" data-v-688a475f><path d="m179.300781 409.507812c-4.710937 0-8.53125 3.820313-8.53125 8.535157v8.53125c-.0625 14.234375 8.753907 26.996093 22.082031 31.980469 13.332032 4.984374 28.359376 1.136718 37.652344-9.640626 9.292969 10.777344 24.316406 14.625 37.648438 9.640626 13.332031-4.984376 22.144531-17.746094 22.082031-31.980469v-8.53125c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535156 3.820313-8.535156 8.535157v8.53125c0 9.425781-7.640625 17.066406-17.066407 17.066406-9.425781 0-17.066406-7.640625-17.066406-17.066406v-27.203125c3.003906-1.105469 5.71875-2.882813 7.9375-5.191406l12.773438-13.65625c4.835937-4.953126 6.210937-12.332032 3.476562-18.695313-3.65625-7.621094-11.480468-12.355469-19.929687-12.054687h-25.582031c-8.449219-.300782-16.269532 4.433593-19.925782 12.054687-2.730468 6.359375-1.363281 13.738281 3.46875 18.695313l12.789063 13.65625c2.214843 2.308593 4.925781 4.085937 7.925781 5.191406v27.203125c0 9.425781-7.640625 17.066406-17.066406 17.066406-9.425782 0-17.066406-7.640625-17.066406-17.066406v-8.53125c0-4.714844-3.820313-8.535157-8.535157-8.535157zm34.125-40.851562c.101563-.398438 1.378907-1.816406 4.285157-1.816406h25.582031c2.910156 0 4.183593 1.417968 3.992187 2.019531l-12.773437 13.652344c-2.390625 1.726562-5.617188 1.726562-8.007813 0zm0 0" data-v-688a475f></path><path d="m122.679688 320.65625c15.1875-5.9375 27.273437-6.640625 35.949218-2.054688 6.050782 3.484376 10.488282 9.214844 12.339844 15.949219 1.074219 4.523438 5.570312 7.355469 10.113281 6.367188 4.542969-.984375 7.460938-5.429688 6.5625-9.988281-2.914062-11.539063-10.410156-21.390626-20.757812-27.265626-13.277344-7.144531-30.234375-6.777343-50.425781 1.09375-4.390626 1.71875-6.558594 6.667969-4.84375 11.058594 1.71875 4.390625 6.667968 6.558594 11.0625 4.839844zm0 0" data-v-688a475f></path><path d="m271.386719 341.054688c2.210937.46875 4.523437.042968 6.421875-1.1875 1.898437-1.234376 3.230468-3.171876 3.703125-5.382813 1.824219-6.660156 6.195312-12.332031 12.164062-15.796875 8.675781-4.675781 20.828125-4.003906 36.117188 1.960938 4.390625 1.71875 9.34375-.449219 11.058593-4.839844 1.71875-4.390625-.449218-9.34375-4.839843-11.058594-20.183594-7.875-37.144531-8.242188-50.425781-1.097656-10.347657 5.878906-17.847657 15.730468-20.757813 27.269531-.476563 2.210937-.050781 4.523437 1.175781 6.425781 1.230469 1.898438 3.167969 3.234375 5.382813 3.707032zm0 0" data-v-688a475f></path><path d="m8.636719 332.707031c7.765625.007813 15.527343.496094 23.234375 1.457031-4.011719 13.371094-6.089844 27.25-6.167969 41.210938v.074219c-7.691406 2.269531-15.027344 5.601562-21.800781 9.890625-2.566406 1.679687-4.035156 4.605468-3.8476565 7.667968.1875005 3.0625 2.0039065 5.785157 4.7578125 7.136719 2.753906 1.351563 6.019531 1.121094 8.558594-.601562 4.289062-2.742188 8.894531-4.960938 13.714844-6.609375 1.496093 10.363281 4.464843 20.460937 8.820312 29.984375-15.800781 10.359375-25.878906 27.480469-27.269531 46.324219 0 26.316406 26.15625 42.664062 68.265625 42.664062 18.992187 1.167969 37.859375-3.804688 53.808594-14.179688 32.359374 9.742188 66.003906 14.523438 99.792968 14.179688 33.789063.34375 67.433594-4.4375 99.789063-14.179688 15.949219 10.375 34.816406 15.347657 53.808593 14.179688 42.109376 0 68.265626-16.347656 68.265626-42.664062-1.386719-18.84375-11.46875-35.964844-27.269532-46.324219 4.355469-9.523438 7.324219-19.621094 8.820313-29.984375 4.820312 1.648437 9.425781 3.867187 13.71875 6.609375 2.535156 1.722656 5.800781 1.953125 8.554687.601562 2.753906-1.351562 4.570313-4.074219 4.761719-7.136719.1875-3.0625-1.28125-5.988281-3.851563-7.667968-6.773437-4.289063-14.109374-7.621094-21.800781-9.890625v-.074219c-.074219-13.960938-2.152343-27.839844-6.167969-41.210938 7.707032-.960937 15.46875-1.445312 23.234376-1.457031 4.714843 0 8.535156-3.820312 8.535156-8.53125 0-4.714843-3.820313-8.535156-8.535156-8.535156-9.738282.003906-19.464844.691406-29.109376 2.054687-3.585937-8.792968-7.832031-17.304687-12.695312-25.460937 5.613281-18.222656 27.605469-94.890625 8.648438-121.035156-4.027344-5.832031-10.699219-9.265625-17.785157-9.15625-12.707031.96875-25.0625 4.632812-36.242187 10.75-21.832032-30.859375-60.328125-52.539063-104.207032-59.503907-.144531-11.625-1.605468-23.195312-4.351562-34.496093-1.914062-9.46875 1.597656-19.21875 9.109375-25.296875 10.644531-7.171875 28.027344 3.925781 35 9.023437 7.382813 5.480469 17.132813 6.582031 25.550781 2.886719 8.417969-3.691406 14.210938-11.617188 15.171875-20.761719.964844-9.140625-3.050781-18.097656-10.511719-23.464843-46.835937-34.277344-81.144531-18.617188-93.777343-10.257813-25.328125 18.0625-37.265625 49.621094-30.230469 79.925781 1.695312 6.921875 2.679688 13.996094 2.929688 21.117188-47.957032 5.085937-90.621094 27.640625-114.027344 60.769531-11.109375-6.070313-23.382813-9.714844-36.003906-10.691406-7.097657-.109375-13.785157 3.332031-17.824219 9.167969-18.882813 26.035156 3 102.480468 8.597656 120.675781-4.9375 8.261719-9.242187 16.886719-12.875 25.800781-9.640625-1.359375-19.363281-2.042969-29.097656-2.046875-4.714844 0-8.535157 3.820313-8.535157 8.535156 0 4.710938 3.820313 8.53125 8.535157 8.53125zm17.066406 136.535157c0-19.207032 23.625-42.667969 51.199219-42.667969 27.574218 0 51.199218 23.460937 51.199218 42.667969 0 12.421874-11.476562 19.554687-26.363281 23 .488281-1.941407.746094-3.933594.765625-5.933594v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820312 8.53125-8.535156 8.53125-4.710938 0-8.535156-3.820313-8.535156-8.53125v-17.066406c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535157 3.820313-8.535157 8.535157v17.066406c.019531 2 .277344 3.992187.765625 5.933594-14.886718-3.445313-26.363281-10.578126-26.363281-23zm409.597656 0c0 12.421874-11.476562 19.554687-26.359375 23 .484375-1.941407.742188-3.933594.761719-5.933594v-17.066406c0-4.714844-3.820313-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820313 8.53125-8.535157 8.53125-4.710937 0-8.53125-3.820313-8.53125-8.53125v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157v17.066406c.019532 2 .273438 3.992187.761719 5.933594-14.886719-3.445313-26.363281-10.578126-26.363281-23 0-19.207032 23.625-42.667969 51.199218-42.667969 27.574219 0 51.199219 23.46875 51.199219 42.667969zm-211.789062-382.457032c-5.480469-23.34375 3.652343-47.691406 23.132812-61.667968 11.925781-7.886719 37.40625-17.109376 74.226563 9.839843 2.460937 1.800781 3.777344 4.773438 3.449218 7.808594-.324218 3.03125-2.246093 5.65625-5.035156 6.890625-2.785156 1.234375-6.023437.882812-8.484375-.914062-21.191406-15.496094-40.574219-18.835938-54.566406-9.425782-13.460937 10.074219-19.792969 27.089844-16.191406 43.511719 2.292969 9.347656 3.59375 18.910156 3.890625 28.527344-4.449219-.304688-8.917969-.515625-13.429688-.515625-1.210937 0-2.40625.082031-3.613281.105468-.308594-8.148437-1.441406-16.242187-3.378906-24.160156zm6.992187 41.121094c49.746094 0 95.496094 20.542969 119.476563 52.949219-11.4375 6.472656-24.058594 14.488281-38.035157 24.285156-51.75-23.210937-110.941406-23.238281-162.710937-.074219-14.046875-9.800781-26.714844-17.816406-38.171875-24.28125 23.917969-32.363281 69.648438-52.878906 119.441406-52.878906zm-162.476562 162.476562c-15.640625-47.894531-21.117188-96.851562-12.203125-109.148437.839843-1.402344 2.382812-2.21875 4.011719-2.125 12.175781 1.351563 23.898437 5.394531 34.316406 11.832031.074218.046875.109375.121094.183594.167969.277343.136719.5625.257813.851562.363281 16.710938 9.0625 32.8125 19.203125 48.203125 30.355469 2.511719 1.78125 5.785156 2.070313 8.566406.753906 49.726563-23.75 107.53125-23.722656 157.234375.074219 2.792969 1.332031 6.089844 1.046875 8.609375-.753906 38.21875-27.195313 68.703125-42.792969 83.625-42.792969 1.609375-.089844 3.136719.722656 3.964844 2.105469 8.960937 12.359375 3.460937 61.480468-12.25 109.5-.789063 2.40625-.46875 5.035156.875 7.179687 4.585937 7.355469 8.617187 15.039063 12.070313 22.984375-18.8125 3.929688-36.703126 11.421875-52.703126 22.070313-3.675781 2.851562-4.386718 8.121093-1.601562 11.847656s8.042969 4.535156 11.816406 1.816406c14.824219-9.511719 31.304688-16.148437 48.582032-19.566406 3.449218 11.046875 5.425781 22.503906 5.878906 34.070313-14.015625-2.644532-28.230469-4.074219-42.488282-4.277344-4.714843 0-8.535156 3.820312-8.535156 8.535156 0 4.710938 3.820313 8.53125 8.535156 8.53125 14.054688.25 28.0625 1.746094 41.851563 4.46875-1.128906 9.066406-3.578125 17.917969-7.269531 26.277344-8.269532-3.382813-17.117188-5.128906-26.050782-5.144532-38.449218 0-68.265624 32.109376-68.265624 59.734376-.03125 4.886718.972656 9.726562 2.941406 14.203124-28.761719 7.832032-58.464844 11.667969-88.273438 11.394532-29.808594.273437-59.511718-3.5625-88.277344-11.394532 1.96875-4.476562 2.972657-9.316406 2.941407-14.203124 0-27.625-29.816407-59.734376-68.265625-59.734376-8.933594.015626-17.78125 1.761719-26.050782 5.144532-3.691406-8.359375-6.140624-17.210938-7.269531-26.277344 13.792969-2.722656 27.796875-4.21875 41.855469-4.46875 4.710938 0 8.53125-3.820312 8.53125-8.53125 0-4.714844-3.820312-8.535156-8.53125-8.535156-14.261719.203125-28.480469 1.632812-42.492188 4.277344.449219-11.5625 2.425782-23.019532 5.875-34.066407 17.277344 3.414063 33.757813 10.050781 48.582032 19.5625 3.773437 2.714844 9.03125 1.910157 11.816406-1.816406 2.789062-3.722656 2.078125-8.996094-1.597656-11.847656-16.003906-10.652344-33.894532-18.144531-52.714844-22.074219 3.496094-8.066406 7.589844-15.863281 12.25-23.316406 1.339844-2.144532 1.660156-4.773438.871094-7.175782zm0 0" data-v-688a475f></path></svg> Gato </a></li><li data-v-688a475f><a class="dropdown-item" href="/editor" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-688a475f><path d="M7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" data-v-688a475f></path><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" data-v-688a475f></path></svg> Art\xEDculo </a></li>',3),e1={class:"fw-bold ms-3 me-2 d-none d-sm-inline-block"},t1=l(()=>e("span",{"data-bs-toggle":"dropdown","aria-expanded":"false",class:"rounded-3 p-3 more-options"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-down-fill",viewBox:"0 0 16 16"},[e("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})])],-1)),a1={class:"dropdown-menu shadow"},s1=l(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Action")],-1)),o1=l(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Another action")],-1)),r1=l(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Something else here")],-1)),n1=l(()=>e("li",null,[e("hr",{class:"dropdown-divider"})],-1)),l1=["href"];function i1(s,t,o,n,i,a){var b;const r=L;return d(),c("div",D,[e("div",N,[e("div",O,[e("span",{onClick:t[0]||(t[0]=(...m)=>a.toggleMenu&&a.toggleMenu(...m)),class:"d-inline-block py-2 px-3"},E)]),e("div",q,[h(r,{to:"/",class:"text-decoration-none fw-bold text-black d-inline-block",style:{"font-size":"30px","margin-top":"4px"}},{default:p(()=>[T,U]),_:1})]),e("div",G,[a.userLogged?(d(),c(P,{key:0},[e("h5",J,u(a.saludo),1),e("span",null,u(s.$t("todayThereIsNewPosts")),1)],64)):S("",!0)]),e("div",K,[a.userLogged?(d(),c("div",R,[W,e("ul",Q,[e("li",null,[h(r,{to:"/posts/create",class:"dropdown-item"},{default:p(()=>[X,Y]),_:1})]),Z]),h(r,{to:"/@"+((b=a.userLogged)==null?void 0:b.username),class:"d-inline-block text-decoration-none text-dark btn-user-url"},{default:p(()=>{var m,w;return[e("span",e1,u((m=a.userLogged)==null?void 0:m.name),1),h(n.ImagePreloader,{image:(w=a.userLogged)==null?void 0:w.image,class:"user-img-small"},null,8,["image"])]}),_:1},8,["to"]),t1,e("ul",a1,[s1,o1,r1,n1,e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=(...m)=>a.logout&&a.logout(...m))},"Cerrar sesi\xF3n")])])])):(d(),c("a",{key:1,href:n.mainStore.backendUrl+"/auth/login/facebook",class:"btn btn-primary"}," Iniciar sesi\xF3n",8,l1))])])])}var k=v(F,[["render",i1],["__scopeId","data-v-688a475f"]]);const d1={setup(){return{mainStore:g()}},data(){return{imagenPreview:null,textareaLength:0,imageId:null}},mounted(){},computed:{disableButton(){return!this.imagenPreview&&!this.textareaLength}},emits:["postCreated"],methods:{keyup(s){this.textareaLength=this.$refs.textarea.value.trim().length},enviarFormulario(s){s.preventDefault();const t=new FormData(this.$refs.formCrear);t.append("image_id",this.imageId),_.post(`${this.mainStore.backendUrl}/api/pets`,t).then(o=>{console.log(o.data),this.$refs.formCrear.reset(),this.imageId=null,this.textareaLength=0,this.imagenPreview=null}).catch(o=>{console.log(o)})},ocultarModal(){this.imagenPreview=null,this.$refs.formCrear.reset()},mostrarPreview(s){const t=new FormData;t.append("file",s.target.files[0]),_.post(`${this.mainStore.backendUrl}/api/images`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{console.log(o.data.url),this.imagenPreview=o.data.url,this.imageId=o.data.imageId}).catch(o=>{console.log(o)})},borrarImagen(){this.$refs.formCrear.imagePet.value="",this.imagenPreview=null}}},c1={class:"modal fade",id:"createPet",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false","aria-hidden":"true"},m1={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},h1={class:"modal-content",style:{"box-shadow":"2px 2px 8px rgba(0, 0, 0, 0.1)"}},u1=e("div",{class:"modal-header"},[e("h5",{class:"modal-title"}," Create cat "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_1={class:"modal-body"},p1={class:"row gy-3"},g1={class:"col-sm-5"},v1=e("span",{class:"d-block form-label"},"Foto",-1),f1={key:0,class:"position-relative"},b1=["src"],w1={key:1,for:"imagePet",class:"form-control",tabindex:"0",role:"button",style:{"aspect-ratio":"1",display:"flex","align-items":"center","justify-content":"center"}},x1=e("img",{src:"https://img.icons8.com/cotton/2x/image-file-add--v2.png",style:{height:"20px"}},null,-1),y1=f(" Add image "),k1=[x1,y1],C1={class:"col-sm-7"},P1=e("div",{class:"mb-3"},[e("label",{class:"form-label"},"Nombre"),e("input",{type:"text",class:"form-control",placeholder:"Ejemplo: El se\xF1or Bigotes",name:"name"})],-1),S1=e("label",{class:"form-label"},"Apodo (Opcional)",-1),z1={class:"modal-footer"},$1=["disabled"];function I1(s,t,o,n,i,a){return d(),c("div",null,[e("div",c1,[e("div",m1,[e("div",h1,[u1,e("div",_1,[e("div",null,[e("form",{action:"/",onSubmit:t[3]||(t[3]=B((...r)=>a.enviarFormulario&&a.enviarFormulario(...r),["prevent"])),ref:"formCrear",method:"POST"},[e("div",p1,[e("div",g1,[v1,i.imagenPreview?(d(),c("div",f1,[e("img",{src:i.imagenPreview,class:"w-100 rounded-3",style:{"aspect-ratio":"1"}},null,8,b1),e("button",{type:"button",class:"btn-close bg-white shadow position-absolute top-0 end-0 m-3 p-2 rounded-circle","aria-label":"Close",onClick:t[0]||(t[0]=(...r)=>a.borrarImagen&&a.borrarImagen(...r))})])):(d(),c("label",w1,k1))]),e("div",C1,[P1,e("div",null,[S1,e("textarea",{class:"form-control",name:"nickname",style:{height:"100px"},ref:"textarea",onKeyup:t[1]||(t[1]=(...r)=>a.keyup&&a.keyup(...r)),placeholder:"Ejemplo: El que me pide comida a las 5 de la ma\xF1ana"},null,544)])])]),e("input",{type:"file",id:"imagePet",class:"d-none",accept:"image/png, image/jpeg",onChange:t[2]||(t[2]=(...r)=>a.mostrarPreview&&a.mostrarPreview(...r))},null,32)],544)])]),e("div",z1,[e("button",{type:"button",class:"btn btn-primary w-100 mt-2",disabled:a.disableButton,onClick:t[4]||(t[4]=(...r)=>a.enviarFormulario&&a.enviarFormulario(...r))}," Publish ",8,$1)])])])])])}var C=v(d1,[["render",I1]]);const L1={components:{HeaderComponent:k,CreatePetComponent:C},mounted(){},methods:{hideDrawer(){this.$refs.sidebar.classList.remove("show-sidebar"),this.$refs.dark.classList.remove("show-dark"),document.body.style.overflow="auto"}}},B1=Object.assign(L1,{async setup(s,{expose:t}){t();let o,n,i="consultando";[o,n]=x(()=>M("https://api.donotify.com/sanctum/csrf-cookie").then(r=>{i=r}).catch(r=>{i="error es: "+JSON.stringify(r)})),await o,n(),[o,n]=x(()=>j(()=>import("./bootstrap.esm-e55f88cc.mjs"),[])),await o,n();const a={mensaje:i,HeaderComponent:k,CreatePetComponent:C};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function H1(s,t,o,n,i,a){return d(),c("div",null,[f(" hola layout mensaje: "+u(n.mensaje)+" ",1),H(s.$slots,"default")])}var V1=v(B1,[["render",H1]]);export{V1 as default};
