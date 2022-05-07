<template>
    <ol>
        <li
            v-for="p in pages"
            :key="p.id">
            <router-link :to="'/pages/' + p.slug">
                {{ p.title }}
            </router-link>
            <router-link :to="'/admin/pages/' + p.slug + '/edit'">
                editar
            </router-link>
        </li>
    </ol>
    <router-link
        :to="'/admin/pages/create'"
        class="btn btn-primary">
        Crear
    </router-link>
</template>
<script>
import { useMainStore } from "@/stores/mainStore"
import axios from "axios"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            pages: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pages`)
            .then(response => {
                this.pages = response.data
            })
    }
}
</script>
