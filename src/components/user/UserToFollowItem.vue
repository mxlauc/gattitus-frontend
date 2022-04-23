<template>
    <div class="row">
        <div class="col-auto">
            <router-link :to="'/@' + user.username">
                <ImagePreloader
                    :image="user.image"
                    class="user-item-img shadow"
                    aspect="1" />
            </router-link>
        </div>
        <div class="col">
            <router-link
                :to="'/@' + user.username"
                class="text-decoration-none">
                {{ user.name }}
            </router-link>
            <br>
            <small>
                <router-link
                    :to="'/@' + user.username"
                    class="text-decoration-none text-muted">

                    @{{ user.username }}

                </router-link>
                {{ cats_amount }}
            </small>
        </div>
        <div class="col-auto">
            <button class="btn btn-sm btn-primary">
                Seguir
            </button>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "@/components/ImagePreloader.vue"
export default {
    components: {
        ImagePreloader,
    },
    props: {
        user: Object
    },
    computed: {
        cats_amount () {
            const cats_n = Math.floor(Math.random() * 3 + 1)
            if (cats_n) {
                return "| " + "🐱".repeat(cats_n) + (cats_n > 2 ? " + " : "")
            } else {
                return ""
            }
        }
    }
}
</script>
<style scoped>
.user-item-img{
    width: 40px;
    height: 40px;
    border-radius: 0.8rem;
}
</style>
