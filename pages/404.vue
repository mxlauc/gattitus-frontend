<template>
    <div>
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
definePageMeta({
    layout: "main",
})
export default {
    props: ["error"]
}
</script>
