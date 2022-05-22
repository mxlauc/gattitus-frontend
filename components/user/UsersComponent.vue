<template>
    <div>
        <InputSearch
            class="w-100 form-control my-4"
            placeholder="Buscar usuario"
            @on-search="onSearch" />
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
import { useMainStore } from "~/store/mainStore"
import UserToFollowItem from "~/components/user/UserToFollowItem.vue"
import InputSearch from "~/components/InputSearch.vue"
import axios from "axios"

export default {
    components: {
        UserToFollowItem,
        InputSearch,
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
    },
    methods: {
        onSearch (value) {
            console.log(value)
        }
    }
}
</script>
