<template>
    <div>
        <div class="row g-0 border-top pt-1">
            <div
                class="col-auto position-relative mx-auto "
                v-if="gifSeleccionado">
                <img
                    :src="gifSeleccionado"
                    style="height: 100px; border-radius: 5px;">
                <button
                    type="button"
                    class="btn-close bg-white shadow position-absolute top-0 end-0 m-1 p-2 rounded-circle"
                    aria-label="Close"
                    @click="gifSeleccionado=null" />
            </div>
        </div>

        <div
            class="row g-0 pb-2 pt-1"
            v-if="userLogged">
            <div class="col col-auto">
                <image-preloader
                    :image="userLogged.image"
                    aspect="1"
                    class="imagenUsuario shadow" />
            </div>
            <div class="col ms-2">
                <div class="row g-0 contenedorTextarea">
                    <div class="col">
                        <span
                            class="textarea text-break"
                            contenteditable
                            ref="textarea"
                            @keydown="onKeyDown" />
                    </div>
                    <div
                        class="col col-auto guide-4"
                        style="color: #f50">
                        <gif-picker-component
                            :post-id="postId"
                            @gif-seleccionado="recibirGif" />
                        <svg
                            @click="enviarComentario"
                            class="pe-2"
                            fill="currentColor"
                            role="button"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                                fill-rule="evenodd"
                                stroke="none" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GifPickerComponent from "@/components/comments/GifPickerComponent.vue"
import ImagePreloader from "@/components/images/ImagePreloader.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        GifPickerComponent,
        ImagePreloader,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            gifSeleccionado: null,
        }
    },
    props: ["postId"],
    emits: ["commented", "contadorActualizado"],
    computed: {
        userLogged () {
            return this.mainStore.userLogged
        }
    },
    methods: {
        onKeyDown (e) {
            if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault()
                this.enviarComentario()
            }
        },
        enviarComentario () {
            const texto = new DOMParser().parseFromString(
                this.$refs.textarea.innerHTML
                    .replaceAll("<br>", "\n")
                    .replaceAll("<div>", "\n<div>"),
                "text/html"
            ).documentElement.textContent.trim()

            if (!texto && !this.gifSeleccionado) {
                return
            }

            /* AJAX request */
            axios({
                method: "post",
                url: `${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`,
                data: {
                    description: texto,
                    gif_url: this.gifSeleccionado,
                },
                withCredentials: true,
            })
                .then((response) => {
                    this.$emit("commented", {
                        id: response.data.id,
                        description: texto,
                        created_at: Math.trunc(Date.now() / 1000),
                        gif_url: this.gifSeleccionado,
                        user: this.userLogged,
                    })
                    this.$emit("contadorActualizado", response.data.comments_count)

                    this.$refs.textarea.innerHTML = ""
                    this.gifSeleccionado = null
                })
                .catch((error) => {
                    console.log(error)
                    const indices = Object.keys(error.response.data.errors)
                    if (indices.length > 0) {
                        alert(error.response.data.errors[indices[0]])
                    }
                })
        },
        recibirGif (url) {
            this.gifSeleccionado = url
        }
    }
}
</script>
<style scoped>
.imagenUsuario {
    border-radius: 30%;
    height: 35px;
}
.contenedorTextarea{
    background-color: #f9f9f9;
    border: 1px #eee solid;
    border-radius: 12px;
}
.textarea {

    outline: none;
    font-family: inherit;
    font-size: inherit;
    padding: 8px 10px;
    display: block;

    resize: none;
    min-height: 35px;

    font-size: 15px;
}

.textarea[contenteditable]:empty::before {
    content: "Escribe un comentario...";
    color: gray;
}

</style>
