<template>
    lista reprots posts
    <ReportedPostsList/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import ReportedPostsList from "~~/components/admin/reports/ReportedPostsList.vue";
export default{
  components:{
    ReportedPostsList,
  }
}
</script>