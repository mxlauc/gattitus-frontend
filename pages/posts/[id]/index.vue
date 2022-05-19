<template>
    <ViewPost />
</template>
<script>
// This will also work in `<script setup>`
import ViewPost from "~/components/posts/ViewPost.vue"
definePageMeta({
    layout: "main",
})
export default {
    components: {
        ViewPost,
    }
}
</script>
