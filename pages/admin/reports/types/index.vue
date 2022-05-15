<template>
    lista de rerpots types
    <ReportTypesList/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});
import ReportTypesList from "~~/components/admin/reports/ReportTypesList.vue";
export default{
  components:{
    ReportTypesList,
  }
}
</script>