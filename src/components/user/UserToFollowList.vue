<template>
    <h4>
        <strong>Usuarios que podrían interesarte</strong>
    </h4>
    <div class="card shadow-sm mb-3">
        <div class="card-body">
            <UserToFollowItem
                class="user-item"
                v-for="u in users"
                :key="u.id"
                :user="u" />
        </div>
    </div>
</template>
<script>
import UserToFollowItem from "./UserToFollowItem.vue"
import { useMainStore } from "@/stores/mainStore"
import axios from "axios"

export default {
    components: {
        UserToFollowItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore,
        }
    },
    data () {
        return {
            users: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/users`)
            .then(response => {
                this.users = response.data.data
                console.log(response.data.data)
            })
    }
}
</script>
<style scoped>
.user-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
