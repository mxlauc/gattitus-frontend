<template>
    <div class="p-1">
        <img
            :src="imgUrl"
            ref="img"
            class="w-100"
            style="border-radius:5px">
    </div>
</template>
<script>
import Masonry from "masonry-layout"
export default {
    props: ["imgUrl"],
    inject: ["postId"],
    mounted () {
        const msnry = new Masonry("#masonry-gifs-row" + this.postId, {
            percentPosition: true,
        })
        new ResizeObserver(() => {
            msnry.reloadItems()
        }).observe(this.$refs.img)
    }
}
</script>
<style scoped>

</style>
