<template>
    <EditPost />
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
    layout: "main",
})

import EditPost from "~/components/posts/EditPost.vue"

export default {
    components: {
        EditPost,
    }
}
</script>
