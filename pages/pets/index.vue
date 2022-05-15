<template>
    lista de pets
    <PetsComponent/>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "main",
});

import PetsComponent from "~~/components/pet/PetsComponent.vue";
export default{
  components:{
    PetsComponent,
  }
}
</script>