<template>
<UsersList/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import UsersList from "~~/components/admin/UsersList.vue"
export default {
    components:{
        UsersList,
    }
}
</script>
