<template>
    <NuxtLayout name="main">
        <EditPost />
    </NuxtLayout>
</template>
<script>
import EditPost from "~/components/posts/EditPost.vue"

export default {
    components: {
        EditPost,
    }
}
</script>
