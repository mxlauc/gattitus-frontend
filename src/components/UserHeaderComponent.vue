<template>
    <div class="card shadow-sm">
        <div class="card-body p-4">
            <div class="row gy-3">
                <div class="col-12 col-sm-3 col-md-2 text-center">
                    <image-preloader
                        option="url_xl"
                        :image="user?.image"
                        :aspect="1"
                        class="shadow-sm"
                        style="width: 160px; border-radius: 20%;" />
                </div>
                <div class="col-12 col-sm-9 col-md-10 text-center text-sm-start">
                    <h1
                        class="mb-0"
                        style="font-weight: 900">
                        {{ user?.name }}
                    </h1>
                    <h6>{{ '@' + user?.username }}</h6>
                    <span class="d-block">Se unio el 3 de Septiembre del 2021</span>
                    <span class="d-block">activo hace 3 horas</span>
                    <button
                        class="btn btn-sm btn-primary mt-2"
                        @click="follow">
                        {{ my_follow ? 'Dejar de seguir' : 'Seguir' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "./images/ImagePreloader.vue"
import axios from "axios"
import { useMainStore } from "@/stores/mainStore"

export default {
    components: {
        ImagePreloader
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            my_follow: Array.isArray(this.user?.my_follow) ? this.user?.my_follow.length : !!this.user?.my_follow,
        }
    },
    props: ["user"],
    mounted () {

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

</style>
