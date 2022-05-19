<template>
    <div>
        <NuxtLayout name="main">
            Hello world!
        </NuxtLayout>
        404
        <br>
        {{ error }}
        <br>
        <NuxtLink
            to="/"
            class="text-decoration-none fw-bold text-black d-inline-block">
            volver home
        </NuxtLink>
    </div>
</template>
<script>

export default {
    props: ["error"]
}
</script>
