<template>
    <NuxtLayout name="main">
        <Head>
            <Title>{{ user?.name }} | Gattitus</Title>
        </Head>
        <user-header-component
            v-if="user"
            :user="user" />
        <div class="row gy-4 gx-0 mt-0">
            <div class="col-12 col-md-7 order-2 order-md-1 text-center">
                <div style="max-width: 460px; margin: auto">
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                    <div
                        class="card shadow mb-4"
                        style="height: 500px" />
                </div>
            </div>
            <div class="col-12 col-md-5 order-1 order-md-2">
                <div
                    class="card shadow-sm"
                    style="max-height: 400px; overflow-y: auto">
                    <div class="card-body p-4">
                        <h1 class="pb-3 fw-bold">
                            {{ t('myPets') }}
                        </h1>
                        <div class="row gy-3">
                            <div
                                class="col-4 col-lg-3"
                                v-for="pet in pets"
                                :key="pet.id">
                                <pet-item-component :pet="pet" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
import { t } from "~/i18n/i18n2"

const mainStore = useMainStore()
const route = useRoute()

let user = null
let pets = null

await fetchWithCookie(`${mainStore.backendUrl}/api/@${route.params.username}`)
    .then(response => {
        user = response.data.data
    })

if (user) {
    await fetchWithCookie(`${mainStore.backendUrl}/api/users/${user.id}/pets`)
        .then(response => {
            pets = response.data.data
        })
}

</script>
<script>

import UserHeaderComponent from "~/components/UserHeaderComponent.vue"
import PetItemComponent from "~/components/pet/PetItemComponent.vue"

export default {
    components: {
        UserHeaderComponent,
        PetItemComponent,
    },
    data () {
        return {
        }
    },
    mounted () {

    }
}
</script>
