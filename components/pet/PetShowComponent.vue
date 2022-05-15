<template>
    <div class="row g-3">
        <div class="col-12 col-md-8 order-2 order-md-1 pb-5">
            <div
                ref="petRow"
                class="row g-2"
                id="pet-posts">
                <div
                    class="col-6 col-sm-4"
                    v-for="p in posts"
                    :key="p.id">
                    <PostThumbnail :post="p" />
                </div>
            </div>
        </div>
        <StickyMiddleColumn
            top="80"
            class="col-12 col-md-4 order-1 order-md-2">
            <div class="card">
                <div class="card-body text-center">
                    <img
                        :src="pet?.image.url_lg"
                        class="my-3"
                        style="height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        width: 100px;
                        outline: 4px solid #f90;
                          outline-offset: 3px;"
                        alt="">
                    <h2 class="mb-0 fw-bold">
                        {{ pet?.name }}
                    </h2>
                    <p>
                        {{ pet?.nickname }}
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
                    </div>
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <UserToFollowItem
                        v-if="pet"
                        :user="pet.user" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    hola como estan
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    hola como estan
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    hola como estan
                </div>
            </div>
        </StickyMiddleColumn>
    </div>
</template>
<script setup>
let Masonry = Object
if (process.client) {
    Masonry = await import("masonry-layout")
}
</script>
<script>
import { useMainStore } from "~/store/mainStore"
import axios from "axios"
import StickyMiddleColumn from "../StickyMiddleColumn.vue"
import PostThumbnail from "../posts/PostThumbnail.vue"
import UserToFollowItem from "../user/UserToFollowItem.vue"

export default {
    components: {
        StickyMiddleColumn,
        PostThumbnail,
        UserToFollowItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            pet: null,
            posts: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pets/${this.$route.params.slug}`)
            .then(response => {
                this.pet = response.data.data
            })
        axios.get(`${this.mainStore.backendUrl}/api/posts`)
            .then(response => {
                this.posts = response.data.data
            }).then(() => {
                const msnry = new Masonry("#pet-posts", {
                    percentPosition: true,
                })
                msnry.reloadItems()
                msnry.layout()
            })
    },
}
</script>
