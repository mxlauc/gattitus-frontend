<template>
    <CustomModal
        @cancel="close"
        @ok="deleteAccount">
        <template #title>
            ¿Eliminar cuenta?
        </template>
        <p>¿Esta seguro que desea eliminar permanentemente tu cuenta de Gattitus?</p>
        <template #cancel>
            Cancelar
        </template>
        <template #ok>
            Aceptar
        </template>
    </CustomModal>
</template>
<script setup>
import CustomModal from "~/components/CustomModal.vue"
import { useMainStore } from "~~/store/mainStore"
const mainStore = useMainStore()

</script>
<script>
import axios from "axios"

export default {
    emits: ["close"],
    methods: {
        deleteAccount () {
            axios.delete(`${this.mainStore.backendUrl}/api/user`)
                .finally(() => {
                    this.close()
                    window.location.pathname = "/"
                })
        },
        close () {
            this.$emit("close")
        }
    }
}
</script>
