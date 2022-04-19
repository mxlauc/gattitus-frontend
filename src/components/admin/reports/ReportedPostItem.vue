<template>
    <div class="card">
        <div class="card-body">
            <strong>{{ post.reports[0].user.name }}</strong>
            reportó la publicación de
            <strong>{{ post.user.name }}</strong>
            por
            <strong>{{ post.reports[0].report_type.title }}</strong>
            <hr>
            <div class="row">
                <div class="col-auto">
                    <image-preloader
                        :image="post.simple_post.image.url_lg"
                        class="shadow"
                        style="width:150px"
                        aspect="1" />
                </div>
                <div class="col">
                    <p>
                        <i>"{{ post.simple_post.description }}"</i>
                    </p>

                    <button class="btn btn-primary mx-2">
                        Ver publicación
                    </button>

                    <button
                        class="btn btn-primary mx-2"
                        @click="applyPunishment=true">
                        Aplicar castigo
                    </button>
                </div>
            </div>
        </div>
    </div>
    <br>
    <ApplyPunishment
        @close="applyPunishment = false"
        v-if="applyPunishment===true" />
</template>
<script>
import ImagePreloader from "@/components/ImagePreloader.vue"
import ApplyPunishment from "@/components/admin/reports/ApplyPunishment.vue"

export default {
    components: {
        ImagePreloader,
        ApplyPunishment,
    },
    data () {
        return {
            applyPunishment: false,
        }
    },
    props: ["post"]
}
</script>
