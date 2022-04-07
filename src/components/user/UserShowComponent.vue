<template>
    <user-header-component :user="user" />
    <div class="row gy-4 gx-0 mt-0">
        <div class="col-12 col-md-7 order-2 order-md-1 text-center">
            <div style="max-width: 460px; margin: auto">
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
                <div
                    class="card shadow mb-4"
                    style="height: 500px" />
            </div>
        </div>
        <div class="col-12 col-md-5 order-1 order-md-2">
            <div
                class="card shadow-sm"
                style="max-height: 400px; overflow-y: auto">
                <div class="card-body p-4">
                    <h1 class="pb-3 fw-bold">
                        {{ $t('myCats') }}
                    </h1>
                    <div class="row gy-3">
                        <div
                            class="col-4 col-lg-3"
                            v-for="cat in cats"
                            :key="cat.id">
                            <cat-item-component :cat="cat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import UserHeaderComponent from "../UserHeaderComponent.vue"
import CatItemComponent from "../CatItemComponent.vue"
import { useMainStore } from "@/stores/mainStore"
import axios from "axios"

export default {
    components: {
        UserHeaderComponent,
        CatItemComponent,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            user: null,
            cats: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/@${this.$route.params.user}`)
            .then(response => {
                this.user = response.data.data
                axios.get(`${this.mainStore.backendUrl}/api/users/${this.user.id}/cats`).then(responseCat => {
                    this.cats = responseCat.data.data
                })
            })
    }
}
</script>
<style scoped>
</style>
