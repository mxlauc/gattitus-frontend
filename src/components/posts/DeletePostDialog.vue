<template>
    <teleport to="body">
        <div class="post-modal">
            <div class="card shadow p-4">
                <h3>¿Eliminar publicación?</h3>
                <div class="row">
                    <div class="col">
                        <button
                            class="btn btn-secondary"
                            @click="close">
                            Cancelar
                        </button>
                    </div>
                    <div class="col">
                        <button
                            class="btn btn-primary"
                            @click="eliminarPost">
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
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
