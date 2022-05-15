<template>
    <CreateReportType/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import CreateReportType from "~~/components/admin/reports/CreateReportType.vue";
export default{
    components:{
        CreateReportType,
    }
}
</script>