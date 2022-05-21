<template>
    <div class="row g-0">
        <div class="col-12 col-md-8">
            <div style="max-width: 500px; margin: auto;">
                <router-view />
                <simple-post-component
                    v-for="p in mainStore.posts"
                    :post="p"
                    :key="p.id" />
            </div>
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
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import UserToFollowList from "~/components/user/UserToFollowList.vue"
import PetToSeeList from "~/components/pet/PetToSeeList.vue"

import StickyMiddleColumn from "~/components/StickyMiddleColumn.vue"

export default {
    components: {
        SimplePostComponent,
        ImagePreloader,
        UserToFollowList,
        PetToSeeList,
        StickyMiddleColumn,
    },
    data () {
        return {

        }
    },
    mounted () {
        // this.mainStore.loadPosts()
    },

}
</script>
