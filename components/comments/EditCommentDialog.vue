<template>
    <CustomModal
        @cancel="$emit('close')"
        @ok="editComment">
        <template #title>
            Editar comentario
        </template>

        <div class="contenedorTextarea mb-3">
            <span
                class="textarea text-break"
                contenteditable
                ref="textarea"
                @keydown="onKeyDown">
                {{ comment.description }}
            </span>
        </div>

        <template #cancel>
            Cancelar
        </template>
        <template #ok>
            Guardar
        </template>
    </CustomModal>
</template>
<script>
import axios from "axios"
import CustomModal from "~/components/CustomModal.vue"
import { useMainStore } from "~/store/mainStore"
// import axios from "axios"
import toaster from "~~/toaster"

export default {
    components: {
        CustomModal,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore,
        }
    },
    props: ["comment"],
    emits: ["close", "commentEdited"],
    methods: {
        editComment () {
            const texto = new DOMParser().parseFromString(
                this.$refs.textarea.innerHTML
                    .replaceAll("<br>", "\n")
                    .replaceAll("<div>", "\n<div>"),
                "text/html"
            ).documentElement.textContent
            axios.patch(`${this.mainStore.backendUrl}/api/comments/${this.comment.id}`, {
                description: texto,
            }).then(() => {
                this.$emit("commentEdited", {
                    id: this.comment.id,
                    description: texto,
                })
            }).then(() => {
                this.$emit("close")
                toaster.success("comment edited")
            })
        }
    }
}
</script>
<style scoped>
.contenedorTextarea{
    background-color: #f9f9f9;
    border: 1px #999 solid;
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
