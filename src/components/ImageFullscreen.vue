<template>
    <teleport to="body">
        <div class="position-fixed img-fullscreen">
            <img :src="image?.url_xl">
            <button
                type="button"
                class="btn-close bg-white shadow position-absolute top-0 end-0 m-4 p-2 rounded-circle"
                aria-label="Close"
                @click="back()" />
        </div>
    </teleport>
</template>
<script>
import axios from "axios"
import { useMainStore } from "@/stores/mainStore"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            image: null
        }
    },
    components: {

    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/posts/${this.$route.params.id}`)
            .then(response => {
                this.image = response.data.data.simple_post.image
            })
    },
    methods: {
        back () {
            this.$router.replace("/")
        }
    }
}
</script>
<style scoped>
.img-fullscreen{
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
}
.img-fullscreen img{
    object-fit: contain;
    width: 100%;
    height: 100%;

}
</style>
