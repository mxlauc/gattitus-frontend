<template>
    <UsersList />
</template>
<script>
// This will also work in `<script setup>`
import UsersList from "~~/components/admin/UsersList.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        UsersList,
    }
}
</script>
