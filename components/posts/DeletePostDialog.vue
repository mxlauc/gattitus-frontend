<template>
    <CustomModal
        @cancel="close"
        @ok="eliminarPost">
        <template #title>
            ¿Eliminar publicación?
        </template>
        <p>¿Esta seguro que desea eliminar esta publicación?</p>
        <template #cancel>
            Cancelar
        </template>
        <template #ok>
            Aceptar
        </template>
    </CustomModal>
</template>
<script>
import { useMainStore } from "~/store/mainStore"
import CustomModal from "~/components/CustomModal.vue"
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
    data () {
        return {

        }
    },
    emits: ["close"],
    props: ["postId"],
    methods: {
        eliminarPost () {
            axios.delete(`${this.mainStore.backendUrl}/api/posts/${this.postId}`)
                .then(() => {
                    this.mainStore.removePost(this.postId)
                    this.close()
                    this.$router.replace({ path: "/" })
                    toaster.success("Post deleted")
                })
        },
        close () {
            this.$emit("close")
        }
    }
}
</script>
