<template>
    <div>
        <InputSearch
            class="w-100 form-control my-4"
            placeholder="Buscar usuario"
            @on-search="onSearch" />
        <div class="row g-3 mx-0 mb-4">
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
        <button
            class="btn btn-primary d-block m-auto mb-5"
            v-if="!usersPaginate || usersPaginate.links.next"
            @click="loadMore">
            Cargar más resultados
        </button>
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
            params: "",
            users: [],
            usersPaginate: null
        }
    },
    mounted () {
        this.searchUsers()
    },
    methods: {
        onSearch (value) {
            this.params = value
            this.users = []
            this.searchUsers()
        },
        searchUsers (url = `${this.mainStore.backendUrl}/api/users/search?`) {
            axios.get(`${url}&q=${this.params}`)
                .then(response => {
                    this.usersPaginate = response.data
                    this.users = this.users.concat(this.usersPaginate.data)
                })
        },
        loadMore () {
            this.searchUsers(this.usersPaginate.links.next)
        }
    }
}
</script>
