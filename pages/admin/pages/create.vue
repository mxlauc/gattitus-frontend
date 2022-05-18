<template>
    <Pgpg />
</template>
<script>
// This will also work in `<script setup>`
// import PageCreate from "~~/components/admin/pages/PageCreate.vue"
import Pgpg from "~/components/admin/pages/Pgpg.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        // PageCreate,
        Pgpg,
    }
}

</script>
