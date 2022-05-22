<template>
    <h4>
        <strong>Gatos que podrían gustarte</strong>
    </h4>
    <div class="card shadow-sm mb-3">
        <div class="card-body">
            <PetToSeeItem
                class="pet-item"
                v-for="c in pets"
                :key="c.id"
                :pet="c" />
        </div>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()

</script>
<script>
import PetToSeeItem from "~/components/pet/PetToSeeItem.vue"
import axios from "axios"

export default {
    components: {
        PetToSeeItem,
    },
    data () {
        return {
            pets: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pets/discover`)
            .then(response => {
                this.pets = response.data.data
            })
    },
}
</script>
<style scoped>
.pet-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
