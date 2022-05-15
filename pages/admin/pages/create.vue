<template>
    <PageCreate/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import PageCreate from "~~/components/admin/pages/PageCreate.vue";
export default{
    components:{
        PageCreate,
    }
}

</script>
