<template>
    <NuxtLayout name="main">
        <h1 class="mb-5">
            Esta página no existe
        </h1>
        <NuxtLink
            to="/"
            class="btn btn-primary">
            volver home
        </NuxtLink>
    </NuxtLayout>
</template>
<script>

export default {
    props: ["error"]
}
</script>
