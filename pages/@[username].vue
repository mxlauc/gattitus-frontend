<template>
    hola {{ $route.params.username }}

    <UserShowComponent />
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
    layout: "main",
})
</script>
