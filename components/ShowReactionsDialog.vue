<template>
    <CustomModal
        :hide-buttons="true"
        @cancel="$emit('close')">
        <template #title>
            Reacciones
        </template>
        <div
            class="v-simple-infinite-scroll-container custom-scroll"
            style="max-height:60vh; overflow-y: auto; overflow-x: hidden;">
            <VSimpleInfiniteScroll
                @load="loadMore">
                <div
                    v-for="r in reactions"
                    :key="r.id"
                    class="my-2">
                    <div class="row g-2">
                        <div class="col-auto">
                            <NuxtLink
                                :to="r.user.url"
                                role="button">
                                <ImagePreloader
                                    :image="r.user.image"
                                    class="shadow rounded-5"
                                    :aspect="1"
                                    style="width: 40px;" />
                            </NuxtLink>
                        </div>
                        <div class="col">
                            <NuxtLink
                                :to="r.user.url"
                                class="text-decoration-none text-dark"
                                role="button">
                                {{ r.user.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </VSimpleInfiniteScroll>
        </div>
    </CustomModal>
</template>
<script>
import CustomModal from "~/components/CustomModal.vue"
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import VSimpleInfiniteScroll from "./VSimpleInfiniteScroll.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        CustomModal,
        ImagePreloader,
        VSimpleInfiniteScroll,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            reactions: [],
            reactionsPaginator: null,
        }
    },
    props: ["url"],
    emits: ["close"],
    mounted () {
        this.getReactions(this.url)
    },
    methods: {
        loadMore (scroll) {
            if (!this.reactionsPaginator) {
                scroll.loaded()
                return
            }
            if (!this.reactionsPaginator.next) {
                scroll.complete()
                return
            }
            this.getReactions(this.reactionsPaginator.next)
                .then(() => {
                    scroll.loaded()
                })
        },
        getReactions (url) {
            return axios.get(`${url}`)
                .then(response => {
                    this.reactionsPaginator = response.data.links
                    this.reactions = this.reactions.concat(response.data.data)
                })
        }
    }
}
</script>
