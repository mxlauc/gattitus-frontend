<template>
    <div
        class="w-100 position-relative">
        <ImagePreloader
            :image="post.simple_post.image"
            option="url_lg"
            class="pet-post-img"
            :width="'100%'"
            :aspect="post.simple_post.image.meta_data.aspect_ratio" />
        <NuxtLink :to="'/posts/' + post.id">
            <div
                class="cover-thumbnail pet-post-img"
                style="display: flex; align-items: center;justify-content: center;">
                <div
                    class="row m-auto text-white"
                    style="drop">
                    <div class="col-auto text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <span class="fw-bold d-block"><small>4 K</small></span>
                    </div>
                    <div class="col-auto text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                        <span class="fw-bold d-block"><small>{{ post.reactions_count }}</small></span>
                    </div>
                    <div class="col-auto text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        </svg>
                        <span class="fw-bold d-block"><small>{{ post.comments_count }}</small></span>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
<script>
import ImagePreloader from "../images/ImagePreloader.vue"

export default {
    components: {
        ImagePreloader,
    },
    props: ["post"]
}
</script>
<style scoped>
.pet-post-img{
    border-radius: 6px;
}
.cover-thumbnail{
    top: 0px;
    position: absolute;
    background-color: #000A;
    width: 100%;
    height: 100%;
    transition: opacity .3s ease-out;
    opacity: 0;
}
.cover-thumbnail:hover{
    opacity: 1;
}
</style>
