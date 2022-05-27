<template>
    <NuxtLayout name="main">
        <Head>
            <Title>Descubrir usuarios | Gattitus</Title>
        </Head>
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
