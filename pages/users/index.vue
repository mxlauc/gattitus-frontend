<template>
    lista de usuarios xd
    <UsersComponent/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});
import UsersComponent from "~~/components/user/UsersComponent.vue";
export default{
  components:{
    UsersComponent,
  }
}
</script>