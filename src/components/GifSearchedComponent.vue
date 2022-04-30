<template>
    <div class="p-1">
        <img
            :src="img.url"
            ref="img"
            class="w-100"
            :style="{aspectRatio: img.dims[0] / img.dims[1]}"
            style="border-radius:5px">
    </div>
</template>
<script>

export default {
    props: ["img", "postId"],
}
</script>
<style scoped>

</style>
