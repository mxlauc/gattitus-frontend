<template>
    <CustomModal
        @cancel="$emit('close')"
        @ok="deleteComment">
        <template #title>
            Eliminar comentario
        </template>
        <p>¿Desea eliminar este comentario?</p>
        <template #cancel>
            Cancelar
        </template>
        <template #ok>
            Eliminar
        </template>
    </CustomModal>
</template>
<script>
import CustomModal from "~/components/CustomModal.vue"
import { useMainStore } from "~/store/mainStore"
import axios from "axios"
import toaster from "~~/toaster"

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
    props: ["comment"],
    emits: ["close", "commentDeleted", "contadorActualizado"],
    methods: {
        deleteComment () {
            axios.delete(`${this.mainStore.backendUrl}/api/comments/${this.comment.id}`)
                .then(response => {
                    this.$emit("contadorActualizado", response.data.comments_count)
                })
                .then(() => {
                    this.$emit("commentDeleted", this.comment.id)
                    toaster.success("comment deleted")
                })
                .then(() => {
                    this.$emit("close")
                })
        }
    }
}
</script>
