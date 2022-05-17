<template>
    <div class="row g-0">
        <div class="col-12 col-md-8">
            <div style="max-width: 500px; margin: auto;">
                <router-view />
                <simple-post-component
                    v-for="p in mainStore.posts"
                    :post="p"
                    :key="p.id" />
            </div>
        </div>
        <StickyMiddleColumn
            top="80"
            class="col-12 col-md-4"
            style="max-width: 400px; max-width: 100%;">
            <UserToFollowList />
            <PetToSeeList />
            <h4>
                <strong>Ideas para publicar</strong>
                {{ mainStore.state }}
            </h4>

            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title fw-bold">
                        Gato dormido
                    </h5>
                    <p class="card-text">
                        Muestranos a tu gato durmiendo... (ver&nbsp;más)
                    </p>
                    <image-preloader
                        :image="'/img/samples/s1.jpg'"
                        :aspect="2"
                        class="rounded-5 w-100 shadow-sm" />
                    <a
                        href="#"
                        class="btn btn-primary mt-2">Ver publicaciones</a>
                </div>
            </div>

            <hr
                class="mx-3"
                style="border-top: 2px dashed; background-color: transparent;">

            <h4>
                <strong>Aún no sigues a estos gatos</strong>
            </h4>
            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title fw-bold">
                        Gato dormido
                    </h5>
                    <p class="card-text">
                        Muestranos a tu gato durmiendo... (ver&nbsp;más)
                    </p>
                    <image-preloader
                        :image="'/img/samples/s1.jpg'"
                        :aspect="2"
                        class="rounded-5 w-100 shadow-sm" />
                    <a
                        href="#"
                        class="btn btn-primary mt-2">Ver publicaciones</a>
                </div>
            </div>

            <hr
                class="mx-3"
                style="border-top: 2px dashed; background-color: transparent;">

            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title">
                        Card title
                    </h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a
                        href="#"
                        class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title">
                        Card title
                    </h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a
                        href="#"
                        class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title">
                        Card title
                    </h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a
                        href="#"
                        class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </StickyMiddleColumn>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
const mainStore = useMainStore()
await mainStore.loadPosts()
</script>
<script>
import SimplePostComponent from "~~/components/posts/PostComponent.vue"
import ImagePreloader from "~~/components/images/ImagePreloader.vue"
import UserToFollowList from "~~/components/user/UserToFollowList.vue"
import PetToSeeList from "~~/components/pet/PetToSeeList.vue"

import StickyMiddleColumn from "~~/components/StickyMiddleColumn.vue"

export default {
    components: {
        SimplePostComponent,
        ImagePreloader,
        UserToFollowList,
        PetToSeeList,
        StickyMiddleColumn,
    },
    data () {
        return {

        }
    },
    mounted () {
        // this.mainStore.loadPosts()
    },

}
</script>
