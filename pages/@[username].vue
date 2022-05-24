<template>
    <NuxtLayout name="main">
        <Head>
            <Title>{{ user?.name }} | Gattitus</Title>
        </Head>
        <user-header-component
            v-if="user"
            :user="user" />
        <div class="row gy-4 gx-0 mt-0">
            <div class="col-12 col-md-7 order-2 order-md-1">
                <div style="max-width: 460px; margin: auto">
                    <PostComponent
                        v-for="p in posts"
                        :key="p.id"
                        :post="p" />
                </div>
            </div>
            <StickyMiddleColumn
                class="col-12 col-md-5 order-1 order-md-2"
                :top="80">
                <div
                    class="card shadow-sm mb-0 mb-md-5">
                    <div class="card-body p-4">
                        <h1 class="pb-3 fw-bold">
                            {{ t('myPets') }}
                        </h1>
                        <div class="row g-2">
                            <div
                                class="col-4 col-sm-3 col-md-4 col-lg-3"
                                v-for="pet in pets"
                                :key="pet.id">
                                <pet-item-component :pet="pet" />
                            </div>
                        </div>
                    </div>
                </div>
            </StickyMiddleColumn>
            <!--div class="col-12 col-md-5 order-1 order-md-2">
                <div
                    class="card shadow-sm">
                    <div class="card-body p-4">
                        <h1 class="pb-3 fw-bold">
                            {{ t('myPets') }}
                        </h1>
                        <div class="row g-2">
                            <div
                                class="col-4 col-sm-3 col-md-4 col-lg-3"
                                v-for="pet in pets"
                                :key="pet.id">
                                <pet-item-component :pet="pet" />
                            </div>
                        </div>
                    </div>
                </div>
            </!--div-->
        </div>
    </NuxtLayout>
</template>
<script setup>
import StickyMiddleColumn from "~/components/StickyMiddleColumn.vue"
import { useMainStore } from "~/store/mainStore"
import { t } from "~/i18n/i18n2"

const mainStore = useMainStore()
const route = useRoute()

let user = null
let pets = null
let posts = null

await fetchWithCookie(`${mainStore.backendUrl}/api/@${route.params.username}`)
    .then(response => {
        user = response.data.data
    })
    .catch(error => {})

if (user) {
    await fetchWithCookie(`${mainStore.backendUrl}/api/users/${user.id}/pets`)
        .then(response => {
            pets = response.data.data
        })
}
if (user) {
    await fetchWithCookie(`${mainStore.backendUrl}/api/users/${user.id}/posts`)
        .then(response => {
            posts = response.data.data
        })
}

</script>
<script>

import UserHeaderComponent from "~/components/UserHeaderComponent.vue"
import PetItemComponent from "~/components/pet/PetItemComponent.vue"
import PostComponent from "~~/components/posts/PostComponent.vue"

export default {
    components: {
        UserHeaderComponent,
        PetItemComponent,
        PostComponent,
    },
    data () {
        return {
        }
    },
    mounted () {

    }
}
</script>
