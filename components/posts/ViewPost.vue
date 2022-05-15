<template>
    <div class="row">
        <div class="col-7">
            <ImagePreloader
                :aspect="post?.simple_post.aspect_ratio"
                :image="post?.simple_post.image"
                option="url_xl"
                object-fit="contain"
                style="width: 100%; height: 600px; display: block;"
                class="rounded-5 w-100 shadow-sm" />
        </div>
        <div class="col-5">
            <div
                class="card shadow-sm"
                style="height: calc(100vh - 120px); ">
                <div
                    class="card-body p-0 container-x">
                    <div class="row g-0 p-3 pb-0">
                        <div class="col-auto">
                            <NuxtLink :to="'/@' + post?.user.username">
                                <image-preloader
                                    :image="post?.user.image"
                                    class="img-user-post shadow" />
                            </NuxtLink>
                        </div>
                        <div class="col px-2">
                            <NuxtLink
                                :to="'/@' + post?.user.username"
                                class="name-user-post fw-bold text-decoration-none text-dark">
                                {{ post?.user.name }}
                            </NuxtLink>
                            <span
                                class="d-block text-black-50 fs-6"
                                role="button">
                                <small>{{ $t("timeAgo", {date: post?.created_at}) }}</small>
                            </span>
                        </div>
                        <div class="col-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.055 32.055"
                                width="20"
                                height="20"
                                class="text-black-50"
                                fill="currentColor"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <path
                                    d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                            </svg>
                            <post-menu :post-id="post?.id" />
                        </div>
                    </div>

                    <p class="fs-6 mt-1 mb-1 mx-3 text-muted">
                        {{ post?.simple_post.description }}
                    </p>
                    <PetIconList
                        v-if="post?.pets_count"
                        :pets="post.pets"
                        :pets-count="post.pets_count"
                        class="px-3" />

                    <ReactAndCommentButtons
                        v-if="post"
                        :id="post.id"
                        :my-reaction="my_reaction"
                        :reactions-count="reactions_count"
                        :comments-count="comments_count"
                        @react="react" />
                    <seccion-comentarios-component
                        v-if="post"
                        :post-id="post.id"
                        @contador-actualizado="contadorActualizado"
                        style="flex-grow: 1; overflow: hidden;" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()
const route = useRoute()

let post = null;
let my_reaction = null;
let reactions_count = null;
let comments_count = null;

let result = await fetchWithCookie(`${mainStore.backendUrl}/api/posts/${route.params.id}`)

post = result.data
my_reaction = post.my_reaction
reactions_count = post.reactions_count
comments_count = post.comments_count

</script>
<script>
import SeccionComentariosComponent from "~/components/comments/SeccionComentariosComponent.vue"
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import PetIconList from "~/components/posts/PetIconList.vue"
import PostMenu from "~/components/posts/PostMenu.vue"
import ReactAndCommentButtons from "~/components/posts/ReactAndCommentButtons.vue"


export default {
    components: {
        SeccionComentariosComponent,
        ImagePreloader,
        PetIconList,
        PostMenu,
        ReactAndCommentButtons,
    },
    data () {
        return {
            
        }
    },
    methods: {
        contadorActualizado (count) {
            this.comments_count = count
        },
        back () {
            this.$router.replace("/")
        },
        react (response) {
            this.my_reaction = response.own_reaction
            this.reactions_count = response.reactions_count
        }
    }
}
</script>
<style scoped>
.img-user-post {
    width: 40px;
    height: 40px;
    border-radius: 0.8rem;
}

.container-x {
    height: 100%;
  display: flex;
  flex-direction: column;
}

.flex-fitcontents {
  background-color: blue;
}

.flex-fillremaining {
    flex: 1;
    overflow: hidden;
    background-color: red;
}

.flex-fillparent {
    height: 90%;
  background-color: green;
}
</style>
