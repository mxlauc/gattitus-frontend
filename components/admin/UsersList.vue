<template>
    users vistos por el admin
    <table
        border="1">
        <tr>
            <td><strong>id</strong></td>
            <td><strong>perfil</strong></td>
            <td><strong>nombre</strong></td>
            <td><strong>nombre de usuario</strong></td>
            <td><strong>url</strong></td>
            <td><strong>fecha de creacion</strong></td>
        </tr>
        <UserItem
            v-for="user in usersPaginate?.data"
            :key="user.username"
            :user="user" />
    </table>
    <div class="loading-container">
        <div class="loading-point" />
        <div class="loading-point" />
        <div class="loading-point" />
    </div>
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
<style>
    .loading-container{

    }
    .loading-point{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        float: left;
        background-color: rgb(255, 115, 0);
    }
    .loading-point:nth-child(1){
        animation: biggerAndSmaller 1s ease-in-out 0s infinite;
    }
    .loading-point:nth-child(2){
        animation: biggerAndSmaller 1s ease-in-out .33333s infinite;
    }
    .loading-point:nth-child(3){
        animation: biggerAndSmaller 1s ease-in-out .66666s infinite;
    }
    @keyframes biggerAndSmaller {
        0%{
            transform: scale(0.5);
        }
        50%{
            transform: scale(0.8);
        }
        100%{
            transform: scale(0.5);
        }
    }
</style>
