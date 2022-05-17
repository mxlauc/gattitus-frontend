<template>
    <hr class="my-0">
    <transition-group name="grupo-comentarios">
        <comentario-component
            :hide-options="true"
            :post-id="postId"
            v-for="comentario in comments"
            :key="comentario.id"
            :comentario="comentario" />
    </transition-group>
    <NewComment
        :post-id="postId"
        @commented="onCommented"
        @contador-actualizado="contadorActualizado" />
</template>
<script>
import ComentarioComponent from "~/components/comments/ComentarioComponent.vue"
import NewComment from "~/components/comments/NewComment.vue"
export default {
    components: {
        ComentarioComponent,
        NewComment,
    },
    data () {
        return {
            comments: this.bestComments
        }
    },
    props: ["postId", "bestComments"],
    emits: ["contadorActualizado"],
    methods: {
        onCommented (comment) {
            this.comments.push(comment)
        },
        contadorActualizado (c) {
            this.$emit("contadorActualizado", c)
        },
    }
}
</script>
<style scoped>
.grupo-comentarios-enter-active {
  transition: all 0.8s ease-in-out;

}

.grupo-comentarios-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.grupo-comentarios-enter-from,
.grupo-comentarios-leave-to {
    transform: translateX(5px);
    opacity: 0;
    width: 100%;
}
.grupo-comentarios-move {
  transition: transform 0.5s ease-out;
}
</style>
