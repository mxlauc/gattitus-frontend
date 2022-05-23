<template>
    <div class="row g-0">
        <div class="col-12 col-md-8">
            <VSimpleInfiniteScroll
                @load="load"
                :load-to-fill="false"
                style="max-width: 500px; margin: auto;">
                <simple-post-component
                    v-for="p in mainStore.posts"
                    :post="p"
                    :key="p.id" />
            </VSimpleInfiniteScroll>
        </div>
        <StickyMiddleColumn
            :top="80"
            class="col-12 col-md-4"
            style="max-width: 400px; max-width: 100%;">
            <UserToFollowList />
            <PetToSeeList />
        </StickyMiddleColumn>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
const mainStore = useMainStore()
await mainStore.loadPosts()
</script>
<script>
import SimplePostComponent from "~/components/posts/PostComponent.vue"
import UserToFollowList from "~/components/user/UserToFollowList.vue"
import PetToSeeList from "~/components/pet/PetToSeeList.vue"
import StickyMiddleColumn from "~/components/StickyMiddleColumn.vue"
import VSimpleInfiniteScroll from "v-simple-infinite-scroll"

export default {
    components: {
        SimplePostComponent,
        UserToFollowList,
        PetToSeeList,
        StickyMiddleColumn,
        VSimpleInfiniteScroll,
    },
    data () {
        return {

        }
    },
    mounted () {
        // this.mainStore.loadPosts()
    },
    methods: {
        load (scroll) {
            this.mainStore.loadMorePosts()
                .then(() => {
                    if (this.mainStore.postsPaginate.links.next) {
                        scroll.loaded()
                    } else {
                        scroll.complete()
                    }
                })
        }
    }

}
</script>
