<template>
    ver post
    {{$route.params.id}}
    <ViewPost/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});
import ViewPost from "~~/components/posts/ViewPost.vue";
export default{
    components:{
        ViewPost,
    }
}
</script>