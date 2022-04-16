<template>
    <teleport to="body">
        <div class="post-modal">
            <div class="card shadow p-4">
                <h3>¿Reportar publicación?</h3>
                <form
                    @submit.prevent="sendReport"
                    ref="form">
                    <label
                        class="d-block"
                        v-for="report in reportsPaginate?.data"
                        :key="report.id">
                        <input
                            type="radio"
                            name="report_type_id"
                            :value="report.id">
                        {{ report.title }}
                    </label>

                    <textarea
                        class="form-control my-3"
                        name="details"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Detalles" />
                    <p class="text-center">
                        <small>
                            Reportar esta publicación para que
                            <br>
                            el administrador de Gattitus la revise
                        </small>
                    </p>
                    <div class="row">
                        <div class="col">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                @click="close">
                                Cancelar
                            </button>
                        </div>
                        <div class="col">
                            <button
                                type="submit"
                                class="btn btn-primary">
                                Enviar reporte
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </teleport>
</template>
<script>
import axios from "axios"
import { useMainStore } from "@/stores/mainStore"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            reportsPaginate: null
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/admin/reports/types`)
            .then(response => {
                this.reportsPaginate = response.data
            })
    },
    emits: ["close"],
    inject: ["postId"],

    methods: {
        sendReport () {
            const formData = new FormData(this.$refs.form)
            formData.append("post_id", this.postId)
            formData.append("user_id", this.mainStore.userLogged.id)
            console.log(formData)
            axios.post(`${this.mainStore.backendUrl}/api/admin/reports`, formData)
                .then(response => {
                    this.close()
                })
        },
        close () {
            this.$emit("close")
        }
    }
}
</script>
<style scoped>
.post-modal {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
}
</style>
