<template>
    <CustomModal
        :hide-buttons="true"
        @cancel="$emit('close')">
        <template #title>
            Reacciones
        </template>
        <div
            style="max-height:80vh; overflow-y: auto;"
            class="custom-scroll"
            ref="scroller">
            <div
                v-for="r in reactions"
                :key="r.id"
                class="my-1">
                <NuxtLink
                    :to="r.user.url"
                    role="button">
                    <ImagePreloader
                        :image="r.user.image"
                        class="shadow rounded-5"
                        :aspect="1"
                        style="width: 40px;" />
                </NuxtLink>

                <NuxtLink
                    :to="r.user.url"
                    class="text-decoration-none text-dark ms-2"
                    role="button">
                    {{ r.user.name }}
                </NuxtLink>
            </div>
        </div>
    </CustomModal>
</template>
<script>
import CustomModal from "~/components/CustomModal.vue"
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        CustomModal,
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
            reactions: [],
            reactionsPaginator: null,
            loadingMore: true,
        }
    },
    props: ["url"],
    emits: ["close"],
    mounted () {
        this.getReactions(this.url)
        this.addScrollListener()
    },
    beforeUnmount () {
        this.removeScrollListener()
    },
    methods: {
        addScrollListener () {
            this.$refs.scroller.addEventListener("scroll", this.onScroll)
        },
        removeScrollListener () {
            this.$refs.scroller.removeEventListener("scroll", this.onScroll)
        },
        onScroll () {
            const pixelsToBottom = this.$refs.scroller.scrollHeight - (this.$refs.scroller.clientHeight + this.$refs.scroller.scrollTop)
            if (pixelsToBottom < 200) {
                this.loadMore()
            }
        },
        loadMore () {
            if (this.loadingMore) {
                return
            }
            this.loadingMore = true

            if (!this.reactionsPaginator.next) {
                console.log("ya no hay mas, desactivar listener")
                this.removeScrollListener()
                this.loadingMore = false
                return
            }

            console.log("cargando mas...")
            this.getReactions(this.reactionsPaginator.next)
        },
        getReactions (url) {
            axios.get(`${url}`)
                .then(response => {
                    this.reactionsPaginator = response.data.links
                    this.reactions = this.reactions.concat(response.data.data)
                    this.loadingMore = false
                })
        }
    }
}
</script>
