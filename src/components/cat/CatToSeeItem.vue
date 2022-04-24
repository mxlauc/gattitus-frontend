<template>
    <div class="row">
        <div class="col-auto">
            <router-link :to="'/cats/' + cat.slug">
                <ImagePreloader
                    :image="cat.image"
                    class="cat-item-img shadow"
                    aspect="1" />
            </router-link>
        </div>
        <div class="col">
            <router-link
                :to="'/cats/' + cat.slug"
                class="text-decoration-none">
                {{ cat.name }}
            </router-link>
            <br>
            <small class="text-muted">
                {{ cat.nickname }}
            </small>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "../ImagePreloader.vue"
export default {
    components: { ImagePreloader },
    props: {
        cat: Object
    }
}
</script>
<style scoped>
.cat-item-img{
    width: 50px;
    height: 50px;
    border-radius: 0.8rem;
}
</style>
