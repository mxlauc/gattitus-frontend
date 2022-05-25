<template>
    <div class="row g-0">
        <div class="col-auto">
            <NuxtLink :to="'/@' + user.username">
                <ImagePreloader
                    :image="user.image"
                    class="user-item-img shadow"
                    aspect="1" />
            </NuxtLink>
        </div>
        <div class="col text-start ps-2">
            <NuxtLink
                :to="'/@' + user.username"
                class="text-decoration-none d-block">
                {{ user.name }}
            </NuxtLink>

            <NuxtLink
                :to="'/@' + user.username"
                class="text-decoration-none text-muted d-block">
                <small class="text-muted">
                    @{{ user.username }}
                </small>
            </NuxtLink>
            <span class="d-block">
                {{ pets_amount }}
            </span>
        </div>
        <div class="col-auto">
            <button
                v-if="mainStore.userLogged && mainStore.userLogged.id !== user.id"
                class="btn btn-sm"
                :class="{'btn-outline-primary': my_follow, 'btn-primary': !my_follow}"
                @click="follow"
                style="min-width: 80px;">
                {{ my_follow ? 'Siguiendo' : 'Seguir' }}
            </button>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        ImagePreloader,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore,
        }
    },
    data () {
        return {
            my_follow: Array.isArray(this.user?.my_follow) ? this.user?.my_follow.length : !!this.user?.my_follow,
        }
    },
    props: {
        user: Object
    },
    computed: {
        pets_amount () {
            const pets_n = Math.min(3, this.user?.pets_count)
            if (pets_n) {
                return "🐱".repeat(pets_n) + (this.user?.pets_count > 3 ? " + " : "")
            } else {
                return ""
            }
        }
    },
    methods: {
        follow () {
            axios.post(`${this.mainStore.backendUrl}/api/followers`, {
                user_id: this.user.id
            })
                .then(response => {
                    this.my_follow = response.data.following
                })
                .catch(error => {
                    console.error(error)
                })
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
