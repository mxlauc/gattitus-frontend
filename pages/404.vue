<template>
    <NuxtLayout name="main">
        Hello world!
        404
        <br>
        {{ error }}
        <br>
        <NuxtLink
            to="/"
            class="text-decoration-none fw-bold text-black d-inline-block">
            volver home
        </NuxtLink>
    </NuxtLayout>
</template>
<script>

export default {
    props: ["error"]
}
</script>
