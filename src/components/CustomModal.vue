<template>
    <teleport to="body">
        <div
            class="modal-container"
            ref="modalContainer">
            <div
                class="modal-background"
                @click="$emit('cancel')" />
            <div class="card shadow p-3">
                <h3>
                    <slot name="title" />
                </h3>
                <slot />
                <div class="row">
                    <div class="col text-center">
                        <button
                            @click="$emit('cancel')"
                            class="btn btn-secondary">
                            <slot
                                name="cancel" />
                        </button>
                    </div>
                    <div class="col text-center">
                        <button
                            @click="$emit('ok')"
                            class="btn btn-primary">
                            <slot
                                name="ok" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
export default {
    mounted () {
        document.body.style.overflow = "hidden"
    },
    unmounted () {
        document.body.style.overflow = null
    },
    emits: ["cancel", "ok"],
}
</script>
<style scoped>
.modal-container {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.modal-background{
    background-color: #000b;
    width: 100%;
    height: 100%;
}

.card {
    position: absolute;
    max-width: 80%;
}

</style>
