<template>
  <div>
    bienvenido
    <HomeComponent/>
  </div>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import HomeComponent from "~~/components/sections/HomeComponent.vue";
export default{
  components:{
    HomeComponent,
  }
}
</script>
