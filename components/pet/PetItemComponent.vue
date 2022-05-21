<template>
    <div class="text-center">
        <NuxtLink :to="'/pets/' + pet.slug">
            <image-preloader
                :image="pet.image"
                class="pet-item-img shadow"
                aspect="1" />
        </NuxtLink>
        <NuxtLink
            :to="'/pets/' + pet.slug"
            class="text-decoration-none">
            <span class="d-block mt-1 fw-bold text-dark">{{ pet.name }}</span>
        </NuxtLink>
        <span class="d-block mt-0 text-muted"><small>{{ pet.name }}</small></span>
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
