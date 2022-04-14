<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-auto">
                    <image-preloader
                        :image="post.simple_post.image.url_xs"
                        class="shadow"
                        style="width:150px"
                        aspect="1" />
                </div>
                <div class="col">
                    <h5>Esta publicacion ha sido reportado por Odio y por otros 15 motivos</h5>
                </div>
            </div>
        </div>
    </div>
    {{ post }}
    <br>
</template>
<script>
import ImagePreloader from "@/components/ImagePreloader.vue"
export default {
    components: {
        ImagePreloader,
    },
    props: ["post"]
}
</script>
