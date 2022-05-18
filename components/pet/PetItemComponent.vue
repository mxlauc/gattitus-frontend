<template>
    <div class="text-center">
        <image-preloader
            :image="pet.image"
            class="pet-item-img shadow"
            aspect="1" />
        <span class="d-block mt-2 text-muted"><small>{{ pet.name }}</small></span>
    </div>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
export default {
    components: {
        ImagePreloader,
    },
    props: ["pet"]
}
</script>
<style scoped>
.pet-item-img{
    width: 100%;
    border-radius: 20%;
}
</style>
