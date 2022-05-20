<template>
    <div class="py-1">
        <div class="row g-0">
            <div class="col col-auto py-1">
                <a :href="comentario.user.url">
                    <image-preloader
                        :image="comentario.user.image"
                        aspect="1"
                        class="imagen-usuario shadow" />
                </a>
            </div>
            <div class="col ps-2 pt-1">
                <span
                    class="text-break"
                    style="font-size: 15px">
                    <a
                        :href="comentario.user.url"
                        class="text-dark text-decoration-none d-block mb-1">
                        <span class="fw-bold">
                            {{ comentario.user.name }}
                        </span>
                        <span style="color: #bbb;">
                            @{{ comentario.user.username }}
                        </span>
                    </a>
                    <p
                        class="m-0"
                        style="color: #777;">
                        {{ comentario.description }}
                    </p>
                    <div
                        class="position-relative"
                        v-if="comentario.gif_url">
                        <video
                            :src="comentario.gif_url"
                            oncontextmenu="return false;"
                            loop
                            autoplay
                            muted
                            class="img-fluid shadow-sm"
                            style="border-radius: 10px;height: 120px; vertical-align: middle;"></video>
                        <span
                            class="px-1 rounded position-absolute bottom-0 start-0 m-1"
                            style="background-color:rgba(255,255,255,0.4);">
                            <img
                                src="https://www.gstatic.com/tenor/web/attribution/via_tenor_logo_grey.png"
                                style="filter: drop-shadow(1px 1px 2px rgba(255, 255, 255, 1));"
                                width="50">
                        </span>
                    </div>
                </span>
                <div
                    class="mb-1 pt-2 text-muted"
                    style="font-size:13px;">
                    <span
                        class="fw-bold"
                        role="button"
                        @click="like"
                        :class="{'text-primary': miLike}"
                        v-if="mainStore.userLogged">{{ t('like') }}</span>
                    <span v-if="mainStore.userLogged && contador"> ·</span>
                    <span
                        class="fw-bold px-1"
                        v-if="contador"
                        @click="showReactions=true"
                        role="button"> {{ contador }} </span>
                    <span
                        class="ms-3"
                        v-if="mainStore.userLogged || contador" />
                    <span>{{ timeAgo(comentario.created_at) }}</span>
                </div>
            </div>
            <div
                class="col col-auto"
                v-if="!hideOptions && mainStore.userLogged && mainStore.userLogged.id == comentario.user.id">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="py-3 px-2"
                    style="width: 32px; color:#888;"
                    viewBox="0 0 16 16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <ul class="dropdown-menu dropdown-menu-end shadow">
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="showEditCommentDialog=true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                            {{ t('editComment') }}
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="showDeleteCommentDialog=true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                            {{ t('deleteComment') }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <DeleteCommentDialog
            :comment="comentario"
            v-if="showDeleteCommentDialog"
            @close="showDeleteCommentDialog = false"
            @comment-deleted="commentDeleted"
            @contador-actualizado="contadorActualizado" />
        <EditCommentDialog
            :comment="comentario"
            v-if="showEditCommentDialog"
            @close="showEditCommentDialog=false"
            @comment-edited="commentEdited" />
        <ShowReactionsDialog
            v-if="showReactions"
            @close="showReactions=false"
            :url="mainStore.backendUrl + '/api/comments/' + comentario.id + '/reactions'" />
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
import { t, timeAgo } from "~/i18n/i18n2"

const mainStore = useMainStore()
</script>
<script>

import ImagePreloader from "~/components/images/ImagePreloader.vue"
import DeleteCommentDialog from "~/components/comments/DeleteCommentDialog.vue"
import EditCommentDialog from "~/components/comments/EditCommentDialog.vue"
import ShowReactionsDialog from "~/components/ShowReactionsDialog.vue"
import axios from "axios"

export default {
    components: {
        ImagePreloader,
        DeleteCommentDialog,
        EditCommentDialog,
        ShowReactionsDialog,
    },
    data () {
        return {
            miLike: false,
            contador: 0,
            showLikes: false,
            showDeleteCommentDialog: false,
            showEditCommentDialog: false,
            showReactions: false,
        }
    },
    props: ["comentario", "postId", "hideOptions"],
    emits: ["commentDeleted", "commentEdited", "contadorActualizado"],
    mounted () {
        this.miLike = this.comentario.my_reaction
        this.contador = this.comentario.reactions_count
    },
    methods: {
        like () {
            axios.post(`${this.mainStore.backendUrl}/api/comments/${this.comentario.id}/reactions`)
                .then(response => {
                    this.miLike = response.data.own_reaction
                    this.contador = response.data.reactions_count
                })
                .catch(response => {
                    console.log(response.data)
                })
        },
        contadorActualizado (c) {
            this.$emit("contadorActualizado", c)
        },
        commentDeleted (id) {
            this.$emit("commentDeleted", id)
        },
        commentEdited (c) {
            this.$emit("commentEdited", c)
        }
    },
}
</script>

<style scoped>
.imagen-usuario {
    border-radius: 30%;
    height: 40px;
}

</style>
