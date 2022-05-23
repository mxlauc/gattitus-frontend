<template>
    <div class="row mx-0 g-3">
        <div class="col-12 col-md-8 order-2 order-md-1 pb-5">
            <div
                ref="petRow"
                class="row mx-0 g-2"
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
            :top="80"
            class="col-12 col-md-4 order-1 order-md-2">
            <div class="card shadow-sm">
                <div class="card-body text-center">
                    <img
                        :src="pet?.image.url_lg"
                        class="my-3"
                        style="height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        width: 100px;"
                        alt="">
                    <h2 class="mb-0 fw-bold">
                        {{ pet?.name }}
                    </h2>
                    <p>
                        {{ pet?.nickname }}
                    </p>
                    <NuxtLink
                        :to="'/pets/' + pet?.slug + '/edit'"
                        class="btn btn-primary">
                        Editar
                    </NuxtLink>
                </div>
            </div>

            <div class="card shadow-sm mt-3">
                <div class="card-body">
                    <UserToFollowItem
                        v-if="pet"
                        :user="pet.user" />
                </div>
            </div>
        </StickyMiddleColumn>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()

let Masonry = Object
if (process.client) {
    Masonry = (await import("masonry-layout")).default
}

</script>
<script>

import axios from "axios"
import StickyMiddleColumn from "~/components/StickyMiddleColumn.vue"
import PostThumbnail from "~/components/posts/PostThumbnail.vue"
import UserToFollowItem from "~/components/user/UserToFollowItem.vue"

export default {
    components: {
        StickyMiddleColumn,
        PostThumbnail,
        UserToFollowItem,
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
                const msnry = new this.Masonry("#pet-posts", {
                    percentPosition: true,
                })
                msnry.reloadItems()
                msnry.layout()
            })
    },
}
</script>
