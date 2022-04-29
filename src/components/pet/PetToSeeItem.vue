<template>
    <div class="row">
        <div class="col-auto">
            <router-link :to="'/pets/' + pet.slug">
                <ImagePreloader
                    :image="pet.image"
                    class="pet-item-img shadow"
                    aspect="1" />
            </router-link>
        </div>
        <div class="col">
            <router-link
                :to="'/pets/' + pet.slug"
                class="text-decoration-none">
                {{ pet.name }}
            </router-link>
            <br>
            <small class="text-muted">
                {{ pet.nickname }}
            </small>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "../ImagePreloader.vue"
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
