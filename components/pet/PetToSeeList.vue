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
const result = await fetchWithCookie(`${mainStore.backendUrl}/api/pets`)
const pets = result.data
</script>
<script>
import PetToSeeItem from "./PetToSeeItem.vue"

export default {
    components: {
        PetToSeeItem,
    },
}
</script>
<style scoped>
.pet-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
