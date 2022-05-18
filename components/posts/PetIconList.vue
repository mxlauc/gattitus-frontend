<template>
    <div class="row">
        <div class="col" />
        <div
            class="col-auto position-relative">
            <small class="text-muted me-2">Gatos que aparecen en esta publicación</small>
            <PetIconItem
                v-for="c in pets"
                :key="c.id"
                :pet="c" />
        </div>
    </div>
</template>
<script>
import { useMainStore } from "~/store/mainStore"
import PetIconItem from "~/components/posts/PetIconItem.vue"

export default {
    components: { PetIconItem },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    props: ["pets", "pets_count"],
}
</script>
