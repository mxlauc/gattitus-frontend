<template>
    <Popper
        arrow
        placement="top"
        class="popper-activator">
        <ImagePreloader
            option="url_lg"
            :image="pet.image"
            :aspect="1"
            class="shadow-sm pet-icon" />
        <template #content>
            <div class="pet-card-popper m-3">
                <div class="row g-2">
                    <div class="col-auto">
                        <NuxtLink
                            :to="'/pets/' + pet.slug">
                            <ImagePreloader
                                option="url_lg"
                                :image="pet.image"
                                :aspect="1"
                                class="shadow-sm rounded-5 pet-icon-popper" />
                        </NuxtLink>
                    </div>
                    <div class="col">
                        <NuxtLink
                            :to="'/pets/' + pet.slug"
                            class="text-decoration-none">
                            <h3 class="mb-0">
                                <strong>{{ pet.name }}</strong>
                            </h3>
                        </NuxtLink>

                        <h6 class="mb-0">
                            {{ pet.nickname }}
                        </h6>
                    </div>
                </div>
                <NuxtLink
                    :to="'/pets/' + pet.slug"
                    class="btn btn-primary mt-2">
                    Ver más fotos
                </NuxtLink>
            </div>
        </template>
    </Popper>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import Popper from "vue3-popper"

export default {
    components: {
        ImagePreloader,
        Popper,
    },
    props: {
        pet: Object,
    },
}
</script>
<style>
.pet-icon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #fff;
}
.popper-activator{
    border:unset !important;
    margin:unset !important;
}
.popper-activator:not(:first-child){
    margin-left: -5px !important;
}
.pet-icon-popper{
    width: 50px;
    height: 50px;
}
.pet-card-popper{
    min-width: 300px;
}
</style>
