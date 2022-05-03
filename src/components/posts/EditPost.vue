<template>
    <div class="card shadow p-4">
        <h2>Editar publicación</h2>
        <form
            action="/"
            @submit.prevent="enviarFormulario"
            ref="formCrear"
            method="POST">
            <div
                class="row"
                style="min-height:300px;">
                <div class="col-12 col-md-5">
                    <div class="mb-3">
                        <label class="form-label">Imagen</label>
                        <ImagePreloader
                            option="url_lg"
                            :image="post?.simple_post.image"
                            class="w-100 rounded-3" />
                    </div>
                </div>
                <div class="col-12 col-md-7">
                    <div class="mb-3">
                        <label
                            for="createPostTextarea"
                            class="form-label">Descripción</label>
                        <textarea
                            id="createPostTextarea"
                            name="description"
                            class="form-control"
                            style="
                                width: 100%;
                                height: 100%;
                                min-height: 150px;
                                resize: none;
                            "
                            ref="textarea"
                            @keyup="keyup"
                            v-if="post"
                            v-model="post.simple_post.description"
                            placeholder="What are you thinking about?" />
                    </div>
                    <h6>Gatos etiquetados</h6>
                    <div>
                        <img
                            v-for="c in petsTagged"
                            :key="c.id"
                            :src="c.image.url_xs"
                            style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"
                            alt="">
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            @click="showSearchPet=true">
                            {{ (petsTagged && petsTagged.length) ? '+':'Etiquetar gatos' }}
                        </button>
                    </div>

                    <SearchToTagAPet
                        v-if="showSearchPet"
                        :pets-previous="petsTagged"
                        @pets-selected="onPetsSelectedChanged"
                        @close="showSearchPet=false" />
                </div>
            </div>
        </form>

        <button
            type="button"
            class="btn btn-primary mt-2 ms-auto px-5"
            @click="enviarFormulario">
            Guardar
        </button>
    </div>
</template>
<script>
import { useMainStore } from "@/stores/mainStore"
import ImagePreloader from "../images/ImagePreloader.vue"
import SearchToTagAPet from "./SearchToTagAPet.vue"
import axios from "axios"

export default {
    components: {
        ImagePreloader,
        SearchToTagAPet,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            post: null,
            textareaLength: 0,
            showSearchPet: false,
            petsTagged: [],
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/posts/${this.$route.params.id}`)
            .then(response => {
                this.post = response.data.data
                this.onPetsSelectedChanged(this.post.pets)
                this.textareaLength = this.post.simple_post.description.length
            })
    },
    methods: {
        keyup (e) {
            this.textareaLength = this.$refs.textarea.value.trim().length
        },
        enviarFormulario (e) {
            e.preventDefault()

            const formData = new FormData(this.$refs.formCrear)

            this.petsTagged.forEach(c => {
                formData.append("pets[]", c.id)
            })

            formData.append("_method", "PUT")

            axios.post(`${this.mainStore.backendUrl}/api/posts/${this.$route.params.id}`, formData)
                .then((response) => {
                    console.log(response.data)
                    this.$refs.formCrear.reset()
                    this.textareaLength = 0
                    this.$router.replace({ path: `/posts/${this.$route.params.id}` })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        onPetsSelectedChanged (pets) {
            this.petsTagged = pets
        },
    },
}
</script>
