<template>
    <teleport to="body">
        <div class="post-modal">
            <div class="card shadow p-4">
                <h4 class="mb-4">
                    ¿Que gatos aparecen en esta foto?
                </h4>
                <div style="height: 300px;width: 100%; overflow-y: auto; overflow-x: hidden;">
                    <div
                        v-for="c in pets"
                        :key="c.id"
                        class="row-pet"
                        @click="c.selected = !c.selected; refreshPetsSelected()">
                        <div class="row g-1">
                            <div class="col-auto">
                                <ImagePreloader
                                    :image="c.image"
                                    class="pet-item-img"
                                    style="width:40px;"
                                    aspect="1" />
                            </div>
                            <div class="col user-select-none">
                                {{ c.name }}
                            </div>
                            <div class="col-auto">
                                <svg
                                    v-if="c.selected"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="text-primary"
                                    viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="text-muted"
                                    viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="close">
                            Cancelar
                        </button>
                    </div>
                    <div class="col">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="sendsBackPets(); close()">
                            Listo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
import ImagePreloader from "~/components/images/ImagePreloader.vue"
import { useMainStore } from "~/store/mainStore"
import axios from "axios"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    components: {
        ImagePreloader,
    },
    data () {
        return {
            pets: null,
            petsSelected: [],
        }
    },
    props: ["petsPrevious"],
    emits: ["petsSelected", "close"],
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pets/mine`)
            .then(response => {
                this.pets = response.data.data.map(c => {
                    if (this.petsPrevious.find(c2 => c2.id === c.id)) {
                        c.selected = true
                    }
                    return c
                })
                this.refreshPetsSelected()
            })
    },
    methods: {
        close () {
            this.$emit("close")
        },
        sendsBackPets () {
            this.$emit("petsSelected", this.petsSelected)
        },
        refreshPetsSelected () {
            this.petsSelected = this.pets.filter(c => {
                return c.selected
            })
        },
    }
}
</script>
<style scoped>
.post-modal {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
}
.pet-item-img{
    border-radius: 6px;
}
.row-pet{
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
    margin: 5px;
}
.row-pet:hover{
    background-color: #eee;
}
</style>
