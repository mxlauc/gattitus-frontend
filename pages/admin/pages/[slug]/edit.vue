<template>
    <PageEdit/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import PageEdit from "~/components/admin/pages/PageEdit.vue"
export default{
    components:{
        PageEdit,
    }
}
</script>