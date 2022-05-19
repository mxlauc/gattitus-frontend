<template>
    <NuxtLayout name="main">
        <ViewPost />
    </NuxtLayout>
</template>
<script>
import ViewPost from "~/components/posts/ViewPost.vue"
export default {
    components: {
        ViewPost,
    }
}
</script>
