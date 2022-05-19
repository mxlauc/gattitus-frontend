<template>
    <NuxtLayout name="main">
        <PageCreate />
    </NuxtLayout>
</template>
<script>

import PageCreate from "~~/components/admin/pages/PageCreate.vue"

export default {
    components: {
        PageCreate,
    }
}

</script>
