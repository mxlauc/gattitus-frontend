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
const result = await fetchWithCookie(`${mainStore.backendUrl}/api/users`, "XSRF-TOKEN")
const users = result.data

</script>
<script>
import UserToFollowItem from "./UserToFollowItem.vue"


export default {
    components: {
        UserToFollowItem,
    },
    setup () {

    },
    data () {
        return {
            
        }
    },
    mounted () {
        
    }
}
</script>
<style scoped>
.user-item:not(:last-child){
    margin-bottom: 15px;
}
</style>
