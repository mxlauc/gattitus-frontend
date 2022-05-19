<template>
    <div>
        <input
            type="text"
            ref="title">
        <textarea
            ref="description"
            cols="30"
            rows="10" />
        <button
            class="btn btn-primary"
            @click="guardarReporte">
            Guardar
        </button>
    </div>
</template>
<script>
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

axios.defaults.withCredentials = true

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    methods: {
        guardarReporte () {
            if (!this.$refs.title.value || !this.$refs.description.value) {
                alert("no se permiten campos vacios")
                return
            }

            const formData = new FormData()
            formData.append("title", this.$refs.title.value)
            formData.append("description", this.$refs.description.value)

            axios.post(`${this.mainStore.backendUrl}/api/admin/reports/types`, formData)
                .then(response => {
                    this.$router.replace({ path: "/admin/reports/types" })
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
}
</script>
