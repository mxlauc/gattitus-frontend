<template>
    <div
        class="overflow-hidden"
        style="display:inline-table; max-width:100%"
        :style="{aspectRatio: aspectRatio, background: `linear-gradient(45deg, ${image?.meta_data?.color_bl} 0%, ${image?.meta_data?.color_tr} 100%)`}">
        <img
            class="image-preloader img-fluid w-100 opacity-0"
            :src="image?.[option ?? 'url_sm'] ?? image"
            :style="{aspectRatio: aspectRatio}"
            @load="onLoadImage">
    </div>
</template>
<script>
export default {
    props: ["image", "option", "aspect"],
    methods: {
        onLoadImage (e) {
            e.currentTarget.classList.remove("opacity-0")
        },
    },
    computed: {
        aspectRatio () {
            if (this.aspect) {
                return this.aspect
            }
            if (this.image?.meta_data?.aspect_ratio < 0.9) {
                return 0.9
            }
            return this.image?.meta_data?.aspect_ratio ?? 1
        },
    },
}
</script>
<style scoped>
.image-preloader {
    object-fit: cover;
    height: 100%;
    transition: opacity 0.3s ease-out;
}
</style>
