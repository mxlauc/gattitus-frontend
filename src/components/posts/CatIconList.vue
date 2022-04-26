<template>
    <div class="row">
        <div class="col" />
        <div
            class="col-auto position-relative">
            <small class="text-muted me-2">Gatos que aparecen en esta publicación</small>
            <CatIconItem
                v-for="c in cats"
                :key="c.id"
                :cat="c" />
        </div>
    </div>
</template>
<script>
import { useMainStore } from "@/stores/mainStore"
import CatIconItem from "./CatIconItem.vue"

export default {
    components: { CatIconItem },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    props: ["cats", "cats_count"],
}
</script>
