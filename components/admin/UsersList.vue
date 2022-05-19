<template>
    <table border="1">
        <thead>
            <tr>
                <td><strong>id</strong></td>
                <td><strong>perfil</strong></td>
                <td><strong>nombre</strong></td>
                <td><strong>nombre de usuario</strong></td>
                <td><strong>url</strong></td>
                <td><strong>fecha de creacion</strong></td>
            </tr>
        </thead>
        <tbody>
            <UserItem
                v-for="user in usersPaginate?.data"
                :key="user.username"
                :user="user" />
        </tbody>
    </table>
</template>
<script>
import UserItem from "~/components/admin/UserItem.vue"
import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    components: {
        UserItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            usersPaginate: null
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/admin/users`)
            .then(response => {
                this.usersPaginate = response.data
            })
    }
}
</script>
