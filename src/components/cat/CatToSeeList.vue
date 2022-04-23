<template>
    <h4>
        <strong>Gatos que podrían gustarte</strong>
    </h4>
    <div class="card shadow-sm mb-3">
        <div class="card-body">
            <CatToSeeItem
                class="cat-item"
                v-for="c in cats"
                :key="c.id"
                :cat="c" />
        </div>
    </div>
</template>
<script>

import CatToSeeItem from "./CatToSeeItem.vue"
import { useMainStore } from "@/stores/mainStore"
import axios from "axios"

export default {
    components: {
        CatToSeeItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore,
        }
    },
    data () {
        return {
            cats: null
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/cats`)
            .then(response => {
                this.cats = response.data.data
                console.log(response.data.data)
            })
    }
}
</script>
<style scoped>
.cat-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
