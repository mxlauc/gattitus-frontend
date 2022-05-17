<template>
    <div class="card card-post shadow-sm f-rubick mb-4">
        <div class="card-body pb-0">
            <div class="row g-0">
                <div class="col-auto">
                    <NuxtLink :to="'/@' + post.user.username">
                        <image-preloader
                            :image="post.user.image"
                            class="img-user-post shadow" />
                    </NuxtLink>
                </div>
                <div class="col px-2">
                    <NuxtLink
                        :to="'/@' + post.user.username"
                        class="name-user-post fw-bold text-decoration-none text-dark">
                        {{ post.user.name }}
                    </NuxtLink>
                    <span
                        class="d-block text-black-50 fs-6"
                        role="button">
                        <small>{{ timeAgo( post.created_at) }}</small>
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
                    <post-menu :post-id="post.id" />
                </div>
            </div>

            <p class="fs-6 mt-1 mb-1 text-muted">
                {{ post.simple_post.description }}
            </p>
            <PetIconList
                v-if="is_mounted && post.pets_count"
                :pets="post.pets"
                :pets-count="post.pets_count" />
            <div class="my-2 position-relative">
                <image-preloader
                    :aspect="post.simple_post.image.aspect_ratio"
                    option="url_lg"
                    :image="post.simple_post.image"
                    class="rounded-5 w-100 shadow-sm" />
                <div
                    class="position-absolute top-0 start-0 end-0 bottom-0"
                    @click="clickHandler" />
            </div>

            <ReactAndCommentButtons
                :id="post.id"
                :my-reaction="my_reaction"
                :reactions-count="reactions_count"
                :comments-count="comments_count"
                @react="react" />

            <BestComments
                :post-id="post.id"
                :best-comments="post.best_comments"
                @contador-actualizado="contadorActualizado" />
        </div>
    </div>
</template>
<script setup>
import { t, timeAgo } from "~/i18n/i18n2"

</script>
<script>

import ImagePreloader from "~/components/images/ImagePreloader.vue"
import PostMenu from "~/components/posts/PostMenu.vue"
import PetIconList from "~/components/posts/PetIconList.vue"
import ReactAndCommentButtons from "~/components/posts/ReactAndCommentButtons.vue"
import BestComments from "~/components/comments/BestComments.vue"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        ImagePreloader,
        PostMenu,
        PetIconList,
        ReactAndCommentButtons,
        BestComments,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            reactions_count: this.post.reactions_count,
            comments_count: this.post.comments_count,
            my_reaction: this.post.my_reaction,
            is_mounted: false,
        }
    },
    mounted () {
        this.is_mounted = true
    },
    props: ["post"],
    provide () {
        return {
            postId: this.post.id,
            clickTimeout: null,
        }
    },
    methods: {
        reactLove () {
            if (!this.my_reaction) {
                this.react()
            }
        },
        react (response) {
            this.my_reaction = response.own_reaction
            this.reactions_count = response.reactions_count
        },
        contadorActualizado (count) {
            this.comments_count = count
        },
        clickHandler () {
            if (this.clickTimeout) {
                clearTimeout(this.clickTimeout)
                this.clickTimeout = null
                this.doubleclick()
            } else {
                this.clickTimeout = setTimeout(() => {
                    this.click()
                    this.clickTimeout = null
                }, 250)
            }
        },
        click () {
            this.$router.push(`/posts/${this.post.id}`)
        },
        doubleclick () {
            this.reactLove()
        },
    },
}
</script>
<style scoped>
.img-user-post {
    width: 40px;
    height: 40px;
    border-radius: 0.8rem;
}

.img-post {
    object-fit: cover;
    height: 100%;
    transition: opacity 0.3s ease-out;
}
.opacity-0 {
    opacity: 0;
}

</style>
