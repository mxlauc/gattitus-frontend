<template>
    <div>
        <hr
            class="my-0"
            v-if="comentarios?.length">
        <a
            v-if="comentariosPaginador && comentariosPaginador.next"
            class="d-block text-muted text-center py-2 fw-bold ms-2"
            style="font-size: 12px; text-decoration:none;"
            role="button"
            v-wave
            @click="cargarMasComentarios">
            {{ $t('previousComments') }}
        </a>
        <hr
            class="my-0"
            v-if="comentariosPaginador && comentariosPaginador.next">
        <div>
            <transition-group name="grupo-comentarios">
                <comentario-component
                    v-for="comentario in comentarios.slice().reverse()"
                    :key="comentario.id"
                    :comentario="comentario" />
            </transition-group>
        </div>

        <div
            class="row g-0 py-2"
            v-if="userLogged">
            <div class="col col-auto">
                <image-preloader
                    :image="userLogged?.image"
                    class="imagenUsuario shadow" />
            </div>
            <div class="col ms-2">
                <div class="row g-0 contenedorTextarea">
                    <div class="col">
                        <span
                            :id="'cajaTexto' + postId"
                            class="textarea text-break"
                            contenteditable
                            ref="textarea"
                            @keydown="onKeyDown" />
                    </div>
                    <div
                        class="col col-auto guide-4"
                        style="color: #f50">
                        <gif-picker-component @gif-seleccionado="recibirGif" />
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
            <div
                class="col-12 p-3 position-relative"
                v-if="gifSeleccionado">
                <img
                    :src="gifSeleccionado"
                    class="w-100">
                <button
                    type="button"
                    class="btn-close bg-white shadow position-absolute top-0 end-0 m-4 p-2 rounded-circle"
                    aria-label="Close"
                    @click="gifSeleccionado=null" />
            </div>
        </div>
        <!-- Modal Eliminar comentario -->
        <div
            v-if="userLogged"
            class="modal fade"
            :id="'eliminarComentarioModal' + postId"
            tabindex="-1"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('deleteComment') }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close" />
                    </div>
                    <div class="modal-body">
                        <p class="mb-3">
                            {{ $t('rusDeleteComment') }}
                        </p>
                        <div class="row g-0">
                            <div class="col col-auto py-1 ps-2">
                                <img
                                    class="imagenUsuario"
                                    :src="
                                        comentarioAEliminar?.user.avatar
                                    ">
                            </div>
                            <div class="col ps-2 pt-1 pb-1">
                                <div
                                    class="contenedorTextarea text-break p-2"
                                    style="font-size: 12px">
                                    <label class="fw-bold">{{
                                        comentarioAEliminar?.user.name
                                    }}</label>
                                    <p class="m-0">
                                        {{ comentarioAEliminar?.description }}
                                    </p>
                                    <img
                                        :src="comentarioAEliminar?.gif_url"
                                        v-if="comentarioAEliminar?.gif_url"
                                        class="img-fluid rounded">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            {{ $t('cancel') }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="eliminarComentario">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-check2"
                                viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                            {{ $t('delete') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Editar comentario -->
        <div
            v-if="userLogged"
            class="modal fade"
            :id="'editarComentarioModal' + postId"
            tabindex="-1"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('editComment') }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close" />
                    </div>
                    <div class="modal-body">
                        <div class="row g-0">
                            <div class="col col-auto py-2 ps-2">
                                <img
                                    :src="comentarioAEditar?.user.avatar"
                                    class="imagenUsuario">
                            </div>
                            <div class="col p-2">
                                <div class="contenedorTextarea">
                                    <span
                                        class="textarea text-break"
                                        contenteditable
                                        ref="textareaEditar">
                                        {{ comentarioAEditar?.description }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            {{ $t('cancel') }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="editarComentario">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-check2"
                                viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                            {{ $t('save') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ComentarioComponent from "./ComentarioComponent.vue"
import GifPickerComponent from "./GifPickerComponent.vue"
import ImagePreloader from "./ImagePreloader.vue"
import axios from "axios"
import * as bootstrap from "bootstrap"
import { useMainStore } from "@/stores/mainStore"

export default {
    components: {
        ComentarioComponent,
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
            comentarios: this.bestComments,
            comentariosPaginador: null,
            comentarioAEliminar: undefined,
            comentarioAEditar: undefined,
            gifSeleccionado: null
        }
    },
    props: ["bestComments"],
    inject: ["postId"],
    emits: ["contadorActualizado"],
    mounted () {
        axios({
            method: "get",
            url: `${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`,
        })
            .then((response) => {
                this.$emit("contadorActualizado", response.data.meta.total)
                this.comentariosPaginador = response.data.links
                this.comentarios = response.data.data
            })
            .catch((response) => {
                console.log(response)
            })

        if (this.userLogged) {
            const thisComponent = this
            document
                .getElementById("eliminarComentarioModal" + this.postId)
                .addEventListener("show.bs.modal", function (event) {
                    const idComentario = event.relatedTarget.getAttribute(
                        "data-bs-id-comentario"
                    )
                    thisComponent.buscarComentarioEliminar(idComentario)
                })
            document
                .getElementById("editarComentarioModal" + this.postId)
                .addEventListener("show.bs.modal", function (event) {
                    const idComentario = event.relatedTarget.getAttribute(
                        "data-bs-id-comentario"
                    )
                    thisComponent.buscarComentarioEditar(idComentario)
                })
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
            })
                .then((response) => {
                    this.$refs.textarea.innerHTML = ""

                    this.comentarios.unshift({
                        id: response.data.id,
                        description: texto,
                        created_at: Math.trunc(Date.now() / 1000),
                        gif_url: this.gifSeleccionado,
                        user: this.userLogged,
                    })
                    this.gifSeleccionado = null
                    this.$emit("contadorActualizado", response.data.comments_count)
                })

                .catch((error) => {
                    const indices = Object.keys(error.response.data.errors)
                    if (indices.length > 0) {
                        alert(error.response.data.errors[indices[0]])
                    }
                })
        },
        cargarMasComentarios () {
            axios({
                method: "get",
                url: this.comentariosPaginador.next,
            })
                .then((response) => {
                    this.comentariosPaginador = response.data.links
                    this.comentarios = this.comentarios.concat(response.data.data)
                })
                .catch((response) => {
                    console.log(response)
                })
        },
        buscarComentarioEliminar (id) {
            this.comentarioAEliminar = this.buscar(id)
        },
        buscarComentarioEditar (id) {
            this.comentarioAEditar = this.buscar(id)
        },
        buscar (id) {
            return this.comentarios.find((comentario) => comentario.id === id)
        },
        eliminarComentario () {
            const modal = bootstrap.Modal.getOrCreateInstance(
                document.querySelector("#eliminarComentarioModal" + this.postId)
            )

            axios({
                method: "post",
                url: `/comments/${this.comentarioAEliminar.id}`,
                data: {
                    _method: "DELETE",
                },
            })
                .then((response) => {
                    const indice = this.comentarios.findIndex(
                        (comentario) =>
                            comentario.id === this.comentarioAEliminar.id
                    )
                    this.comentarios.splice(indice, 1)
                    modal.hide()
                    this.$emit("contadorActualizado", response.data.count)
                })

                .catch((response) => {
                    console.log(response)
                })
        },
        editarComentario () {
            const modal = bootstrap.Modal.getOrCreateInstance(
                document.querySelector("#editarComentarioModal" + this.postId)
            )
            const texto = new DOMParser().parseFromString(
                this.$refs.textareaEditar.innerHTML
                    .replaceAll("<br>", "\n")
                    .replaceAll("<div>", "\n<div>"),
                "text/html"
            ).documentElement.textContent

            axios({
                method: "post",
                url: `/comments/${this.comentarioAEditar.id}`,
                data: {
                    _method: "PUT",
                    description: texto,
                },
            })
                .then((response) => {
                    this.comentarioAEditar.description = texto
                    modal.hide()
                })

                .catch((response) => {
                    console.log(response)
                })
        },
        recibirGif (url) {
            this.gifSeleccionado = url
        }
    },
    computed: {
        userLogged () {
            return this.mainStore.userLogged
        },
    },
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

.grupo-comentarios-enter-active {
  transition: all 0.8s ease-in-out;

}

.grupo-comentarios-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.grupo-comentarios-enter-from,
.grupo-comentarios-leave-to {
    transform: translateX(5px);
    opacity: 0;
    width: 100%;
}
.grupo-comentarios-move {
  transition: transform 0.5s ease-out;
}
</style>
