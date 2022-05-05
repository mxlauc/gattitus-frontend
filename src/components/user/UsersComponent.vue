<template>
    <div>
        <input
            type="text"
            class="w-100 form-control my-4"
            placeholder="Buscar usuario">

        <div class="row g-3 mx-0">
            <div
                class="col-12 col-sm-6 col-lg-4"
                v-for="u in users"
                :key="u.id">
                <div
                    class="card shadow-sm"
                    style="height: 100%;">
                    <div
                        class="card-body">
                        <UserToFollowItem :user="u" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useMainStore } from "@/stores/mainStore"
import UserToFollowItem from "./UserToFollowItem.vue"
import axios from "axios"

export default {
    components: {
        UserToFollowItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            users: null
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/users`)
            .then(response => {
                this.users = response.data.data
            })
    }
}
</script>
