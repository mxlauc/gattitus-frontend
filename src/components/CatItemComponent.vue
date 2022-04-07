<template>
    <div class="text-center">
        <image-preloader
            :image="cat.image"
            class="cat-item-img shadow"
            aspect="1" />
        <span class="d-block mt-2 text-muted"><small>{{ cat.name }}</small></span>
    </div>
</template>
<script>
import ImagePreloader from "./ImagePreloader.vue"
export default {
    components: {
        ImagePreloader,
    },
    props: ["cat"]
}
</script>
<style scoped>
.cat-item-img{
    width: 100%;
    border-radius: 20%;
}
</style>
