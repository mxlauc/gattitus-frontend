<template>
    lista de pages
    <PagesList/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import PagesList from "~~/components/admin/pages/PagesList.vue";
export default{
  components:{
    PagesList,
  }
}
</script>