<template>
    <div
        class="overflow-hidden"
        style="display:inline-table; max-width:100%"
        ref="background"

        :style="'aspect-ratio: ' + aspectRatio +
            '; background: ' + `linear-gradient(45deg, ${image?.meta_data?.color_bl} 0%, ${image?.meta_data?.color_tr} 100%)` +
            '; width: ' + getWidth +
            '; height: ' + getHeight">
        <img
            class="image-preloader img-fluid w-100 opacity-0"
            :src="image?.[option ?? 'url_sm'] ?? image"
            :style="'aspect-ratio: ' + aspectRatio + '; objectFit: ' + (objectFit ? objectFit : null)"
            ref="image">
    </div>
</template>
<script>
export default {
    props: ["image", "option", "aspect", "objectFit", "width", "height"],
    mounted () {
        if (this.$refs.image.complete) {
            this.onLoadImage()
        } else {
            this.$refs.image.addEventListener("load", () => {
                this.onLoadImage()
            })
        }
    },
    methods: {
        onLoadImage () {
            this.$refs.image.classList.remove("opacity-0")
            this.$refs.background.style.background = "#000"
        },
    },
    computed: {
        estilo () {
            let as = 90
            if (this.aspect) {
                as = this.aspect
            }
            if (this.image?.meta_data?.aspect_ratio < 0.9) {
                as = 0.9
            }
            as = this.image?.meta_data?.aspect_ratio ?? 1

            return {
                colo: as
            }
        },
        getWidth () {
            if (this.width) {
                return this.width
            }
            return null
        },
        getHeight () {
            if (this.height) {
                return this.height
            }
            return null
        },
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
