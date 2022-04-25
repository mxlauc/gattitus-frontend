<template>
    <div class="row g-3">
        <div class="col-12 col-md-8 order-2 order-md-1">
            <div
                ref="catRow"
                class="row g-2"
                id="cat-posts">
                <div
                    class="col-6 col-sm-4"
                    v-for="p in posts"
                    :key="p.id">
                    <ImagePreloader
                        :image="p.simple_post.image"
                        class="cat-post-img"
                        :width="'100%'"
                        :aspect="p.simple_post.image.meta_data.aspect_ratio" />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 order-1 order-md-2">
            <div class="card">
                <div class="card-body text-center">
                    <img
                        :src="cat?.image.url_lg"
                        class="my-3"
                        style="height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        width: 100px;
                        outline: 4px solid #f90;
                          outline-offset: 3px;"
                        alt="">
                    <h2 class="mb-0 fw-bold">
                        {{ cat?.name }}
                    </h2>
                    <p>
                        {{ cat?.nickname }}
                    </p>
                    <div class="row g-3">
                        <div class="col-6 text-start">
                            <div class="row">
                                <div class="col-auto">
                                    <h2>👨‍⚕️</h2>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">
                                        Esterilización
                                    </h6>
                                    <h5 class="mb-0 fw-bold">
                                        Hace dos días
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 text-start">
                            <div class="row">
                                <div class="col-auto">
                                    <h2>🐈</h2>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">
                                        Esterilización
                                    </h6>
                                    <h5 class="mb-0 fw-bold">
                                        Hace dos días
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 text-start">
                            <div class="row">
                                <div class="col-auto">
                                    <h2>👨‍⚕️</h2>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">
                                        Esterilización
                                    </h6>
                                    <h5 class="mb-0 fw-bold">
                                        Hace dos días
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 text-start">
                            <div class="row">
                                <div class="col-auto">
                                    <h2>👨‍⚕️</h2>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">
                                        Esterilización
                                    </h6>
                                    <h5 class="mb-0 fw-bold">
                                        Hace dos días
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Masonry from "masonry-layout"
import { useMainStore } from "@/stores/mainStore"
import axios from "axios"
import ImagePreloader from "../ImagePreloader.vue"

export default {
    components: {
        ImagePreloader,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            cat: null,
            posts: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/cats/${this.$route.params.slug}`)
            .then(response => {
                this.cat = response.data.data
            })
        axios.get(`${this.mainStore.backendUrl}/api/posts`)
            .then(response => {
                this.posts = response.data.data
            }).then(() => {
                const msnry = new Masonry("#cat-posts", {
                    percentPosition: true,
                })
                msnry.reloadItems()
                msnry.layout()
            })
    },
}
</script>
<style scoped>
.cat-post-img{
    border-radius: 6px;
}
</style>
