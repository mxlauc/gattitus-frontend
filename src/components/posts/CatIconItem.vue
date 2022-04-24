<template>
    <Popper
        arrow
        placement="top"
        class="popper-activator">
        <ImagePreloader
            option="url_lg"
            :image="cat.image"
            :aspect="1"
            class="shadow-sm cat-icon" />
        <template #content>
            <div class="cat-card-popper">
                <div class="row g-2">
                    <div class="col-auto">
                        <router-link
                            :to="'/cats/' + cat.slug">
                            <ImagePreloader
                                option="url_lg"
                                :image="cat.image"
                                :aspect="1"
                                class="shadow-sm rounded-5 cat-icon-popper" />
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link
                            :to="'/cats/' + cat.slug"
                            class="text-decoration-none">
                            <h3 class="mb-0">
                                <strong>{{ cat.name }}</strong>
                            </h3>
                        </router-link>

                        <h6 class="mb-0">
                            {{ cat.nickname }}
                        </h6>
                    </div>
                </div>
                <router-link
                    :to="'/cats/' + cat.slug"
                    class="btn btn-primary mt-2 float-end">
                    Ver más fotos
                </router-link>
            </div>
        </template>
    </Popper>
</template>
<script>
import ImagePreloader from "../ImagePreloader.vue"
import Popper from "vue3-popper"

export default {
    components: {
        ImagePreloader,
        Popper,
    },
    props: {
        cat: Object,
    },
}
</script>
<style>
.cat-icon{
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
.cat-icon-popper{
    width: 50px;
    height: 50px;
}
.cat-card-popper{
    min-width: 300px;
}

 :root {
    --popper-theme-background-color: #fff;
    --popper-theme-background-color-hover: #fff;

    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;

    --popper-theme-padding: 20px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, .5);
  }
</style>
