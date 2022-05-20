<template>
    <NuxtLayout name="main">
        <ViewPostMobile
            :post="post"
            v-if="is_mobile" />
        <ViewPost
            :post="post"
            v-else />
    </NuxtLayout>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()
const route = useRoute()

let post = null

await fetchWithCookie(`${mainStore.backendUrl}/api/posts/${route.params.id}`)
    .then(response => {
        post = response.data.data
    })
</script>
<script>
import ViewPost from "~/components/posts/ViewPost.vue"
import ViewPostMobile from "~/components/posts/ViewPostMobile.vue"
export default {
    components: {
        ViewPost,
        ViewPostMobile,
    },
    data () {
        return {
            is_mobile: true,
        }
    },
    mounted () {
        window.addEventListener("resize", this.onResizeWindow)
        this.onResizeWindow()
    },
    unmounted () {
        window.removeEventListener("resize", this.onResizeWindow)
    },
    methods: {
        onResizeWindow () {
            this.is_mobile = !(window.innerWidth > 767)
        }
    }
}
</script>
