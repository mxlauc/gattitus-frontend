<template>
    <div>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <hr
                class="my-0"
                v-if="comentarios?.length">
            <a
                v-if="comentariosPaginador && comentariosPaginador.next"
                class="d-block text-muted text-center py-2 fw-bold"
                style="font-size: 12px; text-decoration:none;"
                role="button"
                @click="cargarMasComentarios">
                {{ t('previousComments') }}
            </a>
            <hr
                class="my-0"
                v-if="comentariosPaginador && comentariosPaginador.next">
            <div
                style="overflow: hidden auto;  scroll-behavior: smooth; flex-grow: 1;"
                class="ps-3 pe-0 custom-scroll"
                ref="commentsDiv">
                <transition-group name="grupo-comentarios">
                    <comentario-component
                        :post-id="postId"
                        v-for="comentario in comentarios?.slice().reverse()"
                        :key="comentario.id"
                        :comentario="comentario"
                        @comment-deleted="commentDeleted"
                        @contador-actualizado="contadorActualizado"
                        @comment-edited="commentEdited" />
                </transition-group>
            </div>
            <NewComment
                class="mx-3"
                :post-id="postId"
                @commented="onCommented"
                @contador-actualizado="contadorActualizado" />
        </div>
    </div>
</template>
<script setup>
import { t } from "~/i18n/i18n2"
</script>
<script>
import ComentarioComponent from "~/components/comments/ComentarioComponent.vue"
import NewComment from "~/components/comments/NewComment.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        ComentarioComponent,
        NewComment,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            comentarios: null,
            comentariosPaginador: null,
        }
    },
    props: ["postId"],
    emits: ["contadorActualizado"],
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`)
            .then((response) => {
                this.$emit("contadorActualizado", response.data.meta.total)
                this.comentariosPaginador = response.data.links
                this.comentarios = response.data.data
            })
            .catch((response) => {
                console.log(response)
            })
    },
    methods: {
        cargarMasComentarios () {
            axios.get(this.comentariosPaginador.next)
                .then((response) => {
                    this.comentariosPaginador = response.data.links
                    this.comentarios = this.comentarios.concat(response.data.data)
                })
                .then(() => {
                    this.$refs.commentsDiv.scrollTop = 0
                })
                .catch((response) => {
                    console.log(response)
                })
        },
        onCommented (comment) {
            this.comentarios.unshift(comment)
            window.setTimeout(() => {
                this.$refs.commentsDiv.scrollTop = this.$refs.commentsDiv.scrollHeight
            }, 200)
        },
        contadorActualizado (c) {
            this.$emit("contadorActualizado", c)
        },
        commentDeleted (id) {
            const indice = this.comentarios.findIndex((comentario) =>
                comentario.id === id
            )
            this.comentarios.splice(indice, 1)
        },
        commentEdited (c) {
            const comment_f = this.comentarios.find((comentario) => comentario.id === c.id)
            comment_f.description = c.description
        },
    },
}
</script>

<style scoped>

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
