<template>
    <CustomModal
        :hide-buttons="true"
        @cancel="$emit('close')">
        <template #title>
            Crear gato
        </template>
        <div>
            <form
                action="/"
                @submit.prevent="enviarFormulario"
                ref="formCrear"
                method="POST">
                <div class="row gy-3">
                    <div class="col-sm-5">
                        <span class="d-block form-label">Foto</span>
                        <div
                            class="position-relative"
                            v-if="imagenPreview">
                            <img
                                :src="imagenPreview"
                                class="w-100 rounded-3"
                                style="aspect-ratio: 1; object-fit: cover;">
                            <button
                                type="button"
                                class="btn-close bg-white shadow position-absolute top-0 end-0 m-3 p-2 rounded-circle"
                                aria-label="Close"
                                @click="borrarImagen" />
                        </div>
                        <label
                            for="imagePet"
                            class="form-control"
                            tabindex="0"
                            role="button"
                            style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center;"
                            v-else>
                            <img
                                src="https://img.icons8.com/cotton/2x/image-file-add--v2.png"
                                style="height: 20px">
                            Add image
                        </label>
                    </div>
                    <div class="col-sm-7">
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Ejemplo: El señor Bigotes"
                                name="name">
                        </div>
                        <div>
                            <label class="form-label">Apodo (Opcional)</label>
                            <textarea
                                class="form-control"
                                name="nickname"
                                style="height: 100px;"
                                ref="textarea"
                                @keyup="keyup"
                                placeholder="Ejemplo: El que me pide comida a las 5 de la mañana" />
                        </div>
                    </div>
                </div>

                <input
                    type="file"
                    id="imagePet"
                    class="d-none"
                    accept="image/png, image/jpeg"
                    @change="mostrarPreview">
            </form>
            <button
                type="button"
                class="btn btn-primary w-100 mt-2"
                :disabled="disableButton"
                @click="enviarFormulario">
                Publish
            </button>
        </div>
    </CustomModal>
</template>
<script>
import axios from "axios"
import CustomModal from "../CustomModal.vue"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        CustomModal,
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
        }
    },
    mounted () {
    },
    computed: {
        disableButton () {
            return !this.imagenPreview && !this.textareaLength
        }
    },
    emits: ["close"],
    methods: {
        keyup (e) {
            this.textareaLength = this.$refs.textarea.value.trim().length
        },
        enviarFormulario (e) {
            e.preventDefault()

            const formData = new FormData(this.$refs.formCrear)
            formData.append("image_id", this.imageId)
            axios.post(`${this.mainStore.backendUrl}/api/pets`, formData)
                .then((response) => {
                    console.log(response.data)
                    this.$refs.formCrear.reset()
                    this.imageId = null
                    this.textareaLength = 0
                    this.imagenPreview = null
                    this.ocultarModal()
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        ocultarModal () {
            this.imagenPreview = null
            this.$refs.formCrear.reset()
            this.$emit("close")
        },
        mostrarPreview (e) {
            // this.imagenPreview = URL.createObjectURL(e.target.files[0]);
            const formData = new FormData()
            formData.append("file", e.target.files[0])

            axios.post(`${this.mainStore.backendUrl}/api/images`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    console.log(response.data.url)
                    this.imagenPreview = response.data.url
                    this.imageId = response.data.imageId
                })
                .catch(response => {
                    console.log(response)
                })
        },
        borrarImagen () {
            this.$refs.formCrear.imagePet.value = ""
            this.imagenPreview = null
        },
    },
}
</script>
<style scoped>
</style>
