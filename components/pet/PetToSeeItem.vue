<template>
    <div class="row">
        <div class="col-auto">
            <NuxtLink :to="'/pets/' + pet.slug">
                <ImagePreloader
                    :image="pet.image"
                    class="pet-item-img shadow"
                    aspect="1" />
            </NuxtLink>
        </div>
        <div class="col">
            <NuxtLink
                :to="'/pets/' + pet.slug"
                class="text-decoration-none">
                {{ pet.name }}
            </NuxtLink>
            <br>
            <small class="text-muted">
                {{ pet.nickname }}
            </small>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
export default {
    components: { ImagePreloader },
    props: {
        pet: Object
    }
}
</script>
<style scoped>
.pet-item-img{
    width: 50px;
    height: 50px;
    border-radius: 0.8rem;
}
</style>
