<template>
    <CustomModal
        @cancel="close"
        @ok="deletePet">
        <template #title>
            ¿Eliminar pet?
        </template>
        <p>¿Esta seguro que desea eliminar este pet?</p>
        <template #cancel>
            Cancelar
        </template>
        <template #ok>
            Eliminar
        </template>
    </CustomModal>
</template>
<script setup>
import CustomModal from "../CustomModal.vue"
import { useMainStore } from "~~/store/mainStore"
import axios from "axios"
import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster({
    position: "bottom",
    duration: 3000,

})

const mainStore = useMainStore()
</script>
<script>

export default {
    emits: ["close"],
    props: ["petId"],

    methods: {
        deletePet () {
            axios.delete(`${this.mainStore.backendUrl}/api/pets/${this.petId}`)
                .then(() => {
                    this.close()
                    this.toaster.success("¡Eliminado!")
                    this.$router.push({ path: "/", replace: true })
                })
        },
        close () {
            this.$emit("close")
        }
    }

}
</script>
