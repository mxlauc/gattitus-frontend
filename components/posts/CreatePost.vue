<template>
    <div class="card shadow p-4">
        <h2>Crear publicación</h2>

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
                        <div
                            class="position-relative"
                            v-if="imagenPreview">
                            <img
                                :src="imagenPreview"
                                class="w-100 rounded-3"
                                style="object-fit:cover;height:340px;">
                            <button
                                type="button"
                                class="btn-close bg-white shadow position-absolute top-0 end-0 m-3 p-2 rounded-circle"
                                aria-label="Close"
                                @click="borrarImagen" />
                        </div>

                        <label
                            for="imagen"
                            class="form-control text-center"
                            tabindex="0"
                            role="button"
                            style="padding-top:130px;height:340px; border: 4px dashed #f90;"
                            v-else>
                            <p class="text-muted">
                                Selecciona una foto de tu gato
                            </p>
                            <p class="btn btn-primary btn-sm ">Seleccionar image</p>
                        </label>
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

            <input
                type="file"
                id="imagen"
                class="d-none"
                accept="image/png, image/jpeg"
                @change="mostrarPreview">
        </form>

        <button
            type="button"
            class="btn btn-primary mt-2 ms-auto px-5"
            :disabled="disableButton"
            @click="enviarFormulario">
            Publish
        </button>
    </div>
</template>
<script>
import axios from "axios"
import { useMainStore } from "~/store/mainStore"
import SearchToTagAPet from "./SearchToTagAPet.vue"

export default {
    components: {
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
            imagenPreview: null,
            textareaLength: 0,
            imageId: null,
            showSearchPet: false,
            petsTagged: [],
        }
    },
    mounted () {},
    computed: {
        disableButton () {
            return !this.imagenPreview
        },
    },
    emits: ["postCreated"],
    methods: {
        keyup (e) {
            this.textareaLength = this.$refs.textarea.value.trim().length
        },
        enviarFormulario (e) {
            e.preventDefault()

            const formData = new FormData(this.$refs.formCrear)
            formData.append("image_id", this.imageId)

            this.petsTagged.forEach(c => {
                formData.append("pets[]", c.id)
            })

            axios.post(`${this.mainStore.backendUrl}/api/posts`, formData)
                .then((response) => {
                    console.log(response.data)
                    this.$refs.formCrear.reset()
                    this.imageId = null
                    this.textareaLength = 0
                    this.imagenPreview = null
                    this.$router.replace({ path: "/" })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        mostrarPreview (e) {
            // this.imagenPreview = URL.createObjectURL(e.target.files[0]);
            const formData = new FormData()
            formData.append("file", e.target.files[0])

            axios
                .post(`${this.mainStore.backendUrl}/api/images`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response.data.url)
                    this.imagenPreview = URL.createObjectURL(e.target.files[0])
                    this.imageId = response.data.imageId
                })
                .catch((response) => {
                    console.log(response)
                })
        },
        borrarImagen () {
            this.$refs.formCrear.imagen.value = ""
            this.imagenPreview = null
        },
        onPetsSelectedChanged (pets) {
            this.petsTagged = pets
        },
    },
}
</script>
