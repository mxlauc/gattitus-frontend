<template>
    <div>
        <InputSearch
            class="w-100 form-control my-4"
            placeholder="Buscar mascota"
            @on-search="onSearch" />

        <div class="row g-3 mx-0 mb-4">
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
        <button
            class="btn btn-primary d-block m-auto mb-5"
            v-if="!petsPaginate || petsPaginate.links.next"
            @click="loadMore">
            Cargar más resultados
        </button>
    </div>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import InputSearch from "~/components/InputSearch.vue"
import { useMainStore } from "~/store/mainStore"
import axios from "axios"

export default {
    components: {
        ImagePreloader,
        InputSearch,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            params: "",
            pets: [],
            petsPaginate: null,
        }
    },
    mounted () {
        this.search()
    },
    methods: {
        onSearch (value) {
            this.params = value
            this.pets = []
            this.search()
        },
        search (url = `${this.mainStore.backendUrl}/api/pets/search?`) {
            axios.get(`${url}&q=${this.params}`)
                .then(response => {
                    this.petsPaginate = response.data
                    this.pets = this.pets.concat(this.petsPaginate.data)
                })
        },
        loadMore () {
            this.search(this.petsPaginate.links.next)
        }
    }
}
</script>
