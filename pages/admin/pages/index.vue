<template>
    <NuxtLayout name="main">
        <PagesList />
    </NuxtLayout>
</template>
<script>
import PagesList from "~~/components/admin/pages/PagesList.vue"
export default {
    components: {
        PagesList,
    }
}
</script>
