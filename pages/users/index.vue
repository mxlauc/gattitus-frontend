<template>
    <NuxtLayout name="main">
        <UsersComponent />
    </NuxtLayout>
</template>
<script>
import UsersComponent from "~~/components/user/UsersComponent.vue"
export default {
    components: {
        UsersComponent,
    }
}
</script>
