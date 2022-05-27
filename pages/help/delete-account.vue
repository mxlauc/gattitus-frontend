<template>
    <NuxtLayout name="help">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col col-12 col-sm-6 order-2 order-sm-1">
                        <div class="card">
                            <div class="card-body">
                                <h2>Eliminar cuenta de Gattitus</h2>
                                <p>
                                    Si eliminas tu cuenta, se borrarán de forma definitiva tu perfil y tus publicaciones y
                                    seguidores.<br><br>Sin embargo, puede que tu imagen de perfil aun esten disponibles en comentarios y
                                    likes de publicaciones, pero estos se eliminaran cuando las publicaciones se eliminen.
                                </p>
                            </div>
                        </div>
                        <div class="card mt-4 mb-5">
                            <div class="card-body">
                                <h3>Para eliminar tu cuenta has click en el botón de abajo</h3>
                                <button
                                    class="btn btn-danger mt-3"
                                    @click="show_delete_dialog=true">
                                    Eliminar mi cuenta de Gattitus de forma permanente
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-sm-6 order-1 order-sm-2">
                        <div class="card p-1 px-lg-5 pt-lg-5 pb-lg-1 mb-3">
                            <figure class="figure">
                                <img
                                    class="figure-img img-fluid rounded"
                                    src="/img/cat_sad.png">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DeleteAccountDialog
            v-if="show_delete_dialog"
            @close="show_delete_dialog=false"></DeleteAccountDialog>
    </NuxtLayout>
</template>
<script setup>
import { useMainStore } from "~~/store/mainStore"
import DeleteAccountDialog from "./DeleteAccountDialog.vue"
const mainStore = useMainStore()
</script>
<script>

export default {
    data () {
        return {
            show_delete_dialog: false,
        }
    }
}
</script>
