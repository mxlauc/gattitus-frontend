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
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()

</script>
<script>
import UserToFollowItem from "~/components/user/UserToFollowItem.vue"
import axios from "axios"

export default {
    components: {
        UserToFollowItem,
    },
    data () {
        return {
            users: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/users/discover`)
            .then(response => {
                this.users = response.data.data
            })
    }
}
</script>
<style scoped>
.user-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
