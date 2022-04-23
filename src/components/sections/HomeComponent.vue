<template>
    <div class="row g-0">
        <div class="col-12 col-md-8">
            <div style="max-width: 500px; margin: auto;">
                <router-view />
                <simple-post-component
                    v-for="p in posts"
                    :post="p"
                    :key="p.id" />
            </div>
        </div>
        <div
            ref="lastCol"
            class="col-12 col-md-4"
            style="max-width: 400px; max-width: 100%; align-self: flex-start; position:sticky;">
            <UserToFollowList />
            <CatToSeeList />
            <h4>
                <strong>Ideas para publicar</strong>
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
        </div>
    </div>
</template>
<script>
import SimplePostComponent from "../PostComponent.vue"
import ImagePreloader from "@/components/ImagePreloader.vue"
import UserToFollowList from "../user/UserToFollowList.vue"
import CatToSeeList from "../cat/CatToSeeList.vue"
import { useMainStore } from "@/stores/mainStore"

export default {
    components: {
        SimplePostComponent,
        ImagePreloader,
        UserToFollowList,
        CatToSeeList,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            lastScrollPos: 0,
            maxTop: 80,
            minTop: 0,
            topScroll: 0,
            divColObserver: null,
        }
    },
    mounted () {
        this.mainStore.loadPosts()

        window.addEventListener("scroll", this.onScroll)
        this.divColObserver = new ResizeObserver(this.calcMinTop)
        this.divColObserver.observe(this.$refs.lastCol)
    },
    unmounted () {
        window.removeEventListener("scroll", this.onScroll)
        this.divColObserver.disconnect()
    },
    computed: {
        posts () {
            return this.mainStore.posts
        }
    },
    methods: {
        onScroll () {
            const diffScroll = document.documentElement.scrollTop - this.lastScrollPos

            if (diffScroll > 0) { // scroll bajando
                this.topScroll -= diffScroll
                if (this.topScroll < this.minTop) {
                    this.topScroll = this.minTop
                }
            } else { // scroll subiendo
                this.topScroll -= diffScroll
                if (this.topScroll > this.maxTop) {
                    this.topScroll = this.maxTop
                }
            }
            this.$refs.lastCol.style.top = `${this.topScroll}px`

            this.lastScrollPos = document.documentElement.scrollTop
        },
        calcMinTop () {
            this.minTop = window.innerHeight - this.$refs.lastCol.clientHeight
        }
    }
}
</script>
