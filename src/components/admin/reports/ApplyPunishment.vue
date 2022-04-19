<template>
    <teleport to="body">
        <div class="post-modal">
            <div class="card shadow p-4">
                <h3>Aplicar castigo</h3>
                <form
                    @submit.prevent="sendReport"
                    ref="form">
                    <div
                        class="form-check"
                        v-for="p in punishments"
                        :key="p.time">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="time"
                            :value="p.time"
                            :id="'radio' + p.time">
                        <label
                            class="form-check-label"
                            :for="'radio' + p.time">
                            {{ p.title }}
                        </label>
                    </div>

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
                                Aplicar castigo
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
            punishments: [
                {
                    time: 1,
                    title: "Un día",
                }, {
                    time: 3,
                    title: "Tres días",
                }, {
                    time: 7,
                    title: "Una semana",
                }, {
                    time: 14,
                    title: "Dos semanas",
                }, {
                    time: 30,
                    title: "Un mes",
                }, {
                    time: 365,
                    title: "Un año",
                },
            ]
        }
    },
    emits: ["close"],
    inject: ["postId"],

    methods: {
        sendReport () {
            const formData = new FormData(this.$refs.form)
            formData.append("user_id", this.mainStore.userLogged.id)
            console.log(formData)
            axios.post(`${this.mainStore.backendUrl}/api/admin/punishments`, formData)
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
