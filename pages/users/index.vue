<template>
    lista de usuarios xd
    <UsersComponent />
</template>
<script>
// This will also work in `<script setup>`
import UsersComponent from "~~/components/user/UsersComponent.vue"
definePageMeta({
    layout: "main",
})
export default {
    components: {
        UsersComponent,
    }
}
</script>
