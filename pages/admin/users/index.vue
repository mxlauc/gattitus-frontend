<template>
    <NuxtLayout name="main">
        <UsersList />
    </NuxtLayout>
</template>
<script>
import UsersList from "~~/components/admin/UsersList.vue"
export default {
    components: {
        UsersList,
    }
}
</script>
