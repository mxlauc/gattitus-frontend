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
import { useMainStore } from "@/stores/mainStore"
import CustomModal from "../CustomModal.vue"
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
    inject: ["postId"],
    methods: {
        eliminarPost () {
            this.mainStore.deletePost(this.postId)
                .then(() => {
                    this.close()
                })
        },
        close () {
            this.$emit("close")
        }
    }
}
</script>
