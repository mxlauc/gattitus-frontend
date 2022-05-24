<template>
    <div class="row mx-0 g-3">
        <div class="col-12 col-md-8 order-2 order-md-1 pb-5">
            <div
                ref="petRow"
                class="row mx-0 g-2"
                id="pet-posts">
                <div
                    class="col-6 col-sm-4"
                    v-for="p in posts"
                    :key="p.id">
                    <PostThumbnail :post="p" />
                </div>
            </div>
        </div>
        <StickyMiddleColumn
            :top="80"
            class="col-12 col-md-4 order-1 order-md-2">
            <div class="card shadow-sm">
                <div class="card-body text-center">
                    <div class="text-end">
                        <DisplayOnMounted>
                            <Popper
                                arrow
                                placement="bottom">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32.055 32.055"
                                    width="20"
                                    height="20"
                                    class="text-black-50"
                                    fill="currentColor">
                                    <path
                                        d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                                </svg>
                                <template #content>
                                    <div class="list-group list-group-flush text-start">
                                        <NuxtLink
                                            class="list-group-item list-group-item-action"
                                            :to="'/pets/' + pet?.slug + '/edit'">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-pencil-square"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                            Editar pet
                                        </NuxtLink>
                                        <a
                                            href="#"
                                            class="list-group-item list-group-item-action"
                                            @click="show_delete_dialog=true">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-trash-fill"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                            Eliminar pet
                                        </a>
                                    </div>
                                </template>
                            </Popper>
                        </DisplayOnMounted>
                    </div>
                    <img
                        :src="pet?.image.url_lg"
                        class="mb-3"
                        style="height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        width: 100px;"
                        alt="">
                    <h2 class="mb-0 fw-bold">
                        {{ pet?.name }}
                    </h2>
                    <p>
                        {{ pet?.nickname }}
                    </p>
                </div>
            </div>

            <div class="card shadow-sm mt-3">
                <div class="card-body">
                    <UserToFollowItem
                        v-if="pet"
                        :user="pet.user" />
                </div>
            </div>
        </StickyMiddleColumn>
        <DeletePetDialog
            v-if="show_delete_dialog"
            :pet-id="pet?.id"
            @close="show_delete_dialog=false"></DeletePetDialog>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
import { t } from "~/i18n/i18n2"
const route = useRoute()
const router = useRouter()

const mainStore = useMainStore()

let Masonry = Object
if (process.client) {
    Masonry = (await import("masonry-layout")).default
}
let pet = null
await fetchWithCookie(`${mainStore.backendUrl}/api/pets/${route.params.slug}`)
    .then(response => {
        pet = response.data.data
    }).catch(error => {})

if (!pet) {
    router.replace("/404")
}

</script>
<script>

import axios from "axios"
import StickyMiddleColumn from "~/components/StickyMiddleColumn.vue"
import DisplayOnMounted from "../DisplayOnMounted.vue"
import Popper from "vue3-popper"
import DeletePetDialog from "~/components/pet/DeletePetDialog.vue"
import PostThumbnail from "~/components/posts/PostThumbnail.vue"
import UserToFollowItem from "~/components/user/UserToFollowItem.vue"

export default {
    components: {
        StickyMiddleColumn,
        PostThumbnail,
        UserToFollowItem,
        DisplayOnMounted,
        Popper,
        DeletePetDialog,
    },
    data () {
        return {
            posts: null,
            show_delete_dialog: false,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/posts`)
            .then(response => {
                this.posts = response.data.data
            }).then(() => {
                const msnry = new this.Masonry("#pet-posts", {
                    percentPosition: true,
                })
                msnry.reloadItems()
                msnry.layout()
            })
    },
}
</script>
