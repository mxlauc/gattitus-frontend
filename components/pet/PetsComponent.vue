<template>
    <div>
        <input
            type="text"
            class="w-100 form-control my-4"
            placeholder="Buscar mascota">

        <div class="row g-3 mx-0">
            <div
                class="col-6 col-sm-4 col-md-3 col-lg-2"
                v-for="p in pets"
                :key="p.id">
                <div
                    class="card shadow-sm"
                    style="height: 100%;">
                    <div
                        class="card-body">
                        <NuxtLink :to="'/pets/' + p.slug">
                            <ImagePreloader
                                :image="p.image"
                                class="w-100 rounded-3 mb-3"
                                :aspect="1" />
                        </NuxtLink>
                        <NuxtLink
                            :to="'/pets/' + p.slug"
                            class="d-block fw-bold text-decoration-none">
                            {{ p.name }}
                        </NuxtLink>
                        <small class="text-muted">{{ p.nickname }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import { useMainStore } from "~/store/mainStore"
import axios from "axios"

export default {
    components: {
        ImagePreloader,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            pets: null
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pets`,{
            withCredentials:true
        })
            .then(response => {
                this.pets = response.data.data
            })
    }
}
</script>
